import type { Locale } from '@/i18n/config'

/** Marketing display currency for the public site — not venue POS currency. */
export type PlatformCurrency = 'AZN' | 'RUB' | 'USD'

export const PLATFORM_CURRENCIES: readonly PlatformCurrency[] = ['AZN', 'RUB', 'USD'] as const

/** az → AZN, ru → RUB, en → USD */
export function currencyForLocale(locale: Locale): PlatformCurrency {
  if (locale === 'ru') return 'RUB'
  if (locale === 'en') return 'USD'
  return 'AZN'
}

export type CurrencyFeePair = {
  monthly: number
  annual: number
}

export type FeesByCurrency = Partial<Record<PlatformCurrency, CurrencyFeePair>>

export function parseFeesByCurrency(raw: unknown): FeesByCurrency {
  if (!raw || typeof raw !== 'object') return {}
  const out: FeesByCurrency = {}
  for (const code of PLATFORM_CURRENCIES) {
    const block = (raw as Record<string, unknown>)[code]
    if (!block || typeof block !== 'object') continue
    const row = block as Record<string, unknown>
    const monthly = Number(row.monthly)
    const annual = Number(row.annual)
    out[code] = {
      monthly: Number.isFinite(monthly) ? monthly : 0,
      annual: Number.isFinite(annual) ? annual : 0,
    }
  }
  return out
}

/**
 * Pick display currency + fees. If preferred currency monthly is 0 / missing → AZN.
 */
export function resolvePlanFees(
  feesByCurrency: FeesByCurrency | undefined,
  fallbackMonthly: number,
  fallbackAnnual: number,
  preferred: PlatformCurrency,
): { currency: PlatformCurrency; monthly: number; annual: number } {
  const aznMonthly = feesByCurrency?.AZN?.monthly ?? fallbackMonthly
  const aznAnnual = feesByCurrency?.AZN?.annual ?? fallbackAnnual
  const preferredBlock = feesByCurrency?.[preferred]
  if (preferred !== 'AZN' && preferredBlock && preferredBlock.monthly > 0) {
    return {
      currency: preferred,
      monthly: preferredBlock.monthly,
      annual: preferredBlock.annual > 0 ? preferredBlock.annual : preferredBlock.monthly * 10,
    }
  }
  return {
    currency: 'AZN',
    monthly: aznMonthly,
    annual: aznAnnual > 0 ? aznAnnual : aznMonthly * 10,
  }
}
