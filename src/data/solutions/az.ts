import type { SolutionCopy, SolutionsHubCopy } from './types'

export const solutionsHubAz: SolutionsHubCopy = {
  eyebrow: 'Biznes həlləri',
  h1: 'Hansı tip məkanınız var?',
  intro:
    'PS klubu, karaoke, bilyard, antikafe və ya otaqlı launj — tipinizi seçin. Aşağıdakı səhifə məhz o zalın gündəlik işinə görə yazılıb.',
  howTitle: 'Haradan başlamaq',
  howBody:
    'PlayStation / konsol satırsınızsa — oyun klubu. Karaoke otağı — karaoke. Qəlyanlı VIP otaq — launj. Bir neçə tip eyni hesabda ola bilər.',
  seoTitle: 'Məkan tiplərinə görə həllər — PS, karaoke, bilyard | Heselo',
  seoDescription:
    'Hər tipə ayrı səhifə: oyun/PS klubu, karaoke, bilyard, antikafe, otaqlı launj — rezervasiya, kassa və anbar. Pulsuz demo.',
  keywords: [
    'oyun klubu proqramı',
    'ps klub proqramı',
    'karaoke otaq rezervasiya',
    'bilyard klubu proqramı',
    'antikafe proqramı',
  ],
  cardCta: 'Ətraflı',
  primaryTitle: 'Məkan tipləri',
  featuresTitle: 'Panel modulları',
}

export const solutionsAz: SolutionCopy[] = [
  {
    slug: 'billiards',
    shortTitle: 'Bilyard',
    h1: 'Bilyard klubu proqramı və idarəetmə sistemi',
    seoTitle: 'Bilyard klubu proqramı — masa, tarif, kassa | Heselo',
    seoDescription:
      'Bilyard klubu proqramı: masa taymeri, rezerv, pauza, gecə-gündüz tarif və kassa bir paneldə. {billiards} {currency}/aydan — pulsuz demo.',
    keywords: [
      'bilyard klubu proqramı',
      'bilyard klub idarəetmə proqramı',
      'bilyard idarəetmə sistemi',
      'bilyard masa rezervasiya',
      'bilyard masa taymeri',
      'bilyard cədvəl sistemi',
    ],
    intro:
      'Bilyard klubu proqramı masanın saat və ya dəqiqə ilə satışını, bronu, canlı oyunu, pauzanı və ödənişi bir qeydə yığır. Heselo hər masanı ayrıca qurur, rezervasiyanı canlı sessiyaya çevirir və növbəni kassada bağlayır — bu, mətbəx restoran POS-u deyil.',
    whoTitle: 'Kimlər üçündür?',
    whoBody:
      'Bilyard salonları, qarışıq launj + bilyard məkanları və masa və ya otaq rezervasiyası ilə vaxt üzrə ödəniş aparan klublar üçün. Bakıda və regionda AZ/EN/RU bulud panellə işləmək istəyənlər üçün uyğundur.',
    problemsTitle: 'Bilyard klublarında tez rast gəlinən problemlər',
    problems: [
      'Hansı masa boşdur — lövhə və telefon uyğun gəlmir',
      'Oyun vaxtı və əlavə məhsul ayrı qeyd olunur',
      'Gecə növbəsində kassa qarışır',
      'VIP otaq və adi masa eyni cədvəldə görünmür',
      'Operator hər şeyi görür, sahibkar isə növbə yekununu ayıra bilmir',
    ],
    howTitle: 'Heselo bilyard üçün nə verir?',
    howBody:
      'Axın dörd addımdır: qonaq bron edir və ya boş masa seçir → oyun başlayanda canlı sessiya açılır → bar və qəlyanaltı eyni hesaba yazılır → ödəniş növbəyə düşür. Qiymət masa növü, müddət və sizin gecə/həftəsonu qaydalarınıza görə hesablanır.',
    sections: [
      {
        id: 'what',
        title: 'Bilyard klubu proqramı nədir və nə edir?',
        paragraphs: [
          'Bilyard klubu proqramı — masanın vaxtını uçota alan, tarifə görə məbləği hesablayan və bar satışını eyni sessiya hesabına yazan idarəetmə paneli. Sadə taymer yalnız dəqiqə sayır; bilyard klubu proqramı isə bron cədvəlini, canlı oyunu, pauzanı, kassa növbəsini və anbar qalığını bir yerdə saxlayır.',
          'Tipik gün belə gedir: resepsiya boş masanı görür, walk-in və ya bronlu qonağı yerləşdirir, sessiya açır. Qonaq içki və ya qəlyanaltı alırsa, sətir eyni hesaba yazılır. Oyun bitəndə sistem vaxt və məhsul məbləğini birləşdirir; növbənin sonunda hesabat hazır olur.',
        ],
      },
      {
        id: 'billing',
        title: 'Gündüz, gecə və həftəsonu tarif; pauza və uzatma',
        paragraphs: [
          'Bilyard salonlarında tez-tez gündüz və gecə tarifi, həftəsonu əlavəsi və saatlıq və ya dəqiqəlik sayım olur. Pauza oyun fasiləsində vaxt sayımını dayandırır; uzatma isə eyni sessiya üzərində davam etdirir. Heselo-da bu qaydaları paneldə qurursunuz — canlı sessiyada məbləğ avtomatik yenilənir.',
          'Nümunə (öz tarifinizlə dəyişin): gündüz 12 AZN/saat, gecə 18 AZN/saat; qonaq 21:00-da başlayıb 23:30-a qədər oynayıbsa və 20 dəqiqə pauza edibsə, sistem yalnız oyun dəqiqələrini gecə tarifinə görə sayır. VIP otaq və snuker masası üçün ayrı saatlıq haqq qoymaq olar.',
          'Saat başına və zərərsizlik hesablamasını “Bilyard masası tarifləri — saat, gecə, həftəsonu” bələdçisində addım-addım açırıq.',
        ],
      },
      {
        id: 'tables',
        title: 'Masa, VIP otaq və masa növləri',
        paragraphs: [
          'Rus, pul və snuker masaları, VIP otaq və adi salon — hər biri ayrı resurs ola bilər və ayrı tarif daşıya bilər. Bir paneldə boş/məşğul statusu görünür; bron köçürmə və ləğv tarixçədə qalır.',
          'Beləcə VIP otağın saatı ümumi salonun dəqiqəlik haqqından fərqli qurulur. Bir neçə masa eyni növbədə satılır, amma hesabatda masa tipinə görə ayrılır.',
        ],
      },
      {
        id: 'bar',
        title: 'Bar və qəlyanaltı eyni hesabda',
        paragraphs: [
          'Çay, qəhvə, qəlyanaltı və bar satışı oyun vaxtı ilə eyni sessiya hesabına yazılır. Növbə bağlanışında vaxt gəliri və məhsul gəliri bir hesabatda görünür — axşam Excel-də tutuşdurma ehtiyacı azalır.',
          'Rezervasiyasız yalnız içki alan qonaq üçün sürətli satış da eyni məhsul siyahısından işləyir — ayrıca kassa proqramı lazım deyil.',
        ],
      },
      {
        id: 'mixed',
        title: 'Qarışıq məkan: bilyard + PS + karaoke',
        paragraphs: [
          'Bir çox klubda bilyard masası, PlayStation stansiyası və karaoke otağı eyni binadadır. Heselo bunları bir bulud paneldə saxlayır: hər yer tipi öz cədvəli və tarifi ilə, amma kassa növbəsi ortaqdır.',
          'AZ-da tez müqayisə olunan Club Timer, Clopos və Excel axını bu qarışıq ssenaridə tez dağılır. Beynəlxalq müqayisə üçün CueDesk, BilliardPOS, BCMS və Biliardo.kz bələdçilərinə baxın — qiymət açıqlığı tək fərq deyil; dil və qarışıq məkan dəstəyi də önəmlidir.',
        ],
      },
      {
        id: 'cloud',
        title: 'Bulud paneli: planşet və telefondan nəzarət',
        paragraphs: [
          'Heselo brauzerdə işləyən bulud paneldır: resepsiyada planşet və ya kompüter kifayətdir, öz serverinizi saxlamaq lazım deyil. İnternet olan yerdən cədvəl və aktiv oyun sessiyalarına baxmaq olar.',
          'İnternet kəsiləndə panellə iş dayanır — oflayn kassa rejimi yoxdur. Buna görə stabil bağlantı və ehtiyat mobil internet praktikada vacibdir. Lokal Windows quraşdırması tələb edən bilyard proqramlarından fərq budur: yeniləmə və backup buludda gedir.',
        ],
      },
      {
        id: 'cash',
        title: 'Kassa növbəsi, səlahiyyət və hesabat',
        paragraphs: [
          'Növbə açılır, sessiyalar və satışlar yazılır, günün sonunda növbə bağlanır. Nağd, kart və digər ödəniş üsulları növbə hesabatında görünür.',
          'Operator masa aça, satış yaza bilər; sahibkar növbə və gəlir hesabatını ayrı hüquqla görür. Kim nəyi dəyişib deyə audit izi saxlanılır.',
        ],
      },
      {
        id: 'limits',
        title: 'Heselo nəyi etmir',
        paragraphs: [
          'İşıq relye / masa lampasının avtomatik idarəetməsi yoxdur — bu ayrıca avadanlıq sahəsidir (məsələn BilliardPOS ESP32 relyesi). QR üzvlük check-in də hazırda dəstəklənmir.',
          'Heselo E-Kassa (fiskal kassa) deyil və bank POS terminalını əvəz etmir. Mətbəx/KDS restoran POS-u da deyil: əsas gəlir ofisiant sifarişidirsə, iiko və ya oxşar həll daha uyğundur. Loyalty / klub kartı modulu ayrıca yoxdur — müştəri qeydi və sessiya tarixçəsi var.',
        ],
      },
      {
        id: 'price',
        title: 'Qiymət',
        paragraphs: [
          'Bilyard üçün Kiçik plan ayda {billiards} {currency}-dən başlayır — qiymətlər səhifəsindəki cari tarifdir. Orta və Böyük planlar, illik ödəniş və Kiçik planda 6 masa həddi orada açıq yazılıb. Demo pulsuzdur, kart tələb olunmur.',
          'Birdəfəlik lisenziya modeli deyil — aylıq (və ya illik) bulud abunəliyidir. Rəqiblərin çoxu da qiymətini açıq yazır; fərqimiz AZ/EN/RU panel və qarışıq bilyard+PS+karaoke məkan üçün bir hesabdır.',
        ],
      },
    ],
    featuresTitle: 'Bilyard üçün uyğun funksiyalar',
    features: [
      {
        title: 'Masa və otaq cədvəli',
        desc: 'Bütün masalar eyni cədvəldə — bron, köçürmə və ləğv bir yerdən görünür.',
      },
      {
        title: 'Canlı oyun sessiyası',
        desc: 'Aktiv masa statusu, pauza, uzatma, əlavə satış və ödəniş eyni sessiya üzərindədir.',
      },
      {
        title: 'Vaxta uyğun qiymət',
        desc: 'Saatlıq və ya dəqiqəlik tarif; gecə və həftəsonu qaydalarını özünüz təyin edirsiniz.',
      },
      {
        title: 'Kassa, səlahiyyət və müştərilər',
        desc: 'Növbə, hesabat, müştəri tarixçəsi; operator və admin hüquqlarını ayıra bilərsiniz.',
      },
    ],
    differTitle: 'Sadəcə “saat sayğacı” deyil',
    differBody:
      'Yalnız vaxt sayan alətlər rezervasiya tarixçəsini, anbarı və kassa sayımını həll etmir. Heselo bilyard satışlarını məkanın digər satışları ilə eyni növbə üzrə birləşdirir. Mətbəx və ofisiant sifarişi əsas işinizdirsə, restoran POS seçin; masa vaxtı satırsınızsa, bilyard klubu proqramı lazımdır. Daha dərin oxu: müqayisə və saat haqqı bələdçiləri.',
    compare: {
      title: 'Bilyard proqramı seçərkən nəyə baxmaq lazımdır?',
      intro:
        'Bazarda masa taymeri, bulud panel, Windows proqramı və işıq relyeli sistemlər var. Aşağıdakı cədvəl Heselo-nun nəyi dəstəklədiyini açıq göstərir — güclü tərəfləri və boşluqları gizlətmirik.',
      headers: ['Xüsusiyyət', 'Heselo'],
      rows: [
        ['Masa taymeri və tariflər', 'Bəli — saat/dəqiqə, pauza, uzatma'],
        ['Gecə / gündüz və həftəsonu tarif', 'Bəli — qaydaları özünüz qurursunuz'],
        ['Rezervasiya və cədvəl', 'Bəli — masa və otaq bir cədvəldə'],
        ['Bar / kafe satış (sessiya hesabına)', 'Bəli — növbə ilə birlikdə'],
        ['Platforma', 'Web / bulud (planşet və ya kompüter)'],
        ['İşıq relye / avtomatik lampa', 'Xeyr — ayrıca avadanlıq sahəsidir'],
        ['Qiymət', '{billiards}–{billiardsHigh} {currency}/ay (açıq planlar)'],
        ['Dillər', 'AZ, EN, RU'],
      ],
    },
    faq: [
      {
        q: 'Bilyard klubu proqramı nədir?',
        a: 'Bilyard klubu proqramı masa vaxtını, bronu, canlı sessiyanı, bar satışını və kassa növbəsini bir paneldə aparan idarəetmə sistemidir. Sadə taymer yalnız dəqiqə sayır; Heselo isə cədvəldən ödənişə qədər axını birləşdirir.',
      },
      {
        q: 'Bilyard masaları ayrıca qurulur?',
        a: 'Bəli. Hər masa və ya otaq ayrıca təyin olunur; cədvəl və canlı zal eyni məlumatı paylaşır. Rus, pul və snuker masaları üçün fərqli tarif qoya bilərsiniz.',
      },
      {
        q: 'Otaq və masa eyni sistemdə ola bilər?',
        a: 'Bəli. VIP otaq və adi masa eyni cədvəl, sessiya və kassa qaydaları ilə işləyir. Qarışıq launj + bilyard məkanlarda da eyni panel kifayət edir.',
      },
      {
        q: 'Gecə və həftəsonu tarifləri təyin etmək olur?',
        a: 'Bəli. Masa növünə və vaxt qaydasına görə tarif qurursunuz: gündüz, gecə və ya həftəsonu fərqi paneldə saxlanır. Demo zamanı öz saatlarınızla yoxlaya bilərsiniz.',
      },
      {
        q: 'İşçi yalnız masa aça bilərmi, kassanı görməsin?',
        a: 'Səlahiyyətləri ayırmaq olar. Operatorun gündəlik işi (masa açmaq, bağlamaq, satış yazmaq) ilə sahibkarın növbə və gəlir hesabatları fərqli hüquqlarla idarə olunur. Dəqiq matris demoda göstərilir.',
      },
      {
        q: 'İşıq relye və ya masa lampasını avtomatik idarə edir?',
        a: 'Xeyr. Heselo planşet və ya kompüterdə taymer, rezervasiya və kassa paneli kimi işləyir. Masa üstü lampanı avtomatik yandıran relye bloku ayrıca avadanlıqdır; belə inteqrasiyanı hazırda təklif etmirik.',
      },
      {
        q: 'E-Kassa və QR üzvlük check-in varmı?',
        a: 'Xeyr. Heselo fiskal E-Kassa və bank terminalını əvəz etmir; QR üzvlük check-in də hazırda yoxdur. Ödəniş üsulunu növbədə qeyd edirsiniz; fiskal və bank avadanlığını ayrıca qoşursunuz.',
      },
      {
        q: 'CueDesk və ya BilliardPOS-dan nə fərqi var?',
        a: 'CueDesk çoxvaxt QR üzvlük və mobil idarəetməyə fokuslanır; BilliardPOS ESP32 işıq relyesi, TV taymer və API ilə seçilir. Heselo AZ/EN/RU bulud paneldır: masa bronu, canlı sessiya, bar satışı və kassa bir yerdə — qarışıq bilyard+PS+karaoke məkanlar da daxil. Ətraflı müqayisə bələdçilərdədir.',
      },
      {
        q: 'Heselo hansı bilyard klubları üçün uyğun deyil?',
        a: 'Əsas işiniz mətbəx, menyu və ofisiant sifarişidirsə, restoran POS daha uyğundur. Relye ilə işıq kilidi mütləq tələbdirsə, xüsusi avadanlıq həllərinə baxın. Heselo masa və otaq vaxtını satan klublar üçündür.',
      },
      {
        q: 'Lövhə, WhatsApp və Excel ilə işləməkdən nə fərqi var?',
        a: 'Lövhədə və mesajlarda kimin bron etdiyi görünür, amma oyunun nə vaxt başladığı, əlavə satış və ödəniş başqa yerdə qalır. Heselo-da bron cədvəldən canlı sessiyaya keçir, qiymət müddətə görə hesablanır, ödəniş növbəyə yazılır. Gün sonunda Excel-də məbləğləri yenidən toplamağa ehtiyac qalmır.',
      },
      {
        q: 'Bilyard klubu proqramı neçəyə başa gəlir?',
        a: 'Bilyard üçün Kiçik plan ayda {billiards} {currency}-dən başlayır — qiymətlər səhifəsindəki cari tarif. Orta və Böyük planlar, illik ödəniş və limitlər orada açıq yazılıb. Bir neçə filial və ya standart plana sığmayan həcm üçün ayrıca fərdi təklif hazırlayırıq.',
      },
      {
        q: 'Demo necə alınır, kart lazımdır?',
        a: 'Əlaqə formasını doldurun — masa və otaq sayını, iş saatlarınızı yazın. Demo pulsuzdur, kart məlumatı istənmir. Cədvəli, canlı oyun sessiyasını və kassa bağlanışını sizin məkana yaxın ssenari ilə göstəririk.',
      },
    ],
    related: ['gaming', 'karaoke', 'reservations', 'pos'],
    ctaTitle: 'Bilyard klubu üçün demo',
    ctaBody: 'Masa sayınızı və tipik növbənizi bizə yazın — cədvəl və canlı sessiyanı göstəririk.',
  },
  {
    slug: 'karaoke',
    shortTitle: 'Karaoke',
    h1: 'Karaoke idarəetmə sistemi',
    seoTitle: 'Karaoke otaq rezervasiyası və idarəetmə sistemi | Heselo',
    seoDescription:
      'Karaoke otaq rezervasiyası, canlı sessiya, kassa və əlavə satış bir paneldə. Karaoke məkanı üçün proqram — pulsuz demo.',
    keywords: [
      'karaoke otaq rezervasiya',
      'karaoke idarəetmə sistemi',
      'karaoke proqramı',
      'restoran pos karaoke',
      'karaoke üçün dine alternativası',
    ],
    intro:
      'Karaoke məkanında əsas vahid otaqdır: rezervasiya, sessiya müddəti, əlavə içki və yemək və ödəniş. Karaoke idarəetmə sistemi otaq cədvəlini canlı sessiya və kassa ilə birləşdirməlidir. Restoran POS (Dine, Clopos) masa və QR üçündür. Otaq-vaxt satan məkanlar üçün isə Heselo-nun iş prosesi daha uyğundur.',
    whoTitle: 'Kimlər üçündür?',
    whoBody:
      'Otaq əsaslı karaoke klubları, launj + karaoke və bir neçə otağı eyni cədvəldə idarə edən məkanlar üçün.',
    problemsTitle: 'Karaoke məkanlarında tipik problemlər',
    problems: [
      'Otaq bronları telefon qeydlərində itir',
      'Sessiya uzandıqda əlavə vaxt və məhsul ayrı yazılır',
      'Bir neçə otağın eyni vaxtda statusu qarışır',
      'Günün sonunda kassa ilə otaq doluluğu uyğun gəlmir',
    ],
    howTitle: 'Heselo karaoke üçün nə verir?',
    howBody:
      'Heselo otaqları cədvəldə bron edir. Qonaq gələndə sessiya canlı zalda açılır; məhsul və ödəniş eyni sessiyadadır. Bir neçə otaq eyni paneldə görünür — kassa növbə və hesabat ilə günü bağlayır.',
    featuresTitle: 'Karaoke üçün əsas funksiyalar',
    features: [
      {
        title: 'Otaq rezervasiyası',
        desc: 'Cədvəl, bron siyahısı, köçürmə və ləğv.',
      },
      {
        title: 'Canlı otaq sessiyası',
        desc: 'Status, məhsul əlavəsi, qəbz və ödəniş.',
      },
      {
        title: 'Müştəri tarixçəsi',
        desc: 'Təkrar gələn qonaqlar üçün kart və ziyarət tarixçəsi.',
      },
      {
        title: 'Kassa və statistika',
        desc: 'Növbə bağlanışı və ödəniş növləri üzrə hesabat.',
      },
    ],
    differTitle: 'Yalnız bron forması kifayət etmir',
    differBody:
      'Onlayn bron səhifəsi otaqda gedən işi idarə etmir. Heselo brondan ödənişə qədər bütün axını eyni paneldə saxlayır — zal komandası və kassa eyni növbə qaydaları ilə işləyir.',
    faq: [
      {
        q: 'Karaoke otaqları masa kimi qurulur?',
        a: 'Otaqlar ayrıca qurulur; cədvəl və canlı zal otaq statusunu göstərir.',
      },
      {
        q: 'Əvvəlcədən sifariş dəstəklənirmi?',
        a: 'Rezervasiya formasında etiket və əvvəlcədən sifariş sahələri var — paneldəki bron forması ilə eyni sahələrdir.',
      },
      {
        q: 'Mətbəxi olan karaoke iiko və ya Clopos-u saxlamalıdır?',
        a: 'Tam mətbəx, KDS və ofisiant sifarişi gündəlik işin əsasıdırsa, restoran POS-u saxlamaq məntiqlidir. Heselo otaq cədvəli, sessiya müddəti, uzatma və kassa növbəsi üçündür. Əsas gəlir otaq vaxtından gəlirsə və menyu sadədirsə, içki və qəlyanaltı satışı da Heselo-da eyni sessiyaya yazılır.',
      },
      {
        q: 'Bronları WhatsApp-da qəbul edirik — nə dəyişəcək?',
        a: 'Qonaq yenə WhatsApp-da və ya zənglə yaza bilər, amma bron mesajda qalmır — otaq cədvəlinə düşür. Kimin hansı otağı neçədən neçəyə tutduğunu bütün komanda eyni ekranda görür. Qonaq gələndə həmin bron canlı sessiyaya keçir, uzatma və ödəniş də orada qalır.',
      },
      {
        q: 'Karaoke üçün qiymət harada göstərilib?',
        a: 'Karaoke üçün Kiçik plan ayda {karaoke} {currency}-dən başlayır. Orta və Böyük planlar, illik ödəniş və limitlər qiymətlər səhifəsində açıq yazılıb. Demonu əlaqə formasından pulsuz istəyə bilərsiniz — kart məlumatı tələb olunmur, otaq sayınızı yazmaq kifayətdir.',
      },
      {
        q: 'Karaoke, bilyard və launj eyni paneldə ola bilər?',
        a: 'Bəli. Karaoke otaqları, bilyard masaları və launj otaqları eyni məkanda ayrıca qurulur, amma eyni cədvəli, canlı zalı və kassa növbəsini paylaşır. Günün sonunda bütün zonaların satışı bir hesabatda görünür — ayrı proqramlar arasında məbləğ tutuşdurmaq lazım gəlmir.',
      },
    ],
    related: ['reservations', 'lounge', 'gaming', 'pos'],
    ctaTitle: 'Karaoke məkanı üçün demo',
    ctaBody: 'Otaq sayınızı bizə yazın — cədvəl və canlı sessiyanı göstəririk.',
  },
  {
    slug: 'gaming',
    shortTitle: 'Oyun klubu',
    h1: 'Oyun klubu (PS) idarəetmə sistemi',
    seoTitle: 'Oyun klubu proqramı və PS klub idarəetmə sistemi | Heselo',
    seoDescription:
      'PS, konsol və PC stansiya rezervasiyası, canlı sessiya, kassa və anbar — oyun klubu proqramı bir paneldə. Pulsuz demo.',
    keywords: [
      'oyun klubu proqramı',
      'ps klub proqramı',
      'playstation klub idarəetmə',
      'konsol klub proqramı',
      'iiko alternativ klub',
      'playstation kafe proqramı',
    ],
    intro:
      'Oyun və PS klublarında stansiya və ya masa saatla işləyir; bron, canlı oyun və kassa eyni vaxtda gedir. Oyun klubu idarəetmə sistemi stansiya cədvəlini canlı sessiya ilə birləşdirməlidir — lövhə və taymer kifayət etmir. iiko axtaranlar üçün qeyd: Heselo mətbəx POS-u deyil. Sadə PS taymer axtaranlar üçün isə stansiya vaxtının satışı burada bir yerdədir.',
    whoTitle: 'Kimlər üçündür?',
    whoBody:
      'PlayStation klubları, konsol launjları, PC klubları və qarışıq oyun məkanları — stansiya/masa rezervasiyası, canlı sessiya və kassa lazım olan yerlər üçün.',
    problemsTitle: 'Oyun klublarında tipik problemlər',
    problems: [
      'Hansı stansiya boşdur — lövhə gecikir',
      'Vaxt bitəndə ödəniş və uzatma ayrı qeyd olunur',
      'Qəlyanaltı və içki satışı kassa ilə uyğun gəlmir',
      'Gecə növbəsində hesab-kitab uzanır',
    ],
    howTitle: 'Heselo oyun klubu üçün nə verir?',
    howBody:
      'Heselo stansiya və masaları eyni cədvəldə saxlayır. Bron cədvəldədir; oyun başlayanda canlı sessiya açılır. Məhsul satışı və ödəniş eyni qeyddədir — kassa növbəni bağlayır, anbar qəlyanaltı və içkini izləyir.',
    featuresTitle: 'Oyun klubu üçün funksiyalar',
    features: [
      {
        title: 'Stansiya və masa cədvəli',
        desc: 'Stansiya/masa rezervasiyası, köçürmə və ləğv.',
      },
      {
        title: 'Canlı sessiya',
        desc: 'Aktiv yerlər, status və ödəniş.',
      },
      {
        title: 'Sürətli satış',
        desc: 'Bron olmadan qəlyanaltı/içki satışı.',
      },
      {
        title: 'Kassa və anbar',
        desc: 'Növbə, hesabat və qalıq izləmə.',
      },
    ],
    differTitle: 'Sadə taymer proqramından fərqi',
    differBody:
      'Sadə taymer rezervasiya tarixçəsi, müştəri kartı, anbar və kassa sayımını vermir. Heselo klubun gündəlik rezervasiya, satış və kassa işlərini bir paneldə aparır.',
    faq: [
      {
        q: 'PC və konsol eyni sistemdə ola bilər?',
        a: 'Bəli. Fərqli stansiya tipləri eyni cədvəl, sessiya və kassa qaydaları ilə idarə olunur.',
      },
      {
        q: 'İcazələr necə işləyir?',
        a: 'İşçilərə səhifə və əməliyyat səviyyəsində icazə verilir; vacib əməliyyatlarda qoruma kodu ola bilər.',
      },
      {
        q: 'Hansı oyun klubları üçün uyğun deyil?',
        a: 'Kompüterləri uzaqdan idarə etmək, avtomatik kilidləmək və ya oyun lisenziyalarını paylamaq əsas ehtiyacdırsa, ixtisaslaşmış PC klub proqramına baxın. Heselo stansiya bronu, canlı sessiya, qəlyanaltı satışı və kassa növbəsi üçündür. PS və konsol klubları, qarışıq oyun məkanları üçün ən uyğundur.',
      },
      {
        q: 'iiko istifadə edirik — saxlamaq lazımdır?',
        a: 'Klubda tam mətbəx, KDS və menyu sifarişi varsa, iiko həmin hissə üçün qala bilər. Heselo stansiya vaxtı, bron, uzatma və klub kassası üçündür. Əksər PS klublarında isə satış içki və qəlyanaltıdan ibarətdir — bunu Heselo-nun sürətli satışı və anbarı əhatə edir, ayrıca restoran POS-a ehtiyac qalmır.',
      },
      {
        q: 'Excel və WhatsApp ilə müqayisədə nə dəyişir?',
        a: 'Excel-də stansiya vaxtı sonradan yazılır, WhatsApp-da bron mesajlar arasında itir. Heselo-da bron cədvəldədir, oyun başlayanda canlı sessiya açılır, uzatma və qəlyanaltı eyni qeydə düşür. Növbə bağlananda kassa məbləği hazır olur — axşam Excel cədvəllərini tutuşdurmaq lazım gəlmir.',
      },
      {
        q: 'PS klubu üçün qiymət nə qədərdir?',
        a: 'PS və oyun klubu üçün Kiçik plan ayda {gaming} {currency}-dən başlayır. Orta və Böyük planlar, illik ödəniş və limitlər qiymətlər səhifəsindədir. Pulsuz demo üçün əlaqə formasına stansiya sayını yazın — kart məlumatı tələb olunmur, cədvəli və canlı sessiyanı göstəririk.',
      },
    ],
    related: ['billiards', 'karaoke', 'reservations', 'pos'],
    ctaTitle: 'Oyun klubu üçün demo',
    ctaBody: 'Stansiya və konsol (PS) sayınızı bizə yazın — cədvəl və canlı sessiyanı göstəririk.',
  },
  {
    slug: 'antikafe',
    shortTitle: 'Antikafe',
    h1: 'Antikafe proqramı və idarəetmə sistemi',
    seoTitle: 'Antikafe proqramı — vaxt uçotu, dəqiqəlik tarif və kassa | Heselo',
    seoDescription:
      'Antikafe üçün bulud proqram: qonaq vaxtının uçotu, dəqiqəlik və saatlıq tarif, paket və stop-çek, çay/qəlyanaltı eyni hesabda, kassa növbəsi. Ayda {antikafe} {currency}-dən, pulsuz demo.',
    keywords: [
      'antikafe proqramı',
      'antikafe idarəetmə sistemi',
      'antikafe idarə etmə proqramı',
      'vaxta görə ödəniş',
      'dəqiqəlik tarif',
      'antikafe kassa',
    ],
    intro:
      'Antikafe proqramı qonağın məkanda keçirdiyi vaxtı sayır, dəqiqəlik və ya saatlıq tarifə görə məbləği avtomatik hesablayır və çay, qəlyanaltı satışını eyni hesaba yazır. Heselo bunu brauzerdə işləyən bulud paneldə edir: kompüterə quraşdırma və ayrıca server lazım deyil.',
    whoTitle: 'Kimlər üçündür?',
    whoBody:
      'Vaxta görə ödənişli masa və otaq, PC və ya stolüstü oyun zonası, çay və qəlyanaltı satışı olan antikafe, taym-kafe və oxşar launj məkanları üçün. Bir neçə zal və otaq eyni paneldə idarə olunur.',
    problemsTitle: 'Antikafelərdə tipik problemlər',
    problems: [
      'Hansı masa və ya otaq boşdur — resepsiya gecikir',
      'Dəqiqəlik, paket və stop-çek əllə hesablanır, səhv çıxır',
      'Çay və qəlyanaltı vaxt hesabına düşmür',
      'Günün sonunda kassa ilə satış uyğun gəlmir',
    ],
    howTitle: 'Heselo antikafe üçün nə verir?',
    howBody:
      'Axın dörd addımdır: qonaq gəlir və ya bron edilir → canlı sessiya açılır → məhsul eyni hesaba yazılır → ödəniş növbəyə düşür. Masa, otaq və stansiyalar ayrı resurs kimi qurulur; tarif qaydaları paneldə saxlanılır.',
    sections: [
      {
        id: 'what',
        title: 'Antikafe proqramı nədir və nə edir?',
        paragraphs: [
          'Antikafe proqramı — qonağın oturduğu vaxtı uçota alan, tarifə görə məbləği hesablayan və eyni anda çay/qəlyanaltı satışını idarə edən idarəetmə paneli. Sadə taymer yalnız dəqiqə sayır; antikafe proqramı isə bron cədvəlini, canlı sessiyanı, kassa növbəsini və anbar qalığını bir yerdə saxlayır.',
          'Tipik gün belə gedir: resepsiya boş yeri görür, walk-in və ya bronlu qonağı yerləşdirir, sessiya açır. Qonaq çay və ya qəlyanaltı alırsa, sətir eyni hesaba yazılır. Çıxışda sistem vaxt və məhsul məbləğini birləşdirir; növbənin sonunda hesabat hazır olur.',
        ],
      },
      {
        id: 'billing',
        title: 'Vaxta görə ödəniş: dəqiqəlik, saatlıq, paket və stop-çek',
        paragraphs: [
          'Antikafedə üç əsas model var: dəqiqəlik haqq (qısa vizitlər üçün ədalətli), saatlıq haqq (sadə hesablama) və stop-çek — müəyyən hədddən sonra vaxt məbləği artmır. Paketlər isə məsələn “3 saat” və ya “günlük” kimi əvvəlcədən satılan bloklardır. Heselo-da bu qaydaları paneldə qurursunuz; canlı sessiyada məbləğ avtomatik yenilənir.',
          'Nümunə (öz tarifinizlə dəyişin): ilk saat 5 {currency}, sonrası dəqiqəlik 0,08 {currency}, günlük stop-çek 15 {currency}. Qonaq 2 saat 20 dəqiqə qalıbsa, sistem saat + dəqiqə hissəsini hesablayır; stop-çek həddinə çatıbsa, vaxt məbləği o hədddən yuxarı getmir. Çay və qəlyanaltı ayrıca sətir kimi eyni hesaba düşür.',
          'Tarif və zərərsizlik hesablamasını addım-addım “Antikafe icarə və saat haqqı hesablama” bələdçisində açırıq — orada kirayə, maaş və qonaq-saat düsturu var.',
        ],
      },
      {
        id: 'zones',
        title: 'Masa, zona və otaqlar',
        paragraphs: [
          'Ümumi zal, VIP otaq, PlayStation zonası və ya kino otağı — hər biri ayrı resurs ola bilər və ayrı tarif daşıya bilər. Bir paneldə boş/məşğul statusu görünür; bron köçürmə və ləğv tarixçədə qalır.',
          'Beləcə VIP otağın saatı ümumi zalın dəqiqəlik haqqından fərqli qurulur. PS stansiyası və masa eyni növbədə satılır, amma hesabatda yer tipinə görə ayrılır.',
        ],
      },
      {
        id: 'minibar',
        title: 'Pulsuz çay/kofe və mini-bar',
        paragraphs: [
          'Bir çox antikafedə çay və kofe “daxil” sayılır, amma peçenye və mini-bar ödənişlidir. Pulsuz istehlakın xərcini anbar uçotu ilə izləmək olar: qalıq azalır, gəlir isə vaxt tarifindən gəlir. Ödənişli qəlyanaltı isə sessiya hesabına satış kimi yazılır.',
          'Rezervasiyasız yalnız çay alan qonaq üçün sürətli satış da eyni məhsul siyahısından işləyir — ayrıca kassa proqramı lazım deyil.',
        ],
      },
      {
        id: 'resources',
        title: 'Stolüstü oyunlar və konsollar',
        paragraphs: [
          'Heselo stolüstü oyun və konsolu resurs kimi cədvəldə saxlaya bilir: məsələn PS stansiyası ayrıca yer tipidir, bron və sessiya onun üzərində açılır. Oyunun fiziki inventarını (neçə Monopoly qutusu qalıb) ayrıca anbar məhsulu kimi izləmək mümkündür.',
          'Avtomatik konsol söndürmə və ya smart-plug ilə işıq/TV idarəetməsi hazırda yoxdur — bu ayrı avadanlıq sahəsidir. Vaxt uçotu və kassa paneldədir; elektrik kəsintisi isə roadmap mövzusu kimi qalır.',
        ],
      },
      {
        id: 'cloud',
        title: 'Bulud sistemi: telefondan nəzarət',
        paragraphs: [
          'Heselo brauzerdə işləyən bulud paneldır: resepsiyada planşet və ya kompüter kifayətdir, öz serverinizi saxlamaq lazım deyil. İnternet olan yerdən cədvəl və aktiv sessiyalara baxmaq olar.',
          'İnternet kəsiləndə panellə iş dayanır — oflayn kassa rejimi yoxdur. Buna görə stabil bağlantı və ehtiyat mobil internet praktikada vacibdir. Lokal quraşdırma tələb edən masaüstü antikafe proqramlarından fərq budur: yeniləmə və backup buludda gedir.',
        ],
      },
      {
        id: 'cash',
        title: 'Kassa növbəsi və hesabat',
        paragraphs: [
          'Növbə açılır, sessiyalar və satışlar yazılır, günün sonunda növbə bağlanır. Nağd, kart və digər ödəniş üsulları növbə hesabatında görünür — Excel-də axşam “tutuşdurma” əvəzinə panel cəmini verir.',
          'Anbar sayımı qəlyanaltı qalığını yeniləyir. Kim nəyi dəyişib deyə audit izi saxlanılır — bir neçə admin eyni anda işləyəndə bu xüsusilə lazımdır.',
        ],
      },
      {
        id: 'limits',
        title: 'Heselo nəyi etmir',
        paragraphs: [
          'Heselo E-Kassa (fiskal kassa) deyil və bank POS terminalını əvəz etmir. Azərbaycanda fiskal və bank avadanlığını özünüz qoşursunuz; Heselo vaxt, sessiya, növbə və anbarı aparır.',
          'Mətbəx/KDS olan restoran POS-u da deyil. Əsas gəlir sifarişdirsə, iiko və ya oxşar restoran həlli daha uyğundur. Klub kartı/bonus abunəliyi hazırda ayrıca loyalty modul kimi yoxdur — müştəri qeydi və sessiya tarixçəsi var.',
        ],
      },
      {
        id: 'price',
        title: 'Qiymət',
        paragraphs: [
          'Antikafe üçün Kiçik plan ayda {antikafe} {currency}-dən başlayır. Orta və Böyük planlar, illik ödəniş və limitlər qiymətlər səhifəsində açıqdır. Demo pulsuzdur, kart tələb olunmur.',
          'Birdəfəlik lisenziya modeli deyil — aylıq (və ya illik) bulud abunəliyidir. Bir neçə filial standart plana sığmırsa, fərdi təklif hazırlayırıq.',
        ],
      },
    ],
    featuresTitle: 'Antikafe üçün funksiyalar',
    features: [
      {
        title: 'Vaxt uçotu və tariflər',
        desc: 'Dəqiqəlik, saatlıq, paket və stop-çek — canlı sessiyada avtomatik məbləğ.',
      },
      {
        title: 'Zona və otaq bronu',
        desc: 'Masa, VIP, PS zonası — ayrı cədvəl, köçürmə və tarixçə.',
      },
      {
        title: 'Çay və mini-bar eyni hesabda',
        desc: 'Sessiya satışları və sürətli satış eyni məhsul siyahısından.',
      },
      {
        title: 'Kassa və anbar',
        desc: 'Növbə bağlanışı, hesabat, qalıq və sayım.',
      },
    ],
    differTitle: 'Sadə taymer və ya Excel-dən fərqi',
    differBody:
      'Yalnız saat sayan proqram rezervasiya tarixçəsi, anbar və kassa sayımını vermir. Heselo antikafenin gündəlik bron, vaxt uçotu, satış və kassa işlərini bir bulud paneldə aparır — oyun klubu və bilyard ilə eyni qaydada. Daha dərin oxu: “Antikafe idarəetmə sistemi nədir?” və “Antikafe necə açılır” bələdçiləri.',
    faq: [
      {
        q: 'Antikafe proqramı neçəyə başa gəlir? Aylıq yoxsa birdəfəlik?',
        a: 'Antikafe üçün Kiçik plan ayda {antikafe} {currency}-dən başlayır — bulud abunəliyidir, birdəfəlik lisenziya deyil. Orta və Böyük planlar, illik ödəniş və limitlər qiymətlər səhifəsindədir. Demo pulsuzdur, kart tələb olunmur.',
      },
      {
        q: 'Dəqiqəlik tarif və stop-çek necə qurulur?',
        a: 'Paneldə yer tipinə tarif qaydası təyin edirsiniz: dəqiqəlik və ya saatlıq haqq, paket və günlük stop-çek (vaxt məbləğinin tavanı). Canlı sessiyada sistem məbləği bu qaydalara görə yeniləyir; çay və qəlyanaltı ayrıca sətir kimi əlavə olunur.',
      },
      {
        q: 'İlk saat sabit, sonrası dəqiqəlik hesablamaq olar?',
        a: 'Tarif qaydalarını öz modelinizə uyğun qurursunuz — sabit saat bloku və dəqiqəlik davam demo zamanı sizin nümunənizlə yoxlanılır. Dəqiqəlik, saatlıq, paket və stop-çek eyni paneldə dəstəklənir.',
      },
      {
        q: 'Proqram Azərbaycan dilindədir?',
        a: 'Bəli. Panel AZ, EN və RU dillərində işləyir. Heselo Bakıda yaradılıb; demo və onboarding onlayn aparılır.',
      },
      {
        q: 'Bulud sistemi internet kəsiləndə necə işləyir?',
        a: 'Panel internet tələb edir — oflayn kassa rejimi yoxdur. Kəsintidə ehtiyat mobil internet tövsiyə olunur. Davamlı iş üçün stabil bağlantı vacibdir.',
      },
      {
        q: 'E-Kassa və bank POS terminalı ilə inteqrasiya var?',
        a: 'Xeyr. Heselo fiskal E-Kassa və bank terminalını əvəz etmir. Ödəniş üsulunu növbədə qeyd edirsiniz; fiskal və bank avadanlığını ayrıca qoşursunuz.',
      },
      {
        q: 'Klub kartı, abunəlik və bonus sistemi var?',
        a: 'Müştəri qeydi və sessiya tarixçəsi var. Ayrı loyalty / klub kartı / bonus abunəliyi modulu hazırda yoxdur — belə ehtiyac varsa, demo zamanı dürüst danışırıq.',
      },
      {
        q: 'PlayStation zonası və stolüstü oyunlar eyni sistemdə idarə olunur?',
        a: 'Bəli. PS stansiyası və masa/otaq ayrı yer tipi kimi qurulur; hər birinin öz tarifi və cədvəli ola bilər. Oyun qutularını anbar məhsulu kimi də izləmək olar. Avtomatik konsol söndürmə isə yoxdur.',
      },
      {
        q: 'Neçə admin eyni anda işləyə bilər? İşçi icazələri?',
        a: 'Bir neçə istifadəçi eyni paneldə işləyə bilər; kim nəyi dəyişib deyə audit izi qalır. Plan limitləri və rol detalları qiymətlər səhifəsində və demoda açılır.',
      },
      {
        q: 'Pulsuz çay və kofe xərcini necə izləyim?',
        a: 'Pulsuz istehlakı anbar uçotu ilə izləyin: qalıq azalır, gəlir isə vaxt tarifindən gəlir. Ödənişli mini-bar sətirləri sessiya hesabına yazılır. Zərərsizlik üçün qonaq-saat düsturuna bələdçimizdə baxın.',
      },
      {
        q: 'Hansı antikafelər üçün uyğun deyil?',
        a: 'Əsas gəlir mətbəx sifarişidirsə və vaxt satmırsınızsa, restoran POS-u daha uyğundur. Heselo masa, otaq və ya stansiya vaxtını satan antikafe və taym-kafe üçündür.',
      },
      {
        q: 'Demo necə əldə edilir?',
        a: 'Əlaqə formasını doldurun — masa/otaq sayını və tarif modelinizi (dəqiqəlik, saatlıq, stop-çek) yazın. Ya da 2 günlük demo hesabını özünüz açın — kart lazım deyil.',
      },
    ],
    related: ['gaming', 'billiards', 'reservations', 'pos'],
    ctaTitle: 'Antikafe üçün demo istəyin',
    ctaBody: 'Masa və otaq sayınızı yazın — vaxt uçotundan kassa bağlanışına qədər göstəririk.',
  },
  {
    slug: 'lounge',
    shortTitle: 'Otaqlı launj',
    h1: 'Otaqlı launj idarəetmə sistemi',
    seoTitle: 'Launj bar idarəetmə proqramı — VIP otaq rezervasiyası | Heselo',
    seoDescription:
      'Launj bar proqramı: VIP otaq rezervasiyası, canlı sessiya, bar satışı, kassa və anbar bir paneldə. Otaqlı launj üçün — ayda {lounge} {currency}-dən, pulsuz demo.',
    keywords: [
      'launj bar idarəetmə proqramı',
      'launj bar proqramı',
      'otaqlı launj proqramı',
      'launj otaq rezervasiya',
      'launj idarəetmə sistemi',
      'vip otaq rezervasiya',
    ],
    intro:
      'Otaqlı launjda əsas vahid otaqdır: rezervasiya, sessiya müddəti, içki/qəlyanaltı və ödəniş. Launj idarəetmə sistemi otaq cədvəlini canlı sessiya və kassa ilə birləşdirməlidir — telefon qeydləri və lövhə kifayət etmir.',
    whoTitle: 'Kimlər üçündür?',
    whoBody:
      'VIP otaqlı launjlar, saatla otaq satan klub-launjlar və karaoke/bilyard ilə qarışıq otaq məkanları üçündür. Açıq zal deyil, otaqla işləyən məkanlar üçündür.',
    problemsTitle: 'Otaqlı launjlarda tipik problemlər',
    problems: [
      'Otaq bronları mesajlarda itir',
      'Sessiya uzandıqda əlavə vaxt və məhsul ayrı yazılır',
      'Bir neçə VIP otağın eyni vaxtda statusu qarışır',
      'Günün sonunda kassa ilə otaq doluluğu uyğun gəlmir',
    ],
    howTitle: 'Heselo otaqlı launj üçün nə verir?',
    howBody:
      'Heselo otaqları cədvəldə bron edir. Qonaq gələndə sessiya canlı zalda açılır; məhsul və ödəniş eyni sessiyadadır. Bir neçə otaq eyni paneldə görünür — kassa növbə və hesabat ilə günü bağlayır.',
    featuresTitle: 'Otaqlı launj üçün əsas funksiyalar',
    features: [
      {
        title: 'Otaq rezervasiyası',
        desc: 'Cədvəl, bron siyahısı, köçürmə və ləğv.',
      },
      {
        title: 'Canlı otaq sessiyası',
        desc: 'Status, məhsul əlavəsi, qəbz və ödəniş.',
      },
      {
        title: 'Müştəri tarixçəsi',
        desc: 'Təkrar gələn qonaqlar üçün kart və ziyarət tarixçəsi.',
      },
      {
        title: 'Kassa və statistika',
        desc: 'Növbə bağlanışı və ödəniş növləri üzrə hesabat.',
      },
    ],
    differTitle: 'Açıq zal proqramından fərqi',
    differBody:
      'Açıq masa proqramı qapalı otaq sessiyasını idarə etmir. Heselo hər otağı ayrıca saxlayır — karaoke və antikafe ilə eyni qaydada.',
    faq: [
      {
        q: 'Launj otaqları karaoke otağı kimi qurulur?',
        a: 'Bəli. Hər otaq ayrıca qurulur; cədvəl və canlı zal otaq statusunu göstərir.',
      },
      {
        q: 'Açıq zal və otaq eyni sistemdə ola bilər?',
        a: 'Bəli. Masa, otaq və stansiya eyni cədvəl, sessiya və kassa qaydaları ilə idarə olunur.',
      },
      {
        q: 'Launj bar üçün ayrıca proqram lazımdır?',
        a: 'Əksər hallarda yox. Launj bar otaq və ya masa vaxtı, içki və qəlyanaltı satışı ilə işləyirsə, Heselo bronu, canlı sessiyanı, bar satışını, kassa növbəsini və anbarı bir paneldə aparır. Ayrıca restoran proqramı yalnız tam mətbəx, KDS və mürəkkəb menyu sifarişi əsas iş olanda lazımdır.',
      },
      {
        q: 'Hansı launjlar üçün uyğun deyil?',
        a: 'Otaq və ya masa vaxtı satmayan, yalnız açıq zalda ofisiant sifarişi ilə işləyən bar-restoran üçün restoran POS daha uyğundur. Heselo VIP otaqlı launjlar, saatla otaq satan klub-launjlar və karaoke/bilyard ilə qarışıq məkanlar üçündür — otaq və vaxt əsas olanda.',
      },
      {
        q: 'Mətbəx üçün iiko-nu nə vaxt saxlamaq lazımdır?',
        a: 'Launjda tam mətbəx, KDS ekranı və sifarişin mətbəxə ötürülməsi gündəlik işin əsasıdırsa, iiko və ya oxşar restoran POS-u saxlamaq məntiqlidir. Heselo isə otaq cədvəli, sessiya, uzatma və klub kassası üçündür. Menyu sadədirsə — içki və qəlyanaltı — satış Heselo-da eyni sessiyaya yazılır.',
      },
      {
        q: 'Bronları WhatsApp-da qəbul edirik — nə dəyişəcək?',
        a: 'Qonaq yenə WhatsApp-da yazır, amma administrator bronu dərhal otaq cədvəlinə salır. Hansı VIP otağın neçədən neçəyə tutulduğunu bütün komanda görür, köçürmə və ləğv tarixçədə qalır. Qonaq gələndə bron canlı sessiyaya keçir — uzatma və məhsul əlavəsi ayrı yerdə yazılmır.',
      },
      {
        q: 'Launj bar proqramının qiyməti nə qədərdir?',
        a: 'Otaqlı launj üçün Kiçik plan ayda {lounge} {currency}-dən başlayır. Orta və Böyük planlar, illik ödəniş və limitlər qiymətlər səhifəsindədir. Pulsuz demo üçün əlaqə formasına otaq sayını yazın — kart məlumatı istənmir, cədvəli və canlı sessiyanı sizin ssenari ilə göstəririk.',
      },
    ],
    related: ['karaoke', 'antikafe', 'billiards', 'reservations'],
    ctaTitle: 'Otaqlı launj üçün demo',
    ctaBody: 'Otaq sayınızı bizə yazın — cədvəl və canlı sessiyanı göstəririk.',
  },
  {
    slug: 'reservations',
    shortTitle: 'Rezervasiya',
    h1: 'Masa və otaq rezervasiya sistemi',
    seoTitle: 'Rezervasiya sistemi və masa rezervasiya sistemi | Heselo',
    seoDescription:
      'Masa rezervasiya sistemi və otaq rezervasiyası: cədvəl, bron siyahısı, köçürmə, ləğv və canlı sessiya ilə əlaqə. Pulsuz demo.',
    keywords: [
      'rezervasiya sistemi',
      'masa rezervasiya sistemi',
      'otaq rezervasiya sistemi',
      'masa bron sistemi',
    ],
    intro:
      'Rezervasiya sistemi yalnız “boş vaxt seçmək” deyil. Masaya və ya otağa yazılan bron canlı sessiya, ödəniş və tarixçə ilə bağlı olmalıdır. Heselo cədvəl və rezervasiya siyahısını eyni məlumat üzərində saxlayır.',
    whoTitle: 'Kimlər üçündür?',
    whoBody:
      'Oyun klubu, karaoke, bilyard, antikafe və otaqlı launjda masa, otaq və stansiya rezervasiyasını peşəkar şəkildə aparmaq istəyənlər üçün.',
    problemsTitle: 'Ayrı rezervasiya alətlərinin çatışmazlığı',
    problems: [
      'Cədvəl ilə canlı zal bir-birini görmür',
      'Köçürmə və ləğv tarixçəsi itir',
      'Əvvəlcədən sifariş və depozit ayrı yerdə qalır',
      'Keçmiş günlərdə kim nə dəyişib — bilinmir',
    ],
    howTitle: 'Heselo rezervasiya üçün nə verir?',
    howBody:
      'Heselo cədvəldə gün və həftə üzrə masa, otaq və stansiyaları göstərir. Rezervasiya siyahısında müştəri, vaxt, etiket, əvvəlcədən sifariş, depozit, köçürmə və ləğv var. Qonaq gələndə eyni bron canlı sessiyaya keçir.',
    featuresTitle: 'Rezervasiya funksiyaları',
    features: [
      {
        title: 'Cədvəl',
        desc: 'Masa, otaq və stansiyalar eyni görünüşdə.',
      },
      {
        title: 'Rezervasiya siyahısı',
        desc: 'Filtr, status, tarixçə və əməliyyatlar.',
      },
      {
        title: 'Sessiyaya keçid',
        desc: 'Brondan aktiv sessiyaya bir yol.',
      },
      {
        title: 'Müştəri kartı',
        desc: 'Bron müştəri kartı və ziyarət tarixçəsi ilə bağlıdır.',
      },
    ],
    differTitle: 'Niyə “sadəcə bron” kifayət etmir?',
    differBody:
      'Bron aləti kassa və anbarı həll etmir. Heselo rezervasiyanı məkanın gündəlik işinə bağlayır — ona görə “rezervasiya sistemi” axtarışı ilə “məkan idarəetməsi” eyni məhsulda birləşir.',
    faq: [
      {
        q: 'Masa və otaq eyni rezervasiya sistemindədir?',
        a: 'Bəli. Hər ikisi ayrıca qurulur və cədvəldə, bron siyahısında görünür.',
      },
      {
        q: 'Keçmiş gün qorunurmu?',
        a: 'Bəli. Keçmiş günə aid dəyişikliklər məkan qaydalarına görə qorunur.',
      },
      {
        q: 'Onlayn bron formasından nə ilə fərqlənir?',
        a: 'Onlayn bron forması yalnız boş vaxtı seçdirir; qonaq gələndən sonra nə baş verdiyini bilmir. Heselo-da eyni bron canlı sessiyaya keçir, ödəniş, əvvəlcədən sifariş və müştəri tarixçəsi ilə bağlanır. Beləliklə cədvəl, zal və kassa eyni məlumatı görür — bron bir yerdə, ödəniş başqa yerdə qalmır.',
      },
      {
        q: 'Telefon və WhatsApp bronları necə aparılır?',
        a: 'Administrator zəng və ya mesajla gələn bronu cədvələ yazır: müştəri, vaxt, masa və ya otaq, etiket. Hamı eyni cədvəli gördüyü üçün eyni yerin iki dəfə bron olunması riski azalır. Köçürmə və ləğv də tarixçədə qalır — “kim dəyişdi?” sualının cavabı həmişə var.',
      },
      {
        q: 'Bir neçə məkan tipi eyni cədvəldə ola bilər?',
        a: 'Bəli. PS stansiyası, bilyard masası, karaoke və ya launj otağı ayrıca qurulur, amma eyni cədvəldə və bron siyahısında görünür. Qarışıq məkanda administrator bütün zonaları bir ekrandan idarə edir, kassa da eyni növbədə bağlanır.',
      },
      {
        q: 'Qiymət harada göstərilib?',
        a: 'Rezervasiya və cədvəl panelin əsas hissəsidir; qiymət məkan tipinə görə plandan asılıdır. Kiçik plan PS/oyun üçün {gaming}, bilyard üçün {billiards}, antikafe üçün {antikafe}, karaoke və launj üçün {karaoke} {currency}/aydan başlayır. Tam cədvəl qiymətlər səhifəsindədir, demo isə pulsuzdur.',
      },
    ],
    related: ['karaoke', 'lounge', 'gaming', 'pos'],
    ctaTitle: 'Rezervasiya üçün demo',
    ctaBody: 'Cədvəl və bron prosesini məkanınıza uyğun göstəririk.',
  },
  {
    slug: 'pos',
    shortTitle: 'Kassa',
    h1: 'Kassa idarəetmə sistemi',
    seoTitle: 'Kassa proqramı və klub kassa sistemi | Heselo',
    seoDescription:
      'Kassa proqramı: növbə, əməliyyatlar, kassa hesabatı və sayım. Klub kassa sistemi rezervasiya və canlı zal ilə eyni paneldə.',
    keywords: [
      'kassa proqramı',
      'klub kassa proqramı',
      'kassa idarəetmə sistemi',
      'kassa sayımı',
      'excel kassa əvəzinə',
      'sərfəli klub paneli',
    ],
    intro:
      'Kassa proqramı yalnız “ödəniş düyməsi” deyil. Növbə açılışı, əməliyyatlar, hesabat və sayım günün sonunda sahibə aydın cavab verməlidir. Heselo-da kassa rezervasiya və canlı sessiya ilə eyni iş gününə bağlıdır — Excel və WhatsApp əvəzinə.',
    whoTitle: 'Kimlər üçündür?',
    whoBody:
      'Oyun klubu, karaoke, bilyard, antikafe və otaqlı launjda növbə üzrə nağd/bank/POS izləmək, günü bağlamaq və sayım aparmaq istəyənlər üçün.',
    problemsTitle: 'Zəif kassa uçotunun nəticəsi',
    problems: [
      'Növbə bağlananda məbləğlər uyğun gəlmir',
      'Nağd və kart qarışır',
      'Hansı sessiya ödənilib — axtarmaq lazım gəlir',
      'Sayım ayrıca kağızda qalır',
    ],
    howTitle: 'Heselo kassa üçün nə verir?',
    howBody:
      'Heselo növbəni açır, əməliyyatları yazır, hesabatı göstərir və sayımla bağlayır. Canlı zaldakı ödənişlər eyni gün və növbə qaydaları ilə gedir — bağlanmış günlərin tarixçəsi saxlanılır.',
    featuresTitle: 'Kassa funksiyaları',
    features: [
      {
        title: 'Növbə açılışı və bağlanışı',
        desc: 'Gün və növbə ayrı qalır.',
      },
      {
        title: 'Əməliyyatlar',
        desc: 'Nağd, bank və POS ödənişləri.',
      },
      {
        title: 'Kassa hesabatı',
        desc: 'Dövr üzrə icmal.',
      },
      {
        title: 'Kassa sayımı',
        desc: 'Bağlanışda sayım və uyğunsuzluğun aşkarlanması.',
      },
    ],
    differTitle: 'Ayrı kassa + ayrı rezervasiya yoxdur',
    differBody:
      'Bir çox məkan bir alətdə bron, digərində kassa aparır. Heselo kassanı eyni panelə gətirir — ona görə günün sonunda “haradan gəldi bu məbləğ?” sualı azalır.',
    faq: [
      {
        q: 'Ödəniş məbləğləri harada hesablanır?',
        a: 'Qalığı və statusu sistem avtomatik hesablayır. Ekran yalnız nəticəni göstərir.',
      },
      {
        q: 'Kassa sayımı varmı?',
        a: 'Bəli. Kassa sayımı növbə/gün bağlanışı üçün nəzərdə tutulub.',
      },
      {
        q: 'Excel və WhatsApp-dakı kassa hesabından nə fərqi var?',
        a: 'Excel-də məbləğlər gün sonunda əllə köçürülür, WhatsApp-da isə “bu qədər nağd qaldı” mesajı olur — yoxlamaq çətindir. Heselo-da hər ödəniş sessiyaya və növbəyə bağlı yazılır, bağlanışda sayım aparılır və fərq dərhal görünür. Bağlanmış günlərin tarixçəsi də saxlanılır.',
      },
      {
        q: 'Nağd, kart və bank ödənişləri ayrı görünür?',
        a: 'Bəli. Əməliyyatlar nağd, bank və POS kimi ödəniş növü ilə yazılır, kassa hesabatı isə növbə və dövr üzrə hər növü ayrıca göstərir. Növbə bağlananda sayılan nağd sistemdəki məbləğlə müqayisə olunur — kartla ödənişin nağd kimi yazılması kimi səhvlər tez tapılır.',
      },
      {
        q: 'Restoran POS-u (iiko, Clopos) nə vaxt saxlamaq lazımdır?',
        a: 'Mətbəx, KDS və menyu sifarişi əsas işdirsə, restoran POS-u saxlamaq məntiqlidir. Heselo kassası isə otaq, masa və stansiya vaxtını, canlı sessiyanı və bron ödənişlərini eyni növbədə bağlayır. Satışınız əsasən vaxt, içki və qəlyanaltıdırsa, adətən ayrıca restoran kassasına ehtiyac qalmır.',
      },
      {
        q: 'Qiymət nə qədərdir?',
        a: 'Tariflər məkan tipinə görədir: Kiçik plan PS/oyun üçün {gaming}, bilyard üçün {billiards}, antikafe üçün {antikafe}, karaoke və launj üçün {karaoke} {currency}/aydan. Orta və Böyük planlar, illik ödəniş və limitlər qiymətlər səhifəsindədir. Pulsuz demonu əlaqə formasından istəyin — kart lazım deyil.',
      },
    ],
    related: ['gaming', 'inventory', 'reservations'],
    ctaTitle: 'Kassa növbəsi üçün demo',
    ctaBody: 'Növbə və sayım prosesini real ssenari ilə göstəririk.',
  },
  {
    slug: 'inventory',
    shortTitle: 'Anbar',
    h1: 'Anbar idarəetmə sistemi',
    seoTitle: 'Anbar idarəetmə sistemi və klub anbar proqramı | Heselo',
    seoDescription:
      'Anbar idarəetmə sistemi: məhsul kataloqu, qalıq və sayım. Klub anbar proqramı kassa və canlı satış ilə eyni paneldə.',
    keywords: [
      'anbar idarəetmə sistemi',
      'klub anbar proqramı',
      'anbar sayımı',
      'məhsul kataloqu',
    ],
    intro:
      'Anbar idarəetmə sistemi satışdan ayrı qalanda qalıqlar “kağızda düz, rəfdə səhv” olur. Heselo-da məhsullar, anbar və sürətli satış eyni kataloq üzərindədir — canlı sessiya və kassa ilə bağlı.',
    whoTitle: 'Kimlər üçündür?',
    whoBody:
      'Oyun klubu, karaoke, bilyard, antikafe və otaqlı launjda qəlyanaltı/içki qalığını izləmək, sayım aparmaq və bron olmadan satış etmək istəyənlər üçün.',
    problemsTitle: 'Anbar uçotu zəif olanda',
    problems: [
      'Satış var, qalıq yenilənmir',
      'Sayım jurnalları itir',
      'Qiymət və məhsul siyahısı bir neçə yerdədir',
      'Bronsuz satış anbara düşmür',
    ],
    howTitle: 'Heselo anbar üçün nə verir?',
    howBody:
      'Heselo məhsul kataloqunu qiymətlə saxlayır. Anbar qalıqları və sayım jurnalları eyni siyahıdadır. Canlı sessiya və sürətli satışda məhsul əlavə olunanda eyni kataloq işləyir — statistika anbar göstəricilərini göstərir.',
    featuresTitle: 'Anbar funksiyaları',
    features: [
      {
        title: 'Məhsul kataloqu',
        desc: 'Qiymət və siyahı bir yerdə.',
      },
      {
        title: 'Qalıq izləmə',
        desc: 'Anbar qalıqları satışlarla uyğun.',
      },
      {
        title: 'Sayım jurnalları',
        desc: 'Sayım tarixçəsi saxlanılır.',
      },
      {
        title: 'Sürətli satış',
        desc: 'Bron olmadan satış — eyni məhsul siyahısı.',
      },
    ],
    differTitle: 'Ayrıca Excel anbarından fərqi',
    differBody:
      'Excel günün axşamı doldurulur; Heselo satış anında eyni məlumatı istifadə edir. Anbar rezervasiya və kassadan ayrılmır.',
    faq: [
      {
        q: 'Anbar ayrıca moduldur?',
        a: 'Bəli, amma məhsullar və sürətli satış ilə eyni kataloqa bağlıdır.',
      },
      {
        q: 'Statistikada anbar varmı?',
        a: 'Bəli. Anbar statistikası icmal və göstəricilər üçün mövcuddur.',
      },
      {
        q: 'Hansı məkanlar üçün uyğundur, hansılar üçün yox?',
        a: 'Oyun klubu, karaoke, bilyard, antikafe və launjda içki, qəlyanaltı və bar məhsullarının qalığını izləmək üçün uyğundur. Çoxlu təchizatçı, reseptə görə silinmə və ya böyük mətbəx anbarı lazımdırsa, ixtisaslaşmış anbar və ya restoran sistemi daha doğru seçimdir. Klub barı üçün isə kassa ilə eyni kataloq adətən kifayət edir.',
      },
      {
        q: 'Excel anbar cədvəlindən nə fərqi var?',
        a: 'Excel adətən axşam doldurulur və satışdan geri qalır. Heselo-da məhsul canlı sessiyada və ya sürətli satışda əlavə olunanda eyni kataloq işləyir, qalıq satışla uyğun qalır. Sayım jurnalları saxlanılır, ona görə kimin nə vaxt saydığını sonradan yoxlamaq olar.',
      },
      {
        q: 'Bronsuz satış da anbardan çıxılır?',
        a: 'Bəli. Sürətli satış bron olmadan aparılır, amma canlı sessiya ilə eyni məhsul kataloqunu istifadə edir. Qonaq yalnız içki və ya qəlyanaltı alanda da satış kassaya yazılır və qalıq yenilənir — “satış var, qalıq yenilənmir” vəziyyəti yaranmır.',
      },
      {
        q: 'Qiymət harada göstərilib?',
        a: 'Tariflər məkan tipinə görədir: PS/oyun üçün {gaming}, bilyard üçün {billiards}, antikafe üçün {antikafe}, karaoke və launj üçün {karaoke} {currency}/aydan. Planlar üzrə limitlər və illik ödəniş qiymətlər səhifəsindədir. Demo pulsuzdur — əlaqə formasına məhsul sayınızı yazın, anbar və sayım prosesini göstəririk.',
      },
    ],
    related: ['pos', 'gaming', 'antikafe'],
    ctaTitle: 'Anbar və kataloq üçün demo',
    ctaBody: 'Məhsul və sayım prosesini məkanınıza uyğun göstəririk.',
  },
]
