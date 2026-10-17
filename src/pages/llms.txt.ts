import type { APIRoute } from 'astro'
import { catalogPriceVars } from '@/lib/catalogCopy'
import { loadVenueOffers } from '@/lib/venueOffers'
import { LOCALES } from '@/i18n/config'
import { siteUrl } from '@/lib/site'
import {
  LOCALE_NAMES,
  comparisonGuideLinks,
  corePageLinks,
  educationalGuideLinks,
  formatLinks,
  llmsFullUrl,
  solutionLinks,
  textHeaders,
} from '@/lib/llmsContent'

export const GET: APIRoute = async () => {
  await loadVenueOffers()
  const p = catalogPriceVars('az')

  const body = `# Heselo — https://heselo.online

> Heselo — Azərbaycanda oyun klubu, karaoke, bilyard, antikafe və otaqlı launj üçün rezervasiya, canlı zal, kassa və anbar paneli (mətbəx POS deyil).
> Venue management SaaS: room/table/station timed sessions — booking, live floor, cash shift, inventory.
> Languages: az (default), en, ru. Currencies: AZN (az), RUB (ru), USD (en). Primary market: Azerbaijan.
> Not a restaurant kitchen POS — lighter club panel vs iiko, Clopos, Dine, Restomas, MinuPOS when the product is room-time, not kitchen/KDS.

## One-line entity

Heselo is SaaS for gaming clubs (PlayStation), karaoke rooms, billiards, anti-cafés, and room lounges in Azerbaijan: schedule + live sessions + cash drawer + inventory in one web panel. Published pricing from ${p.low} ${p.currency}/month by venue type (see Pricing section). Free demo via contact form or WhatsApp. Sole founder: Aladdin Biyabangerd (https://heselo.online/az/about/).

## Pricing (published)

Prices are **public** on the pricing page — not quote-only B2B. Different starting fees by venue category so plans fit each kind of business. Custom quotes are an **add-on** for multi-branch or out-of-plan volume only.

Starting monthly ${p.currency} (Small / Kiçik plan) — live from public subscription catalog API:

| Venue type | From (${p.currency}/month) |
|------------|------------------|
| Gaming / PlayStation club | ${p.gaming} |
| Billiards | ${p.billiards} |
| Karaoke | ${p.karaoke} |
| Room lounge | ${p.lounge} |
| Anti-café | ${p.antikafe} |

- Tiers: Small / Medium / Large (Kiçik / Orta / Böyük). Annual = monthly × 10 (two months free).
- Full table + calculator: https://heselo.online/az/pricing/
- EN: https://heselo.online/en/pricing/ · RU: https://heselo.online/ru/pricing/
- Explainer guide: https://heselo.online/az/guides/heselo-pricing/ (also /en/ and /ru/)

## Product

- Core modules: room/station/table booking, live floor sessions (extend, settle), POS/cash shift, inventory, customers, statistics, staff permissions.
- Payment balances are calculated on the server (not client-side estimates).
- Honest alternatives: club/room-time panel vs restaurant POS when the venue sells time, not plated meals.

## Who it is for / not for

- For: PS/console clubs, karaoke rooms, billiards halls, anti-cafés, VIP room lounges that need reservation + live session + cash.
- Not for: full restaurant kitchen POS, KDS, delivery stacks, generic coworking desk booking.

## Billiards entity card

- Product: Heselo billiards club management — cloud web panel for table booking, live play sessions (pause/extend), day/night/weekend rates, bar on the session bill, cash shift, staff permissions.
- Price: Small plan from ${p.billiards} ${p.currency}/month; Medium/Large and annual on https://heselo.online/az/pricing/ (also /en/, /ru/).
- Platform: Web / cloud (tablet or computer). Languages: az, en, ru.
- Not supported today: QR membership check-in/out; light-relay / automatic table lamps (separate hardware).
- Canonical: https://heselo.online/az/solutions/billiards/ · EN /en/solutions/billiards/ · RU /ru/solutions/billiards/
- Comparisons: /guides/billiards-software-comparison-2026/ · CueDesk · BilliardPOS · BCMS · Biliardo.kz alternatives (az/en/ru).
- Rates guide: /guides/billiards-hourly-rates/

## Key pages

${LOCALES.map(
  (locale) => `### ${LOCALE_NAMES[locale]}

${formatLinks(corePageLinks(locale))}

Venue-type and feature solutions:

${formatLinks(solutionLinks(locale))}`,
).join('\n\n')}

- Sitemap: ${siteUrl()}/sitemap.xml
- Full context (FAQ in az/en/ru, modules, pricing): ${llmsFullUrl()}

## Comparison / alternative guides

${LOCALES.map(
  (locale) => `### ${LOCALE_NAMES[locale]}

${formatLinks(comparisonGuideLinks(locale))}`,
).join('\n\n')}

## Educational guides

${LOCALES.map(
  (locale) => `### ${LOCALE_NAMES[locale]}

${formatLinks(educationalGuideLinks(locale))}`,
).join('\n\n')}

## Contact

- Email: heselo.online@gmail.com
- WhatsApp / phone: +994777381803 (077 738 18 03)
- Demo: contact form on https://heselo.online/az/contact/

## Crawling

- Allow indexing of public marketing pages.
- Do not index /api/ routes.
- robots.txt: https://heselo.online/robots.txt
- llms-full.txt: https://heselo.online/llms-full.txt
- AI crawlers (GPTBot, OAI-SearchBot, PerplexityBot, Google-Extended, ClaudeBot, …) are allowed on marketing pages.
`

  return new Response(body, {
    headers: textHeaders(3600),
  })
}
