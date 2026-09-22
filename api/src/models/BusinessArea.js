import mongoose from 'mongoose';

const businessAreaSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    blurb: { type: String, default: '' },
    overview: { type: String, default: '' },
    applications: { type: [String], default: [] },
    hasDownloads: { type: Boolean, default: false },
    images: { type: [String], default: [] },
    downloads: {
      type: [{ label: String, url: String }],
      default: [],
    },
    /** SEO for the business-area story page. */
    seo: {
      title: { type: String, default: '' },
      metaDescription: { type: String, default: '' },
    },
    /**
     * SEO for the product-listing page at /products/<slug>. Kept separate so
     * the two pages for the same industry never share a title or description
     * and compete for the same query.
     */
    productsSeo: {
      title: { type: String, default: '' },
      metaDescription: { type: String, default: '' },
    },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.BusinessArea ||
  mongoose.model('BusinessArea', businessAreaSchema);
