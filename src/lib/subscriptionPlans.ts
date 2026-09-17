/**
 * Re-exports hybrid catalog helpers — keep numbers in venueOffers.ts only.
 * Formerly a flat starter/pro/business list; that model is retired.
 */
export {
  VENUE_OFFERS,
  calculateOfferCost,
  compareOfferPlans,
  cheapestPlanId,
  crossoverPoints,
  monthlyFeeRange,
  type VenuePlanId,
  type BillingPeriod,
  type CostBreakdown,
} from '@/lib/venueOffers'

export const FEATURE_REQUESTS_PER_MONTH = 2
