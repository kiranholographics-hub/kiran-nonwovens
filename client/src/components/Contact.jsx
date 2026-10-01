import Seo from '../components/Seo.jsx';
import Media from '../components/Media.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import EnquiryForm from '../components/EnquiryForm.jsx';
import PlaceholderNote from '../components/PlaceholderNote.jsx';
import { RuledList } from '../components/TabPanel.jsx';
import { CONTACT } from '../lib.js';
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
  ['Phone', CONTACT.phone],
  ['WhatsApp', CONTACT.whatsapp],
  ['Email', CONTACT.email],
  ['Hours', CONTACT.hours],
];

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact & Enquiry"
        description="Send Kiran Nonwovens a specification-based enquiry — fibre, GSM, width, thickness, colour and quantity — and our export team will come back with a quote."
        path="/contact"
      />

      <div className="wrap">
        <Breadcrumbs trail={[{ to: '/', label: 'Home' }, { label: 'Contact' }]} />
        <h1 className="page-title">Contact &amp; enquiry</h1>
        <p className="lead">
          Tell us the material you need — fibre, GSM, width and quantity — and
          our export team will come back with specifications and pricing.
        </p>
      </div>

      <section className="block contact__block" id="enquiry">
        <div className="wrap contact__layout">
          <EnquiryForm source="/contact" />

          <div>
            <h2>Reach us</h2>
            <dl className="contact__details">
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
    </>
  );
}
