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
    'how karaoke room booking works',
    'what is a billiards club management system',
    'what is an anti-cafe management system',
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
]
