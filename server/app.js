import express from 'express';
import cors from 'cors';

import productRoutes from './routes/products.js';
import businessAreaRoutes from './routes/businessAreas.js';
import enquiryRoutes from './routes/enquiries.js';
import adminRoutes from './routes/admin.js';
import publicRoutes from './routes/public.js';
import { dbReady, waitForDb } from './db.js';
import { rateLimit } from './middleware/rateLimit.js';

export function createApp() {
  const app = express();

  app.disable('x-powered-by');
  app.set('trust proxy', 1);

  // Baseline hardening headers. This API only ever returns JSON, so it can be
  // strict: nothing here should be framed, sniffed or treated as a page.
  app.use((_req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('Referrer-Policy', 'no-referrer');
    res.setHeader('Cross-Origin-Resource-Policy', 'same-site');
    res.setHeader('Content-Security-Policy', "default-src 'none'; frame-ancestors 'none'");
    next();
  });

  app.use(express.json({ limit: '64kb' }));

  const allowed = (process.env.CORS_ORIGIN || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  if (!allowed.length && process.env.NODE_ENV === 'production') {
    console.warn(
      '[api] CORS_ORIGIN is empty in production — every website origin can call this API. Set it to your site\'s origin.'
    );
  }
  app.use(
    cors({
      origin: allowed.length ? allowed : true,
      methods: ['GET', 'POST', 'PATCH', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    })
  );

  // Give a freshly started app a moment to reach the database before any API
  // route (health included) decides it is unavailable.
  app.use('/api', async (_req, _res, next) => {
    await waitForDb();
    next();
  });

  app.get('/api/health', (_req, res) =>
    res.json({ ok: true, db: dbReady() ? 'connected' : 'disconnected' })
  );

  // Reads are cheap; a generous cap just stops a runaway client. Enquiries
  // save + email, so they get a tight one (override with the env vars below).
  app.use(
    '/api',
    rateLimit({
      windowMs: 60_000,
      max: Number(process.env.RATE_API_MAX || 240),
    })
  );
  app.use(
    '/api/enquiries',
    rateLimit({
      windowMs: Number(process.env.RATE_ENQUIRY_WINDOW_MS || 15 * 60_000),
      max: Number(process.env.RATE_ENQUIRY_MAX || 5),
      message:
        'You have sent several enquiries in a short time. Please wait a few minutes, or email us directly.',
    })
  );

  app.use('/api/products', productRoutes);
  app.use('/api/business-areas', businessAreaRoutes);
  app.use('/api/enquiries', enquiryRoutes);
  app.use('/api/public', publicRoutes);
  app.use('/api/admin', adminRoutes);

  app.use((_req, res) => res.status(404).json({ error: 'Not found' }));

  // eslint-disable-next-line no-unused-vars
  app.use((err, _req, res, _next) => {
    // A malformed or oversized body is the client's mistake, not a server fault.
    if (err?.type === 'entity.parse.failed') {
      return res.status(400).json({ error: 'The request body is not valid JSON.' });
    }
    if (err?.type === 'entity.too.large') {
      return res.status(413).json({ error: 'The request is too large.' });
    }
    console.error('[api]', err);
    res.status(500).json({ error: 'Something went wrong' });
  });

  return app;
}
