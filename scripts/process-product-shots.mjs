#!/usr/bin/env node
/**
 * Process raw Heselo panel screenshots for the marketing site.
 */
import sharp from 'sharp'
import { mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const docs = join(root, 'docs')
const outDir = join(root, 'public', 'images', 'product')

/** @type {Array<{ id: string; source: string; cropBottom?: number; blurs?: Array<{ left: number; top: number; width: number; height: number }> }>} */
const SHOTS = [
  {
    id: 'live-floor',
    source: 'Screenshot 2026-08-12 at 13.21.35.png',
    cropBottom: 72,
    blurs: [{ left: 120, top: 200, width: 260, height: 1180 }],
  },
  {
    id: 'schedule',
    source: 'Screenshot 2026-08-12 at 13.20.55.png',
    cropBottom: 105,
    blurs: [{ left: 520, top: 250, width: 220, height: 900 }],
  },
  {
    id: 'sessions',
    source: 'Screenshot 2026-08-12 at 13.21.02.png',
    cropBottom: 105,
    blurs: [{ left: 300, top: 320, width: 340, height: 520 }],
  },
  {
    id: 'cash',
    source: 'Screenshot 2026-08-12 at 13.21.18.png',
    cropBottom: 105,
    blurs: [{ left: 1180, top: 520, width: 420, height: 700 }],
  },
  {
    id: 'inventory',
    source: 'Screenshot 2026-08-12 at 13.25.06.png',
    cropBottom: 105,
  },
  {
    id: 'products',
    source: 'Screenshot 2026-08-12 at 13.24.42.png',
    cropBottom: 105,
  },
  {
    id: 'room-analytics',
    source: 'Screenshot 2026-08-12 at 13.26.55.png',
    cropBottom: 105,
  },
  {
    id: 'audit',
    source: 'Screenshot 2026-08-12 at 13.25.53.png',
    cropBottom: 105,
    blurs: [{ left: 2280, top: 320, width: 280, height: 1100 }],
  },
]

const TARGET_WIDTH = 1200
const TARGET_WIDTH_2X = 2400
const RADIUS = 22
const PAD = 28
const BG = { r: 238, g: 243, b: 246, alpha: 1 }

function roundedMask(w, h, r) {
  return Buffer.from(
    `<svg width="${w}" height="${h}"><rect x="0" y="0" width="${w}" height="${h}" rx="${r}" ry="${r}" fill="white"/></svg>`,
  )
}

async function applyBlurs(buffer, width, height, blurs = []) {
  if (!blurs.length) return buffer
  let img = buffer
  const composites = []
  for (const region of blurs) {
    const left = Math.max(0, region.left)
    const top = Math.max(0, region.top)
    const w = Math.min(region.width, width - left)
    const h = Math.min(region.height, height - top)
    if (w <= 0 || h <= 0) continue
    const blurred = await sharp(img).extract({ left, top, width: w, height: h }).blur(14).toBuffer()
    composites.push({ input: blurred, left, top })
  }
  return sharp(img).composite(composites).png().toBuffer()
}

async function frameImage(buffer, tw) {
  const meta = await sharp(buffer).metadata()
  const cw = meta.width ?? tw
  const ch = meta.height ?? 800
  const rw = tw
  const rh = Math.round(ch * (tw / cw))
  const radius = Math.round(RADIUS * (tw / TARGET_WIDTH))

  const resized = await sharp(buffer).resize(rw, rh, { fit: 'fill' }).png().toBuffer()
  const rounded = await sharp(resized)
    .composite([{ input: roundedMask(rw, rh, radius), blend: 'dest-in' }])
    .png()
    .toBuffer()

  return sharp(rounded)
    .extend({
      top: PAD,
      bottom: PAD,
      left: PAD,
      right: PAD,
      background: BG,
    })
    .png()
    .toBuffer()
}

async function processShot(shot) {
  const inputPath = join(docs, shot.source)
  const meta = await sharp(inputPath).metadata()
  const width = meta.width ?? 3024
  const height = meta.height ?? 1596
  const cropHeight = height - (shot.cropBottom ?? 0)

  let base = await sharp(inputPath)
    .extract({ left: 0, top: 0, width, height: cropHeight })
    .png()
    .toBuffer()

  base = await applyBlurs(base, width, cropHeight, shot.blurs)

  for (const [suffix, tw] of [
    ['', TARGET_WIDTH],
    ['@2x', TARGET_WIDTH_2X],
  ]) {
    const framed = await frameImage(base, tw)
    const webpPath = join(outDir, `${shot.id}${suffix}.webp`)
    const pngPath = join(outDir, `${shot.id}${suffix}.png`)
    await sharp(framed).webp({ quality: 84 }).toFile(webpPath)
    await sharp(framed).png({ compressionLevel: 9 }).toFile(pngPath)
    const outMeta = await sharp(framed).metadata()
    console.log(`✓ ${shot.id}${suffix} → ${outMeta.width}x${outMeta.height}`)
  }
}

mkdirSync(outDir, { recursive: true })
for (const shot of SHOTS) {
  await processShot(shot)
}
console.log(`\nDone. Output: public/images/product/`)
