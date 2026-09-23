/**
 * Prerenders every route to static HTML, then writes sitemap.xml and
 * robots.txt.
 *
 * Why not react-snap, as the brief suggests: react-snap's last release is from
 * 2020 and it drives the app through a headless browser calling
 * `ReactDOM.hydrate`, an API React 19 removed. `vite-plugin-react-snap` does
 * not exist on npm at all. So this does the same job the way Vite supports
 * directly — a second, server-side build of the app, rendered to a string per
 * route with `renderToString`. It needs no browser download, runs in a couple
 * of seconds, and produces the same thing: real HTML per URL, with that page's
 * own <title> and meta description already in it.
 *
 * `main.jsx` hydrates the markup rather than replacing it, so the app is still
 * a normal SPA once JavaScript loads.
 *
 * Head tags do not travel in the markup: <Seo> keeps them out of the hydrated
 * tree (see src/head.js) and entry-server hands them back separately, so they
 * go straight into <head> and the client hydrates markup it agrees with.
 */
import { build } from 'vite';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { mkdir, readFile, writeFile, rm } from 'node:fs/promises';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const dist = path.join(root, 'dist');
const ssrDist = path.join(root, 'dist-ssr');

const SITE_URL = (process.env.VITE_SITE_URL || 'http://localhost:3100').replace(
  /\/$/,
  ''
);

/** Static routes, with the sitemap priority each deserves. */
const STATIC_ROUTES = [
  { url: '/', priority: '1.0' },
  { url: '/business-areas', priority: '0.8' },
  { url: '/products', priority: '0.9' },
  { url: '/about', priority: '0.6' },
  { url: '/manufacturing', priority: '0.7' },
  { url: '/contact', priority: '0.6' },
];

async function loadCatalogue() {
  const mod = await import(
    pathToFileURL(path.join(root, 'src/data/catalog.js')).href
  );
  return mod;
}

/** Every URL the site has, derived from the catalogue — never hand-listed. */
function allRoutes({ businessAreas, products }) {
  const areaRoutes = businessAreas.flatMap((a) => [
    { url: `/business-areas/${a.slug}`, priority: '0.8' },
    { url: `/products/${a.slug}`, priority: '0.8' },
  ]);
  const productRoutes = products.map((p) => ({
    url: `/products/${p.category}/${p.slug}`,
    priority: '0.9',
  }));
  return [...STATIC_ROUTES, ...areaRoutes, ...productRoutes];
}

async function buildSsrBundle() {
  await build({
    root,
    logLevel: 'warn',
    build: {
      ssr: path.join(root, 'src/entry-server.jsx'),
      outDir: 'dist-ssr',
      emptyOutDir: true,
    },
  });
}

function inject(template, { html, head }) {
  let out = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  if (head) {
    // The page supplies its own title/description, so drop the shell's
    // defaults rather than shipping two of each.
    out = out
      .replace(/<title>[\s\S]*?<\/title>\s*/i, '')
      .replace(/<meta\s+name="description"[\s\S]*?>\s*/i, '')
      .replace('</head>', `  ${head}\n  </head>`);
  }
  return out;
}

const xmlEscape = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

async function run() {
  const catalogue = await loadCatalogue();
  const routes = allRoutes(catalogue);

  console.log(`[prerender] building SSR bundle…`);
  await buildSsrBundle();

  const { render } = await import(
    pathToFileURL(path.join(ssrDist, 'entry-server.js')).href
  );

  const template = await readFile(path.join(dist, 'index.html'), 'utf8');

  for (const { url } of routes) {
    const html = inject(template, render(url));
    const outDir = url === '/' ? dist : path.join(dist, url);
    await mkdir(outDir, { recursive: true });
    await writeFile(path.join(outDir, 'index.html'), html, 'utf8');
  }
  console.log(`[prerender] wrote ${routes.length} pages`);

  // A 404 that is still a real page, for hosts that serve one.
  const notFound = inject(template, render('/__not-found__'));
  await writeFile(path.join(dist, '404.html'), notFound, 'utf8');

  const lastmod = new Date().toISOString().slice(0, 10);
  const sitemap =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    routes
      .map(
        ({ url, priority }) =>
          `  <url>\n` +
          `    <loc>${xmlEscape(SITE_URL + url)}</loc>\n` +
          `    <lastmod>${lastmod}</lastmod>\n` +
          `    <changefreq>monthly</changefreq>\n` +
          `    <priority>${priority}</priority>\n` +
          `  </url>`
      )
      .join('\n') +
    `\n</urlset>\n`;
  await writeFile(path.join(dist, 'sitemap.xml'), sitemap, 'utf8');
  console.log(`[prerender] sitemap.xml: ${routes.length} urls`);

  await writeFile(
    path.join(dist, 'robots.txt'),
    `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
    'utf8'
  );

  await rm(ssrDist, { recursive: true, force: true });
  console.log('[prerender] done');
}

run().catch((err) => {
  console.error('[prerender] failed:', err);
  process.exit(1);
});
