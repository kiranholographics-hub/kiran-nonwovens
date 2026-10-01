import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import './styles/variables.css';
import './styles/reset.css';
import './styles/global.css';

const tree = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

const container = document.getElementById('root');

// The build prerenders every route to static HTML and stamps the route it
// rendered on #root (data-route). Hydrate only when that markup belongs to the
// URL being viewed ("*" is the prerendered 404 page, which matches any unknown
// URL). Otherwise — dev server, or a host that served another page's HTML —
// start clean, so React never tries to hydrate mismatched markup.
const normalise = (p) => (p.length > 1 ? p.replace(/\/+$/, '') : p);
const renderedFor = container.dataset.route;
const matches =
  renderedFor === '*' ||
  (renderedFor &&
    normalise(renderedFor) === normalise(window.location.pathname));

if (container.hasChildNodes() && matches) {
  hydrateRoot(container, tree);
} else {
  container.textContent = '';
  createRoot(container).render(tree);
}
