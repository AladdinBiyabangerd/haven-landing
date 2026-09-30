#!/usr/bin/env node
/**
 * Submit URLs to IndexNow (Bing, Yandex, Seznam, Naver, …).
 *
 * Usage:
 *   HESELO_INDEXNOW_KEY=… npm run indexnow
 *   HESELO_INDEXNOW_KEY=… npm run indexnow -- https://heselo.online/az/pricing/
 *   npm run indexnow -- --sitemap   # parse live sitemap.xml (default if no URLs)
 *
 * Key file must be live at: https://heselo.online/{key}.txt
 */
import { readFileSync, readdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const HOST = 'heselo.online'
const ORIGIN = `https://${HOST}`
const ENDPOINT = 'https://api.indexnow.org/indexnow'
const BATCH = 10000

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const publicDir = join(root, 'public')

function resolveKey() {
  const fromEnv = (process.env.HESELO_INDEXNOW_KEY || process.env.INDEXNOW_KEY)?.trim()
  if (fromEnv) return fromEnv

  const files = readdirSync(publicDir).filter((f) => /^[a-f0-9-]{8,128}\.txt$/i.test(f))
  for (const file of files) {
    const candidate = file.replace(/\.txt$/i, '')
    const body = readFileSync(join(publicDir, file), 'utf8').trim()
    if (body === candidate) return candidate
  }
  return null
}

function parseArgs(argv) {
  const urls = []
  let useSitemap = false
  for (const arg of argv) {
    if (arg === '--sitemap') useSitemap = true
    else if (arg.startsWith('http://') || arg.startsWith('https://')) urls.push(arg)
  }
  if (urls.length === 0) useSitemap = true
  return { urls, useSitemap }
}

async function urlsFromSitemap() {
  const res = await fetch(`${ORIGIN}/sitemap.xml`)
  if (!res.ok) throw new Error(`sitemap.xml HTTP ${res.status}`)
  const xml = await res.text()
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim())
  return [...new Set(locs)].filter((u) => u.startsWith(ORIGIN))
}

async function submitBatch(key, urlList) {
  const body = {
    host: HOST,
    key,
    keyLocation: `${ORIGIN}/${key}.txt`,
    urlList,
  }
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  })
  const text = await res.text().catch(() => '')
  return { status: res.status, text }
}

const key = resolveKey()
if (!key) {
  console.error('[indexnow] Set HESELO_INDEXNOW_KEY or place {key}.txt in public/')
  process.exit(1)
}
if (!/^[a-f0-9-]{8,128}$/i.test(key)) {
  console.error('[indexnow] Invalid key format')
  process.exit(1)
}

const { urls: cliUrls, useSitemap } = parseArgs(process.argv.slice(2))
let urlList = cliUrls
if (useSitemap && cliUrls.length === 0) {
  console.log(`[indexnow] Fetching ${ORIGIN}/sitemap.xml …`)
  urlList = await urlsFromSitemap()
}

urlList = [...new Set(urlList)].filter((u) => {
  try {
    const parsed = new URL(u)
    return parsed.hostname === HOST || parsed.hostname === `www.${HOST}`
  } catch {
    return false
  }
})

if (urlList.length === 0) {
  console.error('[indexnow] No URLs to submit')
  process.exit(1)
}

console.log(`[indexnow] Key ${key}`)
console.log(`[indexnow] keyLocation ${ORIGIN}/${key}.txt`)
console.log(`[indexnow] Submitting ${urlList.length} URL(s)…`)

let ok = 0
for (let i = 0; i < urlList.length; i += BATCH) {
  const chunk = urlList.slice(i, i + BATCH)
  const { status, text } = await submitBatch(key, chunk)
  if (status === 200 || status === 202) {
    ok += chunk.length
    console.log(`[indexnow] OK ${status} — batch ${chunk.length}`)
  } else {
    console.error(`[indexnow] FAIL ${status} ${text}`)
    process.exit(1)
  }
}

console.log(`[indexnow] Done — ${ok} URL(s). Verify in Bing Webmaster Tools.`)
