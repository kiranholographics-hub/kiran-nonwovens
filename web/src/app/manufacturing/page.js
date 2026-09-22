import Link from 'next/link';

import Media from '@/components/Media/Media';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import SpecTable from '@/components/SpecTable/SpecTable';
import PlaceholderNote from '@/components/PlaceholderNote/PlaceholderNote';
import { pageMetadata } from '@/lib/metadata';
import { PLANT } from '@/data/catalog';

import shared from '../shared.module.css';

export const metadata = pageMetadata({
  title: 'Manufacturing',
  description:
    'Kiran Nonwovens manufacturing capability: needle punch and thermal bonding, roll widths 5.0–5.2 m, 100–1200 GSM, in polyester, PP (virgin and recycled), viscose and custom blends.',
  path: '/manufacturing',
});

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

export default function ManufacturingPage() {
  return (
    <>
      <div className="wrap">
        <Breadcrumbs
          trail={[{ href: '/', label: 'Home' }, { label: 'Manufacturing' }]}
        />
        <h1 className={shared.pageTitle}>Manufacturing</h1>
        <p className={shared.lead}>
          What the plant can produce, in plain numbers — the starting point for
          any specification conversation.
        </p>
      </div>

      <section className="block" style={{ paddingTop: 20 }}>
        <div className="wrap">
          <Media
            src="/images/plant/line.jpg"
            variant={1}
            minHeight={320}
            label="Production line photography / video — pending"
            alt=""
            sizes="100vw"
          />
        </div>
      </section>

      <section className="block sandBlock">
        <div className="wrap">
          <p className="eyebrow">Capability</p>
          <h2>At a glance</h2>
          <div style={{ marginTop: 14 }}>
            <SpecTable
              specs={CAPABILITY}
              specsConfirmed
              caption="Kiran Nonwovens manufacturing capability"
            />
          </div>
          <PlaceholderNote>
            Thickness, roll length and the colour shade card are still being
            confirmed, so they are left blank rather than estimated.
          </PlaceholderNote>
          <div className={shared.ctas}>
            <Link href="/contact#enquiry" className="btn btnFill">
              Discuss your specification
            </Link>
            <Link href="/products" className="btn">
              See the product range
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
