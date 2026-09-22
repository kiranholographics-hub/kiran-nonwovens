import Link from 'next/link';
import { CONTACT, SITE } from '@/lib/site';
import styles from './Footer.module.css';

export default function Footer({ businessAreas }) {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.grid}>
          <div>
            <h2>{SITE.name}</h2>
            <p className={styles.intro}>
              Needle punched and thermal bonded nonwovens — 100–1200 GSM, roll
              widths to 5.2 m, made to your specification.
            </p>
          </div>

          <div>
            <h2>Business Areas</h2>
            {businessAreas.map((area) => (
              <Link key={area.slug} href={`/business-areas/${area.slug}`}>
                {area.name}
              </Link>
            ))}
          </div>

          <div>
            <h2>Products</h2>
            <Link href="/products">All products</Link>
            {businessAreas.map((area) => (
              <Link key={area.slug} href={`/products/${area.slug}`}>
                {area.name}
              </Link>
            ))}
          </div>

          <div>
            <h2>Company</h2>
            <Link href="/about">About Us</Link>
            <Link href="/manufacturing">Manufacturing</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div>
            <h2>Reach us</h2>
            <Link href="/contact#enquiry">Send an enquiry</Link>
            {/* PLACEHOLDERS — contact details pending from Sir */}
            <span className={styles.detail}>{CONTACT.phone}</span>
            <span className={styles.detail}>{CONTACT.email}</span>
          </div>
        </div>

        <div className={styles.copy}>
          <span>
            © {new Date().getFullYear()} {SITE.name}
          </span>
          <span>{CONTACT.address}</span>
        </div>
      </div>
    </footer>
  );
}
