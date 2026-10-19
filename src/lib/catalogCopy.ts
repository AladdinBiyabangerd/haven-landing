/**
 * Interpolate published subscription fees from the public catalog API
 * (via venueOffers) into marketing copy that uses placeholders.
 *
 * Placeholders:
 *   {low} {high} {currency}
 *   {gaming} {billiards} {karaoke} {lounge} {antikafe} — Small/starter monthly
 *   {gamingHigh} {billiardsHigh} {karaokeHigh} {loungeHigh} {antikafeHigh} — Large/pro monthly
 *
 * Fees follow the landing locale (az→AZN, ru→RUB, en→USD; RUB/USD fall back to AZN when 0).
 * Never hardcode "AZN" / "59" in copy — always use these placeholders.
 */
import { fillTemplate } from '@/lib/format'
import type { Locale } from '@/i18n/config'
import {
  catalogDisplayCurrency,
  getVenueOffer,
  monthlyFeeRange,
  offersForLocale,
  type VenueOffer,
} from '@/lib/venueOffers'
import type { PrimarySolutionSlug } from '@/data/solutions/types'

export type CatalogPriceVars = {
  low: number
  high: number
  gaming: number
  billiards: number
  karaoke: number
  lounge: number
  antikafe: number
  gamingHigh: number
  billiardsHigh: number
  karaokeHigh: number
  loungeHigh: number
  antikafeHigh: number
  currency: string
}

function planFee(
  slug: PrimarySolutionSlug,
  catalog: readonly VenueOffer[],
  index: 0 | 2,
): number {
  return getVenueOffer(slug, catalog)?.plans[index]?.monthlyFee ?? 0
}

export function catalogPriceVars(
  locale: Locale,
  catalog: readonly VenueOffer[] = offersForLocale(locale),
): CatalogPriceVars {
  const { low, high } = monthlyFeeRange(catalog)
  return {
    low,
    high,
    gaming: planFee('gaming', catalog, 0),
    billiards: planFee('billiards', catalog, 0),
    karaoke: planFee('karaoke', catalog, 0),
    lounge: planFee('lounge', catalog, 0),
    antikafe: planFee('antikafe', catalog, 0),
    gamingHigh: planFee('gaming', catalog, 2),
    billiardsHigh: planFee('billiards', catalog, 2),
    karaokeHigh: planFee('karaoke', catalog, 2),
    loungeHigh: planFee('lounge', catalog, 2),
    antikafeHigh: planFee('antikafe', catalog, 2),
    currency: catalogDisplayCurrency(locale, catalog),
  }
}

export function withCatalogPrices(
  text: string,
  locale: Locale,
  catalog: readonly VenueOffer[] = offersForLocale(locale),
): string {
  if (!text.includes('{')) return text
  return fillTemplate(text, catalogPriceVars(locale, catalog))
}

/** Deep-walk strings in plain objects/arrays and fill catalog price placeholders. */
export function applyCatalogPricesDeep<T>(
  value: T,
  locale: Locale,
  catalog: readonly VenueOffer[] = offersForLocale(locale),
): T {
  if (typeof value === 'string') {
    return withCatalogPrices(value, locale, catalog) as T
  }
  if (Array.isArray(value)) {
    return value.map((item) => applyCatalogPricesDeep(item, locale, catalog)) as T
  }
  if (value && typeof value === 'object') {
    const out: Record<string, unknown> = {}
    for (const [key, child] of Object.entries(value as Record<string, unknown>)) {
      out[key] = applyCatalogPricesDeep(child, locale, catalog)
    }
    return out as T
  }
  return value
}
