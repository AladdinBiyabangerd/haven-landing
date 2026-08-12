/**
 * SaaS plan catalog — keep in sync with Heselo:
 * - Heselo/src/lib/subscriptionPlans.ts
 * - Heselo/backend/app/services/subscription.py
 */
export type SubscriptionPlanId = 'starter' | 'pro' | 'business'

export type SubscriptionPlan = {
  id: SubscriptionPlanId
  monthlyFee: number
  includedVenues: number
  includedReservations: number
  overagePerReservation: number
}

export const SUBSCRIPTION_PLANS: readonly SubscriptionPlan[] = [
  {
    id: 'starter',
    monthlyFee: 29.99,
    includedVenues: 2,
    includedReservations: 300,
    overagePerReservation: 0.23,
  },
  {
    id: 'pro',
    monthlyFee: 49.99,
    includedVenues: 2,
    includedReservations: 550,
    overagePerReservation: 0.19,
  },
  {
    id: 'business',
    monthlyFee: 69.99,
    includedVenues: 3,
    includedReservations: 750,
    overagePerReservation: 0.13,
  },
] as const

/** Same hardcoded value as Heselo SubscriptionPage feature-request line. */
export const FEATURE_REQUESTS_PER_MONTH = 2
