import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://DarkVisor5.github.io/Ciokexpress/',
  base: '/Ciokexpress/',  // Fixes GitHub Pages paths
  integrations: [tailwind()],
  build: {
    format: 'directory', // Ensures correct asset linking
  }
});
