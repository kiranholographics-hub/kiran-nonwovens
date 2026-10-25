import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import BusinessAreaCard, {
  BusinessAreaGrid,
} from '../components/BusinessAreaCard.jsx';
import GuideLinks from '../components/GuideLinks.jsx';
import { useCatalogue } from '../CatalogueContext.jsx';
import { PAGE_SEO } from '../data/seo.js';
import { VIDEOS, breadcrumbLd, collectionLd } from '../lib.js';
import './Products.css';

// Guides worth reading for each industry, by business-area slug.
const AREA_GUIDES = {
  geotextile: [
    'geotextile-for-road-construction',
    'geotextile-gsm-for-road-construction-india',
    'nonwoven-geotextile-for-railway-track-india',
    'geotextile-for-drainage-and-erosion-control',
  ],
  automotive: ['automotive-nvh-felt-guide', 'automotive-felt-oem-interiors-india'],
  'apparel-footwear': [
    'nonwoven-fabric-for-footwear-and-apparel',
    'shoulder-pad-nonwoven-fabric-india',
  ],
  industrial: [
    'dust-collector-filter-bag-felt',
    'bag-filter-felt-cement-steel-power-india',
    'carpet-backing-and-underlay-felt',
    'orthopaedic-cast-padding-nonwoven-india',
  ],
};

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

      <section className="block block--sand">
        <div className="wrap">
          <p className="eyebrow">Guides by industry</p>
          <h2>Read before you specify.</h2>
          <p>
            Needle punched and thermal bonded nonwoven serves very different
            jobs, from a road subgrade to a vehicle headliner to a baghouse.
            Each industry has its own questions about weight, fibre and width;
            these guides answer the ones that come up first.
          </p>
          {businessAreas.map((area) =>
            AREA_GUIDES[area.slug] ? (
              <div key={area.slug}>
                <h3>{area.name}</h3>
                <GuideLinks slugs={AREA_GUIDES[area.slug]} />
              </div>
            ) : null
          )}
        </div>
      </section>
    </>
  );
}
