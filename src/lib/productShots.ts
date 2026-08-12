import type { Locale } from '@/i18n/config'

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

export function productShotAlt(locale: Locale, id: ProductShotId): string {
  const az: Record<ProductShotId, string> = {
    'live-floor': 'Heselo canlı izləmə ekranı — aktiv otaq sessiyaları və ödəniş',
    schedule: 'Heselo cədvəl ekranı — otaq və masa rezervasiyası timeline',
    sessions: 'Heselo sessiyalar siyahısı — günün aktiv və bağlanmış sessiyaları',
    cash: 'Heselo kassa ekranı — günün əməliyyatları və balans',
    inventory: 'Heselo anbar ekranı — məhsul qalıqları və sayım',
    products: 'Heselo məhsul kataloqu — satış qiymətləri',
    'room-analytics': 'Heselo otaq analitikası — gəlir və populyar saatlar',
    audit: 'Heselo audit jurnalı — əməliyyat tarixçəsi',
  }
  const en: Record<ProductShotId, string> = {
    'live-floor': 'Heselo live floor — active room sessions and payment',
    schedule: 'Heselo schedule — room and table booking timeline',
    sessions: 'Heselo sessions list — active and closed sessions',
    cash: 'Heselo cash desk — daily transactions and balance',
    inventory: 'Heselo inventory — stock levels and counts',
    products: 'Heselo product catalog — sale prices',
    'room-analytics': 'Heselo room analytics — revenue and peak hours',
    audit: 'Heselo audit log — operation history',
  }
  const ru: Record<ProductShotId, string> = {
    'live-floor': 'Heselo живой зал — активные сессии комнат и оплата',
    schedule: 'Heselo расписание — бронь комнат и столов',
    sessions: 'Heselo список сессий — активные и закрытые',
    cash: 'Heselo касса — операции дня и баланс',
    inventory: 'Heselo склад — остатки и подсчёт',
    products: 'Heselo каталог товаров — цены продажи',
    'room-analytics': 'Heselo аналитика комнат — выручка и часы пик',
    audit: 'Heselo журнал аудита — история операций',
  }
  const map = locale === 'en' ? en : locale === 'ru' ? ru : az
  return map[id]
}
