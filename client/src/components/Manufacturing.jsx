import { Link } from 'react-router-dom';

import Seo from '../components/Seo.jsx';
import Media from '../components/Media.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import SpecTable from '../components/SpecTable.jsx';
import FeatureGrid from '../components/FeatureGrid.jsx';
import { RuledList } from '../components/TabPanel.jsx';
import PlaceholderNote from '../components/PlaceholderNote.jsx';
import { PLANT } from '../data/catalog.js';

const CAPABILITY = {
  process: PLANT.processLabel,
  fibre: PLANT.fibres,
  gsmMin: PLANT.gsmMin,
  gsmMax: PLANT.gsmMax,
  width: PLANT.widthLabel,
  thickness: 'Made to requirement',
  rollLength: 'Made to requirement',
  colour: 'Single, multi-colour or customised shade',
};

const PROCESSES = [
  {
    title: 'Needle punching',
    text: 'Carded fibre webs are mechanically entangled by barbed needles. The result is a strong, dimensionally stable felt whose density and thickness are set by the needling — the process behind our geotextiles, automotive felt and most of the range.',
  },
  {
    title: 'Thermal bonding',
    text: 'Heat fuses low-melt fibres within the web, locking the structure without adhesives. It gives a lighter, loftier material with a clean surface, used where softness and resilience matter.',
  },
  {
    title: 'Custom development',
    text: 'Where no standard material fits, fibre blend, density, surface finish, strength and softness are developed for the application — cushioning, filtration, insulation, protection, support, separation, sound absorption, drainage or decorative use.',
  },
];

/** From the "Customization Options" in the company's product document. */
const CUSTOMISE = [
  'GSM, thickness, density, and width',
  'Polyester, polypropylene, viscose, recycled, or blended fibres',
  'Single colour, multi-colour, or customised colour shades',
  'Soft, firm, smooth, dense, or resilient fabric feel',
  'Custom roll length and packaging',
  'Surface finishing, lamination, embossing, and bonding compatibility',
  'Application-specific strength, permeability, and cushioning requirements',
];

/** Further processing the fabrics are suited to, per the product document. */
const PROCESSING = [
  'Cutting',
  'Stitching',
  'Laminating',
  'Moulding',
  'Embossing',
  'Printing',
  'Die-cutting',
  'Bonding',
];

export default function Manufacturing() {
  return (
    <>
      <Seo
        title="Manufacturing"
        description="Kiran Nonwovens manufacturing capability: needle punch and thermal bonding, roll widths 5.0–5.2 m, 100–1200 GSM, in polyester, PP (virgin and recycled), viscose and custom blends."
        path="/manufacturing"
      />

      <div className="wrap">
        <Breadcrumbs
          trail={[{ to: '/', label: 'Home' }, { label: 'Manufacturing' }]}
        />
        <h1 className="page-title">Manufacturing</h1>
        <p className="lead">
          What the plant can produce, in plain numbers — the starting point for
          any specification conversation.
        </p>
      </div>

      <section className="block">
        <div className="wrap">
          <Media
            src="/images/plant/line.jpg"
            variant={1}
            minHeight={320}
            label="Production line photography / video — pending"
          />
        </div>
      </section>

      <section className="block block--sand">
        <div className="wrap">
          <p className="eyebrow">Capability</p>
          <h2>At a glance</h2>
          <div style={{ marginTop: 14 }}>
            <SpecTable
              specs={CAPABILITY}
              gsmConfirmed
              caption="Kiran Nonwovens manufacturing capability"
            />
          </div>
          <PlaceholderNote>
            Thickness, roll length and colour are set per order to your
            requirement, so they are quoted with each enquiry rather than as a
            single fixed figure.
          </PlaceholderNote>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <p className="eyebrow">How it is made</p>
          <h2>Processes</h2>
          <FeatureGrid items={PROCESSES} columns={3} />
        </div>
      </section>

      <section className="block block--sand">
        <div className="wrap">
          <p className="eyebrow">Made to order</p>
          <h2>What we can tailor</h2>
          <p style={{ marginTop: 8 }}>
            Every material is produced to the buyer&apos;s specification. These
            are the parameters we set for each order:
          </p>
          <div style={{ marginTop: 14 }}>
            <RuledList items={CUSTOMISE} />
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <p className="eyebrow">Ready for your line</p>
          <h2>Further processing</h2>
          <p style={{ marginTop: 8 }}>
            Our fabrics are suitable for further processing such as:
          </p>
          <div style={{ marginTop: 14 }}>
            <RuledList items={PROCESSING} />
          </div>
          <div className="cta-row">
            <Link to="/contact#enquiry" className="btn btn--fill">
              Discuss your specification
            </Link>
            <Link to="/products" className="btn">
              See the product range
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
