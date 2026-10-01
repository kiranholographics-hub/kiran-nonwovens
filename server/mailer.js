import nodemailer from 'nodemailer';

let transporter = null;

/** Built lazily; returns null when SMTP is not configured. */
function getTransporter() {
  if (transporter !== null) return transporter;
  const host = process.env.SMTP_HOST;
  if (!host) {
    transporter = false;
    return null;
  }
  transporter = nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT || 587),
    secure: String(process.env.SMTP_SECURE) === 'true',
    auth: process.env.SMTP_USER
      ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
      : undefined,
  });
  return transporter;
}

/** True when both the SMTP host and the recipient are set. */
export function mailConfigured() {
  return Boolean(process.env.SMTP_HOST && process.env.ENQUIRY_TO);
}

/**
 * Checks the SMTP settings by actually logging in to the mail server (no email
 * is sent). Used at start-up and by `npm run mail:test`, so a wrong password or
 * port shows up immediately instead of enquiries silently arriving without an
 * email.
 */
export async function verifyMail() {
  if (!mailConfigured()) {
    return {
      ok: false,
      configured: false,
      reason: 'SMTP_HOST and ENQUIRY_TO are not both set in .env',
    };
  }
  try {
    await getTransporter().verify();
    return { ok: true, configured: true };
  } catch (err) {
    return { ok: false, configured: true, reason: err.message };
  }
}

const ROWS = [
  ['Name', 'name'],
  ['Company', 'company'],
  ['Email', 'email'],
  ['Phone', 'phone'],
  ['Country', 'country'],
  ['Product', 'product'],
  ['Fibre', 'fibre'],
  ['GSM', 'gsm'],
  ['Width', 'width'],
  ['Thickness', 'thickness'],
  ['Colour', 'colour'],
  ['Quantity', 'quantity'],
  ['Message', 'message'],
  ['Page', 'source'],
];

const escapeHtml = (v) =>
  String(v).replace(
    /[&<>"']/g,
    (c) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      })[c]
  );

/**
 * Emails the export team about a new enquiry.
 * Returns true if sent, false if mail is not configured or the send failed —
 * a failed notification must never fail the enquiry itself.
 */
export async function sendEnquiryMail(enquiry) {
  const t = getTransporter();
  const to = process.env.ENQUIRY_TO;
  if (!t || !to) return false;

  const filled = ROWS.filter(([, key]) => enquiry[key]);
  const text = filled.map(([label, key]) => `${label}: ${enquiry[key]}`).join('\n');
  const html =
    '<table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif">' +
    filled
      .map(
        ([label, key]) =>
          `<tr><th align="left" style="border-bottom:1px solid #ddd">${label}</th>` +
          `<td style="border-bottom:1px solid #ddd">${escapeHtml(enquiry[key])}</td></tr>`
      )
      .join('') +
    '</table>';

  try {
    await t.sendMail({
      to,
      from: process.env.ENQUIRY_FROM || process.env.SMTP_USER || to,
      replyTo: enquiry.email,
      subject: `Nonwovens enquiry — ${enquiry.name}${
        enquiry.product ? ` — ${enquiry.product}` : ''
      }`,
      text,
      html,
    });
    return true;
  } catch (err) {
    console.error('[mailer] enquiry notification failed:', err.message);
    return false;
  }
}
