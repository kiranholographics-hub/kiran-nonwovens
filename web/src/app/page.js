import Link from 'next/link';

import Media from '@/components/Media/Media';
import StatsBand from '@/components/StatsBand/StatsBand';
import SpecFinder from '@/components/SpecFinder/SpecFinder';
import BusinessAreaCard, {
  BusinessAreaGrid,
} from '@/components/BusinessAreaCard/BusinessAreaCard';
import ProductCard, { ProductGrid } from '@/components/ProductCard/ProductCard';
import PlaceholderNote from '@/components/PlaceholderNote/PlaceholderNote';
import { getCatalogue } from '@/lib/api';
import { PLANT } from '@/data/catalog';
import { PRESENCE, SITE } from '@/lib/site';
import { pageMetadata } from '@/lib/metadata';

import styles from './home.module.css';

// Pages regenerate every 5 minutes, so catalogue edits go live without a rebuild.
export const revalidate = 300;

export const metadata = pageMetadata({
  title: `${SITE.name} — ${SITE.tagline}`,
  description: SITE.description,
  path: '/',
});

const STATS = [
  { value: PLANT.widthLabel, label: 'Roll width' },
  { value: PLANT.gsmLabel, label: 'GSM range' },
  { value: 'Needle punch', label: '+ thermal bonded' },
  { value: 'PP · PET · Viscose', label: 'Virgin, recycled, blends' },
];

export default async function HomePage() {
  const { businessAreas, products } = await getCatalogue();
  const featured = products.slice(0, 3);
  const areaName = (slug) =>
    businessAreas.find((b) => b.slug === slug)?.name || slug;

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.split}>
          <div className={styles.text}>
            <p className={styles.num}>01 — Introduction</p>
            <h1>Felt, formed with intent.</h1>
            <p className={styles.lead}>
              Needle punched and thermal bonded nonwovens — from geotextiles for
              civil works to acoustic felt for vehicle interiors. Made to your
              GSM, width and fibre, and built for export.
            </p>
            <div className={styles.ctas}>
              <Link href="#spec-finder" className="btn btnFill">
                Find by specification
              </Link>
              <Link href="/contact#enquiry" className="btn">
                Request a sample
              </Link>
            </div>
          </div>
          <Media
            className={styles.heroImage}
            src="/images/hero/plant.jpg"
            variant={1}
            label="Plant / roll photography — pending"
            alt=""
            priority
          />
        </div>
      </section>

      <StatsBand stats={STATS} />

      <section className="block">
        <div className="wrap">
          <p className="eyebrow">Where we work</p>
          <h2>Business Areas</h2>
          <BusinessAreaGrid>
            {businessAreas.map((area) => (
              <BusinessAreaCard key={area.slug} area={area} />
            ))}
          </BusinessAreaGrid>
        </div>
      </section>

      <section className="block sandBlock" id="spec-finder">
        <div className="wrap">
          <p className="eyebrow">Find your material</p>
          <h2>Spec Finder</h2>
          <SpecFinder businessAreas={businessAreas} products={products} />
        </div>
      </section>

      <section className={styles.other}>
        <div className={`wrap ${styles.otherInner}`}>
          <div>
            <h2>Looking for something else?</h2>
            <p>
              If nothing here matches your exact requirement, tell us what you
              need. We develop custom material to your GSM, width, fibre and
              colour.
            </p>
          </div>
          <Link
            href="/products/industrial/customised-nonwoven-solutions"
            className="btn btnLight"
          >
            Customised solutions
          </Link>
        </div>
      </section>

      <section className={styles.presence}>
        <div className={`wrap ${styles.presenceRow}`}>
          {PRESENCE.map((item) => (
            <div key={item.label}>
              <b className={styles.presenceValue}>{item.value}</b>
              <small className={styles.presenceLabel}>{item.label}</small>
            </div>
          ))}
        </div>
        <div className="wrap">
          <PlaceholderNote>
            Global presence figures are pending confirmation from the company.
          </PlaceholderNote>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className={styles.sectionHead}>
            <div>
              <p className="eyebrow">A closer look</p>
              <h2>Featured materials</h2>
            </div>
            <Link href="/products" className={styles.sectionLink}>
              All products →
            </Link>
          </div>
          <ProductGrid>
            {featured.map((product, i) => (
              <ProductCard
                key={product.slug}
                product={product}
                areaName={areaName(product.category)}
                variant={(i % 2) + 1}
              />
            ))}
          </ProductGrid>
        </div>
      </section>
    </>
  );
}
