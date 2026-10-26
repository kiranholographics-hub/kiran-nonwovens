# SEO log (Kiran Nonwovens)

One entry per session: date, what changed, what is pending. Newest first.
Daily routine: KIRAN-SEO-PLAYBOOK.md (from 26 Oct 2026). Older notes: SEO-ROUTINE.md.

**Tech stack:** React 19 + Vite 8 SPA in `client/`, prerendered to static HTML by
`client/scripts/prerender.mjs` (also writes `sitemap.xml` and `robots.txt`; `<lastmod>` comes from
each page's data). Pages: `client/src/pages/*.jsx`. Guides: `client/src/data/guides.js` (rendered by
`pages/Guide.jsx`). Titles/descriptions/category copy and FAQs: `client/src/data/seo.js`; meta tags
and JSON-LD via `components/Seo.jsx` + helpers in `src/lib.js`. Products and areas come from the
live API (MongoDB, `server/`) with `data/catalog.js` as fallback. Updates are added in /hq.
Build: `ALLOW_LOCAL_BUILD=1 npm run build` then `npm run smoke` in `client/`. Deploy: GitHub
Actions `.github/workflows/deploy.yml` on push to main and daily at 19:00 IST; IndexNow pings Bing.
Note: a local build writes `localhost` into robots.txt/sitemap (no VITE_SITE_URL); the deployed
build uses the real domain (checked live 26 Oct).

## Pending for owner
- [ ] Search Console: paste last 28 days (Queries + Pages: clicks, impressions, CTR, position) for the Monday review
- [ ] TradeIndia: GST, year of establishment, export markets, photos; then paste and send the profile URL
- [ ] Google Business Profile verification (office board, then video verification)
- [ ] Go-ahead before a test enquiry is sent through the contact form
- [ ] Domain email (e.g. export@kirannonwovens.com) instead of Gmail
- [ ] Real proof for the site: factory/machine photos, test reports, certifications if held, GST/IEC
- [ ] MOQ, lead time, packing details (needed for the Tuesday product-page upgrades)

## On-page check progress
- 26 Oct: all 73 built pages scanned by script (one H1, title, description, canonical, alt,
  related links, enquiry link). Results in the 26 Oct entry below. Next: manual read of 3 pages a
  day for content quality, starting with the 16 product pages.

## 26 Oct 2026 (Monday, second session: playbook day 1)
- Build: OK, 73 pages, smoke passed, lint clean on changed files.
- On-page scan (all pages): one H1, canonical, unique title everywhere. Content images have
  descriptive alt; images without alt are decorative (logo, video poster) and correctly use alt="".
  Images have no width/height attributes, but they are absolutely positioned inside boxes with a
  fixed aspect ratio, so there is no layout shift. No change needed.
- Fixed: /products and the 4 product category pages (/products/geotextile, /automotive,
  /apparel-footwear, /industrial) had no enquiry link in the page content (only in the header).
  Added a "Get quote" button to their hero, same as the business-area and product pages.
- Not changed: /contact, /guides, /business-areas hubs have no in-content quote link (contact is the
  form itself; hubs are fine). 11 titles at 61-65 characters stay as decided in the earlier entry.
- Sitemap: 73 URLs, every page has `<lastmod>`. robots.txt blocks only /hq.
- Search Console review (Monday): no new data pasted yet, see Pending.

## 26 Oct 2026 (Monday: weekly check + daily)

**Weekly live check (kirannonwovens.com)**
- All 73 sitemap URLs return 200; sitemap count 73 matches the build.
- Unknown URL returns 404. www and http redirect (301) to https://kirannonwovens.com/.
- Every page has its own canonical (equal to its URL) and exactly one H1.
- /updates returns 404 on purpose: the page is only built once the first update exists.
- Contact form: not tested (a test enquiry needs the owner's go-ahead).
- Product schema has no offers/price by design (no prices are published), so product rich
  results are not expected.

**Changed (PR, not merged)**
- Technical: two meta descriptions trimmed under 160 characters (/products,
  /guides/geotextile-roll-weight-and-coverage).
- Content: one FAQ added to the Apparel & Footwear category (matching a current fabric) and one
  to Industrial (samples on request). Both use facts already on the site.
- Off-site draft: offsite-drafts/2026-10-26-tradeindia.md (TradeIndia company profile, written
  differently from the IndiaMART text).

**Backlog**
- 11 titles are 61-63 characters. Left as they are: Google cuts by pixel width, and several of
  these pages are already getting impressions. Revisit only if Search Console shows truncation.

**Pending (owner)**
- Search Console numbers for the weekly review (see the checklist in the session reply).
- TradeIndia: GST, year of establishment, export markets, photos [confirm]; then paste and send
  the profile URL.
- Google Business Profile verification (office board, then video verification).
- Go-ahead before a test enquiry is sent through the contact form.
