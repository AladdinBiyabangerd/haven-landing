import type { Locale } from '@/i18n/config'
import type { GuideCopy } from './types'

const PUBLISHED = '2026-10-17'
const MODIFIED = '2026-10-19'
const relatedSolutions: GuideCopy['relatedSolutions'] = ['billiards', 'pos', 'inventory']

const guides: Record<
  Locale,
  Omit<GuideCopy, 'slug' | 'datePublished' | 'dateModified' | 'relatedSolutions'>
> = {
  az: {
    shortTitle: 'BilliardPOS alternativi',
    h1: 'BilliardPOS alternativi — bilyard və bar paneli',
    seoTitle: 'BilliardPOS alternativi — bilyard klubu proqramı | Heselo',
    seoDescription:
      'BilliardPOS masa vaxtı, ESP32 işıq relyesi və TV taymer ilə tanınır. Heselo AZ/EN/RU bulud paneldır: bron, sessiya, kassa.',
    keywords: [
      'BilliardPOS alternativ',
      'BilliardPOS alternativi',
      'bilyard pos',
      'bilyard klubu proqramı',
      'bilyard anbar',
    ],
    intro:
      'BilliardPOS bilyard salonları üçün bulud sistemidir: masa taymeri, ESP32 IP işıq relyesi, TV taymer ekranları, REST API və webhook açıq materiallarda göstərilir (billiardpos.net, yoxlama 18.10.2026). Qiymət masa qrupuna görə açıqdır: $39 (≤8 masa), $69 (≤16), $99 (≤24)/ay; illik ödənişdə −17%. Heselo isə AZ/EN/RU interfeys və otaq+masa+bar+kassa bir paneldə — relye yoxdur. Bu yazı dürüst müqayisədir.',
    sections: [
      {
        id: 'when-heselo',
        title: 'Heselo nə vaxt kifayət edir?',
        paragraphs: [
          'Masa bronu, canlı sessiya, bar satışı və növbə kassası əsas ehtiyacdırsa və işıq relye mütləq deyilsə, Heselo kifayət edə bilər. Anbar katalogu paneldə var; ağır mətbəx KDS üçün restoran POS paralel qala bilər.',
        ],
        bullets: [
          'Masa taymeri, pauza, uzatma',
          'Rezervasiya cədvəli',
          'Bar satış sessiya hesabına',
          'Qiymət: {billiards} {currency}/aydan (katalog)',
        ],
      },
      {
        id: 'when-billiardpos',
        title: 'BilliardPOS nə vaxt qala bilər?',
        paragraphs: [
          'ESP32 işıq relyesi, TV taymer və ya API/webhook sizin üçün mərkəzdirsə, BilliardPOS-u onların saytında qiymətləndirin. Heselo klub otaq-vaxt paneli kimi qurulub — relye inteqrasiyası yoxdur, tam restoran mətbəxi deyil.',
        ],
      },
      {
        id: 'comparison',
        title: 'BilliardPOS və Heselo',
        paragraphs: ['Qiymət və funksiya: billiardpos.net (18.10.2026). Heselo qiyməti bu saytın katalog API-sindən gəlir.'],
        table: {
          headers: ['Aspekt', 'BilliardPOS', 'Heselo'],
          rows: [
            ['Fokus', 'Masa vaxtı + ESP32 işıq + TV', 'Bron + sessiya + klub kassası'],
            ['Platforma', 'Web / bulud', 'Web / bulud'],
            ['İşıq relye', 'Bəli (ESP32 IP)', 'Xeyr'],
            ['TV / API', 'TV taymer, REST + webhook', 'Demo ilə yoxlayın'],
            ['Qiymət', '$39 / $69 / $99 (masa qrupu)', '{billiards} {currency}/aydan'],
            ['Dillər', 'Vendor-dan asılı', 'AZ, EN, RU'],
          ],
        },
      },
      {
        id: 'decision',
        title: 'Qərar sualları',
        paragraphs: ['Eyni masa sayı fərqli proqram tələb edə bilər.'],
        bullets: [
          'İşıq relye və TV taymer mütləqdirmi?',
          'Bron və canlı zal eyni dərəcədə vacibdirmi?',
          'Qiymət masa qrupuna görə, yoxsa məkan tipi üzrədir?',
        ],
      },
    ],
    faq: [
      {
        q: 'Heselo BilliardPOS-u əvəz edir?',
        a: 'Bron, sessiya və kassa üçün çox vaxt bəli. ESP32 işıq relyesi mütləqdirsə, BilliardPOS-u saxlayın — Heselo relye təklif etmir.',
      },
      {
        q: 'Heselo qiyməti masa sayına görədir?',
        a: 'Planlar məkan tipi və həcmə görədir; bilyard {billiards} {currency}/aydan başlayır. Limitlər qiymətlər səhifəsindədir.',
      },
      {
        q: 'Demo?',
        a: 'Əlaqə formasında bilyard və masa sayını yazın — kart lazım deyil.',
      },
    ],
    ctaTitle: 'Bilyard + bar axınını yoxlayın',
    ctaBody: 'Masa və bar menyu həcminizi yazın — sessiya hesabını birlikdə keçək.',
  },
  en: {
    shortTitle: 'BilliardPOS alternative',
    h1: 'BilliardPOS alternative — billiards and bar panel',
    seoTitle: 'BilliardPOS Alternative — Billiards Club Software | Heselo',
    seoDescription:
      'BilliardPOS tracks table time with ESP32 light relays and TV timers. Heselo is an AZ/EN/RU cloud panel: booking, sessions, cash.',
    keywords: [
      'BilliardPOS alternative',
      'billiards POS',
      'billiards club software',
      'billiards inventory',
    ],
    intro:
      'BilliardPOS is a cloud system for billiards halls: table timers, ESP32 IP light relays, TV timer screens, REST API and webhooks appear on billiardpos.net (checked 18 Oct 2026). Published tiers: $39 (≤8 tables), $69 (≤16), $99 (≤24) per month, −17% annual. Heselo offers AZ/EN/RU UI and room+table+bar+cash in one panel — no light relay. This guide is an honest comparison.',
    sections: [
      {
        id: 'when-heselo',
        title: 'When is Heselo enough?',
        paragraphs: [
          'If table booking, a live session, bar sales, and a shift cash drawer are the core need — and a light relay is not mandatory — Heselo can be enough. The panel has a stock catalog; keep a restaurant POS for a heavy kitchen KDS.',
        ],
        bullets: [
          'Table timer, pause, extend',
          'Booking schedule',
          'Bar sales on the session bill',
          'Price from {billiards} {currency}/month (catalog)',
        ],
      },
      {
        id: 'when-billiardpos',
        title: 'When should BilliardPOS stay?',
        paragraphs: [
          'If an ESP32 light relay, TV timers, or API/webhooks are central, evaluate BilliardPOS on their site. Heselo is a club room-time panel — no relay integration, not a full kitchen stack.',
        ],
      },
      {
        id: 'comparison',
        title: 'BilliardPOS vs Heselo',
        paragraphs: ['Pricing and features: billiardpos.net (18 Oct 2026). Heselo prices come from this site’s catalog API.'],
        table: {
          headers: ['Aspect', 'BilliardPOS', 'Heselo'],
          rows: [
            ['Focus', 'Table time + ESP32 lights + TV', 'Booking + session + club cash'],
            ['Platform', 'Web / cloud', 'Web / cloud'],
            ['Light relay', 'Yes (ESP32 IP)', 'No'],
            ['TV / API', 'TV timers, REST + webhooks', 'Validate on demo'],
            ['Price', '$39 / $69 / $99 (table bands)', 'From {billiards} {currency}/month'],
            ['Languages', 'Vendor-dependent', 'AZ, EN, RU'],
          ],
        },
      },
      {
        id: 'decision',
        title: 'Decision questions',
        paragraphs: ['The same table count can need different software.'],
        bullets: [
          'Are a light relay and TV timers mandatory?',
          'Are booking and live floor equally important?',
          'Is price by table band or by venue type?',
        ],
      },
    ],
    faq: [
      {
        q: 'Does Heselo replace BilliardPOS?',
        a: 'For booking, sessions, and cash — often yes. If an ESP32 light relay is mandatory, keep BilliardPOS — Heselo does not offer relays.',
      },
      {
        q: 'Is Heselo priced per table?',
        a: 'Plans follow venue type and volume; billiards starts at {billiards} {currency}/month. Limits are on the pricing page.',
      },
      {
        q: 'Demo?',
        a: 'Choose billiards on the contact form and write your table count — no card needed.',
      },
    ],
    ctaTitle: 'Check billiards + bar on Heselo',
    ctaBody: 'Share table count and bar menu size — we will walk the session bill together.',
  },
  ru: {
    shortTitle: 'Альтернатива BilliardPOS',
    h1: 'Альтернатива BilliardPOS — панель бильярда и бара',
    seoTitle: 'Альтернатива BilliardPOS — программа для бильярда | Heselo',
    seoDescription:
      'BilliardPOS следит за временем стола, ESP32-реле света и TV-таймерами. Heselo — облачная панель AZ/EN/RU: бронь, сеансы, касса.',
    keywords: [
      'альтернатива BilliardPOS',
      'бильярд POS',
      'программа для бильярдного клуба',
      'склад бильярд',
    ],
    intro:
      'BilliardPOS — облачная система для бильярдных залов: таймер стола, ESP32 IP-реле света, TV-таймеры, REST API и webhooks указаны на billiardpos.net (проверка 18.10.2026). Тарифы открыты: $39 (≤8 столов), $69 (≤16), $99 (≤24)/мес, −17% за год. Heselo даёт AZ/EN/RU и комнату+стол+бар+кассу в одной панели — без реле. Ниже честное сравнение.',
    sections: [
      {
        id: 'when-heselo',
        title: 'Когда хватает Heselo?',
        paragraphs: [
          'Если ядро — бронь, живой сеанс, бар в счёт и кассовая смена, а реле света не обязательно — Heselo может хватить. Для тяжёлого кухонного KDS ресторанную POS можно оставить рядом.',
        ],
        bullets: [
          'Таймер стола, пауза, продление',
          'Расписание брони',
          'Бар в счёт сеанса',
          'Цена от {billiards} {currency}/мес (каталог)',
        ],
      },
      {
        id: 'when-billiardpos',
        title: 'Когда BilliardPOS может остаться?',
        paragraphs: [
          'Если ESP32-реле света, TV-таймеры или API/webhooks — центр работы, смотрите BilliardPOS на их сайте. Heselo — клубная панель времени без интеграции реле, не полный кухонный стек.',
        ],
      },
      {
        id: 'comparison',
        title: 'BilliardPOS и Heselo',
        paragraphs: ['Цены и функции: billiardpos.net (18.10.2026). Цены Heselo — из каталожного API этого сайта.'],
        table: {
          headers: ['Аспект', 'BilliardPOS', 'Heselo'],
          rows: [
            ['Фокус', 'Время стола + ESP32-свет + TV', 'Бронь + сеанс + клубная касса'],
            ['Платформа', 'Web / облако', 'Web / облако'],
            ['Реле света', 'Да (ESP32 IP)', 'Нет'],
            ['TV / API', 'TV-таймеры, REST + webhooks', 'Проверьте на демо'],
            ['Цена', '$39 / $69 / $99 (по числу столов)', 'от {billiards} {currency}/мес'],
            ['Языки', 'Зависит от вендора', 'AZ, EN, RU'],
          ],
        },
      },
      {
        id: 'decision',
        title: 'Вопросы для решения',
        paragraphs: ['Одинаковое число столов может требовать разного ПО.'],
        bullets: [
          'Обязательны ли реле света и TV-таймеры?',
          'Бронь и живой зал одинаково важны?',
          'Цена по числу столов или по типу заведения?',
        ],
      },
    ],
    faq: [
      {
        q: 'Heselo заменяет BilliardPOS?',
        a: 'Для брони, сеанса и кассы — часто да. Если обязательно ESP32-реле света, оставьте BilliardPOS — у Heselo реле нет.',
      },
      {
        q: 'Heselo считается за стол?',
        a: 'Планы зависят от типа заведения и объёма; бильярд от {billiards} {currency}/мес. Лимиты — на странице цен.',
      },
      {
        q: 'Демо?',
        a: 'В форме выберите бильярд и укажите число столов — карта не нужна.',
      },
    ],
    ctaTitle: 'Проверьте бильярд + бар на Heselo',
    ctaBody: 'Напишите число столов и объём барного меню — вместе пройдём счёт сеанса.',
  },
}

export function billiardposAlternativeGuide(locale: Locale): GuideCopy {
  return {
    slug: 'billiardpos-alternative',
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    relatedSolutions,
    ...guides[locale],
  }
}
