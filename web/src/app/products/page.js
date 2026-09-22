import Link from 'next/link';

import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import ProductCard, { ProductGrid } from '@/components/ProductCard/ProductCard';
import { getCatalogue } from '@/lib/api';
import { pageMetadata } from '@/lib/metadata';

import shared from '../shared.module.css';

// Pages regenerate every 5 minutes, so catalogue edits go live without a rebuild.
export const revalidate = 300;

export const metadata = pageMetadata({
  title: 'Products',
  description:
    'The full Kiran Nonwovens range — geotextiles, automotive felt, apparel and footwear nonwovens, and industrial felt. Needle punched and thermal bonded, 100–1200 GSM.',
  path: '/products',
});

export default async function ProductsPage() {
  const { businessAreas, products } = await getCatalogue();

  return (
    <>
      <div className="wrap">
        <Breadcrumbs
          trail={[{ href: '/', label: 'Home' }, { label: 'Products' }]}
        />
        <h1 className={shared.pageTitle}>Products</h1>
        <p className={shared.lead}>
          Every material we make, grouped by the industry it was built for.
        </p>
      </div>

      {businessAreas.map((area, i) => {
        const inArea = products.filter((p) => p.category === area.slug);
        if (!inArea.length) return null;
        return (
          <section
            key={area.slug}
            className={`block ${i % 2 ? 'sandBlock' : ''}`}
            style={{ padding: '36px 0' }}
          >
            <div className="wrap">
              <div className={shared.sectionHead}>
                <h2 id={area.slug} style={{ margin: 0 }}>
                  {area.name}
                </h2>
                <Link
                  href={`/products/${area.slug}`}
                  className={shared.sectionLink}
                >
                  Category page →
                </Link>
              </div>
              <div style={{ marginTop: 18 }}>
                <ProductGrid>
                  {inArea.map((product, n) => (
                    <ProductCard
                      key={product.slug}
                      product={product}
                      variant={(n % 2) + 1}
                    />
                  ))}
                </ProductGrid>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
