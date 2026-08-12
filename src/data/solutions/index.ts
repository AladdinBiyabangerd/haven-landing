import type { Locale } from '@/i18n/config'
import { solutionsAz, solutionsHubAz } from './az'
import { solutionsEn, solutionsHubEn } from './en'
import { solutionsRu, solutionsHubRu } from './ru'
import {
  SOLUTION_SLUGS,
  type SolutionCopy,
  type SolutionSlug,
  type SolutionsHubCopy,
} from './types'

const byLocale: Record<
  Locale,
  { hub: SolutionsHubCopy; items: SolutionCopy[] }
> = {
  az: { hub: solutionsHubAz, items: solutionsAz },
  en: { hub: solutionsHubEn, items: solutionsEn },
  ru: { hub: solutionsHubRu, items: solutionsRu },
}

export { SOLUTION_SLUGS, type SolutionSlug, type SolutionCopy, type SolutionsHubCopy }

export function getSolutionsHub(locale: Locale): SolutionsHubCopy {
  return byLocale[locale].hub
}

export function getSolutions(locale: Locale): SolutionCopy[] {
  return byLocale[locale].items
}

export function getSolution(locale: Locale, slug: string): SolutionCopy | undefined {
  return byLocale[locale].items.find((item) => item.slug === slug)
}

export function isSolutionSlug(value: string): value is SolutionSlug {
  return (SOLUTION_SLUGS as readonly string[]).includes(value)
}

/** Keyword → page mapping for SEO planning (AZ primary market). */
export const KEYWORD_MAP_AZ = {
  home: ['məkan idarəetmə sistemi', 'biznes idarəetmə proqramı'],
  features: ['kassa proqramı', 'anbar idarəetmə sistemi', 'rezervasiya sistemi'],
  solutions: {
    restaurant: ['restoran idarəetmə sistemi', 'restoran proqramı', 'restoran üçün proqram'],
    cafe: ['kafe idarəetmə sistemi', 'kafe proqramı'],
    billiards: ['bilyard klubu proqramı', 'bilyard idarəetmə sistemi'],
    karaoke: ['karaoke idarəetmə sistemi'],
    gaming: ['gaming club idarəetmə sistemi'],
    antikafe: ['antikafe idarəetmə sistemi', 'antikafe proqramı'],
    reservations: ['rezervasiya sistemi', 'masa rezervasiya sistemi', 'otaq rezervasiya sistemi'],
    pos: ['kassa proqramı', 'restoran kassa proqramı'],
    inventory: ['anbar idarəetmə sistemi', 'restoran anbar proqramı'],
  },
} as const
