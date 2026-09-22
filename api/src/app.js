import express from 'express';
import cors from 'cors';

import productRoutes from './routes/products.js';
import businessAreaRoutes from './routes/businessAreas.js';
import enquiryRoutes from './routes/enquiries.js';
import { dbReady } from './db.js';

export function createApp() {
  const app = express();

  app.disable('x-powered-by');
  app.set('trust proxy', 1);
  app.use(express.json({ limit: '64kb' }));

  const allowed = (process.env.CORS_ORIGIN || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  app.use(
    cors({
      origin: allowed.length ? allowed : true,
      methods: ['GET', 'POST'],
    })
  );

  app.get('/api/health', (_req, res) =>
    res.json({ ok: true, db: dbReady() ? 'connected' : 'disconnected' })
  );

  app.use('/api/products', productRoutes);
  app.use('/api/business-areas', businessAreaRoutes);
  app.use('/api/enquiries', enquiryRoutes);

  app.use((_req, res) => res.status(404).json({ error: 'Not found' }));

  // eslint-disable-next-line no-unused-vars
  app.use((err, _req, res, _next) => {
    console.error('[api]', err);
    res.status(500).json({ error: 'Something went wrong' });
  });

  return app;
}
