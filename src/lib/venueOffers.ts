/**
 * Venue-type hybrid SaaS catalog (landing).
 *
 * Live source (default): GET {PUBLIC_HESELO_API_BASE_URL}/v1/public/subscription-catalog
 * on app.heselo.online — platform plans only (not venue-custom plans).
 * Falls back to FALLBACK_VENUE_OFFERS if the request fails.
 * Set PUBLIC_HESELO_API_BASE_URL= (empty) to force offline fallback.
 */
import { PRIMARY_SOLUTION_SLUGS, type PrimarySolutionSlug } from '@/data/solutions/types'

export type VenueOfferModel = 'oneTime' | 'monthly'
export type VenuePlanId = 'starter' | 'plus' | 'pro'
export type VenueCapacityUnit = 'stations' | 'tables' | 'rooms' | 'zones'
export type BillingPeriod = 'monthly' | 'annual'
export type MarketingLocale = 'az' | 'en' | 'ru'

export type PlanMarketingLocaleCopy = {
  forWhom: string
  desc: string
  features: string[]
}

export type PlanMarketingCopy = Partial<Record<MarketingLocale, PlanMarketingLocaleCopy>>

export type VenuePlan = {
  id: VenuePlanId
  monthlyFee: number
  annualFee: number
  upTo: number
  includedReservations: number
  overagePerReservation: number
  /** Landing CMS copy from public catalog (az/en/ru). */
  marketingCopy?: PlanMarketingCopy
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

const DEFAULT_API_BASE = 'https://app.heselo.online'

/** Offline catalog — used when API is disabled or unreachable. */
export const FALLBACK_VENUE_OFFERS: readonly VenueOffer[] = [
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

/** @deprecated Prefer `getActiveOffers()` after `loadVenueOffers()`. */
export const VENUE_OFFERS: readonly VenueOffer[] = FALLBACK_VENUE_OFFERS

export const VENUE_STORAGE_KEY = 'heselo.venueType'

export const VENUE_PLAN_IDS = ['starter', 'plus', 'pro'] as const

export type ContactPlanId = VenuePlanId | 'custom'

let cachedOffers: readonly VenueOffer[] | null = null

function apiBase(): string | null {
  const configured = (import.meta.env as Record<string, string | undefined>).PUBLIC_HESELO_API_BASE_URL
  // unset → production API; empty / false → offline fallback only
  const raw = String(configured ?? DEFAULT_API_BASE).trim()
  if (!raw || raw === '0' || raw === 'false') return null
  return raw.replace(/\/$/, '')
}

function normalizePlanId(id: string): VenuePlanId {
  const raw = id.trim().toLowerCase()
  if (raw === 'business' || raw === 'pro') return 'pro'
  if (raw === 'plus') return 'plus'
  return 'starter'
}

function parseMarketingLocaleCopy(raw: unknown): PlanMarketingLocaleCopy | null {
  if (!raw || typeof raw !== 'object') return null
  const block = raw as Record<string, unknown>
  const forWhom = String(block.forWhom ?? '').trim()
  const desc = String(block.desc ?? '').trim()
  const featuresRaw = block.features
  const features = Array.isArray(featuresRaw)
    ? featuresRaw.map((item) => String(item).trim()).filter(Boolean)
    : []
  if (!forWhom && !desc && features.length === 0) return null
  return { forWhom, desc, features }
}

export function parseMarketingCopy(raw: unknown): PlanMarketingCopy | undefined {
  if (!raw || typeof raw !== 'object') return undefined
  const source = raw as Record<string, unknown>
  const out: PlanMarketingCopy = {}
  for (const loc of ['az', 'en', 'ru'] as const) {
    const parsed = parseMarketingLocaleCopy(source[loc])
    if (parsed) out[loc] = parsed
  }
  return Object.keys(out).length > 0 ? out : undefined
}

/** Prefer API marketing copy for the active locale; fall back to static i18n. */
export function resolvePlanMarketing(
  plan: VenuePlan,
  locale: MarketingLocale,
  fallback: PlanMarketingLocaleCopy,
): PlanMarketingLocaleCopy {
  const fromApi = plan.marketingCopy?.[locale]
  if (!fromApi) return fallback
  return {
    forWhom: fromApi.forWhom || fallback.forWhom,
    desc: fromApi.desc || fallback.desc,
    features: fromApi.features.length > 0 ? fromApi.features : fallback.features,
  }
}

function mapApiOffers(payload: unknown): VenueOffer[] | null {
  if (!payload || typeof payload !== 'object') return null
  const offersRaw = (payload as { offers?: unknown }).offers
  if (!Array.isArray(offersRaw) || offersRaw.length === 0) return null

  const out: VenueOffer[] = []
  for (const item of offersRaw) {
    if (!item || typeof item !== 'object') continue
    const raw = item as Record<string, unknown>
    const slug = String(raw.slug || '')
    if (!isVenueOfferSlug(slug)) continue
    const plansRaw = Array.isArray(raw.plans) ? raw.plans : []
    const mappedPlans = plansRaw.map((p) => {
      const planRow = (p ?? {}) as Record<string, unknown>
      const id = normalizePlanId(String(planRow.id || 'starter'))
      const monthlyFee = Number(planRow.monthlyFee) || 0
      const annualFee = Number(planRow.annualFee) || monthlyFee * 10
      return {
        id,
        monthlyFee,
        annualFee,
        amount: monthlyFee,
        upTo: Math.floor(Number(planRow.upTo) || 0),
        includedReservations: Math.floor(Number(planRow.includedReservations) || 0),
        overagePerReservation: Number(planRow.overagePerReservation) || 0,
        marketingCopy: parseMarketingCopy(planRow.marketingCopy),
      } satisfies VenuePlan
    })
    if (mappedPlans.length === 0) continue
    const fallback = mappedPlans[0]!
    const plans: readonly [VenuePlan, VenuePlan, VenuePlan] = [
      mappedPlans[0] ?? fallback,
      mappedPlans[1] ?? fallback,
      mappedPlans[2] ?? mappedPlans[1] ?? fallback,
    ]
    out.push({
      slug,
      model: String(raw.model || 'monthly') === 'oneTime' ? 'oneTime' : 'monthly',
      unit: (String(raw.unit || 'rooms') as VenueCapacityUnit),
      plans,
    })
  }
  return out.length > 0 ? out : null
}

/** Fetch live catalog once per process; warm this in page/layout frontmatter. */
export async function loadVenueOffers(): Promise<readonly VenueOffer[]> {
  if (cachedOffers) return cachedOffers
  const base = apiBase()
  if (!base) {
    cachedOffers = FALLBACK_VENUE_OFFERS
    return cachedOffers
  }
  try {
    const res = await fetch(`${base}/v1/public/subscription-catalog`, {
      headers: { Accept: 'application/json' },
    })
    if (!res.ok) throw new Error(`catalog ${res.status}`)
    const mapped = mapApiOffers(await res.json())
    if (!mapped) throw new Error('catalog empty or invalid')
    cachedOffers = mapped
  } catch (error) {
    console.error('[venueOffers] catalog fetch failed, using fallback', base, error)
    cachedOffers = FALLBACK_VENUE_OFFERS
  }
  return cachedOffers
}

export function getActiveOffers(): readonly VenueOffer[] {
  return cachedOffers ?? FALLBACK_VENUE_OFFERS
}

export function isVenuePlanId(value: string): value is VenuePlanId {
  return (VENUE_PLAN_IDS as readonly string[]).includes(value)
}

export function isContactPlanId(value: string): value is ContactPlanId {
  return value === 'custom' || isVenuePlanId(value)
}

export function isVenueOfferSlug(value: string): value is PrimarySolutionSlug {
  return (PRIMARY_SOLUTION_SLUGS as readonly string[]).includes(value)
}

export function getVenueOffer(
  slug: string,
  catalog: readonly VenueOffer[] = getActiveOffers(),
): VenueOffer | undefined {
  return catalog.find((offer) => offer.slug === slug)
}

export function venuePriceRange(
  slug: string,
  catalog: readonly VenueOffer[] = getActiveOffers(),
): { low: number; high: number; model: VenueOfferModel } | undefined {
  const offer = getVenueOffer(slug, catalog)
  if (!offer) return undefined
  const amounts = offer.plans.map((p) => p.monthlyFee)
  return { low: Math.min(...amounts), high: Math.max(...amounts), model: offer.model }
}

export function allVenuePlans(
  catalog: readonly VenueOffer[] = getActiveOffers(),
): Array<{ offer: VenueOffer; plan: VenuePlan }> {
  return catalog.flatMap((offer) => offer.plans.map((p) => ({ offer, plan: p })))
}

function feeRange(
  model: VenueOfferModel,
  catalog: readonly VenueOffer[] = getActiveOffers(),
): { low: number; high: number } {
  const fees = catalog.filter((o) => o.model === model).flatMap((o) => o.plans.map((p) => p.monthlyFee))
  if (fees.length === 0) return { low: 0, high: 0 }
  return { low: Math.min(...fees), high: Math.max(...fees) }
}

export function monthlyFeeRange(catalog: readonly VenueOffer[] = getActiveOffers()): {
  low: number
  high: number
} {
  return feeRange('monthly', catalog)
}

export function oneTimeFeeRange(catalog: readonly VenueOffer[] = getActiveOffers()): {
  low: number
  high: number
} {
  return feeRange('oneTime', catalog)
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
  catalog: readonly VenueOffer[] = getActiveOffers(),
): CostBreakdown | null {
  const offer = getVenueOffer(slug, catalog)
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
  catalog: readonly VenueOffer[] = getActiveOffers(),
): CostBreakdown[] {
  const offer = getVenueOffer(slug, catalog)
  if (!offer) return []
  return offer.plans
    .map((p) => calculateOfferCost(slug, p.id, reservationCount, billingPeriod, catalog))
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

export function crossoverPoints(
  slug: string,
  catalog: readonly VenueOffer[] = getActiveOffers(),
): CrossoverPoint[] {
  const offer = getVenueOffer(slug, catalog)
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
