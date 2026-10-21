import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    company: { type: String, default: '', trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, default: '', trim: true },
    country: { type: String, default: '', trim: true },

    /* Spec-based fields — this is a quote request, not a contact form. */
    product: { type: String, default: '', trim: true },
    fibre: { type: String, default: '', trim: true },
    gsm: { type: String, default: '', trim: true },
    width: { type: String, default: '', trim: true },
    thickness: { type: String, default: '', trim: true },
    colour: { type: String, default: '', trim: true },
    quantity: { type: String, default: '', trim: true },
    message: { type: String, default: '', trim: true },

    /** Which page the enquiry came from, for attribution. */
    source: { type: String, default: '', trim: true },

    /** Traffic attribution: where the buyer came from before the form. */
    utmSource: { type: String, default: '', trim: true, maxlength: 100 },
    utmMedium: { type: String, default: '', trim: true, maxlength: 100 },
    utmCampaign: { type: String, default: '', trim: true, maxlength: 150 },
    referrer: { type: String, default: '', trim: true, maxlength: 300 },
    landingPage: { type: String, default: '', trim: true, maxlength: 200 },

    notified: { type: Boolean, default: false },
    /** Worked from the /hq panel. */
    status: {
      type: String,
      enum: ['new', 'contacted', 'quoted', 'closed'],
      default: 'new',
    },
    note: { type: String, default: '', trim: true, maxlength: 2000 },
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: false } }
);

export default mongoose.models.Enquiry ||
  mongoose.model('Enquiry', enquirySchema);