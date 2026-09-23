import { Link } from 'react-router-dom';
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
            <h2>{SITE.name}</h2>
            <p className="footer__intro">
              Needle punched and thermal bonded nonwovens — 100–1200 GSM, roll
              widths to 5.2 m, made to your specification.
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
            <Link to="/contact">Contact</Link>
          </div>

          <div>
            <h2>Reach us</h2>
            <Link to="/contact#enquiry">Send an enquiry</Link>
            {/* PLACEHOLDERS — contact details pending from Sir */}
            <span className="footer__detail">{CONTACT.phone}</span>
            <span className="footer__detail">{CONTACT.email}</span>
          </div>
        </div>

        <div className="footer__copy">
          <span>
            © {new Date().getFullYear()} {SITE.name}
          </span>
          <span>{CONTACT.address}</span>
        </div>
      </div>
    </footer>
  );
}
