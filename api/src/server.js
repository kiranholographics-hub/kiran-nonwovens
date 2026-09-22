import 'dotenv/config';
import { createApp } from './app.js';
import { connectDb } from './db.js';

const PORT = Number(process.env.PORT || 4100);

// Boot the HTTP server even if Mongo is unreachable — routes answer 503 until
// it connects, which keeps the health check useful during setup.
connectDb().catch((err) =>
  console.error('[db] connection failed:', err.message)
);

createApp().listen(PORT, () => {
  console.log(`[api] Kiran Nonwovens API listening on http://localhost:${PORT}`);
});
