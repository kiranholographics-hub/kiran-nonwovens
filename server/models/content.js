import mongoose from 'mongoose';

/**
 * The five kinds of editable site content. They share one shape of
 * definition so the admin routes and the panel can treat them alike.
 */
const make = (name, fields, extra = {}) => {
  const schema = new mongoose.Schema(
    { ...fields, published: { type: Boolean, default: true } },
    { timestamps: true, ...extra }
  );
  return mongoose.models[name] || mongoose.model(name, schema);
};

const str = (max, required = false) => ({
  type: String,
  trim: true,
  maxlength: max,
  required,
  default: required ? undefined : '',
});
const slug = {
  type: String,
  required: true,
  unique: true,
  trim: true,
  lowercase: true,
  match: /^[a-z0-9]+(-[a-z0-9]+)*$/,
  maxlength: 80,
};

export const Page = make('Page', {
  title: str(120, true),
  slug,
  metaDescription: str(165),
  body: str(20000, true),
});

export const Update = make('Update', {
  title: str(140, true),
  slug,
  excerpt: str(300),
  body: str(30000, true),
  coverImage: str(300),
  publishedAt: { type: Date, default: Date.now },
});

export const Testimonial = make('Testimonial', {
  name: str(80, true),
  role: str(80),
  company: str(100),
  country: str(60),
  quote: str(1200, true),
});

export const TeamMember = make('TeamMember', {
  name: str(80, true),
  role: str(100),
  bio: str(1200),
  photo: str(300),
  order: { type: Number, default: 0 },
});

export const Certification = make('Certification', {
  name: str(120, true),
  issuer: str(120),
  description: str(600),
  order: { type: Number, default: 0 },
});
