# kirannonwovens.com: ek hi Node app (site + API)

Ab website aur API **ek hi app** hain, bilkul kiran-holographics.com jaisa:

- `server/` `/api/...` ka jawab deta hai **aur** banaya hua website (`client/dist`) bhi serve karta hai.
- Purane `.htaccess` ke saare rules (https + bina-www redirect, 32 purane country pages ke 301,
  trailing slash ka 301, asli 404, cache headers) ab `server/site.js` mein hain.
- API ka address ab `https://kirannonwovens.com/api/...` hai. Alag `api.` subdomain ki zaroorat nahi.
- FTP upload band. Hostinger GitHub se khud build karke chalata hai.

## Ek baar ka setup (hPanel mein)

1. **Websites -> kirannonwovens.com** (Web app) -> settings / deployment kholo.
2. Isse GitHub repo `kiranholographics-hub/kiran-nonwovens`, branch `main` se jodo
   (jaise Holographics wala juda hai).
3. Settings:
   - **Root directory:** repo ka root (`/`), `server/` nahi
   - **Node version:** 22
   - **Build command:** `npm run build`
   - **Start command:** `npm start`
4. **Environment variables:** `api.kirannonwovens.com` app ke saare variables yahan copy karo:
   `NODE_ENV=production`, `MONGODB_URI`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`,
   `SMTP_PASS`, `ENQUIRY_TO`, `ENQUIRY_FROM`, `ADMIN_EMAIL`, `ADMIN_PASSWORD_HASH`,
   `ADMIN_TOKEN_SECRET`, aur `CORS_ORIGIN=https://kirannonwovens.com`.
   `PORT` mat daalo agar Hostinger khud deta hai.
5. **Deploy** dabao. Build ~2-3 minute leta hai.

## Live hone ke baad check

GitHub -> Actions -> **Deploy website** -> **Run workflow**. Ye live site check karta hai:
home page isi build ka bundle de raha hai, `/guides/...` 200 aur `/guides/.../` 301,
sitemap/robots theek, anjaan URL asli 404, aur `/api/health` mein database `connected`.

Haath se bhi dekh lo: ek guide page, contact form se ek test enquiry (email aaya?),
`/hq` login, aur `https://kirannonwovens.com/exports/uae-nonwoven-felt-supplier`
(-> middle-east page pe 301 hona chahiye).

## Roz ka kaam

- **Code merge `main` mein:** Hostinger khud deploy karta hai. Workflow tests chalata hai,
  deploy live hone ka intezaar karta hai (15 min tak), live check karta hai, phir IndexNow ping.
- **Panel (/hq) mein Markets / Pages / Updates badalne ke baad:** hPanel -> Websites ->
  kirannonwovens.com -> **Redeploy** (build ke time panel ka data download hota hai).
  Phir chahein to Actions -> Deploy website -> Run workflow (IndexNow tick karke).

## api.kirannonwovens.com ka kya

1-2 hafte chalne do (purane cached pages ab bhi usse baat kar sakte hain). Uske baad
hPanel mein us app ko band/delete kar sakte ho. Panel mein pehle upload hui photos ke
purane `api.` links build ke time apne aap `kirannonwovens.com` pe badal diye jaate hain.

## Agar kuch galat ho

| Dikkat | Kya karein |
|---|---|
| Site pe sirf JSON / "Not found" | Build command chala hi nahi; Build command `npm run build` aur root `/` check karo. |
| Logs: `[site] no build at ...` | Wahi: `client/dist` bana nahi. Build logs dekho. |
| Redirect loop | Logs/headers check karo; `server/site.js` sirf `X-Forwarded-Proto: http` pe https redirect karta hai. |
| `/api/health` mein `disconnected` | `MONGODB_URI` env variable galat/missing. |
| Enquiry aati hai par email nahi | SMTP variables; server logs mein `[mail]` line dekho. |
| Wapas purane setup pe jaana | Is change ka PR revert karo aur FTP workflow wapas aa jayega. |
