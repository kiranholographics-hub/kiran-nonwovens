# Kiran Nonwovens server

Express 5 + Mongoose — the "E", "M" and "N" of the stack.

Express 5 + Mongoose. Serves the product catalogue and receives enquiries.

```bash
npm install
cp .env.example .env     # MONGODB_URI at minimum
npm run seed             # load the catalogue into MongoDB
npm run dev              # http://localhost:4100
```

Port **4100**, clear of the towels & linen backend on 4000. Use a **separate
MongoDB database** from that site.

## Routes

| Method | Route | Returns |
| --- | --- | --- |
| GET | `/api/health` | `{ ok, db }` — works without a database |
| GET | `/api/products` | all products |
| GET | `/api/products/:slug` | one product |
| GET | `/api/products/category/:category` | products in a business area |
| GET | `/api/business-areas` | all business areas |
| GET | `/api/business-areas/:slug` | one area, with its products |
| POST | `/api/enquiries` | saves to MongoDB, then emails the export team |

The server boots even when MongoDB is unreachable: data routes answer `503` and
`/api/health` reports `db: "disconnected"`, so a bad connection string is
obvious rather than silent.

## Seeding

`npm run seed` imports `../client/src/data/catalog.js` — the same file the site
falls back to — and upserts it by slug, so re-running is safe and never
duplicates. Products no longer in the catalogue are removed.

## Enquiries

`POST /api/enquiries` requires `name` and a well-formed `email`; everything
else (company, phone, country, product, fibre, GSM, width, thickness, colour,
quantity, message) is optional and carried through to the export team. Unknown
fields are dropped, values are length-capped, and a hidden honeypot field
silently absorbs bots.

**The save is the commitment, the email is best-effort.** An enquiry is written
to MongoDB first; if SMTP is unconfigured or the send fails, the API still
returns success and the enquiry is safe in the database (with `notified:
false`). Leave `SMTP_HOST` blank to skip mail entirely.

## Models

`Product`, `BusinessArea`, `Enquiry` in `models/`. Two fields on `Product`
are worth knowing:

- `specsConfirmed` — `false` while the GSM range shown is the plant's full
  capability rather than a range confirmed for that product. The site prints a
  caveat under those rows while it is false.
- `draft` — `true` while the copy is awaiting sign-off.

See `../OWNER_INPUTS.md`.
