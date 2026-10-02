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

/**
 * Waits (up to `ms`) for the database connection, starting it if needed.
 *
 * Some hosts (Hostinger's Node hosting among them) start the app fresh for a
 * request, so the first request can arrive a moment before MongoDB has
 * connected. Without this wait that request would be told "database
 * unavailable" even though the connection is about to succeed.
 */
export async function waitForDb(ms = 8000) {
  if (dbReady()) return true;
  try {
    await Promise.race([
      connectDb(),
      new Promise((resolve) => setTimeout(resolve, ms)),
    ]);
  } catch {
    /* connectDb already logged why; the route will answer 503 */
  }
  return dbReady();
}
