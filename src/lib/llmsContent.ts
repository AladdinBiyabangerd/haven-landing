import { LOCALES, type Locale } from '@/i18n/config'
import { getMessages } from '@/i18n'
import { withCatalogPrices } from '@/lib/catalogCopy'
import { getFaqGroups } from '@/lib/faqPage'
import { fillTemplate } from '@/lib/format'
import {
  getComparisonGuides,
  getEducationalGuides,
} from '@/data/guides'
import { getSolutions } from '@/data/solutions'
import { SITE, localeUrl, phoneE164, siteUrl } from '@/lib/site'
import { offersForLocale } from '@/lib/venueOffers'

export const LOCALE_NAMES: Record<Locale, string> = {
  az: 'Azərbaycan (az, default)',
  en: 'English (en)',
  ru: 'Русский (ru)',
}

export type LlmsLink = { label: string; url: string }

/** Core marketing pages for a locale — URLs come from the same helpers as the router/sitemap. */
export function corePageLinks(locale: Locale): LlmsLink[] {
  const m = getMessages(locale)
  return [
    { label: m.nav.home, url: localeUrl(locale, '/') },
    { label: m.nav.features, url: localeUrl(locale, '/features') },
    { label: m.nav.solutions, url: localeUrl(locale, '/solutions') },
    { label: m.nav.pricing, url: localeUrl(locale, '/pricing') },
    { label: m.footer.about, url: localeUrl(locale, '/about') },
    { label: m.faqPage.navLabel, url: localeUrl(locale, '/faq') },
    { label: m.nav.contact, url: localeUrl(locale, '/contact') },
    { label: m.nav.guides, url: localeUrl(locale, '/guides') },
  ]
}

export function solutionLinks(locale: Locale): LlmsLink[] {
  return getSolutions(locale).map((s) => ({
    label: s.shortTitle,
    url: localeUrl(locale, `/solutions/${s.slug}`),
  }))
}

export function comparisonGuideLinks(locale: Locale): LlmsLink[] {
  return getComparisonGuides(locale).map((g) => ({
    label: g.shortTitle,
    url: localeUrl(locale, `/guides/${g.slug}`),
  }))
}

export function educationalGuideLinks(locale: Locale): LlmsLink[] {
  return getEducationalGuides(locale).map((g) => ({
    label: g.shortTitle,
    url: localeUrl(locale, `/guides/${g.slug}`),
  }))
}

export function formatLinks(links: LlmsLink[]): string {
  return links.map((l) => `- ${l.label}: ${l.url}`).join('\n')
}

/** Every URL referenced by llms.txt / llms-full.txt (used by the dist check script). */
export function allLinkedPaths(): string[] {
  return LOCALES.flatMap((locale) =>
    [
      ...corePageLinks(locale),
      ...solutionLinks(locale),
      ...comparisonGuideLinks(locale),
      ...educationalGuideLinks(locale),
    ].map((l) => l.url),
  )
}

export function pricingTable(locale: Locale): string {
  const m = getMessages(locale)
  const catalog = offersForLocale(locale)
  const currency = catalog[0]?.plans[0]?.currency ?? 'AZN'
  const rows: string[] = []
  for (const offer of catalog) {
    const copy = m.pricing.offers[offer.slug]
    for (const plan of offer.plans) {
      const capacity = fillTemplate(m.pricing.capacity[offer.unit], { n: plan.upTo })
      rows.push(
        `| ${copy.name} | ${m.pricing.planNames[plan.id]} | ${capacity} | ${plan.monthlyFee} | ${plan.annualFee} |`,
      )
    }
  }
  return [
    `| Venue type | Plan | Capacity | ${currency} / month | ${currency} / year |`,
    '|------------|------|----------|-------------|------------|',
    ...rows,
  ].join('\n')
}

export function faqText(locale: Locale): string {
  const m = getMessages(locale)
  return getFaqGroups(m)
    .map((group) => {
      const qa = group.items
        .map(
          (item) =>
            `Q: ${withCatalogPrices(item.q, locale)}\nA: ${withCatalogPrices(item.a, locale)}`,
        )
        .join('\n\n')
      return `### ${withCatalogPrices(group.title, locale)}\n\n${qa}`
    })
    .join('\n\n')
}

export function modulesText(locale: Locale): string {
  const m = getMessages(locale)
  return m.featuresPage.modules
    .map(
      (mod) =>
        `- ${withCatalogPrices(mod.title, locale)}: ${withCatalogPrices(mod.desc, locale)}`,
    )
    .join('\n')
}

export function contactLines(): string {
  return [
    `- Email: ${SITE.contactEmail}`,
    `- WhatsApp / phone: ${phoneE164()}`,
    `- Contact form (demo): ${localeUrl('az', '/contact')}`,
  ].join('\n')
}

export const textHeaders = (maxAge: number) => ({
  'Content-Type': 'text/plain; charset=utf-8',
  'Cache-Control': `public, max-age=${maxAge}`,
})

export const llmsFullUrl = () => `${siteUrl()}/llms-full.txt`
