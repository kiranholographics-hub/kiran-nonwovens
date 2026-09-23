import { Link } from 'react-router-dom';

import Seo from '../components/Seo.jsx';
import Media from '../components/Media.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import SpecTable from '../components/SpecTable.jsx';
import PlaceholderNote from '../components/PlaceholderNote.jsx';
import { PLANT } from '../data/catalog.js';

const CAPABILITY = {
  process: PLANT.processLabel,
  fibre: PLANT.fibres,
  gsmMin: PLANT.gsmMin,
  gsmMax: PLANT.gsmMax,
  width: PLANT.widthLabel,
  thickness: null,
  rollLength: null,
  colour: null,
};

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
            Thickness, roll length and the colour shade card are set per order,
            so they are left blank here rather than estimated.
          </PlaceholderNote>
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
