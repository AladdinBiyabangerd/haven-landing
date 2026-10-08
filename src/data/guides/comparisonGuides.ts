import type { Locale } from '@/i18n/config'
import type { GuideCopy } from './types'
import { affordableClubPosGuide } from './affordableClubPosGuide'
import { azerbaijanPosSystemsGuide } from './azerbaijanPosSystemsGuide'
import { bazaMarketAlternativeGuide } from './bazaMarketAlternativeGuide'
import { cloposAlternativeGuide } from './cloposAlternativeGuide'
import { dineAlternativeGuide } from './dineAlternativeGuide'
import { fazilatPosAlternativeGuide } from './fazilatPosAlternativeGuide'
import { iikoAlternativeGuide } from './iikoAlternativeGuide'
import { akinsoftAlternativeGuide } from './akinsoftAlternativeGuide'
import { cafesynkAlternativeGuide } from './cafesynkAlternativeGuide'
import { clubTimerAlternativeGuide } from './clubTimerAlternativeGuide'
import { gameclubAlternativeGuide } from './gameclubAlternativeGuide'
import { hasansoftAlternativeGuide } from './hasansoftAlternativeGuide'
import { iziAlternativeGuide } from './iziAlternativeGuide'
import { kaktusAlternativeGuide } from './kaktusAlternativeGuide'
import { kassaAzAlternativeGuide } from './kassaAzAlternativeGuide'
import { langameAlternativeGuide } from './langameAlternativeGuide'
import { minuposAlternativeGuide } from './minuposAlternativeGuide'
import { playstationCafeSoftwareGuide } from './playstationCafeSoftwareGuide'
import { restoAzAlternativeGuide } from './restoAzAlternativeGuide'
import { restaurantPosVsKaraokeGuide } from './restaurantPosVsKaraokeGuide'
import { restomasAlternativeGuide } from './restomasAlternativeGuide'
import { robotposAlternativeGuide } from './robotposAlternativeGuide'
import { smartappAlternativeGuide } from './smartappAlternativeGuide'
import { smartposAlternativeGuide } from './smartposAlternativeGuide'
import { tendirAlternativeGuide } from './tendirAlternativeGuide'

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
    langameAlternativeGuide(locale),
    clubTimerAlternativeGuide(locale),
    akinsoftAlternativeGuide(locale),
    hasansoftAlternativeGuide(locale),
    tendirAlternativeGuide(locale),
    smartappAlternativeGuide(locale),
    gameclubAlternativeGuide(locale),
    cafesynkAlternativeGuide(locale),
    kaktusAlternativeGuide(locale),
    restoAzAlternativeGuide(locale),
    fazilatPosAlternativeGuide(locale),
    smartposAlternativeGuide(locale),
    kassaAzAlternativeGuide(locale),
    bazaMarketAlternativeGuide(locale),
    azerbaijanPosSystemsGuide(locale),
  ]
}
