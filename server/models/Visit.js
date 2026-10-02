import mongoose from 'mongoose';

/**
 * One page view. Deliberately thin: no IP address and no cookie. `visitor` is
 * a hash of IP + browser + day + a secret, so it can count distinct visitors
 * within a day but cannot be reversed or followed from one day to the next.
 */
const visitSchema = new mongoose.Schema(
  {
    path: { type: String, required: true, maxlength: 200 },
    referrer: { type: String, default: '', maxlength: 120 },
    device: { type: String, enum: ['mobile', 'desktop'], default: 'desktop' },
    /** Looked up from the IP on the server (offline database); the IP itself is never stored. */
    country: { type: String, default: '', maxlength: 80 },
    visitor: { type: String, required: true },
    day: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: 60 * 60 * 24 * 730 },
  },
  { versionKey: false }
);
visitSchema.index({ day: 1 });

export default mongoose.models.Visit || mongoose.model('Visit', visitSchema);
