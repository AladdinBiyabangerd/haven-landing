import type { SolutionSlug } from '@/data/solutions/types'

export const GUIDE_SLUGS = [
  'restaurant-management-system',
  'manage-restaurant-reservations',
  'restaurant-pos-system',
  'restaurant-inventory-basics',
  'cafe-management-system',
  'antikafe-management-system',
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
}
