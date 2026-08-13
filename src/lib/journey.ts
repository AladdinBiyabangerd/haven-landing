import type { Messages } from '@/i18n/types'
import type { Locale } from '@/i18n/config'
import { localePath, whatsappUrl } from '@/lib/site'
import {
  isVenueOfferSlug,
  type ContactPlanId,
} from '@/lib/venueOffers'

export type JourneyLinkKind = 'pricing' | 'contact' | 'solution'

export function pricingPath(locale: Locale, type?: string): string {
  const base = localePath(locale, '/pricing')
  return type && isVenueOfferSlug(type) ? `${base}#${type}` : base
}

export function contactPath(locale: Locale, type?: string, plan?: ContactPlanId): string {
  const base = localePath(locale, '/contact')
  const params = new URLSearchParams()
  if (type) params.set('type', type)
  if (plan) params.set('plan', plan)
  const query = params.toString()
  return query ? `${base}?${query}` : base
}

export function solutionPath(locale: Locale, type?: string): string {
  if (type && isVenueOfferSlug(type)) return localePath(locale, `/solutions/${type}`)
  return localePath(locale, '/solutions')
}

export function whatsappPrefillFor(messages: Messages, type?: string): string {
  if (type && isVenueOfferSlug(type)) return messages.contact.whatsappPrefills[type]
  return messages.contact.whatsappPrefill
}

export function whatsappHrefFor(messages: Messages, type?: string): string {
  return whatsappUrl(whatsappPrefillFor(messages, type))
}

export function journeyPaths(locale: Locale): Record<JourneyLinkKind, string> {
  return {
    pricing: localePath(locale, '/pricing'),
    contact: localePath(locale, '/contact'),
    solution: localePath(locale, '/solutions'),
  }
}

export function typedWhatsappPrefills(messages: Messages): Record<string, string> {
  return {
    default: messages.contact.whatsappPrefill,
    ...messages.contact.whatsappPrefills,
  }
}
