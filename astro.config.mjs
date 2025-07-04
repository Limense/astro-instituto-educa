import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://educa.org.pe',
  integrations: [
    tailwind(),
    react(),
    sitemap()
  ],
  output: 'static',
  build: {
    assets: 'assets'
  }
});
