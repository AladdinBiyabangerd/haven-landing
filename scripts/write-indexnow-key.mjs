#!/usr/bin/env node
/**
 * Writes IndexNow key verification file to public/ when INDEXNOW_KEY is set.
 * Bing/Yandex expect: https://heselo.online/{key}.txt containing the key.
 */
import { writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const key = (process.env.HESELO_INDEXNOW_KEY || process.env.INDEXNOW_KEY)?.trim()
if (!key) {
  process.exit(0)
}

if (!/^[a-f0-9-]{8,128}$/i.test(key)) {
  console.warn('[indexnow] HESELO_INDEXNOW_KEY must be 8–128 hex/hyphen characters — skipped.')
  process.exit(0)
}

const publicDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'public')
const filePath = join(publicDir, `${key}.txt`)
writeFileSync(filePath, key, 'utf8')
console.log(`[indexnow] Wrote ${filePath}`)
