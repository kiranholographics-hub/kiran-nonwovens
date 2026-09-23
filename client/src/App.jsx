import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import TextureDefs from './components/TextureDefs.jsx';
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
import NotFound from './pages/NotFound.jsx';

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
  return (
    <CatalogueProvider>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <TextureDefs />
      <ScrollToTop />
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
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </CatalogueProvider>
  );
}
