import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    /** Business-area slug this product belongs to, e.g. "geotextile". */
    category: { type: String, required: true, index: true, trim: true },

    shortDescription: { type: String, default: '' },
    features: { type: [String], default: [] },
    applications: { type: [String], default: [] },
    images: { type: [String], default: [] },

    specs: {
      fibre: { type: [String], default: [] },
      gsmMin: { type: Number, default: null },
      gsmMax: { type: Number, default: null },
      thickness: { type: String, default: null },
      width: { type: String, default: null },
      rollLength: { type: String, default: null },
      colour: { type: String, default: null },
      process: { type: String, default: null },
    },

    downloads: {
      type: [{ label: String, url: String }],
      default: [],
    },

    seo: {
      title: { type: String, default: '' },
      metaDescription: { type: String, default: '' },
    },

    /** False while the GSM range shown is the plant range, not a per-product one. */
    specsConfirmed: { type: Boolean, default: false },
    /** True while the copy is awaiting sign-off. */
    draft: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model('Product', productSchema);
