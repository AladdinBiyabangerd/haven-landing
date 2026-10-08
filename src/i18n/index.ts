import type { Messages } from './types'
import { az } from './messages/az'
import { en } from './messages/en'
import { ru } from './messages/ru'
import type { Locale } from './config'
import { applyCatalogPricesDeep } from '@/lib/catalogCopy'
import { loadVenueOffers } from '@/lib/venueOffers'

const catalogs: Record<Locale, Messages> = { az, en, ru }

export function getMessages(locale: Locale): Messages {
  return catalogs[locale]
}

/** Warm subscription catalog, then fill {low}/{gaming}/… in copy. */
export async function loadPricedMessages(locale: Locale): Promise<Messages> {
  await loadVenueOffers()
  return applyCatalogPricesDeep(getMessages(locale))
}
