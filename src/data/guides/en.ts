import type { GuideCopy, GuidesHubCopy } from './types'

export const guidesHubEn: GuidesHubCopy = {
  eyebrow: 'Guides',
  h1: 'How club and room operations actually work',
  intro:
    'These articles answer common search questions — not a sales pitch. Each piece ends with a link to the matching Heselo solution page.',
  seoTitle: 'Guides — how club operations work | Heselo',
  seoDescription:
    'Not a sales pitch: how gaming clubs, karaoke, billiards, and anti-cafés run hourly booking, live sessions, and cash.',
  keywords: [
    'what is a gaming club management system',
    'playstation club software',
    'billiards booking system',
    'karaoke booking system',
  ],
  cardCta: 'Read',
}

export const guidesEn: GuideCopy[] = [
  {
    slug: 'gaming-club-management',
    shortTitle: 'Gaming club management',
    h1: 'What is a gaming club management system?',
    seoTitle: 'What is a gaming club management system? | Heselo guide',
    seoDescription:
      'How PlayStation, console, and gaming clubs run station booking, live sessions, cash, and snacks. PS club software explained — not a product pitch.',
    keywords: [
      'what is a gaming club management system',
      'playstation club software explained',
      'console club management',
      'PS club booking',
    ],
    datePublished: '2026-08-13',
    dateModified: '2026-09-07',
    intro:
      'A gaming club management system keeps PlayStation, console, or PC station bookings, live play, and cash in one panel. A timer can show whether a station is free; it does not give booking history, extensions, snack sales, or a shift close.',
    sections: [
      {
        id: 'why',
        title: 'Why PS clubs look for this',
        paragraphs: [
          'PlayStation clubs run by the hour: phone bookings, “which console is free?”, extensions, and snacks. When those live on separate sheets, the night shift blurs.',
          'A good system treats the station as a resource — the booking becomes a live session, and payment hits the same shift.',
        ],
      },
      {
        id: 'modules',
        title: 'What it usually covers',
        paragraphs: ['The practical pieces look similar:'],
        bullets: [
          'Station booking (PS, console, PC)',
          'Live session (time, extend, pay)',
          'Quick sale (snacks and drinks)',
          'Cash shift and count',
          'Customer history',
        ],
      },
      {
        id: 'timer',
        title: 'How it differs from a timer',
        paragraphs: [
          'A timer only counts duration. Booking lists, moves, cash count, and stock stay elsewhere. At close, “who played and what sold?” goes back to a spreadsheet.',
        ],
      },
      {
        id: 'heselo',
        title: 'How Heselo helps a gaming club',
        paragraphs: [
          'Heselo keeps the station as the same resource on the schedule and live floor. PS and PC can share one panel. Payment balances are calculated on the server.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is it only for PlayStation, or PC too?',
        a: 'Both. Different station types share the same schedule and cash flow.',
      },
      {
        q: 'How are extensions logged when time ends?',
        a: 'Extend the live session; payment stays on the same record — no extra sheet.',
      },
      {
        q: 'How do I get a demo?',
        a: 'Pick gaming club / PS on the contact form and share your station count.',
      },
    ],
    relatedSolutions: ['gaming', 'billiards', 'reservations', 'pos'],
    ctaTitle: 'Gaming club demo',
    ctaBody: 'Tell us your PS and station count — we show booking and live flow.',
  },
  {
    slug: 'karaoke-room-booking',
    shortTitle: 'Karaoke room booking',
    h1: 'How do karaoke rooms get booked?',
    seoTitle: 'How karaoke room booking works | Heselo guide',
    seoDescription:
      'Karaoke room booking: schedule, session length, extras, and cash. Karaoke management system explained.',
    keywords: [
      'karaoke room booking',
      'karaoke management system',
      'karaoke room reservation',
      'karaoke software',
    ],
    datePublished: '2026-08-13',
    dateModified: '2026-08-13',
    intro:
      'In karaoke the unit is the room. Booking is more than picking a free slot: when guests arrive, the same record should become a live session, with extensions and drinks in the same flow.',
    sections: [
      {
        id: 'why',
        title: 'Why room bookings get lost',
        paragraphs: [
          'Phone, WhatsApp, and a paper grid can double-book the same room. When several rooms fill at once, the desk sees status too late.',
        ],
      },
      {
        id: 'flow',
        title: 'What a solid karaoke flow looks like',
        paragraphs: [
          'Book the room on the schedule. Open a session on arrival. When time ends, extend or pay on the same record. Cash closes the shift.',
        ],
        bullets: ['Room schedule', 'Live session', 'Extras', 'Shift close'],
      },
      {
        id: 'form',
        title: 'Is an online booking form enough?',
        paragraphs: [
          'A booking page does not run the room after guests arrive. Floor staff adding products and cash close need the same data.',
        ],
      },
      {
        id: 'heselo',
        title: 'What Heselo gives karaoke venues',
        paragraphs: [
          'Rooms are separate resources. Schedule, live tracking, and cash share one panel. Karaoke and lounge rooms can run together.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can several rooms show on one board?',
        a: 'Yes. All rooms share the schedule and live tracking.',
      },
      {
        q: 'Is pre-order supported?',
        a: 'Reservation forms include labels and pre-order fields.',
      },
      {
        q: 'How do I get a demo?',
        a: 'Pick karaoke on the contact form and share your room count.',
      },
    ],
    relatedSolutions: ['karaoke', 'lounge', 'reservations', 'pos'],
    ctaTitle: 'Karaoke demo',
    ctaBody: 'Tell us your room count — we show booking and live flow.',
  },
  {
    slug: 'billiards-club-management',
    shortTitle: 'Billiards club management',
    h1: 'How do billiards clubs run the floor?',
    seoTitle: 'What is a billiards club management system? | Heselo guide',
    seoDescription:
      'How billiards table booking and scheduling connect to live play, time, and cash — explained. For product pages, see the billiards solution.',
    keywords: [
      'what is a billiards club management system',
      'billiards table booking explained',
      'billiards scheduling explained',
      'pool hall operations',
    ],
    datePublished: '2026-08-13',
    dateModified: '2026-09-07',
    intro:
      'In a billiards club, tables run on a schedule. Which table is free, when play started, whether extras were added — when booking and live status sit apart, the night cash close stretches.',
    sections: [
      {
        id: 'why',
        title: 'Why a board and a phone are not enough',
        paragraphs: [
          'A board may lag; a phone booking does not see live table status. VIP rooms and regular tables on separate calendars collide.',
        ],
      },
      {
        id: 'time',
        title: 'How time and payment should connect',
        paragraphs: [
          'A session opens when play starts. Pause, extension, and products stay on the same record. Price follows resource and duration rules; cash closes the shift.',
        ],
      },
      {
        id: 'mix',
        title: 'Billiards plus karaoke or lounge',
        paragraphs: [
          'Mixed venues need tables and rooms in one panel. Otherwise cash is assembled from two tools.',
        ],
      },
      {
        id: 'heselo',
        title: 'How Heselo works for billiards',
        paragraphs: [
          'Each table and room is a resource. Schedule, live play, and cash share the same day rules. Unlike a timer, you also get booking history and a cash count.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can VIP rooms and regular tables coexist?',
        a: 'Yes. Both share schedule and cash flow.',
      },
      {
        q: 'Is a timer enough?',
        a: 'Maybe in a tiny hall. If you need booking, stock, and shift close, a full panel makes fewer mistakes.',
      },
      {
        q: 'How do I get a demo?',
        a: 'Pick billiards on the contact form and share your table count.',
      },
    ],
    relatedSolutions: ['billiards', 'gaming', 'karaoke', 'pos'],
    ctaTitle: 'Billiards demo',
    ctaBody: 'Tell us your table count — we show the live play flow.',
  },
  {
    slug: 'room-lounge-management',
    shortTitle: 'Room lounge management',
    h1: 'How do room lounges run bookings?',
    seoTitle: 'What is a room lounge management system? | Heselo guide',
    seoDescription:
      'Room lounges: VIP room booking, sessions, extras, and cash. Lounge room software explained.',
    keywords: [
      'room lounge software',
      'lounge room booking',
      'VIP room reservation',
      'lounge management system',
    ],
    datePublished: '2026-08-13',
    dateModified: '2026-08-13',
    intro:
      'A room lounge is not an open cafe: guests take a room, sessions can extend, drinks and snacks are added. Management should connect the room schedule to live sessions and cash.',
    sections: [
      {
        id: 'unit',
        title: 'Why the unit is the room',
        paragraphs: [
          'Open-table flow does not run a closed room session. One room must not be given to two groups; status belongs on the schedule, not a whiteboard.',
        ],
      },
      {
        id: 'flow',
        title: 'What the daily flow looks like',
        paragraphs: [
          'A booking is written to a room. On arrival a session opens. Extra time and products stay on the same record. At close, cash should match room occupancy.',
        ],
      },
      {
        id: 'mix',
        title: 'Lounge plus karaoke or billiards',
        paragraphs: [
          'Many venues are mixed. One panel keeps rooms, tables, and stations on one cash drawer — no need to stitch two apps.',
        ],
      },
      {
        id: 'heselo',
        title: 'What Heselo does for a room lounge',
        paragraphs: [
          'Rooms use the same resource logic as karaoke. Schedule, live tracking, cash, and customer history live in one panel.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can an open hall share the same system?',
        a: 'Yes. Tables and rooms share schedule and cash.',
      },
      {
        q: 'Is this coworking software?',
        a: 'No. The focus is session-based entertainment rooms — PS, karaoke, billiards, anti-café, lounge.',
      },
      {
        q: 'How do I get a demo?',
        a: 'Pick room lounge on the contact form and share your room count.',
      },
    ],
    relatedSolutions: ['lounge', 'karaoke', 'antikafe', 'reservations'],
    ctaTitle: 'Room lounge demo',
    ctaBody: 'Tell us your room count — we show booking and live flow.',
  },
{
    slug: 'antikafe-management-system',
    shortTitle: 'Anti-café management',
    h1: 'What is an anti-café management system?',
    seoTitle: 'What is an anti-café management system? | Heselo guide',
    seoDescription:
      'What an anti-café management system covers: hourly payment, booking, live sessions, and cash — practical guide for time-based venues.',
    keywords: [
      'anti-cafe management system',
      'anti-cafe software',
      'hourly venue booking',
      'time-based cafe POS',
    ],
    datePublished: '2026-08-12',
    dateModified: '2026-08-12',
    intro:
      'An anti-café management system runs the daily work of a time-based venue — table and room booking, live sessions, product sales, cash, and sometimes inventory — in one panel. It is not just a timer or a standalone POS; the goal is to replace whiteboards, messengers, and spreadsheets with one workflow.',
    sections: [
      {
        id: 'what',
        title: 'What is the anti-café business model?',
        paragraphs: [
          'Guests usually pay for time: a table, lounge corner, room, or sometimes a PC station. Tea, snacks, and drinks add revenue. Flow changes fast — walk-ins, phone bookings, and late hours compete for the same resources.',
          'So anti-café software must answer not only “how long did they stay?” but also which seat is free, when the booking starts, and how the day closes.',
        ],
      },
      {
        id: 'modules',
        title: 'What does the system typically include?',
        paragraphs: ['Practical needs map to similar modules:'],
        bullets: [
          'Table and room booking (schedule, move, cancel)',
          'Live session (active seat, time, products, payment)',
          'Cash flow (shift, report, count)',
          'Product catalog and inventory (tea, snacks)',
          'Customer notes and simple stats',
          'Staff permissions',
        ],
      },
      {
        id: 'hourly',
        title: 'How should hourly payment work?',
        paragraphs: [
          'A standalone timer may not give booking history or cash count. In a solid flow, booking becomes a live session; extensions and payment stay on one record. Cash, card, and POS stay separate — less confusion on night shifts.',
        ],
      },
      {
        id: 'vs-gaming',
        title: 'Anti-café vs gaming club',
        paragraphs: [
          'Gaming clubs focus on PC/console stations; anti-cafés emphasize tables, rooms, and lounge atmosphere. Technically the need is the same: resource schedule + live session + cash. One panel can run both zone types.',
        ],
      },
      {
        id: 'choose',
        title: 'What to check when choosing software',
        paragraphs: [
          'Is there one flow from booking to payment? Do walk-in sales use the same catalog? Are past days and counts preserved? Does the panel support AZ / EN / RU? Is pricing transparent?',
          'Test your real night shift, not just the marketing feature list — especially as table and room count grows.',
        ],
      },
      {
        id: 'heselo',
        title: 'How Heselo fits anti-cafés',
        paragraphs: [
          'Heselo is venue management: schedule, live floor, cash, products, and inventory in one panel. Anti-café, gaming club, and billiards can share the same resource logic. Payment balances are calculated on the server.',
          'See our anti-café solution page and linked reservation and cash pages below.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is a separate timer app enough?',
        a: 'Maybe at very small scale; if you need booking, inventory, and cash count, a full venue system reduces errors.',
      },
      {
        q: 'Are room bookings supported?',
        a: 'Yes. Rooms can be resources on the schedule — same logic as VIP or karaoke rooms.',
      },
      {
        q: 'How do we get a demo?',
        a: 'Use the contact form — share table/room count and a typical day flow.',
      },
    ],
    relatedSolutions: ['antikafe', 'gaming', 'reservations', 'pos'],
    ctaTitle: 'Anti-café flow demo',
    ctaBody: 'We walk through booking to cash close.',
  },
  {
    slug: 'playstation-club-software',
    shortTitle: 'PS club software',
    h1: 'What to look for in PlayStation club software',
    seoTitle: 'PlayStation club software — what it must cover | Heselo guide',
    seoDescription:
      'PlayStation and console club software: station booking, live sessions, cash. A practical checklist — not a sales page.',
    keywords: [
      'playstation club software',
      'PS club software',
      'console club management',
      'console club software',
    ],
    datePublished: '2026-09-07',
    dateModified: '2026-09-07',
    intro:
      'PlayStation club software is more than a timer. Phone bookings, “which PS is free?”, extensions, snacks, and the night cash close should live in one flow. This guide is a selection checklist — not a product pitch.',
    sections: [
      {
        id: 'why',
        title: 'Why a PS club needs real software',
        paragraphs: [
          'Console clubs run by the hour. Boards lag, WhatsApp bookings miss live status, extensions land on another sheet. At close, “who played what?” goes back to Excel.',
          'Good software treats the station as a resource: booking → live session → payment on one record.',
        ],
      },
      {
        id: 'must-have',
        title: 'Minimum checklist',
        paragraphs: ['In practice you need:'],
        bullets: [
          'PS / console / PC stations as separate resources',
          'Schedule booking, move, and cancel',
          'Live session: time, extend, pay',
          'Quick sale (snacks/drinks) from the same catalog',
          'Cash shift and count',
          'Staff permissions (front desk vs owner)',
        ],
      },
      {
        id: 'console',
        title: 'Is a “console club” different?',
        paragraphs: [
          'Searches for “console club” and “PS club” usually mean the same ops problem. The difference is station type, not brand. The system should run PS5, other consoles, and PC on one schedule.',
          'For a broader “what is a gaming club management system?” explainer, see the sibling guide; this page is about choosing software.',
        ],
      },
      {
        id: 'timer',
        title: 'Is a timer enough?',
        paragraphs: [
          'Maybe in a tiny hall. If you need booking history, customer cards, inventory, and cash count, a timer will not close the night cleanly.',
        ],
      },
      {
        id: 'heselo',
        title: 'How Heselo fits the checklist',
        paragraphs: [
          'Heselo keeps the station as one resource on the schedule and live floor. PS, console, and PC can share a panel. Commercial page: gaming / PS club solution.',
        ],
      },
    ],
    faq: [
      {
        q: 'PlayStation only, or other consoles too?',
        a: 'Both. Station types can differ; schedule and cash stay shared.',
      },
      {
        q: 'Can PC stations share the same software?',
        a: 'Yes. Different resources hit the same shift.',
      },
      {
        q: 'How do I get a demo?',
        a: 'Pick gaming club / PS on the contact form and share station count.',
      },
    ],
    relatedSolutions: ['gaming', 'reservations', 'pos', 'inventory'],
    ctaTitle: 'PS club flow demo',
    ctaBody: 'Tell us station and console count — we show booking and live sessions.',
  },
  {
    slug: 'billiards-table-booking',
    shortTitle: 'Billiards table booking',
    h1: 'How billiards table booking and scheduling should work',
    seoTitle: 'Billiards table booking & scheduling explained | Heselo guide',
    seoDescription:
      'Billiards booking and scheduling: table reservations, calendar, live play, and cash — a focused ops guide.',
    keywords: [
      'billiards booking system',
      'billiards scheduling system',
      'billiards table booking',
      'pool hall scheduling',
    ],
    datePublished: '2026-09-07',
    dateModified: '2026-09-07',
    intro:
      'A billiards booking system is not just “table noted.” If scheduling, live play, and payment sit apart, the board and the phone collide. This page zooms in on booking + scheduling — narrower than the general “how billiards clubs run” guide.',
    sections: [
      {
        id: 'booking',
        title: 'What table booking must include',
        paragraphs: [
          'A booking needs date/time, table or VIP room, duration, and a guest contact. Moves and cancels should leave history — otherwise the night shift stalls on “who wrote that?”',
        ],
      },
      {
        id: 'schedule',
        title: 'Why scheduling should not be a separate tool',
        paragraphs: [
          'One calendar should show every table. If VIP rooms live in another spreadsheet, two bookings hit the same slot. When scheduling and booking share a panel, free tables are visible in real time.',
        ],
      },
      {
        id: 'live',
        title: 'From booking to live play',
        paragraphs: [
          'On arrival, open a session. Pause, extension, and extras stay on the same record. Price follows table type and duration; cash closes the shift.',
        ],
      },
      {
        id: 'mistakes',
        title: 'Common mistakes',
        paragraphs: ['Avoid:'],
        bullets: [
          'Phone notes + whiteboard (two sources of truth)',
          'Timer only, no bookings',
          'VIP rooms in a “side system”',
          'Play time and payment on separate sheets',
        ],
      },
      {
        id: 'heselo',
        title: 'How table booking looks in Heselo',
        paragraphs: [
          'Each table and room is a resource. Schedule, live play, and cash share the same day rules. Commercial page: billiards club solution.',
        ],
      },
    ],
    faq: [
      {
        q: 'Are booking and scheduling the same?',
        a: 'Booking is a specific reservation; scheduling is the calendar view. Both belong in one panel.',
      },
      {
        q: 'Can rooms and tables coexist?',
        a: 'Yes. Both share schedule and cash.',
      },
      {
        q: 'How do I get a demo?',
        a: 'Pick billiards on the contact form and share table count.',
      },
    ],
    relatedSolutions: ['billiards', 'reservations', 'gaming', 'pos'],
    ctaTitle: 'Billiards booking demo',
    ctaBody: 'Tell us your table count — we show calendar and live play.',
  },
  {
    slug: 'karaoke-booking-system',
    shortTitle: 'Karaoke booking system',
    h1: 'What to check when choosing a karaoke booking system',
    seoTitle: 'Karaoke booking system — selection checklist | Heselo guide',
    seoDescription:
      'Karaoke booking system checklist: room booking, sessions, extras, and cash. How to choose — not a sales pitch.',
    keywords: [
      'karaoke booking system',
      'karaoke reservation software',
      'karaoke room booking system',
      'choose karaoke software',
    ],
    datePublished: '2026-09-07',
    dateModified: '2026-09-07',
    intro:
      'A karaoke booking system is more than an online form. When rooms fill, session time, drink orders, and payment must stay in one flow. The sibling guide covers how rooms get booked; this page is about what to verify before you buy.',
    sections: [
      {
        id: 'form-vs-system',
        title: 'Booking form vs management system',
        paragraphs: [
          'A web form can collect reservations, but staff still cannot run the room once guests arrive. A management system keeps booking → live room session → cash in one chain.',
        ],
      },
      {
        id: 'checklist',
        title: 'Selection checklist',
        paragraphs: ['Ask:'],
        bullets: [
          'Do several rooms appear on one schedule?',
          'If a session extends, does payment stay on the same record?',
          'Are labels / pre-orders supported?',
          'Is there a cash shift close?',
          'Can lounge or billiards rooms share the panel?',
        ],
      },
      {
        id: 'peak',
        title: 'What to test at peak hours',
        paragraphs: [
          'Friday–Saturday nights move several rooms at once. In a demo, run peak scenarios: move, cancel, late guests, extra hour.',
        ],
      },
      {
        id: 'heselo',
        title: 'What Heselo gives karaoke venues',
        paragraphs: [
          'Rooms are resources on the schedule and live floor. Products and payment stay on the session. Commercial page: karaoke solution.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is a booking website enough?',
        a: 'For collecting requests, maybe; for room sessions and cash, you need a full panel.',
      },
      {
        q: 'Can VIP and standard rooms differ?',
        a: 'Yes. Each room can be its own resource and tariff.',
      },
      {
        q: 'How do I get a demo?',
        a: 'Pick karaoke on the contact form and share room count.',
      },
    ],
    relatedSolutions: ['karaoke', 'lounge', 'reservations', 'pos'],
    ctaTitle: 'Karaoke booking demo',
    ctaBody: 'Tell us your room count — we show booking and live room flow.',
  },
  {
    slug: 'club-pos-vs-excel',
    shortTitle: 'Excel vs panel',
    h1: 'Why Excel and WhatsApp stop working for clubs',
    seoTitle: 'Club ops: Excel & WhatsApp vs a venue panel | Heselo guide',
    seoDescription:
      'Why Excel and WhatsApp bookings break in gaming, karaoke, and billiards clubs — and what a cash + live-floor panel changes.',
    keywords: [
      'club excel management',
      'whatsapp booking problems',
      'club cash software',
      'venue management panel',
    ],
    datePublished: '2026-09-07',
    dateModified: '2026-09-07',
    intro:
      'Many clubs start the day with a spreadsheet and a WhatsApp group. It works at tiny scale; when tables/rooms and shifts grow, bookings vanish and cash close stretches. This guide names the pain points and what a panel changes.',
    sections: [
      {
        id: 'pain',
        title: 'Where spreadsheets and chat fail',
        paragraphs: [
          'Bookings live in messages, the board lags, payment sheets are separate. The same table gets written twice. Night shifts lose 30–40 minutes on “who sold what?”',
        ],
      },
      {
        id: 'signals',
        title: 'Signals it is time for a panel',
        paragraphs: ['If two of these are true, sheets are not enough:'],
        bullets: [
          '10+ bookings a day or 5+ active places at once',
          'Two shifts / two staff touch the same resources',
          'Snacks and drinks do not match cash',
          'The owner rebuilds yesterday’s report from Excel',
        ],
      },
      {
        id: 'panel',
        title: 'What a panel unifies',
        paragraphs: [
          'Schedule, live session, quick sale, and cash share one day of rules. Payment balances are calculated on the server — no “add it up yourself.”',
        ],
      },
      {
        id: 'not-erp',
        title: 'This is not a heavy ERP',
        paragraphs: [
          'A club panel is not a restaurant-chain ERP. The job is simple: bookings do not get lost, table/room status is true, the shift closes.',
        ],
      },
      {
        id: 'heselo',
        title: 'How Heselo fills the gap',
        paragraphs: [
          'Heselo is built as a venue panel: reservations, live floor, cash, and inventory. See pricing and cash solution pages below.',
        ],
      },
    ],
    faq: [
      {
        q: 'Do we have to drop Excel entirely?',
        a: 'For daily booking and cash, yes. Monthly finance can stay in a spreadsheet.',
      },
      {
        q: 'Is it early for a small club?',
        a: 'One table / two rooms — maybe; if you plan to grow, switching early is cheaper.',
      },
      {
        q: 'How do I get a demo?',
        a: 'Share your venue type — we show the screens for your flow.',
      },
    ],
    relatedSolutions: ['pos', 'reservations', 'gaming', 'inventory'],
    ctaTitle: 'Demo without the spreadsheet',
    ctaBody: 'Tell us venue type and table/room count — 15 minutes on the panel.',
  },
]
