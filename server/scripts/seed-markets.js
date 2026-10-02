// Loads the 26 export markets from the website's data file into MongoDB, so
// they can be managed in the /hq panel. Safe to run again: existing markets
// (matched by slug) are left alone.
//
//   cd server && npm run seed:markets
import 'dotenv/config';
import mongoose from 'mongoose';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

import { connectDb } from '../db.js';
import Market from '../models/Market.js';

const CODES = {
  'usa': 'US', 'canada': 'CA', 'mexico': 'MX', 'south-america': 'SA', 'brazil': 'BR',
  'chile': 'CL', 'colombia': 'CO', 'peru': 'PE', 'uk': 'GB', 'germany': 'DE',
  'netherlands': 'NL', 'france': 'FR', 'spain': 'ES', 'italy': 'IT', 'sweden': 'SE',
  'norway': 'NO', 'denmark': 'DK', 'poland': 'PL', 'uae': 'AE', 'saudi-arabia': 'SA',
  'qatar': 'QA', 'oman': 'OM', 'japan': 'JP', 'south-korea': 'KR', 'australia': 'AU',
  'new-zealand': 'NZ', 'south-africa': 'ZA',
};

const file = path.resolve(import.meta.dirname, '../../client/src/data/markets.js');
const { STATIC_MARKETS } = await import(pathToFileURL(file).href);

if (!(await connectDb())) {
  console.error('Set MONGODB_URI in server/.env first.');
  process.exit(1);
}
let added = 0;
for (const m of STATIC_MARKETS) {
  const slug = m.slug.replace(/-nonwoven-felt-supplier$/, '');
  const found = await Market.findOne({ slug });
  if (found) continue;
  await Market.create({
    name: m.name,
    code: CODES[slug] || slug.slice(0, 2).toUpperCase(),
    slug,
    region: m.region,
    ports: m.ports,
    note: '',
    status: 'active',
  });
  added += 1;
}
console.log(`Added ${added} market(s); ${STATIC_MARKETS.length - added} already existed.`);
await mongoose.disconnect();
