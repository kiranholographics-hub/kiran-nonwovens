// The website rules that used to live in client/public/.htaccess (see site.js).
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

process.env.MONGODB_URI = '';
const { createApp } = await import('../app.js');

let dist;
let server;
let base;

before(async () => {
  dist = await mkdtemp(path.join(os.tmpdir(), 'kn-dist-'));
  const page = (rel, body) =>
    mkdir(path.dirname(path.join(dist, rel)), { recursive: true }).then(() => writeFile(path.join(dist, rel), body));
  await page('index.html', '<p>home</p>');
  await page('404.html', '<p>missing</p>');
  await page('products/index.html', '<p>products</p>');
  await page('exports/europe-nonwoven-felt-supplier/index.html', '<p>europe</p>');
  await page('assets/index-abc.js', 'console.log(1)');
  await page('sitemap.xml', '<urlset/>');
  await page('.htaccess', 'secret');
  server = createApp({ dist }).listen(0);
  base = `http://127.0.0.1:${server.address().port}`;
});

after(async () => {
  server.close();
  await rm(dist, { recursive: true, force: true });
});

const get = (p, headers = {}) => fetch(`${base}${p}`, { redirect: 'manual', headers });

test('a prerendered page is served at its clean address', async () => {
  const res = await get('/products');
  assert.equal(res.status, 200);
  assert.equal(await res.text(), '<p>products</p>');
  assert.match(res.headers.get('cache-control'), /no-cache/);
  assert.equal(res.headers.get('content-security-policy'), null); // the API's strict CSP stays on /api
});

test('the trailing-slash form 301s to the clean address, keeping the query', async () => {
  const res = await get('/products/?a=1');
  assert.equal(res.status, 301);
  assert.equal(res.headers.get('location'), '/products?a=1');
});

test('a retired country page 301s to its region page', async () => {
  const res = await get('/exports/germany-nonwoven-felt-supplier/');
  assert.equal(res.status, 301);
  assert.equal(res.headers.get('location'), '/exports/europe-nonwoven-felt-supplier');
});

test('hashed assets cache for a year', async () => {
  const res = await get('/assets/index-abc.js');
  assert.equal(res.status, 200);
  assert.match(res.headers.get('cache-control'), /immutable/);
});

test('/hq loads the app shell', async () => {
  const res = await get('/hq/markets');
  assert.equal(res.status, 200);
  assert.equal(await res.text(), '<p>home</p>');
});

test('an unknown address is a real 404 with the 404 page', async () => {
  const res = await get('/nope');
  assert.equal(res.status, 404);
  assert.equal(await res.text(), '<p>missing</p>');
});

test('dotfiles and paths outside the build are never served', async () => {
  assert.equal((await get('/.htaccess')).status, 404);
  assert.equal((await get('/..%2fpackage.json')).status, 404);
});

test('unknown API routes are still a JSON 404', async () => {
  const res = await get('/api/nope');
  assert.equal(res.status, 404);
  assert.deepEqual(await res.json(), { error: 'Not found' });
});

test('in production, www and plain http go to https on the bare host', async () => {
  const prev = process.env.NODE_ENV;
  process.env.NODE_ENV = 'production';
  const prod = createApp({ dist }).listen(0);
  const url = `http://127.0.0.1:${prod.address().port}`;
  try {
    const www = await fetch(`${url}/products?x=1`, { redirect: 'manual', headers: { 'x-forwarded-host': 'www.kirannonwovens.com' } });
    assert.equal(www.status, 301);
    assert.equal(www.headers.get('location'), 'https://kirannonwovens.com/products?x=1');

    const http = await fetch(`${url}/products`, {
      redirect: 'manual',
      headers: { 'x-forwarded-host': 'kirannonwovens.com', 'x-forwarded-proto': 'http' },
    });
    assert.equal(http.status, 301);

    const ok = await fetch(`${url}/products`, {
      redirect: 'manual',
      headers: { 'x-forwarded-host': 'kirannonwovens.com', 'x-forwarded-proto': 'https' },
    });
    assert.equal(ok.status, 200);

    // The API is never redirected, so the old api. subdomain keeps answering.
    const api = await fetch(`${url}/api/health`, { redirect: 'manual', headers: { 'x-forwarded-host': 'api.kirannonwovens.com' } });
    assert.notEqual(api.status, 301);
  } finally {
    prod.close();
    process.env.NODE_ENV = prev;
  }
});
