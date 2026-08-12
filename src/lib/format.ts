import type { Locale } from '@/i18n/config'

const intlLocale: Record<Locale, string> = {
  az: 'az-AZ',
  en: 'en-GB',
  ru: 'ru-RU',
}

export function formatMoney(amount: number, locale: Locale): string {
  return new Intl.NumberFormat(intlLocale[locale], {
    style: 'currency',
    currency: 'AZN',
  }).format(amount)
}

export function fillTemplate(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) =>
    Object.prototype.hasOwnProperty.call(vars, key) ? String(vars[key]) : `{${key}}`,
  )
}
