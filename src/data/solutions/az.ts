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
    h1: 'Bilyard klubu idarəetmə sistemi',
    seoTitle: 'Bilyard klubu idarəetmə proqramı — masa, tarif, kassa | Heselo',
    seoDescription:
      'Bilyard klubu proqramı: masa taymeri, rezerv, pauza, gecə-gündüz tarif və kassa bir paneldə. {billiards} AZN/aydan — pulsuz demo.',
    keywords: [
      'bilyard klubu proqramı',
      'bilyard klub idarəetmə proqramı',
      'bilyard idarəetmə sistemi',
      'bilyard masa rezervasiya',
      'bilyard masa taymeri',
      'bilyard cədvəl sistemi',
    ],
    intro:
      'Bilyard klubunda masa saatla və dəqiqə ilə işləyir: bron, cədvəl, canlı oyun, fasilə və ödəniş bir-birinə bağlı olmalıdır. Heselo hər masanı ayrıca qurur, eyni paneldə rezervasiyanı canlı sessiyaya çevirir və növbəni kassada bağlayır — bu, mətbəx restoran POS-u deyil.',
    body: [
      'Kiçik zalda iki masa, böyük salonda onlarla masa — axın eynidir. Qonaq bron edir və ya gəlib boş masa seçir; oyun başlayanda sessiya açılır; bar və qəlyanaltı eyni hesaba yazılır; ödəniş növbə hesabatında görünür.',
      'Gecə və həftəsonu tarifləri, pauza, VIP otaq və adi masa eyni cədvəldə idarə olunur. İşıq relye bloku və QR üzvlük check-in hazırda dəstəklənmir — bunlar ayrıca avadanlıq və ya digər proqramların sahəsidir. Heselo planşet və ya kompüterdə işləyən bulud paneldən ibarətdir.',
      'Qiymət açıqdır: bilyard üçün Kiçik plan ayda {billiards} AZN-dən başlayır; Orta və Böyük planlar, illik ödəniş və limitlər qiymətlər səhifəsində yazılıb. CueDesk, BilliardPOS, BCMS və Biliardo.kz ilə dürüst müqayisə üçün bələdçilərimizi oxuyun.',
    ],
    whoTitle: 'Kimlər üçündür?',
    whoBody:
      'Bilyard salonları, qarışıq launj + bilyard məkanları və masa və ya otaq rezervasiyası ilə vaxt üzrə ödəniş aparan klublar üçün. Bakıda və regionda bulud panellə işləmək istəyənlər üçün uyğundur.',
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
      'Heselo masaları və otaqları eyni cədvəldə bron edir. Oyun başlayanda canlı zalda sessiya açılır; məhsul və ödəniş eyni yerdə qalır. Qiymət masa növü, müddət və təyin etdiyiniz gecə və ya həftəsonu tarifinə görə hesablanır; kassa növbəni bağlayır.',
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
      'Yalnız vaxt sayan alətlər rezervasiya tarixçəsini, anbarı və kassa sayımını həll etmir. Heselo bilyard satışlarını və hesablaşmalarını məkanın digər satışları ilə eyni növbə üzrə birləşdirir. Mətbəx və ofisiant sifarişi əsas işinizdirsə, restoran POS seçin; masa vaxtı satırsınızsa, klub paneli lazımdır.',
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
        ['QR ilə üzvlük check-in', 'Xeyr'],
        ['İşıq relye / avtomatik lampa', 'Xeyr — ayrıca avadanlıq sahəsidir'],
        ['Qiymət', '{billiards}–59 AZN/ay (açıq planlar)'],
        ['Dillər', 'AZ, EN, RU'],
      ],
    },
    faq: [
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
        q: 'CueDesk və ya BilliardPOS-dan nə fərqi var?',
        a: 'CueDesk çoxvaxt QR üzvlük və mobil idarəetməyə fokuslanır; BilliardPOS anbar və printer inteqrasiyası ilə tanınır. Heselo Azərbaycanda açıq qiymətli bulud paneldır: masa bronu, canlı sessiya, bar satışı və kassa bir yerdə, AZ/EN/RU dillərində. Ətraflı müqayisə bələdçilərdədir.',
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
        q: 'Bilyard klubu üçün qiymət nə qədərdir?',
        a: 'Bilyard üçün Kiçik plan ayda {billiards} AZN-dən başlayır. Orta və Böyük planlar, illik ödəniş və limitlər qiymətlər səhifəsində açıq yazılıb. Bir neçə filial və ya standart plana sığmayan həcm üçün ayrıca fərdi təklif hazırlayırıq.',
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
        a: 'Karaoke üçün Kiçik plan ayda {karaoke} AZN-dən başlayır. Orta və Böyük planlar, illik ödəniş və limitlər qiymətlər səhifəsində açıq yazılıb. Demonu əlaqə formasından pulsuz istəyə bilərsiniz — kart məlumatı tələb olunmur, otaq sayınızı yazmaq kifayətdir.',
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
        a: 'PS və oyun klubu üçün Kiçik plan ayda {gaming} AZN-dən başlayır. Orta və Böyük planlar, illik ödəniş və limitlər qiymətlər səhifəsindədir. Pulsuz demo üçün əlaqə formasına stansiya sayını yazın — kart məlumatı tələb olunmur, cədvəli və canlı sessiyanı göstəririk.',
      },
    ],
    related: ['billiards', 'karaoke', 'reservations', 'pos'],
    ctaTitle: 'Oyun klubu üçün demo',
    ctaBody: 'Stansiya və konsol (PS) sayınızı bizə yazın — cədvəl və canlı sessiyanı göstəririk.',
  },
  {
    slug: 'antikafe',
    shortTitle: 'Antikafe',
    h1: 'Antikafe idarəetmə sistemi',
    seoTitle: 'Antikafe idarəetmə sistemi və antikafe proqramı | Heselo',
    seoDescription:
      'Antikafe proqramı: masa və otaq rezervasiyası, saatla ödəniş, canlı sessiya, kassa və anbar. Saatla ödənişli məkanlar üçün — pulsuz demo.',
    keywords: [
      'antikafe idarəetmə sistemi',
      'antikafe proqramı',
      'antikafe rezervasiya',
      'saatla ödəniş sistemi',
      'antikafe kassa proqramı',
    ],
    intro:
      'Antikafelərdə qonaq saatla ödəyir: masa, otaq və ya stansiya bronu, çay/qəlyanaltı satışı və ödəniş eyni prosesdə olmalıdır. Antikafe idarəetmə sistemi cədvəli canlı sessiya və kassa ilə birləşdirir — lövhə və kağız qeydləri əvəz edir.',
    whoTitle: 'Kimlər üçündür?',
    whoBody:
      'Saatla ödənişli masa və otaq, PC/stol oyunu zonası, çay və qəlyanaltı satışı olan antikafe, saatla ödənişli kafe və oxşar launj məkanları üçün. Bir neçə zal və ya otaq eyni paneldə idarə olunur.',
    problemsTitle: 'Antikafelərdə tipik problemlər',
    problems: [
      'Hansı masa/otaq boşdur — resepsiya gecikir',
      'Saat bitəndə uzatma və ödəniş ayrı qeyd olunur',
      'Bronsuz gələn qonaq ilə bron olunmuş yer eyni masada və ya otaqda toqquşur',
      'Günün sonunda kassa ilə satış uyğun gəlmir',
    ],
    howTitle: 'Heselo antikafe üçün nə verir?',
    howBody:
      'Heselo masa, otaq və stansiyaları ayrıca qurur. Bron cədvəldədir; qonaq gələndə canlı sessiya açılır. Çay və qəlyanaltı eyni sessiyaya yazılır — kassa növbəni bağlayır, anbar qalıqları izlənir.',
    featuresTitle: 'Antikafe üçün funksiyalar',
    features: [
      {
        title: 'Saatla rezervasiya',
        desc: 'Masa və otaq cədvəli, köçürmə, ləğv və tarixçə.',
      },
      {
        title: 'Canlı sessiya',
        desc: 'Aktiv yerlər, status, məhsul əlavəsi və ödəniş.',
      },
      {
        title: 'Sürətli satış',
        desc: 'Rezervasiya olmadan çay və qəlyanaltı satışı da eyni məhsul siyahısından aparılır.',
      },
      {
        title: 'Kassa və anbar',
        desc: 'Növbə, hesabat, sayım və qalıq izləmə.',
      },
    ],
    differTitle: 'Sadə taymer və ya Excel-dən fərqi',
    differBody:
      'Yalnız saat sayan proqram rezervasiya tarixçəsi, müştəri kartı, anbar və kassa sayımını vermir. Heselo antikafenin gündəlik rezervasiya, satış və kassa işlərini bir paneldə idarə etməyə kömək edir — oyun klubu və bilyard ilə eyni qaydada. “Antikafe idarəetmə sistemi nədir?” sualına bələdçimizdə cavab var.',
    faq: [
      {
        q: 'Antikafe ilə oyun klubu eyni sistemdə idarə oluna bilər?',
        a: 'Bəli. Fərqli yer tipləri (masa, otaq, PC stansiyası) eyni cədvəl, sessiya və kassa qaydaları ilə qurula bilər.',
      },
      {
        q: 'Saatla ödəniş necə aparılır?',
        a: 'Canlı sessiyada vaxt və məhsul əlavələri toplanır; ödəniləcək məbləği sistem avtomatik hesablayır və növbəyə yazır.',
      },
      {
        q: 'Demo necə əldə edilir?',
        a: 'Əlaqə formasını doldurun — masa/otaq sayını və iş gününüzü qeyd edin.',
      },
      {
        q: 'Hansı antikafelər üçün uyğun deyil?',
        a: 'Qonaqdan vaxta görə yox, yalnız sifarişə görə pul alırsınızsa və mətbəx əsas işdirsə, adi kafe və ya restoran POS-u daha uyğundur. Heselo masa, otaq və ya stansiya vaxtını satan məkanlar üçündür: saatla ödəniş, çay və qəlyanaltı satışı və kassa növbəsi bir yerdədir.',
      },
      {
        q: 'Bronsuz gələn qonaq necə qeyd olunur?',
        a: 'Boş masa və ya otaqda dərhal canlı sessiya açırsınız — əvvəlcədən bron lazım deyil. Cədvəl həmin yerin məşğul olduğunu göstərir, resepsiya növbəti bronu buna görə planlayır. Qonaq yalnız çay və ya qəlyanaltı alırsa, sürətli satış ilə sessiyasız da satmaq olar.',
      },
      {
        q: 'Excel və ya WhatsApp-dan keçmək nə verir?',
        a: 'Excel-də saatlar və məbləğ əllə yazılır, WhatsApp-da bronlar mesajlar arasında itir. Heselo-da bron cədvəldədir, qonaq gələndə sessiya açılır, vaxt, çay və qəlyanaltı eyni hesaba yazılır. Növbənin sonunda kassa məbləği hazır olur, qalıqlar da anbarda yenilənir.',
      },
      {
        q: 'Antikafe üçün qiymət nə qədərdir?',
        a: 'Antikafe üçün Kiçik plan ayda {antikafe} AZN-dən başlayır. Orta və Böyük planlar, illik ödəniş və limitlər qiymətlər səhifəsində açıq göstərilib. Bir neçə zal və ya filial standart plana sığmırsa, ayrıca fərdi təklif hazırlayırıq. Demo pulsuzdur, kart tələb olunmur.',
      },
    ],
    related: ['gaming', 'billiards', 'reservations', 'pos'],
    ctaTitle: 'Antikafe üçün demo istəyin',
    ctaBody: 'Masa və otaq sayınızı bizə yazın — rezervasiyadan kassa bağlanışına qədər göstəririk.',
  },
  {
    slug: 'lounge',
    shortTitle: 'Otaqlı launj',
    h1: 'Otaqlı launj idarəetmə sistemi',
    seoTitle: 'Launj bar idarəetmə proqramı — VIP otaq rezervasiyası | Heselo',
    seoDescription:
      'Launj bar proqramı: VIP otaq rezervasiyası, canlı sessiya, bar satışı, kassa və anbar bir paneldə. Otaqlı launj üçün — ayda {lounge} AZN-dən, pulsuz demo.',
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
        a: 'Otaqlı launj üçün Kiçik plan ayda {lounge} AZN-dən başlayır. Orta və Böyük planlar, illik ödəniş və limitlər qiymətlər səhifəsindədir. Pulsuz demo üçün əlaqə formasına otaq sayını yazın — kart məlumatı istənmir, cədvəli və canlı sessiyanı sizin ssenari ilə göstəririk.',
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
        a: 'Rezervasiya və cədvəl panelin əsas hissəsidir; qiymət məkan tipinə görə plandan asılıdır. Kiçik plan PS/oyun üçün {gaming}, bilyard üçün {billiards}, antikafe üçün {antikafe}, karaoke və launj üçün {karaoke} AZN/aydan başlayır. Tam cədvəl qiymətlər səhifəsindədir, demo isə pulsuzdur.',
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
        a: 'Tariflər məkan tipinə görədir: Kiçik plan PS/oyun üçün {gaming}, bilyard üçün {billiards}, antikafe üçün {antikafe}, karaoke və launj üçün {karaoke} AZN/aydan. Orta və Böyük planlar, illik ödəniş və limitlər qiymətlər səhifəsindədir. Pulsuz demonu əlaqə formasından istəyin — kart lazım deyil.',
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
        a: 'Tariflər məkan tipinə görədir: PS/oyun üçün {gaming}, bilyard üçün {billiards}, antikafe üçün {antikafe}, karaoke və launj üçün {karaoke} AZN/aydan. Planlar üzrə limitlər və illik ödəniş qiymətlər səhifəsindədir. Demo pulsuzdur — əlaqə formasına məhsul sayınızı yazın, anbar və sayım prosesini göstəririk.',
      },
    ],
    related: ['pos', 'gaming', 'antikafe'],
    ctaTitle: 'Anbar və kataloq üçün demo',
    ctaBody: 'Məhsul və sayım prosesini məkanınıza uyğun göstəririk.',
  },
]
