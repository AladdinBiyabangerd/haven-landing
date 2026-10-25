import type { SolutionCopy, SolutionsHubCopy } from './types'

export const solutionsHubEn: SolutionsHubCopy = {
  eyebrow: 'Business solutions',
  h1: 'What kind of venue do you run?',
  intro:
    'Gaming club, karaoke, billiards, anti-café, or room lounge — pick your type. The page below is written for that floor’s day-to-day work.',
  howTitle: 'Where to start',
  howBody:
    'Sell PlayStation / console time — open Gaming club. Karaoke rooms — Karaoke. Hookah VIP rooms — Lounge. Several types can share one account.',
  seoTitle: 'Solutions by venue — gaming club, karaoke, billiards | Heselo',
  seoDescription:
    'One page per venue: gaming club software (PlayStation / console), karaoke, billiards booking, anti-cafés, and room lounges. Free demo.',
  keywords: [
    'gaming club software',
    'playstation club software',
    'karaoke room booking',
    'billiards club software',
    'anti-cafe software',
  ],
  cardCta: 'Details',
  primaryTitle: 'Venue types',
  featuresTitle: 'Panel modules',
}

export const solutionsEn: SolutionCopy[] = [
  {
    slug: 'billiards',
    shortTitle: 'Billiards',
    h1: 'Billiards club software',
    seoTitle: 'Billiards club software — tables, rates, cash | Heselo',
    seoDescription:
      'Billiards club software with table timers, booking, pause, day/night rates and cash in one panel. From {billiards} {currency}/month — free demo.',
    keywords: [
      'billiards club software',
      'billiards club management software',
      'pool hall software',
      'billiards booking system',
      'billiards table timer',
      'billiards reservation software',
    ],
    intro:
      'Billiards club software keeps table time, booking, live play, pause, and payment on one record. Heselo sets up each table on its own, turns a reservation into a live session, and closes the shift in cash — this is not a restaurant kitchen POS.',
    whoTitle: 'Who is it for?',
    whoBody:
      'Billiards halls, lounge + billiards venues, and clubs that book tables or rooms with time-based payment. Built for teams that want a cloud panel with Azerbaijani, English, and Russian.',
    problemsTitle: 'Common club problems',
    problems: [
      'Board and phone disagree on which table is free',
      'Play time and extras are logged separately',
      'Night shifts scramble cash',
      'VIP rooms and regular tables are not on one schedule',
      'Operators see everything while the owner cannot separate shift totals',
    ],
    howTitle: 'What does Heselo give billiards?',
    howBody:
      'Four steps: guest books or takes an open table → play opens a live session → bar and snacks land on that bill → payment posts to the shift. Pricing follows table type, duration, and the night or weekend rules you set.',
    sections: [
      {
        id: 'what',
        title: 'What is billiards club software?',
        paragraphs: [
          'Billiards club software (also searched as pool hall software) tracks table time, applies your tariff, and puts bar sales on the same session bill. A plain timer only counts minutes; a real panel keeps the schedule, live play, pause, cash shift, and stock in one place.',
          'A typical day: front desk sees free tables, seats a walk-in or booking, opens a session. Drinks or snacks become lines on that bill. When play ends, time and products total together; shift close produces the report.',
        ],
      },
      {
        id: 'billing',
        title: 'Day, night, and weekend rates; pause and extend',
        paragraphs: [
          'Halls often run day vs night rates, weekend add-ons, and hourly or per-minute billing. Pause stops the clock during a break; extend continues on the same session. In Heselo you configure these rules; the live session updates the amount.',
          'Example (replace with your rates): day $8/hour, night $12/hour. If a guest starts at 21:00, plays until 23:30, and pauses for 20 minutes, the system bills only play minutes at the night rate. VIP rooms and snooker tables can carry their own hourly fees.',
          'For hourly math and break-even, see the billiards hourly rates guide.',
        ],
      },
      {
        id: 'tables',
        title: 'Tables, VIP rooms, and table types',
        paragraphs: [
          'Pool, Russian, and snooker tables, VIP rooms, and the open floor can each be a resource with its own rate. Free/busy status is visible; moves and cancels stay in history.',
          'VIP hourly rates can differ from open-floor pricing. Several tables sell in the same shift but split cleanly by type in reports.',
        ],
      },
      {
        id: 'bar',
        title: 'Bar and snacks on the same bill',
        paragraphs: [
          'Drinks and snacks post to the same session as table time. At shift close, time revenue and product revenue show in one report — less evening spreadsheet reconciliation.',
          'Walk-in drink-only guests can use quick sale from the same product list — no second POS.',
        ],
      },
      {
        id: 'mixed',
        title: 'Mixed venues: billiards + PS + karaoke',
        paragraphs: [
          'Many clubs run billiard tables, PlayStation stations, and karaoke rooms in one building. Heselo keeps them on one cloud panel: each place type has its own schedule and rates, with a shared cash shift.',
          'Open price alone is not the differentiator — CueDesk, BilliardPOS, and Biliardo.kz also publish rates. What matters for mixed venues is AZ/EN/RU in one panel. Full comparisons are in our CueDesk, BilliardPOS, BCMS, and Biliardo.kz guides.',
        ],
      },
      {
        id: 'cloud',
        title: 'Cloud panel — check from phone or tablet',
        paragraphs: [
          'Heselo is a browser cloud panel: a tablet or PC at the desk is enough; you do not host a server. With internet you can review the schedule and live play sessions remotely.',
          'If the connection drops, the panel stops — there is no offline cash mode. Stable internet (and mobile backup) matters. Unlike desktop Windows billiards tools, updates and backups run in the cloud.',
        ],
      },
      {
        id: 'cash',
        title: 'Cash shift, roles, and reports',
        paragraphs: [
          'Open the shift, run sessions and sales, close the day. Cash, card, and other methods show in the shift report.',
          'Operators can open tables and add sales; owners see shift and revenue reports under separate rights. Audit trails show who changed what.',
        ],
      },
      {
        id: 'limits',
        title: 'What Heselo does not do',
        paragraphs: [
          'No light-relay / automatic table-lamp control — that is separate hardware (for example BilliardPOS ESP32 relays). QR membership check-in is not supported today either.',
          'Heselo is not a fiscal register and does not replace a bank card terminal. It is not a kitchen/KDS restaurant POS: if waiter orders are the main revenue, keep a restaurant stack. There is no separate loyalty / club-card module — customer records and session history exist.',
        ],
      },
      {
        id: 'price',
        title: 'Pricing',
        paragraphs: [
          'The Small billiards plan starts at {billiards} {currency} a month — the current rate on the pricing page. Medium, Large, annual billing, and the Small plan’s 6-table limit are listed there. Demo is free; no card required.',
          'It is a monthly (or annual) cloud subscription — not a one-time license. Multi-branch venues that outgrow standard plans get a custom quote.',
        ],
      },
    ],
    featuresTitle: 'Fit for billiards',
    features: [
      {
        title: 'Table and room schedule',
        desc: 'All tables on one calendar — book, move, and cancel from one place.',
      },
      {
        title: 'Live play session',
        desc: 'Active status, pause, extend, extras, and payment on the same session.',
      },
      {
        title: 'Time-aware pricing',
        desc: 'Hourly or per-minute rates; you define day, night, and weekend rules.',
      },
      {
        title: 'Cash, roles, and customers',
        desc: 'Shift, report, visit history; separate operator and admin rights.',
      },
    ],
    differTitle: 'More than a timer',
    differBody:
      'Timers alone do not solve booking history, inventory, or cash count. Heselo combines billiards sales with the venue’s other sales in the same shift. If kitchen and waiter orders are your core business, choose a restaurant POS; if you sell table time, you need billiards club software. Deeper reading: our comparison and hourly-rates guides.',
    compare: {
      title: 'What to check when you pick billiards software',
      intro:
        'The market includes simple timers, cloud panels, Windows apps, and light-relay systems. This table states clearly what Heselo supports — strengths and gaps included.',
      headers: ['Feature', 'Heselo'],
      rows: [
        ['Table timer and rates', 'Yes — hour/minute, pause, extend'],
        ['Day / night and weekend rates', 'Yes — you configure the rules'],
        ['Booking and schedule', 'Yes — tables and rooms on one calendar'],
        ['Bar / café sales on the session', 'Yes — with the cash shift'],
        ['Platform', 'Web / cloud (tablet or computer)'],
        ['Light relay / auto table lamps', 'No — separate hardware'],
        ['Price', '{billiards}–{billiardsHigh} {currency}/month (published plans)'],
        ['Languages', 'AZ, EN, RU'],
      ],
    },
    faq: [
      {
        q: 'What is billiards club software?',
        a: 'Billiards club software (pool hall software) runs table time, booking, live sessions, bar sales, and the cash shift in one panel. A plain timer only counts minutes; Heselo connects the schedule through to payment.',
      },
      {
        q: 'Are billiard tables set up individually?',
        a: 'Yes. Each table or room is configured on its own; schedule and live floor share the same data. You can set different rates for pool, Russian, or snooker tables.',
      },
      {
        q: 'Can rooms and tables coexist?',
        a: 'Yes. VIP rooms and regular tables follow the same schedule, session, and cash rules. Mixed lounge + billiards venues can stay on one panel.',
      },
      {
        q: 'Can we set night and weekend rates?',
        a: 'Yes. You define rates by table type and time rules: day, night, or weekend differences stay in the panel. We can walk through your hours on a demo.',
      },
      {
        q: 'Can staff open tables without seeing full cash reports?',
        a: 'Yes. You can separate operator work (open/close tables, add sales) from owner shift and revenue reports. We show the permission matrix on the demo.',
      },
      {
        q: 'Does it control table lights with a relay?',
        a: 'No. Heselo is a tablet or computer panel for timers, booking, and cash. Automatic table lamps with a relay block are separate hardware; we do not offer that integration today.',
      },
      {
        q: 'Is there fiscal register or QR membership check-in?',
        a: 'No. Heselo does not replace a fiscal register or bank terminal, and QR membership check-in is not supported today. You record the payment method on the shift; fiscal and bank hardware connect separately.',
      },
      {
        q: 'How is Heselo different from CueDesk or BilliardPOS?',
        a: 'CueDesk often focuses on QR membership and mobile control; BilliardPOS leads with ESP32 table-light relays, TV timers, and an API. Heselo is a cloud panel in AZ, EN, and RU: table booking, live session, bar sales, and cash in one place — including mixed billiards + PS + karaoke venues. Full comparisons are in our guides.',
      },
      {
        q: 'Which billiards clubs is Heselo not a fit for?',
        a: 'If your core business is a kitchen, a menu, and waiter orders, a restaurant POS fits better. If a light-relay lamp lock is mandatory, look at hardware-focused systems. Heselo is for clubs that sell table and room time.',
      },
      {
        q: 'How is it different from a whiteboard, WhatsApp, or Excel?',
        a: 'A board and chat threads show who booked, but start time, extras, and payment end up somewhere else. In Heselo a booking moves from the schedule into a live session, the price follows play time, and payment lands in the shift. You stop re-adding totals in Excel at closing time.',
      },
      {
        q: 'How much does billiards club software cost?',
        a: 'The Small plan for billiards starts at {billiards} {currency} a month — the current rate on the pricing page. Medium and Large plans, annual billing, and limits are published there. For several branches or volume beyond a standard plan, we prepare a separate custom quote.',
      },
      {
        q: 'How do we get a demo — is a card required?',
        a: 'Fill in the contact form with your table and room count and opening hours. The demo is free and no card details are needed. We walk through the schedule, a live play session, and the cash close on a scenario close to your venue.',
      },
    ],
    related: ['gaming', 'karaoke', 'reservations', 'pos'],
    ctaTitle: 'Billiards club demo',
    ctaBody: 'Share table count and typical shifts — we show the schedule and a live session.',
  },
  {
    slug: 'karaoke',
    shortTitle: 'Karaoke',
    h1: 'Karaoke management system',
    seoTitle: 'Karaoke management system & room booking | Heselo',
    seoDescription:
      'Karaoke management: room booking, live sessions, cash, and product sales. Demo for karaoke venues.',
    keywords: [
      'karaoke management system',
      'karaoke room booking',
      'karaoke software',
      'restaurant pos for karaoke',
      'dine alternative karaoke',
    ],
    intro:
      'In karaoke, the main unit is the room: booking, session length, extras, and payment. A karaoke management system should connect room schedule to live session and cash. Restaurant POS (Dine, Clopos) targets tables/QR — this workflow fits room-time venues better.',
    whoTitle: 'Who is it for?',
    whoBody:
      'Room-based karaoke clubs, lounge + karaoke venues, and places running several rooms on one schedule.',
    problemsTitle: 'Typical karaoke friction',
    problems: [
      'Room bookings get lost in phone notes',
      'Extensions and extras are written elsewhere',
      'Several rooms’ status collide at peak time',
      'Cash and room occupancy disagree at close',
    ],
    howTitle: 'What does Heselo give karaoke?',
    howBody:
      'Heselo books rooms on the schedule. On arrival a live session opens; products and payment stay there. Several rooms appear on one board — cash closes with shift and report.',
    featuresTitle: 'Karaoke essentials',
    features: [
      {
        title: 'Room booking',
        desc: 'Schedule, list, move, and cancel.',
      },
      {
        title: 'Live room session',
        desc: 'Status, products, receipt, and payment.',
      },
      {
        title: 'Customer history',
        desc: 'Cards and visits for returning guests.',
      },
      {
        title: 'Cash and stats',
        desc: 'Shift close and reports by payment method.',
      },
    ],
    differTitle: 'A booking form is not enough',
    differBody:
      'An online booking page does not run the room once guests arrive. Heselo keeps booking through payment in one panel so floor and cash share the same shift and cash rules.',
    faq: [
      {
        q: 'Are karaoke rooms configured like tables?',
        a: 'Rooms are set up individually; schedule and live tracking show room status.',
      },
      {
        q: 'Is pre-order supported?',
        a: 'Reservation forms include labels and pre-order fields — the same fields as in the panel booking form.',
      },
      {
        q: 'Should a karaoke venue with a kitchen keep iiko or Clopos?',
        a: 'If a full kitchen, KDS, and waiter orders are the core of the day, keeping a restaurant POS makes sense. Heselo handles the room schedule, session length, extensions, and the cash shift. If most revenue comes from room time and the menu is simple, drinks and snacks go on the same Heselo session.',
      },
      {
        q: 'We take bookings on WhatsApp — what changes?',
        a: 'Guests can still message or call, but the booking no longer lives in a chat — it goes onto the room schedule. The whole team sees who has which room and from when to when. When guests arrive, that booking becomes a live session, and extensions and payment stay there too.',
      },
      {
        q: 'Where is karaoke pricing listed?',
        a: 'The Small plan for karaoke starts at {karaoke} {currency} a month. Medium and Large plans, annual billing, and limits are published on the pricing page. You can request a free demo through the contact form — no card details needed, just tell us how many rooms you run.',
      },
      {
        q: 'Can karaoke, billiards, and a lounge share one panel?',
        a: 'Yes. Karaoke rooms, billiard tables, and lounge rooms are set up separately in the same venue but share one schedule, live tracking, and cash shift. At day end, sales from every zone show up in one report — no matching totals across separate programs.',
      },
    ],
    related: ['reservations', 'lounge', 'gaming', 'pos'],
    ctaTitle: 'Karaoke venue demo',
    ctaBody: 'Tell us your room count — we show the schedule and a live session.',
  },
  {
    slug: 'gaming',
    shortTitle: 'Gaming club',
    h1: 'Gaming club management system',
    seoTitle: 'Gaming Club Software & Management for PS Clubs | Heselo',
    seoDescription:
      'Gaming club software for PlayStation and console clubs: station booking, live sessions, cash, and stock. Gaming management system in one panel — free demo.',
    keywords: [
      'gaming club software',
      'gaming management system',
      'gaming management',
      'console club',
      'playstation club software',
      'ps club',
      'PC club software',
      'iiko alternative clubs',
    ],
    intro:
      'Gaming club software for PS and console clubs should join station booking to live sessions and cash — a timer alone is not enough. Heselo is a gaming management system for PlayStation / console clubs that sell station time; it is not a kitchen POS like iiko.',
    whoTitle: 'Who is it for?',
    whoBody:
      'PlayStation clubs, console lounges, PC clubs, and mixed gaming venues that need station/table booking, live sessions, and cash.',
    problemsTitle: 'Typical club problems',
    problems: [
      'It is unclear which station is free',
      'Extensions and payments are logged apart',
      'Snacks and drinks do not match cash',
      'Night shifts stretch reconciliation',
    ],
    howTitle: 'What does Heselo give a gaming club?',
    howBody:
      'Heselo keeps stations and tables on one schedule. Bookings sit on the schedule; when play starts, a live session opens. Product sales and payments stay on the same record — cash closes the shift, and inventory tracks snacks and drinks.',
    featuresTitle: 'Gaming club capabilities',
    features: [
      {
        title: 'Station and table schedule',
        desc: 'Station/table booking, move, and cancel.',
      },
      {
        title: 'Live session',
        desc: 'Active places, status, and payment.',
      },
      {
        title: 'Quick sale',
        desc: 'Snacks and drinks without a booking.',
      },
      {
        title: 'Cash and inventory',
        desc: 'Shift, report, and stock levels.',
      },
    ],
    differTitle: 'Beyond a simple timer',
    differBody:
      'A timer alone does not give booking history, customer cards, inventory, or cash count. Heselo helps run the club’s daily bookings, sales, and cash work in one panel.',
    faq: [
      {
        q: 'Can PC and console share one system?',
        a: 'Yes. Different station types follow the same schedule, session, and cash rules.',
      },
      {
        q: 'How do permissions work?',
        a: 'Staff get page- and action-level permissions; sensitive actions can require a protection code.',
      },
      {
        q: 'Which gaming clubs is it not a fit for?',
        a: 'If your main need is remote PC control, automatic machine locking, or game licence management, look at specialised PC club software. Heselo covers station booking, live sessions, snack sales, and the cash shift. It fits PlayStation and console clubs and mixed gaming venues best.',
      },
      {
        q: 'We use iiko — should we keep it?',
        a: 'If the club runs a full kitchen, KDS, and menu orders, iiko can stay for that part. Heselo is for station time, bookings, extensions, and club cash. In most PS clubs, though, sales are drinks and snacks — Heselo’s quick sale and inventory cover that, so a separate restaurant POS is usually unnecessary.',
      },
      {
        q: 'What changes compared with Excel and WhatsApp?',
        a: 'In Excel, station time gets typed in after the fact; in WhatsApp, bookings get buried in chats. In Heselo the booking sits on the schedule, a live session opens when play starts, and extensions and snacks land on the same record. At shift close the cash total is ready — no evening spreadsheet matching.',
      },
      {
        q: 'How much does it cost for a PS club?',
        a: 'The Small plan for PlayStation and gaming clubs starts at {gaming} {currency} a month. Medium and Large plans, annual billing, and limits are on the pricing page. For a free demo, send your station count through the contact form — no card details needed; we show the schedule and a live session.',
      },
    ],
    related: ['billiards', 'karaoke', 'reservations', 'pos'],
    ctaTitle: 'Gaming club demo',
    ctaBody: 'Share station and console count — we show the schedule and a live session.',
  },
  {
    slug: 'antikafe',
    shortTitle: 'Anti-café',
    h1: 'Anticafe & time-café software',
    seoTitle: 'Anticafe software — time tracking, per-minute billing & cash | Heselo',
    seoDescription:
      'Cloud anticafe software: guest time tracking, per-minute and hourly rates, packages and stop-check, snacks on one bill, cash shift. From {antikafe} {currency}/mo, free demo.',
    keywords: [
      'anticafe software',
      'anti-café management system',
      'time cafe software',
      'per-minute billing',
      'anti-cafe reservation',
      'time-based cafe POS',
    ],
    intro:
      'Anticafe software tracks how long a guest stays, bills per-minute or hourly rates automatically, and puts tea and snacks on the same bill. Heselo does this in a browser cloud panel — no install, no on-site server.',
    whoTitle: 'Who is it for?',
    whoBody:
      'Time-based tables and rooms, PC or board-game zones, tea and snack sales — anti-cafés, time cafés, and similar lounges. Multiple halls and rooms in one panel.',
    problemsTitle: 'Typical anti-café friction',
    problems: [
      'Which table or room is free — front desk loses time',
      'Per-minute rates, packages, and stop-check done by hand',
      'Snacks never land on the time bill',
      'Cash count does not match sales at day close',
    ],
    howTitle: 'What does Heselo give an anticafe?',
    howBody:
      'Four steps: guest arrives or books → live session opens → products go on the same bill → payment posts to the shift. Tables, rooms, and stations are separate resources; rate rules live in the panel.',
    sections: [
      {
        id: 'what',
        title: 'What is anticafe software?',
        paragraphs: [
          'Anticafe software (also called anti-café or time-café software) records guest time, applies your tariff, and runs snack sales alongside it. A plain timer only counts minutes; a real panel keeps the schedule, live sessions, cash shift, and stock in one place.',
          'A typical day: front desk sees free seats, seats a walk-in or booking, opens a session. Tea or snacks become lines on that bill. At checkout, time and products total together; shift close produces the report.',
        ],
      },
      {
        id: 'billing',
        title: 'Time billing: per-minute, hourly, packages, stop-check',
        paragraphs: [
          'Three common models: per-minute (fair for short visits), hourly (simple), and stop-check — a daily cap after which time charges stop growing. Packages are prepaid blocks such as “3 hours” or “day pass”. In Heselo you configure these rules; the live session updates the amount.',
          'Example (replace with your rates): first hour 5 {currency}, then 0.08 {currency} per minute, daily stop-check 15 {currency}. For 2 h 20 m the system combines the hour and minute parts; once the stop-check ceiling is hit, time charges do not climb further. Tea and snacks stay separate lines on the same bill.',
          'For rent math and break-even guest-hours, see the anticafe rent and hourly fee guide.',
        ],
      },
      {
        id: 'zones',
        title: 'Tables, zones, and rooms',
        paragraphs: [
          'Open floor, VIP room, PlayStation zone, or cinema room can each be a resource with its own rate. Free/busy status is visible; moves and cancels stay in history.',
          'VIP hourly rates can differ from open-floor per-minute pricing. PS stations and tables sell in the same shift but split cleanly in reports.',
        ],
      },
      {
        id: 'minibar',
        title: 'Free tea/coffee and mini-bar',
        paragraphs: [
          'Many anticafes include tea and coffee, while snacks are paid. Track “free” consumables via inventory (stock falls, revenue comes from time). Paid snacks post as session sales.',
          'Walk-in tea-only guests can use quick sale from the same product list — no second POS.',
        ],
      },
      {
        id: 'resources',
        title: 'Board games and consoles',
        paragraphs: [
          'Heselo can treat consoles and stations as schedule resources: a PS seat is its own place type with booking and sessions. Board-game boxes can be inventory items.',
          'We do not auto-shut consoles or drive smart plugs for lights/TVs today — that is separate hardware. Time tracking and cash stay in the panel; power control is a roadmap topic.',
        ],
      },
      {
        id: 'cloud',
        title: 'Cloud panel — check from your phone',
        paragraphs: [
          'Heselo is a browser cloud panel: a tablet or PC at the desk is enough; you do not host a server. With internet you can review the schedule and live sessions remotely.',
          'If the connection drops, the panel stops — there is no offline cash mode. Stable internet (and mobile backup) matters. Unlike desktop one-time-license anticafe tools, updates and backups run in the cloud.',
        ],
      },
      {
        id: 'cash',
        title: 'Cash shift and reports',
        paragraphs: [
          'Open the shift, run sessions and sales, close the day. Cash, card, and other methods show in the shift report — no evening spreadsheet reconciliation.',
          'Stock counts refresh snack levels. Audit trails show who changed what when several admins work at once.',
        ],
      },
      {
        id: 'limits',
        title: 'What Heselo does not do',
        paragraphs: [
          'Heselo is not a fiscal register and does not replace a bank card terminal. You connect fiscal and bank hardware separately; Heselo runs time, sessions, shift, and stock.',
          'It is not a kitchen/KDS restaurant POS. If orders are the main revenue, keep a restaurant stack. There is no separate loyalty / club-card / bonus module today — customer records and session history exist.',
        ],
      },
      {
        id: 'price',
        title: 'Pricing',
        paragraphs: [
          'The Small anticafe plan starts at {antikafe} {currency} a month. Medium, Large, annual billing, and limits are on the pricing page. Demo is free; no card required.',
          'It is a monthly (or annual) cloud subscription — not a one-time license. Multi-branch venues that outgrow standard plans get a custom quote.',
        ],
      },
    ],
    featuresTitle: 'Features for anticafes',
    features: [
      {
        title: 'Time tracking & rates',
        desc: 'Per-minute, hourly, packages, and stop-check — amount updates live.',
      },
      {
        title: 'Zone and room booking',
        desc: 'Tables, VIP, PS zones — schedule, move, and history.',
      },
      {
        title: 'Tea and mini-bar on one bill',
        desc: 'Session lines and quick sale share the same product list.',
      },
      {
        title: 'Cash & inventory',
        desc: 'Shift close, reports, stock, and counts.',
      },
    ],
    differTitle: 'Beyond a simple timer or spreadsheet',
    differBody:
      'A timer alone does not give booking history, inventory, or cash count. Heselo runs daily booking, time billing, sales, and cash in one cloud panel — same pattern as gaming clubs and billiards. Deeper reading: “What is an anti-café management system?” and “How to open an anticafe”.',
    faq: [
      {
        q: 'How much does anticafe software cost — monthly or one-time?',
        a: 'The Small anticafe plan starts at {antikafe} {currency} a month — a cloud subscription, not a one-time license. Medium, Large, annual billing, and limits are on the pricing page. Demo is free; no card needed.',
      },
      {
        q: 'How do per-minute rates and stop-check work?',
        a: 'You set rate rules per place type: per-minute or hourly, packages, and a daily stop-check ceiling. The live session updates the amount; tea and snacks are separate lines on the same bill.',
      },
      {
        q: 'Can the first hour be fixed, then per-minute?',
        a: 'You configure tariff rules to match your model — fixed-hour blocks plus per-minute continuation are checked on your sample in the demo. Per-minute, hourly, packages, and stop-check are supported in the same panel.',
      },
      {
        q: 'Is the panel available in English?',
        a: 'Yes. The panel runs in AZ, EN, and RU. Heselo was built in Baku; demo and onboarding are online.',
      },
      {
        q: 'What happens if the internet drops?',
        a: 'The panel needs internet — there is no offline cash mode. Keep a mobile backup link. Stable connectivity is part of day-to-day ops.',
      },
      {
        q: 'Do you integrate with fiscal cash registers or bank POS?',
        a: 'No. Heselo does not replace fiscal hardware or a bank terminal. You record payment methods on the shift; fiscal and bank devices stay separate.',
      },
      {
        q: 'Is there a club card, subscription, or bonus system?',
        a: 'Customer records and session history exist. A separate loyalty / club-card / bonus module is not available today — we say so honestly in the demo if that is a must-have.',
      },
      {
        q: 'Can PlayStation zones and board games run in the same system?',
        a: 'Yes. PS stations and tables/rooms are separate place types with their own rates and schedules. Game boxes can be inventory items. Auto console shutdown is not included.',
      },
      {
        q: 'How many admins can work at once? Staff permissions?',
        a: 'Several users can work in the same panel; audit trails show who changed what. Plan limits and role details open on the pricing page and in the demo.',
      },
      {
        q: 'How do I track the cost of free tea and coffee?',
        a: 'Track free consumables in inventory: stock falls while revenue comes from time tariffs. Paid mini-bar lines post to the session. See the rent guide for guest-hour break-even math.',
      },
      {
        q: 'Which anticafes is it not a fit for?',
        a: 'If kitchen orders are the main revenue and you do not sell time, a restaurant POS fits better. Heselo is for anticafes and time cafés that sell table, room, or station time.',
      },
      {
        q: 'How do we get a demo?',
        a: 'Use the contact form — share table/room count and your tariff model (per-minute, hourly, stop-check). Or open a 2-day demo account yourself — no card needed.',
      },
    ],
    related: ['gaming', 'billiards', 'reservations', 'pos'],
    ctaTitle: 'Anticafe demo',
    ctaBody: 'Tell us your table and room count — we walk through time tracking to cash close.',
  },
  {
    slug: 'lounge',
    shortTitle: 'Room lounge',
    h1: 'Room lounge management system',
    seoTitle: 'Lounge bar management software & VIP room booking | Heselo',
    seoDescription:
      'Lounge bar management software: VIP room booking, live sessions, bar sales, cash, and inventory in one panel. For room lounges — from {lounge} {currency}/month, free demo.',
    keywords: [
      'lounge bar management software',
      'lounge bar software',
      'room lounge software',
      'lounge room booking',
      'lounge management system',
      'VIP room reservation',
    ],
    intro:
      'In a room lounge the main unit is the room: booking, session length, drinks and snacks, and payment. Lounge software should connect the room schedule to live sessions and cash — phone notes and a whiteboard are not enough.',
    whoTitle: 'Who is it for?',
    whoBody:
      'VIP room lounges, club-lounges that rent rooms, and mixed karaoke/billiards venues with private rooms. Places that run rooms, not an open floor.',
    problemsTitle: 'Typical lounge friction',
    problems: [
      'Room bookings get lost in messenger threads',
      'Extensions and extras are written elsewhere',
      'Several VIP rooms collide at peak time',
      'Cash and room occupancy disagree at close',
    ],
    howTitle: 'What does Heselo give a room lounge?',
    howBody:
      'Heselo books rooms on the schedule. On arrival a live session opens; products and payment stay there. Several rooms appear on one board — cash closes with shift and report.',
    featuresTitle: 'Lounge essentials',
    features: [
      {
        title: 'Room booking',
        desc: 'Schedule, list, move, and cancel.',
      },
      {
        title: 'Live room session',
        desc: 'Status, products, receipt, and payment.',
      },
      {
        title: 'Customer history',
        desc: 'Cards and visits for returning guests.',
      },
      {
        title: 'Cash and stats',
        desc: 'Shift close and reports by payment method.',
      },
    ],
    differTitle: 'Not an open-floor cafe tool',
    differBody:
      'An open-table tool does not run a closed room session. Heselo keeps each room separately — the same rules as karaoke and anti-cafés.',
    faq: [
      {
        q: 'Are lounge rooms set up like karaoke rooms?',
        a: 'Yes. Each room is set up individually; schedule and live tracking show room status.',
      },
      {
        q: 'Can an open hall and rooms share one system?',
        a: 'Yes. Tables, rooms, and stations follow the same schedule, session, and cash rules.',
      },
      {
        q: 'Do we need separate lounge bar software?',
        a: 'Usually not. If your lounge bar sells room or table time plus drinks and snacks, Heselo runs bookings, live sessions, bar sales, the cash shift, and inventory in one panel. Separate restaurant software is only worth it when a full kitchen, KDS, and complex menu orders are the core of the business.',
      },
      {
        q: 'Which lounges is it not a fit for?',
        a: 'A bar-restaurant that sells no room or table time and works only through waiter orders on an open floor is better served by a restaurant POS. Heselo is for VIP room lounges, club-lounges that rent rooms, and venues mixed with karaoke or billiards — wherever the room and its time are the unit.',
      },
      {
        q: 'When should we keep iiko for the kitchen?',
        a: 'If a full kitchen, a KDS screen, and sending orders to the kitchen drive your day, keeping iiko or a similar restaurant POS makes sense. Heselo covers the room schedule, sessions, extensions, and club cash. With a simple menu — drinks and snacks — sales go straight onto the same Heselo session.',
      },
      {
        q: 'We take bookings on WhatsApp — what changes?',
        a: 'Guests still message you, but the admin puts the booking onto the room schedule right away. The whole team sees which VIP room is taken and for which hours, and moves and cancellations stay in the history. On arrival the booking becomes a live session — extensions and extras are not written down elsewhere.',
      },
      {
        q: 'How much does lounge bar software cost?',
        a: 'The Small plan for room lounges starts at {lounge} {currency} a month. Medium and Large plans, annual billing, and limits are on the pricing page. For a free demo, send your room count through the contact form — no card details needed; we show the schedule and a live session on your scenario.',
      },
    ],
    related: ['karaoke', 'antikafe', 'billiards', 'reservations'],
    ctaTitle: 'Room lounge demo',
    ctaBody: 'Tell us your room count — we show the schedule and a live session.',
  },
  {
    slug: 'reservations',
    shortTitle: 'Reservations',
    h1: 'Table and room reservation system',
    seoTitle: 'Reservation system & table reservation software | Heselo',
    seoDescription:
      'Table and room reservation system: schedule, booking list, move, cancel, and handoff to live session. Free demo.',
    keywords: [
      'reservation system',
      'table reservation system',
      'room reservation system',
      'table booking software',
    ],
    intro:
      'A reservation system is more than picking a free slot. A booking for a table or room must connect to the live session, payment, and history. Heselo keeps schedule and reservation list on the same data.',
    whoTitle: 'Who is it for?',
    whoBody:
      'Gaming clubs, karaoke, billiards, anti-cafés, and room lounges that want professional table, room, or station booking.',
    problemsTitle: 'Limits of standalone booking tools',
    problems: [
      'Schedule and live floor do not see each other',
      'Move/cancel history disappears',
      'Pre-order and deposits live elsewhere',
      'Past days are hard to audit',
    ],
    howTitle: 'What does Heselo give for reservations?',
    howBody:
      'Heselo shows tables, rooms, and stations by day and week on the schedule. The reservations list covers guest, time, labels, pre-order, deposit, move, and cancel. When guests arrive, the same booking becomes a live session.',
    featuresTitle: 'Reservation features',
    features: [
      {
        title: 'Schedule',
        desc: 'Tables, rooms, and stations in one view.',
      },
      {
        title: 'Reservation list',
        desc: 'Filters, status, history, and actions.',
      },
      {
        title: 'Live handoff',
        desc: 'One path from booking to active session.',
      },
      {
        title: 'Customer link',
        desc: 'Bookings connect to customer cards and visit history.',
      },
    ],
    differTitle: 'Why “just booking” is not enough',
    differBody:
      'A booking tool does not close cash or track inventory. Heselo ties reservations into daily venue work — so “reservation system” and “venue management” meet in one product.',
    faq: [
      {
        q: 'Are tables and rooms in the same system?',
        a: 'Yes. Both are set up individually and appear on the schedule and reservation list.',
      },
      {
        q: 'Are past days protected?',
        a: 'Yes. Changes to past days follow venue protection rules.',
      },
      {
        q: 'How is it different from an online booking widget?',
        a: 'A widget only lets guests pick a free slot; it knows nothing about what happens after they arrive. In Heselo the same booking becomes a live session and stays linked to payment, pre-order, and customer history. Schedule, floor, and cash all see the same data — the booking and the payment never drift apart.',
      },
      {
        q: 'How do phone and WhatsApp bookings work?',
        a: 'The admin enters a booking from a call or message straight onto the schedule: guest, time, table or room, and labels. Because everyone sees the same schedule, the risk of double-booking a place drops. Moves and cancellations stay in the history, so “who changed this?” always has an answer.',
      },
      {
        q: 'Can several venue types share one schedule?',
        a: 'Yes. PlayStation stations, billiard tables, and karaoke or lounge rooms are set up separately but appear on one schedule and one reservation list. In a mixed venue the admin runs every zone from one screen, and cash closes in the same shift.',
      },
      {
        q: 'Where is pricing listed?',
        a: 'Reservations and the schedule are the core of the panel; the price depends on your venue-type plan. The Small plan starts at {gaming} {currency} a month for PS/gaming, {billiards} for billiards, {antikafe} for anti-cafés, and {karaoke} for karaoke and lounges. The full table is on the pricing page, and the demo is free.',
      },
    ],
    related: ['karaoke', 'lounge', 'gaming', 'pos'],
    ctaTitle: 'Reservation demo',
    ctaBody: 'We show the schedule and booking process for your venue type.',
  },
  {
    slug: 'pos',
    shortTitle: 'Cash / POS',
    h1: 'Cash management system',
    seoTitle: 'Cash software & club POS system | Heselo',
    seoDescription:
      'Cash software: shifts, transactions, cash report, and count. Club POS in the same panel as booking and live floor.',
    keywords: [
      'cash software',
      'club POS',
      'cash management',
      'cash reconciliation',
      'instead of excel cash',
      'affordable club panel',
    ],
    intro:
      'Cash software is more than a pay button. Shift open, transactions, report, and count should answer the owner at day end. In Heselo, cash is tied to the same workday as reservations and live sessions — instead of Excel and WhatsApp.',
    whoTitle: 'Who is it for?',
    whoBody:
      'Gaming clubs, karaoke, billiards, anti-cafés, and room lounges that track cash/card/POS by shift, close the day, and reconcile counts.',
    problemsTitle: 'When cash tracking is weak',
    problems: [
      'Totals disagree at shift close',
      'Cash and card blur together',
      'It is hard to find which session was paid',
      'Counts stay on paper',
    ],
    howTitle: 'What does Heselo give for cash?',
    howBody:
      'Heselo opens the shift, records transactions, shows the cash report, and closes with a count. Payments from the live floor follow the same day and shift rules — closed-day history is kept.',
    featuresTitle: 'Cash capabilities',
    features: [
      {
        title: 'Open/close shift',
        desc: 'Day and shift stay distinct.',
      },
      {
        title: 'Transactions',
        desc: 'Cash, bank, and POS payments.',
      },
      {
        title: 'Cash report',
        desc: 'Period summaries.',
      },
      {
        title: 'Cash count',
        desc: 'Reconciliation at close.',
      },
    ],
    differTitle: 'Not a separate till + separate booking',
    differBody:
      'Many venues book in one tool and cash in another. Heselo puts cash in the same panel — so “where did this total come from?” gets rarer at close.',
    faq: [
      {
        q: 'Where are payment amounts calculated?',
        a: 'The system calculates balances and status automatically. The screen shows results only.',
      },
      {
        q: 'Is there a cash count?',
        a: 'Yes. Cash count is part of shift/day close.',
      },
      {
        q: 'How is it different from tracking cash in Excel or WhatsApp?',
        a: 'In Excel, totals get copied by hand at day end; in WhatsApp you get a “this much cash left” message that is hard to verify. In Heselo every payment is recorded against a session and a shift, the close includes a count, and any gap shows up immediately. Closed-day history is kept too.',
      },
      {
        q: 'Are cash, card, and bank payments shown separately?',
        a: 'Yes. Transactions are recorded by payment method — cash, bank, or POS — and the cash report breaks each method out by shift and period. At shift close the counted cash is compared with the system total, so mistakes like a card payment logged as cash surface quickly.',
      },
      {
        q: 'When should we keep a restaurant POS like iiko or Clopos?',
        a: 'If the kitchen, KDS, and menu orders are the core business, keeping a restaurant POS makes sense. Heselo cash closes room, table, and station time, live sessions, and booking payments in the same shift. If your sales are mostly time, drinks, and snacks, a separate restaurant till is usually unnecessary.',
      },
      {
        q: 'How much does it cost?',
        a: 'Plans are priced by venue type: the Small plan starts at {gaming} {currency} a month for PS/gaming, {billiards} for billiards, {antikafe} for anti-cafés, and {karaoke} for karaoke and lounges. Medium and Large plans, annual billing, and limits are on the pricing page. Request a free demo through the contact form — no card needed.',
      },
    ],
    related: ['gaming', 'inventory', 'reservations'],
    ctaTitle: 'Cash shift demo',
    ctaBody: 'We walk through shift and count with a realistic scenario.',
  },
  {
    slug: 'inventory',
    shortTitle: 'Inventory',
    h1: 'Inventory management system',
    seoTitle: 'Inventory management & club stock software | Heselo',
    seoDescription:
      'Inventory management: product catalog, stock levels, and counts. Club stock software in the same panel as cash and live sales.',
    keywords: [
      'inventory management system',
      'club inventory software',
      'stock count',
      'product catalog',
    ],
    intro:
      'When inventory sits apart from sales, levels look fine on paper and wrong on the shelf. In Heselo, products, inventory, and quick sale share one catalog — linked to live sessions and cash.',
    whoTitle: 'Who is it for?',
    whoBody:
      'Gaming clubs, karaoke, billiards, anti-cafés, and room lounges that track snack and drink stock, run counts, and sell without a booking.',
    problemsTitle: 'When stock tracking is weak',
    problems: [
      'Sales happen but levels do not update',
      'Count journals get lost',
      'Prices and lists live in several places',
      'Walk-in sales never hit inventory',
    ],
    howTitle: 'What does Heselo give for inventory?',
    howBody:
      'Heselo keeps the product catalog with prices. Stock levels and count journals share the same list. Live sessions and quick sale use that catalog — statistics show inventory figures.',
    featuresTitle: 'Inventory capabilities',
    features: [
      {
        title: 'Product catalog',
        desc: 'Prices and list in one place.',
      },
      {
        title: 'Stock levels',
        desc: 'Levels aligned with sales.',
      },
      {
        title: 'Count journals',
        desc: 'Count history kept.',
      },
      {
        title: 'Quick sale',
        desc: 'Sell without a booking on the same product list.',
      },
    ],
    differTitle: 'Unlike a separate stock spreadsheet',
    differBody:
      'Spreadsheets get filled at night; Heselo uses the same data at sale time. Inventory stays tied to booking and cash.',
    faq: [
      {
        q: 'Is inventory a separate module?',
        a: 'Yes, but it shares the catalog with products and quick sale.',
      },
      {
        q: 'Is inventory in statistics?',
        a: 'Yes. Inventory statistics cover summaries and cuts.',
      },
      {
        q: 'Which venues is it a fit for — and which not?',
        a: 'It fits gaming clubs, karaoke, billiards, anti-cafés, and lounges that track drinks, snacks, and bar stock. If you need many suppliers, recipe-based write-offs, or a large kitchen store, a specialised inventory or restaurant system is the better choice. For a club bar, one catalog shared with cash is usually enough.',
      },
      {
        q: 'How is it different from a stock spreadsheet?',
        a: 'A spreadsheet is usually filled in at night and lags behind sales. In Heselo, adding a product in a live session or quick sale uses the same catalog, so stock levels keep pace with sales. Count journals are kept, so you can later check who counted what and when.',
      },
      {
        q: 'Do walk-in sales come off stock too?',
        a: 'Yes. Quick sale runs without a booking but uses the same product catalog as live sessions. Even when a guest only buys a drink or a snack, the sale is recorded in cash and the stock level updates — no more “sold, but inventory never changed”.',
      },
      {
        q: 'Where is pricing listed?',
        a: 'Plans are priced by venue type: from {gaming} {currency} a month for PS/gaming, {billiards} for billiards, {antikafe} for anti-cafés, and {karaoke} for karaoke and lounges. Plan limits and annual billing are on the pricing page. The demo is free — share your product count in the contact form and we walk through stock and counts.',
      },
    ],
    related: ['pos', 'gaming', 'antikafe'],
    ctaTitle: 'Inventory and catalog demo',
    ctaBody: 'We show the product and count process for your venue.',
  },
]
