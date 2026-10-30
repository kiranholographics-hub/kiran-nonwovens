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
- [x] MOQ, lead time, packing details: answered 26 Oct, see OWNER_INPUTS.md section 13
- [x] Confirmed 26 Oct: standard roll 50 m; samples free everywhere, delivery time depends on location

## On-page check progress
- 26 Oct: all 73 built pages scanned by script (one H1, title, description, canonical, alt,
  related links, enquiry link). Results in the 26 Oct entry below. Next: manual read of 3 pages a
  day for content quality, starting with the 16 product pages.
- 27 Oct: products/geotextile/pp-geotextile-fabric-for-civil-works,
  drainage-soil-erosion-control-geotextile, filter-geo-bag-felt
- 28 Oct: pipeline-cable-protection-geotextile, acoustic-thermal-insulation-felt, nvh-sound-insulation-fabric
- 29 Oct: carpet-backing-felt, customised-nonwoven-solutions, flooring-underlay-felt
- Next: luggage-bag-support-felt, multi-colour-needle-punched-felt, orthopaedic-cast-padding

## Product page upgrades (Tuesdays)
- 27 Oct: pp-geotextile-fabric-for-civil-works (4 product FAQs). Ordering terms on all 16.

## 30 Oct 2026 (Friday: export page)

- /exports/middle-east-nonwoven-felt-supplier: new "Geotextile and felt on Gulf sites" section
  (UV and storage, sabkha and loose sand, local use vs re-export through Jebel Ali), linking the
  fibre, road GSM and HS code guides; two Gulf-only FAQs (roll storage on site, geotextile over
  sabkha). Region-specific content lives in `context` / `faqs` on REGION_PAGES in markets.js.
- All six region pages: ordering terms table (MOQ per order, 4–5 days to dispatch, 50 m roll,
  packing, free samples), a dispatch FAQ, MOQ and sample FAQs brought in line with the owner's
  answers (samples were still "on request").
- Next Fridays: give Europe, then Africa, their own `context` section the same way.
- GBP checked in Chrome: Kiran Nonwovens profile exists, address matches the site, status
  "Verification required". Owner is doing the video verification and creating IndiaMART,
  TradeIndia and LinkedIn accounts.

## 30 Oct 2026 (owner asked: research what replaced SEO, get the site ready)
- Research (web, Oct 2026): SEO has not been replaced. AEO (your passage used as the answer in
  AI Overviews / AI Mode) and GEO (brand named in ChatGPT, Gemini, Perplexity) are layers on top.
  AI Mode splits a question into many sub-queries ("query fan-out"), so subtopic coverage with
  clear headings and FAQs helps. Google needs no special schema for AI features.
- Status vs the site: done before today: prerendered HTML, robots open to AI crawlers (Bing live
  test OK), FAQs on every page, comparison tables, Article/Organization/LocalBusiness/Product
  schema, freshness dates, named author, llms.txt, IndexNow, Bing + GSC AI reports as baseline.
- Done today: "Key points" box (answer-first, 3-4 bullets) at the top of 7 guides with
  impressions or high intent: nonwoven-geotextile-guide, polyester-vs-polypropylene,
  needle-punched-vs-thermal-bonded, gsm-in-nonwoven-fabric, geotextile-gsm-for-road-construction-india,
  automotive-nvh-felt-guide, woven-vs-nonwoven-geotextile. Facts only from each guide's own text.
  Optional `keyPoints` field; Hindi label "मुख्य बातें".
- Still needs the owner (GEO is mostly off-site): profile URLs for Organization sameAs
  (LinkedIn, IndiaMART, TradeIndia, Google Business Profile, YouTube); listings live; real photos.

## 29 Oct 2026 (Thursday, later: "new techniques" request)
- Research (web, Oct 2026): Google says AI search optimisation is still SEO; since 15 May 2026
  manipulating AI answers is spam. Useful items: AI crawlers can read the site, visible freshness,
  real authors, third-party mentions, Search Console's new AI-features report, Bing's AI
  Performance report. llms.txt is optional with unproven value.
- Done: guides now carry an `updated` date (set by hand only when content changed) used for
  dateModified and shown as "Updated 28 Oct 2026" (else "Published ..."). Set on 5 guides
  edited 27-28 Oct. Before this, dateModified always equalled datePublished.
- Done: /llms.txt generated at build from the catalogue and guides (company summary, 16 products,
  all guides, company pages). Not written for noindex staging builds.
- Check: requests faking Bingbot got 403 and GPTBot 429 from Hostinger. Likely bot protection
  against spoofed user agents from a normal IP, not proof the real crawlers are blocked.
  Verify with Bing Webmaster Tools URL Inspection (live test).
  Checked same day: Bing live test on /guides/woven-vs-nonwoven-geotextile says "URL can be
  indexed by Bing", so the real Bingbot gets through. The guide was "Discovered but not
  crawled" (found 29 Oct); Bing indexing requested (quota 100 a day). Bing notice: 1 image with
  empty alt (the decorative logo/poster; alt="" is correct for decoration, left as is).
- Owner confirmed office days (29 Oct): Monday to Saturday, 10:00-18:00. Shown on /contact and
  added to LocalBusiness as openingHoursSpecification (/contact and /india).
- Bing AI Performance (Copilot citations), 25-26 Oct: 0 citations, 0 cited pages. Baseline;
  recheck weekly.
- Merged as PR #62; live: /llms.txt 200 text/plain, guide dates showing.
- Author (owner, 29 Oct): guides now say "By Ranjeet Sharma" and Article author is a Person
  (worksFor Kiran Nonwovens). Role and years of experience still to confirm; not shown until then.

## 29 Oct 2026 (Thursday: schema and technical)
- Hosting changed 28 Oct (PR #53): one Hostinger Node app builds from GitHub main; FTP deploy gone.
- Build: OK, 77 pages (other sessions added /needle-punched-felt-india, Incoterms and export
  documents guides), smoke passed, lint clean on changed files.
- Schema audit, all 77 pages (script): every JSON-LD block parses; BreadcrumbList on every inner
  page; Organization + WebSite on home; Article on all 36 guides with datePublished,
  dateModified, author and image; FAQPage only where the FAQ text is on the page; Product on all
  16 products. NAP in schema matches section 0 exactly.
- Fixed: /contact had only a bare ContactPage. Added a shared localBusinessLd() (lib.js) with
  @id /#office, address, phone, email and parentOrganization -> /#organization; used on /contact
  and /india (replacing the hand-built copy there). ContactPage now says it is about the
  Organization. Opening hours left out: the site shows 10:00-6:00 but not the days.
- Decision on "Product snippets: invalid" (Search Console): keep Product markup without offers,
  review or rating. Google needs one of those for product rich results, and we publish no price
  and have no real reviews. It does not block indexing. Revisit only if the owner publishes a
  price or collects real reviews.
- Core Web Vitals basics: hero posters 45-84 KB (fine); videos load after the page. Backlog:
  product/area photos are ~200 KB JPGs (WebP would roughly halve them; needs an image tool such
  as sharp, none installed); all code is one 648 KB JS file (code-split the guides data).
- On-page (manual): carpet-backing-felt, customised-nonwoven-solutions, flooring-underlay-felt.
  All fine. Titles of carpet backing (37 chars) and flooring underlay (40) are short and could
  carry "needle punched"; product titles come from MongoDB, so change them in /hq or the DB,
  not only in catalog.js.

## 28 Oct 2026 (Wednesday: new content, gap only)
- 10:00 reminder task ran; Chrome was not connected, so indexing was not requested by it.
- Build: OK, 74 pages, smoke passed, lint clean.
- On-page (manual): pipeline-cable-protection-geotextile, acoustic-thermal-insulation-felt,
  nvh-sound-insulation-fabric. One H1, titles 54–58, descriptions 151–155, industry link,
  2+ guides, enquiry form. No fixes needed.
- New guide: /guides/woven-vs-nonwoven-geotextile (playbook backlog "woven vs nonwoven";
  no page covered it, only one FAQ in the drainage guide). How each is made, comparison
  table, which for which job, why same GSM is not equal, what to specify, what we supply
  (nonwoven only; says plainly when a woven is better). 5 FAQs. General knowledge only; no
  test values or compliance claims.
- Linked from: drainage guide FAQ, nonwoven geotextile guide, road construction guide
  (related guides), and the guide list on all 4 geotextile product FAQs (except filter
  geo bag, which has its own list). /guides lists it automatically.
- Sitemap 74 URLs; robots unchanged.
- Merged as PR #52; deploy OK, new guide live (200, in sitemap, links live).
- Search Console (Claude via Chrome): Request indexing for the new guide, drainage guide,
  nonwoven geotextile guide, road construction guide and the Hindi guide. The new guide and
  /guides/non-woven-geotextile-hindi were "unknown to Google"; the other three are indexed.
- Deploys: runs #46 (PR #50) and #48 failed with "The FTP upload failed" (Hostinger FTP).
  The next deploy succeeded each time, so the site is current, but a failed run can leave a
  deploy half-uploaded. Watch the Actions tab after each merge; if it fails twice in a row,
  check the FTP_USERNAME / FTP_PASSWORD secrets against hPanel.

## 27 Oct 2026 (Tuesday: product page upgrade)
- Build: OK, 73 pages, smoke passed, lint clean on changed files.
- Ordering terms on the site (owner, 26 Oct; OWNER_INPUTS.md §13), from one constant
  `ORDERING` in client/src/data/catalog.js. The live API cannot override it, so the terms
  stay after the page loads products from MongoDB:
  - Every product page: roll length row in the spec table now "50 m standard; other lengths
    on request"; new "Ordering" tab (minimum order, lead time 4–5 days, roll length, packing,
    free samples); new FAQ "minimum order and lead time"; sample FAQ says samples are free.
    Product schema gets a "Roll length" property.
  - /india FAQ: roll length, free samples, new "How quickly can you dispatch" question.
  - Guides: "length set to your order" replaced with the 50 m standard roll (5 guides); sample
    answers in the geotextile and RFQ guides now say free. Roll weight guide: new "Our standard
    50 m roll" section (250/260 m², weights at 100–600 GSM) and a 50 m FAQ.
- Upgrade: /products/geotextile/pp-geotextile-fabric-for-civil-works gets four buyer FAQs
  (GSM for roads, m² per roll, cutting narrower, virgin vs recycled PP), each linking a guide.
  Built from facts already on the site; no new claims.
- On-page (manual): pp-geotextile-fabric-for-civil-works, drainage-soil-erosion-control-geotextile,
  filter-geo-bag-felt. One H1, titles 54–59, descriptions 143–155, link to /products/geotextile,
  2+ guides, enquiry form. No fixes needed.
- Sitemap 73 URLs; robots blocks only /hq.
- Not checked: the new Ordering tab was not viewed in a browser before deploy (checked live after merge: OK).
- Search Console (Claude via the owner's Chrome): Request indexing for 7 changed pages
  (pp-geotextile, roll-weight guide, /india, quote guide, drainage geotextile, automotive
  needle punched felt, carpet backing felt). Findings:
  - NOT indexed yet ("Discovered - currently not indexed"): /products/geotextile/pp-geotextile-fabric-for-civil-works
    and /products/automotive/automotive-needle-punched-felt. Main product pages; recheck next Monday.
  - Product pages show "Product snippets: 1 invalid item". Cause: Product schema has no offers,
    review or aggregateRating (no prices are published, by design). Does not block indexing.
    Thursday (schema day): decide whether to keep Product markup as is or change it; never add a fake price or review.
  - Sitemap: read 25 Oct, Success, 67 discovered (73 now). Overview: 87 indexed, 48 not indexed (includes old URLs).

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
