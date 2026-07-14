import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://inder45811-maker.github.io',
  base: '/Ramz_detailz',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.endsWith('/gallery/'),
      lastmod: new Date('2026-07-14'),
    }),
  ],
})
