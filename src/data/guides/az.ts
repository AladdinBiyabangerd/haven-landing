import type { GuideCopy, GuidesHubCopy } from './types'

export const guidesHubAz: GuidesHubCopy = {
  eyebrow: 'Bələdçilər',
  h1: 'Klub və otaq idarəetməsi haqqında faydalı izahlar',
  intro:
    'Bu bölmə məhsul reklamı deyil — axtarışda tez rast gəlinən suallara aydın cavab verir. Hər yazının sonunda Heselo-nun müvafiq həll səhifələrinə keçid var.',
  seoTitle: 'Bələdçilər — klub və otaq idarəetməsi | Heselo',
  seoDescription:
    'Oyun klubu, karaoke otağı, bilyard və antikafe necə idarə olunur — saatla ödəniş, rezervasiya və kassa izahları.',
  keywords: [
    'oyun klubu idarəetmə sistemi nədir',
    'karaoke otaq rezervasiya',
    'bilyard klubu proqramı',
    'antikafe proqramı',
    'otaqlı launj idarəetmə',
  ],
  cardCta: 'Oxu',
}

export const guidesAz: GuideCopy[] = [
  {
    slug: 'gaming-club-management',
    shortTitle: 'Oyun klubu idarəetməsi',
    h1: 'Oyun klubu idarəetmə sistemi nədir?',
    seoTitle: 'Oyun klubu idarəetmə sistemi nədir? | Heselo bələdçisi',
    seoDescription:
      'PS və oyun klubu necə idarə olunur: stansiya rezervasiyası, canlı sessiya, kassa və anbar. PlayStation klub proqramı izahı.',
    keywords: [
      'oyun klubu idarəetmə sistemi nədir',
      'ps klub proqramı',
      'playstation klub idarəetmə',
      'oyun klubu rezervasiya',
    ],
    datePublished: '2026-08-13',
    dateModified: '2026-08-13',
    intro:
      'Oyun klubu idarəetmə sistemi PS, konsol və ya PC stansiyalarının rezervini, canlı oyunu və kassanı bir paneldə aparmaq üçündür. Sadə taymer stansiyanın boş olub-olmadığını göstərə bilər, amma rezerv tarixçəsi, uzatma, qəlyanaltı satışı və növbə bağlanışını vermir.',
    sections: [
      {
        id: 'why',
        title: 'Niyə PS klublar belə sistem axtarır?',
        paragraphs: [
          'PlayStation klubunda axın saatladır: telefonla rezerv, “hansı konsol boşdur?”, oyun bitəndə uzatma və qəlyanaltı. Bunlar ayrı vərəqlərdə qalanda gecə növbəsi qarışır.',
          'Yaxşı sistem stansiyanı resurs kimi saxlayır — rezerv canlı sessiyaya keçir, ödəniş eyni növbəyə düşür.',
        ],
      },
      {
        id: 'modules',
        title: 'Adətən hansı hissələrdən ibarət olur?',
        paragraphs: ['Praktiki ehtiyaclar oxşardır:'],
        bullets: [
          'Stansiya rezervasiyası (PS, konsol, PC)',
          'Canlı sessiya (vaxt, uzatma, ödəniş)',
          'Sürətli satış (qəlyanaltı/içki)',
          'Kassa növbəsi və sayım',
          'Müştəri tarixçəsi',
        ],
      },
      {
        id: 'timer',
        title: 'Taymer proqramından fərqi nədir?',
        paragraphs: [
          'Taymer yalnız müddəti sayır. Rezerv siyahısı, köçürmə, kassa sayımı və anbar qalığı ayrı qalır. Klub günü bağlananda “kim nə oynayıb, nə satılıb?” sualı Excel-ə qayıdır.',
        ],
      },
      {
        id: 'heselo',
        title: 'Heselo oyun klubunda necə kömək edir?',
        paragraphs: [
          'Heselo stansiyanı cədvəldə və canlı izləmədə eyni resurs kimi saxlayır. PS və PC eyni paneldə ola bilər. Ödəniş qalıqları serverdə hesablanır.',
        ],
      },
    ],
    faq: [
      {
        q: 'Yalnız PS klub üçündür, yoxsa PC də olar?',
        a: 'Hər ikisi. Fərqli stansiya tipləri eyni cədvəl və kassa axınında qurulur.',
      },
      {
        q: 'Saat bitəndə uzatma necə qeyd olunur?',
        a: 'Canlı sessiyada vaxt uzadılır; ödəniş eyni qeydə düşür — ayrı vərəq lazım deyil.',
      },
      {
        q: 'Demo necə əldə edilir?',
        a: 'Əlaqə formasında məkan tipi olaraq oyun klubu / PS seçin və stansiya sayını qeyd edin.',
      },
    ],
    relatedSolutions: ['gaming', 'billiards', 'reservations', 'pos'],
    ctaTitle: 'Oyun klubu üçün demo',
    ctaBody: 'PS və stansiya sayınızı yazın — rezervasiya və canlı axını göstəririk.',
  },
  {
    slug: 'karaoke-room-booking',
    shortTitle: 'Karaoke otaq rezervasiyası',
    h1: 'Karaoke otaqları necə rezerv edilir?',
    seoTitle: 'Karaoke otaq rezervasiyası necə işləyir? | Heselo bələdçisi',
    seoDescription:
      'Karaoke otaq rezervasiyası: cədvəl, sessiya müddəti, əlavə satış və kassa. Karaoke idarəetmə sistemi izahı.',
    keywords: [
      'karaoke otaq rezervasiya',
      'karaoke idarəetmə sistemi',
      'karaoke otaq bron',
      'karaoke proqramı',
    ],
    datePublished: '2026-08-13',
    dateModified: '2026-08-13',
    intro:
      'Karaoke məkanında vahid otaqdır. Rezerv yalnız “boş saat seçmək” deyil: qonaq gələndə eyni qeyd canlı sessiyaya çevrilməli, uzatma və içki eyni axında qalmalıdır.',
    sections: [
      {
        id: 'why',
        title: 'Otaq rezervi niyə itir?',
        paragraphs: [
          'Telefon, WhatsApp və kağız cədvəl eyni otağa iki qrupu yaza bilər. Bir neçə otaq eyni vaxtda dolanda resepsiya statusu gec görür.',
        ],
      },
      {
        id: 'flow',
        title: 'Yaxşı karaoke axını necə görünür?',
        paragraphs: [
          'Cədvəldə otaq rezerv olunur. Qonaq gələndə sessiya açılır. Müddət bitəndə uzatma və ya ödəniş eyni qeyddədir. Kassa növbəni bağlayır.',
        ],
        bullets: ['Otaq cədvəli', 'Canlı sessiya', 'Əlavə satış', 'Növbə bağlanışı'],
      },
      {
        id: 'form',
        title: 'Yalnız onlayn bron forması kifayətdirmi?',
        paragraphs: [
          'Bron səhifəsi otağın içindəki axını idarə etmir. Ofisiant məhsul əlavə edəndə və kassa bağlananda eyni məlumat lazımdır.',
        ],
      },
      {
        id: 'heselo',
        title: 'Heselo karaoke-də nə verir?',
        paragraphs: [
          'Otaqlar ayrı resursdur. Cədvəl, canlı izləmə və kassa eyni paneldədir. Karaoke + launj otaqları birlikdə qurula bilər.',
        ],
      },
    ],
    faq: [
      {
        q: 'Bir neçə otaq eyni lövhədə görünürmü?',
        a: 'Bəli. Bütün otaqlar eyni cədvəl və canlı izləmədədir.',
      },
      {
        q: 'Əvvəlcədən sifariş varmı?',
        a: 'Rezerv formasında etiket və əvvəlcədən sifariş sahələri var.',
      },
      {
        q: 'Demo necə alınır?',
        a: 'Əlaqə formasında karaoke seçin və otaq sayını yazın.',
      },
    ],
    relatedSolutions: ['karaoke', 'lounge', 'reservations', 'pos'],
    ctaTitle: 'Karaoke üçün demo',
    ctaBody: 'Otaq sayınızı yazın — rezerv və canlı axını göstəririk.',
  },
  {
    slug: 'billiards-club-management',
    shortTitle: 'Bilyard klubu idarəetməsi',
    h1: 'Bilyard klubu necə idarə olunur?',
    seoTitle: 'Bilyard klubu idarəetmə sistemi nədir? | Heselo bələdçisi',
    seoDescription:
      'Bilyard masası və otaq rezervasiyası, canlı oyun, vaxt və kassa necə birləşir — bilyard klubu proqramı izahı.',
    keywords: [
      'bilyard klubu proqramı',
      'bilyard idarəetmə sistemi',
      'bilyard masa rezervasiya',
      'bilyard vaxt sayğacı',
    ],
    datePublished: '2026-08-13',
    dateModified: '2026-08-13',
    intro:
      'Bilyard klubunda masa saatla işləyir. Hansı masa boşdur, oyun nə vaxt başlayıb, əlavə içki yazılıb, yoxsa yox — bunlar ayrı qalanda gecə kassası uzanır.',
    sections: [
      {
        id: 'why',
        title: 'Lövhə və telefon niyə kifayət etmir?',
        paragraphs: [
          'Lövhə real vaxtda yenilənməyə bilər; telefon rezervi masanın canlı statusunu görmür. VIP otaq və adi masa ayrı cədvəldə qalanda toqquşma olur.',
        ],
      },
      {
        id: 'time',
        title: 'Vaxt və ödəniş necə bağlanmalıdır?',
        paragraphs: [
          'Oyun başlayanda sessiya açılır. Pauza, uzatma və məhsul eyni qeyddə qalır. Qiymət resurs və müddət qaydalarına görə hesablanır; kassa növbəni bağlayır.',
        ],
      },
      {
        id: 'mix',
        title: 'Bilyard + karaoke və ya launj?',
        paragraphs: [
          'Qarışıq məkanlarda masa və otaq eyni paneldə olmalıdır. Əks halda kassa iki alətdən yığılır.',
        ],
      },
      {
        id: 'heselo',
        title: 'Heselo bilyardda necə işləyir?',
        paragraphs: [
          'Hər masa və otaq resursdur. Cədvəl, canlı oyun və kassa eyni gün qaydalarındadır. Sadə saat sayğacından fərqli olaraq rezerv tarixçəsi və sayım da var.',
        ],
      },
    ],
    faq: [
      {
        q: 'VIP otaq və adi masa birlikdə ola bilər?',
        a: 'Bəli. Hər ikisi eyni cədvəl və kassa axınındadır.',
      },
      {
        q: 'Yalnız taymer kifayətdirmi?',
        a: 'Kiçik zalda bəlkə; rezerv, anbar və növbə bağlanışı lazımdırsa, tam panel daha az xəta verir.',
      },
      {
        q: 'Demo necə alınır?',
        a: 'Əlaqə formasında bilyard seçin və masa sayını yazın.',
      },
    ],
    relatedSolutions: ['billiards', 'gaming', 'karaoke', 'pos'],
    ctaTitle: 'Bilyard üçün demo',
    ctaBody: 'Masa sayınızı yazın — canlı oyun axını göstəririk.',
  },
  {
    slug: 'room-lounge-management',
    shortTitle: 'Otaqlı launj idarəetməsi',
    h1: 'Otaqlı launj necə idarə olunur?',
    seoTitle: 'Otaqlı launj idarəetmə sistemi nədir? | Heselo bələdçisi',
    seoDescription:
      'Otaqlı launj: VIP otaq rezervasiyası, sessiya, əlavə satış və kassa. Launj otaq proqramı izahı.',
    keywords: [
      'otaqlı launj proqramı',
      'launj otaq rezervasiya',
      'vip otaq rezervasiya',
      'launj idarəetmə sistemi',
    ],
    datePublished: '2026-08-13',
    dateModified: '2026-08-13',
    intro:
      'Otaqlı launj açıq kafe deyil: qonaq otaq götürür, sessiya uzana bilər, içki və qəlyanaltı əlavə olunur. İdarəetmə otaq cədvəlini canlı sessiya və kassa ilə birləşdirməlidir.',
    sections: [
      {
        id: 'unit',
        title: 'Niyə vahid otaqdır?',
        paragraphs: [
          'Açıq masa axını otağın qapalı sessiyasını vermir. Bir otaq eyni vaxtda iki qrupa verilməməlidir; status lövhədə yox, cədvəldə görünməlidir.',
        ],
      },
      {
        id: 'flow',
        title: 'Gündəlik axın necədir?',
        paragraphs: [
          'Rezerv otağa yazılır. Qonaq gələndə sessiya açılır. Əlavə vaxt və məhsul eyni qeyddə qalır. Günün sonunda kassa otaq doluluğu ilə uyğun gəlməlidir.',
        ],
      },
      {
        id: 'mix',
        title: 'Launj + karaoke və ya bilyard',
        paragraphs: [
          'Çox məkan qarışıqdır. Eyni panel otaq, masa və stansiyanı bir kassada saxlayır — iki proqram yığmaq lazım olmur.',
        ],
      },
      {
        id: 'heselo',
        title: 'Heselo otaqlı launj üçün nə edir?',
        paragraphs: [
          'Otaq karaoke ilə eyni resurs məntiqində qurulur. Cədvəl, canlı izləmə, kassa və müştəri tarixçəsi bir paneldədir.',
        ],
      },
    ],
    faq: [
      {
        q: 'Açıq zal da eyni sistemdə ola bilər?',
        a: 'Bəli. Masa və otaq eyni cədvəl və kassadadır.',
      },
      {
        q: 'Bu, kouorkinq proqramıdır?',
        a: 'Xeyr. Fokus saatla/sessiya ilə işləyən otaqlı əyləncə məkanlarıdır — PS, karaoke, bilyard, antikafe, launj.',
      },
      {
        q: 'Demo necə alınır?',
        a: 'Əlaqə formasında otaqlı launj seçin və otaq sayını yazın.',
      },
    ],
    relatedSolutions: ['lounge', 'karaoke', 'antikafe', 'reservations'],
    ctaTitle: 'Otaqlı launj üçün demo',
    ctaBody: 'Otaq sayınızı yazın — rezervasiya və canlı axını göstəririk.',
  },
{
    slug: 'antikafe-management-system',
    shortTitle: 'Antikafe idarəetməsi',
    h1: 'Antikafe idarəetmə sistemi nədir?',
    seoTitle: 'Antikafe idarəetmə sistemi nədir? | Heselo bələdçisi',
    seoDescription:
      'Antikafe idarəetmə sistemi nədir, saatla ödəniş, rezervasiya və kassa necə birləşir — praktiki izah. Antikafe proqramı seçimi.',
    keywords: [
      'antikafe idarəetmə sistemi nədir',
      'antikafe proqramı',
      'antikafe rezervasiya necə aparılır',
      'saatla ödəniş sistemi',
    ],
    datePublished: '2026-08-12',
    dateModified: '2026-08-12',
    intro:
      'Antikafe idarəetmə sistemi saatla ödənişli məkanın gündəlik işini — masa və otaq rezervasiyası, canlı sessiya, məhsul satışı, kassa və bəzən anbar — bir paneldə aparmaq üçündür. Bu, yalnız saat sayan timer və ya yalnız kassa deyil; məqsəd lövhə, messencer və Excel-i eyni iş gününə bağlamaqdır.',
    sections: [
      {
        id: 'what',
        title: 'Antikafe biznes modeli nədir?',
        paragraphs: [
          'Antikafelərdə qonaq adətən vaxt üçün ödəyir: masa, divan küncü, otaq və ya bəzən PC stansiyası. Çay, qəlyanaltı və içkilər əlavə gəlir gətirir. Axın tez dəyişir — rezervsiz qonaq, telefon rezervi və gecə saatları eyni resurslarda toqquşur.',
          'Ona görə antikafe proqramı yalnız “neçə saat oturdu?” sualını deyil, hansı masa boşdur, rezerv nə vaxtdır və gün necə bağlanır suallarını da cavablamalıdır.',
        ],
      },
      {
        id: 'modules',
        title: 'Sistem adətən nəyi əhatə edir?',
        paragraphs: ['Praktik ehtiyaclar oxşar modullardan ibarət olur:'],
        bullets: [
          'Masa və otaq rezervasiyası (cədvəl, köçürmə, ləğv)',
          'Canlı sessiya (aktiv yer, vaxt, məhsul, ödəniş)',
          'Kassa axını (növbə, hesabat, sayım)',
          'Məhsul kataloqu və anbar (çay, qəlyanaltı)',
          'Müştəri qeydləri və sadə statistika',
          'İşçi icazələri',
        ],
      },
      {
        id: 'hourly',
        title: 'Saatla ödəniş necə idarə olunmalıdır?',
        paragraphs: [
          'Saat sayan ayrı proqram rezervasiya tarixçəsi və kassa sayımını verməyə bilər. Yaxşı axında rezerv canlı sessiyaya keçir; vaxt bitəndə uzatma və ödəniş eyni qeyddə qalır. Nağd, bank və POS ayrı izlənir — gecə növbəsində qarışıqlıq azalır.',
        ],
      },
      {
        id: 'vs-gaming',
        title: 'Antikafe ilə gaming club fərqi nədir?',
        paragraphs: [
          'Gaming club-da fokus tez-tez PC/console stansiyasındadır; antikafedə masa, otaq və lounge atmosferi ön plandadır. Amma texniki ehtiyac eynidir: resurs cədvəli + canlı sessiya + kassa. Bir panel hər iki tip zonanı idarə edə bilər.',
        ],
      },
      {
        id: 'choose',
        title: 'Antikafe proqramı seçərkən nəyə baxmaq lazımdır?',
        paragraphs: [
          'Rezervdən ödənişə qədər bir axın varmı? Rezervsiz satış eyni kataloqdan gedirmi? Keçmiş gün və sayım saxlanırmı? Panel AZ / EN / RU dillərindədirmi? Qiymət şəffafdırmı?',
          'Marketinq siyahısından çox real gecə növbənizi yoxlayın — xüsusilə masa/otaq sayı artanda.',
        ],
      },
      {
        id: 'heselo',
        title: 'Heselo antikafe üçün necə uyğundur?',
        paragraphs: [
          'Heselo məkan idarəetmə sistemidir: cədvəl, canlı izləmə, kassa, məhsullar və anbar eyni paneldədir. Antikafe, gaming club və bilyard eyni resurs məntiqində qurula bilər. Ödəniş qalıqları serverdə hesablanır.',
          'Antikafe yönümlü kommersiya səhifəmiz və aşağıdakı rezervasiya/kassa həllərinə keçid var.',
        ],
      },
    ],
    faq: [
      {
        q: 'Antikafe üçün ayrıca “timer proqramı” kifayət edirmi?',
        a: 'Kiçik miqyasda bəlkə; amma rezerv, anbar və kassa sayımı lazımdırsa, tam məkan sistemi daha az xəta verir.',
      },
      {
        q: 'Otaq rezervasiyası dəstəklənirmi?',
        a: 'Bəli. Otaq resurs kimi cədvəldə idarə oluna bilər — karaoke VIP otaqları ilə eyni məntiq.',
      },
      {
        q: 'Demo necə əldə edilir?',
        a: 'Əlaqə formasını doldurun — masa/otaq sayını və tipik gün axınınızı qeyd edin.',
      },
    ],
    relatedSolutions: ['antikafe', 'gaming', 'reservations', 'pos'],
    ctaTitle: 'Antikafe axını üçün demo',
    ctaBody: 'Rezervasiyadan kassa bağlanışına qədər göstəririk.',
  },
]
