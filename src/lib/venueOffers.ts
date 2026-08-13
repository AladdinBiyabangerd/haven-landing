import { PRIMARY_SOLUTION_SLUGS, type PrimarySolutionSlug } from '@/data/solutions/types'

export type VenueOfferModel = 'oneTime' | 'monthly'
export type VenuePlanId = 'starter' | 'plus' | 'pro'
export type VenueCapacityUnit = 'stations' | 'tables' | 'rooms' | 'zones'

export type VenuePlan = {
  id: VenuePlanId
  amount: number
  upTo: number
}

export type VenueOffer = {
  slug: PrimarySolutionSlug
  model: VenueOfferModel
  unit: VenueCapacityUnit
  plans: readonly [VenuePlan, VenuePlan, VenuePlan]
}

/**
 * All current offers are monthly. Amounts are set by the owner:
 * PS/billiards stay cheap (timer-club habit); karaoke/lounge/anti-café pay more for rooms.
 */
export const VENUE_OFFERS: readonly VenueOffer[] = [
  {
    slug: 'gaming',
    model: 'monthly',
    unit: 'stations',
    plans: [
      { id: 'starter', amount: 9, upTo: 8 },
      { id: 'plus', amount: 15, upTo: 16 },
      { id: 'pro', amount: 25, upTo: 24 },
    ],
  },
  {
    slug: 'billiards',
    model: 'monthly',
    unit: 'tables',
    plans: [
      { id: 'starter', amount: 9, upTo: 6 },
      { id: 'plus', amount: 15, upTo: 12 },
      { id: 'pro', amount: 25, upTo: 18 },
    ],
  },
  {
    slug: 'karaoke',
    model: 'monthly',
    unit: 'rooms',
    plans: [
      { id: 'starter', amount: 19, upTo: 4 },
      { id: 'plus', amount: 29, upTo: 8 },
      { id: 'pro', amount: 39, upTo: 12 },
    ],
  },
  {
    slug: 'lounge',
    model: 'monthly',
    unit: 'rooms',
    plans: [
      { id: 'starter', amount: 19, upTo: 4 },
      { id: 'plus', amount: 29, upTo: 8 },
      { id: 'pro', amount: 39, upTo: 12 },
    ],
  },
  {
    slug: 'antikafe',
    model: 'monthly',
    unit: 'zones',
    plans: [
      { id: 'starter', amount: 15, upTo: 8 },
      { id: 'plus', amount: 25, upTo: 16 },
      { id: 'pro', amount: 35, upTo: 24 },
    ],
  },
] as const

export const VENUE_STORAGE_KEY = 'heselo.venueType'

export function isVenueOfferSlug(value: string): value is PrimarySolutionSlug {
  return (PRIMARY_SOLUTION_SLUGS as readonly string[]).includes(value)
}

export function getVenueOffer(slug: string): VenueOffer | undefined {
  return VENUE_OFFERS.find((offer) => offer.slug === slug)
}

export function venuePriceRange(slug: string): { low: number; high: number; model: VenueOfferModel } | undefined {
  const offer = getVenueOffer(slug)
  if (!offer) return undefined
  const amounts = offer.plans.map((plan) => plan.amount)
  return { low: Math.min(...amounts), high: Math.max(...amounts), model: offer.model }
}

export function allVenuePlans(): Array<{ offer: VenueOffer; plan: VenuePlan }> {
  return VENUE_OFFERS.flatMap((offer) => offer.plans.map((plan) => ({ offer, plan })))
}

function feeRange(model: VenueOfferModel): { low: number; high: number } {
  const fees = VENUE_OFFERS.filter((o) => o.model === model).flatMap((o) =>
    o.plans.map((plan) => plan.amount),
  )
  if (fees.length === 0) return { low: 0, high: 0 }
  return { low: Math.min(...fees), high: Math.max(...fees) }
}

export function monthlyFeeRange(): { low: number; high: number } {
  return feeRange('monthly')
}

export function oneTimeFeeRange(): { low: number; high: number } {
  return feeRange('oneTime')
}
