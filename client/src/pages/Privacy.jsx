import { Link } from 'react-router-dom';

import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import PlaceholderNote from '../components/PlaceholderNote.jsx';
import { CONTACT, VIDEOS, breadcrumbLd } from '../lib.js';
import './Privacy.css';

/**
 * A plain-language privacy notice that states only what the site actually
 * does: the enquiry form's fields, where they go, and that there are no
 * analytics or advertising cookies. If analytics, a chat widget or a mailing
 * list is ever added, this page has to change with it.
 */
export default function Privacy() {
  const trail = [{ to: '/', label: 'Home' }, { label: 'Privacy' }];
  return (
    <>
      <Seo
        title="Privacy Notice"
        description="What Kiran Nonwovens collects when you send an enquiry, how it is used, and how to ask us to correct or delete it."
        path="/privacy"
        jsonLd={breadcrumbLd(trail)}
      />
      <PageHero
        trail={trail}
        title="Privacy notice"
        lead="What we collect when you send an enquiry, what we do with it, and how to ask us to remove it."
        video={VIDEOS.contact}
        variant={2}
      />

      <section className="block">
        <div className="wrap privacy">
          <h2>What we collect</h2>
          <p>
            Only what you type into the enquiry form: your name, email address,
            company, phone or WhatsApp number, country, and the product and
            specification you are asking about (fibre, GSM, width, thickness,
            colour, quantity and any message). We also record which page of the
            site the enquiry came from. Name and email are required; everything
            else is optional.
          </p>

          <h2>How we use it</h2>
          <p>
            To reply to your enquiry, prepare a quotation or sample, and follow
            up on that request. Your enquiry is stored so the export team can
            find it again, and a copy is emailed to them. We do not sell it, and
            we do not use it for anything unrelated to your enquiry.
          </p>

          <h2>Cookies and tracking</h2>
          <p>
            This site does not use advertising or analytics cookies, and it
            does not load third-party scripts or fonts. If that changes, this
            notice will be updated first.
          </p>

          <h2>How long we keep it</h2>
          <p>
            We keep an enquiry for as long as it is needed to deal with your
            request and any resulting business relationship, and delete it on
            request.
          </p>

          <h2>Your choices</h2>
          <p>
            You can ask us to show you what we hold about you, correct it, or
            delete it. Email{' '}
            <a href={CONTACT.emailHref}>{CONTACT.email}</a> from the address you
            used to enquire, and we will act on it.
          </p>

          <PlaceholderNote>
            Draft for review: the company should confirm this wording — in
            particular the retention period, the legal entity that is
            responsible for the data, and any requirements for the countries
            you sell into — before launch. This is a starting text, not legal
            advice.
          </PlaceholderNote>

          <p className="privacy__back">
            <Link to="/contact#enquiry">Send an enquiry</Link>
          </p>
        </div>
      </section>
    </>
  );
}
