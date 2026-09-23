import mongoose from 'mongoose';

let connecting = null;

/**
 * Connects to MongoDB once and reuses the connection.
 * Resolves to `false` (rather than throwing) when MONGODB_URI is absent, so
 * the API can still boot and serve its health check during setup.
 */
export async function connectDb() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.warn(
      '[db] MONGODB_URI is not set — the API will run but every data route will return 503.'
    );
    return false;
  }
  if (mongoose.connection.readyState === 1) return true;
  if (!connecting) {
    mongoose.set('strictQuery', true);
    connecting = mongoose
      .connect(uri, { serverSelectionTimeoutMS: 10000 })
      .then(() => {
        console.log('[db] connected');
        return true;
      })
      .catch((err) => {
        connecting = null;
        throw err;
      });
  }
  return connecting;
}

export const dbReady = () => mongoose.connection.readyState === 1;
