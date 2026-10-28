/**
 * Serves the built website (client/dist) from this same app, so the site and
 * its API live at one address: kirannonwovens.com and kirannonwovens.com/api.
 *
 * These are the rules client/public/.htaccess used to give Apache, moved here
 * because a Node app is not behind Apache. They matter for search: every page
 * has exactly one address, retired pages 301 to their replacement, and an
 * unknown address is a real 404 rather than the home page.
 *
 * Nothing here touches /api — those routes are handled before this runs.
 */
import { existsSync, statSync } from 'node:fs';
import path from 'node:path';
import express from 'express';

/** The one hostname every page is served from (also read by client/scripts/predeploy.mjs). */
export const CANONICAL_HOST = 'kirannonwovens.com';

// ── Retired per-country export pages ──────────────────────────────────────
// 32 per-country pages shared most of their content (a doorway pattern), so
// they were replaced by six region pages. The 301s keep every old link and any
// ranking it earned. The South America region page keeps the slug the old
// catch-all page used, so that URL is served, not redirected.
const RETIRED = {
  'asia-pacific': ['australia', 'bangladesh', 'japan', 'nepal', 'new-zealand', 'south-korea', 'sri-lanka'],
  'south-america': ['brazil', 'chile', 'colombia', 'peru'],
  'north-america': ['canada', 'mexico', 'usa'],
  europe: ['denmark', 'france', 'germany', 'italy', 'netherlands', 'norway', 'poland', 'spain', 'sweden', 'uk'],
  africa: ['kenya', 'nigeria', 'south-africa'],
  'middle-east': ['oman', 'qatar', 'saudi-arabia', 'uae'],
};
export const REDIRECTS = new Map(
  Object.entries(RETIRED).flatMap(([region, countries]) =>
    countries.map((c) => [
      `/exports/${c}-nonwoven-felt-supplier`,
      `/exports/${region}-nonwoven-felt-supplier`,
    ])
  )
);

/** Same headers Apache sent, minus the API's strict CSP (pages load scripts and styles). */
function pageHeaders(_req, res, next) {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=()');
  next();
}

/** Hashed assets cache for a year; videos for a month; HTML, sitemap and robots revalidate. */
function cacheHeaders(res, file) {
  if (/\.(js|css|woff2?|svg|png|jpe?g|webp|avif)$/i.test(file)) {
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  } else if (/\.(mp4|webm)$/i.test(file)) {
    res.setHeader('Cache-Control', 'public, max-age=2592000');
  } else if (/\.(html|webmanifest|xml|txt)$/i.test(file)) {
    // The LiteSpeed header tells Hostinger's page cache not to hold a stale copy either.
    res.setHeader('Cache-Control', 'no-cache, must-revalidate');
    res.setHeader('X-LiteSpeed-Cache-Control', 'no-cache');
  }
}

/**
 * Mounts the website on `app`. Does nothing when `dist` has not been built
 * (the API still runs on its own, as it does in the tests).
 */
export function mountSite(app, distDir) {
  const dist = path.resolve(distDir);
  if (!existsSync(path.join(dist, 'index.html'))) {
    console.warn(`[site] no build at ${dist} — serving the API only. Run "npm run build" first.`);
    return;
  }
  const production = process.env.NODE_ENV === 'production';
  const site = express.Router();

  site.use(pageHeaders);

  // ── One site, one origin ─────────────────────────────────────────────
  // Everything goes to https and the bare hostname, so Google sees one site
  // rather than http/https x www/non-www. Only in production: locally the
  // host is localhost. Only an explicit "http" from the proxy counts as
  // plain http, so a proxy that sends no header cannot cause a redirect loop.
  site.use((req, res, next) => {
    if (!production) return next();
    const insecure = req.get('x-forwarded-proto') === 'http';
    if (insecure || req.hostname.toLowerCase() !== CANONICAL_HOST) {
      return res.redirect(301, `https://${CANONICAL_HOST}${req.originalUrl}`);
    }
    next();
  });

  site.use((req, res, next) => {
    const query = req.originalUrl.slice(req.path.length);
    const clean = req.path.replace(/\/+$/, '');
    const to = REDIRECTS.get(clean);
    if (to) return res.redirect(301, to + query);

    // /guides/x/  ->  /guides/x  (301, so the duplicate drops out of the index).
    // The canonical tag, the sitemap and every link use the form without the slash.
    if (req.path.length > 1 && req.path.endsWith('/')) {
      return res.redirect(301, (clean || '/') + query);
    }
    next();
  });

  // Files that exist (assets, sitemap, robots, videos). Dotfiles stay hidden,
  // and a directory is never redirected to its slash form (index.html is
  // handled below, at the clean URL).
  site.use(
    express.static(dist, { index: false, redirect: false, dotfiles: 'ignore', setHeaders: cacheHeaders })
  );

  const send = (res, rel, status = 200) =>
    res.status(status).sendFile(rel, { root: dist, dotfiles: 'deny' }, () => {
      if (!res.headersSent) res.status(404).end();
    });

  site.get(/.*/, (req, res, next) => {
    let rel;
    try {
      rel = decodeURIComponent(req.path);
    } catch {
      return next();
    }
    // The admin panel is a single-page app: /hq and /hq/... all load the shell.
    if (rel === '/hq' || rel.startsWith('/hq/')) {
      cacheHeaders(res, 'index.html');
      return send(res, 'index.html');
    }
    // /products  ->  products/index.html, when that page was prerendered.
    const page = path.join(rel, 'index.html');
    const full = path.resolve(dist, `.${page}`);
    if (full.startsWith(dist + path.sep) && existsSync(full) && statSync(full).isFile()) {
      cacheHeaders(res, full);
      return send(res, `.${page}`);
    }
    next();
  });

  // Anything else is a real 404: the prerendered 404 page with a 404 status,
  // so it is not a soft 404.
  site.use((req, res) => {
    cacheHeaders(res, '404.html');
    if (req.method === 'GET' && existsSync(path.join(dist, '404.html'))) return send(res, '404.html', 404);
    res.status(404).type('text').send('Not found');
  });

  app.use(site);
}
