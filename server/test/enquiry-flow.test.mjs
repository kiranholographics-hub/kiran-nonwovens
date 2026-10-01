import { test, before, after, mock } from 'node:test';
import assert from 'node:assert/strict';
import { SMTPServer } from 'smtp-server';
import mongoose from 'mongoose';

/**
 * End-to-end check of the enquiry path: HTTP request → validation → save →
 * notification email → response. A tiny in-process SMTP server stands in for
 * Gmail so we can read the email that would be sent. MongoDB is stubbed (the
 * model's create/updateOne), because this test must run with no database.
 */

const received = [];
let smtp;
let app;
let base;

before(async () => {
  smtp = new SMTPServer({
    authOptional: true,
    disabledCommands: ['STARTTLS'],
    onData(stream, _session, cb) {
      let raw = '';
      stream.on('data', (c) => (raw += c));
      stream.on('end', () => {
        received.push(raw);
        cb();
      });
    },
  });
  await new Promise((r) => smtp.listen(0, '127.0.0.1', r));

  process.env.SMTP_HOST = '127.0.0.1';
  process.env.SMTP_PORT = String(smtp.server.address().port);
  process.env.SMTP_SECURE = 'false';
  process.env.ENQUIRY_TO = 'export-team@example.com';
  process.env.ENQUIRY_FROM = 'website@example.com';
  process.env.RATE_ENQUIRY_MAX = '100';

  // Load everything that compiles Mongoose models (the app pulls in all of
  // them) BEFORE pretending the database is connected — Mongoose compiles a
  // model against the real connection state.
  const { createApp } = await import('../app.js');
  const { default: Enquiry } = await import('../models/Enquiry.js');
  mock.method(Enquiry, 'create', async (data) => ({ _id: 'abc123', ...data }));
  mock.method(Enquiry, 'updateOne', async () => ({ acknowledged: true }));
  Object.defineProperty(mongoose.connection, 'readyState', { get: () => 1, configurable: true });

  app = createApp().listen(0);
  await new Promise((r) => app.once('listening', r));
  base = `http://127.0.0.1:${app.address().port}`;
});

after(async () => {
  await new Promise((r) => app.close(r));
  await new Promise((r) => smtp.close(r));
  mock.restoreAll();
});

const post = (body) =>
  fetch(`${base}/api/enquiries`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

test('a valid enquiry is saved, answered 201, and emailed to the export team', async () => {
  const res = await post({
    name: 'Anil Mehta',
    company: 'Mehta Infra',
    email: 'anil@mehta.example',
    phone: '+91 90000 00000',
    country: 'India',
    product: 'PP Geotextile Fabric for Civil Works',
    gsm: '300',
    width: '5.0 m',
    quantity: '5000 m2 / month',
    message: 'Need a quote <b>please</b>',
    source: '/products/geotextile/pp-geotextile-fabric-for-civil-works',
  });
  assert.equal(res.status, 201);
  assert.deepEqual(await res.json(), { ok: true, id: 'abc123' });

  assert.equal(received.length, 1, 'exactly one email should have been sent');
  const mail = received[0];
  assert.match(mail, /To: export-team@example\.com/i);
  assert.match(mail, /Reply-To: anil@mehta\.example/i);
  // The subject has an em dash, so it travels MIME-encoded (=?UTF-8?Q?...).
  assert.match(mail, /Subject: =\?UTF-8\?Q\?Nonwovens_enquiry/i);
  assert.match(mail, /Anil Mehta/);
  assert.match(mail, /300/);
  assert.match(mail, /5000 m2/);
  // Visitor-typed markup must be escaped in the HTML part of the email (the
  // plain-text part is allowed to show it as typed). Undo quoted-printable
  // line wrapping before looking.
  const unwrapped = mail.replace(/=\r\n/g, '');
  assert.match(unwrapped, /Need a quote &lt;b&gt;please&lt;\/b&gt;/);
  assert.doesNotMatch(unwrapped, /<td[^>]*>[^<]*<b>please/);
});

test('a bad email is refused with a field error and sends nothing', async () => {
  const before = received.length;
  const res = await post({ name: 'X', email: 'nope' });
  assert.equal(res.status, 400);
  assert.ok((await res.json()).errors.email);
  assert.equal(received.length, before);
});

test('a bot (honeypot filled) gets a friendly 200 but no email', async () => {
  const before = received.length;
  const res = await post({ name: 'Bot', email: 'bot@example.com', website: 'http://spam' });
  assert.equal(res.status, 200);
  assert.equal(received.length, before);
});

test('if the mail server is down the enquiry is still accepted (saved), not lost', async () => {
  const goodPort = process.env.SMTP_PORT;
  // Point mail at a dead port. The mailer builds its transporter once, so load a fresh copy.
  process.env.SMTP_PORT = '1';
  const { sendEnquiryMail } = await import('../mailer.js?down=1');
  const sent = await sendEnquiryMail({ name: 'A', email: 'a@b.co' });
  assert.equal(sent, false);
  process.env.SMTP_PORT = goodPort;
});
