import { Link } from 'react-router-dom';
import { FACTORY } from '../data/locations.js';
import { useCatalogue } from '../CatalogueContext.jsx';
import { CONTACT, SITE } from '../lib.js';
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
            <Link to="/guides">Buyer’s guides</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div>
            <h2>Reach us</h2>
            <Link to="/contact#enquiry">Send an enquiry</Link>
            {/* PLACEHOLDERS — contact details pending from Sir */}
            <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
            <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">
              WhatsApp us
            </a>
            <a href={CONTACT.emailHref}>{CONTACT.email}</a>
            <a href={FACTORY.mapUrl} target="_blank" rel="noopener noreferrer">
              Factory on Google Maps
            </a>
            <address className="footer__address">
              {CONTACT.address}
            </address>
            <a
              className="footer__directions"
              href={CONTACT.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get directions →
            </a>
          </div>
        </div>

        <div className="footer__copy">
          <span>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
            {' · '}
            <Link to="/privacy" className="footer__legal">
              Privacy notice
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
