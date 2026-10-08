/**
 * Interpolate published subscription fees from the public catalog API
 * (via venueOffers) into marketing copy that uses placeholders.
 *
 * Placeholders: {low} {high} {gaming} {billiards} {karaoke} {lounge} {antikafe}
 * = starter monthly AZN (or catalog min/max). Call after loadVenueOffers().
 */
import { fillTemplate } from '@/lib/format'
import {
  getActiveOffers,
  getVenueOffer,
  monthlyFeeRange,
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
}

function starterFee(
  slug: PrimarySolutionSlug,
  catalog: readonly VenueOffer[],
): number {
  return getVenueOffer(slug, catalog)?.plans[0]?.monthlyFee ?? 0
}

export function catalogPriceVars(
  catalog: readonly VenueOffer[] = getActiveOffers(),
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
  }
}

export function withCatalogPrices(
  text: string,
  catalog: readonly VenueOffer[] = getActiveOffers(),
): string {
  if (!text.includes('{')) return text
  return fillTemplate(text, catalogPriceVars(catalog))
}

/** Deep-walk strings in plain objects/arrays and fill catalog price placeholders. */
export function applyCatalogPricesDeep<T>(
  value: T,
  catalog: readonly VenueOffer[] = getActiveOffers(),
): T {
  if (typeof value === 'string') {
    return withCatalogPrices(value, catalog) as T
  }
  if (Array.isArray(value)) {
    return value.map((item) => applyCatalogPricesDeep(item, catalog)) as T
  }
  if (value && typeof value === 'object') {
    const out: Record<string, unknown> = {}
    for (const [key, child] of Object.entries(value as Record<string, unknown>)) {
      out[key] = applyCatalogPricesDeep(child, catalog)
    }
    return out as T
  }
  return value
}
