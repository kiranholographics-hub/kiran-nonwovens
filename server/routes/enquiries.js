import { Router } from 'express';
import Enquiry from '../models/Enquiry.js';
import { sendEnquiryMail } from '../mailer.js';
import { dbReady } from '../db.js';

const router = Router();

const FIELDS = [
  'name',
  'company',
  'email',
  'phone',
  'country',
  'product',
  'fibre',
  'gsm',
  'width',
  'thickness',
  'colour',
  'quantity',
  'message',
  'source',
];

const MAX_LEN = { message: 4000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Keeps only known fields, coerces to string, trims and length-caps them. */
function clean(body = {}) {
  const out = {};
  for (const key of FIELDS) {
    const raw = body[key];
    if (raw === undefined || raw === null) continue;
    out[key] = String(raw).trim().slice(0, MAX_LEN[key] || 300);
  }
  return out;
}

/** POST /api/enquiries — save the enquiry, then notify the export team. */
router.post('/', async (req, res, next) => {
  const data = clean(req.body);

  const errors = {};
  if (!data.name) errors.name = 'Please tell us your name.';
  if (!data.email) errors.email = 'Please give us an email address.';
  else if (!EMAIL_RE.test(data.email))
    errors.email = 'That email address does not look right.';
  // Honeypot: real buyers never fill a hidden field.
  if (req.body?.website) return res.status(200).json({ ok: true });

  if (Object.keys(errors).length) {
    return res.status(400).json({ error: 'Validation failed', errors });
  }

  if (!dbReady()) {
    return res.status(503).json({
      error:
        'We could not save your enquiry just now. Please email us directly and we will pick it up.',
    });
  }

  try {
    const enquiry = await Enquiry.create(data);
    // The save is the commitment; the email is best-effort on top of it.
    const notified = await sendEnquiryMail(data);
    if (notified) {
      await Enquiry.updateOne({ _id: enquiry._id }, { notified: true });
    }
    res.status(201).json({ ok: true, id: String(enquiry._id) });
  } catch (err) {
    next(err);
  }
});

export default router;
