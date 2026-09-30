# richardmarkross.github.io

My portfolio site. It's a single page built with Vite, TypeScript and plain CSS. The only runtime dependency is `three`, which renders the hero object and is lazy-loaded.

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + build into docs/
npm run preview  # serve the built docs/
```

## Deploy

GitHub Pages serves `/docs` on the `gh-pages` branch. Run `npm run build`, then commit `docs/` and push.

## Notes

- All content lives in `index.html`, so the page reads fine without JS. `src/main.ts` only adds the cursor spotlight, scroll reveals and active nav state.
- The 3D hero (`src/hero3d.ts`) is skipped when `prefers-reduced-motion` is on or the device has less than 4 GB of memory. A CSS gradient shows instead.
- `public/ngsw-worker.js` unregisters the service worker left behind by the old Angular site, so returning visitors don't get stuck on the cached old version.
- To refresh the project screenshots in `public/projects/`, capture each live site at 1440×900 and convert to 960px-wide WebP.
