export const SITE = {
  name: 'Heselo',
  contactEmail: 'heselo.online@gmail.com',
  /** Local AZ mobile format (NAP / display). */
  contactPhone: '0777381803',
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

/** Builder credit in the site footer — portfolio hub for SEO and attribution. */
export const BUILDER = {
  name: 'Aladdin Biyabangerd',
  portfolioOrigin: 'https://aladdinbiyabangerd.site',
} as const

/** Locale-matched portfolio URL with UTM for the Heselo footer credit. */
export function builderPortfolioUrl(locale: string): string {
  const pathLocale = locale === 'ka' ? 'en' : locale
  const url = new URL(`/${pathLocale}`, BUILDER.portfolioOrigin)
  url.searchParams.set('utm_source', 'heselo')
  url.searchParams.set('utm_medium', 'organic_social')
  url.searchParams.set('utm_campaign', 'portfolio')
  url.searchParams.set('utm_content', 'footer_credit')
  return url.toString()
}

/** Optional social profile URLs for Organization sameAs (PUBLIC_HESELO_SOCIAL_*). */
export function siteSameAs(): string[] {
  const env = typeof import.meta !== 'undefined' ? import.meta.env : undefined
  const candidates = [
    env?.PUBLIC_HESELO_SOCIAL_INSTAGRAM ?? env?.PUBLIC_SOCIAL_INSTAGRAM,
    env?.PUBLIC_HESELO_SOCIAL_FACEBOOK ?? env?.PUBLIC_SOCIAL_FACEBOOK,
    env?.PUBLIC_HESELO_SOCIAL_LINKEDIN ?? env?.PUBLIC_SOCIAL_LINKEDIN,
    env?.PUBLIC_HESELO_SOCIAL_X ?? env?.PUBLIC_SOCIAL_X,
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
 * Prefers Astro `site`, then PUBLIC_HESELO_SITE_URL (legacy PUBLIC_SITE_URL).
 * Localhost is ignored outside DEV so accidental local .env values never ship.
 */
export function siteUrl(): string {
  const env = typeof import.meta !== 'undefined' ? import.meta.env : undefined
  const candidates = [env?.SITE, env?.PUBLIC_HESELO_SITE_URL, env?.PUBLIC_SITE_URL]

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

/** E.164 for tel: / schema.org (e.g. +994777381803). */
export function phoneE164(local: string = SITE.contactPhone): string {
  const digits = local.replace(/\D/g, '')
  if (digits.startsWith('994')) return `+${digits}`
  if (digits.startsWith('0')) return `+994${digits.slice(1)}`
  return `+994${digits}`
}

/** Digits only, no plus — for wa.me links. */
export function phoneDigitsE164(local: string = SITE.contactPhone): string {
  return phoneE164(local).replace(/\D/g, '')
}

export function telUrl(local: string = SITE.contactPhone): string {
  return `tel:${phoneE164(local)}`
}

export function whatsappUrl(text?: string, local: string = SITE.contactPhone): string {
  const base = `https://wa.me/${phoneDigitsE164(local)}`
  if (!text?.trim()) return base
  return `${base}?text=${encodeURIComponent(text.trim())}`
}
