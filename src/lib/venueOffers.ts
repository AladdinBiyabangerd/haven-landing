/**
 * Venue-type hybrid SaaS catalog (landing).
 * Keep in sync with:
 * - Heselo/src/lib/subscriptionPlans.ts
 * - Heselo/backend/app/services/subscription.py
 */
import { PRIMARY_SOLUTION_SLUGS, type PrimarySolutionSlug } from '@/data/solutions/types'

export type VenueOfferModel = 'oneTime' | 'monthly'
export type VenuePlanId = 'starter' | 'plus' | 'pro'
export type VenueCapacityUnit = 'stations' | 'tables' | 'rooms' | 'zones'
export type BillingPeriod = 'monthly' | 'annual'

export type VenuePlan = {
  id: VenuePlanId
  monthlyFee: number
  annualFee: number
  upTo: number
  includedReservations: number
  overagePerReservation: number
  /** @deprecated use monthlyFee — kept for older call sites */
  amount: number
}

export type VenueOffer = {
  slug: PrimarySolutionSlug
  model: VenueOfferModel
  unit: VenueCapacityUnit
  plans: readonly [VenuePlan, VenuePlan, VenuePlan]
}

const PLAN_QUOTA: Record<
  VenuePlanId,
  { includedReservations: number; overagePerReservation: number }
> = {
  starter: { includedReservations: 300, overagePerReservation: 0.3 },
  plus: { includedReservations: 550, overagePerReservation: 0.25 },
  pro: { includedReservations: 750, overagePerReservation: 0.18 },
}

function plan(id: VenuePlanId, monthlyFee: number, upTo: number): VenuePlan {
  const quota = PLAN_QUOTA[id]
  return {
    id,
    monthlyFee,
    annualFee: monthlyFee * 10,
    amount: monthlyFee,
    upTo,
    includedReservations: quota.includedReservations,
    overagePerReservation: quota.overagePerReservation,
  }
}

/**
 * Hybrid: base fee + capacity by venue type; reservation quota/overage by plan tier.
 * Market-aligned hybrid fees; annual = monthly × 10 (2 months free).
 */
export const VENUE_OFFERS: readonly VenueOffer[] = [
  {
    slug: 'gaming',
    model: 'monthly',
    unit: 'stations',
    plans: [plan('starter', 25, 8), plan('plus', 39, 16), plan('pro', 55, 24)],
  },
  {
    slug: 'billiards',
    model: 'monthly',
    unit: 'tables',
    plans: [plan('starter', 29, 6), plan('plus', 45, 12), plan('pro', 59, 18)],
  },
  {
    slug: 'karaoke',
    model: 'monthly',
    unit: 'rooms',
    plans: [plan('starter', 39, 4), plan('plus', 55, 8), plan('pro', 75, 12)],
  },
  {
    slug: 'lounge',
    model: 'monthly',
    unit: 'rooms',
    plans: [plan('starter', 39, 4), plan('plus', 55, 8), plan('pro', 75, 12)],
  },
  {
    slug: 'antikafe',
    model: 'monthly',
    unit: 'zones',
    plans: [plan('starter', 32, 8), plan('plus', 49, 16), plan('pro', 65, 24)],
  },
] as const

export const VENUE_STORAGE_KEY = 'heselo.venueType'

export const VENUE_PLAN_IDS = ['starter', 'plus', 'pro'] as const

export type ContactPlanId = VenuePlanId | 'custom'

export function isVenuePlanId(value: string): value is VenuePlanId {
  return (VENUE_PLAN_IDS as readonly string[]).includes(value)
}

export function isContactPlanId(value: string): value is ContactPlanId {
  return value === 'custom' || isVenuePlanId(value)
}

export function isVenueOfferSlug(value: string): value is PrimarySolutionSlug {
  return (PRIMARY_SOLUTION_SLUGS as readonly string[]).includes(value)
}

export function getVenueOffer(slug: string): VenueOffer | undefined {
  return VENUE_OFFERS.find((offer) => offer.slug === slug)
}

export function venuePriceRange(slug: string): { low: number; high: number; model: VenueOfferModel } | undefined {
  const offer = getVenueOffer(slug)
  if (!offer) return undefined
  const amounts = offer.plans.map((p) => p.monthlyFee)
  return { low: Math.min(...amounts), high: Math.max(...amounts), model: offer.model }
}

export function allVenuePlans(): Array<{ offer: VenueOffer; plan: VenuePlan }> {
  return VENUE_OFFERS.flatMap((offer) => offer.plans.map((p) => ({ offer, plan: p })))
}

function feeRange(model: VenueOfferModel): { low: number; high: number } {
  const fees = VENUE_OFFERS.filter((o) => o.model === model).flatMap((o) =>
    o.plans.map((p) => p.monthlyFee),
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

export type CostBreakdown = {
  planId: VenuePlanId
  reservationCount: number
  billingPeriod: BillingPeriod
  baseFee: number
  monthlyFee: number
  annualFee: number
  includedReservations: number
  overageCount: number
  overagePerReservation: number
  overageCost: number
  total: number
}

function roundMoney(value: number): number {
  return Math.round(value * 100) / 100
}

export function calculateOfferCost(
  slug: string,
  planId: VenuePlanId,
  reservationCount: number,
  billingPeriod: BillingPeriod = 'monthly',
): CostBreakdown | null {
  const offer = getVenueOffer(slug)
  if (!offer) return null
  const planRow = offer.plans.find((p) => p.id === planId)
  if (!planRow) return null
  const safeCount = Number.isFinite(reservationCount) && reservationCount > 0
    ? Math.floor(reservationCount)
    : 0
  const overageCount = Math.max(0, safeCount - planRow.includedReservations)
  const overageCost = roundMoney(overageCount * planRow.overagePerReservation)
  const baseFee = billingPeriod === 'annual' ? planRow.annualFee : planRow.monthlyFee
  return {
    planId,
    reservationCount: safeCount,
    billingPeriod,
    baseFee: roundMoney(baseFee),
    monthlyFee: planRow.monthlyFee,
    annualFee: planRow.annualFee,
    includedReservations: planRow.includedReservations,
    overageCount,
    overagePerReservation: planRow.overagePerReservation,
    overageCost,
    total: roundMoney(baseFee + overageCost),
  }
}

export function compareOfferPlans(
  slug: string,
  reservationCount: number,
  billingPeriod: BillingPeriod = 'monthly',
): CostBreakdown[] {
  const offer = getVenueOffer(slug)
  if (!offer) return []
  return offer.plans
    .map((p) => calculateOfferCost(slug, p.id, reservationCount, billingPeriod))
    .filter((row): row is CostBreakdown => row != null)
}

export function cheapestPlanId(rows: CostBreakdown[]): VenuePlanId | null {
  if (rows.length === 0) return null
  let best = rows[0]!
  for (const row of rows) {
    if (row.total < best.total) best = row
  }
  return best.planId
}

export type CrossoverPoint = {
  fromPlanId: VenuePlanId
  toPlanId: VenuePlanId
  atCount: number
}

export function crossoverPoints(slug: string): CrossoverPoint[] {
  const offer = getVenueOffer(slug)
  if (!offer) return []
  const points: CrossoverPoint[] = []
  const plans = [...offer.plans]
  for (let i = 0; i < plans.length - 1; i += 1) {
    const from = plans[i]!
    const to = plans[i + 1]!
    const start = from.includedReservations + 1
    const end = Math.max(to.includedReservations * 2, start + 5000)
    for (let n = start; n <= end; n += 1) {
      const fromOverage = Math.max(0, n - from.includedReservations) * from.overagePerReservation
      const toOverage = Math.max(0, n - to.includedReservations) * to.overagePerReservation
      if (to.monthlyFee + toOverage <= from.monthlyFee + fromOverage) {
        points.push({ fromPlanId: from.id, toPlanId: to.id, atCount: n })
        break
      }
    }
  }
  return points
}
