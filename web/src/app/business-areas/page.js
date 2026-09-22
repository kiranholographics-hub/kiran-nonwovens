import BusinessAreaCard, {
  BusinessAreaGrid,
} from '@/components/BusinessAreaCard/BusinessAreaCard';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import { getBusinessAreas } from '@/lib/api';
import { pageMetadata } from '@/lib/metadata';

// Pages regenerate every 5 minutes, so catalogue edits go live without a rebuild.
export const revalidate = 300;

export const metadata = pageMetadata({
  title: 'Business Areas',
  description:
    'The four industries Kiran Nonwovens supplies: geotextile, automotive, apparel & footwear, and industrial applications.',
  path: '/business-areas',
});

export default async function BusinessAreasPage() {
  const businessAreas = await getBusinessAreas();

  return (
    <div className="wrap">
      <Breadcrumbs
        trail={[{ href: '/', label: 'Home' }, { label: 'Business Areas' }]}
      />
      <h1>Business Areas</h1>
      <p>
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
