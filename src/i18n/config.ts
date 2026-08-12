export const LOCALES = ['az', 'en', 'ru'] as const
export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'az'

export const LOCALE_LABELS: Record<Locale, string> = {
  az: 'Azərbaycan',
  en: 'English',
  ru: 'Русский',
}

export const HTML_LANG: Record<Locale, string> = {
  az: 'az',
  en: 'en',
  ru: 'ru',
}

export const OG_LOCALES: Record<Locale, string> = {
  az: 'az_AZ',
  en: 'en_US',
  ru: 'ru_RU',
}

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value)
}

export function resolveLocale(value: string | undefined): Locale {
  if (value && isLocale(value)) return value
  return DEFAULT_LOCALE
}
