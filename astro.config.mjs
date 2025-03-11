import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: "https://darkvisor5.github.io/Ciokexpress/",
  base: "./",  // Fixes relative paths
  integrations: [tailwind()],
  build: {
    format: "file", // Ensures correct file paths
  }
});
