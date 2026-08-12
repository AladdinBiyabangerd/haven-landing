import type { Messages } from '@/i18n/types'

export type ProductShotId =
  | 'live-floor'
  | 'schedule'
  | 'sessions'
  | 'cash'
  | 'inventory'
  | 'products'
  | 'room-analytics'
  | 'audit'

export const PRODUCT_SHOT_PATHS: Record<ProductShotId, string> = {
  'live-floor': '/images/product/live-floor',
  'schedule': '/images/product/schedule',
  sessions: '/images/product/sessions',
  cash: '/images/product/cash',
  inventory: '/images/product/inventory',
  products: '/images/product/products',
  'room-analytics': '/images/product/room-analytics',
  audit: '/images/product/audit',
}

/** Solution slug → primary product screenshot */
export const SOLUTION_SHOT_MAP: Partial<
  Record<
    | 'restaurant'
    | 'cafe'
    | 'billiards'
    | 'karaoke'
    | 'gaming'
    | 'antikafe'
    | 'reservations'
    | 'pos'
    | 'inventory',
    ProductShotId
  >
> = {
  restaurant: 'schedule',
  cafe: 'live-floor',
  billiards: 'live-floor',
  karaoke: 'schedule',
  gaming: 'live-floor',
  antikafe: 'live-floor',
  reservations: 'schedule',
  pos: 'cash',
  inventory: 'inventory',
}

/** Optional second screenshot on solution pages (below features). */
export const SOLUTION_EXTRA_SHOT_MAP: Partial<
  Record<
    | 'restaurant'
    | 'cafe'
    | 'billiards'
    | 'karaoke'
    | 'gaming'
    | 'antikafe'
    | 'reservations'
    | 'pos'
    | 'inventory',
    ProductShotId
  >
> = {
  restaurant: 'products',
  cafe: 'products',
  billiards: 'room-analytics',
  karaoke: 'room-analytics',
  gaming: 'sessions',
  antikafe: 'room-analytics',
  reservations: 'sessions',
  pos: 'sessions',
  inventory: 'products',
}

/** All product shots in display order (features gallery). */
export const FEATURE_GALLERY_SHOTS: ProductShotId[] = [
  'live-floor',
  'schedule',
  'sessions',
  'cash',
  'inventory',
  'products',
  'room-analytics',
  'audit',
]

export function productShotAlt(messages: Messages, id: ProductShotId): string {
  return messages.productShot.alts[id]
}
