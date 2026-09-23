import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCatalogue } from '../CatalogueContext.jsx';
import './Header.css';

const ABOUT_LINKS = [
  { to: '/about', label: 'Company overview' },
  { to: '/about#history', label: 'History' },
  { to: '/about#technology', label: 'Technology' },
  { to: '/about#quality', label: 'Quality & certifications' },
];

const CONTACT_LINKS = [
  { to: '/contact', label: 'Contact Kiran Nonwovens' },
  { to: '/contact#enquiry', label: 'Send an enquiry' },
];

/**
 * Dual-track navigation, the Fibertex pattern: the same four industries appear
 * twice — once as Business Areas (the story) and once as Products (the
 * catalogue).
 *
 * Each top-level item is a real link to its section, not a button: hovering or
 * focusing it opens the panel, clicking it goes to the landing page. (A button
 * that both opened on hover and toggled on click closed itself the moment a
 * mouse user clicked the thing they had just hovered.)
 */
export default function Header() {
  const { businessAreas, productsIn } = useCatalogue();
  const [open, setOpen] = useState(null);
  const [drawer, setDrawer] = useState(false);
  const { pathname } = useLocation();
  const navRef = useRef(null);

  // Any navigation closes everything. Adjusting during render rather than in
  // an effect means the menu is never painted open on the page you moved to.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(null);
    setDrawer(false);
  }

  useEffect(() => {
    if (!open && !drawer) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(null);
        setDrawer(false);
      }
    };
    const onClickAway = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpen(null);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClickAway);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClickAway);
    };
  }, [open, drawer]);

  const trigger = (key, to, label) => (
    <Link
      to={to}
      className="header__trigger"
      aria-expanded={open === key}
      onFocus={() => setOpen(key)}
      onClick={() => setOpen(null)}
    >
      {label}
      {/* Decorative. As a CSS ::after it was pulled into the link's
          accessible name, so screen readers announced "Products ▾". */}
      <span className="header__caret" aria-hidden="true">
        ▾
      </span>
    </Link>
  );

  const simplePanel = (key, links) =>
    open === key ? (
      <div className="header__panel header__panel--simple">
        {links.map((l) => (
          <Link key={l.to} to={l.to}>
            {l.label}
          </Link>
        ))}
      </div>
    ) : null;

  return (
    <header className="header">
      <div className="wrap header__bar">
        <Link to="/" className="header__logo">
          Kiran Nonwovens
          {/* PLACEHOLDER — real logo pending from Sir */}
          <small>Nonwoven felt &amp; geotextiles</small>
        </Link>

        <nav
          className="header__nav"
          aria-label="Main"
          ref={navRef}
          onMouseLeave={() => setOpen(null)}
        >
          <div className="header__item" onMouseEnter={() => setOpen('business')}>
            {trigger('business', '/business-areas', 'Business Areas')}
            {open === 'business' ? (
              <div className="header__panel header__panel--mega">
                {businessAreas.map((area) => (
                  <div className="header__col" key={area.slug}>
                    <strong>
                      <Link
                        to={`/business-areas/${area.slug}`}
                        className="header__col-title"
                      >
                        {area.name}
                      </Link>
                    </strong>
                    <Link to={`/business-areas/${area.slug}#overview`}>Overview</Link>
                    <Link to={`/business-areas/${area.slug}#applications`}>
                      Applications
                    </Link>
                    {area.hasDownloads ? (
                      <Link to={`/business-areas/${area.slug}#downloads`}>
                        Downloads
                      </Link>
                    ) : null}
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div className="header__item" onMouseEnter={() => setOpen('products')}>
            {trigger('products', '/products', 'Products')}
            {open === 'products' ? (
              <div className="header__panel header__panel--mega">
                {businessAreas.map((area) => (
                  <div className="header__col" key={area.slug}>
                    <strong>
                      <Link
                        to={`/products/${area.slug}`}
                        className="header__col-title"
                      >
                        {area.name}
                      </Link>
                    </strong>
                    {productsIn(area.slug).map((product) => (
                      <Link
                        key={product.slug}
                        to={`/products/${area.slug}/${product.slug}`}
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div className="header__item" onMouseEnter={() => setOpen('about')}>
            {trigger('about', '/about', 'About Us')}
            {simplePanel('about', ABOUT_LINKS)}
          </div>

          <Link to="/manufacturing" className="header__link">
            Manufacturing
          </Link>

          <div className="header__item" onMouseEnter={() => setOpen('contact')}>
            {trigger('contact', '/contact', 'Contact')}
            {simplePanel('contact', CONTACT_LINKS)}
          </div>
        </nav>

        <div className="header__actions">
          <button
            type="button"
            className="header__burger"
            aria-expanded={drawer}
            aria-controls="mobile-drawer"
            onClick={() => setDrawer((v) => !v)}
          >
            {drawer ? 'Close' : 'Menu'}
          </button>
          <Link to="/contact" className="btn btn--fill header__cta">
            Get quote
          </Link>
        </div>
      </div>

      {drawer ? (
        <div className="header__drawer" id="mobile-drawer">
          <div className="header__group">Business Areas</div>
          <div className="header__sub">
            {businessAreas.map((area) => (
              <Link key={area.slug} to={`/business-areas/${area.slug}`}>
                {area.name}
              </Link>
            ))}
          </div>

          <div className="header__group">Products</div>
          <div className="header__sub">
            <Link to="/products">All products</Link>
            {businessAreas.map((area) => (
              <Link key={area.slug} to={`/products/${area.slug}`}>
                {area.name}
              </Link>
            ))}
          </div>

          <Link to="/about">About Us</Link>
          <Link to="/manufacturing">Manufacturing</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/contact#enquiry" className="btn btn--fill header__drawer-cta">
            Get quote
          </Link>
        </div>
      ) : null}
    </header>
  );
}
