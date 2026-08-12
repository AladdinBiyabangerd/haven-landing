export const prerender = false

import type { APIRoute } from 'astro'
import nodemailer from 'nodemailer'
import { isLocale, type Locale } from '@/i18n/config'
import { SITE } from '@/lib/site'
import path from 'node:path'
import { buildCustomerAutoReply, buildOwnerEmail, EMAIL_LOGO_CID, type ContactPayload } from '@/lib/contactMail'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function json(status: number, body: Record<string, unknown>) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
      Allow: 'POST, OPTIONS',
    },
  })
}

function readEnv(name: string): string {
  const meta = import.meta.env as Record<string, string | undefined>
  const fromMeta = meta[name]
  const fromProcess = typeof process !== 'undefined' ? process.env[name] : undefined
  return String(fromMeta ?? fromProcess ?? '').trim()
}

function parseBody(raw: unknown): ContactPayload | null {
  if (!raw || typeof raw !== 'object') return null
  const data = raw as Record<string, unknown>
  const name = String(data.name ?? '').trim()
  const email = String(data.email ?? '').trim().toLowerCase()
  const venue = String(data.venue ?? '').trim()
  const message = String(data.message ?? '').trim()
  const localeRaw = String(data.locale ?? 'az').trim()
  const locale: Locale = isLocale(localeRaw) ? localeRaw : 'az'

  if (!name || name.length > 120) return null
  if (!email || email.length > 200 || !EMAIL_RE.test(email)) return null
  if (venue.length > 200) return null
  if (!message || message.length > 5000) return null
  if (String(data.company ?? '').trim()) return null

  return { name, email, venue, message, locale }
}


function logoAttachment() {
  const logoPath = path.join(process.cwd(), 'public', 'email-logo.png')
  return {
    filename: 'heselo-logo.png',
    path: logoPath,
    cid: EMAIL_LOGO_CID,
    contentDisposition: 'inline' as const,
  }
}

async function handlePost(request: Request): Promise<Response> {
  const contentType = request.headers.get('content-type') || ''
  if (!contentType.includes('application/json')) {
    return json(415, { ok: false, error: 'unsupported_media' })
  }

  let raw: unknown
  try {
    raw = await request.json()
  } catch {
    return json(400, { ok: false, error: 'invalid_json' })
  }

  const payload = parseBody(raw)
  if (!payload) {
    return json(400, { ok: false, error: 'invalid_payload' })
  }

  const smtpUser = readEnv('SMTP_USER') || SITE.contactEmail
  const smtpPass = readEnv('SMTP_PASS').replaceAll(' ', '')
  const notifyTo = readEnv('CONTACT_NOTIFY_EMAIL') || SITE.notifyEmail
  const fromAddress = readEnv('CONTACT_FROM_EMAIL') || SITE.contactEmail

  if (!smtpPass) {
    console.error('[contact] SMTP_PASS is missing')
    return json(500, { ok: false, error: 'mail_not_configured' })
  }

  const transporter = nodemailer.createTransport({
    host: readEnv('SMTP_HOST') || 'smtp.gmail.com',
    port: Number(readEnv('SMTP_PORT') || 465),
    secure: (readEnv('SMTP_SECURE') || 'true') === 'true',
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  })

  const owner = buildOwnerEmail(payload)
  const autoReply = buildCustomerAutoReply(payload)
  const from = `"Heselo" <${fromAddress}>`

  try {
    const attachments = [logoAttachment()]

    const replyTo = fromAddress || SITE.contactEmail

    await transporter.sendMail({
      from,
      to: notifyTo,
      replyTo,
      subject: owner.subject,
      text: owner.text,
      html: owner.html,
      attachments,
    })

    await transporter.sendMail({
      from,
      to: payload.email,
      replyTo,
      subject: autoReply.subject,
      text: autoReply.text,
      html: autoReply.html,
      attachments,
    })
  } catch (error) {
    console.error('[contact] send failed', error)
    return json(502, { ok: false, error: 'send_failed' })
  }

  return json(200, { ok: true })
}

export const ALL: APIRoute = async ({ request }) => {
  const method = request.method.toUpperCase()

  if (method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        Allow: 'POST, OPTIONS',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Accept',
      },
    })
  }

  if (method === 'POST') {
    return handlePost(request)
  }

  // Browser address-bar hits are GET — explain instead of a bare 405.
  if (method === 'GET') {
    return json(200, {
      ok: true,
      endpoint: '/api/contact/',
      usage: 'Send POST with JSON: { name, email, venue, message, locale }',
    })
  }

  return json(405, { ok: false, error: 'method_not_allowed', method })
}
