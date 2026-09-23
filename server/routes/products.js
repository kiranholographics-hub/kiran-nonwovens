import { Router } from 'express';
import Product from '../models/Product.js';
import { dbReady } from '../db.js';

const router = Router();

const needDb = (res) =>
  res.status(503).json({ error: 'Database unavailable' });

/** GET /api/products — every product, ordered by business area then order. */
router.get('/', async (_req, res, next) => {
  if (!dbReady()) return needDb(res);
  try {
    const products = await Product.find().sort({ category: 1, order: 1 }).lean();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

/**
 * GET /api/products/category/:category — products in one business area.
 * Declared before /:slug so "category" is never read as a slug.
 */
router.get('/category/:category', async (req, res, next) => {
  if (!dbReady()) return needDb(res);
  try {
    const products = await Product.find({ category: req.params.category })
      .sort({ order: 1 })
      .lean();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

/** GET /api/products/:slug — one product. */
router.get('/:slug', async (req, res, next) => {
  if (!dbReady()) return needDb(res);
  try {
    const product = await Product.findOne({ slug: req.params.slug }).lean();
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (err) {
    next(err);
  }
});

export default router;
