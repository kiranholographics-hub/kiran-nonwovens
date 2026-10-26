# SEO log (Kiran Nonwovens)

One entry per session: date, what changed, what is pending. Newest first.

## 26 Oct 2026 (Monday: daily + weekly)

**Live check (kirannonwovens.com)**
- 14 key pages answer 200, each with exactly one H1 and its own canonical; unknown URL is a real 404; sitemap 73 URLs.
- Site-wide audit of the build: no title over 65 chars, all descriptions 110-165 chars, one H1 on every page.
  Empty alt only on decorative images (logo beside the wordmark, video posters), which is correct.
- Contact form: NOT tested (a test enquiry needs the owner's OK first). API health check is OK (deploy log, 26 Oct).

**Changed (on branch, PR for approval)**
- Content: 3 new FAQs on /guides/needle-punched-vs-thermal-bonded-nonwoven (insulation vs padding, which one for
  geotextile, both processes in one fabric). Page had 15 impressions at position 26.6.
- Technical: /india was linked only from the footer, although it is the page at position 2.5 with the site's
  first click. Added in-content links from /guides/nonwoven-manufacturers-in-india (new short section
  "Buying from within India") and /guides/needle-punched-nonwoven-manufacturer-india.
- Off-site draft: content-drafts/2026-10-26-linkedin-company-page.md (company page fields, About, first post).

**Search Console numbers (owner pasted 26 Oct, 3 months to 24 Oct)**
- 1 click, 100 impressions, CTR 1%, average position 20.3. Impressions per day rising (about 2 to 10-16).
- Page one: /india 2.5, /guides 2.5, polyester vs polypropylene 6.7, GSM in nonwoven 5.4-7.9, road GSM 7.8
  (titles of the three guides rewritten 26 Oct, PR #45).
- Most shown: nonwoven geotextile guide 25 impressions at 29.2 (retitled for "uses", PR #45).

**Next 3 pages to improve (from those numbers)**
1. /guides/needle-punched-vs-thermal-bonded-nonwoven (15 impressions, 26.6): FAQs added today; next, title/description.
2. Home page (7 impressions, 21.4): title says "Nonwoven Manufacturer India" while production is at the partner's
   plant; owner to decide the wording before any change.
3. /guides/geotextile-for-road-construction (5 impressions, 34.8): strengthen with links from the newer road,
   embankment and installation guides.

**Pending: needs the owner**
- Approve PR for today's changes.
- OK to send ONE test enquiry through the contact form?
- Rule 4 conflict: deploy.yml now has a daily 19:00 IST automatic deploy (added 26 Oct, PR #47, to publish /hq
  updates). Under the new rules deploys need your approval. Keep it, or remove it (I can open a PR)?
- Google Business Profile video verification (needs the office signboard).
- IndiaMART: fill price, MOQ, GST, year yourself; add real photos.
- [confirm] LinkedIn: company size, company type, founded year.

**Search Console checklist for next Monday (read and paste)**
1. Indexing > Pages: number "Indexed" and "Not indexed"; list the reasons, especially "Discovered - currently not indexed" and "Crawled - currently not indexed" with counts.
2. Performance > Search results, last 28 days: total clicks, impressions, average CTR, average position (tick all four boxes).
3. Same report, Queries tab with Position column: top 15 rows.
4. Pages tab with Position: top 15 rows.
5. Countries tab: top 10 rows.
6. Sitemaps: status and "Discovered pages" for sitemap.xml.
