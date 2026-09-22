import Media from '@/components/Media/Media';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import EnquiryForm from '@/components/EnquiryForm/EnquiryForm';
import PlaceholderNote from '@/components/PlaceholderNote/PlaceholderNote';
import { CONTACT } from '@/lib/site';
import { pageMetadata } from '@/lib/metadata';

import shared from '../shared.module.css';
import styles from './contact.module.css';

export const metadata = pageMetadata({
  title: 'Contact & Enquiry',
  description:
    'Send Kiran Nonwovens a specification-based enquiry — fibre, GSM, width, thickness, colour and quantity — and our export team will come back with a quote.',
  path: '/contact',
});

const DETAILS = [
  ['Address', CONTACT.address],
  ['Phone', CONTACT.phone],
  ['WhatsApp', CONTACT.whatsapp],
  ['Email', CONTACT.email],
  ['Hours', CONTACT.hours],
];

export default function ContactPage() {
  return (
    <>
      <div className="wrap">
        <Breadcrumbs
          trail={[{ href: '/', label: 'Home' }, { label: 'Contact' }]}
        />
        <h1 className={shared.pageTitle}>Contact &amp; enquiry</h1>
        <p className={shared.lead}>
          Tell us the material you need — fibre, GSM, width and quantity — and
          our export team will come back with specifications and pricing.
        </p>
      </div>

      <section className="block" style={{ paddingTop: 20 }} id="enquiry">
        <div className={`wrap ${styles.layout}`}>
          <EnquiryForm source="/contact" />

          <div>
            <h2>Reach us</h2>
            <dl className={styles.details}>
              {DETAILS.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <PlaceholderNote>
              Contact details are placeholders until the company confirms them.
            </PlaceholderNote>
            <div style={{ marginTop: 22 }}>
              <Media
                src="/images/plant/entrance.jpg"
                variant={2}
                minHeight={200}
                label="Plant / office photo — pending"
                alt=""
                sizes="(max-width: 960px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
