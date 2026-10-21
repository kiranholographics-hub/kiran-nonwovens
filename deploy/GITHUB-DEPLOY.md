# GitHub se website deploy (FTP)

`.github/workflows/deploy.yml` website ko build karke Hostinger pe FTP se upload
karta hai, phir **live site check** karta hai. API (`server/`) isme nahi aati:
Hostinger usse khud GitHub se deploy karta hai.

## Ek baar ka setup (5 minute)

1. **FTP account:** hPanel -> Files -> **FTP Accounts**. Ek account banao (ya
   maujooda lo) jo `public_html` tak pahunchta ho. Wahan se **FTP host**,
   **username**, **password** note karo.
2. **GitHub secrets:** repo -> Settings -> Secrets and variables -> Actions ->
   **New repository secret**. Ye 3 daalo (naam bilkul aise):
   - `FTP_SERVER`  (hPanel mein dikhne wala FTP host, jaise `ftp.kirannonwovens.com` ya IP)
   - `FTP_USERNAME`
   - `FTP_PASSWORD`

   Ye kisi ko chat mein mat bhejna; GitHub inhe logs mein chhupa deta hai.
3. Bas. `VITE_SITE_URL` / `VITE_API_URL` workflow mein hi likhe hain.

## Chalana

- **Manual:** GitHub -> **Actions** -> **Deploy website** -> **Run workflow**.
  "Ping IndexNow" ka tick tab lagao jab live checks pass hone par Bing/Yandex ko
  bhi batana ho.
- **Apne aap (default):** `client/` badalne wala har merge `main` mein khud deploy hota hai.
  Band karna ho: repo -> Settings -> Secrets and variables -> Actions -> **Variables** ->
  naya variable `AUTO_DEPLOY` = `false`. (Server ke badlav `server/` se deploy nahi hote:
  unhe Hostinger khud GitHub se uthata hai.)

**Panel (/hq) mein Markets / Pages / Updates / Team / Testimonials badalne ke
baad** bhi bas **Run workflow** dabao: build ke time panel ka data download hota hai.

## Workflow kya karta hai

1. FTP secrets maujood hain ya nahi dekhta (nahi to turant saaf error).
2. `npm ci`, `predeploy` (galat domain/localhost rokta hai), `npm run build`, `npm run smoke`.
3. Check karta hai ki `dist/` mein `.htaccess`, `sitemap.xml` aur IndexNow key file hain.
4. `dist/` ko FTP se upload karta hai (hidden `.htaccess` ke saath). **Kuch delete nahi karta**,
   isliye `google...html` jaisi extra files bachi rehti hain. Purani hashed `assets` files
   server pe jama hoti rehti hain (bekaar par nuksan-rahit; kabhi saaf karni ho to File Manager se).
5. Live site check: home page isi build ka JS de raha hai, page 200 deta hai, slash wala URL 301
   hota hai, sitemap/robots asli domain batate hain, galat URL 404 hai, API `db: connected` hai.
   Koi check fail ho to job laal ho jaata hai aur batata hai kaun sa.

## Agar kuch fail ho

| Error | Matlab / upay |
|---|---|
| `The secret FTP_... is not set` | Upar ke step 2 mein wo secret daalo. |
| `530 Login failed` | Username/password galat. hPanel mein FTP password dobara set karke secret badlo. |
| Certificate / TLS ka error | Host agar IP address hai to workflow sirf naam ka check chhodta hai (certificate khud phir bhi verify hota hai). Phir bhi "not trusted" jaisa error aaye to variable `FTP_VERIFY_CERT` = `false` (thoda kam surakshit, par password phir bhi encrypted jaata hai). |
| FTPS support nahi | Variable `FTP_TLS` = `false`. **Dhyan:** tab password bina encryption ke jaata hai; pehle hosting se FTPS chalu karwane ki koshish karo. |
| Files galat jagah (`public_html/public_html`) | Variable `FTP_DIR` set karo (jaise `/public_html` ya `/`). |
| Live check: "bundle" mismatch | Upload poora nahi hua ya CDN/cache purana de raha hai. Kuch minute baad dobara Run workflow. |
| Live check: slash redirect / 404 fail | `.htaccess` upload nahi hui ya server use nahi kar raha. |
