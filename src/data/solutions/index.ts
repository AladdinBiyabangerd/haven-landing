import type { Locale } from '@/i18n/config'
import { solutionsAz, solutionsHubAz } from './az'
import { solutionsEn, solutionsHubEn } from './en'
import { solutionsRu, solutionsHubRu } from './ru'
import {
  FEATURE_SOLUTION_SLUGS,
  FOOTER_SOLUTION_SLUGS,
  PRIMARY_SOLUTION_SLUGS,
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

export {
  FEATURE_SOLUTION_SLUGS,
  FOOTER_SOLUTION_SLUGS,
  PRIMARY_SOLUTION_SLUGS,
  SOLUTION_SLUGS,
  type SolutionSlug,
  type SolutionCopy,
  type SolutionsHubCopy,
}

export function getSolutionsHub(locale: Locale): SolutionsHubCopy {
  return byLocale[locale].hub
}

export function getSolutions(locale: Locale): SolutionCopy[] {
  const items = byLocale[locale].items
  return SOLUTION_SLUGS.map((slug) => items.find((item) => item.slug === slug)).filter(
    (item): item is SolutionCopy => Boolean(item),
  )
}

export function getSolutionsBySlugs(locale: Locale, slugs: readonly SolutionSlug[]): SolutionCopy[] {
  const items = byLocale[locale].items
  return slugs.map((slug) => items.find((item) => item.slug === slug)).filter(
    (item): item is SolutionCopy => Boolean(item),
  )
}

export function getSolution(locale: Locale, slug: string): SolutionCopy | undefined {
  return byLocale[locale].items.find((item) => item.slug === slug)
}

export function isSolutionSlug(value: string): value is SolutionSlug {
  return (SOLUTION_SLUGS as readonly string[]).includes(value)
}

/** Keyword → page mapping for SEO planning (AZ primary market). */
export const KEYWORD_MAP_AZ = {
  home: ['məkan idarəetmə sistemi', 'oyun klubu proqramı', 'karaoke otaq rezervasiya'],
  features: ['kassa proqramı', 'anbar idarəetmə sistemi', 'otaq rezervasiya sistemi'],
  solutions: {
    gaming: ['oyun klubu idarəetmə sistemi', 'ps klub proqramı', 'playstation klub idarəetmə'],
    karaoke: ['karaoke idarəetmə sistemi', 'karaoke otaq rezervasiya'],
    billiards: ['bilyard klubu proqramı', 'bilyard idarəetmə sistemi'],
    antikafe: ['antikafe idarəetmə sistemi', 'antikafe proqramı'],
    lounge: ['otaqlı launj proqramı', 'launj otaq rezervasiya'],
    reservations: ['rezervasiya sistemi', 'masa rezervasiya sistemi', 'otaq rezervasiya sistemi'],
    pos: ['kassa proqramı', 'klub kassa proqramı'],
    inventory: ['anbar idarəetmə sistemi', 'klub anbar proqramı'],
  },
} as const

/** Keyword → page mapping for /ru (CIS + AZ russian-speakers). See docs/seo-ru-keyword-map.md. */
export const KEYWORD_MAP_RU = {
  home: ['программа для игрового клуба', 'программа для антикафе', 'учёт сеансов'],
  features: ['тарификация', 'карта залов', 'онлайн-бронирование'],
  solutions: {
    gaming: [
      'программа для игрового клуба',
      'программа для PlayStation-клуба',
      'программа учёта игровых приставок',
    ],
    karaoke: ['программа для караоке', 'программа управления караоке-залами'],
    billiards: ['программа для бильярдного клуба', 'бронирование бильярдных столов'],
    antikafe: ['программа для антикафе', 'учёт времени в антикафе', 'программа для тайм-кафе'],
    lounge: ['программа для кальянной', 'бронирование VIP-комнат'],
    reservations: ['онлайн-бронирование столов и комнат', 'предварительное бронирование'],
    pos: ['касса для клуба', 'программа вместо Excel для клуба'],
    inventory: ['склад клуба', 'бар в счёт сеанса'],
  },
  guides: {
    langame: ['аналоги LANGAME', 'альтернатива LANGAME'],
    iiko: ['альтернатива iiko для клуба'],
    openPs: ['как открыть PS клуб', 'сколько стоит открыть PS клуб'],
  },
} as const
