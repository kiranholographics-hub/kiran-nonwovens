import { Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import TextureDefs from './components/TextureDefs.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import { CatalogueProvider } from './CatalogueContext.jsx';

import Home from './pages/Home.jsx';
import BusinessArea from './pages/BusinessArea.jsx';
import Products from './pages/Products.jsx';
import BusinessAreas from './pages/BusinessAreas.jsx';
import Category from './pages/Category.jsx';
import Product from './pages/Product.jsx';
import About from './pages/About.jsx';
import Manufacturing from './pages/Manufacturing.jsx';
import Contact from './pages/Contact.jsx';
import Exports from './pages/Exports.jsx';
import ExportMarket from './pages/ExportMarket.jsx';
import Updates from './pages/Updates.jsx';
import Update from './pages/Update.jsx';
import CustomPage from './pages/CustomPage.jsx';
import Guides from './pages/Guides.jsx';
import Guide from './pages/Guide.jsx';
import Privacy from './pages/Privacy.jsx';
import NotFound from './pages/NotFound.jsx';

// The admin panel is its own chunk: visitors to the public site never download it.
const HqApp = lazy(() => import('./hq/HqApp.jsx'));

const API = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');

/** Counts a page view — no cookie, no IP stored (see server/routes/public.js).
 *  Skipped for the owner while signed in to /hq, and for Do Not Track. */
function VisitBeacon() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (!API || pathname.startsWith('/hq')) return;
    try {
      if (navigator.doNotTrack === '1' || sessionStorage.getItem('hq_token')) return;
      fetch(`${API}/api/public/visit`, {
        method: 'POST',
        keepalive: true,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path: pathname, referrer: document.referrer }),
      }).catch(() => {});
    } catch {
      /* analytics must never break the page */
    }
  }, [pathname]);
  return null;
}

/** Router keeps scroll position between pages otherwise; anchors still work. */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const { pathname } = useLocation();
  if (pathname === '/hq' || pathname.startsWith('/hq/')) {
    return (
      <Suspense fallback={null}>
        <HqApp />
      </Suspense>
    );
  }
  return (
    <CatalogueProvider>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <TextureDefs />
      <ScrollToTop />
      <ScrollProgress />
      <VisitBeacon />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business-areas" element={<BusinessAreas />} />
          <Route path="/business-areas/:slug" element={<BusinessArea />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<Category />} />
          <Route path="/products/:category/:slug" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/exports" element={<Exports />} />
          <Route path="/exports/:slug" element={<ExportMarket />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/updates/:slug" element={<Update />} />
          <Route path="/pages/:slug" element={<CustomPage />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/guides/:slug" element={<Guide />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </CatalogueProvider>
  );
}
