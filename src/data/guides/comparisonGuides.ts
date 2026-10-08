import type { Locale } from '@/i18n/config'
import type { GuideCopy } from './types'
import { affordableClubPosGuide } from './affordableClubPosGuide'
import { azerbaijanPosSystemsGuide } from './azerbaijanPosSystemsGuide'
import { bazaMarketAlternativeGuide } from './bazaMarketAlternativeGuide'
import { cloposAlternativeGuide } from './cloposAlternativeGuide'
import { dineAlternativeGuide } from './dineAlternativeGuide'
import { fazilatPosAlternativeGuide } from './fazilatPosAlternativeGuide'
import { iikoAlternativeGuide } from './iikoAlternativeGuide'
import { iziAlternativeGuide } from './iziAlternativeGuide'
import { kaktusAlternativeGuide } from './kaktusAlternativeGuide'
import { kassaAzAlternativeGuide } from './kassaAzAlternativeGuide'
import { minuposAlternativeGuide } from './minuposAlternativeGuide'
import { playstationCafeSoftwareGuide } from './playstationCafeSoftwareGuide'
import { restoAzAlternativeGuide } from './restoAzAlternativeGuide'
import { restaurantPosVsKaraokeGuide } from './restaurantPosVsKaraokeGuide'
import { restomasAlternativeGuide } from './restomasAlternativeGuide'
import { robotposAlternativeGuide } from './robotposAlternativeGuide'
import { smartposAlternativeGuide } from './smartposAlternativeGuide'

/** Rich comparison / alternative guides (one dedicated file each). */
export function comparisonGuides(locale: Locale): GuideCopy[] {
  return [
    iikoAlternativeGuide(locale),
    cloposAlternativeGuide(locale),
    dineAlternativeGuide(locale),
    restomasAlternativeGuide(locale),
    minuposAlternativeGuide(locale),
    robotposAlternativeGuide(locale),
    affordableClubPosGuide(locale),
    restaurantPosVsKaraokeGuide(locale),
    playstationCafeSoftwareGuide(locale),
    iziAlternativeGuide(locale),
    kaktusAlternativeGuide(locale),
    restoAzAlternativeGuide(locale),
    fazilatPosAlternativeGuide(locale),
    smartposAlternativeGuide(locale),
    kassaAzAlternativeGuide(locale),
    bazaMarketAlternativeGuide(locale),
    azerbaijanPosSystemsGuide(locale),
  ]
}
