import { Router } from 'express';

import { adminConfigured, checkLogin, requireAdmin, signToken } from '../auth.js';
import { dbReady } from '../db.js';
import { rateLimit } from '../middleware/rateLimit.js';
import Enquiry from '../models/Enquiry.js';
import Market, { REGIONS } from '../models/Market.js';
import Visit from '../models/Visit.js';
import * as C from '../models/content.js';

const router = Router();

/* ── Login ───────────────────────────────────────────────────────────── */
router.post(
  '/login',
  rateLimit({
    windowMs: 15 * 60_000,
    max: 10,
    message: 'Too many sign-in attempts. Please wait a few minutes.',
  }),
  (req, res) => {
    if (!adminConfigured()) {
      return res.status(503).json({ error: 'The admin panel is not set up on this server.' });
    }
    if (!checkLogin(req.body?.email, req.body?.password)) {
      return res.status(401).json({ error: 'Email or password is not right.' });
    }
    res.json({ token: signToken(String(process.env.ADMIN_EMAIL).trim()) });
  }
);

router.use(requireAdmin);
router.get('/me', (req, res) => res.json({ email: req.admin.email, regions: REGIONS }));
router.use((_req, res, next) =>
  dbReady() ? next() : res.status(503).json({ error: 'The database is not connected.' })
);


/* ── helpers ─────────────────────────────────────────────────────────── */
const text = (v, max) => String(v ?? '').trim().slice(0, max);
const isId = (id) => /^[a-f0-9]{24}$/i.test(String(id));

const handle = (fn) => async (req, res, next) => {
  try {
    await fn(req, res);
  } catch (err) {
    if (err?.code === 11000) return res.status(409).json({ error: 'That address (slug) is already used.' });
    if (err?.name === 'ValidationError') {
      const msg = Object.values(err.errors)[0]?.message || 'Some fields are not valid.';
      return res.status(400).json({ error: msg });
    }
    next(err);
  }
};

/* ── Markets ─────────────────────────────────────────────────────────── */
const marketBody = (b = {}) => {
  const out = {};
  if (b.name !== undefined) out.name = text(b.name, 80);
  if (b.code !== undefined) out.code = text(b.code, 3).toUpperCase();
  if (b.slug !== undefined) out.slug = text(b.slug, 60).toLowerCase();
  if (b.status !== undefined) out.status = String(b.status);
  if (b.region !== undefined) out.region = String(b.region);
  if (b.note !== undefined) out.note = text(b.note, 600);
  if (b.ports !== undefined) {
    const list = Array.isArray(b.ports) ? b.ports : String(b.ports).split(',');
    out.ports = list.map((p) => text(p, 60)).filter(Boolean).slice(0, 8);
  }
  return out;
};

router.get('/markets', handle(async (_req, res) => {
  res.json(await Market.find().sort({ name: 1 }));
}));
router.post('/markets', handle(async (req, res) => {
  res.status(201).json(await Market.create(marketBody(req.body)));
}));
router.patch('/markets/:id', handle(async (req, res) => {
  if (!isId(req.params.id)) return res.status(404).json({ error: 'Not found' });
  const doc = await Market.findByIdAndUpdate(req.params.id, marketBody(req.body), {
    new: true,
    runValidators: true,
  });
  doc ? res.json(doc) : res.status(404).json({ error: 'Not found' });
}));
router.delete('/markets/:id', handle(async (req, res) => {
  if (!isId(req.params.id)) return res.status(404).json({ error: 'Not found' });
  await Market.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
}));

/* ── Enquiries ───────────────────────────────────────────────────────── */
router.get('/enquiries', handle(async (_req, res) => {
  const rows = await Enquiry.find().sort({ createdAt: -1 }).limit(300);
  res.json(rows);
}));
router.patch('/enquiries/:id', handle(async (req, res) => {
  if (!isId(req.params.id)) return res.status(404).json({ error: 'Not found' });
  const set = {};
  if (['new', 'contacted', 'quoted', 'closed'].includes(req.body?.status)) {
    set.status = req.body.status;
  }
  if (req.body?.note !== undefined) set.note = text(req.body.note, 2000);
  const doc = await Enquiry.findByIdAndUpdate(req.params.id, set, { new: true });
  doc ? res.json(doc) : res.status(404).json({ error: 'Not found' });
}));
router.delete('/enquiries/:id', handle(async (req, res) => {
  if (!isId(req.params.id)) return res.status(404).json({ error: 'Not found' });
  await Enquiry.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
}));

/* ── Visitors ────────────────────────────────────────────────────────── */
const dayKey = (d) => d.toISOString().slice(0, 10);

router.get('/visits', handle(async (_req, res) => {
  const now = new Date();
  const since = (n) => dayKey(new Date(now.getTime() - (n - 1) * 86400000));
  const [d1, d7, d30] = [since(1), since(7), since(30)];
  const count = async (from) => ({
    views: await Visit.countDocuments({ day: { $gte: from } }),
    visitors: (await Visit.distinct('visitor', { day: { $gte: from } })).length,
  });
  const top = (field, from) =>
    Visit.aggregate([
      { $match: { day: { $gte: from }, ...(field === 'referrer' ? { referrer: { $ne: '' } } : {}) } },
      { $group: { _id: `$${field}`, views: { $sum: 1 } } },
      { $sort: { views: -1 } },
      { $limit: 10 },
    ]);
  const series = await Visit.aggregate([
    { $match: { day: { $gte: since(14) } } },
    { $group: { _id: '$day', views: { $sum: 1 }, visitors: { $addToSet: '$visitor' } } },
    { $project: { views: 1, visitors: { $size: '$visitors' } } },
    { $sort: { _id: 1 } },
  ]);
  const total = await Visit.countDocuments();
  const countries = (
    await Visit.aggregate([
      { $group: { _id: '$country', views: { $sum: 1 } } },
      { $sort: { views: -1 } },
      { $limit: 25 },
    ])
  ).map((r) => ({ country: r._id || 'Unknown', views: r.views }));
  const topCountry = countries.find((c) => c.country !== 'Unknown')?.country || '';
  res.json({
    total,
    countries,
    topCountry,
    today: await count(d1),
    week: await count(d7),
    month: await count(d30),
    pages: (await top('path', d30)).map((r) => ({ path: r._id, views: r.views })),
    referrers: (await top('referrer', d30)).map((r) => ({ referrer: r._id, views: r.views })),
    devices: await Visit.aggregate([
      { $match: { day: { $gte: d30 } } },
      { $group: { _id: '$device', views: { $sum: 1 } } },
    ]),
    series: series.map((r) => ({ day: r._id, views: r.views, visitors: r.visitors })),
  });
}));

/* ── Content (pages, updates, testimonials, team, certifications) ───── */
export const CONTENT = {
  pages: { model: C.Page, fields: ['title', 'slug', 'metaDescription', 'body', 'published'], sort: { title: 1 } },
  updates: { model: C.Update, fields: ['title', 'slug', 'excerpt', 'body', 'coverImage', 'published', 'publishedAt'], sort: { publishedAt: -1 } },
  testimonials: { model: C.Testimonial, fields: ['name', 'role', 'company', 'country', 'quote', 'published'], sort: { createdAt: -1 } },
  team: { model: C.TeamMember, fields: ['name', 'role', 'bio', 'photo', 'order', 'published'], sort: { order: 1, name: 1 } },
  certifications: { model: C.Certification, fields: ['name', 'issuer', 'description', 'order', 'published'], sort: { order: 1, name: 1 } },
};

const LIMITS = { body: 30000, bio: 1200, quote: 1200, description: 600, excerpt: 300, metaDescription: 165 };

const contentBody = (fields, b = {}) => {
  const out = {};
  for (const f of fields) {
    if (b[f] === undefined) continue;
    if (f === 'published') out[f] = Boolean(b[f]);
    else if (f === 'order') out[f] = Number.isFinite(Number(b[f])) ? Number(b[f]) : 0;
    else if (f === 'publishedAt') {
      const d = new Date(b[f]);
      if (!Number.isNaN(d.getTime())) out[f] = d;
    } else if (f === 'slug') out[f] = text(b[f], 80).toLowerCase();
    else out[f] = text(b[f], LIMITS[f] || 300);
  }
  return out;
};

for (const [key, { model, fields, sort }] of Object.entries(CONTENT)) {
  router.get(`/${key}`, handle(async (_req, res) => res.json(await model.find().sort(sort))));
  router.post(`/${key}`, handle(async (req, res) =>
    res.status(201).json(await model.create(contentBody(fields, req.body)))
  ));
  router.patch(`/${key}/:id`, handle(async (req, res) => {
    if (!isId(req.params.id)) return res.status(404).json({ error: 'Not found' });
    const doc = await model.findByIdAndUpdate(req.params.id, contentBody(fields, req.body), {
      new: true,
      runValidators: true,
    });
    doc ? res.json(doc) : res.status(404).json({ error: 'Not found' });
  }));
  router.delete(`/${key}/:id`, handle(async (req, res) => {
    if (!isId(req.params.id)) return res.status(404).json({ error: 'Not found' });
    await model.findByIdAndDelete(req.params.id);
    res.json({ ok: true });
  }));
}

export default router;
