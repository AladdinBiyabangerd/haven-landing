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

/** Sole founder / creator of Heselo — used in footer, About page, and JSON-LD Person. */
export const FOUNDER = {
  name: 'Aladdin Biyabangerd',
  portfolioOrigin: 'https://aladdinbiyabangerd.site',
  /** Case study on the personal portfolio (locale-prefixed). */
  workSlug: 'work/heselo',
} as const

/** @deprecated Use FOUNDER — kept so older imports keep working. */
export const BUILDER = FOUNDER

function portfolioLocale(locale: string): string {
  return locale === 'ka' ? 'en' : locale
}

/** Locale-matched portfolio home with UTM (footer credit / Person.url). */
export function founderPortfolioUrl(locale: string): string {
  const url = new URL(`/${portfolioLocale(locale)}`, FOUNDER.portfolioOrigin)
  url.searchParams.set('utm_source', 'heselo')
  url.searchParams.set('utm_medium', 'referral')
  url.searchParams.set('utm_campaign', 'founder')
  url.searchParams.set('utm_content', 'portfolio_home')
  return url.toString()
}

/** @deprecated Use founderPortfolioUrl */
export function builderPortfolioUrl(locale: string): string {
  return founderPortfolioUrl(locale)
}

/** Heselo case study on the founder’s portfolio. */
export function founderWorkUrl(locale: string): string {
  const url = new URL(`/${portfolioLocale(locale)}/${FOUNDER.workSlug}`, FOUNDER.portfolioOrigin)
  url.searchParams.set('utm_source', 'heselo')
  url.searchParams.set('utm_medium', 'referral')
  url.searchParams.set('utm_campaign', 'founder')
  url.searchParams.set('utm_content', 'work_heselo')
  return url.toString()
}

/**
 * Public profile URLs for Person.sameAs (portfolio + optional LinkedIn).
 * Set PUBLIC_FOUNDER_LINKEDIN=https://www.linkedin.com/in/… when ready.
 */
export function founderSameAs(locale: string): string[] {
  const env = typeof import.meta !== 'undefined' ? import.meta.env : undefined
  const linkedIn = env?.PUBLIC_FOUNDER_LINKEDIN
  const urls = [
    `${FOUNDER.portfolioOrigin}/${portfolioLocale(locale)}/`,
    `${FOUNDER.portfolioOrigin}/${portfolioLocale(locale)}/${FOUNDER.workSlug}/`,
  ]
  if (linkedIn && String(linkedIn).trim().startsWith('https://')) {
    urls.push(String(linkedIn).trim())
  }
  return urls
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

/** Apex host only — GSC showed both www and non-www; canonicals must not split. */
function apexOrigin(url: string): string {
  try {
    const parsed = new URL(url.includes('://') ? url : `https://${url}`)
    if (parsed.hostname.startsWith('www.')) {
      parsed.hostname = parsed.hostname.slice(4)
    }
    return parsed.origin
  } catch {
    return url.replace(/\/$/, '').replace(/^(https?:\/\/)www\./i, '$1')
  }
}

/**
 * Canonical site origin for SEO (sitemap, canonical, JSON-LD, OG).
 * Prefers Astro `site`, then PUBLIC_HESELO_SITE_URL (legacy PUBLIC_SITE_URL).
 * Localhost is ignored outside DEV so accidental local .env values never ship.
 * Production always normalizes away `www.` so Search Console does not split equity.
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
    return apexOrigin(url)
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
