import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from './App.jsx';
import { collectHead, resetHead } from './head.js';
// No stylesheet imports here: the client build already emits every stylesheet
// and index.html links them. The SSR bundle only needs the markup.

/**
 * Renders one route to static HTML for the prerender step.
 *
 * Returns the body markup and, separately, the head tags that route's <Seo>
 * declared — which is why <Seo> renders nothing into the tree itself.
 */
export function render(url) {
  resetHead();
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  );
  return { html, head: collectHead() };
}
