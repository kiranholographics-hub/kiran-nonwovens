import { Link } from 'react-router-dom';

import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import { CONTACT, SITE, breadcrumbLd } from '../lib.js';
import './Privacy.css';

/**
 * A plain-language privacy notice that states only what the site actually
 * does: the enquiry form's fields, where they go, and that there are no
 * analytics or advertising cookies. If analytics, a chat widget or a mailing
 * list is ever added, this page has to change with it (and the "Last updated"
 * date below).
 */
const UPDATED = '1 October 2026';

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
        plain
      />

      <section className="block">
        <div className="wrap privacy">
          <p>
            <small>Last updated: {UPDATED}</small>
          </p>

          <h2>Who we are</h2>
          <p>
            This website is run by {SITE.name}, a manufacturer of needle
            punched and thermal bonded nonwoven felt and geotextiles. In this
            notice, “we” means {SITE.name}. You can reach us at{' '}
            <a href={CONTACT.emailHref}>{CONTACT.email}</a> or by post at{' '}
            {CONTACT.address}.
          </p>

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

          <h2>Who can see it</h2>
          <p>
            Our export team. Enquiries are held in a database and sent by email
            through service providers that help us run the website; they handle
            the data only on our behalf. We share an enquiry with anyone else
            only if the law requires it.
          </p>

          <h2>How long we keep it</h2>
          <p>
            For as long as it is needed to deal with your request and any
            resulting business relationship, and then we delete it. You can ask
            us to delete it sooner.
          </p>

          <h2>Your choices</h2>
          <p>
            You can ask us to show you what we hold about you, correct it, or
            delete it. Email <a href={CONTACT.emailHref}>{CONTACT.email}</a>{' '}
            from the address you used to enquire, and we will act on it.
          </p>

          <p className="privacy__back">
            <Link to="/contact#enquiry">Send an enquiry</Link>
          </p>
        </div>
      </section>
    </>
  );
}
