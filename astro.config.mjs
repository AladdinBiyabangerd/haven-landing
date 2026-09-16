import { defineConfig } from 'astro/config'
import node from '@astrojs/node'
import vercel from '@astrojs/vercel'

const envSite = process.env.PUBLIC_HESELO_SITE_URL || process.env.PUBLIC_SITE_URL || ''
const isLocal = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/?$/i.test(envSite)
const rawSite = !envSite || isLocal ? 'https://heselo.online' : envSite.replace(/\/$/, '')
const site = rawSite.replace(/^(https?:\/\/)www\./i, '$1')

/** Vercel sets VERCEL=1. Override with DEPLOY_TARGET=node|vercel when needed. */
const deployTarget =
  process.env.DEPLOY_TARGET || (process.env.VERCEL ? 'vercel' : 'node')

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
  adapter: deployTarget === 'vercel' ? vercel() : node({ mode: 'standalone' }),
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
