import type { Locale } from '@/i18n/config'
import { SITE, phoneDigitsE164, phoneE164 } from '@/lib/site'

import {
  type BillingPeriod,
  type ContactPlanId,
} from '@/lib/venueOffers'

export type ContactIntent = 'demo' | 'custom'

export const CONTACT_VENUE_TYPES = [
  'gaming',
  'karaoke',
  'billiards',
  'antikafe',
  'lounge',
  'other',
] as const

export type ContactVenueType = (typeof CONTACT_VENUE_TYPES)[number]

export const CONTACT_HEARD_FROM = [
  'chatgpt',
  'perplexity',
  'gemini',
  'google',
  'social',
  'friend',
  'other',
] as const

export type ContactHeardFrom = (typeof CONTACT_HEARD_FROM)[number]

const VENUE_TYPE_LABEL_AZ: Record<ContactVenueType, string> = {
  gaming: 'Oyun klubu / PS',
  karaoke: 'Karaoke',
  billiards: 'Bilyard',
  antikafe: 'Antikafe',
  lounge: 'Otaqlı launj',
  other: 'Digər',
}

const HEARD_FROM_LABEL_AZ: Record<ContactHeardFrom, string> = {
  chatgpt: 'ChatGPT / AI',
  perplexity: 'Perplexity',
  gemini: 'Gemini / Google AI',
  google: 'Google axtarış',
  social: 'Sosial şəbəkə',
  friend: 'Dost / həmkar',
  other: 'Digər',
}

const PLAN_LABEL_AZ: Record<ContactPlanId, string> = {
  starter: 'Kiçik',
  plus: 'Orta',
  pro: 'Böyük',
  custom: 'Fərdi',
}

const PERIOD_LABEL_AZ: Record<BillingPeriod, string> = {
  monthly: 'Aylıq',
  annual: 'İllik',
}

export function isContactVenueType(value: string): value is ContactVenueType {
  return (CONTACT_VENUE_TYPES as readonly string[]).includes(value)
}

export function isContactHeardFrom(value: string): value is ContactHeardFrom {
  return (CONTACT_HEARD_FROM as readonly string[]).includes(value)
}

export type ContactPayload = {
  name: string
  email: string
  phone: string
  venue: string
  venueType?: ContactVenueType
  message: string
  locale: Locale
  intent: ContactIntent
  plan?: ContactPlanId
  period?: BillingPeriod
  venuesCount?: number
  staffCount?: number
  reservationsPerMonth?: number
  heardFrom?: ContactHeardFrom
}

export const EMAIL_LOGO_CID = 'heselo-logo'

type CustomerCopy = {
  lang: Locale
  subject: string
  title: string
  tagline: string
  greeting: (name: string) => string
  body: string
  nextTitle: string
  nextBody: string
  productTitle: string
  productBody: string
  footerNote: string
  text: (name: string) => string
}

const customerCopy: Record<Locale, CustomerCopy> = {
  az: {
    lang: 'az',
    subject: 'Heselo — müraciətiniz qəbul edildi',
    title: 'Müraciətiniz qəbul edildi',
    tagline: 'Rezervasiya və məkan idarəetmə sistemi',
    greeting: (name) => `Salam, <strong style="color:#111827;">${escapeHtml(name)}</strong>.`,
    body: 'Məlumatlarınızı uğurla qəbul etdik. Heselo komandası ən qısa zamanda sizinlə əlaqə saxlayaraq ətraflı məlumat təqdim edəcək.',
    nextTitle: 'Nə baş verəcək?',
    nextBody:
      'Heselo komandası müraciətinizi nəzərdən keçirəcək və iş saatlarında adətən 2 saat ərzində WhatsApp və ya telefonla cavab verəcək.',
    productTitle: 'Heselo ilə məkanınızı daha rahat idarə edin',
    productBody:
      'Canlı izləmə, cədvəl, rezervasiyalar, kassa, məhsullar, anbar və statistika — hamısı bir sistemdə.',
    footerNote:
      'Bu email Heselo platformasında etdiyiniz əlaqə müraciətinə cavab olaraq avtomatik göndərilib.',
    text: (name) =>
      [
        `Salam${name ? `, ${name}` : ''},`,
        '',
        'Müraciətiniz qəbul edildi.',
        'Məlumatlarınızı uğurla qəbul etdik. Heselo komandası ən qısa zamanda sizinlə əlaqə saxlayacaq.',
        '',
        '—',
        'Heselo',
        SITE.contactEmail,
      ].join('\n'),
  },
  en: {
    lang: 'en',
    subject: 'Heselo — we received your request',
    title: 'Your request has been received',
    tagline: 'Reservation and venue management system',
    greeting: (name) => `Hello, <strong style="color:#111827;">${escapeHtml(name)}</strong>.`,
    body: 'We received your details successfully. The Heselo team will contact you shortly with more information.',
    nextTitle: 'What happens next?',
    nextBody: 'Our team will review your request and usually reply within two hours during working hours — by WhatsApp or phone.',
    productTitle: 'Run your venue more easily with Heselo',
    productBody:
      'Live tracking, schedule, reservations, cash, products, inventory, and statistics — all in one system.',
    footerNote: 'This email was sent automatically in response to your contact request on Heselo.',
    text: (name) =>
      [
        `Hello${name ? `, ${name}` : ''},`,
        '',
        'Your request has been received.',
        'We received your details successfully. The Heselo team will contact you shortly.',
        '',
        '—',
        'Heselo',
        SITE.contactEmail,
      ].join('\n'),
  },
  ru: {
    lang: 'ru',
    subject: 'Heselo — заявка принята',
    title: 'Ваша заявка принята',
    tagline: 'Система бронирования и управления заведением',
    greeting: (name) => `Здравствуйте, <strong style="color:#111827;">${escapeHtml(name)}</strong>.`,
    body: 'Мы успешно получили ваши данные. Команда Heselo свяжется с вами в ближайшее время и предоставит подробную информацию.',
    nextTitle: 'Что дальше?',
    nextBody: 'Команда Heselo рассмотрит заявку и в рабочие часы обычно ответит в течение двух часов — в WhatsApp или по телефону.',
    productTitle: 'Управляйте заведением проще с Heselo',
    productBody:
      'Живое отслеживание, расписание, бронирования, касса, товары, склад и статистика — всё в одной системе.',
    footerNote: 'Это письмо отправлено автоматически в ответ на вашу заявку на сайте Heselo.',
    text: (name) =>
      [
        `Здравствуйте${name ? `, ${name}` : ''},`,
        '',
        'Ваша заявка принята.',
        'Мы успешно получили ваши данные. Команда Heselo свяжется с вами в ближайшее время.',
        '',
        '—',
        'Heselo',
        SITE.contactEmail,
      ].join('\n'),
  },
}

export function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function currentYear(): number {
  return new Date().getFullYear()
}

function brandHeaderHtml(tagline: string): string {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td valign="middle" style="padding:0 12px 0 0;">
          <img src="cid:${EMAIL_LOGO_CID}" width="44" height="44" alt="Heselo" style="display:block;border:0;outline:none;" />
        </td>
        <td valign="middle" style="padding:0;">
          <div style="font-size:25px;font-weight:700;color:#111827;line-height:1.2;">Heselo</div>
          <div style="margin-top:5px;font-size:13px;color:#6b7280;">${escapeHtml(tagline)}</div>
        </td>
      </tr>
    </table>
  `
}

function buildCustomerHtml(payload: ContactPayload, copy: CustomerCopy): string {
  const name = payload.name.trim() || '—'
  return `<!DOCTYPE html>
<html lang="${copy.lang}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(copy.title)}</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f6f8;font-family:Arial,Helvetica,sans-serif;color:#1f2937;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f6f8;padding:40px 15px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:14px;overflow:hidden;">
          <tr>
            <td style="padding:28px 32px;border-bottom:1px solid #eef0f3;">
              ${brandHeaderHtml(copy.tagline)}
            </td>
          </tr>
          <tr>
            <td style="padding:38px 32px 35px;">
              <div style="width:52px;height:52px;line-height:52px;text-align:center;background:#ecfdf3;color:#16a34a;border-radius:50%;font-size:24px;font-weight:bold;">✓</div>
              <h1 style="margin:22px 0 12px;font-size:27px;line-height:1.3;color:#111827;">${escapeHtml(copy.title)}</h1>
              <p style="margin:0;font-size:15px;line-height:1.8;color:#6b7280;">${copy.greeting(name)}</p>
              <p style="margin:12px 0 0;font-size:15px;line-height:1.8;color:#6b7280;">${escapeHtml(copy.body)}</p>
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:28px;background:#f8fafc;border-radius:10px;">
                <tr>
                  <td style="padding:20px;">
                    <div style="font-size:13px;font-weight:600;color:#374151;">${escapeHtml(copy.nextTitle)}</div>
                    <div style="margin-top:10px;font-size:14px;line-height:1.7;color:#6b7280;">${escapeHtml(copy.nextBody)}</div>
                  </td>
                </tr>
              </table>
              <div style="margin-top:30px;">
                <div style="font-size:16px;font-weight:700;color:#111827;">${escapeHtml(copy.productTitle)}</div>
                <div style="margin-top:9px;font-size:14px;line-height:1.7;color:#6b7280;">${escapeHtml(copy.productBody)}</div>
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding:22px 32px;background:#fafafa;border-top:1px solid #eef0f3;">
              <div style="font-size:12px;line-height:1.6;color:#9ca3af;">${escapeHtml(copy.footerNote)}</div>
              <div style="margin-top:10px;font-size:12px;color:#9ca3af;">© ${currentYear()} Heselo</div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

function countRow(label: string, value: number | undefined): string {
  if (value === undefined) return ''
  return `
                <tr>
                  <td style="padding:0 20px 18px;">
                    <div style="font-size:12px;color:#9ca3af;margin-bottom:5px;">${label}</div>
                    <div style="font-size:16px;font-weight:600;color:#111827;">${escapeHtml(String(value))}</div>
                  </td>
                </tr>`
}

function buildOwnerHtml(payload: ContactPayload): string {
  const name = payload.name.trim() || '—'
  const email = payload.email.trim()
  const phone = payload.phone.trim()
  const venue = payload.venue.trim() || '—'
  const venueTypeLabel = payload.venueType ? VENUE_TYPE_LABEL_AZ[payload.venueType] : '—'
  const message = payload.message.trim() || '—'
  const localeLabel = payload.locale.toUpperCase()
  const isCustom = payload.intent === 'custom'
  const badge = isCustom ? 'FƏRDİ QİYMƏT SORĞUSU' : 'YENİ MÜRACİƏT'
  const heading = isCustom
    ? 'Yeni fərdi qiymət sorğusu'
    : 'Yeni müştəri sizinlə əlaqə saxlamaq istəyir'
  const lead = isCustom
    ? 'Müştəri standart planlardan kənar qiymət istəyir. Aşağıdakı həcm rəqəmlərinə əsasən təklif hazırlayın.'
    : 'Heselo vasitəsilə yeni əlaqə müraciəti daxil olub. Müştəri ilə əlaqə saxlayaraq ehtiyaclarını öyrənə bilərsiniz.'
  const mailto = email
    ? `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(
        isCustom ? `Heselo — fərdi qiymət: ${name}` : `Heselo — ${name}`,
      )}`
    : ''
  const telHref = phone ? `tel:${phoneE164(phone)}` : ''
  const waHref = phone ? `https://wa.me/${phoneDigitsE164(phone)}` : ''
  const emailRow = email
    ? `
                <tr>
                  <td style="padding:0 20px 18px;">
                    <div style="font-size:12px;color:#9ca3af;margin-bottom:5px;">E-POÇT</div>
                    <div style="font-size:16px;font-weight:600;color:#111827;">
                      <a href="mailto:${escapeHtml(email)}" style="color:#0f766e;text-decoration:none;">${escapeHtml(email)}</a>
                    </div>
                  </td>
                </tr>`
    : ''
  const phoneRow = phone
    ? `
                <tr>
                  <td style="padding:0 20px 18px;">
                    <div style="font-size:12px;color:#9ca3af;margin-bottom:5px;">TELEFON</div>
                    <div style="font-size:16px;font-weight:600;color:#111827;">
                      <a href="${escapeHtml(telHref)}" style="color:#0f766e;text-decoration:none;">${escapeHtml(phone)}</a>
                    </div>
                  </td>
                </tr>`
    : ''
  const actionButtons = [
    mailto
      ? `<a href="${mailto}" style="display:inline-block;padding:13px 22px;background:#0f766e;color:#ffffff;text-decoration:none;border-radius:8px;font-size:14px;font-weight:600;margin:0 8px 8px 0;">Müştəriyə email yaz</a>`
      : '',
    waHref
      ? `<a href="${escapeHtml(waHref)}" style="display:inline-block;padding:13px 22px;background:#25d366;color:#ffffff;text-decoration:none;border-radius:8px;font-size:14px;font-weight:600;margin:0 8px 8px 0;">WhatsApp</a>`
      : '',
    telHref && !waHref
      ? `<a href="${escapeHtml(telHref)}" style="display:inline-block;padding:13px 22px;background:#0f766e;color:#ffffff;text-decoration:none;border-radius:8px;font-size:14px;font-weight:600;margin:0 8px 8px 0;">Zəng et</a>`
      : '',
  ].join('')

  return `<!DOCTYPE html>
<html lang="az">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Yeni əlaqə müraciəti</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f6f8;font-family:Arial,Helvetica,sans-serif;color:#1f2937;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f6f8;padding:40px 15px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:14px;overflow:hidden;">
          <tr>
            <td style="padding:28px 32px;border-bottom:1px solid #eef0f3;">
              ${brandHeaderHtml('Rezervasiya və məkan idarəetmə sistemi')}
            </td>
          </tr>
          <tr>
            <td style="padding:32px;">
              <div style="display:inline-block;padding:7px 12px;background:#ecfdf3;color:#15803d;border-radius:20px;font-size:12px;font-weight:600;">
                ${escapeHtml(badge)}
              </div>
              <h1 style="margin:20px 0 10px;font-size:25px;line-height:1.3;color:#111827;">
                ${escapeHtml(heading)}
              </h1>
              <p style="margin:0 0 25px;font-size:15px;line-height:1.7;color:#6b7280;">
                ${escapeHtml(lead)}
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f8fafc;border-radius:10px;">
                <tr>
                  <td style="padding:18px 20px;">
                    <div style="font-size:12px;color:#9ca3af;margin-bottom:5px;">AD SOYAD</div>
                    <div style="font-size:16px;font-weight:600;color:#111827;">${escapeHtml(name)}</div>
                  </td>
                </tr>
                ${phoneRow}
                ${emailRow}
                <tr>
                  <td style="padding:0 20px 18px;">
                    <div style="font-size:12px;color:#9ca3af;margin-bottom:5px;">MƏKANIN ADI</div>
                    <div style="font-size:16px;font-weight:600;color:#111827;">${escapeHtml(venue)}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 20px 18px;">
                    <div style="font-size:12px;color:#9ca3af;margin-bottom:5px;">MƏKAN TİPİ</div>
                    <div style="font-size:16px;font-weight:600;color:#111827;">${escapeHtml(venueTypeLabel)}</div>
                  </td>
                </tr>
                ${
                  payload.plan
                    ? `<tr>
                  <td style="padding:0 20px 18px;">
                    <div style="font-size:12px;color:#9ca3af;margin-bottom:5px;">TARİF</div>
                    <div style="font-size:16px;font-weight:600;color:#111827;">${escapeHtml(PLAN_LABEL_AZ[payload.plan])}</div>
                  </td>
                </tr>`
                    : ''
                }
                ${
                  payload.period
                    ? `<tr>
                  <td style="padding:0 20px 18px;">
                    <div style="font-size:12px;color:#9ca3af;margin-bottom:5px;">ÖDƏNİŞ DÖVRÜ</div>
                    <div style="font-size:16px;font-weight:600;color:#111827;">${escapeHtml(PERIOD_LABEL_AZ[payload.period])}</div>
                  </td>
                </tr>`
                    : ''
                }
                <tr>
                  <td style="padding:0 20px 18px;">
                    <div style="font-size:12px;color:#9ca3af;margin-bottom:5px;">DİL</div>
                    <div style="font-size:16px;font-weight:600;color:#111827;">${escapeHtml(localeLabel)}</div>
                  </td>
                </tr>
                ${
                  payload.heardFrom
                    ? `<tr>
                  <td style="padding:0 20px 18px;">
                    <div style="font-size:12px;color:#9ca3af;margin-bottom:5px;">HARADAN EŞİTDİ</div>
                    <div style="font-size:16px;font-weight:600;color:#111827;">${escapeHtml(HEARD_FROM_LABEL_AZ[payload.heardFrom])}</div>
                  </td>
                </tr>`
                    : ''
                }
                ${countRow('MƏKAN SAYI', payload.venuesCount)}
                ${countRow('İŞÇİ SAYI', payload.staffCount)}
                ${countRow('AYLIQ REZERVASİYA', payload.reservationsPerMonth)}
                <tr>
                  <td style="padding:0 20px 20px;">
                    <div style="font-size:12px;color:#9ca3af;margin-bottom:5px;">QEYD</div>
                    <div style="font-size:15px;line-height:1.6;color:#374151;">${escapeHtml(message).replaceAll('\n', '<br/>')}</div>
                  </td>
                </tr>
              </table>
              <div style="margin-top:28px;">
                ${actionButtons}
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding:22px 32px;background:#fafafa;border-top:1px solid #eef0f3;">
              <div style="font-size:12px;line-height:1.6;color:#9ca3af;">
                Bu email Heselo platformasında yaradılmış yeni əlaqə müraciəti barədə məlumat vermək üçün göndərilib.
              </div>
              <div style="margin-top:10px;font-size:12px;color:#9ca3af;">© ${currentYear()} Heselo</div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export function buildOwnerEmail(payload: ContactPayload) {
  const venue = payload.venue.trim() || '—'
  const isCustom = payload.intent === 'custom'
  const subject = isCustom
    ? `Heselo — fərdi qiymət: ${payload.venue.trim() || payload.name}`
    : `Heselo — yeni müraciət: ${payload.venue.trim() || payload.name}`
  const counts: string[] = []
  if (payload.venuesCount !== undefined) counts.push(`Məkan sayı: ${payload.venuesCount}`)
  if (payload.staffCount !== undefined) counts.push(`İşçi sayı: ${payload.staffCount}`)
  if (payload.reservationsPerMonth !== undefined) {
    counts.push(`Aylıq rezervasiya: ${payload.reservationsPerMonth}`)
  }

  const text = [
    isCustom ? 'Fərdi qiymət sorğusu' : 'Yeni əlaqə müraciəti',
    '',
    `Ad: ${payload.name}`,
    `Telefon: ${payload.phone || '—'}`,
    `E-poçt: ${payload.email || '—'}`,
    `Məkan: ${venue}`,
    `Tip: ${payload.venueType ? VENUE_TYPE_LABEL_AZ[payload.venueType] : '—'}`,
    ...(payload.plan ? [`Tarif: ${PLAN_LABEL_AZ[payload.plan]}`] : []),
    ...(payload.period ? [`Ödəniş dövrü: ${PERIOD_LABEL_AZ[payload.period]}`] : []),
    `Dil: ${payload.locale}`,
    ...(payload.heardFrom ? [`Haradan eşitdi: ${HEARD_FROM_LABEL_AZ[payload.heardFrom]}`] : []),
    ...counts,
    '',
    'Qeyd:',
    payload.message,
    '',
    '—',
    'Heselo',
  ].join('\n')

  return {
    subject,
    text,
    html: buildOwnerHtml(payload),
  }
}

export function buildCustomerAutoReply(payload: ContactPayload) {
  const copy = customerCopy[payload.locale] ?? customerCopy.az
  const name = payload.name.trim()
  return {
    subject: copy.subject,
    text: copy.text(name),
    html: buildCustomerHtml(payload, copy),
  }
}
