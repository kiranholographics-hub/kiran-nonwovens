import Media from '@/components/Media/Media';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import PlaceholderNote from '@/components/PlaceholderNote/PlaceholderNote';
import { pageMetadata } from '@/lib/metadata';
import { PLANT } from '@/data/catalog';

import shared from '../shared.module.css';

export const metadata = pageMetadata({
  title: 'About Us',
  description:
    'Kiran Nonwovens manufactures needle punched and thermal bonded nonwoven felt and geotextiles for export — company overview, history, technology and quality.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <div className="wrap">
        <Breadcrumbs
          trail={[{ href: '/', label: 'Home' }, { label: 'About Us' }]}
        />
        <h1 className={shared.pageTitle}>About Us</h1>
      </div>

      <section className="block" style={{ paddingTop: 8 }}>
        <div className="wrap">
          <div className={shared.productGrid}>
            <div className={shared.anchorBody}>
              <h2 id="overview">Company overview</h2>
              <p>
                [Company story and vision — pending from Sir. This section
                should say who Kiran Nonwovens is, what the plant does, and who
                it supplies.]
              </p>

              <h3 id="history">History</h3>
              <p>
                [Founding story and timeline — pending from Sir. Year founded,
                how the plant grew, when export supply began.]
              </p>

              <h3 id="technology">Technology</h3>
              <p>
                Production runs on two processes: {PLANT.processes[0].toLowerCase()}{' '}
                and {PLANT.processes[1].toLowerCase()}, across roll widths of{' '}
                {PLANT.widthLabel} and a {PLANT.gsmLabel} GSM range, in{' '}
                {PLANT.fibreLabel.toLowerCase()}.
              </p>
              <p>
                [Detail on the line, machinery and process control — pending
                from Sir.]
              </p>

              <h3 id="quality">Quality &amp; certifications</h3>
              <p>
                [Quality process and certifications — pending. Certificates and
                test reports have not been supplied yet.]
              </p>
              <PlaceholderNote>
                Most of this page is a placeholder. Company history, plant
                detail, certifications and test reports are all still to come —
                nothing here has been written on the company&apos;s behalf.
              </PlaceholderNote>
            </div>

            <Media
              className={shared.productImage}
              src="/images/plant/overview.jpg"
              variant={2}
              label="Plant photography — pending"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
