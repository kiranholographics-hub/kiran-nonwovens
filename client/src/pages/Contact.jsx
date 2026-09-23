import Seo from '../components/Seo.jsx';
import Media from '../components/Media.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import EnquiryForm from '../components/EnquiryForm.jsx';
import PlaceholderNote from '../components/PlaceholderNote.jsx';
import { CONTACT } from '../lib.js';
import './Contact.css';

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
