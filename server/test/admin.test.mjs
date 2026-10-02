import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';

process.env.ADMIN_EMAIL = 'owner@example.com';
process.env.ADMIN_TOKEN_SECRET = 'x'.repeat(48);
const { hashPassword } = await import('../auth.js');
process.env.ADMIN_PASSWORD_HASH = hashPassword('correct horse battery');

const { createApp } = await import('../app.js');
const Market = (await import('../models/Market.js')).default;
const C = await import('../models/content.js');

let server;
let base;
before(async () => {
  server = createApp().listen(0);
  await new Promise((r) => server.once('listening', r));
  base = `http://127.0.0.1:${server.address().port}`;
});
after(() => new Promise((r) => server.close(r)));

const login = (body) =>
  fetch(`${base}/api/admin/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

test('login rejects a wrong password and a wrong email', async () => {
  assert.equal((await login({ email: 'owner@example.com', password: 'nope' })).status, 401);
  assert.equal((await login({ email: 'x@example.com', password: 'correct horse battery' })).status, 401);
});

test('login succeeds and the token opens /me', async () => {
  const res = await login({ email: 'Owner@Example.com', password: 'correct horse battery' });
  assert.equal(res.status, 200);
  const { token } = await res.json();
  const me = await fetch(`${base}/api/admin/me`, { headers: { Authorization: `Bearer ${token}` } });
  assert.equal(me.status, 200);
  assert.equal((await me.json()).email, 'owner@example.com');
});

test('every admin route refuses a missing or forged token', async () => {
  for (const p of ['me', 'markets', 'enquiries', 'visits', 'updates', 'pages', 'team']) {
    assert.equal((await fetch(`${base}/api/admin/${p}`)).status, 401, p);
    const forged = await fetch(`${base}/api/admin/${p}`, {
      headers: { Authorization: 'Bearer abc.def' },
    });
    assert.equal(forged.status, 401, `${p} forged`);
  }
  const { token } = await (await login({ email: 'owner@example.com', password: 'correct horse battery' })).json();
  const tampered = token.slice(0, -2) + (token.endsWith('aa') ? 'bb' : 'aa');
  const res = await fetch(`${base}/api/admin/markets`, { headers: { Authorization: `Bearer ${tampered}` } });
  assert.equal(res.status, 401);
});

test('with a valid token but no database the data routes answer 503', async () => {
  const { token } = await (await login({ email: 'owner@example.com', password: 'correct horse battery' })).json();
  const res = await fetch(`${base}/api/admin/markets`, { headers: { Authorization: `Bearer ${token}` } });
  assert.equal(res.status, 503);
});

test('login is switched off when the admin env is incomplete', async () => {
  const saved = process.env.ADMIN_PASSWORD_HASH;
  delete process.env.ADMIN_PASSWORD_HASH;
  assert.equal((await login({ email: 'owner@example.com', password: 'x' })).status, 503);
  process.env.ADMIN_PASSWORD_HASH = saved;
});

test('the public content feed and visit beacon do not need a login', async () => {
  assert.equal((await fetch(`${base}/api/public/content`)).status, 503); // no DB here, but not 401
  const v = await fetch(`${base}/api/public/visit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ path: '/about' }),
  });
  assert.equal(v.status, 204);
});

test('models reject bad input', () => {
  assert.ok(new Market({ name: 'X', code: 'XX', slug: 'Bad Slug!' }).validateSync());
  assert.ok(new Market({ name: 'X', code: 'XX', slug: 'good-slug', region: 'Mars' }).validateSync());
  assert.equal(new Market({ name: 'X', code: 'xx', slug: 'good-slug' }).validateSync(), undefined);
  assert.ok(new C.Update({ title: 'T', slug: 'a b', body: 'b' }).validateSync());
  assert.ok(new C.Testimonial({ name: 'A' }).validateSync()); // quote is required
});
