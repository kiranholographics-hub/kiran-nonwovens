// Visitor kahan se aaya, wo session mein yaad rakho (pehli entry ka source).
// Ye file import hote hi chal jaati hai, isliye main.jsx mein kuch jodna nahi padta.

const KEY = 'kn_attr';

function capture() {
  try {
    if (typeof window === 'undefined' || sessionStorage.getItem(KEY)) return;
    const p = new URLSearchParams(window.location.search);
    const ref = document.referrer;
    let referrer = 'direct';
    try {
      // apni hi site ka referrer count mat karo
      if (ref && new URL(ref).hostname !== window.location.hostname) referrer = ref;
    } catch {
      /* ignore */
    }
    sessionStorage.setItem(
      KEY,
      JSON.stringify({
        utmSource: (p.get('utm_source') || '').slice(0, 100),
        utmMedium: (p.get('utm_medium') || '').slice(0, 100),
        utmCampaign: (p.get('utm_campaign') || '').slice(0, 150),
        referrer: referrer.slice(0, 300),
        landingPage: window.location.pathname.slice(0, 200),
      })
    );
  } catch {
    /* sessionStorage band ho to chup-chaap chhod do */
  }
}
capture();

export function getAttribution() {
  try {
    return JSON.parse(sessionStorage.getItem(KEY)) || {};
  } catch {
    return {};
  }
}

// Enquiry successfully jaane ke baad Google Analytics ko lead batao
export function trackLead(payload = {}) {
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'generate_lead', {
        product: payload.product || 'general',
        country: payload.country || '',
      });
    }
  } catch {
    /* analytics se form kabhi fail nahi hona chahiye */
  }
}