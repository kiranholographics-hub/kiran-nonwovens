'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const ABOUT_LINKS = [
  { href: '/about', label: 'Company overview' },
  { href: '/about#history', label: 'History' },
  { href: '/about#technology', label: 'Technology' },
  { href: '/about#quality', label: 'Quality & certifications' },
];

const CONTACT_LINKS = [
  { href: '/contact', label: 'Contact Kiran Nonwovens' },
  { href: '/contact#enquiry', label: 'Send an enquiry' },
];

/**
 * Dual-track navigation, the Fibertex pattern: the same four industries appear
 * twice — once as Business Areas (the story) and once as Products (the
 * catalogue). Mega-menus open on hover and on click/Enter; Escape closes.
 */
export default function Header({ businessAreas, products }) {
  const [open, setOpen] = useState(null); // 'business' | 'products' | 'about' | 'contact'
  const [drawer, setDrawer] = useState(false);
  const pathname = usePathname();
  const navRef = useRef(null);

  // Any navigation closes everything. Adjusting during render rather than in an
  // effect means the menu is never painted open on the page you just moved to.
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

  const inArea = (slug) => products.filter((p) => p.category === slug);

  const panel = (key, children) =>
    open === key ? (
      <div className={`${styles.simple} ${styles.alignRight}`}>{children}</div>
    ) : null;

  /**
   * A top-level nav item is a real link to its section, not a button: hovering
   * or focusing it opens the panel, and clicking it goes to the landing page.
   * (A button that both opened on hover and toggled on click closed itself the
   * moment a mouse user clicked the thing they had just hovered.)
   */
  const trigger = (key, href, label) => (
    <Link
      href={href}
      className={styles.trigger}
      aria-expanded={open === key}
      onFocus={() => setOpen(key)}
      onClick={() => setOpen(null)}
    >
      {label}
      {/* Decorative caret. As a CSS ::after it was pulled into the link's
          accessible name, so screen readers announced "Products ▾". */}
      <span className={styles.caret} aria-hidden="true">
        ▾
      </span>
    </Link>
  );

  return (
    <header className={styles.header}>
      <div className={`wrap ${styles.bar}`}>
        <Link href="/" className={styles.logo}>
          Kiran Nonwovens
          {/* PLACEHOLDER — real logo pending from Sir */}
          <small>Nonwoven felt &amp; geotextiles</small>
        </Link>

        <nav
          className={styles.nav}
          aria-label="Main"
          ref={navRef}
          onMouseLeave={() => setOpen(null)}
        >
          <div
            className={styles.item}
            onMouseEnter={() => setOpen('business')}
          >
            {trigger('business', '/business-areas', 'Business Areas')}
            {open === 'business' ? (
              <div className={styles.mega}>
                {businessAreas.map((area) => (
                  <div className={styles.col} key={area.slug}>
                    <strong>
                      <Link
                        href={`/business-areas/${area.slug}`}
                        className={styles.overview}
                      >
                        {area.name}
                      </Link>
                    </strong>
                    <Link href={`/business-areas/${area.slug}#overview`}>
                      Overview
                    </Link>
                    <Link href={`/business-areas/${area.slug}#applications`}>
                      Applications
                    </Link>
                    {area.hasDownloads ? (
                      <Link href={`/business-areas/${area.slug}#downloads`}>
                        Downloads
                      </Link>
                    ) : null}
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div
            className={styles.item}
            onMouseEnter={() => setOpen('products')}
          >
            {trigger('products', '/products', 'Products')}
            {open === 'products' ? (
              <div className={styles.mega}>
                {businessAreas.map((area) => (
                  <div className={styles.col} key={area.slug}>
                    <strong>
                      <Link
                        href={`/products/${area.slug}`}
                        className={styles.overview}
                      >
                        {area.name}
                      </Link>
                    </strong>
                    {inArea(area.slug).map((product) => (
                      <Link
                        key={product.slug}
                        href={`/products/${area.slug}/${product.slug}`}
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div className={styles.item} onMouseEnter={() => setOpen('about')}>
            {trigger('about', '/about', 'About Us')}
            {panel(
              'about',
              ABOUT_LINKS.map((l) => (
                <Link key={l.href} href={l.href}>
                  {l.label}
                </Link>
              ))
            )}
          </div>

          <Link href="/manufacturing" className={styles.navLink}>
            Manufacturing
          </Link>

          <div className={styles.item} onMouseEnter={() => setOpen('contact')}>
            {trigger('contact', '/contact', 'Contact')}
            {panel(
              'contact',
              CONTACT_LINKS.map((l) => (
                <Link key={l.href} href={l.href}>
                  {l.label}
                </Link>
              ))
            )}
          </div>
        </nav>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.burger}
            aria-expanded={drawer}
            aria-controls="mobile-drawer"
            onClick={() => setDrawer((v) => !v)}
          >
            {drawer ? 'Close' : 'Menu'}
          </button>
          <Link href="/contact" className={`btn btnFill ${styles.deskCta}`}>
            Get quote
          </Link>
        </div>
      </div>

      {drawer ? (
        <div className={styles.drawer} id="mobile-drawer">
          <div className={styles.group}>Business Areas</div>
          <div className={styles.sub}>
            {businessAreas.map((area) => (
              <Link key={area.slug} href={`/business-areas/${area.slug}`}>
                {area.name}
              </Link>
            ))}
          </div>

          <div className={styles.group}>Products</div>
          <div className={styles.sub}>
            <Link href="/products">All products</Link>
            {businessAreas.map((area) => (
              <Link key={area.slug} href={`/products/${area.slug}`}>
                {area.name}
              </Link>
            ))}
          </div>

          <Link href="/about">About Us</Link>
          <Link href="/manufacturing">Manufacturing</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/contact#enquiry" className={`btn btnFill ${styles.drawerCta}`}>
            Get quote
          </Link>
        </div>
      ) : null}
    </header>
  );
}
