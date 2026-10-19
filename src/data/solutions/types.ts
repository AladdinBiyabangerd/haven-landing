export const SOLUTION_SLUGS = [
  'gaming',
  'karaoke',
  'billiards',
  'antikafe',
  'lounge',
  'reservations',
  'pos',
  'inventory',
] as const

export const PRIMARY_SOLUTION_SLUGS = [
  'gaming',
  'karaoke',
  'billiards',
  'antikafe',
  'lounge',
] as const

export const FEATURE_SOLUTION_SLUGS = ['reservations', 'pos', 'inventory'] as const

export const FOOTER_SOLUTION_SLUGS = [
  ...PRIMARY_SOLUTION_SLUGS,
  ...FEATURE_SOLUTION_SLUGS,
] as const

export type SolutionSlug = (typeof SOLUTION_SLUGS)[number]
export type PrimarySolutionSlug = (typeof PRIMARY_SOLUTION_SLUGS)[number]

export type SolutionCopy = {
  slug: SolutionSlug
  /** Short nav / card label */
  shortTitle: string
  /** Page H1 */
  h1: string
  seoTitle: string
  seoDescription: string
  keywords: string[]
  intro: string
  /** Optional SEO depth paragraphs after intro / how */
  body?: string[]
  /** Optional H2 sections for long-form SEO (e.g. antikafe) */
  sections?: Array<{ id?: string; title: string; paragraphs: string[] }>
  whoTitle: string
  whoBody: string
  problemsTitle: string
  problems: string[]
  howTitle: string
  howBody: string
  featuresTitle: string
  features: Array<{ title: string; desc: string }>
  differTitle: string
  differBody: string
  /** Optional feature comparison (e.g. billiards vs market claims) */
  compare?: {
    title: string
    intro: string
    headers: string[]
    rows: string[][]
  }
  faq: Array<{ q: string; a: string }>
  related: SolutionSlug[]
  ctaTitle: string
  ctaBody: string
}

export type SolutionsHubCopy = {
  eyebrow: string
  h1: string
  intro: string
  /** Optional prose blocks for SEO depth (e.g. /ru/solutions/) */
  body?: string[]
  howTitle?: string
  howBody?: string
  seoTitle: string
  seoDescription: string
  keywords: string[]
  cardCta: string
  primaryTitle: string
  featuresTitle: string
}
