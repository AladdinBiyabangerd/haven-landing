import { defineConfig } from 'astro/config'
import node from '@astrojs/node'

const envSite = process.env.PUBLIC_SITE_URL || ''
const isLocal = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/?$/i.test(envSite)
const site = !envSite || isLocal ? 'https://heselo.online' : envSite.replace(/\/$/, '')

const locales = ['az', 'en', 'ru']
const retiredPaths = {
  '/solutions/restaurant/': '/solutions/',
  '/solutions/cafe/': '/solutions/antikafe/',
  '/guides/restaurant-management-system/': '/guides/',
  '/guides/cafe-management-system/': '/guides/antikafe-management-system/',
  '/guides/manage-restaurant-reservations/': '/solutions/reservations/',
  '/guides/restaurant-pos-system/': '/solutions/pos/',
  '/guides/restaurant-inventory-basics/': '/solutions/inventory/',
}
const redirects = Object.fromEntries(
  locales.flatMap((locale) =>
    Object.entries(retiredPaths).map(([from, to]) => [`/${locale}${from}`, `/${locale}${to}`]),
  ),
)

export default defineConfig({
  site,
  trailingSlash: 'always',
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  server: {
    host: true,
  },
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  redirects,
  i18n: {
    defaultLocale: 'az',
    locales: ['az', 'en', 'ru'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
})
