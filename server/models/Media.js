import mongoose from 'mongoose';

/** An image uploaded in the /hq panel, stored in MongoDB and served by the API. */
const mediaSchema = new mongoose.Schema(
  {
    name: { type: String, default: '', maxlength: 120 },
    contentType: { type: String, required: true },
    size: { type: Number, required: true },
    data: { type: Buffer, required: true },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export default mongoose.models.Media || mongoose.model('Media', mediaSchema);
