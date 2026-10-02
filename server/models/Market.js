import mongoose from 'mongoose';

export const REGIONS = [
  'North America',
  'South America',
  'Europe',
  'Middle East',
  'Asia-Pacific',
  'Africa',
];

const marketSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 80 },
    code: { type: String, required: true, trim: true, uppercase: true, maxlength: 3 },
    /** Page address is /exports/<slug>-nonwoven-felt-supplier */
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: /^[a-z0-9]+(-[a-z0-9]+)*$/,
      maxlength: 60,
    },
    status: { type: String, enum: ['active', 'draft', 'paused'], default: 'active' },
    region: { type: String, enum: REGIONS, default: 'Europe' },
    ports: { type: [String], default: [] },
    note: { type: String, default: '', trim: true, maxlength: 600 },
  },
  { timestamps: true }
);

export default mongoose.models.Market || mongoose.model('Market', marketSchema);
