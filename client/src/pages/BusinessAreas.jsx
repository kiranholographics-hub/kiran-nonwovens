import Seo from '../components/Seo.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import BusinessAreaCard, {
  BusinessAreaGrid,
} from '../components/BusinessAreaCard.jsx';
import { useCatalogue } from '../CatalogueContext.jsx';

export default function BusinessAreas() {
  const { businessAreas } = useCatalogue();

  return (
    <div className="wrap">
      <Seo
        title="Business Areas"
        description="The four industries Kiran Nonwovens supplies: geotextile, automotive, apparel & footwear, and industrial applications."
        path="/business-areas"
      />
      <Breadcrumbs
        trail={[{ to: '/', label: 'Home' }, { label: 'Business Areas' }]}
      />
      <h1 className="page-title">Business Areas</h1>
      <p className="lead">
        The same four industries run through this site twice — here as the story
        of what we do for each, and under Products as the materials themselves.
      </p>
      <BusinessAreaGrid>
        {businessAreas.map((area) => (
          <BusinessAreaCard key={area.slug} area={area} />
        ))}
      </BusinessAreaGrid>
      <div style={{ height: 56 }} />
    </div>
  );
}
