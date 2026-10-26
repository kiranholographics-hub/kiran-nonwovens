# Daily SEO Playbook — kirannonwovens.com

> Put this file in the root of the kirannonwovens.com project folder.
> Every day, open Claude Code in that folder and say:
> **"Read KIRAN-SEO-PLAYBOOK.md and do today's SEO tasks."**

---

## 0. Site facts (verified from the live site, Oct 2026)

```yaml
site_name:      "Kiran Nonwovens"
domain:         "https://kirannonwovens.com"
business_type:  "B2B manufacturer & exporter — needle punched and thermal bonded nonwoven felt and geotextile"
specs:          "100–1200 GSM, roll width 5.0–5.2 m, PP (virgin/recycled), PET, viscose, blends, made to order"
manufacturing:  "Partner factory: Miracle Nonwoven Industries, Phagi, Jaipur"
office_address: "221-C, Frontier Colony, Opposite PNB Bank, Adarsh Nagar, Jaipur – 302004"
phone:          "+91 78781 09226 (also WhatsApp)"
email:          "kirannonwovens@gmail.com"
industries:     ["Geotextile", "Automotive", "Apparel & Footwear", "Industrial & Others"]
products:       16 product pages under /products/<industry>/<slug>
guides:         33 buyer's guides under /guides/ (incl. 1 Hindi guide)
export_pages:   6 regional pages under /exports/ (Middle East, Asia-Pacific, Europe, Africa, North America, South America)
markets:        "India (domestic) + 32 export markets"
locale:         "en_IN"
```

**Buyers are B2B:** importers, civil contractors, road/rail/canal engineers, automotive component makers, footwear/garment makers, filter bag makers, converters. Write for them: specs, standards, applications, ordering — not consumer marketing.

**Claude: before day 1, detect the tech stack (framework, where pages/guides live, how sitemap and meta tags are generated) and write it at the top of `seo-log.md`.**

---

## 1. Important: this site is already well optimized

Titles, meta descriptions, canonicals, OG tags, internal links and 33 guides already exist. **More pages is NOT the main lever now.** The priorities are, in order:

1. **Data-driven fixes** — improve pages Google already shows (from Search Console data).
2. **Trust (E-E-A-T)** — real proof: factory photos, test reports, certifications, export proof.
3. **Backlinks & B2B listings** — this is the biggest gap for a B2B exporter site.
4. **New content** — only for real gaps, max **2 new pages per week**.

---

## 2. Ground rules (always follow)

1. **Never invent facts:** no fake certifications, test values, client names, countries, prices, standards compliance, reviews or "years of experience". Anything needing confirmation → write `TODO(owner): confirm …` and list it in `seo-log.md` under "Pending for owner".
2. **No thin or duplicate pages.** No 32 copy-paste country pages, no "felt supplier in <city>" spam. Google penalizes "scaled content abuse" site-wide.
3. **Avoid keyword cannibalization:** before creating a page, search the existing guides/products for the same topic. If one exists, improve it instead.
4. NAP (name, address, phone) must match section 0 exactly everywhere.
5. Never change a URL/slug without a 301 redirect and owner approval.
6. Keep spec numbers consistent site-wide (100–1200 GSM, 5.0–5.2 m).
7. One commit per day: `seo: YYYY-MM-DD <summary>`. Log everything in `seo-log.md`.

---

## 3. Every-day tasks (20–30 min)

1. **Read `seo-log.md`** — see what's done and pending. Don't redo work.
2. **Build check** — build the site; fix errors, broken internal links, missing images.
3. **On-page check of 3 pages** (rotate through all ~60 pages; track progress in the log):
   - Exactly one `<h1>`; unique `<title>` (≤ 60 chars) and meta description (≤ 160 chars)
   - Canonical present; images have descriptive `alt` and width/height
   - Page links to: its industry page, 2+ related guides/products, and the enquiry form
4. **Sitemap & robots** — every live page in `sitemap.xml` with correct `<lastmod>`; nothing important blocked in `robots.txt`.
5. **One improvement** — pick ONE item from the weekly task for today (section 4) or from "Pending" in the log.
6. **Update `seo-log.md` and commit.**

---

## 4. Weekly rotation

| Day | Focus | Tasks |
|---|---|---|
| **Mon** | Search Console review | Ask the owner to paste last 28 days of GSC data (Queries + Pages: clicks, impressions, CTR, position). Find: (a) queries at position 5–20 → improve that page; (b) pages with high impressions, low CTR → rewrite title/meta; (c) queries with no matching page → add to content backlog. Save findings in the log. If no data, skip to the backlog. |
| **Tue** | Product page upgrade | Upgrade ONE product page: spec table (GSM, width, fibre, thickness range, roll length, colour), applications, processing (cut/laminate/mould), packing, MOQ (`TODO(owner)` if unknown), "Related guides", FAQ (3–5 real buyer questions), clear CTA. Add `Product` JSON-LD **without** fake price/reviews. |
| **Wed** | New content (gap only) | Write ONE new guide from the backlog (section 6) **only if no existing page covers it**. 900–1500 words, specific, with a spec/checklist table. Link it from 3+ related pages and add it to /guides. |
| **Thu** | Schema & technical | Verify/add JSON-LD: `Organization` + `LocalBusiness` (home/contact), `BreadcrumbList` (all pages), `Article` (guides, with real date), `FAQPage` (only where visible FAQs exist), `Product` (products). Validate JSON. Check Core Web Vitals basics: hero image size, WebP, lazy-loading, unused JS/CSS. |
| **Fri** | Export pages | Improve ONE regional export page with real, market-specific info: main ports, typical products bought there, labelling/documents (HS chapter 56 → link to HS guide), lead time & shipping (`TODO(owner)`), relevant standards. Create a single-country page only if owner confirms real buyers there AND it can have unique content (e.g. UAE, Saudi Arabia, USA, UK, Australia). |
| **Sat** | Off-page prep | Draft (don't post) in `offpage/YYYY-MM-DD.md`: 2 Google Business Profile posts, 1 LinkedIn post (from a guide), and the next 3 listing/backlink targets from section 7 with ready-to-paste company description. |
| **Sun** | Cleanup & report | Check for cannibalization pairs (section 5), fix internal anchor text, then write a weekly summary: changes made, pending owner items, next week's plan. |

---

## 5. Known cannibalization pairs to check

These pairs target very similar searches. Make sure each has a clearly different angle, links to the other, and doesn't repeat the same text:

- `/guides/geotextile-for-road-construction` ↔ `/guides/geotextile-gsm-for-road-construction-india`
- `/guides/nonwoven-manufacturers-in-india` ↔ `/guides/needle-punched-nonwoven-manufacturer-india`
- `/guides/geotextile-for-drainage-and-erosion-control` ↔ `/products/geotextile/drainage-soil-erosion-control-geotextile`
- `/guides/automotive-nvh-felt-guide` ↔ `/products/automotive/nvh-sound-insulation-fabric` ↔ `/guides/automotive-felt-oem-interiors-india`
- `/guides/dust-collector-filter-bag-felt` ↔ `/guides/bag-filter-felt-cement-steel-power-india`

Rule: the **guide** answers "how/what/which"; the **product page** is for "buy / supplier / manufacturer" intent and must link to the enquiry form.

---

## 6. Content backlog (check for overlap before writing)

Only write these if no existing page covers them. Owner must confirm any technical claims.

**Geotextile**
- Woven vs nonwoven geotextile: which to use
- Geotextile test methods explained (grab tensile, CBR puncture, AOS, permittivity) — what buyers ask for in a test report
- Geotextile in Indian specs: what tender documents usually ask for (MoRTH / IRC references — owner/engineer to confirm)
- Geotextile for landscaping and gardens (weed barrier vs nonwoven)

**Automotive / industrial**
- Recycled PET felt: what "recycled" means for strength and consistency
- Needle punched felt for mattresses and furniture
- Needle punched felt vs polyester wadding
- Felt for speaker boxes and acoustic panels

**Export / buying**
- Container loading: how many geotextile rolls fit in a 20 ft / 40 ft HC (builds on the roll weight guide)
- Incoterms for nonwoven buyers (FOB, CIF, EXW) — general explainer
- Sample process: how to test a nonwoven sample before bulk order

**Hindi (India market)** — the Hindi geotextile guide exists; add 1–2 more Hindi guides only if GSC shows Hindi queries (e.g. नॉन वोवन फेल्ट क्या है, जियोटेक्सटाइल GSM कैसे चुनें). Link Hindi ↔ English versions with `hreflang` (`en-IN` / `hi-IN`).

---

## 7. Off-page / backlinks (owner does the posting; Claude drafts)

For a B2B exporter these matter more than new blog posts. Claude: keep a checklist in `offpage/listings.md` with status for each.

**Indian B2B portals:** IndiaMART, TradeIndia, ExportersIndia, Udyam/GeM (if applicable)
**Global B2B:** Alibaba.com, Go4WorldBusiness, Europages, Kompass, ThomasNet (if serving the US)
**Industry:** nonwoven/technical textile directories and associations (e.g. TTAI, INDA/EDANA member directories if eligible), geosynthetics directories
**Trade proof:** exhibition listings (Techtextil India, India ITME, etc. — only if they actually exhibit)
**Profiles:** LinkedIn company page, Google Business Profile (office) + factory listing, YouTube (factory/process videos)

Every listing: same NAP, link to the most relevant page (not always the homepage), and the same spec summary.

---

## 8. Owner checklist (Claude can't do these — remind in Sunday report)

- [ ] Google Search Console verified; sitemap submitted; "Request indexing" for every new/updated page
- [ ] Bing Webmaster Tools verified (import from GSC)
- [ ] Google Business Profile: verified, category "Nonwoven fabric manufacturer/supplier", real factory photos, weekly posts, ask buyers for reviews
- [ ] **Use a domain email** (e.g. export@kirannonwovens.com) instead of Gmail — big trust signal for importers
- [ ] Provide real proof for the site: factory/machine photos, test reports, certifications (ISO, etc. if held), GST/IEC display, sample photos, packing/container photos
- [ ] Post on B2B portals and LinkedIn using drafts in `offpage/`
- [ ] Deploy after Claude's commit (unless auto-deploy)

---

## 9. `seo-log.md` format

```markdown
# SEO Log — kirannonwovens.com
Tech stack: <detected on day 1>

## Pending for owner
- [ ] Confirm MOQ for geotextile rolls
## Content backlog status
## On-page check progress (page → date checked)

---
## 2026-10-27 (Tue)
- Build: OK
- On-page: /products/geotextile/filter-geo-bag-felt, /guides/gsm-in-nonwoven-fabric, /exports — fixed 2 missing alt texts
- Upgrade: /products/automotive/automotive-needle-punched-felt — spec table, FAQ x4, Product schema
- Internal links: +3 to the upgraded page
- Pending: MOQ and lead time (owner)
- Commit: abc1234
```

---

## 10. Realistic expectations

- Long-tail B2B terms ("geotextile for railway track India", "shoulder pad nonwoven fabric India"): 1–3 months.
- Head terms ("nonwoven manufacturer India", "geotextile supplier"): 6–12+ months; need backlinks and trust signals.
- For an exporter, measure success by **enquiries per month**, not only rankings. Track enquiry source (Google / B2B portal / WhatsApp) in a simple sheet.
