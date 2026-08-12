import type { SolutionSlug } from '@/data/solutions/types'
import type { Locale } from '@/i18n/config'
import { guidesAz, guidesHubAz } from './az'
import { guidesEn, guidesHubEn } from './en'
import { guidesRu, guidesHubRu } from './ru'
import { GUIDE_SLUGS, type GuideCopy, type GuideSlug, type GuidesHubCopy } from './types'

/** Commercial solution page → informational guide (avoids cannibalization). */
export const SOLUTION_GUIDE_MAP: Partial<Record<SolutionSlug, GuideSlug>> = {
  restaurant: 'restaurant-management-system',
  cafe: 'cafe-management-system',
  reservations: 'manage-restaurant-reservations',
  pos: 'restaurant-pos-system',
  inventory: 'restaurant-inventory-basics',
  antikafe: 'antikafe-management-system',
}

const byLocale: Record<Locale, { hub: GuidesHubCopy; items: GuideCopy[] }> = {
  az: { hub: guidesHubAz, items: guidesAz },
  en: { hub: guidesHubEn, items: guidesEn },
  ru: { hub: guidesHubRu, items: guidesRu },
}

export { GUIDE_SLUGS, type GuideSlug, type GuideCopy, type GuidesHubCopy }

export function getGuidesHub(locale: Locale): GuidesHubCopy {
  return byLocale[locale].hub
}

export function getGuides(locale: Locale): GuideCopy[] {
  return byLocale[locale].items
}

export function getGuide(locale: Locale, slug: string): GuideCopy | undefined {
  return byLocale[locale].items.find((item) => item.slug === slug)
}

export function getGuideForSolution(locale: Locale, solutionSlug: string): GuideCopy | undefined {
  const guideSlug = SOLUTION_GUIDE_MAP[solutionSlug as SolutionSlug]
  return guideSlug ? getGuide(locale, guideSlug) : undefined
}

export function isGuideSlug(value: string): value is GuideSlug {
  return (GUIDE_SLUGS as readonly string[]).includes(value)
}
