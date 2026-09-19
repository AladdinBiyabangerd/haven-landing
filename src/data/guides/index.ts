import type { SolutionSlug } from '@/data/solutions/types'
import type { Locale } from '@/i18n/config'
import { guidesAz, guidesHubAz } from './az'
import { guidesEn, guidesHubEn } from './en'
import { guidesRu, guidesHubRu } from './ru'
import {
  GUIDE_SLUGS,
  TEASER_GUIDE_SLUGS,
  type GuideCopy,
  type GuideSlug,
  type GuidesHubCopy,
} from './types'

/** Commercial solution page → informational guide (avoids cannibalization). */
export const SOLUTION_GUIDE_MAP: Partial<Record<SolutionSlug, GuideSlug>> = {
  gaming: 'gaming-club-management',
  karaoke: 'karaoke-room-booking',
  billiards: 'billiards-club-management',
  lounge: 'room-lounge-management',
  antikafe: 'antikafe-management-system',
  pos: 'club-pos-vs-excel',
  reservations: 'club-pos-vs-excel',
}

/**
 * Soft “looking for an alternative?” links on solution pages.
 * Keep 1–3 comparison guides per solution; educational guide stays in SOLUTION_GUIDE_MAP.
 */
export const SOLUTION_ALT_GUIDES: Partial<Record<SolutionSlug, GuideSlug[]>> = {
  gaming: [
    'iiko-alternative-clubs',
    'playstation-cafe-software-alternative',
    'club-pos-vs-excel',
  ],
  karaoke: ['restaurant-pos-vs-karaoke-system', 'dine-alternative', 'clopos-alternative'],
  billiards: ['affordable-club-pos', 'club-pos-vs-excel', 'dine-alternative'],
  lounge: ['kaktus-alternative', 'affordable-club-pos', 'iiko-alternative-clubs'],
  antikafe: ['affordable-club-pos', 'dine-alternative', 'club-pos-vs-excel'],
  pos: ['club-pos-vs-excel', 'affordable-club-pos', 'dine-alternative', 'minupos-alternative'],
  reservations: ['club-pos-vs-excel', 'kaktus-alternative', 'dine-alternative'],
  inventory: ['club-pos-vs-excel', 'affordable-club-pos'],
}

/** Named / category comparison guides (Phase C competitor track). */
export const COMPARISON_GUIDE_SLUGS = [
  'club-pos-vs-excel',
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
] as const satisfies readonly GuideSlug[]

const RELATED_COMPARISON: Partial<Record<GuideSlug, GuideSlug[]>> = {
  'club-pos-vs-excel': ['affordable-club-pos', 'iiko-alternative-clubs'],
  'iiko-alternative-clubs': ['clopos-alternative', 'dine-alternative'],
  'clopos-alternative': ['dine-alternative', 'restomas-alternative'],
  'dine-alternative': ['minupos-alternative', 'clopos-alternative'],
  'restomas-alternative': ['dine-alternative', 'clopos-alternative'],
  'minupos-alternative': ['affordable-club-pos', 'dine-alternative'],
  'robotpos-alternative': ['affordable-club-pos', 'iiko-alternative-clubs'],
  'affordable-club-pos': ['minupos-alternative', 'club-pos-vs-excel'],
  'restaurant-pos-vs-karaoke-system': ['dine-alternative', 'iiko-alternative-clubs'],
  'playstation-cafe-software-alternative': ['izi-alternative', 'iiko-alternative-clubs'],
  'izi-alternative': ['playstation-cafe-software-alternative', 'affordable-club-pos'],
  'kaktus-alternative': ['club-pos-vs-excel', 'affordable-club-pos'],
  'resto-az-alternative': ['clopos-alternative', 'affordable-club-pos'],
  'heselo-pricing': ['affordable-club-pos', 'club-pos-vs-excel'],
}

const byLocale: Record<Locale, { hub: GuidesHubCopy; items: GuideCopy[] }> = {
  az: { hub: guidesHubAz, items: guidesAz },
  en: { hub: guidesHubEn, items: guidesEn },
  ru: { hub: guidesHubRu, items: guidesRu },
}

export { GUIDE_SLUGS, TEASER_GUIDE_SLUGS, type GuideSlug, type GuideCopy, type GuidesHubCopy }

export function getGuides(locale: Locale): GuideCopy[] {
  const items = byLocale[locale].items
  return GUIDE_SLUGS.map((slug) => items.find((item) => item.slug === slug)).filter(
    (item): item is GuideCopy => Boolean(item),
  )
}

export function getComparisonGuides(locale: Locale): GuideCopy[] {
  return COMPARISON_GUIDE_SLUGS.map((slug) => getGuide(locale, slug)).filter(
    (item): item is GuideCopy => Boolean(item),
  )
}

export function getEducationalGuides(locale: Locale): GuideCopy[] {
  const comparison = new Set<string>(COMPARISON_GUIDE_SLUGS)
  return getGuides(locale).filter((item) => !comparison.has(item.slug))
}

export function getGuidesHub(locale: Locale): GuidesHubCopy {
  return byLocale[locale].hub
}

export function getGuide(locale: Locale, slug: string): GuideCopy | undefined {
  return byLocale[locale].items.find((item) => item.slug === slug)
}

export function getGuideForSolution(locale: Locale, solutionSlug: string): GuideCopy | undefined {
  const guideSlug = SOLUTION_GUIDE_MAP[solutionSlug as SolutionSlug]
  return guideSlug ? getGuide(locale, guideSlug) : undefined
}

export function getAltGuidesForSolution(locale: Locale, solutionSlug: string): GuideCopy[] {
  const slugs = SOLUTION_ALT_GUIDES[solutionSlug as SolutionSlug] ?? []
  return slugs.map((slug) => getGuide(locale, slug)).filter((item): item is GuideCopy => Boolean(item))
}

export function getRelatedComparisonGuides(locale: Locale, slug: GuideSlug): GuideCopy[] {
  const related = RELATED_COMPARISON[slug] ?? []
  return related.map((s) => getGuide(locale, s)).filter((item): item is GuideCopy => Boolean(item))
}

export function isGuideSlug(value: string): value is GuideSlug {
  return (GUIDE_SLUGS as readonly string[]).includes(value)
}

export function isComparisonGuideSlug(value: string): boolean {
  return (COMPARISON_GUIDE_SLUGS as readonly string[]).includes(value)
}
