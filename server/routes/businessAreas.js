import { Router } from 'express';
import BusinessArea from '../models/BusinessArea.js';
import Product from '../models/Product.js';
import { dbReady } from '../db.js';

const router = Router();

const needDb = (res) =>
  res.status(503).json({ error: 'Database unavailable' });

/** GET /api/business-areas */
router.get('/', async (_req, res, next) => {
  if (!dbReady()) return needDb(res);
  try {
    const areas = await BusinessArea.find().sort({ order: 1 }).lean();
    res.json(areas);
  } catch (err) {
    next(err);
  }
});

/** GET /api/business-areas/:slug — the area plus the products inside it. */
router.get('/:slug', async (req, res, next) => {
  if (!dbReady()) return needDb(res);
  try {
    const area = await BusinessArea.findOne({ slug: req.params.slug }).lean();
    if (!area) return res.status(404).json({ error: 'Business area not found' });
    const products = await Product.find({ category: area.slug })
      .sort({ order: 1 })
      .lean();
    res.json({ ...area, products });
  } catch (err) {
    next(err);
  }
});

export default router;
