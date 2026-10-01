# Hero photos (page banners)

Each page banner can show a still photo or a looping video. For the inner pages
a **photo is the right choice** — light, fast, and it works on every phone. Save
video for the home page.

**To go live:** put the JPGs here with these exact names, then set
`HERO_PHOTOS_READY = true` in `src/lib.js`. A banner whose file is missing falls
back to the texture, so you can add them one at a time.

```text
home.jpg              Home page, first screen (also the video's poster)
closing.jpg           Home page, closing banner
business-areas.jpg    /business-areas
products.jpg          /products, product pages
about.jpg             /about
manufacturing.jpg     /manufacturing
```

Each business-area / category page uses `../business-areas/<slug>.jpg`, the same
photo as its card (see `../README.md`).

## What to shoot

| File | Good subject |
| --- | --- |
| `business-areas.jpg` | Rolls of felt / geotextile together, or the four materials side by side |
| `products.jpg` | Close-up of felt texture, or neatly stacked finished rolls |
| `about.jpg` | The plant — wide shot of the building or the production hall |
| `manufacturing.jpg` | The needle-punching line running |

## Size and framing

- **1920 × 900 px**, landscape, JPG (or WebP renamed is *not* supported — keep `.jpg`), under ~300 KB. Compress it (squoosh.app is fine).
- Text sits over the **left and bottom** of the photo on a dark gradient, so keep
  the important part of the picture to the **right / centre**, and avoid bright
  white in the bottom-left corner.
- Real photos of the real material and plant. Buyers are checking what they will
  receive.
