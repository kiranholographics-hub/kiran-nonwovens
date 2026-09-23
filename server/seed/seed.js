import 'dotenv/config';
import path from 'node:path';
import { existsSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import mongoose from 'mongoose';

import Product from '../models/Product.js';
import BusinessArea from '../models/BusinessArea.js';
import { connectDb } from '../db.js';

const here = path.dirname(fileURLToPath(import.meta.url));

/**
 * The catalogue lives in the client (`client/src/data/catalog.js`) so
 * the site can render it with no database. This script imports that same file
 * rather than keeping a second copy that would drift out of sync.
 */
const CATALOG = path.resolve(here, '../../client/src/data/catalog.js');

async function loadCatalog() {
  if (!existsSync(CATALOG)) {
    throw new Error(
      `Catalogue not found at ${CATALOG}.\n` +
        'Run this from inside the repo — the seed reads the web app\'s catalogue file.'
    );
  }
  return import(pathToFileURL(CATALOG).href);
}

async function run() {
  const connected = await connectDb();
  if (!connected) {
    throw new Error('MONGODB_URI is not set — nothing to seed into.');
  }

  const { businessAreas, products } = await loadCatalog();

  for (const [i, area] of businessAreas.entries()) {
    await BusinessArea.findOneAndUpdate(
      { slug: area.slug },
      { ...area, order: i },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
  }
  console.log(`[seed] business areas upserted: ${businessAreas.length}`);

  // Order products within their business area, following catalogue order.
  const perCategory = new Map();
  for (const product of products) {
    const order = perCategory.get(product.category) ?? 0;
    perCategory.set(product.category, order + 1);
    await Product.findOneAndUpdate(
      { slug: product.slug },
      { ...product, order },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
  }
  console.log(`[seed] products upserted: ${products.length}`);

  // Anything in the database that is no longer in the catalogue is stale.
  const slugs = products.map((p) => p.slug);
  const removed = await Product.deleteMany({ slug: { $nin: slugs } });
  if (removed.deletedCount) {
    console.log(`[seed] stale products removed: ${removed.deletedCount}`);
  }

  await mongoose.disconnect();
  console.log('[seed] done');
}

run().catch(async (err) => {
  console.error('[seed] failed:', err.message);
  await mongoose.disconnect().catch(() => {});
  process.exit(1);
});
