import Seo from '../components/Seo.jsx';
import Media from '../components/Media.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import PlaceholderNote from '../components/PlaceholderNote.jsx';
import { PLANT } from '../data/catalog.js';
import './About.css';

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Kiran Nonwovens manufactures needle punched and thermal bonded nonwoven felt and geotextiles for export — company overview, history, technology and quality."
        path="/about"
      />

      <div className="wrap">
        <Breadcrumbs trail={[{ to: '/', label: 'Home' }, { label: 'About Us' }]} />
        <h1 className="page-title">About Us</h1>
      </div>

      <section className="block about__block">
        <div className="wrap">
          <div className="about__grid">
            <div className="about__body">
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
                Production runs on two processes:{' '}
                {PLANT.processes[0].toLowerCase()} and{' '}
                {PLANT.processes[1].toLowerCase()}, across roll widths of{' '}
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
              className="about__image"
              src="/images/plant/overview.jpg"
              variant={2}
              label="Plant photography — pending"
            />
          </div>
        </div>
      </section>
    </>
  );
}
