import Seo from '../components/Seo.jsx';
import Media from '../components/Media.jsx';
import PageHero from '../components/PageHero.jsx';
import Faq from '../components/Faq.jsx';
import EnquiryForm from '../components/EnquiryForm.jsx';
import { RuledList } from '../components/TabPanel.jsx';
import { CONTACT_FAQ, PAGE_SEO, plain } from '../data/seo.js';
import {
  CONTACT,
  VIDEOS,
  breadcrumbLd,
  faqLd,
  isPlaceholder,
  organizationLd,
} from '../lib.js';
import './Contact.css';

/** What lets the export team quote on the first reply. */
const CHECKLIST = [
  'The product or application — what the material will be used for',
  'Fibre preference — polyester, PP (virgin or recycled), viscose or a blend',
  'GSM, thickness and width',
  'Colour and roll length',
  'Quantity — per order or per month',
  'Destination country, and any standard the material must meet',
];

const DETAILS = [
  ['Address', CONTACT.address],
  ['Phone', CONTACT.phone, CONTACT.phoneHref],
  ['WhatsApp', CONTACT.whatsapp],
  ['Email', CONTACT.email, CONTACT.emailHref],
  ['Hours', CONTACT.hours],
  // Rows still holding a [bracketed placeholder] in lib.js stay hidden, so
  // buyers never see "pending" text. Fill the value in lib.js and the row
  // appears on its own.
].filter(([, value]) => value && !isPlaceholder(value));

export default function Contact() {
  return (
    <>
      <Seo
        title={PAGE_SEO.contact.title}
        description={PAGE_SEO.contact.description}
        path="/contact"
        jsonLd={[
          breadcrumbLd([{ to: '/', label: 'Home' }, { label: 'Contact' }]),
          organizationLd(),
          faqLd(CONTACT_FAQ.map((f) => ({ q: f.q, a: plain(f.a) }))),
        ]}
      />

      <PageHero
        trail={[{ to: '/', label: 'Home' }, { label: 'Contact' }]}
        title="Contact & enquiry"
        lead="Tell us the material you need — fibre, GSM, width and quantity — and our export team will come back with specifications and pricing."
        video={VIDEOS.contact}
      />

      <section className="block contact__block" id="enquiry">
        <div className="wrap contact__layout">
          <EnquiryForm source="/contact" />

          <div>
            <h2>Reach us</h2>
            <dl className="contact__details">
              {DETAILS.map(([label, value, href]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{href ? <a href={href}>{value}</a> : value}</dd>
                </div>
              ))}
            </dl>
            <div className="contact__checklist">
              <h2>For the fastest quote</h2>
              <p>Tell us as much of this as you can:</p>
              <RuledList items={CHECKLIST} />
              <p>
                Not sure of the exact specification? Describe the application
                and we will recommend a material — samples are available on
                request.
              </p>
            </div>
            <div className="contact__photo">
              <Media
                src="/images/plant/entrance.jpg"
                variant={2}
                minHeight={200}
                label="Plant / office photo — pending"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="block block--sand">
        <div className="wrap">
          <Faq items={CONTACT_FAQ} title="Before you enquire" id="contact-faq" />
        </div>
      </section>
    </>
  );
}
