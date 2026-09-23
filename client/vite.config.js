import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { existsSync } from 'node:fs';

/**
 * `vite preview` is a single-page-app server: it rewrites any unknown URL to
 * the root index.html. That is wrong for this site, because the build writes a
 * real prerendered page at dist/<route>/index.html — the SPA fallback would
 * hand the browser the home page's markup for /products and React would then
 * hydrate it against the Products tree and fail.
 *
 * So in preview (never in dev, where no prerendered files exist) resolve a
 * clean URL to its own index.html first. Production hosting must do the same;
 * public/.htaccess does it for Apache.
 */
function servePrerenderedPages() {
  const dist = path.resolve(import.meta.dirname, 'dist');
  return {
    name: 'serve-prerendered-pages',
    configurePreviewServer(server) {
      server.middlewares.use((req, _res, next) => {
        const [pathname] = (req.url || '/').split('?');
        if (!path.extname(pathname)) {
          const candidate = path.join(dist, pathname, 'index.html');
          if (existsSync(candidate)) {
            req.url = `${pathname.replace(/\/$/, '')}/index.html`;
          }
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), servePrerenderedPages()],
  server: { port: 3100 },
  preview: { port: 3100 },
  build: { outDir: 'dist' },
});
