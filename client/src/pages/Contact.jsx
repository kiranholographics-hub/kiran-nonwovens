import Seo from '../components/Seo.jsx';
import Media from '../components/Media.jsx';
import PageHero from '../components/PageHero.jsx';
import EnquiryForm from '../components/EnquiryForm.jsx';
import { RuledList } from '../components/TabPanel.jsx';
import Faq from '../components/Faq.jsx';
import { CONTACT_FAQ, PAGE_SEO, plain } from '../data/seo.js';
import { CONTACT, SITE, breadcrumbLd, faqLd, isPlaceholder } from '../lib.js';
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

// [label, value, optional link]. Phone and email are tappable on a phone.
// A value still in square brackets is unconfirmed, so its row is left out until
// the real value is set in lib.js. A real WhatsApp number becomes a chat link.
const whatsappHref = isPlaceholder(CONTACT.whatsapp)
  ? undefined
  : `https://wa.me/${String(CONTACT.whatsapp).replace(/\D/g, '')}`;
const DETAILS = [
  ['Address', CONTACT.address],
  ['Phone', CONTACT.phone, CONTACT.phoneHref],
  ['WhatsApp', CONTACT.whatsapp, whatsappHref],
  ['Email', CONTACT.email, CONTACT.emailHref],
  ['Hours', CONTACT.hours],
].filter(([, value]) => !isPlaceholder(value));

export default function Contact() {
  return (
    <>
      <Seo
        title={PAGE_SEO.contact.title}
        description={PAGE_SEO.contact.description}
        path="/contact"
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact Kiran Nonwovens',
            url: `${SITE.url}/contact`,
          },
          breadcrumbLd([{ to: '/', label: 'Home' }, { label: 'Contact' }]),
          faqLd(CONTACT_FAQ.map((f) => ({ q: f.q, a: plain(f.a) }))),
        ]}
      />

      <PageHero
        trail={[{ to: '/', label: 'Home' }, { label: 'Contact' }]}
        title="Contact & enquiry"
        lead="Tell us the material you need — fibre, GSM, width and quantity — and our export team will come back with specifications and pricing."
        plain
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
                alt="Kiran Nonwovens plant and office"
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
