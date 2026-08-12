import type { Messages } from './types'
import { az } from './messages/az'
import { en } from './messages/en'
import { ru } from './messages/ru'
import type { Locale } from './config'

const catalogs: Record<Locale, Messages> = { az, en, ru }

export function getMessages(locale: Locale): Messages {
  return catalogs[locale]
}
