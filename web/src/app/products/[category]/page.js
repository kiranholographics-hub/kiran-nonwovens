import Link from 'next/link';
import { notFound } from 'next/navigation';

import Media from '@/components/Media/Media';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import ProductCard, { ProductGrid } from '@/components/ProductCard/ProductCard';
import {
  getBusinessArea,
  getBusinessAreas,
  getProductsByCategory,
} from '@/lib/api';
import { pageMetadata } from '@/lib/metadata';

import shared from '../../shared.module.css';

// Pages regenerate every 5 minutes, so catalogue edits go live without a rebuild.
export const revalidate = 300;

export async function generateStaticParams() {
  const areas = await getBusinessAreas();
  return areas.map((area) => ({ category: area.slug }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const area = await getBusinessArea(category);
  if (!area) return {};
  return pageMetadata({
    // Its own copy, not the business area's — the two pages must not compete
    // for the same query with the same description.
    title: area.productsSeo?.title || `${area.name} Products`,
    description: area.productsSeo?.metaDescription || area.blurb,
    path: `/products/${area.slug}`,
  });
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const area = await getBusinessArea(category);
  if (!area) notFound();

  const products = await getProductsByCategory(area.slug);

  return (
    <>
      <div className="wrap">
        <Breadcrumbs
          trail={[
            { href: '/', label: 'Home' },
            { href: '/products', label: 'Products' },
            { label: area.name },
          ]}
        />
        <div className={shared.split}>
          <div className={shared.text}>
            <p className={shared.kicker}>Products</p>
            <h1 className={shared.pageTitle}>{area.name}</h1>
            <p className={shared.lead}>{area.blurb}</p>
            <div className={shared.ctas}>
              <Link href={`/business-areas/${area.slug}`} className="btn">
                See the {area.name} business area
              </Link>
            </div>
          </div>
          <Media
            className={shared.heroImage}
            src={area.images?.[0]}
            variant={2}
            label={`${area.name} photography — pending`}
            alt=""
            priority
          />
        </div>
      </div>

      <section className="block">
        <div className="wrap">
          <ProductGrid>
            {products.map((product, i) => (
              <ProductCard
                key={product.slug}
                product={product}
                variant={(i % 2) + 1}
              />
            ))}
          </ProductGrid>
        </div>
      </section>
    </>
  );
}
