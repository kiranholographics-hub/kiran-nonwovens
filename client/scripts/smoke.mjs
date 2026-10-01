/**
 * Acceptance check for a production build.
 *
 *   npm run build && npm run smoke
 *
 * It inspects `dist/` — the exact files that get uploaded — rather than a
 * running dev server, because what matters for this site is what a crawler
 * receives before any JavaScript runs. It checks that every route prerendered,
 * that no two pages share a <title> or meta description, that the spec table
 * is real indexable HTML text rather than an image, that each page carries its
 * own canonical URL, and that sitemap.xml covers the whole catalogue.
 */
import path from 'node:path';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

import { products, businessAreas } from '../src/data/catalog.js';
import { guides } from '../src/data/guides.js';

const here = path.dirname(fileURLToPath(import.meta.url));
const dist = path.resolve(here, '../dist');

let fail = 0;
const check = (ok, msg) => {
  if (!ok) {
    fail++;
    console.log('  FAIL  ' + msg);
  }
};

if (!existsSync(dist)) {
  console.error('dist/ not found — run `npm run build` first.');
  process.exit(1);
}

const routes = [
  '/',
  '/business-areas',
  '/products',
  '/about',
  '/manufacturing',
  '/contact',
  '/guides',
  '/privacy',
  ...guides.map((g) => `/guides/${g.slug}`),
  ...businessAreas.map((b) => `/business-areas/${b.slug}`),
  ...businessAreas.map((b) => `/products/${b.slug}`),
  ...products.map((p) => `/products/${p.category}/${p.slug}`),
];

/** First capture group of a match, or '' when nothing matched. */
const capture = (text, re) => text.match(re)?.[1] ?? '';

const headOf = (html) => capture(html, /<head>([\s\S]*?)<\/head>/i);
const titleOf = (html) => capture(headOf(html), /<title>([\s\S]*?)<\/title>/i);
const descOf = (html) =>
  capture(headOf(html), /<meta name="description" content="([\s\S]*?)"/i);
const canonicalOf = (html) =>
  capture(headOf(html), /<link rel="canonical" href="([^"]*)"/i);

console.log(`Checking ${routes.length} prerendered routes…`);

const titles = new Map();
const descs = new Map();

for (const route of routes) {
  const file = path.join(dist, route === '/' ? '' : route, 'index.html');
  if (!existsSync(file)) {
    check(false, `${route} was not prerendered (${file} missing)`);
    continue;
  }
  const html = await readFile(file, 'utf8');

  const title = titleOf(html);
  const desc = descOf(html);
  check(!!title, `${route} has no <title> in <head>`);
  check(!!desc, `${route} has no meta description in <head>`);
  check(
    canonicalOf(html).endsWith(route === '/' ? '/' : route),
    `${route} canonical is "${canonicalOf(html)}"`
  );
  // React's hoisted tags must end up in <head>, never left in the body.
  check(
    !html.includes('<div id="root"><title>'),
    `${route} left its <title> inside the body`
  );

  // ── SEO checks ──────────────────────────────────────────────────────────
  const head = headOf(html);
  const types = [...head.matchAll(/"@type":"([A-Za-z]+)"/g)].map((m) => m[1]);
  check(title.length <= 65, `${route} title is ${title.length} chars (max 65): ${title}`);
  check(
    desc.length >= 90 && desc.length <= 165,
    `${route} description is ${desc.length} chars (want 90–165)`
  );
  check(!/pending|\[x\]|to confirm/i.test(title + desc), `${route} title/description leaks placeholder text`);
  check(/property="og:image" content="[^"]+\/images\/og-default\.jpg"/.test(head) || /property="og:image"/.test(head), `${route} has no og:image`);
  check(/name="twitter:image"/.test(head), `${route} has no twitter:image`);
  check(/name="robots"/.test(head), `${route} has no robots meta`);
  if (route !== '/') {
    check(types.includes('BreadcrumbList'), `${route} has no BreadcrumbList schema`);
  }
  if (route === '/') {
    check(types.includes('Organization') && types.includes('WebSite'), `/ is missing Organization/WebSite schema`);
  }
  if (route.startsWith('/guides/')) {
    check(types.includes('Article'), `${route} has no Article schema`);
  }
  // Every page that shows an FAQ must also ship it as FAQPage schema.
  const hasFaq = html.includes('class="faq"');
  check(!hasFaq || types.includes('FAQPage'), `${route} shows an FAQ but has no FAQPage schema`);
  // Category pages were thin before; they now carry a buyer's guide + FAQ.
  if (/^\/products\/[a-z-]+$/.test(route)) {
    check(hasFaq, `${route} category page has no FAQ`);
  }

  // Redesign checks: every page has exactly one <h1>, and the banner that
  // carries it is in the static HTML (crawlers see it before any JS runs).
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  check(h1s === 1, `${route} has ${h1s} <h1> elements (expected 1)`);
  check(
    route === '/'
      ? html.includes('hero-screen')
      : html.includes('page-hero') ||
          html.includes('hero-screen') ||
          route.startsWith('/products/'),
    `${route} is missing its banner`
  );

  if (titles.has(title))
    check(false, `duplicate <title> on ${route} and ${titles.get(title)}`);
  titles.set(title, route);
  if (desc && descs.has(desc))
    check(false, `duplicate description on ${route} and ${descs.get(desc)}`);
  descs.set(desc, route);
}

// Guides: real length, real headings, links into the catalogue.
for (const g of guides) {
  const gh = await readFile(path.join(dist, 'guides', g.slug, 'index.html'), 'utf8');
  const words = gh.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  check(words > 700, `guide ${g.slug} has only ${words} words in its HTML`);
  check(/href="\/products\//.test(gh), `guide ${g.slug} does not link to any product`);
}
const nf = await readFile(path.join(dist, '404.html'), 'utf8');
check(/name="robots" content="noindex/.test(nf), '404.html is not noindex');

console.log(`  unique titles: ${titles.size}/${routes.length}`);

// The spec table is the main SEO content, so it has to be in the static HTML.
const p = products[0];
const productHtml = await readFile(
  path.join(dist, 'products', p.category, p.slug, 'index.html'),
  'utf8'
);
check(productHtml.includes('<table'), 'product page has no <table>');
check(productHtml.includes('Roll length'), 'spec table rows not prerendered');
check(
  productHtml.includes(p.specs.width),
  'spec width value not prerendered'
);
check(productHtml.includes(p.specs.fibre[0]), 'spec fibre value not prerendered');
check(
  productHtml.includes('Made to requirement') ||
    productHtml.includes('To be confirmed'),
  'unsupplied specs render as neither a value nor a stated caveat'
);
check(
  productHtml.includes(p.shortDescription.slice(0, 40)),
  'short description not prerendered'
);
check(productHtml.includes(p.applications[0]), 'applications tab not prerendered');
check(productHtml.includes(p.features[0]), 'features not prerendered');
check(productHtml.includes('application/ld+json'), 'no structured data');
check(!/&lt;table/.test(productHtml), 'table markup escaped');

// Category pages must be reachable without the JS mega-menu opening.
const home = await readFile(path.join(dist, 'index.html'), 'utf8');
for (const b of businessAreas) {
  check(home.includes(`/business-areas/${b.slug}`), `home missing area link ${b.slug}`);
  check(home.includes(`/products/${b.slug}`), `home missing category link ${b.slug}`);
}

// sitemap.xml + robots.txt
const sitemap = await readFile(path.join(dist, 'sitemap.xml'), 'utf8');
for (const prod of products) {
  check(
    sitemap.includes(`/products/${prod.category}/${prod.slug}<`),
    `sitemap missing ${prod.slug}`
  );
}
for (const b of businessAreas) {
  check(sitemap.includes(`/business-areas/${b.slug}<`), `sitemap missing area ${b.slug}`);
}
const urlCount = (sitemap.match(/<url>/g) || []).length;
check(urlCount === routes.length, `sitemap has ${urlCount} urls, expected ${routes.length}`);
console.log(`  sitemap urls: ${urlCount}`);

const robots = await readFile(path.join(dist, 'robots.txt'), 'utf8');
check(robots.includes('Sitemap:'), 'robots.txt has no sitemap line');

check(existsSync(path.join(dist, '404.html')), '404.html was not written');

console.log(fail ? `\n${fail} FAILURES` : '\nAll checks passed.');
process.exit(fail ? 1 : 0);
