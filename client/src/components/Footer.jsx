import { Link } from 'react-router-dom';
import { useCatalogue } from '../CatalogueContext.jsx';
import { CONTACT, SITE, isPlaceholder } from '../lib.js';
import './Footer.css';

export default function Footer() {
  const { businessAreas } = useCatalogue();

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div>
            <img
              src="/images/brand/logo-mark.webp"
              alt=""
              width="56"
              height="56"
              className="footer__mark"
              loading="lazy"
            />
            <p className="footer__brand">{SITE.name}</p>
            <p className="footer__intro">
              Nonwoven solutions for a better tomorrow. Needle punched and
              thermal bonded nonwovens — 100–1200 GSM, roll widths to 5.2 m,
              made to your specification.
            </p>
          </div>

          <div>
            <h2>Business Areas</h2>
            {businessAreas.map((area) => (
              <Link key={area.slug} to={`/business-areas/${area.slug}`}>
                {area.name}
              </Link>
            ))}
          </div>

          {/* Category pages are linked from every page, so they stay
              crawlable without the JavaScript mega-menu having to open. */}
          <div>
            <h2>Products</h2>
            <Link to="/products">All products</Link>
            {businessAreas.map((area) => (
              <Link key={area.slug} to={`/products/${area.slug}`}>
                {area.name}
              </Link>
            ))}
          </div>

          <div>
            <h2>Company</h2>
            <Link to="/about">About Us</Link>
            <Link to="/manufacturing">Manufacturing</Link>
            <Link to="/guides">Buyer&apos;s guides</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div>
            <h2>Reach us</h2>
            <Link to="/contact#enquiry">Send an enquiry</Link>
            <a className="footer__detail" href={CONTACT.phoneHref}>
              {CONTACT.phone}
            </a>
            <a className="footer__detail" href={CONTACT.emailHref}>
              {CONTACT.email}
            </a>
          </div>
        </div>

        <div className="footer__copy">
          <span>
            © {new Date().getFullYear()} {SITE.name}
          </span>
          {isPlaceholder(CONTACT.address) ? null : (
            <span>{CONTACT.address}</span>
          )}
          <Link to="/privacy" className="footer__legal">
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
