import { defineConfig } from 'astro/config'
import node from '@astrojs/node'

const envSite = process.env.PUBLIC_SITE_URL || ''
const isLocal = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/?$/i.test(envSite)
const site = !envSite || isLocal ? 'https://heselo.online' : envSite.replace(/\/$/, '')

export default defineConfig({
  site,
  trailingSlash: 'always',
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  i18n: {
    defaultLocale: 'az',
    locales: ['az', 'en', 'ru'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
})
