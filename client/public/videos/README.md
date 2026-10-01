# Where the videos go

The redesigned site uses full-screen background videos (home hero, closing
banner, and a banner on each inner page). None exist yet — until they do, each
slot paints the theme texture with a caption naming the clip.

**To go live:** drop files in at the paths below, then set
`VIDEOS_READY = true` in `src/lib.js`.

```text
hero.mp4 (+ hero.webm)      Home hero — full screen, looping
cta.mp4  (+ cta.webm)       Home closing banner
products.mp4                /products banner
about.mp4                   /about banner
manufacturing.mp4           /manufacturing banner
business-areas.mp4          /business-areas banner
product.mp4                 single product pages banner
business-areas/<slug>.mp4   one per business area page (slug = catalog.js)
```

Posters (shown while the video loads, and on phones with data-saver /
reduced-motion) live in `public/images/` — see `VIDEOS` in `src/lib.js`.

## Format notes

- 1920×1080, H.264 MP4, **no audio track** (they play muted), 6–15 s seamless loop.
- Keep the hero under ~6 MB and the others under ~4 MB. Add a `.webm` (VP9) for
  the hero and closing banner if you can — it is smaller.
- Shoot or grade darker/less busy on the left-bottom third: headline and buttons
  sit there over a dark gradient.
