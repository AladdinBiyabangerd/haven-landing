import type { Locale } from '@/i18n/config'
import { HTML_LANG, LOCALES, OG_LOCALES } from '@/i18n/config'
import type { Messages } from '@/i18n/types'
import { allVenuePlans, monthlyFeeRange } from '@/lib/venueOffers'
import {
  absoluteUrl,
  FOUNDER,
  founderSameAs,
  localePath,
  localeUrl,
  phoneE164,
  SITE,
  siteSameAs,
  siteUrl,
} from '@/lib/site'

export type BreadcrumbItem = { label: string; href: string; current?: boolean }

export function buildBreadcrumbItems(
  locale: Locale,
  messages: Messages,
  input: SeoPageInput,
): BreadcrumbItem[] {
  const crumbName =
    input.breadcrumbName ||
    input.title.replace(/ \| Heselo$/, '').replace(/ — Heselo$/, '').replace(/^Heselo — /, '')

  const items: BreadcrumbItem[] = [
    { label: messages.nav.home, href: localePath(locale, '/') },
  ]

  if (input.slug.startsWith('/solutions')) {
    items.push({ label: messages.nav.solutions, href: localePath(locale, '/solutions') })
    if (input.slug !== '/solutions' && input.slug !== '/solutions/') {
      items.push({
        label: crumbName,
        href: localePath(locale, input.slug),
        current: true,
      })
    } else {
      items[items.length - 1].current = true
    }
  } else if (input.slug.startsWith('/guides')) {
    items.push({ label: messages.nav.guides, href: localePath(locale, '/guides') })
    if (input.slug !== '/guides' && input.slug !== '/guides/') {
      items.push({
        label: crumbName,
        href: localePath(locale, input.slug),
        current: true,
      })
    } else {
      items[items.length - 1].current = true
    }
  } else if (input.slug !== '/' && input.slug !== '') {
    items.push({
      label: crumbName,
      href: localePath(locale, input.slug),
      current: true,
    })
  }

  if (items.length > 1 && !items[items.length - 1].current) {
    items[items.length - 1].current = true
  }

  return items
}

export type PageKey =
  | 'home'
  | 'features'
  | 'pricing'
  | 'contact'
  | 'about'
  | 'privacy'
  | 'terms'
  | 'notFound'
  | 'solutions'
  | 'solution'
  | 'guides'
  | 'guide'

const PAGE_SLUGS: Record<Exclude<PageKey, 'solution' | 'guide'>, string> = {
  home: '/',
  features: '/features',
  pricing: '/pricing',
  contact: '/contact',
  about: '/about',
  privacy: '/privacy',
  terms: '/terms',
  notFound: '/404',
  solutions: '/solutions',
  guides: '/guides',
}

export type SeoPageInput = {
  title: string
  description: string
  keywords?: string[]
  /** Path after locale, e.g. `/solutions/gaming` */
  slug: string
  breadcrumbName?: string
  /** Visible FAQ on this page — only then FAQPage JSON-LD is emitted */
  faq?: Array<{ q: string; a: string }>
  ogType?: 'website' | 'article'
  /** When set, emit Article schema with this headline/body summary */
  article?: {
    headline: string
    description: string
    datePublished?: string
    dateModified?: string
  }
}

export function pageSlug(key: Exclude<PageKey, 'solution' | 'guide'>): string {
  return PAGE_SLUGS[key]
}

function pricesAz(): { low: number; high: number } {
  return monthlyFeeRange()
}

function isCommercialSurface(slug: string): boolean {
  if (slug === '/' || slug === '') return true
  return (
    slug.startsWith('/features') ||
    slug.startsWith('/pricing') ||
    slug.startsWith('/solutions') ||
    slug.startsWith('/contact') ||
    slug.startsWith('/guides')
  )
}

export function buildJsonLdGraph(
  locale: Locale,
  messages: Messages,
  input: SeoPageInput,
): Record<string, unknown>[] {
  const { low, high } = pricesAz()
  const pageUrl = localeUrl(locale, input.slug)
  const includeOffers = isCommercialSurface(input.slug) && !input.slug.startsWith('/guides')

  const software: Record<string, unknown> = {
    '@type': 'SoftwareApplication',
    '@id': `${siteUrl()}/#software`,
    name: SITE.name,
    applicationCategory: 'BusinessApplication',
    operatingSystem: messages.seo.softwareOperatingSystem,
    description: messages.site.description,
    featureList: messages.seo.softwareFeatures.join(', '),
    inLanguage: LOCALES.map((l) => HTML_LANG[l]),
    provider: { '@id': `${siteUrl()}/#organization` },
    url: siteUrl(),
  }

  if (includeOffers) {
    software.offers = {
      '@type': 'AggregateOffer',
      priceCurrency: 'AZN',
      lowPrice: String(low),
      highPrice: String(high),
      offerCount: String(allVenuePlans().length),
      availability: 'https://schema.org/InStock',
      url: localeUrl(locale, '/pricing'),
    }
  }

  const founderId = `${siteUrl()}/#founder`
  const personSameAs = founderSameAs(locale)

  const founderPerson: Record<string, unknown> = {
    '@type': 'Person',
    '@id': founderId,
    name: FOUNDER.name,
    url: localeUrl(locale, '/about'),
    jobTitle: messages.aboutPage.founderJobTitle,
    description: messages.aboutPage.founderSchemaDescription,
    worksFor: { '@id': `${siteUrl()}/#organization` },
    ...(personSameAs.length > 0 ? { sameAs: personSameAs } : {}),
  }

  const isAboutPage = input.slug === '/about' || input.slug === '/about/'

  const graph: Record<string, unknown>[] = [
    {
      '@type': 'Organization',
      '@id': `${siteUrl()}/#organization`,
      name: SITE.name,
      url: siteUrl(),
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl(SITE.logoPath),
        width: 512,
        height: 512,
      },
      email: SITE.contactEmail,
      description: messages.site.description,
      founder: { '@id': founderId },
      ...(siteSameAs().length > 0 ? { sameAs: siteSameAs() } : {}),
      knowsAbout: messages.seo.knowsAbout,
      areaServed: {
        '@type': 'Country',
        name: messages.seo.countryName,
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: SITE.contactEmail,
        telephone: phoneE164(),
        contactType: 'sales',
        availableLanguage: ['az', 'en', 'ru'],
      },
    },
    founderPerson,
    software,
    {
      '@type': 'WebSite',
      '@id': `${siteUrl()}/#website`,
      name: SITE.name,
      url: siteUrl(),
      description: messages.site.description,
      publisher: { '@id': `${siteUrl()}/#organization` },
      inLanguage: HTML_LANG[locale],
    },
    {
      '@type': input.article ? 'Article' : isAboutPage ? 'AboutPage' : 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: input.title,
      headline: input.article?.headline,
      description: input.description,
      isPartOf: { '@id': `${siteUrl()}/#website` },
      about: isAboutPage ? { '@id': founderId } : { '@id': `${siteUrl()}/#software` },
      inLanguage: HTML_LANG[locale],
      ...(isAboutPage
        ? {
            mainEntity: { '@id': founderId },
            author: { '@id': founderId },
            publisher: { '@id': `${siteUrl()}/#organization` },
          }
        : {}),
      ...(input.article
        ? {
            datePublished: input.article.datePublished,
            dateModified: input.article.dateModified || input.article.datePublished,
            author: { '@id': founderId },
            publisher: { '@id': `${siteUrl()}/#organization` },
            mainEntityOfPage: pageUrl,
          }
        : {}),
    },
  ]

  const crumbName =
    input.breadcrumbName ||
    input.title.replace(/ \| Heselo$/, '').replace(/ — Heselo$/, '').replace(/^Heselo — /, '')

  const crumbs: Record<string, unknown>[] = [
    {
      '@type': 'ListItem',
      position: 1,
      name: messages.nav.home,
      item: localeUrl(locale, '/'),
    },
  ]

  if (input.slug.startsWith('/solutions')) {
    crumbs.push({
      '@type': 'ListItem',
      position: 2,
      name: messages.nav.solutions,
      item: localeUrl(locale, '/solutions'),
    })
    if (input.slug !== '/solutions' && input.slug !== '/solutions/') {
      crumbs.push({
        '@type': 'ListItem',
        position: 3,
        name: crumbName,
        item: pageUrl,
      })
    }
  } else if (input.slug.startsWith('/guides')) {
    crumbs.push({
      '@type': 'ListItem',
      position: 2,
      name: messages.nav.guides,
      item: localeUrl(locale, '/guides'),
    })
    if (input.slug !== '/guides' && input.slug !== '/guides/') {
      crumbs.push({
        '@type': 'ListItem',
        position: 3,
        name: crumbName,
        item: pageUrl,
      })
    }
  } else if (input.slug !== '/' && input.slug !== '') {
    crumbs.push({
      '@type': 'ListItem',
      position: 2,
      name: crumbName,
      item: pageUrl,
    })
  }

  graph.push({
    '@type': 'BreadcrumbList',
    itemListElement: crumbs,
  })

  if (input.faq && input.faq.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: input.faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    })
  }

  if (input.slug === '/contact' || input.slug === '/contact/') {
    graph.push({
      '@type': 'ContactPage',
      '@id': `${pageUrl}#contact`,
      url: pageUrl,
      name: messages.contact.title,
      description: input.description,
      isPartOf: { '@id': `${siteUrl()}/#website` },
      mainEntity: { '@id': `${siteUrl()}/#organization` },
    })
  }

  if (input.slug === '/pricing' || input.slug === '/pricing/') {
    graph.push(
      ...allVenuePlans().map(({ offer, plan }) => {
        const copy = messages.pricing.offers[offer.slug]
        return {
          '@type': 'Offer',
          '@id': `${pageUrl}#offer-${offer.slug}-${plan.id}`,
          name: `${copy.name} — ${messages.pricing.planNames[plan.id]}`,
          description: copy.intro,
          price: String(plan.monthlyFee),
          priceCurrency: 'AZN',
          availability: 'https://schema.org/InStock',
          url: `${pageUrl}#${offer.slug}`,
          offeredBy: { '@id': `${siteUrl()}/#organization` },
          eligibleRegion: { '@type': 'Country', name: messages.seo.countryName },
          ...(offer.model === 'monthly'
            ? { priceSpecification: { '@type': 'UnitPriceSpecification', price: String(plan.monthlyFee), priceCurrency: 'AZN', unitText: 'MONTH' } }
            : {}),
        }
      }),
    )
  }

  return graph
}

export function seoFromMessages(
  key: Exclude<PageKey, 'solution' | 'solutions' | 'guide' | 'guides'>,
  _locale: Locale,
  messages: Messages,
): SeoPageInput {
  const slug = PAGE_SLUGS[key === 'notFound' ? 'notFound' : key]
  if (key === 'notFound') {
    return {
      title: messages.seo.notFound.title,
      description: messages.seo.notFound.description,
      keywords: messages.seo.notFound.keywords,
      slug,
    }
  }

  const page = messages.seo.pages[key]
  const faq =
    key === 'home'
      ? messages.faq.items
      : key === 'about'
        ? messages.aboutPage.faq
        : undefined

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    slug,
    faq,
    breadcrumbName:
      key === 'home'
        ? messages.nav.home
        : key === 'features'
          ? messages.nav.features
          : key === 'pricing'
            ? messages.nav.pricing
            : key === 'contact'
              ? messages.nav.contact
              : key === 'about'
                ? messages.footer.about
                : key === 'privacy'
                  ? messages.footer.privacy
                  : messages.footer.terms,
  }
}

export function seoMeta(
  locale: Locale,
  messages: Messages,
  input: SeoPageInput,
  options?: { noindex?: boolean },
): {
  title: string
  description: string
  keywords: string
  canonical: string
  ogLocale: string
  alternateLocales: string[]
  image: string
  imageAlt: string
  imageType: string
  robots: string
  ogType: string
  jsonLd: string
} {
  const robots = options?.noindex
    ? 'noindex, nofollow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

  return {
    title: input.title,
    description: input.description,
    keywords: (input.keywords || []).join(', '),
    canonical: localeUrl(locale, input.slug),
    ogLocale: OG_LOCALES[locale],
    alternateLocales: LOCALES.filter((l) => l !== locale).map((l) => OG_LOCALES[l]),
    image: absoluteUrl(SITE.ogImage.path),
    imageAlt: messages.seo.ogImageAlt,
    imageType: SITE.ogImage.type,
    robots,
    ogType: input.ogType || (input.article ? 'article' : 'website'),
    jsonLd: JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': buildJsonLdGraph(locale, messages, input),
    }),
  }
}
