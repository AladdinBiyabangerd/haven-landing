export const SITE = {
  name: 'Heselo',
  contactEmail: 'heselo.online@gmail.com',
  notifyEmail: 'aladdin.alizad3@gmail.com',
  twitterHandle: '@heselo',
  themeColor: '#0f766e',
  ogImage: {
    path: '/og-image.png',
    width: 1200,
    height: 630,
    type: 'image/png',
  },
  logoPath: '/icon-512.png',
} as const

/** Optional social profile URLs for Organization sameAs (set via PUBLIC_SOCIAL_* env). */
export function siteSameAs(): string[] {
  const env = typeof import.meta !== 'undefined' ? import.meta.env : undefined
  const candidates = [
    env?.PUBLIC_SOCIAL_INSTAGRAM,
    env?.PUBLIC_SOCIAL_FACEBOOK,
    env?.PUBLIC_SOCIAL_LINKEDIN,
    env?.PUBLIC_SOCIAL_X,
  ]
  return candidates
    .filter(Boolean)
    .map((url) => String(url).trim())
    .filter((url) => url.startsWith('https://'))
}

const LOCALHOST = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/?$/i
const PRODUCTION_ORIGIN = 'https://heselo.online'

/**
 * Canonical site origin for SEO (sitemap, canonical, JSON-LD, OG).
 * Prefers Astro `site`, then PUBLIC_SITE_URL. Localhost is ignored outside DEV
 * so accidental local .env values never ship in production builds.
 */
export function siteUrl(): string {
  const env = typeof import.meta !== 'undefined' ? import.meta.env : undefined
  const candidates = [env?.SITE, env?.PUBLIC_SITE_URL]

  for (const raw of candidates) {
    if (!raw) continue
    const url = String(raw).replace(/\/$/, '')
    if (!url) continue
    if (LOCALHOST.test(url)) {
      if (env?.DEV) return url
      continue
    }
    return url
  }

  return PRODUCTION_ORIGIN
}

export function absoluteUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${siteUrl()}${normalized}`
}

export function localePath(locale: string, slug = '/'): string {
  if (slug === '/' || slug === '') return `/${locale}/`
  const normalized = slug.startsWith('/') ? slug : `/${slug}`
  return `/${locale}${normalized.endsWith('/') ? normalized : `${normalized}/`}`
}

export function localeUrl(locale: string, slug = '/'): string {
  return absoluteUrl(localePath(locale, slug))
}
