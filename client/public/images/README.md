# Where the photography goes

No real photography exists yet. Until it does, every picture slot on the site
renders the theme's woven-texture placeholder, captioned with the shot that
belongs there.

**To go live with real photos:**

1. Drop the files in at the exact paths below.
2. Set `IMAGES_READY = true` in `src/lib.js`.

That is the whole change — no code edits, no path changes.

## Paths

```text
hero/plant.jpg                  Home page hero (right half of the split)
plant/overview.jpg              /about
plant/line.jpg                  /manufacturing — production line
plant/entrance.jpg              /contact

business-areas/geotextile.jpg         } one per business area, used on the
business-areas/automotive.jpg         } business-area page hero and on the
business-areas/apparel-footwear.jpg   } four cards on the home page
business-areas/industrial.jpg         }

products/<product-slug>.jpg     one per product — 16 of them
```

The product slugs are the `slug` values in `src/data/catalog.js`, e.g.
`products/filter-geo-bag-felt.jpg`. If you change a slug, change the filename
with it.

## Format notes

- These are served as-is by Vite, with no image pipeline in front of them, so
  export them at a sensible size before dropping them in — roughly 1600px wide
  for heroes and 900px for cards, saved as WebP where you can.
- Business-area cards are 16:10, product cards 5:4, heroes fill their half of
  the split. Anything reasonably landscape will crop sensibly.
