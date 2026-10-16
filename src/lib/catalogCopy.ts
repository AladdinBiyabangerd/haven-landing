/**
 * Interpolate published subscription fees from the public catalog API
 * (via venueOffers) into marketing copy that uses placeholders.
 *
 * Placeholders: {low} {high} {gaming} {billiards} {karaoke} {lounge} {antikafe} {currency}
 * Fees follow the landing locale (az→AZN, ru→RUB, en→USD; RUB/USD fall back to AZN when 0).
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
  currency: string
}

function starterFee(
  slug: PrimarySolutionSlug,
  catalog: readonly VenueOffer[],
): number {
  return getVenueOffer(slug, catalog)?.plans[0]?.monthlyFee ?? 0
}

export function catalogPriceVars(
  locale: Locale,
  catalog: readonly VenueOffer[] = offersForLocale(locale),
): CatalogPriceVars {
  const { low, high } = monthlyFeeRange(catalog)
  return {
    low,
    high,
    gaming: starterFee('gaming', catalog),
    billiards: starterFee('billiards', catalog),
    karaoke: starterFee('karaoke', catalog),
    lounge: starterFee('lounge', catalog),
    antikafe: starterFee('antikafe', catalog),
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
