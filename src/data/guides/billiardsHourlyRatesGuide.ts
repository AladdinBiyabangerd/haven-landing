import type { Locale } from '@/i18n/config'
import type { GuideCopy } from './types'

const PUBLISHED = '2026-10-17'
const MODIFIED = '2026-10-17'
const relatedSolutions: GuideCopy['relatedSolutions'] = ['billiards', 'pos', 'reservations']

const guides: Record<
  Locale,
  Omit<GuideCopy, 'slug' | 'datePublished' | 'dateModified' | 'relatedSolutions'>
> = {
  az: {
    shortTitle: 'Bilyard saatlıq tariflər',
    h1: 'Bilyard masası tarifləri — saat, gecə, həftəsonu',
    seoTitle: 'Bilyard masa tarifləri — saatlıq, gecə, həftəsonu | Heselo',
    seoDescription:
      'Bilyard klubunda saatlıq və dəqiqəlik tarif, gecə və həftəsonu qiymət, zərərsizlik və paneldə quruluş. Praktik bələdçi.',
    keywords: [
      'bilyard saatlıq tarif',
      'bilyard masa qiyməti',
      'bilyard gecə tarifi',
      'bilyard həftəsonu qiymət',
      'bilyard klubu tarif',
    ],
    intro:
      'Bilyard klubunda gəlir çox vaxt masa saatından gəlir. Tarif çox yüksəkdirsə, zal boş qalır; çox aşağıdırsa, işıq və icarə ödənməyə bilər. Bu bələdçi saatlıq və dəqiqəlik modelləri, gecə və həftəsonu fərqlərini və paneldə necə saxlamağı izah edir — rəqəmlər nümunədir, sizin zalınızın büdcəsi fərqli ola bilər.',
    sections: [
      {
        id: 'models',
        title: 'Saatlıq, yoxsa dəqiqəlik?',
        paragraphs: [
          'Saatlıq model qonağa aydındır: bir saat — bir qiymət. Dəqiqəlik model qısa oyunlarda daha ədalətli görünür, amma kassada izah tələb edir. Bir çox klub gündüz saatlıq, gecə isə eyni və ya yüksək tarif saxlayır.',
        ],
        bullets: [
          'Saatlıq — sadə ünsiyyət, asan reklam',
          'Dəqiqəlik — qısa sessiya üçün çevik',
          'Pauza — tarifin dayandığı və ya davam etdiyi qaydanı əvvəlcədən yazın',
        ],
      },
      {
        id: 'night-weekend',
        title: 'Gecə və həftəsonu',
        paragraphs: [
          'Pik saatlar adətən axşam və həftəsonudur. Gecə tarifi gündüzdən yüksək ola bilər; bəzi klublar əksinə, səhər doldurmaq üçün endirim verir. Vacib olan odur ki, qayda paneldə və zalda eyni dildə olsun — işçilər fərqli qiymət deməsin.',
        ],
      },
      {
        id: 'break-even',
        title: 'Zərərsizlikə doğru',
        paragraphs: [
          'Təxmini yanaşma: aylıq icarə, kommunal, maaş və proqram xərcini toplayın, gözlənilən dolu masa-saatına bölün. Nəticə minimum saatlıq tarifə yaxınlaşır. Sonra rəqabət və bar marjasını əlavə edin — tək masa qiyməti bütün gəliri daşımaya bilər.',
        ],
      },
      {
        id: 'heselo',
        title: 'Heselo-da tariflər',
        paragraphs: [
          'Hər masa tipinə ayrı tarif qoymaq olur. Sessiya açılınca qiymət müddətə görə hesablanır; bar eyni hesaba düşür. Gecə və həftəsonu qaydalarını demoda öz saatlarınızla yoxlaya bilərsiniz. Bilyard planı {billiards} {currency}/aydan başlayır.',
        ],
      },
    ],
    faq: [
      {
        q: 'Rus və pul masasının tarifi fərqli ola bilər?',
        a: 'Bəli. Masa tipləri ayrıca qurulur; hər birinə öz saatlıq və ya dəqiqəlik qiymətini verə bilərsiniz.',
      },
      {
        q: 'Pauza zamanı sayğac dayanırmı?',
        a: 'Sessiya pauzaya qoyula bilər. Qaydanı klub siyasətinizə uyğun demoda razılaşdırın.',
      },
      {
        q: 'Tarif kalkulyatoru varmı?',
        a: 'Ümumi tarif alətləri saytda tools bölməsindədir; bilyard ssenarisi üçün demo daha dəqiqdir.',
      },
    ],
    ctaTitle: 'Öz tariflərinizi paneldə yoxlayın',
    ctaBody: 'Masa sayı və cari saatlıq qiymətlərinizi yazın — gecə/həftəsonu qaydalarını birlikdə quraq.',
  },
  en: {
    shortTitle: 'Billiards hourly rates',
    h1: 'Billiards table rates — hourly, night, weekend',
    seoTitle: 'Billiards Table Rates — Hourly, Night, Weekend | Heselo',
    seoDescription:
      'Hourly and per-minute billiards rates, night and weekend pricing, break-even thinking, and how to keep rules in the panel. Practical guide.',
    keywords: [
      'billiards hourly rate',
      'pool table price per hour',
      'billiards night rate',
      'billiards weekend pricing',
    ],
    intro:
      'In a billiards club, revenue often comes from table hours. Price too high and the floor stays empty; too low and rent and power may not be covered. This guide explains hourly and per-minute models, night and weekend differences, and how to keep rules in a panel — sample logic only; your venue budget will differ.',
    sections: [
      {
        id: 'models',
        title: 'Hourly or per-minute?',
        paragraphs: [
          'Hourly is easy to explain: one hour, one price. Per-minute feels fairer for short games but needs a clear cash explanation. Many clubs keep daytime hourly and the same or higher rate at night.',
        ],
        bullets: [
          'Hourly — simple messaging and ads',
          'Per-minute — flexible for short sessions',
          'Pause — decide in advance whether the clock stops',
        ],
      },
      {
        id: 'night-weekend',
        title: 'Night and weekend',
        paragraphs: [
          'Peak hours are usually evenings and weekends. A night rate can sit above daytime; some clubs discount mornings to fill seats. What matters is that the rule in the panel matches what staff say on the floor.',
        ],
      },
      {
        id: 'break-even',
        title: 'Toward break-even',
        paragraphs: [
          'A rough approach: add monthly rent, utilities, wages, and software, then divide by expected busy table-hours. That lands near a minimum hourly rate. Then add competition and bar margin — table price alone may not carry the whole business.',
        ],
      },
      {
        id: 'heselo',
        title: 'Rates in Heselo',
        paragraphs: [
          'You can set a rate per table type. When a session opens, price follows duration; bar items land on the same bill. Night and weekend rules can be checked on a demo with your hours. Billiards plans start at {billiards} {currency}/month.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can pool and Russian tables have different rates?',
        a: 'Yes. Table types are configured separately; each can have its own hourly or per-minute price.',
      },
      {
        q: 'Does the clock stop on pause?',
        a: 'A session can be paused. Align the rule with your club policy on the demo.',
      },
      {
        q: 'Is there a tariff calculator?',
        a: 'General tariff tools are under tools on the site; for a billiards scenario a demo is more accurate.',
      },
    ],
    ctaTitle: 'Test your rates in the panel',
    ctaBody: 'Share table count and current hourly prices — we will set night/weekend rules together.',
  },
  ru: {
    shortTitle: 'Почасовые тарифы бильярда',
    h1: 'Тарифы бильярдного стола — час, ночь, выходные',
    seoTitle: 'Тарифы бильярда — почасовой, ночной, выходной | Heselo',
    seoDescription:
      'Почасовая и поминутная тарификация бильярда, ночь и выходные, безубыточность и настройка в панели. Практическая статья.',
    keywords: [
      'почасовой тариф бильярд',
      'цена часа бильярда',
      'ночной тариф бильярд',
      'тариф бильярдного клуба',
    ],
    intro:
      'В бильярдном клубе выручка часто идёт от часов стола. Слишком высокая цена — зал пустеет; слишком низкая — аренда и свет могут не окупиться. В статье — почасовая и поминутная модели, ночь и выходные, и как держать правила в панели. Цифры примерные; бюджет вашего зала будет другим.',
    sections: [
      {
        id: 'models',
        title: 'Час или минута?',
        paragraphs: [
          'Почасовой тариф понятен гостю: час — цена. Поминутный честнее для короткой игры, но требует ясного объяснения на кассе. Многие клубы днём держат час, ночью — тот же или более высокий тариф.',
        ],
        bullets: [
          'Почасовой — простая реклама и разговор',
          'Поминутный — гибкость для коротких сеансов',
          'Пауза — заранее решите, останавливаются ли часы',
        ],
      },
      {
        id: 'night-weekend',
        title: 'Ночь и выходные',
        paragraphs: [
          'Пик обычно вечером и в выходные. Ночной тариф может быть выше дневного; кто-то снижает утро, чтобы заполнить зал. Главное — правило в панели совпадает с тем, что говорит персонал.',
        ],
      },
      {
        id: 'break-even',
        title: 'К безубыточности',
        paragraphs: [
          'Грубо: сложите аренду, коммуналку, зарплаты и ПО за месяц и разделите на ожидаемые занятые стол-часы. Получите ориентир минимума почасового тарифа. Затем учтите конкуренцию и маржу бара — одна цена стола бизнес не вывезет.',
        ],
      },
      {
        id: 'heselo',
        title: 'Тарифы в Heselo',
        paragraphs: [
          'На каждый тип стола можно задать свой тариф. С открытием сеанса цена считается по длительности; бар попадает в тот же счёт. Ночные и выходные правила проверим на демо по вашим часам. Бильярд — от {billiards} {currency}/мес.',
        ],
      },
    ],
    faq: [
      {
        q: 'Можно ли разный тариф для пула и русского?',
        a: 'Да. Типы столов настраиваются отдельно; у каждого свой почасовой или поминутный тариф.',
      },
      {
        q: 'На паузе счётчик останавливается?',
        a: 'Сеанс можно поставить на паузу. Правило согласуйте с политикой клуба на демо.',
      },
      {
        q: 'Есть калькулятор тарифов?',
        a: 'Общие инструменты — в разделе tools на сайте; для сценария бильярда точнее демо.',
      },
    ],
    ctaTitle: 'Проверьте свои тарифы в панели',
    ctaBody: 'Напишите число столов и текущие почасовые цены — вместе настроим ночь и выходные.',
  },
}

export function billiardsHourlyRatesGuide(locale: Locale): GuideCopy {
  return {
    slug: 'billiards-hourly-rates',
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    relatedSolutions,
    ...guides[locale],
  }
}
