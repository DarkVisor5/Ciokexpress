import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: "https://DarkVisor5.github.io/Ciokexpress/",
  base: "/Ciokexpress/",
  integrations: [tailwind()],
  build: {
    format: "file",  // Ensures files are generated properly for GitHub Pages
  }
});
