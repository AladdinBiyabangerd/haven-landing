/**
 * First-touch UTM campaign helpers (browser).
 * Capture once per tab session; do not overwrite a non-empty first touch.
 */

export const CAMPAIGN_STORAGE_KEY = 'heselo.campaign'

export type CampaignParams = {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
}

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'] as const

/** Map inbound utm_source → contact form heardFrom value. */
const UTM_SOURCE_TO_HEARD_FROM: Record<string, string> = {
  chatgpt: 'chatgpt',
  openai: 'chatgpt',
  ai: 'chatgpt',
  copilot: 'chatgpt',
  perplexity: 'perplexity',
  gemini: 'gemini',
  bard: 'gemini',
  google: 'google',
  gsc: 'google',
  producthunt: 'producthunt',
  instagram: 'social',
  facebook: 'social',
  linkedin: 'social',
  social: 'social',
  tiktok: 'social',
  quora: 'other',
}

export function parseCampaignFromSearch(search: string): CampaignParams {
  const params = new URLSearchParams(search.startsWith('?') ? search.slice(1) : search)
  const out: CampaignParams = {}
  for (const key of UTM_KEYS) {
    const raw = (params.get(key) || '').trim()
    if (raw) out[key] = raw.toLowerCase()
  }
  return out
}

export function campaignHasUtm(campaign: CampaignParams | null | undefined): boolean {
  if (!campaign) return false
  return UTM_KEYS.some((key) => Boolean(campaign[key]))
}

export function heardFromFromUtmSource(utmSource: string | undefined): string | undefined {
  if (!utmSource) return undefined
  return UTM_SOURCE_TO_HEARD_FROM[utmSource.toLowerCase().trim()]
}

export function readStoredCampaign(): CampaignParams | null {
  if (typeof sessionStorage === 'undefined') return null
  try {
    const raw = sessionStorage.getItem(CAMPAIGN_STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as CampaignParams
    if (!parsed || typeof parsed !== 'object') return null
    return campaignHasUtm(parsed) ? parsed : null
  } catch {
    return null
  }
}

function writeStoredCampaign(campaign: CampaignParams): void {
  if (typeof sessionStorage === 'undefined') return
  if (!campaignHasUtm(campaign)) return
  try {
    sessionStorage.setItem(CAMPAIGN_STORAGE_KEY, JSON.stringify(campaign))
  } catch {
    /* private mode / quota */
  }
}

/**
 * Capture UTMs from the current URL into sessionStorage (first touch wins).
 * Returns the stored campaign after capture (existing or newly written).
 */
export function captureCampaignFromLocation(
  search: string = typeof window !== 'undefined' ? window.location.search : '',
): CampaignParams | null {
  const existing = readStoredCampaign()
  if (existing) return existing

  const fromUrl = parseCampaignFromSearch(search)
  if (!campaignHasUtm(fromUrl)) return null

  writeStoredCampaign(fromUrl)
  return fromUrl
}

/** Flat params safe to pass into gtag / heseloTrack. */
export function campaignTrackParams(campaign?: CampaignParams | null): Record<string, string> {
  const c = campaign ?? readStoredCampaign()
  if (!c) return {}
  const out: Record<string, string> = {}
  for (const key of UTM_KEYS) {
    const value = c[key]
    if (value) out[key] = value
  }
  return out
}
