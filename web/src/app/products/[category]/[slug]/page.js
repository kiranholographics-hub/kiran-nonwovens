import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';

import Media from '@/components/Media/Media';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import SpecTable from '@/components/SpecTable/SpecTable';
import TabPanel, { RuledList } from '@/components/TabPanel/TabPanel';
import EnquiryForm from '@/components/EnquiryForm/EnquiryForm';
import StickyQuote from '@/components/StickyQuote/StickyQuote';
import ProductCard, { ProductGrid } from '@/components/ProductCard/ProductCard';
import PlaceholderNote from '@/components/PlaceholderNote/PlaceholderNote';
import {
  getProduct,
  getProducts,
  getProductsByCategory,
  getBusinessArea,
} from '@/lib/api';
import { pageMetadata } from '@/lib/metadata';
import { SITE } from '@/lib/site';

import shared from '../../../shared.module.css';

// Pages regenerate every 5 minutes, so catalogue edits go live without a rebuild.
export const revalidate = 300;

/** Every product is server-rendered and pre-generated — this is the SEO surface. */
export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ category: p.category, slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return {};
  return pageMetadata({
    title: product.seo?.title || product.name,
    description: product.seo?.metaDescription || product.shortDescription,
    path: `/products/${product.category}/${product.slug}`,
  });
}

export default async function ProductPage({ params }) {
  const { category, slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();

  // A product reached under the wrong business area redirects to its real one,
  // so there is only ever one canonical URL per product.
  if (product.category !== category) {
    redirect(`/products/${product.category}/${product.slug}`);
  }

  const [area, siblings] = await Promise.all([
    getBusinessArea(product.category),
    getProductsByCategory(product.category),
  ]);
  const related = siblings.filter((p) => p.slug !== product.slug).slice(0, 3);
  const areaName = area?.name || product.category;

  const chips = [
    product.specs?.process,
    product.specs?.width ? `Up to ${product.specs.width.split('–').pop().trim()}` : null,
    product.specs?.gsmMin != null
      ? `${product.specs.gsmMin}–${product.specs.gsmMax} GSM`
      : null,
  ].filter(Boolean);

  const tabs = [
    {
      id: 'specifications',
      label: 'Specifications',
      content: (
        <>
          <SpecTable
            specs={product.specs}
            specsConfirmed={product.specsConfirmed}
            caption={`Specifications for ${product.name}`}
          />
          {!product.specsConfirmed ? (
            <PlaceholderNote>
              Thickness, roll length and colour have not been confirmed for this
              product yet, and the GSM range shown is the plant&apos;s full
              capability. Send an enquiry and we will confirm exact values.
            </PlaceholderNote>
          ) : null}
        </>
      ),
    },
    {
      id: 'applications',
      label: 'Applications',
      content: <RuledList items={product.applications} />,
    },
    {
      id: 'downloads',
      label: 'Downloads',
      content: product.downloads?.length ? (
        <RuledList
          items={product.downloads.map((d) => (
            <a key={d.url} href={d.url}>
              {d.label}
            </a>
          ))}
        />
      ) : (
        <div className={shared.narrow}>
          <p>Datasheet, test report and certificates for {product.name}.</p>
          <PlaceholderNote>
            Downloads are pending — no datasheets or test reports have been
            supplied yet. Ask us and we will send what you need directly.
          </PlaceholderNote>
        </div>
      ),
    },
  ];

  // Product structured data, built only from what we actually know.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.shortDescription,
    category: areaName,
    url: `${SITE.url}/products/${product.category}/${product.slug}`,
    brand: { '@type': 'Brand', name: SITE.name },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="wrap">
        <Breadcrumbs
          trail={[
            { href: '/', label: 'Home' },
            { href: '/products', label: 'Products' },
            { href: `/products/${product.category}`, label: areaName },
            { label: product.name },
          ]}
        />

        <div className={shared.productGrid}>
          <Media
            className={shared.productImage}
            src={product.images?.[0]}
            variant={2}
            label={`${product.name} photography — pending`}
            alt=""
            priority
            sizes="(max-width: 960px) 100vw, 55vw"
          />

          <div>
            <p className={shared.kicker}>{areaName}</p>
            <h1 className={shared.pageTitle}>{product.name}</h1>
            <p className={shared.lead}>{product.shortDescription}</p>

            <ul className={shared.chips}>
              {chips.map((chip) => (
                <li className={shared.chip} key={chip}>
                  {chip}
                </li>
              ))}
            </ul>

            <div className={shared.ctas}>
              <a href="#enquiry" className="btn btnFill">
                Get quote
              </a>
              <Link href="/contact#enquiry" className="btn">
                Request a sample
              </Link>
            </div>

            <h2 className="srOnly">Product details</h2>
            <TabPanel tabs={tabs} deepLink />
          </div>
        </div>
      </div>

      <section className="block">
        <div className="wrap">
          <h2>Features</h2>
          <RuledList items={product.features} />
        </div>
      </section>

      <section className="block sandBlock" id="enquiry">
        <div className="wrap">
          <div className={shared.narrow}>
            <p className="eyebrow">Enquiry</p>
            <h2>Request a quote for {product.name}</h2>
            <EnquiryForm
              product={product.name}
              source={`/products/${product.category}/${product.slug}`}
            />
          </div>
        </div>
      </section>

      {related.length ? (
        <section className="block">
          <div className="wrap">
            <div className={shared.sectionHead}>
              <h2>More in {areaName}</h2>
              <Link
                href={`/products/${product.category}`}
                className={shared.sectionLink}
              >
                All {areaName} products →
              </Link>
            </div>
            <div style={{ marginTop: 18 }}>
              <ProductGrid>
                {related.map((p, i) => (
                  <ProductCard key={p.slug} product={p} variant={(i % 2) + 1} />
                ))}
              </ProductGrid>
            </div>
          </div>
        </section>
      ) : null}

      <StickyQuote productName={product.name} />
    </>
  );
}
