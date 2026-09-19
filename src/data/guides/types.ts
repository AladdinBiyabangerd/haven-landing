import type { SolutionSlug } from '@/data/solutions/types'

export const GUIDE_SLUGS = [
  'gaming-club-management',
  'karaoke-room-booking',
  'billiards-club-management',
  'antikafe-management-system',
  'room-lounge-management',
  'playstation-club-software',
  'billiards-table-booking',
  'karaoke-booking-system',
  'club-pos-vs-excel',
  // Phase C comparison / alternative intent
  'iiko-alternative-clubs',
  'clopos-alternative',
  'dine-alternative',
  'restomas-alternative',
  'minupos-alternative',
  'robotpos-alternative',
  'affordable-club-pos',
  'restaurant-pos-vs-karaoke-system',
  'playstation-cafe-software-alternative',
  'izi-alternative',
  'kaktus-alternative',
  'resto-az-alternative',
  'heselo-pricing',
] as const

export const TEASER_GUIDE_SLUGS = [
  'gaming-club-management',
  'karaoke-room-booking',
  'billiards-club-management',
  'playstation-club-software',
  'club-pos-vs-excel',
  'iiko-alternative-clubs',
  'dine-alternative',
  'affordable-club-pos',
] as const

export type GuideSlug = (typeof GUIDE_SLUGS)[number]

export type GuideCopy = {
  slug: GuideSlug
  shortTitle: string
  h1: string
  seoTitle: string
  seoDescription: string
  keywords: string[]
  datePublished: string
  dateModified: string
  intro: string
  sections: Array<{
    id: string
    title: string
    paragraphs: string[]
    bullets?: string[]
  }>
  faq: Array<{ q: string; a: string }>
  relatedSolutions: SolutionSlug[]
  ctaTitle: string
  ctaBody: string
}

export type GuidesHubCopy = {
  eyebrow: string
  h1: string
  intro: string
  seoTitle: string
  seoDescription: string
  keywords: string[]
  cardCta: string
  /** Optional heading for comparison / alternative guides on the hub */
  comparisonTitle?: string
  comparisonIntro?: string
}
