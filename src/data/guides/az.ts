import type { GuideCopy, GuidesHubCopy } from './types'
import { comparisonGuides } from './comparisonGuides'
import { gapEducationalGuides } from './gapEducationalGuides'

export const guidesHubAz: GuidesHubCopy = {
  eyebrow: 'Bələdçilər',
  h1: 'Klub və otaq işi necə qurulur?',
  intro:
    'Burada oyun klubu, bilyard, karaoke, launj və antikafe idarəetməsi ilə bağlı praktik suallara cavab veririk. Məqsəd məhsulu tərifləmək yox, hansı prosesə hansı alətin uyğun olduğunu aydın göstərməkdir.',
  seoTitle: 'Bələdçilər — klub idarəetməsi, proqram seçimi və POS alternativləri | Heselo',
  seoDescription:
    'Oyun klubu, karaoke, bilyard, launj və antikafe idarəetməsi; rezervasiya, canlı sessiya, kassa; iiko, Clopos, Dine və Excel alternativləri — praktik bələdçilər.',
  keywords: [
    'oyun klubu idarəetmə sistemi nədir',
    'playstation klub proqramı',
    'karaoke rezervasiya sistemi',
    'bilyard masa rezervasiya',
    'antikafe proqramı',
    'klub kassa proqramı',
    'iiko alternativ',
    'clopos alternativ',
    'dine alternativ',
  ],
  cardCta: 'Oxu',
  comparisonTitle: 'Alternativlər və müqayisələr',
  comparisonIntro:
    'iiko, Clopos, Dine, MinuPOS və digər sistemləri klub/otaq-vaxt üçün müqayisə edirsinizsə — funksiyalar, iş prosesi və seçim meyarları üzrə ayrıca bələdçilər burada.',
}

export const guidesAz: GuideCopy[] = [
  {
    slug: 'gaming-club-management',
    shortTitle: 'Oyun klubu idarəetməsi',
    h1: 'Oyun klubu idarəetmə sistemi nədir?',
    seoTitle: 'Oyun klubu idarəetmə sistemi nədir? | Heselo',
    seoDescription:
      'PS, konsol və PC oyun klubunda rezervasiya, canlı sessiya, satış və kassa necə idarə olunur? Praktik izah və proqram seçimi üçün əsas meyarlar.',
    keywords: [
      'oyun klubu idarəetmə sistemi nədir',
      'ps klub proqramı',
      'playstation klub idarəetmə',
      'konsol klub necə idarə olunur',
    ],
    datePublished: '2026-08-13',
    dateModified: '2026-09-23',
    intro:
      'Oyun klubunda əsas məsələ yalnız vaxt saymaq deyil. Hansı stansiyanın boş olduğu, hansı bronun gəldiyi, sessiyanın nə vaxt başladığı, əlavə satışların və ödənişin necə bağlandığı da eyni iş prosesinin hissəsidir.',
    sections: [
      {
        id: 'why',
        title: 'Niyə oyun klubu üçün ayrıca sistem lazımdır?',
        paragraphs: [
          'PS və PC klublarında iş saat üzərindən gedir. Gün ərzində telefonla bronlar, boş stansiyalar, uzatmalar və əlavə satışlar yaranır. Bunlar ayrı-ayrı dəftər, WhatsApp və Excel-də saxlananda növbələr arasında məlumat itə bilər.',
          'Mərkəzləşdirilmiş sistemdə isə stansiya, bron və canlı sessiya bir-birinə bağlı olur. İşçi hansı stansiyanın hazırda aktiv, boş və ya bronlu olduğunu eyni yerdən görür.',
        ],
      },
      {
        id: 'modules',
        title: 'Oyun klubu proqramında hansı funksiyalar olmalıdır?',
        paragraphs: [
          'Funksiyalar məkanın ölçüsündən asılıdır, amma gündəlik iş üçün əsas ehtiyaclar adətən bunlardır:',
        ],
        bullets: [
          'PS, konsol və PC stansiyalarının idarəsi',
          'Rezervasiya və cədvəl',
          'Canlı sessiya və vaxt uzatma',
          'İçki və qəlyanaltı satışı',
          'Kassa növbəsi və gün sonu hesabatı',
          'Müştəri tarixçəsi və işçi icazələri',
        ],
      },
      {
        id: 'timer',
        title: 'Sadə taymer proqramından fərqi nədir?',
        paragraphs: [
          'Taymer əsasən vaxtı göstərir. Amma bronun kimə aid olduğunu, növbənin necə bağlandığını, hansı məhsulun satıldığını və gün ərzində nə qədər gəlir olduğunu ayrıca izləmək lazım gəlir.',
          'Klub böyüdükcə bu məlumatları müxtəlif yerlərdən toplamaq əvəzinə bir prosesdə saxlamaq daha rahat olur.',
        ],
      },
      {
        id: 'heselo',
        title: 'Heselo oyun klubunda necə işləyir?',
        paragraphs: [
          'Heselo-da PS, konsol və PC stansiyaları eyni cədvəldə qurula bilər. Bron aktiv sessiyaya çevrilir, vaxt uzatılır, əlavə satışlar sessiyaya əlavə olunur və yekun məbləğ kassa növbəsində görünür.',
        ],
      },
    ],
    faq: [
      {
        q: 'Yalnız PS klub üçündür, yoxsa PC də işləyir?',
        a: 'Hər ikisi mümkündür. Stansiya növü ayrıca qurulur, amma rezervasiya, sessiya və kassa prosesi eyni qalır.',
      },
      {
        q: 'Sessiyanın vaxtını uzatmaq mümkündür?',
        a: 'Bəli. Aktiv sessiyanın müddəti uzadılır və əlavə vaxt həmin sessiyanın hesabına əlavə olunur.',
      },
      {
        q: 'Qəlyanaltı və içkilər sessiyaya əlavə edilə bilər?',
        a: 'Bəli. Əlavə satışlar aktiv sessiyaya yazılır və yekun ödənişlə birlikdə görünür.',
      },
      {
        q: 'Sahib klubda olmadan vəziyyəti görə bilər?',
        a: 'Bəli. Paneldən cədvəl, aktiv stansiyalar və kassa növbəsi izlənə bilər. İşçi icazələri ilə resepsiya və sahib üçün fərqli giriş səviyyələri yaratmaq mümkündür.',
      },
      {
        q: 'Demo necə əldə edilir?',
        a: 'Əlaqə formasında oyun klubu / PS seçib stansiya sayını qeyd etmək kifayətdir.',
      },
    ],
    relatedSolutions: ['gaming', 'billiards', 'reservations', 'pos'],
    ctaTitle: 'Oyun klubu üçün demo',
    ctaBody: 'Stansiya sayınızı yazın — rezervasiya, canlı sessiya və kassanı real ssenari ilə göstərək.',
  },

  {
    slug: 'karaoke-room-booking',
    shortTitle: 'Karaoke otaq rezervasiyası',
    h1: 'Karaoke otaqları necə bron edilir?',
    seoTitle: 'Karaoke otaq rezervasiyası necə işləyir? | Heselo',
    seoDescription:
      'Karaoke otaq rezervasiyasında cədvəl, sessiya, əlavə satış və kassa necə əlaqələndirilir? Praktik idarəetmə bələdçisi.',
    keywords: [
      'karaoke otaq rezervasiya',
      'karaoke idarəetmə sistemi',
      'karaoke otaq bron',
      'karaoke proqramı',
    ],
    datePublished: '2026-08-13',
    dateModified: '2026-09-23',
    intro:
      'Karaoke məkanında rezervasiya otağın boş vaxtını qeyd etməklə bitmir. Qonaq gəldikdən sonra həmin rezervasiya canlı sessiyaya çevrilir, əlavə vaxt və sifarişlər isə eyni hesabda davam edir.',
    sections: [
      {
        id: 'why',
        title: 'Otaq bronları niyə qarışa bilər?',
        paragraphs: [
          'Telefon, WhatsApp və kağız cədvəl paralel istifadə olunanda eyni otağın vəziyyətini hamı eyni anda görməyə bilər. Xüsusilə bir neçə otaq eyni vaxtda dolanda bu, resepsiyada əlavə yoxlama yaradır.',
        ],
      },
      {
        id: 'flow',
        title: 'Karaoke rezervasiyasının düzgün axını necədir?',
        paragraphs: [
          'Əvvəlcə otaq və vaxt seçilir. Qonaq gəldikdə rezervasiya aktiv sessiyaya çevrilir. Sessiya zamanı əlavə vaxt və məhsullar hesaba əlavə olunur, ödəniş isə növbənin sonunda bağlanır.',
        ],
        bullets: [
          'Otaq cədvəli',
          'Rezervasiya',
          'Canlı sessiya',
          'Əlavə satış',
          'Kassa növbəsi',
        ],
      },
      {
        id: 'form',
        title: 'Sadəcə onlayn bron forması kifayətdirmi?',
        paragraphs: [
          'Bron forması rezervasiya toplamaq üçün faydalıdır, amma məkan daxilindəki işi idarə etmir. Otaq açıldıqda sessiyanın başlaması, sifarişlərin əlavə olunması və yekun ödəniş üçün ayrıca proses lazımdır.',
        ],
      },
      {
        id: 'heselo',
        title: 'Heselo karaoke üçün nə verir?',
        paragraphs: [
          'Otaqlar cədvəldə ayrıca qurulur və aktiv sessiyalar canlı görünür. Rezervasiya, sessiya və kassa eyni paneldə saxlanıldığı üçün resepsiya gün ərzində müxtəlif mənbələr arasında keçid etmir.',
        ],
      },
    ],
    faq: [
      {
        q: 'Bir neçə otaq eyni cədvəldə görünür?',
        a: 'Bəli. Bütün otaqlar eyni cədvəldə və canlı görünüşdə idarə oluna bilər.',
      },
      {
        q: 'Əvvəlcədən sifariş əlavə etmək mümkündür?',
        a: 'Bəli. Rezervasiyaya əvvəlcədən sifariş və digər qeydlər əlavə etmək mümkündür.',
      },
      {
        q: 'Qrup daha uzun qalmaq istəsə necə olur?',
        a: 'Aktiv sessiyanın vaxtı uzadılır. Əlavə vaxt və sifarişlər həmin otağın hesabında davam edir.',
      },
      {
        q: 'İki qrupa eyni otağın verilməsinin qarşısı necə alınır?',
        a: 'Bütün rezervasiyalar vahid cədvəldə saxlananda otağın həmin saat üçün boş, bronlu və ya aktiv olduğu eyni yerdə görünür.',
      },
      {
        q: 'Demo necə alınır?',
        a: 'Əlaqə formasında karaoke seçib otaq sayını yazmaq kifayətdir.',
      },
    ],
    relatedSolutions: ['karaoke', 'lounge', 'reservations', 'pos'],
    ctaTitle: 'Karaoke üçün demo',
    ctaBody: 'Otaq sayınızı yazın — rezervasiya və canlı sessiya prosesini göstərək.',
  },

  {
    slug: 'billiards-club-management',
    shortTitle: 'Bilyard klubu idarəetməsi',
    h1: 'Bilyard klubu necə idarə olunur?',
    seoTitle: 'Bilyard klubu idarəetmə sistemi nədir? | Heselo',
    seoDescription:
      'Bilyard klubunda masa rezervasiyası, canlı oyun, vaxt, əlavə satış və kassa necə birləşdirilir? Praktik idarəetmə izahı.',
    keywords: [
      'bilyard klubu idarəetmə sistemi nədir',
      'bilyard masa rezervasiya necə',
      'bilyard cədvəl',
      'bilyard vaxt sayğacı',
    ],
    datePublished: '2026-08-13',
    dateModified: '2026-09-23',
    intro:
      'Bilyard klubunda əsas iş vahidi masadır. Masanın boş və ya bronlu olması, oyunun nə vaxt başlaması, nə qədər davam etməsi və əlavə sifarişlərin hansı hesaba aid olması gün ərzində birlikdə izlənməlidir.',
    sections: [
      {
        id: 'why',
        title: 'Sadə lövhə və telefon niyə çətinlik yaradır?',
        paragraphs: [
          'Lövhədəki məlumat gec yenilənə bilər, telefonla alınan bron isə digər işçilər tərəfindən dərhal görünməyə bilər. VIP otaq və adi masalar ayrı siyahılarda saxlananda vəziyyəti yoxlamaq daha da çətinləşir.',
        ],
      },
      {
        id: 'time',
        title: 'Vaxt və ödəniş necə əlaqələndirilir?',
        paragraphs: [
          'Oyun başladıqda sessiya açılır. Fasilə, uzatma və əlavə məhsullar həmin sessiya ilə əlaqələndirilir. Tarif masa növünə və vaxt qaydasına əsasən hesablanır, yekun məbləğ isə kassa növbəsinə düşür.',
        ],
      },
      {
        id: 'mix',
        title: 'Bilyard, karaoke və launj birlikdə işləyə bilər?',
        paragraphs: [
          'Bəli. Qarışıq məkanlarda fərqli masa və otaq növlərini eyni idarəetmə panelində saxlamaq mümkündür. Belə olduqda rezervasiya və satış məlumatlarını müxtəlif sistemlərdən toplamaq lazım gəlmir.',
        ],
      },
      {
        id: 'heselo',
        title: 'Heselo bilyard üçün necə işləyir?',
        paragraphs: [
          'Masa və otaqlar ayrıca qurulur. Rezervasiya, canlı oyun və kassa eyni iş axınında davam edir. Fərqli masa tipləri üçün ayrıca tariflər də təyin edilə bilər.',
        ],
      },
    ],
    faq: [
      {
        q: 'VIP otaq və adi masa birlikdə ola bilər?',
        a: 'Bəli. Hər ikisi ayrıca resurs kimi qurulur və eyni cədvəldə idarə edilə bilər.',
      },
      {
        q: 'Yalnız taymer kifayətdirmi?',
        a: 'Əgər yalnız vaxtı izləmək lazımdırsa, taymer kifayət edə bilər. Rezervasiya, satış və kassa da eyni prosesdə lazımdırsa, daha geniş idarəetmə sistemi tələb olunur.',
      },
      {
        q: 'Fərqli masaların fərqli qiyməti ola bilər?',
        a: 'Bəli. Masa tipləri ayrıca qurularaq hər birinə fərqli tarif tətbiq etmək mümkündür.',
      },
      {
        q: 'Oyun zamanı fasilə verilə bilər?',
        a: 'Sessiya pauzaya qoyulub daha sonra davam etdirilə bilər. Əlavə satışlar isə həmin sessiyanın hesabında saxlanır.',
      },
      {
        q: 'Demo necə alınır?',
        a: 'Əlaqə formasında bilyard seçib masa sayını yazmaq kifayətdir.',
      },
    ],
    relatedSolutions: ['billiards', 'gaming', 'karaoke', 'pos'],
    ctaTitle: 'Bilyard üçün demo',
    ctaBody: 'Masa sayınızı yazın — rezervasiya, canlı oyun və kassa prosesini göstərək.',
  },

  {
    slug: 'room-lounge-management',
    shortTitle: 'Otaqlı launj idarəetməsi',
    h1: 'Otaqlı launj necə idarə olunur?',
    seoTitle: 'Otaqlı launj idarəetmə sistemi nədir? | Heselo',
    seoDescription:
      'Otaqlı launjda VIP otaq rezervasiyası, sessiya, əlavə satış və kassa necə idarə olunur? Praktik bələdçi.',
    keywords: [
      'otaqlı launj proqramı',
      'launj otaq rezervasiya',
      'vip otaq rezervasiya',
      'launj idarəetmə sistemi',
    ],
    datePublished: '2026-08-13',
    dateModified: '2026-09-23',
    intro:
      'Otaqlı launjda qonaq müəyyən müddət üçün otaq götürür. Rezervasiya, sessiyanın başlaması, əlavə vaxt və sifarişlər bir-birindən ayrı qeyd olunanda günün sonunda hesabları tutuşdurmaq çətinləşir.',
    sections: [
      {
        id: 'unit',
        title: 'Niyə əsas vahid otaqdır?',
        paragraphs: [
          'Otaqlı məkanda əsas resurs otağın özüdür. Otağın hansı saatda boş olduğu, hansı qonaq üçün saxlandığı və hazırda aktiv sessiyanın olub-olmadığı cədvəldə aydın görünməlidir.',
        ],
      },
      {
        id: 'flow',
        title: 'Gündəlik iş prosesi necə qurulur?',
        paragraphs: [
          'Rezervasiya otağa yazılır. Qonaq gəldikdə sessiya başlayır. Əlavə vaxt və məhsullar həmin sessiyaya əlavə edilir. Ödəniş bağlandıqda məlumat kassa növbəsində əks olunur.',
        ],
      },
      {
        id: 'mix',
        title: 'Launj, karaoke və bilyard birlikdə ola bilər?',
        paragraphs: [
          'Qarışıq məkanlarda otaq, masa və digər resursları eyni sistemdə idarə etmək mümkündür. Bunun əsas üstünlüyü bütün rezervasiya və satışların vahid iş axınında görünməsidir.',
        ],
      },
      {
        id: 'heselo',
        title: 'Heselo otaqlı launj üçün nə edir?',
        paragraphs: [
          'Otaqlar ayrıca resurs kimi qurulur. Rezervasiya, canlı sessiya, satış və kassa eyni paneldə davam edir. Karaoke otaqları ilə oxşar iş prosesi qurmaq mümkündür.',
        ],
      },
    ],
    faq: [
      {
        q: 'Açıq zal da eyni sistemdə ola bilər?',
        a: 'Bəli. Masa və otaqlar eyni cədvəldə və kassa prosesində idarə oluna bilər.',
      },
      {
        q: 'Bu, kouorkinq proqramıdır?',
        a: 'Xeyr. Fokus saat və sessiya əsasında işləyən əyləncə məkanlarıdır: PS, karaoke, bilyard, antikafe və launj kimi.',
      },
      {
        q: 'Launj bar proqramı axtarıram. Bu həll uyğundur?',
        a: 'Bu yazı otaqlı launj prosesini izah edir. Lounge bar idarəetmə proqramı (məhsul) axtarırsınızsa — otaqlı launj həll səhifəsinə keçin: VIP otaq bronu, canlı sessiya, bar satışı və kassa bir paneldə; Kiçik plan 39 AZN/aydan.',
      },
      {
        q: 'Otaqdan kənar bar satışı da eyni kassadan keçə bilər?',
        a: 'Bəli. Birbaşa bar satışları və otaq hesabları eyni kassa növbəsində izlənə bilər.',
      },
      {
        q: 'Demo necə alınır?',
        a: 'Əlaqə formasında otaqlı launj seçib otaq sayını yazmaq kifayətdir.',
      },
    ],
    relatedSolutions: ['lounge', 'karaoke', 'antikafe', 'reservations'],
    ctaTitle: 'Otaqlı launj üçün demo',
    ctaBody: 'Otaq sayınızı yazın — rezervasiya və canlı sessiya prosesini göstərək.',
  },

  {
    slug: 'antikafe-management-system',
    shortTitle: 'Antikafe idarəetməsi',
    h1: 'Antikafe idarəetmə sistemi nədir?',
    seoTitle: 'Antikafe idarəetmə sistemi nədir? | Heselo',
    seoDescription:
      'Antikafedə saatla ödəniş, masa və otaq rezervasiyası, məhsul satışı və kassa necə idarə olunur? Praktik seçim bələdçisi.',
    keywords: [
      'antikafe idarəetmə sistemi nədir',
      'antikafe proqramı',
      'antikafe rezervasiya necə aparılır',
      'saatla ödəniş sistemi',
    ],
    datePublished: '2026-08-12',
    dateModified: '2026-09-23',
    intro:
      'Antikafedə qonaq əsasən keçirdiyi vaxta görə ödəniş edir. Buna masa və otaq rezervasiyası, içki və qəlyanaltı satışı, kassa və bəzən anbar da əlavə olunur. Buna görə yalnız vaxt sayan proqram bütün prosesi əhatə etməyə bilər.',
    sections: [
      {
        id: 'what',
        title: 'Antikafe biznes modeli necə işləyir?',
        paragraphs: [
          'Qonaq masa, divan, otaq və ya başqa bir zona seçir və müəyyən müddət qalır. Bu müddətdə içki və qəlyanaltı sifarişləri də yarana bilər.',
          'Əsas məsələ vaxtı, məkanı və əlavə satışları bir-birindən ayırmadan idarə etməkdir.',
        ],
      },
      {
        id: 'modules',
        title: 'Antikafe proqramında hansı funksiyalar vacibdir?',
        paragraphs: [
          'Məkanın modelindən asılı olaraq əsas funksiyalar bunlar ola bilər:',
        ],
        bullets: [
          'Masa və otaq rezervasiyası',
          'Canlı sessiya və vaxt izləmə',
          'Əlavə məhsul satışı',
          'Kassa növbəsi və sayım',
          'Məhsul kataloqu və anbar',
          'Müştəri qeydləri',
          'İşçi icazələri',
        ],
      },
      {
        id: 'hourly',
        title: 'Saatla ödəniş necə hesablanır?',
        paragraphs: [
          'Bron və ya giriş canlı sessiyaya çevrilir. Sessiyanın müddəti uzadıldıqda əlavə vaxt hesaba əlavə olunur. Məhsul satışı da həmin hesabda saxlanıla bilər. Beləliklə, işçi vaxtı və məhsulları ayrıca hesablamaq məcburiyyətində qalmır.',
        ],
      },
      {
        id: 'vs-gaming',
        title: 'Antikafe ilə oyun klubunun fərqi nədir?',
        paragraphs: [
          'Oyun klubunda əsas resurs adətən PS, konsol və ya PC stansiyasıdır. Antikafedə isə masa, otaq və digər zonalar ön plana çıxır. Buna baxmayaraq hər iki məkanda rezervasiya, canlı sessiya və kassa kimi oxşar proseslər var.',
        ],
      },
      {
        id: 'choose',
        title: 'Antikafe proqramı seçərkən nələrə baxmaq lazımdır?',
        paragraphs: [
          'Rezervasiya və canlı sessiya eyni sistemdə işləyirmi? Məhsul satışı sessiyaya əlavə oluna bilirmi? Kassa növbəsi ayrıca bağlanırmı? Masa və otaqların tariflərini fərqli təyin etmək mümkündürmü?',
          'Ən yaxşı test real iş gününüzü sistemdə təkrarlamaqdır: bron, giriş, uzatma, satış və gün sonu bağlanışı.',
        ],
      },
      {
        id: 'heselo',
        title: 'Heselo antikafe üçün necə istifadə olunur?',
        paragraphs: [
          'Heselo-da masa və otaqlar, canlı sessiyalar, məhsullar və kassa eyni paneldə idarə oluna bilər. Məkanın quruluşuna uyğun olaraq fərqli resurs və tariflər yaratmaq mümkündür.',
        ],
      },
    ],
    faq: [
      {
        q: 'Antikafe üçün sadəcə timer proqramı kifayətdirmi?',
        a: 'Yalnız vaxtı izləmək lazımdırsa, timer kifayət edə bilər. Rezervasiya, satış və kassa da idarə olunacaqsa, əlavə funksiyalar lazım olur.',
      },
      {
        q: 'Otaq rezervasiyası mümkündür?',
        a: 'Bəli. Otaq ayrıca resurs kimi qurulub cədvəldə idarə edilə bilər.',
      },
      {
        q: 'Saatlıq ödəniş necə hesablanır?',
        a: 'Masa və ya otaq üçün tarif təyin edilir, məbləğ sessiyanın müddətinə əsasən hesablanır. Əlavə satışlar da həmin hesaba əlavə edilə bilər.',
      },
      {
        q: 'Antikafe proqramı neçəyə başa gəlir?',
        a: 'Heselo-da antikafe üçün Kiçik plan 32 AZN/aydan başlayır. Digər planlar və illik ödəniş variantları qiymətlər səhifəsində göstərilir.',
      },
      {
        q: 'Demo necə əldə edilir?',
        a: 'Əlaqə formasında masa və ya otaq sayını və məkanınızın necə işlədiyini qeyd edin.',
      },
    ],
    relatedSolutions: ['antikafe', 'gaming', 'reservations', 'pos'],
    ctaTitle: 'Antikafe üçün demo',
    ctaBody: 'Rezervasiyadan kassa bağlanışına qədər iş prosesini göstərək.',
  },

  {
    slug: 'playstation-club-software',
    shortTitle: 'PS klub proqramı',
    h1: 'PlayStation klub proqramı seçərkən nəyə baxmaq lazımdır?',
    seoTitle: 'PlayStation klub proqramı — əsas funksiyalar | Heselo',
    seoDescription:
      'PS və konsol klub proqramında stansiya rezervasiyası, canlı sessiya, satış və kassa necə işləməlidir? Praktik yoxlama siyahısı.',
    keywords: [
      'playstation klub proqramı',
      'ps klub proqramı',
      'konsol klub idarəetmə',
      'playstation club software',
    ],
    datePublished: '2026-09-07',
    dateModified: '2026-09-23',
    intro:
      'PlayStation klub proqramı yalnız taymerdən ibarət deyil. Proqram seçərkən bron, stansiya vəziyyəti, canlı sessiya, əlavə satış və kassa prosesinin bir-birinə necə bağlandığına baxmaq lazımdır.',
    sections: [
      {
        id: 'why',
        title: 'PS klub üçün proqram nəyi həll etməlidir?',
        paragraphs: [
          'Klubda gün ərzində telefon bronları, bronsuz gələn qonaqlar, boş stansiyalar və sessiya uzatmaları olur. Məlumat müxtəlif yerlərdə saxlananda növbə dəyişərkən eyni vəziyyəti yenidən yoxlamaq lazım gəlir.',
          'Proqramda isə hər stansiyanın statusu və ona bağlı sessiya bir yerdə görünə bilər.',
        ],
      },
      {
        id: 'must-have',
        title: 'Minimum hansı funksiyalar olmalıdır?',
        paragraphs: ['Proqram seçərkən bu siyahını yoxlamaq faydalıdır:'],
        bullets: [
          'PS, konsol və PC stansiyalarının ayrıca qurulması',
          'Bron, köçürmə və ləğv',
          'Canlı sessiya və vaxt uzatma',
          'İçki və qəlyanaltı satışı',
          'Kassa növbəsi',
          'İşçi və sahib üçün fərqli icazələr',
        ],
      },
      {
        id: 'console',
        title: 'PS klub və console club arasında fərq varmı?',
        paragraphs: [
          'Axtarış baxımından fərqli ifadələr işlədilsə də, ehtiyac çox vaxt eynidir: konsol stansiyalarını rezervasiya etmək və aktiv sessiyaları idarə etmək. Proqramın konkret cihaz növündən çox, müxtəlif stansiyaları necə idarə etdiyi vacibdir.',
        ],
      },
      {
        id: 'timer',
        title: 'Yalnız taymer kifayət edirmi?',
        paragraphs: [
          'Əgər məqsəd yalnız oyun vaxtını izləməkdirsə, bəli. Amma bron, satış, müştəri tarixçəsi və kassa da lazımdırsa, taymer bunları ayrıca həll etməyəcək.',
        ],
      },
      {
        id: 'heselo',
        title: 'Heselo bu prosesə necə uyğun gəlir?',
        paragraphs: [
          'PS, konsol və PC stansiyaları eyni cədvəldə qurula bilər. Aktiv sessiya, əlavə satış və kassa məlumatları da həmin iş axınında davam edir.',
        ],
      },
    ],
    faq: [
      {
        q: 'Yalnız PlayStation üçün istifadə etmək olar?',
        a: 'Bəli. Digər konsol və PC stansiyalarını da ayrıca resurs kimi qurmaq mümkündür.',
      },
      {
        q: 'PC stansiyaları eyni proqramda ola bilər?',
        a: 'Bəli. Fərqli stansiya tipləri eyni cədvəl və kassa prosesində idarə edilə bilər.',
      },
      {
        q: 'PS klub proqramı neçəyədir?',
        a: 'Heselo-da oyun klubu üçün Kiçik plan 25 AZN/aydan başlayır. Daha çox stansiya üçün Orta və Böyük planlar mövcuddur.',
      },
      {
        q: 'Demo zamanı nəyi yoxlamaq lazımdır?',
        a: 'Real iş ssenarisini sınayın: bron, bronsuz gələn qonaq, sessiyanın başlaması, vaxt uzatma, əlavə satış və növbənin bağlanışı.',
      },
      {
        q: 'Demo necə alınır?',
        a: 'Əlaqə formasında oyun klubu / PS seçib stansiya sayını yazın.',
      },
    ],
    relatedSolutions: ['gaming', 'reservations', 'pos', 'inventory'],
    ctaTitle: 'PS klub üçün demo',
    ctaBody: 'Stansiya sayınızı yazın — bron və canlı sessiya prosesini göstərək.',
  },

  {
    slug: 'billiards-table-booking',
    shortTitle: 'Bilyard masa bronu',
    h1: 'Bilyard masa rezervasiyası və cədvəl necə işləməlidir?',
    seoTitle: 'Bilyard masa rezervasiyası və cədvəl sistemi | Heselo',
    seoDescription:
      'Bilyard masa bronu, cədvəl, canlı oyun və kassa necə birləşdirilir? Onlayn və telefon rezervasiyası üçün praktik bələdçi.',
    keywords: [
      'bilyard masa rezervasiya',
      'bilyard stolunu onlayn bron etmək',
      'bilyard cədvəl sistemi',
      'billiards booking system',
      'billiards scheduling',
    ],
    datePublished: '2026-09-07',
    dateModified: '2026-09-23',
    intro:
      'Bilyard masa bronu sadəcə ad və saat yazmaqdan ibarət deyil. Masa, vaxt, müddət və müştəri məlumatı sonradan canlı oyun və ödənişlə əlaqələndirilməlidir.',
    sections: [
      {
        id: 'booking',
        title: 'Masa rezervasiyasında hansı məlumatlar olmalıdır?',
        paragraphs: [
          'Əsas məlumatlar tarix, saat, masa və ya VIP otaq, müddət və əlaqə məlumatlarıdır. Rezervasiya dəyişdirilərsə və ya ləğv olunarsa, dəyişiklik tarixçəsinin qalması da faydalıdır.',
        ],
      },
      {
        id: 'schedule',
        title: 'Cədvəl niyə rezervasiyadan ayrı olmamalıdır?',
        paragraphs: [
          'Cədvəl bütün masaların vəziyyətini göstərir. Rezervasiyalar başqa yerdə, aktiv oyunlar isə ayrıca saxlanılırsa, işçi boş masanı müəyyən etmək üçün məlumatları birləşdirməli olur.',
        ],
      },
      {
        id: 'online',
        title: 'Bilyard masasını onlayn necə bron etmək olar?',
        paragraphs: [
          'Qonaq tarix, saat və uyğun masa tipini seçib əlaqə məlumatını göndərə bilər. Sorğu resepsiyanın ümumi cədvəlinə düşdükdə işçi onu təsdiqləyə, dəyişə və ya rədd edə bilər.',
          'Əsas məsələ onlayn sorğunun telefonla alınan bronlardan ayrı qalmamasıdır. Əks halda internetdən gələn bron da digər qeydlər kimi qarışıqlıq yarada bilər.',
        ],
      },
      {
        id: 'live',
        title: 'Bron canlı oyuna necə keçir?',
        paragraphs: [
          'Qonaq gəldikdə rezervasiya aktiv sessiyaya çevrilir. Oyun zamanı fasilə və uzatma həmin sessiyada qeyd olunur, əlavə sifarişlər də eyni hesaba əlavə edilə bilər.',
        ],
      },
      {
        id: 'mistakes',
        title: 'Ən çox rast gəlinən problemlər',
        paragraphs: ['Masa bronu qurarkən xüsusilə bunlara diqqət edin:'],
        bullets: [
          'Telefon qeydi ilə cədvəlin ayrı olması',
          'Yalnız taymerdən istifadə etmək',
          'VIP otaqların ayrıca siyahıda saxlanması',
          'Oyun vaxtı ilə ödənişin ayrı qeyd olunması',
        ],
      },
      {
        id: 'heselo',
        title: 'Heselo-da masa bronu necə işləyir?',
        paragraphs: [
          'Masa və otaqlar ayrıca resurs kimi qurulur. Rezervasiya cədvəldə görünür, qonaq gəldikdə canlı sessiyaya çevrilir və yekun ödəniş kassa növbəsində əks olunur.',
        ],
      },
    ],
    faq: [
      {
        q: 'Bron və cədvəl eyni şeydir?',
        a: 'Xeyr. Bron konkret rezervasiyadır, cədvəl isə bütün masaların və vaxtların ümumi görünüşüdür.',
      },
      {
        q: 'Otaq və masa eyni sistemdə ola bilər?',
        a: 'Bəli. Fərqli resurslar eyni cədvəldə idarə edilə bilər.',
      },
      {
        q: 'Onlayn bron telefon bronunu əvəz edir?',
        a: 'Mütləq deyil. Hər iki kanal istifadə oluna bilər. Vacib olan bütün bronların eyni cədvəldə görünməsidir.',
      },
      {
        q: 'Eyni gün üçün bron qəbul etmək olar?',
        a: 'Bəli, əgər seçilən vaxt boşdursa. Resepsiya həmin anda aktiv oyunları və mövcud rezervasiyaları birlikdə görməlidir.',
      },
      {
        q: 'Masa bronu üçün depozit lazımdır?',
        a: 'Bu, məkanın öz qaydasından asılıdır. Depozit tələb edilirsə, onun bronla birlikdə qeyd olunması faydalıdır.',
      },
      {
        q: 'Demo necə alınır?',
        a: 'Əlaqə formasında bilyard seçib masa sayını yazın.',
      },
    ],
    relatedSolutions: ['billiards', 'reservations', 'gaming', 'pos'],
    ctaTitle: 'Bilyard bronu üçün demo',
    ctaBody: 'Masa sayınızı yazın — cədvəl və canlı oyun prosesini göstərək.',
  },

  {
    slug: 'karaoke-booking-system',
    shortTitle: 'Karaoke bron sistemi',
    h1: 'Karaoke rezervasiya sistemi seçərkən nəyə baxmaq lazımdır?',
    seoTitle: 'Karaoke rezervasiya sistemi — seçim meyarları | Heselo',
    seoDescription:
      'Karaoke bron sistemində otaq rezervasiyası, canlı sessiya, əlavə satış və kassa necə işləməlidir? Praktik yoxlama siyahısı.',
    keywords: [
      'karaoke rezervasiya sistemi',
      'karaoke booking system',
      'karaoke otaq bron proqramı',
      'karaoke idarəetmə seçimi',
    ],
    datePublished: '2026-09-07',
    dateModified: '2026-09-23',
    intro:
      'Karaoke üçün rezervasiya sistemi seçərkən yalnız onlayn bron formasına baxmaq kifayət deyil. Otağın rezervasiyadan sessiyaya, sessiyadan ödənişə qədər necə idarə olunduğunu yoxlamaq lazımdır.',
    sections: [
      {
        id: 'form-vs-system',
        title: 'Bron forması ilə idarəetmə sistemi arasında fərq nədir?',
        paragraphs: [
          'Bron forması qonağın sorğusunu toplamaq üçündür. İdarəetmə sistemi isə həmin rezervasiyanı otağın gündəlik işi ilə əlaqələndirir: sessiya başlayır, sifarişlər əlavə olunur və ödəniş bağlanır.',
        ],
      },
      {
        id: 'checklist',
        title: 'Seçim zamanı nəyi yoxlamaq lazımdır?',
        paragraphs: ['Demo zamanı bunları sınayın:'],
        bullets: [
          'Bütün otaqlar eyni cədvəldə görünürmü?',
          'Sessiya uzadıldıqda hesab yenilənirmi?',
          'Əvvəlcədən sifariş əlavə etmək mümkündürmü?',
          'Kassa növbəsi ayrıca bağlanırmı?',
          'Fərqli otaq və məkan tipləri eyni paneldə işləyə bilirmi?',
        ],
      },
      {
        id: 'peak',
        title: 'Pik saatlarda nə sınanmalıdır?',
        paragraphs: [
          'Cümə və şənbə axşamı bir neçə otağın eyni vaxtda dəyişdiyi ssenarini yoxlamaq faydalıdır: otağın köçürülməsi, rezervasiyanın ləğvi, gecikən qonaq və sessiyanın uzadılması.',
        ],
      },
      {
        id: 'heselo',
        title: 'Heselo karaoke üçün nə verir?',
        paragraphs: [
          'Otaqlar cədvəldə və canlı görünüşdə idarə olunur. Rezervasiya aktiv sessiyaya çevrilir, əlavə məhsullar hesaba əlavə edilir və yekun məbləğ kassa növbəsində görünür.',
        ],
      },
    ],
    faq: [
      {
        q: 'Yalnız bron saytı kifayət edirmi?',
        a: 'Yalnız rezervasiya toplamaq üçün kifayət edə bilər. Sessiya, satış və kassa da idarə olunacaqsa, əlavə idarəetmə funksiyaları lazımdır.',
      },
      {
        q: 'VIP və adi otaqlar fərqləndirilə bilər?',
        a: 'Bəli. Otaqlar ayrıca qurulur və fərqli tariflər tətbiq edilə bilər.',
      },
      {
        q: 'Karaoke rezervasiya sistemi neçəyə başa gəlir?',
        a: 'Heselo-da karaoke üçün Kiçik plan 39 AZN/aydan başlayır. Digər planların qiymətləri də açıq şəkildə göstərilir.',
      },
      {
        q: 'İçkiləri əvvəlcədən bronla əlaqələndirmək olar?',
        a: 'Bəli. Əvvəlcədən sifariş bronla əlaqələndirilə, sessiya başlayandan sonra yeni sifarişlər də həmin hesaba əlavə edilə bilər.',
      },
      {
        q: 'Demo necə alınır?',
        a: 'Əlaqə formasında karaoke seçib otaq sayını yazın.',
      },
    ],
    relatedSolutions: ['karaoke', 'lounge', 'reservations', 'pos'],
    ctaTitle: 'Karaoke rezervasiya demo',
    ctaBody: 'Otaq sayınızı yazın — bron və canlı sessiya prosesini göstərək.',
  },

  {
    slug: 'club-pos-vs-excel',
    shortTitle: 'Excel əvəzinə panel',
    h1: 'Klubda Excel və WhatsApp nə vaxt kifayət etmir?',
    seoTitle: 'Excel və WhatsApp əvəzinə klub idarəetmə paneli | Heselo',
    seoDescription:
      'Klubda WhatsApp bronları, Excel cədvəlləri və dəftərlər nə vaxt problem yaradır? İdarəetmə panelinə keçidi qiymətləndirmək üçün praktik bələdçi.',
    keywords: [
      'klub excel idarəetmə',
      'whatsapp rezervasiya problemi',
      'whatsapp bron əvəzinə',
      'excel kassa əvəzinə',
      'dəftər əvəzinə proqram',
      'klub kassa proqramı',
      'məkan idarəetmə paneli',
    ],
    datePublished: '2026-09-07',
    dateModified: '2026-09-23',
    intro:
      'Excel, WhatsApp və dəftər kiçik klubda müəyyən vaxta qədər işləyə bilər. Problem adətən məkan böyüdükdə başlayır: daha çox bron, daha çox işçi və daha çox satış olduqda eyni məlumatı bir neçə yerdə saxlamaq çətinləşir.',
    sections: [
      {
        id: 'pain',
        title: 'Excel və WhatsApp harada çətinlik yaradır?',
        paragraphs: [
          'Bron WhatsApp mesajında, masa statusu lövhədə, ödəniş isə başqa vərəqdə saxlananda işçi vəziyyəti özü birləşdirməli olur. Növbə dəyişdikdə hansı məlumatın aktual olduğu da sual yarada bilər.',
          'WhatsApp mesajı bron qəbul etmək üçün rahatdır, amma rezervasiyaları ümumi cədvəldə, sessiyaları və kassanı ayrıca idarə etmir.',
        ],
      },
      {
        id: 'signals',
        title: 'Panelə keçidi düşünmək üçün hansı siqnallar var?',
        paragraphs: ['Məsələn:'],
        bullets: [
          'Bron sayı artıq əl ilə izləmək çətinləşir',
          'Bir neçə işçi eyni masalara və otaqlara baxır',
          'Satış və kassa məlumatları tez-tez tutuşdurulur',
          'Sahib gün sonu hesabatını ayrıca Excel-dən hazırlayır',
        ],
      },
      {
        id: 'panel',
        title: 'İdarəetmə paneli nəyi birləşdirir?',
        paragraphs: [
          'Rezervasiya, canlı sessiya, satış və kassa eyni iş axınında saxlanılır. Məqsəd bütün prosesləri ağır ERP-yə çevirmək deyil; gündəlik əməliyyat məlumatını bir yerdə toplamaqdır.',
        ],
      },
      {
        id: 'not-erp',
        title: 'Bu, mütləq ağır ERP demək deyil',
        paragraphs: [
          'Klubun ehtiyacı restoran və ya böyük şirkət ERP-si ilə eyni deyil. Əsas ehtiyaclar adətən rezervasiya, resursların canlı vəziyyəti, sessiya, satış və kassa olur.',
        ],
      },
      {
        id: 'heselo',
        title: 'Heselo bu prosesi necə qurur?',
        paragraphs: [
          'Heselo rezervasiya, canlı zal, satış, kassa və anbar funksiyalarını eyni paneldə birləşdirir. Məkanın ölçüsündən asılı olaraq uyğun plan seçilə bilər.',
        ],
      },
    ],
    faq: [
      {
        q: 'Excel-i tamamilə dayandırmaq lazımdır?',
        a: 'Mütləq deyil. Gündəlik rezervasiya və kassa üçün ayrıca panel istifadə oluna bilər, Excel isə digər hesabat və analizlər üçün qala bilər.',
      },
      {
        q: 'WhatsApp bron üçün istifadə edilə bilməz?',
        a: 'İstifadə oluna bilər. Əsas məsələ WhatsApp-dan gələn bronun sonradan ümumi cədvələ daxil edilməsidir.',
      },
      {
        q: 'Kiçik klub üçün panel erkəndir?',
        a: 'Bu, məkanın iş modelindən asılıdır. Əgər bron və kassa hələ rahat idarə olunursa, keçid təcili olmaya bilər. İşçi sayı və aktiv yerlər artdıqca ehtiyac dəyişə bilər.',
      },
      {
        q: 'Excel-dən panelə keçid necə edilir?',
        a: 'Adətən əvvəlcə masa, otaq və ya stansiyalar, daha sonra tariflər və məhsullar qurulur. Köhnə Excel faylları arxiv kimi saxlanıla bilər.',
      },
      {
        q: 'Demo necə alınır?',
        a: 'Məkan tipinizi və masa, otaq və ya stansiya sayını qeyd edin.',
      },
    ],
    relatedSolutions: ['pos', 'reservations', 'gaming', 'inventory'],
    ctaTitle: 'Klub panelini yoxlayın',
    ctaBody: 'Məkan tipinizi yazın — gündəlik iş prosesinizə uyğun ssenarini göstərək.',
  },

  {
    slug: 'heselo-pricing',
    shortTitle: 'Heselo qiymətləri',
    h1: 'Heselo qiyməti nədir? Açıq tariflər izahı',
    seoTitle: 'Heselo qiyməti — məkan tipinə görə açıq tariflər',
    seoDescription:
      'Heselo planları: PS 25, bilyard 29, antikafe 32, karaoke və launj 39 AZN/aydan. Planlar, illik ödəniş, fərdi təklif və pulsuz sınaq/demo.',
    keywords: [
      'Heselo qiymət',
      'Heselo tarif',
      'Heselo neçəyə',
      'klub paneli qiyməti',
      '25 AZN məkan proqramı',
      'klub proqramı pulsuz sınaq',
    ],
    datePublished: '2026-09-19',
    dateModified: '2026-09-23',
    intro:
      'Heselo-nun standart planları açıq şəkildə göstərilir. Başlanğıc qiymət məkan tipinə və həmin məkanın iş modelinə görə dəyişir. Bu bələdçidə tariflərin necə qurulduğunu qısa şəkildə izah edirik.',
    sections: [
      {
        id: 'published',
        title: 'Başlanğıc qiymətlər hansılardır?',
        paragraphs: [
          'Kiçik plan üçün başlanğıc aylıq tariflər belədir: oyun klubu / PS — 25 AZN, bilyard — 29 AZN, antikafe — 32 AZN, karaoke və otaqlı launj — 39 AZN.',
          'Orta və Böyük planların qiyməti, limitləri və illik ödəniş variantları qiymətlər səhifəsindəki cədvəldə göstərilir.',
        ],
      },
      {
        id: 'why-differ',
        title: 'Niyə məkan tipinə görə qiymət dəyişir?',
        paragraphs: [
          'PS stansiyası, bilyard masası və karaoke otağı eyni iş prosesinə malik deyil. Resurs sayı, rezervasiya modeli və sessiyanın idarəsi fərqləndiyi üçün planlar da kateqoriyaya görə ayrılır.',
        ],
      },
      {
        id: 'annual',
        title: 'İllik ödəniş necədir?',
        paragraphs: [
          'İllik planlarda 2 ay hədiyyə edilir. Yəni 12 aylıq istifadə üçün 10 aylıq ödəniş tətbiq olunur. Digər plan detalları qiymətlər səhifəsində göstərilir.',
        ],
      },
      {
        id: 'custom',
        title: 'Fərdi təklif nə vaxt lazımdır?',
        paragraphs: [
          'Standart planlar əksər məkanlar üçün açıqdır. Bir neçə filial və ya standart limitlərdən fərqli ehtiyac olduqda ayrıca təklif almaq mümkündür.',
        ],
      },
    ],
    faq: [
      {
        q: 'Heselo-nun rəsmi qiymətləri haradadır?',
        a: 'Qiymətlər səhifəsində bütün standart planlar və məkan kateqoriyaları göstərilir: https://heselo.online/az/pricing/',
      },
      {
        q: 'Qiymət yalnız danışıq əsasında müəyyən edilir?',
        a: 'Xeyr. Standart planların qiymətləri açıqdır. Fərdi təklif xüsusi ehtiyaclar üçün nəzərdə tutulur.',
      },
      {
        q: 'PS klub üçün minimum tarif nə qədərdir?',
        a: 'Kiçik plan 25 AZN/aydan başlayır.',
      },
      {
        q: 'Karaoke üçün minimum tarif nə qədərdir?',
        a: 'Kiçik plan 39 AZN/aydan başlayır.',
      },
      {
        q: 'Antikafe üçün tarif nə qədərdir?',
        a: 'Kiçik plan 32 AZN/aydan başlayır.',
      },
      {
        q: 'Klub proqramı üçün pulsuz sınaq / demo varmı?',
        a: 'Bəli — pulsuz demo. Məkan tipinizi və masa/otaq/stansiya sayını əlaqə formasında və ya WhatsApp-da yazın; təxminən 15 dəqiqəlik ssenari ilə paneli göstəririk. Kart lazım deyil, demo sonrası abunə öhdəliyi yoxdur.',
      },
    ],
    relatedSolutions: ['gaming', 'karaoke', 'billiards', 'antikafe', 'lounge'],
    ctaTitle: 'Tariflərə baxın',
    ctaBody: 'Məkan tipinizi seçin və uyğun planları müqayisə edin.',
  },

  ...gapEducationalGuides('az'),
  ...comparisonGuides('az'),
]
