import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import {
  businessAreas as localBusinessAreas,
  products as localProducts,
} from './data/catalog.js';
import { getCatalogue } from './api/client.js';

const CatalogueContext = createContext(null);

/**
 * Holds the catalogue for the whole app.
 *
 * It starts from the local catalogue **synchronously**, which matters twice
 * over: the prerender step renders complete HTML without waiting on a network
 * call, and a visitor never sees an empty page while the API answers. Once
 * mounted in a browser it refreshes from the Express API, so a product edited
 * in MongoDB appears without a rebuild.
 */
export function CatalogueProvider({ children }) {
  const [catalogue, setCatalogue] = useState(() => ({
    businessAreas: localBusinessAreas,
    products: localProducts,
  }));

  useEffect(() => {
    let cancelled = false;
    getCatalogue().then((live) => {
      if (cancelled || !live?.products?.length) return;
      setCatalogue(live);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const value = useMemo(() => {
    const { businessAreas, products } = catalogue;
    return {
      businessAreas,
      products,
      areaBySlug: (slug) => businessAreas.find((b) => b.slug === slug) || null,
      areaName: (slug) =>
        businessAreas.find((b) => b.slug === slug)?.name || slug,
      productBySlug: (slug) => products.find((p) => p.slug === slug) || null,
      productsIn: (category) =>
        products.filter((p) => p.category === category),
    };
  }, [catalogue]);

  return (
    <CatalogueContext.Provider value={value}>
      {children}
    </CatalogueContext.Provider>
  );
}

export function useCatalogue() {
  const ctx = useContext(CatalogueContext);
  if (!ctx) throw new Error('useCatalogue must be used inside CatalogueProvider');
  return ctx;
}
