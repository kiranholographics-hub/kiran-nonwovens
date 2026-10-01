import 'dotenv/config';
import { mailConfigured, verifyMail, sendEnquiryMail } from '../mailer.js';

/**
 * `npm run mail:test` — checks the SMTP settings in .env and sends one clearly
 * labelled test email to ENQUIRY_TO. Run it before going live.
 */
console.log('[mail:test] SMTP_HOST   :', process.env.SMTP_HOST || '(not set)');
console.log('[mail:test] SMTP_PORT   :', process.env.SMTP_PORT || '587 (default)');
console.log('[mail:test] SMTP_SECURE :', process.env.SMTP_SECURE || 'false (default)');
console.log('[mail:test] SMTP_USER   :', process.env.SMTP_USER || '(not set)');
console.log('[mail:test] SMTP_PASS   :', process.env.SMTP_PASS ? '(set, hidden)' : '(not set)');
console.log('[mail:test] ENQUIRY_TO  :', process.env.ENQUIRY_TO || '(not set)');
console.log('');

if (!mailConfigured()) {
  console.error('[mail:test] FAILED — SMTP_HOST and ENQUIRY_TO must both be set in server/.env');
  process.exit(1);
}

const check = await verifyMail();
if (!check.ok) {
  console.error('[mail:test] FAILED — could not log in to the mail server:');
  console.error('           ', check.reason);
  console.error('');
  console.error('Common causes: wrong app password (Gmail needs a 16-letter App Password,');
  console.error('not your normal password), wrong port/SMTP_SECURE pair (587 + false, or');
  console.error('465 + true), or 2-Step Verification not turned on for the Gmail account.');
  process.exit(1);
}
console.log('[mail:test] Logged in to the mail server OK. Sending a test email…');

const sent = await sendEnquiryMail({
  name: 'TEST — website enquiry check',
  company: 'Kiran Nonwovens (test)',
  email: process.env.SMTP_USER || process.env.ENQUIRY_TO,
  message:
    'This is a test email from "npm run mail:test". If you can read this, enquiry emails from the website will reach this inbox.',
  source: 'mail:test',
});

if (sent) {
  console.log(`[mail:test] SENT — check the inbox of ${process.env.ENQUIRY_TO} (and its Spam folder).`);
} else {
  console.error('[mail:test] FAILED — login worked but the send did not. See the [mailer] line above.');
  process.exit(1);
}
