import type { Locale } from '@/i18n/config'
import type { GuideCopy } from './types'

const PUBLISHED = '2026-10-17'
const MODIFIED = '2026-10-17'
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
      'BilliardPOS masa vaxtı, anbar və termal printer inteqrasiyası ilə tanınır. Heselo AZ qiymətli bulud paneldır: bron, sessiya, kassa.',
    keywords: [
      'BilliardPOS alternativ',
      'BilliardPOS alternativi',
      'bilyard pos',
      'bilyard klubu proqramı',
      'bilyard anbar',
    ],
    intro:
      'BilliardPOS bilyard salonları üçün masa vaxtını izləyən, anbar və mətbəx/bar sifarişlərini idarə edən, termal printerlərlə işləyən sistem kimi təqdim olunur. Qiymət tez-tez masa sayına görə aylıq modeldə danışılır. Azərbaycanda isə klub sahibi açıq AZN tarif, AZ dil və sadə bulud giriş istəyə bilər. Bu yazı BilliardPOS kateqoriyasını Heselo ilə müqayisə edir.',
    sections: [
      {
        id: 'when-heselo',
        title: 'Heselo nə vaxt kifayət edir?',
        paragraphs: [
          'Masa bronu, canlı sessiya, bar satışı və növbə kassası əsas ehtiyacdırsa, Heselo kifayət edə bilər. Anbar katalogu paneldə var; ağır mətbəx KDS və onlarla tədarükçü ssenarisi üçün restoran POS paralel qala bilər.',
        ],
        bullets: [
          'Masa taymeri, pauza, uzatma',
          'Rezervasiya cədvəli',
          'Bar satış sessiya hesabına',
          'Açıq qiymət: {billiards} {currency}/aydan',
        ],
      },
      {
        id: 'when-billiardpos',
        title: 'BilliardPOS nə vaxt qala bilər?',
        paragraphs: [
          'Termal printer axını, dərin anbar və mətbəx sifarişləri sizin üçün mərkəzdirsə, BilliardPOS və ya restoran POS-u ayrıca yoxlayın. Heselo klub otaq-vaxt paneli kimi qurulub — tam restoran mətbəxi deyil.',
        ],
      },
      {
        id: 'comparison',
        title: 'BilliardPOS və Heselo',
        paragraphs: ['BilliardPOS qiymət diapazonunu onların saytından təsdiqləyin; burada yalnız açıq mənbəli ümumi təsvir var.'],
        table: {
          headers: ['Aspekt', 'BilliardPOS', 'Heselo'],
          rows: [
            ['Fokus', 'Masa vaxtı + anbar/printer', 'Bron + sessiya + klub kassası'],
            ['Platforma', 'Web / bulud', 'Web / bulud'],
            ['Anbar', 'Güclü iddia', 'Klub kataloqu'],
            ['Printer', 'Termal inteqrasiya iddiası', 'Demo ilə yoxlayın'],
            ['Qiymət', 'Tez-tez masa sayına görə', '{billiards} {currency}/aydan, açıq'],
            ['Dillər', 'Vendor-dan asılı', 'AZ, EN, RU'],
          ],
        },
      },
      {
        id: 'decision',
        title: 'Qərar sualları',
        paragraphs: ['Eyni masa sayı fərqli proqram tələb edə bilər.'],
        bullets: [
          'Printer və mətbəx sifarişi mütləqdirmi?',
          'Bron və canlı zal eyni dərəcədə vacibdirmi?',
          'Qiymət masa sayına görə, yoxsa məkan üzrə sabitdir?',
        ],
      },
    ],
    faq: [
      {
        q: 'Heselo BilliardPOS-u əvəz edir?',
        a: 'Bron, sessiya və kassa üçün çox vaxt bəli. Ağır anbar və printer stack-i mütləqdirsə, BilliardPOS və ya restoran POS-u saxlaya bilərsiniz.',
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
      'BilliardPOS tracks table time with stock and thermal printers. Heselo is a cloud panel with public AZ pricing: booking, sessions, cash.',
    keywords: [
      'BilliardPOS alternative',
      'billiards POS',
      'billiards club software',
      'billiards inventory',
    ],
    intro:
      'BilliardPOS is presented as software that tracks table time, manages stock and kitchen/bar tickets, and talks to thermal printers. Pricing is often discussed per table per month. In Azerbaijan, owners may want a public AZN rate, local languages, and a simple cloud login. This guide compares the BilliardPOS category with Heselo.',
    sections: [
      {
        id: 'when-heselo',
        title: 'When is Heselo enough?',
        paragraphs: [
          'If table booking, a live session, bar sales, and a shift cash drawer are the core need, Heselo can be enough. The panel has a stock catalog; for a heavy kitchen KDS and dozens of suppliers, keep a restaurant POS in parallel.',
        ],
        bullets: [
          'Table timer, pause, extend',
          'Booking schedule',
          'Bar sales on the session bill',
          'Public price from {billiards} {currency}/month',
        ],
      },
      {
        id: 'when-billiardpos',
        title: 'When should BilliardPOS stay?',
        paragraphs: [
          'If thermal printer flows, deep stock, and kitchen tickets are central, evaluate BilliardPOS or a restaurant POS on their own. Heselo is built as a club room-time panel — not a full kitchen stack.',
        ],
      },
      {
        id: 'comparison',
        title: 'BilliardPOS vs Heselo',
        paragraphs: ['Confirm BilliardPOS pricing on their site; here we only use public high-level claims.'],
        table: {
          headers: ['Aspect', 'BilliardPOS', 'Heselo'],
          rows: [
            ['Focus', 'Table time + stock/printers', 'Booking + session + club cash'],
            ['Platform', 'Web / cloud', 'Web / cloud'],
            ['Stock', 'Strong claim', 'Club catalog'],
            ['Printers', 'Thermal integration claim', 'Validate on demo'],
            ['Price', 'Often per table', 'From {billiards} {currency}/month, public'],
            ['Languages', 'Vendor-dependent', 'AZ, EN, RU'],
          ],
        },
      },
      {
        id: 'decision',
        title: 'Decision questions',
        paragraphs: ['The same table count can need different software.'],
        bullets: [
          'Are printers and kitchen tickets mandatory?',
          'Are booking and live floor equally important?',
          'Is price per table or fixed per venue?',
        ],
      },
    ],
    faq: [
      {
        q: 'Does Heselo replace BilliardPOS?',
        a: 'For booking, sessions, and cash — often yes. If deep stock and a printer stack are mandatory, keep BilliardPOS or a restaurant POS.',
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
      'BilliardPOS следит за временем стола, складом и термопринтерами. Heselo — облачная панель с открытой ценой: бронь, сеансы, касса.',
    keywords: [
      'альтернатива BilliardPOS',
      'бильярд POS',
      'программа для бильярдного клуба',
      'склад бильярд',
    ],
    intro:
      'BilliardPOS представляют как систему учёта времени стола, склада и кухонных/барных заказов с термопринтерами. Цену часто обсуждают помесячно от числа столов. В Азербайджане владельцу может быть важнее открытый тариф в манатах, локальные языки и простой облачный вход. Ниже — сравнение категории BilliardPOS с Heselo.',
    sections: [
      {
        id: 'when-heselo',
        title: 'Когда хватает Heselo?',
        paragraphs: [
          'Если ядро — бронь стола, живой сеанс, бар в счёт и кассовая смена, Heselo может хватить. В панели есть каталог склада; для тяжёлого кухонного KDS и десятков поставщиков ресторанную POS можно оставить рядом.',
        ],
        bullets: [
          'Таймер стола, пауза, продление',
          'Расписание брони',
          'Бар в счёт сеанса',
          'Открытая цена от {billiards} {currency}/мес',
        ],
      },
      {
        id: 'when-billiardpos',
        title: 'Когда BilliardPOS может остаться?',
        paragraphs: [
          'Если термопринтеры, глубокий склад и кухонные тикеты — центр работы, смотрите BilliardPOS или ресторанную POS отдельно. Heselo собран как клубная панель времени, а не полный кухонный стек.',
        ],
      },
      {
        id: 'comparison',
        title: 'BilliardPOS и Heselo',
        paragraphs: ['Цены BilliardPOS подтверждайте на их сайте; здесь только общие публичные формулировки.'],
        table: {
          headers: ['Аспект', 'BilliardPOS', 'Heselo'],
          rows: [
            ['Фокус', 'Время стола + склад/принтеры', 'Бронь + сеанс + клубная касса'],
            ['Платформа', 'Web / облако', 'Web / облако'],
            ['Склад', 'Сильная заявка', 'Клубный каталог'],
            ['Принтеры', 'Заявка на термоинтеграцию', 'Проверьте на демо'],
            ['Цена', 'Часто от числа столов', 'от {billiards} {currency}/мес, открыто'],
            ['Языки', 'Зависит от вендора', 'AZ, EN, RU'],
          ],
        },
      },
      {
        id: 'decision',
        title: 'Вопросы для решения',
        paragraphs: ['Одинаковое число столов может требовать разного ПО.'],
        bullets: [
          'Обязательны ли принтеры и кухонные тикеты?',
          'Бронь и живой зал одинаково важны?',
          'Цена за стол или фиксирована за заведение?',
        ],
      },
    ],
    faq: [
      {
        q: 'Heselo заменяет BilliardPOS?',
        a: 'Для брони, сеанса и кассы — часто да. Если обязателен глубокий склад и стек принтеров, оставьте BilliardPOS или ресторанную POS.',
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
