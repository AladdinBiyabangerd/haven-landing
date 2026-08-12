import type { APIRoute } from 'astro'
import { HTML_LANG, LOCALES, resolveLocale } from '@/i18n/config'
import { getMessages } from '@/i18n'
import { SITE, localePath } from '@/lib/site'

export function getStaticPaths() {
  return LOCALES.map((locale) => ({ params: { locale } }))
}

export const GET: APIRoute = ({ params }) => {
  const locale = resolveLocale(params.locale)
  const messages = getMessages(locale)

  const body = {
    name: SITE.name,
    short_name: SITE.name,
    description: messages.pwa.description,
    start_url: localePath(locale, '/'),
    display: 'standalone',
    background_color: '#eef3f6',
    theme_color: SITE.themeColor,
    lang: HTML_LANG[locale],
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
  }

  return new Response(JSON.stringify(body), {
    headers: {
      'Content-Type': 'application/manifest+json',
    },
  })
}
