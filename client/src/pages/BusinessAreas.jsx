import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import BusinessAreaCard, {
  BusinessAreaGrid,
} from '../components/BusinessAreaCard.jsx';
import { useCatalogue } from '../CatalogueContext.jsx';
import { PAGE_SEO } from '../data/seo.js';
import { VIDEOS, breadcrumbLd, collectionLd } from '../lib.js';

export default function BusinessAreas() {
  const { businessAreas } = useCatalogue();

  return (
    <>
      <Seo
        title={PAGE_SEO.businessAreas.title}
        description={PAGE_SEO.businessAreas.description}
        path="/business-areas"
        jsonLd={[
          breadcrumbLd([{ to: '/', label: 'Home' }, { label: 'Business Areas' }]),
          collectionLd({
            name: 'Business areas',
            description: PAGE_SEO.businessAreas.description,
            path: '/business-areas',
            items: businessAreas.map((a) => ({
              name: a.name,
              path: `/business-areas/${a.slug}`,
            })),
          }),
        ]}
      />
      <PageHero
        trail={[{ to: '/', label: 'Home' }, { label: 'Business Areas' }]}
        title="Business Areas"
        lead="The same four industries run through this site twice — here as the story of what we do for each, and under Products as the materials themselves."
        video={VIDEOS.businessAreas}
      />
      <section className="block">
        <div className="wrap">
          <h2 className="sr-only">Our four business areas</h2>
          <BusinessAreaGrid>
            {businessAreas.map((area, i) => (
              <BusinessAreaCard key={area.slug} area={area} index={i} />
            ))}
          </BusinessAreaGrid>
        </div>
      </section>
    </>
  );
}
