import type { Locale } from '@/i18n/config'
import { SITE } from '@/lib/site'

export type ContactPayload = {
  name: string
  email: string
  venue: string
  message: string
  locale: Locale
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
      'Heselo komandası müraciətinizi nəzərdən keçirəcək və sizinlə email vasitəsilə əlaqə saxlayacaq.',
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
    nextBody: 'Our team will review your request and get in touch by email.',
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
    tagline: 'Система бронирования и управления площадкой',
    greeting: (name) => `Здравствуйте, <strong style="color:#111827;">${escapeHtml(name)}</strong>.`,
    body: 'Мы успешно получили ваши данные. Команда Heselo свяжется с вами в ближайшее время и предоставит подробную информацию.',
    nextTitle: 'Что дальше?',
    nextBody: 'Команда Heselo рассмотрит заявку и свяжется с вами по email.',
    productTitle: 'Управляйте площадкой проще с Heselo',
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

function buildOwnerHtml(payload: ContactPayload): string {
  const name = payload.name.trim() || '—'
  const email = payload.email.trim()
  const venue = payload.venue.trim() || '—'
  const message = payload.message.trim() || '—'
  const localeLabel = payload.locale.toUpperCase()
  const mailto = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(`Heselo — ${name}`)}`

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
                YENİ MÜRACİƏT
              </div>
              <h1 style="margin:20px 0 10px;font-size:25px;line-height:1.3;color:#111827;">
                Yeni müştəri sizinlə əlaqə saxlamaq istəyir
              </h1>
              <p style="margin:0 0 25px;font-size:15px;line-height:1.7;color:#6b7280;">
                Heselo vasitəsilə yeni əlaqə müraciəti daxil olub. Müştəri ilə əlaqə saxlayaraq ehtiyaclarını öyrənə bilərsiniz.
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f8fafc;border-radius:10px;">
                <tr>
                  <td style="padding:18px 20px;">
                    <div style="font-size:12px;color:#9ca3af;margin-bottom:5px;">AD SOYAD</div>
                    <div style="font-size:16px;font-weight:600;color:#111827;">${escapeHtml(name)}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 20px 18px;">
                    <div style="font-size:12px;color:#9ca3af;margin-bottom:5px;">E-POÇT</div>
                    <div style="font-size:16px;font-weight:600;color:#111827;">
                      <a href="mailto:${escapeHtml(email)}" style="color:#0f766e;text-decoration:none;">${escapeHtml(email)}</a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 20px 18px;">
                    <div style="font-size:12px;color:#9ca3af;margin-bottom:5px;">MƏKAN / BİZNES</div>
                    <div style="font-size:16px;font-weight:600;color:#111827;">${escapeHtml(venue)}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 20px 18px;">
                    <div style="font-size:12px;color:#9ca3af;margin-bottom:5px;">DİL</div>
                    <div style="font-size:16px;font-weight:600;color:#111827;">${escapeHtml(localeLabel)}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 20px 20px;">
                    <div style="font-size:12px;color:#9ca3af;margin-bottom:5px;">QEYD</div>
                    <div style="font-size:15px;line-height:1.6;color:#374151;">${escapeHtml(message).replaceAll('\n', '<br/>')}</div>
                  </td>
                </tr>
              </table>
              <div style="margin-top:28px;">
                <a href="${mailto}" style="display:inline-block;padding:13px 22px;background:#0f766e;color:#ffffff;text-decoration:none;border-radius:8px;font-size:14px;font-weight:600;">
                  Müştəriyə email yaz
                </a>
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
  const subject = `Heselo — yeni müraciət: ${payload.venue.trim() || payload.name}`
  const text = [
    'Yeni əlaqə müraciəti',
    '',
    `Ad: ${payload.name}`,
    `E-poçt: ${payload.email}`,
    `Məkan: ${venue}`,
    `Dil: ${payload.locale}`,
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
