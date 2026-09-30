import { defineConfig } from 'vite';

// GitHub Pages serves this repo from /docs on the gh-pages branch.
export default defineConfig({
  base: '/',
  build: { outDir: 'docs', emptyOutDir: true },
});
