import type { APIRoute } from 'astro'
import { LOCALES } from '@/i18n/config'
import { getMessages } from '@/i18n'
import { catalogPriceVars, withCatalogPrices } from '@/lib/catalogCopy'
import { FOUNDER, localeUrl, siteUrl } from '@/lib/site'
import { loadVenueOffers } from '@/lib/venueOffers'
import {
  LOCALE_NAMES,
  comparisonGuideLinks,
  contactLines,
  corePageLinks,
  educationalGuideLinks,
  faqText,
  formatLinks,
  modulesText,
  pricingTable,
  solutionLinks,
  textHeaders,
} from '@/lib/llmsContent'

export const GET: APIRoute = async () => {
  await loadVenueOffers()
  const origin = siteUrl()
  const p = catalogPriceVars('az')
  const perLocale = LOCALES.map((locale) => {
    const m = getMessages(locale)
    const localePrices = catalogPriceVars(locale)
    return `# ${LOCALE_NAMES[locale]}

## Summary

${withCatalogPrices(m.site.description, locale)}

## Modules

${modulesText(locale)}

## Pricing (${localePrices.currency})

${pricingTable(locale)}

## FAQ

${faqText(locale)}

## Pages

${formatLinks(corePageLinks(locale))}

### Solutions

${formatLinks(solutionLinks(locale))}

### Comparison / alternative guides

${formatLinks(comparisonGuideLinks(locale))}

### Educational guides

${formatLinks(educationalGuideLinks(locale))}`
  }).join('\n\n---\n\n')

  const body = `# Heselo — full context (${origin})

> Heselo is a web panel (SaaS) for gaming / PlayStation clubs, karaoke rooms, billiards halls, anti-cafés and room lounges in Azerbaijan: booking, live floor sessions, cash shift and inventory in one place. It is not a kitchen / restaurant POS.
> Languages: az (default), en, ru. Currencies: AZN / RUB / USD by locale. Short version: ${origin}/llms.txt

## Facts

- Product type: SaaS web panel, operating system: Web (any modern browser, works on mobile).
- Venue types: gaming / PlayStation club, karaoke, billiards, anti-café, room lounge.
- Founder: ${FOUNDER.name} (${localeUrl('az', '/about')}).
- Pricing is public and differs by venue type; published starting monthly fee (Small plan, ${p.currency}): gaming ${p.gaming}, billiards ${p.billiards}, karaoke ${p.karaoke}, room lounge ${p.lounge}, anti-café ${p.antikafe}. Lowest: ${p.low} ${p.currency}/month.
- Free demo: contact form or WhatsApp.

## Contact

${contactLines()}

## Machine-readable

- Sitemap: ${origin}/sitemap.xml
- Short index: ${origin}/llms.txt
- robots.txt: ${origin}/robots.txt

---

${perLocale}
`

  return new Response(body, { headers: textHeaders(3600) })
}
