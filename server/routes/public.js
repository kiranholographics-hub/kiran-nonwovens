import crypto from 'node:crypto';
import { Router } from 'express';

import { dbReady } from '../db.js';
import { rateLimit } from '../middleware/rateLimit.js';
import Market from '../models/Market.js';
import Visit from '../models/Visit.js';
import * as C from '../models/content.js';

const router = Router();

const needDb = (_req, res, next) =>
  dbReady() ? next() : res.status(503).json({ error: 'Not available' });

/** What the website's build downloads: only what is published / active. */
router.get('/content', needDb, async (_req, res, next) => {
  try {
    const published = { published: true };
    const hiddenMarkets = (await Market.find({ status: { $ne: 'active' } }).lean()).map((m) => m.slug);
    const [markets, pages, updates, testimonials, team, certifications] = await Promise.all([
      Market.find({ status: 'active' }).sort({ name: 1 }).lean(),
      C.Page.find(published).sort({ title: 1 }).lean(),
      C.Update.find({ ...published, publishedAt: { $lte: new Date() } }).sort({ publishedAt: -1 }).lean(),
      C.Testimonial.find(published).sort({ createdAt: -1 }).lean(),
      C.TeamMember.find(published).sort({ order: 1, name: 1 }).lean(),
      C.Certification.find(published).sort({ order: 1, name: 1 }).lean(),
    ]);
    const strip = ({ _id, __v, ...rest }) => rest; // eslint-disable-line no-unused-vars
    res.set('Cache-Control', 'no-store');
    res.json({
      markets: markets.map(strip),
      hiddenMarkets,
      pages: pages.map(strip),
      updates: updates.map(strip),
      testimonials: testimonials.map(strip),
      team: team.map(strip),
      certifications: certifications.map(strip),
    });
  } catch (err) {
    next(err);
  }
});

/** A page view from the website. No cookie, no IP stored. */
const BOT = /bot|crawl|spider|slurp|preview|monitor|curl|wget|headless/i;
router.post(
  '/visit',
  rateLimit({ windowMs: 60_000, max: 90 }),
  async (req, res) => {
    res.status(204).end();
    try {
      if (!dbReady() || !process.env.ADMIN_TOKEN_SECRET) return;
      const ua = req.get('user-agent') || '';
      if (BOT.test(ua)) return;
      let path = String(req.body?.path || '').split(/[?#]/)[0].slice(0, 200);
      if (!path.startsWith('/') || path.startsWith('/hq')) return;
      let referrer = '';
      try {
        const host = new URL(String(req.body?.referrer || '')).hostname.replace(/^www\./, '');
        if (host && host !== 'kirannonwovens.com') referrer = host.slice(0, 120);
      } catch {
        /* no usable referrer */
      }
      const day = new Date().toISOString().slice(0, 10);
      const visitor = crypto
        .createHash('sha256')
        .update(`${process.env.ADMIN_TOKEN_SECRET}|${req.ip}|${ua}|${day}`)
        .digest('hex')
        .slice(0, 16);
      await Visit.create({
        path,
        referrer,
        device: /mobi|android|iphone|ipad/i.test(ua) ? 'mobile' : 'desktop',
        visitor,
        day,
      });
    } catch (err) {
      console.error('[visit]', err.message);
    }
  }
);

export default router;
