import type { GuideCopy, GuidesHubCopy } from './types'
import { comparisonGuides } from './comparisonGuides'
import { gapEducationalGuides } from './gapEducationalGuides'

export const guidesHubEn: GuidesHubCopy = {
  eyebrow: 'Guides',
  h1: 'How club and room operations actually work',
  intro:
    'These articles answer common search questions — not a sales pitch. Each piece ends with a link to the matching Heselo solution page.',
  seoTitle: 'Guides — club ops and POS alternatives | Heselo',
  seoDescription:
    'Gaming, karaoke, billiards and anti-café operations; honest alternatives to iiko, Clopos, Dine and Excel for room-time venues.',
  keywords: [
    'what is a gaming club management system',
    'playstation club software',
    'iiko alternative for clubs',
    'clopos alternative',
    'dine.az alternative',
    'karaoke booking system',
  ],
  cardCta: 'Read',
  comparisonTitle: 'Alternatives and comparisons',
  comparisonIntro:
    'Looking at iiko, Clopos, Dine, MinuPOS or similar systems? Honest comparisons for club and room-time operations.',
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
    dateModified: '2026-09-23',
    intro:
      'A gaming club management system keeps PlayStation, console, or PC station bookings, live play, and cash in one panel. A timer can show whether a station is free; it does not give booking history, extensions, snack sales, or a shift close.',
    sections: [
      {
        id: 'why',
        title: 'Why PS clubs look for this',
        paragraphs: [
          'PlayStation clubs run by the hour: phone bookings, “which console is free?”, extensions, and snacks. When those live on separate sheets, the night shift blurs.',
          'A good system sets up each station individually — the booking becomes a live session, and payment hits the same shift.',
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
          'A timer only counts duration. Booking lists, moves, cash count, and stock stay elsewhere. At shift close you end up checking the numbers in Excel again.',
        ],
      },
      {
        id: 'heselo',
        title: 'How Heselo helps a gaming club',
        paragraphs: [
          'Heselo keeps the station as the same unit on the schedule and live floor. PS and PC can share one panel. Amounts due are calculated automatically by the system.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is it only for PlayStation, or PC too?',
        a: 'Both. Different station types follow the same schedule, session, and cash rules.',
      },
      {
        q: 'How are extensions logged when time ends?',
        a: 'Extend the live session; payment stays on the same record — no extra sheet.',
      },
      {
        q: 'Can snacks and drinks go on the same bill as play time?',
        a: 'Yes. Quick sales are added to the live session of the station, so the guest pays once for time and snacks together. The items come from the shared product catalog, so stock and the cash shift both reflect the sale — no separate snack notebook at the end of the night.',
      },
      {
        q: 'How does the owner see the day without being at the club?',
        a: 'The panel runs in a browser, so the owner can check the schedule, active stations, and the cash shift from a phone or laptop. Staff permissions keep front-desk and owner roles separate: the desk runs sessions and sales, while reports and settings stay with the owner.',
      },
      {
        q: 'How do I get a demo?',
        a: 'Pick gaming club / PS on the contact form and share your station count.',
      },
    ],
    relatedSolutions: ['gaming', 'billiards', 'reservations', 'pos'],
    ctaTitle: 'Gaming club demo',
    ctaBody: 'Tell us your PS and station count — we show the schedule and a live session.',
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
    dateModified: '2026-09-23',
    intro:
      'In karaoke the main unit is the room. Booking is more than picking a free slot: when guests arrive, the same record should become a live session, with extensions and drinks in the same session.',
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
        title: 'What a solid karaoke process looks like',
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
          'Each room is set up individually. Schedule, live tracking, and cash share one panel. Karaoke and lounge rooms can run together.',
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
        q: 'What happens when a group wants to stay longer?',
        a: 'Staff extend the live session of the room, and the extra time is added to the same bill as the drinks. Before extending, the schedule shows whether the next booking for that room starts soon, so the desk can offer another free room instead of cutting the next group short.',
      },
      {
        q: 'How do we avoid giving one room to two groups?',
        a: 'Keep every booking — phone, WhatsApp, or walk-in — on one room schedule that the whole team sees. When a slot is taken, it shows as occupied for everyone at once. Moves and cancellations stay in the history, so the evening shift knows exactly who changed what.',
      },
      {
        q: 'How do I get a demo?',
        a: 'Pick karaoke on the contact form and share your room count.',
      },
    ],
    relatedSolutions: ['karaoke', 'lounge', 'reservations', 'pos'],
    ctaTitle: 'Karaoke demo',
    ctaBody: 'Tell us your room count — we show the schedule and a live session.',
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
    dateModified: '2026-09-23',
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
          'A session opens when play starts. Pause, extension, and products stay on the same record. Price follows table type and duration rules; cash closes the shift.',
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
          'Each table and room is set up separately. Schedule, live play, and cash follow the same rules. Unlike a timer, you also get booking history and a cash count.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can VIP rooms and regular tables coexist?',
        a: 'Yes. Both follow the same schedule, session, and cash rules.',
      },
      {
        q: 'Is a timer enough?',
        a: 'Maybe in a tiny hall. If you need booking, stock, and shift close, a full panel makes fewer mistakes.',
      },
      {
        q: 'Can different tables have different prices?',
        a: 'Yes. Each table is set up on its own, so a pool table, a Russian billiards table, and a VIP room can each follow their own tariff. The system calculates the amount from the table type and actual play time, so staff do not work out the bill by hand.',
      },
      {
        q: 'What if guests pause the game?',
        a: 'The session can be paused and resumed on the same record, so the break is not billed as play time. Drinks and snacks ordered during the pause stay on the same table bill, and the final amount lands in the current cash shift when the guests pay.',
      },
      {
        q: 'How do I get a demo?',
        a: 'Pick billiards on the contact form and share your table count.',
      },
    ],
    relatedSolutions: ['billiards', 'gaming', 'karaoke', 'pos'],
    ctaTitle: 'Billiards demo',
    ctaBody: 'Tell us your table count — we show the schedule and a live play session.',
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
    dateModified: '2026-09-23',
    intro:
      'A room lounge is not an open cafe: guests take a room, sessions can extend, drinks and snacks are added. Management should connect the room schedule to live sessions and cash.',
    sections: [
      {
        id: 'unit',
        title: 'Why the main unit is the room',
        paragraphs: [
          'An open-table setup does not run a closed room session. One room must not be given to two groups; status belongs on the schedule, not a whiteboard.',
        ],
      },
      {
        id: 'flow',
        title: 'What the daily work looks like',
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
          'Rooms are set up the same way as karaoke rooms. Schedule, live tracking, cash, and customer history live in one panel.',
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
        q: 'I am looking for lounge bar software — where is the product page?',
        a: 'This article explains how room lounges work. If you are choosing lounge bar management software, go to the room lounge solution page: VIP room booking, live sessions, bar sales, cash, and inventory in one panel, with the Small plan from 39 AZN/month and a free demo.',
      },
      {
        q: 'Can bar sales outside the rooms go through the same cash?',
        a: 'Yes. Quick sales at the bar use the same product catalog as room orders, so stock and the cash shift see every sale. Room sessions and walk-up bar sales close in one shift report — the owner does not reconcile two separate registers at the end of the night.',
      },
      {
        q: 'How do I get a demo?',
        a: 'Pick room lounge on the contact form and share your room count.',
      },
    ],
    relatedSolutions: ['lounge', 'karaoke', 'antikafe', 'reservations'],
    ctaTitle: 'Room lounge demo',
    ctaBody: 'Tell us your room count — we show the schedule and a live session.',
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
    dateModified: '2026-09-23',
    intro:
      'An anti-café management system runs the daily work of a time-based venue — table and room booking, live sessions, product sales, cash, and sometimes inventory — in one panel. It is not just a timer or a standalone POS; the goal is to tie whiteboards, messengers, and spreadsheets into one working day.',
    sections: [
      {
        id: 'what',
        title: 'What is the anti-café business model?',
        paragraphs: [
          'Guests usually pay for time: a table, lounge corner, room, or sometimes a PC station. Tea, snacks, and drinks add revenue. The day changes fast — walk-ins, phone bookings, and late hours compete for the same tables and rooms.',
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
          'Cash shift (open, report, count)',
          'Product catalog and inventory (tea, snacks)',
          'Customer notes and simple stats',
          'Staff permissions',
        ],
      },
      {
        id: 'hourly',
        title: 'How should hourly payment work?',
        paragraphs: [
          'A standalone timer may not give booking history or cash count. In a solid process, booking becomes a live session; extensions and payment stay on one record. Cash, card, and POS stay separate — less confusion on night shifts.',
        ],
      },
      {
        id: 'vs-gaming',
        title: 'Anti-café vs gaming club',
        paragraphs: [
          'Gaming clubs focus on PC/console stations; anti-cafés emphasize tables, rooms, and lounge atmosphere. Technically the need is the same: station and table schedule + live session + cash. One panel can run both zone types.',
        ],
      },
      {
        id: 'choose',
        title: 'What to check when choosing software',
        paragraphs: [
          'Is there one process from booking to payment? Do walk-in sales use the same catalog? Are past days and counts preserved? Does the panel support AZ / EN / RU? Is pricing transparent?',
          'Test your real night shift, not just the marketing feature list — especially as table and room count grows.',
        ],
      },
      {
        id: 'heselo',
        title: 'How Heselo fits anti-cafés',
        paragraphs: [
          'Heselo is venue management: schedule, live floor, cash, products, and inventory in one panel. Anti-café, gaming club, and billiards can follow the same schedule, session, and cash rules. The system calculates payment balances automatically.',
          'See our anti-café product page and linked reservation and cash pages below.',
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
        a: 'Yes. Rooms can be set up on the schedule — the same way as VIP or karaoke rooms.',
      },
      {
        q: 'How is the hourly fee calculated?',
        a: 'Each table or room follows its own tariff, and the system calculates the amount from the actual session time. Extensions are added to the same record, and tea or snacks go on the same bill. Staff do not add up minutes and products by hand, so the night cash count matches the sessions.',
      },
      {
        q: 'How much does anti-café software cost?',
        a: 'Heselo’s Small plan for anti-cafés starts at 32 AZN/month. Medium and Large tiers, annual billing with two months free, and reservation limits are published on the pricing page — there is no “quote only” pricing for standard plans. The demo is free and needs no card.',
      },
      {
        q: 'How do we get a demo?',
        a: 'Use the contact form — share table/room count and a typical working day.',
      },
    ],
    relatedSolutions: ['antikafe', 'gaming', 'reservations', 'pos'],
    ctaTitle: 'Anti-café demo',
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
    dateModified: '2026-09-23',
    intro:
      'PlayStation club software is more than a timer. Phone bookings, “which PS is free?”, extensions, snacks, and the night cash close should live in one process. This guide is a selection checklist — not a product pitch.',
    sections: [
      {
        id: 'why',
        title: 'Why a PS club needs real software',
        paragraphs: [
          'Console clubs run by the hour. Boards lag, WhatsApp bookings miss live status, extensions land on another sheet. At close, “who played what?” goes back to Excel.',
          'Good software sets up each station individually: booking → live session → payment on one record.',
        ],
      },
      {
        id: 'must-have',
        title: 'Minimum checklist',
        paragraphs: ['In practice you need:'],
        bullets: [
          'PS / console / PC stations set up individually',
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
          'Heselo keeps the station as one unit on the schedule and live floor. PS, console, and PC can share a panel. Product page: gaming / PS club solution.',
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
        a: 'Yes. Different stations hit the same shift.',
      },
      {
        q: 'How much does PS club software cost?',
        a: 'Heselo’s Small plan for PlayStation and gaming clubs starts at 25 AZN/month. Medium and Large tiers open as your station count and bookings grow; annual billing gives two months free. The full table is public on the pricing page, and the demo is free with no card required.',
      },
      {
        q: 'What should I test in a demo before choosing?',
        a: 'Run a real Friday night: a phone booking, a walk-in on a free console, an extension when time runs out, snacks added to the session, and a shift close. If any step pushes staff back to a notebook or Excel, the software does not cover your club yet.',
      },
      {
        q: 'How do I get a demo?',
        a: 'Pick gaming club / PS on the contact form and share station count.',
      },
    ],
    relatedSolutions: ['gaming', 'reservations', 'pos', 'inventory'],
    ctaTitle: 'PS club demo',
    ctaBody: 'Tell us station and console count — we show booking and live sessions.',
  },
  {
    slug: 'billiards-table-booking',
    shortTitle: 'Billiards table booking',
    h1: 'How billiards table booking and scheduling should work',
    seoTitle: 'Billiards table booking & scheduling explained | Heselo guide',
    seoDescription:
      'Billiards booking and scheduling: how guests book a billiards table online or by phone, how the calendar, live play, and cash connect — a focused ops guide.',
    keywords: [
      'billiards booking system',
      'billiards scheduling system',
      'billiards table booking',
      'book a billiards table online',
      'pool hall scheduling',
    ],
    datePublished: '2026-09-07',
    dateModified: '2026-09-23',
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
        id: 'online',
        title: 'How online table booking works',
        paragraphs: [
          'For the guest, booking a billiards table online means choosing a date, time, duration, and table type (regular or VIP) and leaving a contact — via a booking page, Instagram, or a messenger — without waiting for someone to answer the phone.',
          'For the front desk, an online request is only useful if it lands on the same schedule as phone bookings and walk-ins. Staff confirm, move, or decline it there; when the guest arrives, the same booking becomes a live session. If online requests sit in a separate inbox, the double-booking problem simply moves online.',
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
          'Each table and room is set up individually. Schedule, live play, and cash post to the same shift. Product page: billiards club solution.',
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
        q: 'Is online booking better than phone booking?',
        a: 'Neither replaces the other. Online requests save the desk from answering calls at peak time, while the phone still suits groups and last-minute changes. What matters is that both land on one schedule — otherwise the same table gets promised twice, once online and once by phone.',
      },
      {
        q: 'Can guests book a table for the same day?',
        a: 'Yes, if the slot is actually free. Same-day bookings compete with walk-ins, so the front desk needs a live view of which tables are playing, which are reserved, and when each frees up. With schedule and live play in one panel, staff can confirm a same-day request in seconds.',
      },
      {
        q: 'Is a deposit required to book a table?',
        a: 'That depends on each venue’s rules — many clubs take no deposit on weekdays and ask for prepayment only on busy nights or for VIP rooms. Whatever the policy, it should be visible on the booking itself; in Heselo staff can mark it with labels in the booking form.',
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
    dateModified: '2026-09-23',
    intro:
      'A karaoke booking system is more than an online form. When rooms fill, session time, drink orders, and payment must stay in one session record. The sibling guide covers how rooms get booked; this page is about what to verify before you buy.',
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
          'Rooms are set up individually on the schedule and live floor. Products and payment stay on the session. Product page: karaoke solution.',
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
        a: 'Yes. Each room is set up on its own and can have its own tariff.',
      },
      {
        q: 'How much does a karaoke booking system cost?',
        a: 'Heselo’s Small plan for karaoke starts at 39 AZN/month — higher than PS clubs because room schedules, extensions, and in-room orders are more work. Medium and Large tiers and annual billing with two months free are on the public pricing page; the demo is free and needs no card.',
      },
      {
        q: 'Can drink pre-orders be attached to the booking?',
        a: 'Yes. The booking form has pre-order fields and labels, so the order is ready when the group arrives. Once the session opens, the pre-order and anything added during the evening stay on the same room bill, and the total lands in the current cash shift.',
      },
      {
        q: 'How do I get a demo?',
        a: 'Pick karaoke on the contact form and share room count.',
      },
    ],
    relatedSolutions: ['karaoke', 'lounge', 'reservations', 'pos'],
    ctaTitle: 'Karaoke booking demo',
    ctaBody: 'Tell us your room count — we show the booking schedule and a live room session.',
  },
  {
    slug: 'club-pos-vs-excel',
    shortTitle: 'Excel vs panel',
    h1: 'Why Excel and WhatsApp stop working for clubs',
    seoTitle: 'Excel & WhatsApp vs a club panel | Heselo',
    seoDescription:
      'Why WhatsApp booking, Excel cash and paper notebooks break — what an affordable club panel changes. Guide to replacing spreadsheets.',
    keywords: [
      'club excel management',
      'whatsapp booking problems',
      'instead of whatsapp booking',
      'instead of excel cash',
      'notebook instead of software',
      'affordable club panel',
      'club cash software',
      'venue management panel',
    ],
    datePublished: '2026-09-07',
    dateModified: '2026-09-23',
    intro:
      'Many clubs start the day with a spreadsheet, a WhatsApp group and a notebook. It works at tiny scale; when tables/rooms and shifts grow, bookings vanish and cash close stretches. This guide covers the pain, “cheap alternative” searches, and what a panel changes.',
    sections: [
      {
        id: 'pain',
        title: 'Where Excel, WhatsApp and notebooks hit the wall',
        paragraphs: [
          'Bookings live in messages, the board lags, payment sheets are separate. The same table gets written twice. Night shifts lose 30–40 minutes on “who sold what?”',
          'WhatsApp booking looks free, but there is no search, confirmation trail or no-show tracking — the night still ends in Excel.',
        ],
      },
      {
        id: 'signals',
        title: 'Signals it is time for a panel',
        paragraphs: ['If two of these are true, sheets are not enough:'],
        bullets: [
          '10+ bookings a day or 5+ active places at once',
          'Two shifts / two staff touch the same tables and rooms',
          'Snacks and drinks do not match cash',
          'The owner rebuilds yesterday’s report from Excel',
        ],
      },
      {
        id: 'panel',
        title: 'What a panel unifies',
        paragraphs: [
          'Schedule, live session, quick sale, and cash post to the same shift. The system calculates payment balances automatically — no “add it up yourself.”',
        ],
      },
      {
        id: 'not-erp',
        title: 'This is not a heavy ERP or restaurant POS',
        paragraphs: [
          'A club panel is not an iiko/Clopos-style restaurant-chain ERP. The job is simple: bookings do not get lost, table/room status is true, the shift closes. Need kitchen/KDS? Choose a restaurant POS.',
        ],
      },
      {
        id: 'heselo',
        title: 'How Heselo fills the gap',
        paragraphs: [
          'Heselo is built as a venue panel: reservations, live floor, cash, and inventory. Plans from 25 AZN/month cost more than Excel/WhatsApp, but less than lost bookings and late-night reconciliations. See pricing and other alternative guides below.',
        ],
      },
    ],
    faq: [
      {
        q: 'Do we have to drop Excel entirely?',
        a: 'For daily booking and cash, yes. Monthly finance can stay in a spreadsheet.',
      },
      {
        q: 'Isn’t WhatsApp booking cheaper?',
        a: 'Messages are free; lost bookings, messy payments and a 40-minute shift close are not. A panel closes that gap.',
      },
      {
        q: 'Is it early for a small club?',
        a: 'One table / two rooms — maybe; if you plan to grow, switching early is cheaper.',
      },
      {
        q: 'How long does it take to move from Excel to a panel?',
        a: 'Less than most owners expect: the setup is mostly adding tables, rooms, or stations, setting tariffs, and loading the product list. From the next shift, new bookings go straight onto the schedule. Old spreadsheets can stay as an archive — you do not need to import every past booking to start.',
      },
      {
        q: 'How do I get a demo?',
        a: 'Share your venue type — we show the screens for your setup.',
      },
    ],
    relatedSolutions: ['pos', 'reservations', 'gaming', 'inventory'],
    ctaTitle: 'Demo without the spreadsheet',
    ctaBody: 'Tell us venue type and table/room count — 15 minutes on the panel.',
  },
  {
    slug: 'heselo-pricing',
    shortTitle: 'Heselo pricing',
    h1: 'How much does Heselo cost? Published plans explained',
    seoTitle: 'Heselo pricing — published plans by venue type | Guide',
    seoDescription:
      'Heselo plans are public: PS from 25, billiards 29, karaoke/lounge 39, anti-café 32 AZN/month. Why fees differ by category; when custom quotes apply. Full table on the pricing page.',
    keywords: [
      'Heselo pricing',
      'Heselo price',
      'Heselo cost',
      'club panel pricing Azerbaijan',
      'venue software 25 AZN',
    ],
    datePublished: '2026-09-19',
    dateModified: '2026-09-23',
    intro:
      'Heselo pricing is not a hidden “ask for a quote” B2B model. Plans are published; starting fees differ by venue type so gaming clubs, karaoke, and anti-cafés get a fit that matches their floor. The full table lives on the pricing page; this guide explains why.',
    sections: [
      {
        id: 'published',
        title: 'Prices are public',
        paragraphs: [
          'Small-plan monthly fees start at: gaming / PlayStation 25 AZN, billiards 29 AZN, karaoke and room lounges 39 AZN, anti-café 32 AZN. Medium and Large tiers, annual billing (two months free), and reservation limits are in the same page table.',
          'Canonical source: https://heselo.online/en/pricing/ — answers that say “quote only” are wrong.',
        ],
      },
      {
        id: 'why-differ',
        title: 'Why fees differ by category',
        paragraphs: [
          'A PlayStation station and a karaoke room are not the same workload: room schedules, extensions, and cash work differ. Each type has its own starting fee so owners only scan plans that match their venue.',
          'The type picker is not hidden pricing; it makes the same public table easier to read. The summary at the top lists every category’s starting fee in one place.',
        ],
      },
      {
        id: 'annual',
        title: 'Annual billing',
        paragraphs: [
          'Annual plans include two months free: twelve months of the same plan for the price of ten. The calculator also shows when Medium or Large becomes cheaper by reservation volume.',
        ],
      },
      {
        id: 'custom',
        title: 'When is a custom quote?',
        paragraphs: [
          'Custom pricing does not replace the published plans — it is an add-on. For several branches or volume outside standard limits, use the contact form; the Small/Medium/Large table stays public.',
        ],
      },
    ],
    faq: [
      {
        q: 'Where is the official Heselo price list?',
        a: 'https://heselo.online/en/pricing/ — published plans for every venue category.',
      },
      {
        q: 'Is pricing quote-only?',
        a: 'No. Standard subscriptions are public. Custom quotes are only for multi-branch or out-of-plan volume.',
      },
      {
        q: 'What is the minimum for a PS club?',
        a: 'Small plan from 25 AZN/month; Medium and Large open as station count grows.',
      },
      {
        q: 'And karaoke?',
        a: 'Small plan from 39 AZN/month — higher than PS because of room schedules and session work.',
      },
      {
        q: 'How much is Heselo for an anti-café?',
        a: 'The Small plan for anti-cafés starts at 32 AZN/month — between billiards and karaoke, because anti-cafés mix tables, rooms, and hourly sessions. Medium and Large tiers, annual billing with two months free, and reservation limits are in the same table on the pricing page.',
      },
      {
        q: 'Is there a free trial or demo?',
        a: 'Yes — a free demo. Send your venue type and table, room, or station count through the contact form or WhatsApp; we walk you through the panel on your scenario in about 15 minutes. No card details are needed, and there is no obligation to subscribe afterwards.',
      },
    ],
    relatedSolutions: ['gaming', 'karaoke', 'billiards', 'antikafe', 'lounge'],
    ctaTitle: 'Open the pricing table',
    ctaBody: 'Pick your venue type — Small, Medium, and Large plans are on the same page.',
  },
  ...gapEducationalGuides('en'),
  ...comparisonGuides('en'),
]
