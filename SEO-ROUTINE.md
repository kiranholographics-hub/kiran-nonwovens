# SEO routine (Kiran Nonwovens)

Isko chat mein Claude ko bolna: **"aaj ka seo"**. Baaki wo khud karega.
Ye file isliye hai ki naye session mein bhi sab yaad rahe.

## Maqsad
Export buyers (importers) ko Google par milna: "nonwoven / needle punched felt / geotextile
manufacturer + supplier India", aur country-wise ("... supplier USA/UAE/UK/Saudi/Germany").
Bade keyword ("manufacturers in India") 6-9 mahine ka khel hai; 3 mahine ka target: long-tail aur
country keywords par page one/two, directory profiles page one, brand search par site #1,
enquiries badhna.

## Aapko bas ye bolna hai
| Bolo | Claude kya karta hai |
|---|---|
| **aaj ka seo** | Din ke hisaab se agla kaam chunta hai (neeche) aur poora karta hai. |
| **rank check** | Target keywords ko Google par search karke batata hai ki site kahan hai aur page one par kaun hai. |
| **naya page: <topic>** | Naya guide / "manufacturer India" page likhta hai, test karta hai, PR + merge, auto deploy. |
| **product page sudharo: <naam>** | Us product ka page unique (spec, use, FAQ) banata hai. |
| **listing likho** | IndiaMART / TradeIndia / Google Business / LinkedIn ke liye copy likhta hai (aap paste karte ho). |
| **weekly check** | Site live checks + aap Search Console ke numbers paste karo, wo padh ke agla kadam batata hai. |
| **deploy** | Website live karwata hai (GitHub Actions). |

## "aaj ka seo": din ke hisaab se
- **Somvar:** rank check + pichhle hafte se tulna.
- **Mangalvar:** ek naya content page (guide ya "manufacturer India" / HS code page).
- **Budhvar:** directory / LinkedIn / Google Business ki copy (listing likho).
- **Guruvar:** ek product page ka sudhaar.
- **Shukravar:** weekly check + agle hafte ka plan.

## Niyam (galat claim kabhi nahi)
- **MOQ, price, lead time, certification, capacity, saal, client names** tab hi likhe jayenge jab aap
  bataoge. Claude apne se kuch nahi banata. Jo info nahi hai, wo poochega.
- Country pages sirf unhi deshon ke liye badhenge jahan sach mein bechna hai. Patla/dohraya hua content nahi.
- Manufacturing partner (Miracle Nonwoven Industries) ka zikr jaisa abhi hai waisa hi rahega.

## Priority markets (research, Oct 2026)
- **Tier 1:** USA, UAE, UK, Saudi Arabia, Germany. Poora zor yahin.
- **Tier 2:** Australia, South Africa, Netherlands, Qatar, Oman.
- Baaki country pages jaise hain waise. Final chunav apne enquiries/visitors ke data se.

## Target keywords (volume Search Console / Keyword Planner se pakka karna)
- needle punched nonwoven fabric manufacturer India
- nonwoven felt manufacturer / exporter India
- PP geotextile manufacturer India, nonwoven geotextile exporter India
- automotive nonwoven felt supplier India, custom GSM nonwoven felt
- HS code nonwoven felt (56021000, 560314 ...): importers yahi dhundhte hain
- country: "nonwoven felt supplier <country>", "geotextile supplier <country>"

## India page-one targets (research 16 Oct 2026)
Jaipur / "manufacturer India" keywords are owned by IndiaMART, JustDial and older Jaipur sites. Realistic page-one targets are informational long-tail where page one is small blogs and social posts:
- geotextile for road construction India -> /guides/geotextile-for-road-construction
- geotextile GSM for road construction India -> /guides/geotextile-gsm-for-road-construction-india
- nonwoven geotextile for railway track India -> /guides/nonwoven-geotextile-for-railway-track-india
Skipped as too crowded: geobags, automotive felt India, HS-code India (data sites), Jaipur-named keywords.

## "non woven manufacturers in India" (head keyword, 17 Oct 2026)
Page one today: ANFA members list, IndiaMART, KK NonWovens, Scribd, a "Top 10" listicle, revenuebase, Singhal, NWFI, favouritehub. Mostly spunbond/PP sellers and directories. Our niche is needle punched and thermal bonded felt and geotextile, so we do not claim to be a spunbond maker. Work done: pillar guide /guides/nonwoven-manufacturers-in-india (process types, how to choose, honest about what we make), home title/description now carry "Nonwoven Manufacturer India", the pillar is linked from all country pages. This head term needs authority (links, listings); expect months, not weeks. Do not publish a "Top 10 manufacturers" list of named competitors (cannot verify the claims).

## Export keyword research (16 Oct 2026)
Overseas SERPs (UAE, Saudi Arabia, Australia): page one is local distributors and local manufacturers, which is hard for an Indian exporter; keep those pages, aim at "from India" long-tail. Africa and South Asia SERPs (Kenya, Nigeria, Nepal, Sri Lanka, Bangladesh) are Chinese factories, B2B portals and a few Indian sellers: weaker, closer to India, and infrastructure-driven. Work done: every country title now reads "Nonwoven Felt Supplier from India to <country>" and the H1 says "from India"; five new market pages added (Kenya, Nigeria, Nepal, Sri Lanka, Bangladesh). Pause any of them in /hq (Markets) if you do not want to sell there.

## Daily niche India page (standing order from the owner, 16 Oct 2026)
Each day ONE new guide page for a low-competition niche keyword, India angle, honest content only. Pick the next topic from the queue, check the SERP first (TinyFish search), write it in client/src/data/guides.js (copy an existing guide's shape; `published` = today), link it from the matching product FAQ (client/src/data/seo.js) and the country-page area map (client/src/pages/ExportMarket.jsx), build (ALLOW_LOCAL_BUILD=1 npm run build in client/), run `npm run smoke`, PR + merge, then verify live with a ?cb= cache-buster. Tick the topic off here.
Queue (tick when done):
- [x] orthopaedic cast padding nonwoven India (16 Oct)
- [x] shoulder pad nonwoven fabric India (wadding/needle punched pads for garments) (17 Oct)
- [x] shoe insole board / strobel nonwoven India — SKIPPED, owner declined this page (19 Oct). Do not write it again.
- [x] filter felt for bag filters in cement, steel and power plants India (extend the dust-collector angle) (20 Oct)
- [x] geobag fabric (nonwoven geotextile for geobags) India (21 Oct)
- [ ] geotextile for canal and pond lining India
- [ ] geotextile for landfill and mining India
- [ ] automotive felt for OEM interiors India (headliner, hood insulator, carpet underlay)
- [ ] luggage and bag support felt India
- [ ] packaging and protective felt India
- [ ] flooring underlay felt India
- [ ] Hindi guide: non woven geotextile (test)
Rules: no MOQ, price, lead time, certification, capacity, client names, years or standards-compliance claims; MoRTH/IRC/RDSO/BIS only as "confirm the current edition with your engineer"; we make needle punched and thermal bonded only (not spunbond, spunlace, meltblown); keep the Miracle Nonwoven Industries wording; do not name or rank competitors.

## Jo Claude nahi dekh sakta (aap paste karo)
Search Console ke numbers, IndiaMART/TradeIndia/Google Business ke login, admin panel ka data.
Wo ya to screenshot bhejo ya number paste karo.

## Pehle se ho chuka
Search Console verified, sitemap (66 URLs), IndexNow, 27 country pages, auto deploy, admin panel.

## Abhi pending (aapki taraf se info chahiye)
MOQ aur sample policy, lead time, Miracle ki certifications, asli photos/video,
kin deshon mein sach mein bechna hai.
