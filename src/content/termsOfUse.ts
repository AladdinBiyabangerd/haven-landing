import type { Locale } from '@/i18n/config'
import type { DocumentBlock } from './documentTypes'

const az: DocumentBlock[] = [
  {
    type: 'lead',
    text: 'Platformadan istifadə qaydaları: hesab, təhlükəsizlik, icazələr, qadağan davranış və öhdəliklər.',
  },
  {
    type: 'callout',
    text: 'Bu sənəd **Xidmət müqaviləsindən** ayrıdır. Kommersiya və ödəniş — müqavilədə; burada istifadə davranışı və hesab qaydalarıdır.',
  },
  {
    type: 'p',
    text: 'Sistemə giriş və ya istifadə bu İstifadə şərtlərinin qəbulu sayılır.',
  },
  { type: 'h2', text: '1. Kimə aiddir' },
  {
    type: 'ol',
    items: [
      'Bu şərtlər məkan sahibi, director, admin, resepsiya, ofisiant və digər işçi hesablarına aiddir.',
      'Müştəri (məkan) öz işçilərinin bu qaydalara riayət etməsinə cavabdehdir.',
      'Ziddiyyət yaranarsa, **Xidmət müqaviləsi** kommersiya/ödəniş məsələlərində, bu sənəd isə istifadə davranışı üzrə tətbiq olunur.'
    ],
  },
  { type: 'h2', text: '2. Hesab və giriş' },
  {
    type: 'ol',
    items: [
      'Hər istifadəçi yalnız özünə verilmiş hesabla daxil olmalıdır. Hesabın başqasına ötürülməsi qadağandır (sahibkarın yazılı razılığı olmadan).',
      'Şifrə və giriş məlumatları məxfi saxlanmalıdır. Şübhəli giriş və ya sızma dərhal sahibkara və mümkün olduqda Heselo-ya bildirilməlidir.',
      'Director e-poçtu və digər əlaqə məlumatları aktual saxlanmalıdır.'
    ],
  },
  { type: 'h2', text: '3. İcazələr və qoruma kodu' },
  {
    type: 'ol',
    items: [
      'İşçi icazələri sahibkar / səlahiyyətli şəxs tərəfindən qurulur. Kimə hansı hüququn verilməsi Müştərinin məsuliyyətidir.',
      '**Qoruma kodu** həssas əməliyyatlar üçündür. Kodun işçiyə və ya üçüncü şəxsə sızdırılmasına Heselo cavabdeh deyil.',
      'Qoruma kodu tələb olunan əməliyyatı kod olmadan keçirməyə cəhd etmək qadağandır.'
    ],
  },
  { type: 'h2', text: '4. Düzgün istifadə' },
  {
    type: 'p',
    text: 'İstifadəçilər Sistemi yalnız məkanın qanuni biznes əməliyyatları üçün istifadə etməlidir:',
  },
  {
    type: 'ul',
    items: [
      'rezervasiya, sessiya, kassa və hesabatların düzgün qeydi;',
      'müştəri və ödəniş məlumatlarının həqiqətə uyğun daxil edilməsi;',
      'Heselo bələdçilərinə və məkan daxili qaydalara riayət.'
    ],
  },
  { type: 'h2', text: '5. Qadağan olunan hərəkətlər' },
  {
    type: 'ol',
    items: [
      'Sistemi sındırmaq, təhlükəsizliyi aşmaq, reverse engineering və ya zərərli proqram yerləşdirmək.',
      'Digər məkanların və ya istifadəçilərin məlumatına müdaxilə etmək.',
      'Saxta rezervasiya, saxta ödəniş, borcun gizlədilməsi və ya hesabatların bilərəkdən təhrif edilməsi.',
      'Avtomatik skript / bot ilə icazəsiz kütləvi sorğu və ya məlumat çıxarılması (Heselo-nun yazılı icazəsi olmadan).',
      'Qanunsuz məzmun saxlamaq və ya Sistemi qanunazidd məqsədlə istifadə etmək.',
      'Brend, loqo və ya interfeysi Heselo razılığı olmadan kopyalamaq və təkrar satmaq.'
    ],
  },
  { type: 'h2', text: '6. Məlumatlar və yoxlama' },
  {
    type: 'ol',
    items: [
      'Məkana aid əməliyyat məlumatlarının düzgünlüyünü yoxlamaq Müştərinin və istifadəçilərin borcudur.',
      'Hesabatların müntəzəm Excel / export ilə yedəklənməsi tövsiyə olunur; ətraflı qaydalar Xidmət müqaviləsindədir.',
      'Şəxsi məlumatlar (qonaq, işçi) yalnız qanuni əsas və məkan ehtiyacı çərçivəsində emal edilməlidir.'
    ],
  },
  { type: 'h2', text: '7. Dayandırma' },
  {
    type: 'ol',
    items: [
      'Bu şərtlərin pozulması Heselo-ya girişi məhdudlaşdırmaq və ya dayandırmaq hüququ verir.',
      'Ciddi pozuntu Xidmət müqaviləsi üzrə xitam və borc tələbi ilə birlikdə tətbiq oluna bilər.',
      'Təhlükəsizlik riski olduqda Heselo dərhal müvəqqəti tədbir görə bilər.'
    ],
  },
  { type: 'h2', text: '8. Əqli mülkiyyət' },
  {
    type: 'ol',
    items: [
      'Sistemin proqram təminatı, dizaynı və sənədləri Heselo-ya məxsusdur.',
      'Müştəriyə yalnız Xidmət müqaviləsi və Plan çərçivəsində istifadə hüququ verilir; mülkiyyət ötürülmür.'
    ],
  },
  { type: 'h2', text: '9. Dəyişikliklər' },
  {
    type: 'ol',
    items: [
      'Heselo bu İstifadə şərtlərini yeniləyə bilər. Yenilənmiş mətn Sistem → Sənədlər bölməsində dərc olunur; əhəmiyyətli dəyişiklikdə director e-poçtuna bildiriş göndərilə bilər.',
      'Dərcdən sonra Sistemdən istifadənin davamı qəbul sayılır.'
    ],
  },
  { type: 'h2', text: '10. Hüquq və dil' },
  {
    type: 'ol',
    items: [
      'Bu şərtlər Azərbaycan Respublikasının qanunvericiliyinə tabedir.',
      'Dillər ziddiyyət təşkil edərsə, **Azərbaycan dili** üstünlük təşkil edir.'
    ],
  }
]

const en: DocumentBlock[] = [
  {
    type: 'lead',
    text: 'Platform usage rules: accounts, security, permissions, prohibited conduct, and obligations.',
  },
  {
    type: 'callout',
    text: 'This document is separate from the **Service agreement**. Commercial and billing terms are in the agreement; this covers usage behaviour and account rules.',
  },
  {
    type: 'p',
    text: 'Signing in to or using the System counts as acceptance of these Terms of use.',
  },
  { type: 'h2', text: '1. Who is covered' },
  {
    type: 'ol',
    items: [
      'These terms apply to the venue owner, director, admin, reception, waiters, and other staff accounts.',
      'The Customer (venue) is responsible for staff complying with these rules.',
      'If there is a conflict, the **Service agreement** governs commercial/billing matters; this document governs usage behaviour.'
    ],
  },
  { type: 'h2', text: '2. Accounts and access' },
  {
    type: 'ol',
    items: [
      'Each user must sign in only with their own account. Sharing accounts is forbidden (unless the owner agrees in writing).',
      'Passwords and credentials must be kept confidential. Suspected intrusion or leaks must be reported promptly to the owner and, where possible, to Heselo.',
      'The director email and other contact details must be kept up to date.'
    ],
  },
  { type: 'h2', text: '3. Permissions and protection code' },
  {
    type: 'ol',
    items: [
      'Staff permissions are set by the owner or an authorised person. Who receives which rights is the Customer’s responsibility.',
      'The **protection code** is for sensitive operations. Heselo is not liable if the Customer leaks the code to staff or third parties.',
      'Attempting to bypass an action that requires the protection code is forbidden.'
    ],
  },
  { type: 'h2', text: '4. Proper use' },
  {
    type: 'p',
    text: 'Users must use the System only for the venue’s lawful business operations:',
  },
  {
    type: 'ul',
    items: [
      'accurate recording of reservations, sessions, cash, and reports;',
      'truthful entry of customer and payment data;',
      'following Heselo guides and the venue’s internal rules.'
    ],
  },
  { type: 'h2', text: '5. Prohibited actions' },
  {
    type: 'ol',
    items: [
      'Hacking the System, bypassing security, reverse engineering, or placing malware.',
      'Interfering with another venue’s or user’s data.',
      'Fake reservations, fake payments, hiding debt, or deliberately distorting reports.',
      'Unauthorised mass requests or data extraction via scripts/bots (without Heselo’s written permission).',
      'Storing illegal content or using the System for unlawful purposes.',
      'Copying and reselling the brand, logo, or interface without Heselo’s consent.'
    ],
  },
  { type: 'h2', text: '6. Data and checks' },
  {
    type: 'ol',
    items: [
      'Checking the accuracy of venue operational data is the duty of the Customer and users.',
      'Regular Excel / export backups of reports are recommended; details are in the Service agreement.',
      'Personal data (guests, staff) must be processed only on a lawful basis and for venue needs.'
    ],
  },
  { type: 'h2', text: '7. Suspension' },
  {
    type: 'ol',
    items: [
      'Breach of these terms gives Heselo the right to restrict or suspend access.',
      'Serious breach may also trigger termination and debt claims under the Service agreement.',
      'If there is a security risk, Heselo may take immediate temporary measures.'
    ],
  },
  { type: 'h2', text: '8. Intellectual property' },
  {
    type: 'ol',
    items: [
      'The System’s software, design, and documents belong to Heselo.',
      'The Customer only receives a right to use under the Service agreement and Plan; ownership is not transferred.'
    ],
  },
  { type: 'h2', text: '9. Changes' },
  {
    type: 'ol',
    items: [
      'Heselo may update these Terms of use. The new text is published under System → Documents; material changes may also be emailed to the director.',
      'Continued use of the System after publication counts as acceptance.'
    ],
  },
  { type: 'h2', text: '10. Law and language' },
  {
    type: 'ol',
    items: [
      'These terms are governed by the laws of the Republic of Azerbaijan.',
      'If language versions conflict, **Azerbaijani** prevails.'
    ],
  }
]

const ru: DocumentBlock[] = [
  {
    type: 'lead',
    text: 'Правила пользования платформой: аккаунты, безопасность, права доступа, запрещённое поведение и обязательства.',
  },
  {
    type: 'callout',
    text: 'Этот документ отделён от **Договора на услугу**. Коммерция и оплата — в договоре; здесь — поведение при использовании и правила аккаунтов.',
  },
  {
    type: 'p',
    text: 'Вход в Систему или её использование считаются принятием этих Условий использования.',
  },
  { type: 'h2', text: '1. На кого распространяется' },
  {
    type: 'ol',
    items: [
      'Эти условия применяются к владельцу заведения, director, admin, рецепции, официанту и другим учётным записям сотрудников.',
      'Клиент (заведение) отвечает за соблюдение правил своими сотрудниками.',
      'При конфликте **Договор на услугу** регулирует коммерцию/оплату, а этот документ — поведение при использовании.'
    ],
  },
  { type: 'h2', text: '2. Аккаунт и вход' },
  {
    type: 'ol',
    items: [
      'Каждый пользователь должен входить только под своей учётной записью. Передача аккаунта другим запрещена (без письменного согласия владельца).',
      'Пароли и данные входа нужно хранить в тайне. При подозрительном входе или утечке следует сразу сообщить владельцу и по возможности Heselo.',
      'E-mail директора и другие контакты должны быть актуальными.'
    ],
  },
  { type: 'h2', text: '3. Права доступа и код защиты' },
  {
    type: 'ol',
    items: [
      'Права сотрудников настраивает владелец / уполномоченное лицо. Кому какие права выданы — ответственность Клиента.',
      '**Код защиты** нужен для чувствительных операций. Утечка кода сотруднику или третьим лицам не является ответственностью Heselo.',
      'Пытаться обойти операцию, требующую код защиты, запрещено.'
    ],
  },
  { type: 'h2', text: '4. Корректное использование' },
  {
    type: 'p',
    text: 'Пользователи должны применять Систему только для законных бизнес-операций заведения:',
  },
  {
    type: 'ul',
    items: [
      'корректный учёт бронирований, сессий, кассы и отчётов;',
      'правдивый ввод данных клиентов и платежей;',
      'соблюдение руководств Heselo и внутренних правил заведения.'
    ],
  },
  { type: 'h2', text: '5. Запрещённые действия' },
  {
    type: 'ol',
    items: [
      'Взламывать Систему, обходить безопасность, делать reverse engineering или размещать вредоносный код.',
      'Вмешиваться в данные других заведений или пользователей.',
      'Создавать ложные бронирования/платежи, скрывать долг или умышленно искажать отчёты.',
      'Без письменного разрешения Heselo массово запрашивать или выгружать данные ботами/скриптами.',
      'Хранить незаконный контент или использовать Систему в противоправных целях.',
      'Копировать и перепродавать бренд, логотип или интерфейс без согласия Heselo.'
    ],
  },
  { type: 'h2', text: '6. Данные и проверки' },
  {
    type: 'ol',
    items: [
      'Проверка корректности операционных данных заведения — обязанность Клиента и пользователей.',
      'Рекомендуется регулярно выгружать отчёты в Excel / export; подробности — в Договоре на услугу.',
      'Персональные данные (гости, сотрудники) обрабатываются только при законном основании и в нужде заведения.'
    ],
  },
  { type: 'h2', text: '7. Приостановка' },
  {
    type: 'ol',
    items: [
      'Нарушение этих условий даёт Heselo право ограничить или приостановить доступ.',
      'Серьёзное нарушение может сочетаться с расторжением по Договору на услугу и требованием долга.',
      'При угрозе безопасности Heselo может сразу принять временные меры.'
    ],
  },
  { type: 'h2', text: '8. Интеллектуальная собственность' },
  {
    type: 'ol',
    items: [
      'ПО, дизайн и документы Системы принадлежат Heselo.',
      'Клиенту даётся только право пользования в рамках Договора на услугу и Плана; собственность не передаётся.'
    ],
  },
  { type: 'h2', text: '9. Изменения' },
  {
    type: 'ol',
    items: [
      'Heselo может обновлять эти Условия. Новый текст публикуется в Система → Документы; при существенных изменениях может быть уведомление на e-mail директора.',
      'Продолжение использования после публикации считается принятием.'
    ],
  },
  { type: 'h2', text: '10. Право и язык' },
  {
    type: 'ol',
    items: [
      'Условия регулируются законодательством Азербайджанской Республики.',
      'При расхождении языков приоритет у **азербайджанского**.'
    ],
  }
]

export const termsOfUseBlocks: Record<Locale, readonly DocumentBlock[]> = {
  az,
  en,
  ru,
}
