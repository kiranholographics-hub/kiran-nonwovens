import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';

// Tight limit so the rate-limit test is quick; set before the app is created.
process.env.RATE_ENQUIRY_MAX = '4';

const { createApp } = await import('../app.js');

let server;
let base;

before(async () => {
  server = createApp().listen(0);
  await new Promise((r) => server.once('listening', r));
  base = `http://127.0.0.1:${server.address().port}`;
});

after(() => new Promise((r) => server.close(r)));

const post = (body, raw) =>
  fetch(`${base}/api/enquiries`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: raw ?? JSON.stringify(body),
  });

test('health answers without a database', async () => {
  const res = await fetch(`${base}/api/health`);
  assert.equal(res.status, 200);
  assert.deepEqual(await res.json(), { ok: true, db: 'disconnected' });
});

test('responses carry hardening headers and no x-powered-by', async () => {
  const res = await fetch(`${base}/api/health`);
  assert.equal(res.headers.get('x-content-type-options'), 'nosniff');
  assert.equal(res.headers.get('x-frame-options'), 'DENY');
  assert.equal(res.headers.get('x-powered-by'), null);
});

test('unknown route is a JSON 404', async () => {
  const res = await fetch(`${base}/api/nope`);
  assert.equal(res.status, 404);
  assert.deepEqual(await res.json(), { error: 'Not found' });
});

test('enquiry: missing name and email → 400 with field errors', async () => {
  const res = await post({ message: 'hi' });
  assert.equal(res.status, 400);
  const body = await res.json();
  assert.ok(body.errors.name && body.errors.email);
});

test('enquiry: malformed email → 400', async () => {
  const res = await post({ name: 'A', email: 'not-an-email' });
  assert.equal(res.status, 400);
  assert.ok((await res.json()).errors.email);
});

test('enquiry: honeypot is answered 200 and silently dropped', async () => {
  const res = await post({ name: 'Bot', email: 'bot@example.com', website: 'http://spam' });
  assert.equal(res.status, 200);
  assert.deepEqual(await res.json(), { ok: true });
});

test('enquiry: malformed JSON is a 400, not a 500', async () => {
  const res = await post(null, '{ not json');
  assert.equal(res.status, 400);
});

test('enquiry: a valid one with the database down is a clear 503', async () => {
  const res = await post({ name: 'Buyer', email: 'buyer@example.com' });
  assert.equal(res.status, 503);
  assert.match((await res.json()).error, /email us directly/i);
});

test('enquiry: rate limit stops a flood with 429 + Retry-After', async () => {
  // 4 allowed per window; earlier tests already used some, so keep going
  // until the limit trips rather than counting exactly.
  let last;
  for (let i = 0; i < 6; i++) last = await post({ name: 'Flood', email: 'f@example.com' });
  assert.equal(last.status, 429);
  assert.ok(Number(last.headers.get('retry-after')) > 0);
});
