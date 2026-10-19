import type { Locale } from '@/i18n/config'
import type { GuideCopy } from './types'

const PUBLISHED = '2026-10-17'
const MODIFIED = '2026-10-19'
const relatedSolutions: GuideCopy['relatedSolutions'] = ['billiards', 'pos', 'reservations']

const guides: Record<
  Locale,
  Omit<GuideCopy, 'slug' | 'datePublished' | 'dateModified' | 'relatedSolutions'>
> = {
  az: {
    shortTitle: 'Biliardo.kz alternativi',
    h1: 'Biliardo.kz alternativi — regional bilyard proqramı',
    seoTitle: 'Biliardo.kz alternativi — bilyard klubu proqramı | Heselo',
    seoDescription:
      'Biliardo.kz Windows + web kabinet: gün/gecə tarif, USB işıq, açıq ₸ tariflər. Heselo — AZ/EN/RU bulud panel: bron, sessiya, kassa.',
    keywords: [
      'Biliardo.kz alternativ',
      'biliardo.kz',
      'bilyard proqramı Qazaxıstan',
      'bilyard klubu proqramı',
      'regional bilyard pos',
    ],
    intro:
      'Biliardo.kz (biliardo.kz, yoxlama 18.10.2026) Windows 10/11 oflayn desktop + web sahibi kabinetidir: oyunla birlikdə masa işığı (USB relye dəsti, ~15 000 ₸/masa), bron, turnir və rollar. Açıq tariflər: Старт 1 000 ₸, Клуб 1 500 ₸, Владелец 2 500 ₸ /masa/ay; 14 gün trial sonrası 3 masaya qədər forever free; ömürlük 45 000/75 000 ₸/masa. Heselo relye təklif etmir — AZ/EN/RU bulud, otaq+masa+bar+kassa. Bu yazı dürüst müqayisədir.',
    sections: [
      {
        id: 'overlap',
        title: 'Ortaq funksiyalar',
        paragraphs: [
          'Hər iki kateqoriya masa vaxtı, tarif və bar satışına toxunur. Fərq çox vaxt dil, qiymət modeli, dəstək regionu və bulud təcrübəsindədir.',
        ],
      },
      {
        id: 'when-biliardo',
        title: 'Biliardo.kz nə vaxt qala bilər?',
        paragraphs: [
          'Klubunuz Qazaxıstan bazarında işləyir, USB işıq dəsti və oflayn Windows sizin üçün kritikdirsə, Biliardo.kz-i öz şərtləri ilə qiymətləndirin. Forever-free 3 masa limitini müqavilədə oxuyun.',
        ],
      },
      {
        id: 'when-heselo',
        title: 'Heselo nə vaxt uyğundur?',
        paragraphs: [
          'Bakı və Azərbaycan klubları, AZ/RU panel, qarışıq məkan (bilyard+PS+karaoke) və rezervasiya + canlı sessiya bir yerdə lazımdırsa, Heselo uyğundur. Bilyard {billiards} {currency}/aydan başlayır; işıq relye yoxdur.',
        ],
        table: {
          headers: ['Aspekt', 'Biliardo.kz', 'Heselo'],
          rows: [
            ['Platforma', 'Windows oflayn + web kabinet', 'Web / bulud'],
            ['İşıq relye', 'Bəli (USB dəst)', 'Xeyr'],
            ['Rezervasiya + sessiya', 'Bəli*', 'Bəli'],
            ['Qiymət', '1000–2500 ₸/masa/ay*', '{billiards} {currency}/aydan'],
            ['Dillər', 'RU, KZ', 'AZ, EN, RU'],
          ],
        },
      },
    ],
    faq: [
      {
        q: 'Heselo Qazaxıstanda işləyir?',
        a: 'Panel uzaqdan işləyir; əsas bazar Azərbaycandır. KZ üçün valyuta və dəstək gözləntilərini demoda danışın.',
      },
      {
        q: 'Biliardo.kz pulsuzdursa niyə Heselo?',
        a: 'Forever-free 3 masa ilə məhdudlaşır; böyüyən klubda AZ/RU dil, qarışıq məkan və bulud növbə ayrıca dəyər ola bilər.',
      },
      {
        q: 'Demo?',
        a: 'Əlaqə formasında bilyard seçin — kart lazım deyil.',
      },
    ],
    ctaTitle: 'Regional alternativ kimi Heselo-nu yoxlayın',
    ctaBody: 'Masa sayınızı və ölkənizi yazın — uyğun axını göstərək.',
  },
  en: {
    shortTitle: 'Biliardo.kz alternative',
    h1: 'Biliardo.kz alternative — regional billiards software',
    seoTitle: 'Biliardo.kz Alternative — Billiards Club Software | Heselo',
    seoDescription:
      'Biliardo.kz is Windows + web cabinet software with USB lights and published ₸ rates. Heselo is an AZ/EN/RU cloud panel: booking, sessions, cash.',
    keywords: [
      'Biliardo.kz alternative',
      'biliardo.kz',
      'billiards software Kazakhstan',
      'billiards club software',
    ],
    intro:
      'Biliardo.kz (biliardo.kz, checked 18 Oct 2026) is a Windows 10/11 offline desktop plus a web owner cabinet: table lights with the game (USB relay kit, ~15 000 ₸/table), booking, tournaments and roles. Published rates: Start 1 000 ₸, Club 1 500 ₸, Owner 2 500 ₸ per table/month; forever free up to 3 tables after a 14-day trial; lifetime buyout 45 000/75 000 ₸ per table. Heselo has no light relay — AZ/EN/RU cloud with room+table+bar+cash. Honest comparison.',
    sections: [
      {
        id: 'overlap',
        title: 'Shared ground',
        paragraphs: [
          'Both categories touch table time, rates, and bar sales. Differences usually sit in language, pricing model, support region, and cloud experience.',
        ],
      },
      {
        id: 'when-biliardo',
        title: 'When should Biliardo.kz stay?',
        paragraphs: [
          'If you operate in Kazakhstan and need a USB light kit plus offline Windows, evaluate Biliardo.kz on its own terms. Read the forever-free 3-table cap in the contract.',
        ],
      },
      {
        id: 'when-heselo',
        title: 'When does Heselo fit?',
        paragraphs: [
          'If you run a Baku or Azerbaijan club and need AZ/RU UI, mixed venues (billiards+PS+karaoke), and booking plus a live session together, Heselo fits. Billiards starts at {billiards} {currency}/month; no light relay.',
        ],
        table: {
          headers: ['Aspect', 'Biliardo.kz', 'Heselo'],
          rows: [
            ['Platform', 'Windows offline + web cabinet', 'Web / cloud'],
            ['Light relay', 'Yes (USB kit)', 'No'],
            ['Booking + session', 'Yes*', 'Yes'],
            ['Price', '1000–2500 ₸/table/mo*', 'From {billiards} {currency}/month'],
            ['Languages', 'RU, KZ', 'AZ, EN, RU'],
          ],
        },
      },
    ],
    faq: [
      {
        q: 'Does Heselo work in Kazakhstan?',
        a: 'The panel works remotely; the primary market is Azerbaijan. Discuss currency and support expectations on the demo.',
      },
      {
        q: 'If Biliardo.kz is free, why Heselo?',
        a: 'Forever-free is capped at 3 tables; growing clubs may value AZ/RU UI, mixed venues, and a cloud shift separately.',
      },
      {
        q: 'Demo?',
        a: 'Choose billiards on the contact form — no card required.',
      },
    ],
    ctaTitle: 'Try Heselo as a regional alternative',
    ctaBody: 'Tell us your table count and country — we will show a fitting flow.',
  },
  ru: {
    shortTitle: 'Альтернатива Biliardo.kz',
    h1: 'Альтернатива Biliardo.kz — региональная программа для бильярда',
    seoTitle: 'Альтернатива Biliardo.kz — программа для бильярда | Heselo',
    seoDescription:
      'Biliardo.kz — Windows + web-кабинет с USB-светом и открытыми тарифами в ₸. Heselo — облачная панель AZ/EN/RU: бронь, сеансы, касса.',
    keywords: [
      'альтернатива Biliardo.kz',
      'biliardo.kz',
      'программа для бильярда Казахстан',
      'программа для бильярдного клуба',
    ],
    intro:
      'Biliardo.kz (biliardo.kz, проверка 18.10.2026) — офлайн Windows 10/11 плюс web-кабинет владельца: свет над столом с игрой (USB-реле, ~15 000 ₸/стол), бронь, турниры и роли. Тарифы: Старт 1 000 ₸, Клуб 1 500 ₸, Владелец 2 500 ₸ за стол/мес; forever free до 3 столов после trial 14 дней; выкуп 45 000/75 000 ₸ за стол. У Heselo реле нет — AZ/EN/RU облако, комната+стол+бар+касса. Честное сравнение.',
    sections: [
      {
        id: 'overlap',
        title: 'Общее',
        paragraphs: [
          'Обе категории касаются времени стола, тарифов и барных продаж. Разница чаще в языке, модели цены, регионе поддержки и облачном опыте.',
        ],
      },
      {
        id: 'when-biliardo',
        title: 'Когда Biliardo.kz может остаться?',
        paragraphs: [
          'Если клуб в Казахстане и нужны USB-комплект света плюс офлайн Windows — оценивайте Biliardo.kz на их условиях. Лимит forever free на 3 стола читайте в договоре.',
        ],
      },
      {
        id: 'when-heselo',
        title: 'Когда подходит Heselo?',
        paragraphs: [
          'Если клуб в Баку или Азербайджане и нужны AZ/RU, смешанное заведение (бильярд+PS+караоке), бронь и живой сеанс вместе — Heselo уместен. Бильярд от {billiards} {currency}/мес; реле света нет.',
        ],
        table: {
          headers: ['Аспект', 'Biliardo.kz', 'Heselo'],
          rows: [
            ['Платформа', 'Windows офлайн + web-кабинет', 'Web / облако'],
            ['Реле света', 'Да (USB-комплект)', 'Нет'],
            ['Бронь + сеанс', 'Да*', 'Да'],
            ['Цена', '1000–2500 ₸/стол/мес*', 'от {billiards} {currency}/мес'],
            ['Языки', 'RU, KZ', 'AZ, EN, RU'],
          ],
        },
      },
    ],
    faq: [
      {
        q: 'Heselo работает в Казахстане?',
        a: 'Панель работает удалённо; основной рынок — Азербайджан. Валюту и ожидания по поддержке обсудите на демо.',
      },
      {
        q: 'Если Biliardo.kz бесплатный, зачем Heselo?',
        a: 'Forever free ограничен 3 столами; растущему клубу отдельно важны AZ/RU, смешанное заведение и облачная смена.',
      },
      {
        q: 'Демо?',
        a: 'В форме выберите бильярд — карта не нужна.',
      },
    ],
    ctaTitle: 'Проверьте Heselo как региональную альтернативу',
    ctaBody: 'Напишите число столов и страну — покажем подходящий поток.',
  },
}

export function biliardoKzAlternativeGuide(locale: Locale): GuideCopy {
  return {
    slug: 'biliardo-kz-alternative',
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    relatedSolutions,
    ...guides[locale],
  }
}
