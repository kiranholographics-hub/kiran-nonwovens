import Link from 'next/link';
import { notFound } from 'next/navigation';

import Media from '@/components/Media/Media';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import TabPanel, { RuledList } from '@/components/TabPanel/TabPanel';
import { ProductList } from '@/components/ProductCard/ProductCard';
import PlaceholderNote from '@/components/PlaceholderNote/PlaceholderNote';
import {
  getBusinessArea,
  getBusinessAreas,
  getProductsByCategory,
} from '@/lib/api';
import { pageMetadata } from '@/lib/metadata';
import { isPlaceholder } from '@/lib/site';

import shared from '../../shared.module.css';

// Pages regenerate every 5 minutes, so catalogue edits go live without a rebuild.
export const revalidate = 300;

/** Pre-renders every business area at build time, and on demand after that. */
export async function generateStaticParams() {
  const areas = await getBusinessAreas();
  return areas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const area = await getBusinessArea(slug);
  if (!area) return {};
  return pageMetadata({
    title: area.seo?.title || `${area.name} — Business Area`,
    description: area.seo?.metaDescription || area.blurb,
    path: `/business-areas/${area.slug}`,
  });
}

export default async function BusinessAreaPage({ params }) {
  const { slug } = await params;
  const area = await getBusinessArea(slug);
  if (!area) notFound();

  const products = area.products?.length
    ? area.products
    : await getProductsByCategory(area.slug);

  const tabs = [
    {
      id: 'overview',
      label: 'Overview',
      content: (
        <div className={shared.narrow}>
          <p>{area.overview}</p>
          {isPlaceholder(area.overview) ? (
            <PlaceholderNote>
              This overview is a placeholder — the final copy for {area.name} is
              still to come from the company.
            </PlaceholderNote>
          ) : null}
        </div>
      ),
    },
    {
      id: 'applications',
      label: 'Applications',
      content: <RuledList items={area.applications} />,
    },
  ];

  if (area.hasDownloads) {
    tabs.push({
      id: 'downloads',
      label: 'Downloads',
      content: area.downloads?.length ? (
        <RuledList
          items={area.downloads.map((d) => (
            <a key={d.url} href={d.url}>
              {d.label}
            </a>
          ))}
        />
      ) : (
        <div className={shared.narrow}>
          <p>
            Brochures, datasheets and test reports for {area.name} will be
            published here.
          </p>
          <PlaceholderNote>
            Downloads are pending — certifications and test reports have not
            been supplied yet.
          </PlaceholderNote>
        </div>
      ),
    });
  }

  return (
    <>
      <div className="wrap">
        <Breadcrumbs
          trail={[
            { href: '/', label: 'Home' },
            { href: '/business-areas', label: 'Business Areas' },
            { label: area.name },
          ]}
        />
        <div className={shared.split}>
          <div className={shared.text}>
            <p className={shared.kicker}>Business Area</p>
            <h1 className={shared.pageTitle}>{area.name}</h1>
            <p className={shared.lead}>{area.blurb}</p>
            <div className={shared.ctas}>
              <Link href={`/products/${area.slug}`} className="btn btnFill">
                View products in {area.name}
              </Link>
              <Link href="/contact#enquiry" className="btn">
                Get quote
              </Link>
            </div>
          </div>
          <Media
            className={shared.heroImage}
            src={area.images?.[0]}
            variant={1}
            label={`${area.name} photography — pending`}
            alt=""
            priority
          />
        </div>
      </div>

      <section className="block">
        <div className="wrap">
          <TabPanel tabs={tabs} deepLink />
        </div>
      </section>

      <section className="block sandBlock">
        <div className="wrap">
          <div className={shared.sectionHead}>
            <div>
              <p className="eyebrow">Products in {area.name}</p>
              <h2>Related products</h2>
            </div>
            <Link href={`/products/${area.slug}`} className={shared.sectionLink}>
              Category page →
            </Link>
          </div>
          <ProductList products={products} />
        </div>
      </section>
    </>
  );
}
