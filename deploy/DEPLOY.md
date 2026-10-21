# Kiran Nonwovens — site ko live karne ka guide

Site ke **do hisse** hote hain, aur dono ko alag jagah chalana padta hai:

| Hissa | Kya hai | Kahan chalta hai |
|---|---|---|
| **Website** | `client` ka build (`dist` folder) — sirf HTML/CSS/JS/photos/videos | Kisi bhi normal hosting par (Hostinger, cPanel, Netlify, Nginx…) |
| **API** | `server` (Node.js) — enquiry form ko database mein save karta hai aur email bhejta hai | **Node.js chalane wali** jagah par: Render, Railway, ya VPS. Normal shared hosting par Node nahi chalta. |

Database (MongoDB Atlas) pehle se cloud par hai, uski alag hosting nahi chahiye.

---

## Pehle ye 4 cheezein tay karo

1. **Domain naam** — `kirannonwovens.com`, **bina `www` ke**.

   Ye ek hi naam har jagah chalna chahiye: Search Console ki property, har
   page ka canonical tag, sitemap.xml, aur `client/public/.htaccess` ka
   redirect — sab isi par set hain. `www` wala pata bhi isi par 301 ho jata
   hai. Agar build mein galti se `www` daal diya, to har canonical ek aise
   URL par point karega jo khud redirect karta hai — Google ko ulta signal
   jata hai. `node scripts/predeploy.mjs` ye galti pakad kar build rok dega.
2. **Website kahan hosting hogi** (Hostinger jaisi normal hosting chalegi).
3. **API kahan hosting hogi** — sabse aasan: **Render.com** (Web Service) ya **Railway**. Ya ek **VPS** (neeche Raasta B).
4. API ke liye ek **subdomain** (jaise `api.kirannonwovens.com`).

---

## Raasta A — Website normal hosting par + API Render par (sabse aasan)

### Step 1 — Atlas ko API ka rasta kholo
Atlas → **Network Access** → **Add IP Address**. Render ke IP badalte rehte hain, isliye `0.0.0.0/0` (Allow access from anywhere) chuno. Ye tabhi safe hai jab database ka password lamba aur mazboot ho. **`nonwovens_user` ka password abhi badal do** agar wo kahin bhi chat/screenshot mein aaya ho.

### Step 2 — API ko Render par daalo
1. `server` folder ko GitHub par private repo mein daalo (`.env` file **nahi**; wo `.gitignore` mein pehle se hai).
2. Render → **New → Web Service** → us repo ko jodo.
3. Settings:
   - **Root Directory:** `server` (agar repo mein client aur server dono hain)
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment Variable** `NODE_VERSION` = `22`
4. **Environment** mein `deploy/server.env.production.example` ki saari lines apne asli values ke saath daalo. Sabse zaroori:
   - `MONGODB_URI` (database ka naam `kiran-nonwovens` hi ho)
   - `CORS_ORIGIN` = website ka address, jaise `https://kirannonwovens.com`
   - `SMTP_*` aur `ENQUIRY_TO` (email ke liye)
5. Deploy karo. Render ek address dega, jaise `https://kiran-api.onrender.com`. Browser mein `.../api/health` kholo. `{"ok":true,"db":"connected"}` aana chahiye.
6. **Custom domain:** Render → Settings → Custom Domains → `api.kirannonwovens.com` jodo, aur Render jo CNAME bataye wo apne DNS mein daalo. (Render par free plan kuch der idle rehne par so jata hai, to pehli enquiry dheere ho sakti hai. Live site ke liye paid plan lo.)

### Step 3 — Website ko build karo
Apne computer par, `client` folder mein:

1. `client\.env.production` naam ki file banao (`deploy\client.env.production.example` ko copy karke) aur sahi values daalo:
   ```
   VITE_SITE_URL=https://kirannonwovens.com
   VITE_API_URL=https://api.kirannonwovens.com
   ```
2. `src\lib.js` mein `VIDEOS_READY = true` hona chahiye (varna video nahi chalegi).
3. Chalao:
   ```
   node scripts\predeploy.mjs
   npm run build
   ```
   `predeploy` galat/localhost address par build rok deta hai aur batata hai ki kya abhi band hai. Pass hone par hi `npm run build` chalao.
4. Build ke baad `client\dist` folder ban jayega.

### Step 4 — `dist` ko hosting par upload karo
- Hostinger/cPanel: **File Manager** → `public_html` kholo (purani files hata do) → `dist` ke **andar ki saari files** upload karo (folder nahi, uske andar ka content).
- **`.htaccess` file zaroor jaaye.** Wo hidden hoti hai. File Manager mein "Show hidden files" on karo, aur check karo ki `.htaccess` `public_html` mein hai. Isi file se pages ke address aur 404 page sahi chalte hain.
- Domain par SSL (https) on karo (Hostinger mein free SSL milta hai).

### Step 5 — Isko jaanch lo
Neeche wali "Launch ke baad ki checklist" dekho.

---

## Raasta B — Ek VPS par dono (Ubuntu)

VPS mein SSH se jaakar:

```bash
# 1) ek baar: Node 22, nginx, pm2, certbot
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs nginx certbot python3-certbot-nginx
sudo npm i -g pm2

# 2) API
cd /var/www && git clone <aapka-repo> kiran-nonwovens
cd kiran-nonwovens/server && npm install
nano .env            # deploy/server.env.production.example ki values
pm2 start ecosystem.config.cjs && pm2 save && pm2 startup

# 3) Website: apne computer par build karke dist ko /var/www/kiran-nonwovens/dist par copy karo
#    (Step 3 upar jaisa)

# 4) nginx
sudo cp deploy/nginx.conf.example /etc/nginx/sites-available/kiran-nonwovens   # example.com badlo
sudo ln -s /etc/nginx/sites-available/kiran-nonwovens /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
sudo certbot --nginx -d example.com -d www.example.com -d api.example.com      # https
```
Atlas Network Access mein VPS ka IP add karo (`0.0.0.0/0` ki zaroorat nahi).

---

## DNS (dono raaston mein)

Domain ke DNS mein:
- `www` (aur `@`) → website hosting ka address (Hostinger/VPS jo batayein)
- `api` → API ka address (Render ka CNAME ya VPS ka IP)

Badlav phailne mein kuch minute se kuch ghante lag sakte hain.

---

## Launch ke baad ki checklist (har ek ko tick karo)

- [ ] `https://www.<domain>` khulta hai, aur http apne aap https par jata hai.
- [ ] Home par video chalti hai (desktop aur phone dono). Manufacturing par bhi.
- [ ] Navbar ke saare links (Business Areas, Products, About, Manufacturing, Contact) khulte hain.
- [ ] `https://www.<domain>/products/geotextile` seedha (address bar mein type karke) khulta hai, 404 nahi aata.
- [ ] Koi galat address (`/xyz`) par site ka 404 page aata hai.
- [ ] `https://api.<domain>/api/health` par `{"ok":true,"db":"connected"}` aata hai.
- [ ] **Contact form se ek asli test enquiry bhejo**: "Enquiry received" aata hai, `kirannonwovens@gmail.com` par email aati hai, aur Atlas ke `enquiries` collection mein entry dikhti hai.
- [ ] Page ka source dekho (right-click → View Source): `<link rel="canonical">` mein apna domain hai, `localhost` kahin nahi.
- [ ] `https://www.<domain>/sitemap.xml` aur `/robots.txt` khulte hain, aur unme apna domain hai.
- [ ] Phone par site kholkar scroll karo, menu kholo, form bharke dekho.

## Google ko batao (launch ke baad)

1. **Search Console** (search.google.com/search-console) → Add property → URL prefix → apna `https://www.<domain>/`.
2. Verification ka **HTML tag** chuno. `content="…"` ki value `client\.env.production` mein `VITE_GSC_VERIFICATION=` ke aage daalo, dobara `predeploy` + `build` karke `dist` upload karo, phir Search Console mein **Verify** dabao.
3. **Sitemaps** mein `sitemap.xml` submit karo.
4. Home, ek product aur ek guide page par **URL Inspection → Request indexing** karo.

---

## Staging (test) copy pehle chahiye?

Agar asli domain se pehle kisi test address par daalna ho, to `client\.env.production` mein `VITE_NOINDEX=true` lagakar build karo. Isse har page par "noindex" lag jata hai aur `robots.txt` Google ko door rakhta hai. **Asli launch ke build mein ye line hata do.**

## Baad mein badlav kaise karein

- **Naya content/photo/video:** file badlo → `node scripts\predeploy.mjs` → `npm run build` → `dist` dobara upload.
- **WhatsApp number / working hours / years etc.:** `src\lib.js` mein `[...]` wali value asli value se badlo. Wo apne aap site par dikhne lagegi.
- **Company ki History:** `src\data\about.js` mein `HISTORY` ke andar likho. About page aur menu mein History apne aap aa jayegi.
- **Datasheets/certificates:** product ki `downloads` list mein file jodo; us product par "Downloads" tab apne aap aa jayega.
- **Footer ka "images are for illustration" note:** jab sirf asli photos/videos hon, `src\components\Footer.jsx` mein `ILLUSTRATIVE_IMAGERY = false` karo.
- **API ka code badle:** `server` ko dobara deploy karo (Render automatically, VPS par `git pull && pm2 restart kiran-nonwovens-api`).

## Kuch gadbad ho to

| Dikkat | Kya dekho |
|---|---|
| Form "We could not reach the server" kehta hai | `VITE_API_URL` galat ya API band hai; `https://api.<domain>/api/health` kholo. |
| Browser console mein "CORS" error | Server ke `CORS_ORIGIN` mein website ka address exactly (https, www sahi) daalo. |
| Form chalta hai par email nahi aati | Server ke log mein `[mail]` line dekho; `node scripts/test-mail.js` chalao. |
| Pages par `/products` seedha kholne par 404 | `.htaccess` upload nahi hui (hidden file) ya nginx config nahi lagi. |
| Video nahi chalti | `VIDEOS_READY = true` aur `public/videos/` ki 4 files `dist` mein hain? Build dobara karo. |

---

## Automatic deploy (GitHub Actions)

Website ko `dist` zip karke hand se upload karne ki jagah `deploy/GITHUB-DEPLOY.md` wala workflow use kar sakte ho (build + FTP upload + live check).
