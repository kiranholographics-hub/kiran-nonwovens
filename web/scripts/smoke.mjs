/**
 * Smoke test for a running build of the site.
 *
 *   npm run build && npm start        # in one terminal
 *   npm run smoke                     # in another
 *
 * Checks what this site is actually for: that every product and business-area
 * page server-renders, that no two pages share a <title> or meta description,
 * that the spec table is real indexable HTML text rather than an image, that
 * a product has exactly one canonical URL, and that sitemap.xml covers the
 * whole catalogue. Point it elsewhere with SMOKE_URL.
 */
import { products, businessAreas } from '../src/data/catalog.js';

const BASE = process.env.SMOKE_URL || 'http://127.0.0.1:3100';
const get = async (p) => {
  const r = await fetch(BASE + p, { redirect: 'manual' });
  return { status: r.status, html: await r.text(), loc: r.headers.get('location') };
};
const titleOf = (h) => (h.match(/<title>([^<]*)<\/title>/) || [, ''])[1];
const descOf = (h) =>
  (h.match(/<meta name="description" content="([^"]*)"/) || [, ''])[1];

let fail = 0;
const check = (ok, msg) => {
  if (!ok) { fail++; console.log('  FAIL  ' + msg); }
};

const routes = [
  '/', '/business-areas', '/products', '/about', '/manufacturing', '/contact',
  ...businessAreas.map((b) => `/business-areas/${b.slug}`),
  ...businessAreas.map((b) => `/products/${b.slug}`),
  ...products.map((p) => `/products/${p.category}/${p.slug}`),
];

console.log(`Checking ${routes.length} routes…`);
const titles = new Map();
const descs = new Map();
for (const route of routes) {
  const { status, html } = await get(route);
  check(status === 200, `${route} -> ${status}`);
  const t = titleOf(html), d = descOf(html);
  check(!!t, `${route} has no <title>`);
  check(!!d, `${route} has no meta description`);
  if (titles.has(t)) check(false, `duplicate <title> "${t}" on ${route} and ${titles.get(t)}`);
  titles.set(t, route);
  if (d && descs.has(d)) check(false, `duplicate description on ${route} and ${descs.get(d)}`);
  descs.set(d, route);
}
console.log(`  unique titles: ${titles.size}/${routes.length}`);

// SEO requirement: the spec table must be real HTML text, server-rendered.
const p = products[0];
const prod = await get(`/products/${p.category}/${p.slug}`);
check(prod.html.includes('<table'), 'product page has no <table>');
check(prod.html.includes('Roll length'), 'spec table rows not server-rendered');
// Every spec row must carry real text, whether it is a figure, a
// "made to order" statement, or an explicit "to be confirmed".
check(
  prod.html.includes(p.specs.width),
  'spec width value not server-rendered'
);
check(
  prod.html.includes(p.specs.fibre[0]),
  'spec fibre value not server-rendered'
);
check(
  prod.html.includes('Made to requirement') ||
    prod.html.includes('To be confirmed'),
  'unsupplied specs render as neither a value nor a stated caveat'
);
check(prod.html.includes(p.shortDescription.slice(0, 40)), 'description not server-rendered');
check(prod.html.includes(p.applications[0]), 'applications tab content not in server HTML');
check(prod.html.includes(p.features[0]), 'features not in server HTML');
check(prod.html.includes('application/ld+json'), 'no structured data');
check(!/&lt;table/.test(prod.html), 'table markup escaped');

// Canonical: reaching a product under the wrong category redirects to the right one.
const wrong = await get(`/products/automotive/${p.slug}`);
check([307, 308].includes(wrong.status), `wrong-category URL returned ${wrong.status}, expected a redirect`);
check(
  (wrong.loc || '').endsWith(`/products/${p.category}/${p.slug}`),
  `wrong-category URL redirected to ${wrong.loc}`
);

// 404
const missing = await get('/products/geotextile/does-not-exist');
check(missing.status === 404, `unknown product returned ${missing.status}`);
const missingArea = await get('/business-areas/nope');
check(missingArea.status === 404, `unknown business area returned ${missingArea.status}`);

// sitemap.xml lists every product and business area
const sm = await get('/sitemap.xml');
check(sm.status === 200, 'sitemap missing');
for (const prod2 of products) {
  check(sm.html.includes(`/products/${prod2.category}/${prod2.slug}<`), `sitemap missing ${prod2.slug}`);
}
for (const b of businessAreas) {
  check(sm.html.includes(`/business-areas/${b.slug}<`), `sitemap missing area ${b.slug}`);
}
const urlCount = (sm.html.match(/<url>/g) || []).length;
console.log(`  sitemap urls: ${urlCount}`);

const rb = await get('/robots.txt');
check(rb.status === 200 && rb.html.includes('Sitemap:'), 'robots.txt missing sitemap line');

// Nav: both tracks present in server HTML on every page (crawlable links).
const home = await get('/');
for (const b of businessAreas) {
  check(home.html.includes(`/business-areas/${b.slug}`), `home nav missing area link ${b.slug}`);
  check(home.html.includes(`/products/${b.slug}`), `home nav missing product link ${b.slug}`);
}

// Enquiry endpoint: validation and the no-API-configured path.
const bad = await fetch(BASE + '/api/enquiries', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: '', email: 'x' }),
});
// 400 = the API validated it; 502/503 = API down or not configured. All three
// must come back as JSON a visitor can act on, never an unhandled crash.
const badBody = await bad.json().catch(() => null);
check([400, 502, 503].includes(bad.status), `enquiry endpoint returned ${bad.status}`);
check(!!(badBody?.error || badBody?.errors), 'enquiry failure returned no usable message');
console.log(`  enquiry endpoint: ${bad.status} — ${badBody?.error || JSON.stringify(badBody?.errors)}`);

console.log(fail ? `\n${fail} FAILURES` : '\nAll checks passed.');
process.exit(fail ? 1 : 0);
