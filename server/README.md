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

## Admin panel (/hq)

The website has an admin panel at `https://<your site>/hq` (Markets, Enquiries,
Visitors, Updates, Pages, Testimonials, Team, Certifications). It talks to this
API under `/api/admin/*`.

**Set up the login (once):**

1. `cd server && npm run admin:hash -- "a long password of your own"`
2. Put the three printed lines (`ADMIN_EMAIL`, `ADMIN_PASSWORD_HASH`,
   `ADMIN_TOKEN_SECRET`) in the server's environment (Render/Railway or
   `server/.env`) and restart the API.
3. Open `/hq` on the website and sign in.

If any of the three is missing the panel stays switched off.

**Load the 27 export markets so you can edit them** (optional):
`npm run seed:markets`. It is safe to run again.

**What is live and what needs a rebuild:** Enquiries and Visitors are live.
Markets, Updates, Pages, Testimonials, Team and Certifications are downloaded
when the website is built (`npm run build` in `client`, which reads
`VITE_API_URL`), so they appear on the site after you rebuild and upload it.
The 27 built-in markets always stay on the site unless you pause them in the
panel. If the API cannot be reached at build time, the site builds from its
built-in content.

**Routes**

| Route | Who | What |
|---|---|---|
| `POST /api/admin/login` | anyone (rate-limited) | returns a 12-hour token |
| `/api/admin/*` | signed-in owner | markets, enquiries, visits, pages, updates, testimonials, team, certifications |
| `GET /api/public/content` | anyone | what is published, for the website build |
| `POST /api/public/visit` | the website | counts a page view (no cookie, no IP stored) |

### Pages and Updates text

The text boxes for Pages and Updates take a small markup (the panel has a
toolbar for it): `## Heading`, `### Sub-heading`, `- bullet`, `1. numbered`,
`**bold**`, `[text](/page)` or `[text](https://…)`, and `![description](image
address)`. A blank line starts a new paragraph. Nothing is treated as HTML.

Images are uploaded from the same toolbar (JPEG, PNG or WebP, up to 3 MB). They
are stored in MongoDB and served from `GET /api/public/media/<id>`, so they
survive redeploys. The file's first bytes are checked, so SVG and other
non-image uploads are refused.
