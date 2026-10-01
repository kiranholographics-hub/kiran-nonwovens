import 'dotenv/config';
import { createApp } from './app.js';
import { connectDb } from './db.js';
import { verifyMail } from './mailer.js';

const PORT = Number(process.env.PORT || 4100);

// Boot the HTTP server even if Mongo is unreachable — routes answer 503 until
// it connects, which keeps the health check useful during setup.
connectDb().catch((err) =>
  console.error('[db] connection failed:', err.message)
);

createApp().listen(PORT, () => {
  console.log(`[api] Kiran Nonwovens API listening on http://localhost:${PORT}`);

  // Say plainly whether enquiry emails will work. Without this, a missing or
  // wrong SMTP setting only shows up as "enquiries arrive but no email".
  verifyMail().then((m) => {
    if (m.ok) {
      console.log(`[mail] ready — enquiry emails go to ${process.env.ENQUIRY_TO}`);
    } else if (!m.configured) {
      console.warn(
        `[mail] not set up (${m.reason}). Enquiries are saved to the database, but no email is sent.`
      );
    } else {
      console.error(
        `[mail] could not log in to the mail server: ${m.reason}. Enquiries are saved, but no email is sent. Run "npm run mail:test" for details.`
      );
    }
  });
});
