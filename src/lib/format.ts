import type { Locale } from '@/i18n/config'

const intlLocale: Record<Locale, string> = {
  az: 'az-AZ',
  en: 'en-GB',
  ru: 'ru-RU',
}

export function formatMoney(amount: number, locale: Locale): string {
  // Plans are whole manats — "9 ₼" reads as a price, "9,00 ₼" reads as a receipt.
  const whole = Number.isInteger(amount)
  return new Intl.NumberFormat(intlLocale[locale], {
    style: 'currency',
    currency: 'AZN',
    minimumFractionDigits: whole ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

/** "19–39 ₼" rather than "19 ₼–39 ₼". */
export function formatMoneyRange(low: number, high: number, locale: Locale): string {
  const whole = Number.isInteger(low) && Number.isInteger(high)
  const nf = new Intl.NumberFormat(intlLocale[locale], {
    style: 'currency',
    currency: 'AZN',
    minimumFractionDigits: whole ? 0 : 2,
    maximumFractionDigits: 2,
  })
  if (typeof nf.formatRange === 'function') return nf.formatRange(low, high)
  return `${low}–${nf.format(high)}`
}

export function fillTemplate(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) =>
    Object.prototype.hasOwnProperty.call(vars, key) ? String(vars[key]) : `{${key}}`,
  )
}

export function formatDate(isoDate: string, locale: Locale): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate.trim())
  const date = match
    ? new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]))
    : new Date(isoDate)
  return new Intl.DateTimeFormat(intlLocale[locale], {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

/** Local AZ mobile display, e.g. 0777381803 → 077 738 18 03 */
export function formatPhone(local: string): string {
  const digits = local.replace(/\D/g, '')
  if (digits.length === 10 && digits.startsWith('0')) {
    return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 8)} ${digits.slice(8, 10)}`
  }
  return local
}

/** Digits only. Empty → undefined. Wrong length → 'invalid'. */
export function parseContactPhone(raw: unknown): string | undefined | 'invalid' {
  const digits = String(raw ?? '').replace(/\D/g, '')
  if (!digits) return undefined
  if (digits.length < 9 || digits.length > 15) return 'invalid'
  return digits
}

export function truncateText(text: string, maxLength: number, ellipsis: string): string {
  if (text.length <= maxLength) return text
  return `${text.slice(0, maxLength)}${ellipsis}`
}
