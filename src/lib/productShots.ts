import type { SolutionSlug } from '@/data/solutions/types'
import type { Messages } from '@/i18n/types'

export type ProductShotId =
  | 'live-floor'
  | 'sessions'
  | 'cash'
  | 'inventory'
  | 'products'
  | 'room-analytics'
  | 'audit'

/** Raster assets on disk — only live-floor remains; other ids are HTML mocks. */
export const PRODUCT_SHOT_PATHS: Partial<Record<ProductShotId, string>> = {
  'live-floor': '/images/product/live-floor',
}

/** Solution slug → primary product screenshot */
export const SOLUTION_SHOT_MAP: Partial<Record<SolutionSlug, ProductShotId>> = {
  billiards: 'live-floor',
  karaoke: 'sessions',
  gaming: 'live-floor',
  antikafe: 'live-floor',
  lounge: 'sessions',
  reservations: 'sessions',
  pos: 'cash',
  inventory: 'inventory',
}

/** Optional second screenshot on solution pages (below features). */
export const SOLUTION_EXTRA_SHOT_MAP: Partial<Record<SolutionSlug, ProductShotId>> = {
  billiards: 'room-analytics',
  karaoke: 'room-analytics',
  gaming: 'sessions',
  antikafe: 'room-analytics',
  lounge: 'room-analytics',
  reservations: 'live-floor',
  pos: 'sessions',
  inventory: 'products',
}

/** All product shots in display order (features gallery). */
export const FEATURE_GALLERY_SHOTS: ProductShotId[] = [
  'live-floor',
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
