import type { Locale } from '@/i18n/config'
import type { DocumentBlock } from './documentTypes'

const az: DocumentBlock[] = [
  {
    type: 'lead',
    text: 'Heselo platformasında şəxsi məlumatların necə toplandığı, niyə emal olunduğu və hansı hüquqların olduğu.',
  },
  {
    type: 'callout',
    text: 'Bu sənəd **Xidmət müqaviləsindən** və **İstifadə şərtlərindən** ayrıdır. Kommersiya — müqavilədə; davranış — şərtlərdə; burada məlumat emalıdır.',
  },
  {
    type: 'p',
    text: 'Sistemə giriş və ya istifadə bu Məxfilik siyasətinin qəbulu sayılır.',
  },
  { type: 'h2', text: '1. Kimə aiddir və rollar' },
  {
    type: 'ol',
    items: [
      'Bu siyasət məkan sahibi, director, admin, resepsiya, ofisiant və digər işçi hesablarına aiddir.',
      '**Müştəri (məkan)** — Sistemə daxil etdiyi qonaq / müştəri məlumatlarının əsas məsul tərəfidir: nəyin yazılacağı və kimə göstəriləcəyi Müştərinin öhdəliyidir.',
      '**Heselo** — bu məlumatları Xidməti göstərmək üçün emal edir; mülkiyyət Xidmət müqaviləsinə uyğun olaraq Müştəriyə məxsusdur.',
      'Heselo hesabı (email, ad, şifrə hash, giriş sessiyası) üçün Heselo öz emalını aparır.',
      'Ziddiyyət yaranarsa: kommersiya — **Xidmət müqaviləsi**; davranış — **İstifadə şərtləri**; şəxsi məlumat — bu siyasət.'
    ],
  },
  { type: 'h2', text: '2. Hansı məlumatlar emal olunur' },
  {
    type: 'p',
    text: 'Sistemdə tipik olaraq aşağıdakılar ola bilər (sahə doldurulmayıbsa, həmin məlumat yoxdur):',
  },
  { type: 'h3', text: 'Qonaq / müştəri kartı' },
  {
    type: 'ul',
    items: [
      'ad, soyad və ya tam ad;',
      'telefon;',
      'e-poçt (əgər daxil edilibsə);',
      'yaş (əgər daxil edilibsə);',
      'məlumat mənbəyi (məkanı necə eşitdiyi);',
      'ziyarət sayı və xərcləmə icmalı (statistik göstəricilər).'
    ],
  },
  { type: 'h3', text: 'Rezervasiya, canlı sessiya və əməliyyatlar' },
  {
    type: 'ul',
    items: [
      'tarix və saat, resurs (~~masa / zona / otaq~~ masa / otaq);',
      'qeydlər və əvvəlcədən sifariş sətirləri;',
      'ödəniş məbləğləri, üsul (məs. nağd, bank, POS) və kassa / növbə əlaqəsi.'
    ],
  },
  { type: 'h3', text: 'İşçi və hesab' },
  {
    type: 'ul',
    items: [
      'ad, soyad, e-poçt;',
      'rol və icazələr;',
      'dəvət və qeydiyyat statusu;',
      'şifrə **hash** şəklində (açıq şifrə saxlanılmır);',
      'son giriş vaxtı.'
    ],
  },
  { type: 'h3', text: 'Məkan və abunəlik' },
  {
    type: 'ul',
    items: [
      'məkan adı, şəhər, ünvan, saat qurşağı;',
      'director və əlaqə e-poçtu;',
      'abunəlik / hesablaşma üçün Müştərinin verdiyi identifikasiya məlumatları (məs. VÖEN — müqavilə üzrə).'
    ],
  },
  { type: 'h3', text: 'Texniki' },
  {
    type: 'ul',
    items: [
      'giriş sessiyası üçün brauzer cookie (`refresh_token`, HttpOnly);',
      'təhlükəsizlik və dəstək üçün əməliyyat jurnalları (həssas sahələr maskalanır);',
      'e-poçt OTP / dəvət göndərişləri üçün müvəqqəti kodlar.'
    ],
  },
  { type: 'h3', text: 'Toplanmayanlar' },
  {
    type: 'ul',
    items: [
      'bank kartının tam nömrəsi, CVV və ya PIN;',
      'pasport / şəxsiyyət vəsiqəsi skanı;',
      'biometriya;',
      'marketinq üçün üçüncü tərəf izləmə cookie-ləri (hazırkı versiyada yoxdur).'
    ],
  },
  {
    type: 'p',
    text: 'POS və ya kart ödənişi seçildikdə Sistemdə yalnız **ödəniş üsulu və məbləğ** qeyd olunur; kart məlumatı terminal / bank tərəfində qalır.',
  },
  { type: 'h2', text: '3. Emal məqsədləri' },
  {
    type: 'ol',
    items: [
      'Rezervasiya, canlı mərtəbə, kassa, anbar və hesabatların işləməsi.',
      'Hesab girişi, təhlükəsizlik, icazələr və qoruma kodu yoxlaması.',
      'Abunəlik, bildiriş və dəstək əlaqəsi.',
      'Məkanın öz statistikası (müştəri və ödəniş icmalları).',
      'Qanuni öhdəlik və mübahisələrin həlli.'
    ],
  },
  { type: 'h2', text: '4. Hüquqi əsas' },
  {
    type: 'ol',
    items: [
      'Emal **Xidmət müqaviləsinin** icrası və Sistemin göstərilməsi üçün aparılır.',
      'Müştəri qonaq məlumatını daxil edərkən qanuni əsas və məkan ehtiyacı çərçivəsində hərəkət etməlidir.',
      'Təhlükəsizlik jurnalları və sessiyalar — xidmətin qorunması və sui-istifadənin qarşısının alınması üçün.',
      'Qanun tələb etdikdə — müvafiq hüquqi əsas.'
    ],
  },
  { type: 'h2', text: '5. Kimə ötürülə bilər' },
  {
    type: 'ol',
    items: [
      'Məkan daxilində — yalnız icazəsi olan işçilər (Müştərinin qurduğu icazələr).',
      'Heselo-nun etibarlı infrastruktur təminatçıları (hostinq, e-poçt və s.) — yalnız lazım olan həcmdə.',
      'Qanunla tələb olunan dövlət orqanları.',
      'Digər məkanların məlumatına müdaxilə və ya məkanlararası satış üçün paylaşım **yoxdur**.',
      'Heselo qonaq siyahısını reklam üçün üçüncü tərəflərə satmır.'
    ],
  },
  { type: 'h2', text: '6. Saxlama müddəti' },
  {
    type: 'ol',
    items: [
      'Məlumatlar aktiv abunəlik və Xidmətin göstərilməsi müddətində saxlanılır.',
      'Müqavilə bitdikdən sonra Heselo texniki və hüquqi ehtiyac həddində məhdud müddət saxlaya bilər; sonra silinmə və ya anonimləşdirmə tətbiq edilə bilər (qanunun məcburi saxlama qaydaları istisna).',
      'Giriş sessiyası və OTP kodları qısa müddətlidir.',
      '**Tövsiyə:** hesabatları müntəzəm Excel / export ilə yedəkləyin (Xidmət müqaviləsi).'
    ],
  },
  { type: 'h2', text: '7. Təhlükəsizlik' },
  {
    type: 'ol',
    items: [
      'Şifrələr hash ilə saxlanılır; açıq şifrə verilmir.',
      'Həssas əməliyyatlar üçün məkan **qoruma kodu** və işçi icazələri tətbiq oluna bilər.',
      'Əməliyyat jurnallarında şifrə, token, OTP və oxşar sahələr maskalanır.',
      'Heç bir onlayn sistem 100% riskdən azad deyil; şübhəli girişdə dərhal director və mümkün olduqda Heselo məlumatlandırılmalıdır.'
    ],
  },
  { type: 'h2', text: '8. Hüquqlar və sorğular' },
  {
    type: 'ol',
    items: [
      '**Qonaq / müştəri** öz məlumatı barədə sorğunu əvvəlcə **məkana (Müştəriyə)** ünvanlamalıdır.',
      '**İşçi hesabı** (email, ad) ilə bağlı sorğular director və ya Heselo dəstək kanalları vasitəsilə verilə bilər.',
      'Mümkün sorğular: məlumatla tanışlıq, düzəliş, silinmə və ya emalın məhdudlaşdırılması — qanunun və müqavilənin icazə verdiyi həddə.',
      'Silinmə əməliyyat və hesabat bütövlüyünə təsir edə bilər; bəzi qeydlər qanuni saxlama səbəbilə məhdud şəkildə qala bilər.'
    ],
  },
  { type: 'h2', text: '9. Cookie və oxşar texnologiyalar' },
  {
    type: 'ol',
    items: [
      'Sistem giriş sessiyasını saxlamaq üçün **zəruri** cookie istifadə edir (`refresh_token`).',
      'Bu cookie girişin yenilənməsi üçündür; reklam izləməsi üçün deyil.',
      'Brauzerdə sessiya / dil kimi texniki məlumat saxlanıla bilər — yalnız Sistemin işləməsi üçün.'
    ],
  },
  { type: 'h2', text: '10. Uşaqlar və həssas kateqoriyalar' },
  {
    type: 'ol',
    items: [
      'Sistem uşaqlara yönəlik xidmət deyil; yaş sahəsi məkanın biznes ehtiyacı üçündür, məqsədyönlü uşaq profili üçün deyil.',
      'Sağlamlıq, dini etiqad, biometriya kimi xüsusi kateqoriyalar tələb olunmur və toplanmır.'
    ],
  },
  { type: 'h2', text: '11. Beynəlxalq ötürülmə' },
  {
    type: 'ol',
    items: [
      'Hostinq və infrastruktur Azərbaycan və ya digər ölkələrdə yerləşə bilər.',
      'Ötürülmə olduqda Heselo eyni məxfilik və təhlükəsizlik prinsiplərini tətbiq etməyə çalışır.'
    ],
  },
  { type: 'h2', text: '12. Dəyişikliklər' },
  {
    type: 'ol',
    items: [
      'Heselo bu Məxfilik siyasətini yeniləyə bilər. Yenilənmiş mətn Sistem → Sənədlər bölməsində dərc olunur; əhəmiyyətli dəyişiklikdə director e-poçtuna bildiriş göndərilə bilər.',
      'Dərcdən sonra Sistemdən istifadənin davamı qəbul sayılır.'
    ],
  },
  { type: 'h2', text: '13. Hüquq və dil' },
  {
    type: 'ol',
    items: [
      'Bu siyasət Azərbaycan Respublikasının qanunvericiliyinə tabedir.',
      'Dillər ziddiyyət təşkil edərsə, **Azərbaycan dili** üstünlük təşkil edir.'
    ],
  }
]

const en: DocumentBlock[] = [
  {
    type: 'lead',
    text: 'How personal data is collected and processed on the Heselo platform, and what rights apply.',
  },
  {
    type: 'callout',
    text: 'This document is separate from the **Service agreement** and **Terms of use**. Commercial terms are in the agreement; usage behaviour is in the terms; this covers data processing.',
  },
  {
    type: 'p',
    text: 'Signing in to or using the System counts as acceptance of this Privacy policy.',
  },
  { type: 'h2', text: '1. Who it covers and roles' },
  {
    type: 'ol',
    items: [
      'This policy applies to the venue owner, director, admin, reception, waiters, and other staff accounts.',
      'The **Customer (venue)** is primarily responsible for guest / customer data entered in the System: what is recorded and who can see it.',
      '**Heselo** processes that data to provide the Service; ownership belongs to the Customer under the Service agreement.',
      'For Heselo accounts (email, name, password hash, sign-in session), Heselo processes data in its own right.',
      'If there is a conflict: commercial matters — **Service agreement**; usage behaviour — **Terms of use**; personal data — this policy.'
    ],
  },
  { type: 'h2', text: '2. What data is processed' },
  {
    type: 'p',
    text: 'The System may typically hold the following (if a field is empty, that data is not present):',
  },
  { type: 'h3', text: 'Guest / customer card' },
  {
    type: 'ul',
    items: [
      'name or full name;',
      'phone;',
      'email (if entered);',
      'age (if entered);',
      'info source (how they heard about the venue);',
      'visit count and spend summary (statistics).'
    ],
  },
  { type: 'h3', text: 'Reservations, live sessions, and operations' },
  {
    type: 'ul',
    items: [
      'date and time, resource (~~table / area / room~~ table / room);',
      'notes and pre-order lines;',
      'payment amounts, method (e.g. cash, bank, POS), and cash / shift links.'
    ],
  },
  { type: 'h3', text: 'Staff and account' },
  {
    type: 'ul',
    items: [
      'first name, last name, email;',
      'role and permissions;',
      'invite and registration status;',
      'password as a **hash** (plain passwords are not stored);',
      'last sign-in time.'
    ],
  },
  { type: 'h3', text: 'Venue and subscription' },
  {
    type: 'ul',
    items: [
      'venue name, city, address, timezone;',
      'director and contact email;',
      'billing identity details provided by the Customer (e.g. tax ID / VOEN under the agreement).'
    ],
  },
  { type: 'h3', text: 'Technical' },
  {
    type: 'ul',
    items: [
      'browser cookie for the sign-in session (`refresh_token`, HttpOnly);',
      'operation logs for security and support (sensitive fields are masked);',
      'temporary codes for email OTP / invites.'
    ],
  },
  { type: 'h3', text: 'What we do not collect' },
  {
    type: 'ul',
    items: [
      'full bank card number, CVV, or PIN;',
      'passport / ID scans;',
      'biometrics;',
      'third-party marketing tracking cookies (not used in the current version).'
    ],
  },
  {
    type: 'p',
    text: 'When POS or card is selected, the System records only the **payment method and amount**; card details stay with the terminal / bank.',
  },
  { type: 'h2', text: '3. Purposes of processing' },
  {
    type: 'ol',
    items: [
      'Running reservations, live floor, cash drawer, inventory, and reports.',
      'Account sign-in, security, permissions, and protection-code checks.',
      'Subscription, notices, and support contact.',
      'The venue’s own statistics (customer and payment summaries).',
      'Legal obligations and dispute handling.'
    ],
  },
  { type: 'h2', text: '4. Legal basis' },
  {
    type: 'ol',
    items: [
      'Processing is for performing the **Service agreement** and providing the System.',
      'When entering guest data, the Customer must act on a lawful basis and for venue needs.',
      'Security logs and sessions — to protect the service and prevent misuse.',
      'When the law requires it — the corresponding legal basis.'
    ],
  },
  { type: 'h2', text: '5. Who data may be shared with' },
  {
    type: 'ol',
    items: [
      'Inside the venue — only staff with permissions (configured by the Customer).',
      'Heselo’s trusted infrastructure providers (hosting, email, etc.) — only as needed.',
      'Public authorities when required by law.',
      'There is **no** access to other venues’ data or sale of lists between venues.',
      'Heselo does not sell guest lists to third parties for advertising.'
    ],
  },
  { type: 'h2', text: '6. Retention' },
  {
    type: 'ol',
    items: [
      'Data is kept while the subscription is active and the Service is provided.',
      'After the agreement ends, Heselo may retain data for a limited time for technical and legal needs, then delete or anonymise it (except mandatory legal retention).',
      'Sign-in sessions and OTP codes are short-lived.',
      '**Recommendation:** regularly back up reports via Excel / export (Service agreement).'
    ],
  },
  { type: 'h2', text: '7. Security' },
  {
    type: 'ol',
    items: [
      'Passwords are stored as hashes; plain passwords are not disclosed.',
      'Sensitive operations may use the venue **protection code** and staff permissions.',
      'Logs mask passwords, tokens, OTPs, and similar fields.',
      'No online system is 100% risk-free; report suspicious sign-ins to the director and Heselo when possible.'
    ],
  },
  { type: 'h2', text: '8. Rights and requests' },
  {
    type: 'ol',
    items: [
      'A **guest / customer** should address requests about their data first to the **venue (Customer)**.',
      'Requests about a **staff account** (email, name) can go through the director or Heselo support channels.',
      'Possible requests: access, correction, deletion, or restriction of processing — within law and the agreement.',
      'Deletion may affect operational and report integrity; some records may remain limited for legal retention.'
    ],
  },
  { type: 'h2', text: '9. Cookies and similar technologies' },
  {
    type: 'ol',
    items: [
      'The System uses a **necessary** cookie for the sign-in session (`refresh_token`).',
      'This cookie renews sign-in; it is not for advertising tracking.',
      'The browser may store technical data (session / language) only for the System to work.'
    ],
  },
  { type: 'h2', text: '10. Children and special categories' },
  {
    type: 'ol',
    items: [
      'The System is not aimed at children; the age field is for venue business needs, not deliberate child profiles.',
      'Special categories (health, religion, biometrics, etc.) are not required and are not collected.'
    ],
  },
  { type: 'h2', text: '11. International transfers' },
  {
    type: 'ol',
    items: [
      'Hosting and infrastructure may be in Azerbaijan or other countries.',
      'When transfers occur, Heselo aims to apply the same privacy and security principles.'
    ],
  },
  { type: 'h2', text: '12. Changes' },
  {
    type: 'ol',
    items: [
      'Heselo may update this Privacy policy. The new text is published under System → Documents; material changes may also be emailed to the director.',
      'Continued use after publication counts as acceptance.'
    ],
  },
  { type: 'h2', text: '13. Law and language' },
  {
    type: 'ol',
    items: [
      'This policy is governed by the laws of the Republic of Azerbaijan.',
      'If language versions conflict, **Azerbaijani** prevails.'
    ],
  }
]

const ru: DocumentBlock[] = [
  {
    type: 'lead',
    text: 'Как на платформе Heselo собираются и обрабатываются персональные данные и какие права применяются.',
  },
  {
    type: 'callout',
    text: 'Этот документ отделён от **Договора на услугу** и **Условий использования**. Коммерция — в договоре; поведение — в условиях; здесь — обработка данных.',
  },
  {
    type: 'p',
    text: 'Вход в Систему или её использование считается принятием этой Политики конфиденциальности.',
  },
  { type: 'h2', text: '1. На кого распространяется и роли' },
  {
    type: 'ol',
    items: [
      'Политика применяется к владельцу заведения, director, admin, рецепции, официанту и другим учётным записям сотрудников.',
      '**Клиент (заведение)** — основная ответственная сторона за данные гостей / клиентов, вводимые в Систему: что записывать и кому показывать.',
      '**Heselo** обрабатывает эти данные для оказания Услуги; собственность принадлежит Клиенту по Договору на услугу.',
      'По учётной записи Heselo (e-mail, имя, хэш пароля, сессия входа) Heselo ведёт собственную обработку.',
      'При конфликте: коммерция — **Договор на услугу**; поведение — **Условия использования**; персональные данные — эта политика.'
    ],
  },
  { type: 'h2', text: '2. Какие данные обрабатываются' },
  {
    type: 'p',
    text: 'В Системе типично могут быть (если поле не заполнено — данных нет):',
  },
  { type: 'h3', text: 'Карточка гостя / клиента' },
  {
    type: 'ul',
    items: [
      'имя / полное имя;',
      'телефон;',
      'e-mail (если указан);',
      'возраст (если указан);',
      'источник информации (откуда узнали о заведении);',
      'число визитов и сводка трат (статистика).'
    ],
  },
  { type: 'h3', text: 'Бронирования, живые сессии и операции' },
  {
    type: 'ul',
    items: [
      'дата и время, ресурс (~~стол / зона / комната~~ стол / комната);',
      'заметки и строки предзаказа;',
      'суммы платежей, способ (наличные, банк, POS) и связь с кассой / сменой.'
    ],
  },
  { type: 'h3', text: 'Сотрудник и аккаунт' },
  {
    type: 'ul',
    items: [
      'имя, фамилия, e-mail;',
      'роль и права;',
      'статус приглашения и регистрации;',
      'пароль в виде **хэша** (открытый пароль не хранится);',
      'время последнего входа.'
    ],
  },
  { type: 'h3', text: 'Заведение и подписка' },
  {
    type: 'ul',
    items: [
      'название, город, адрес, часовой пояс;',
      'e-mail директора и контакты;',
      'идентификационные данные для расчётов, предоставленные Клиентом (напр. VOEN — по договору).'
    ],
  },
  { type: 'h3', text: 'Технические' },
  {
    type: 'ul',
    items: [
      'cookie сессии входа (`refresh_token`, HttpOnly);',
      'журналы операций для безопасности и поддержки (чувствительные поля маскируются);',
      'временные коды для OTP / приглашений по e-mail.'
    ],
  },
  { type: 'h3', text: 'Что не собирается' },
  {
    type: 'ul',
    items: [
      'полный номер банковской карты, CVV или PIN;',
      'скан паспорта / удостоверения;',
      'биометрия;',
      'сторонние маркетинговые cookie отслеживания (в текущей версии нет).'
    ],
  },
  {
    type: 'p',
    text: 'При выборе POS или карты в Системе фиксируются только **способ и сумма**; реквизиты карты остаются у терминала / банка.',
  },
  { type: 'h2', text: '3. Цели обработки' },
  {
    type: 'ol',
    items: [
      'Работа бронирований, живого зала, кассы, склада и отчётов.',
      'Вход в аккаунт, безопасность, права и проверка кода защиты.',
      'Подписка, уведомления и связь поддержки.',
      'Собственная статистика заведения (сводки по клиентам и платежам).',
      'Законные обязанности и разрешение споров.'
    ],
  },
  { type: 'h2', text: '4. Правовые основания' },
  {
    type: 'ol',
    items: [
      'Обработка ведётся для исполнения **Договора на услугу** и оказания Системы.',
      'Вводя данные гостя, Клиент должен действовать при законном основании и в нужде заведения.',
      'Журналы безопасности и сессии — для защиты сервиса и предотвращения злоупотреблений.',
      'Когда требует закон — соответствующее правовое основание.'
    ],
  },
  { type: 'h2', text: '5. Кому могут передаваться' },
  {
    type: 'ol',
    items: [
      'Внутри заведения — только сотрудники с правами (настроенными Клиентом).',
      'Надёжные инфраструктурные провайдеры Heselo (хостинг, e-mail и т.п.) — в необходимом объёме.',
      'Госорганы по законному требованию.',
      'Вмешательства в данные других заведений или продажи между заведениями **нет**.',
      'Heselo не продаёт списки гостей третьим лицам для рекламы.'
    ],
  },
  { type: 'h2', text: '6. Срок хранения' },
  {
    type: 'ol',
    items: [
      'Данные хранятся в период активной подписки и оказания Услуги.',
      'После окончания договора Heselo может хранить ограниченно по технической и правовой необходимости; затем — удаление или обезличивание (кроме обязательного хранения по закону).',
      'Сессии входа и OTP-коды краткосрочны.',
      '**Рекомендация:** регулярно выгружать отчёты в Excel / export (Договор на услугу).'
    ],
  },
  { type: 'h2', text: '7. Безопасность' },
  {
    type: 'ol',
    items: [
      'Пароли хранятся в виде хэша; открытый пароль не выдаётся.',
      'Для чувствительных операций могут применяться **код защиты** заведения и права сотрудников.',
      'В журналах пароль, токен, OTP и сходные поля маскируются.',
      'Ни одна онлайн-система не свободна от риска на 100%; при подозрительном входе сразу уведомляйте директора и по возможности Heselo.'
    ],
  },
  { type: 'h2', text: '8. Права и запросы' },
  {
    type: 'ol',
    items: [
      '**Гость / клиент** направляет запрос о своих данных прежде всего в **заведение (Клиенту)**.',
      'Запросы по **учётной записи сотрудника** (e-mail, имя) можно передать через директора или каналы поддержки Heselo.',
      'Возможные запросы: ознакомление, исправление, удаление или ограничение обработки — в пределах закона и договора.',
      'Удаление может затронуть целостность операций и отчётов; часть записей может остаться ограниченно по законным основаниям хранения.'
    ],
  },
  { type: 'h2', text: '9. Cookie и сходные технологии' },
  {
    type: 'ol',
    items: [
      'Система использует **необходимые** cookie для сессии входа (`refresh_token`).',
      'Cookie нужен для обновления входа, а не для рекламного трекинга.',
      'В браузере могут храниться технические данные (сессия / язык) — только для работы Системы.'
    ],
  },
  { type: 'h2', text: '10. Дети и особые категории' },
  {
    type: 'ol',
    items: [
      'Система не ориентирована на детей; поле возраста нужно для бизнес-нужд заведения, а не для целенаправленного детского профиля.',
      'Особые категории (здоровье, религия, биометрия и т.п.) не требуются и не собираются.'
    ],
  },
  { type: 'h2', text: '11. Международная передача' },
  {
    type: 'ol',
    items: [
      'Хостинг и инфраструктура могут находиться в Азербайджане или других странах.',
      'При передаче Heselo стремится применять те же принципы конфиденциальности и безопасности.'
    ],
  },
  { type: 'h2', text: '12. Изменения' },
  {
    type: 'ol',
    items: [
      'Heselo может обновлять эту Политику. Новый текст публикуется в Система → Документы; при существенных изменениях может быть уведомление на e-mail директора.',
      'Продолжение использования после публикации считается принятием.'
    ],
  },
  { type: 'h2', text: '13. Право и язык' },
  {
    type: 'ol',
    items: [
      'Политика регулируется законодательством Азербайджанской Республики.',
      'При расхождении языков приоритет у **азербайджанского**.'
    ],
  }
]

export const privacyPolicyBlocks: Record<Locale, readonly DocumentBlock[]> = {
  az,
  en,
  ru,
}
