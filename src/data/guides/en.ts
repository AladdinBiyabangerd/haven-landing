import type { GuideCopy, GuidesHubCopy } from './types'

export const guidesHubEn: GuidesHubCopy = {
  eyebrow: 'Guides',
  h1: 'Practical guides on venue management',
  intro:
    'These articles answer common search questions first — not hard-sell copy. Each guide links to the matching Heselo solution pages.',
  seoTitle: 'Guides — restaurant & venue management | Heselo',
  seoDescription:
    'What a restaurant management system is, how reservations, cash, and inventory connect — practical guides.',
  keywords: [
    'what is restaurant management system',
    'what is cafe management system',
    'how to manage restaurant reservations',
    'restaurant POS system',
    'restaurant inventory management',
  ],
  cardCta: 'Read',
}

export const guidesEn: GuideCopy[] = [
  {
    slug: 'restaurant-management-system',
    shortTitle: 'Restaurant management system',
    h1: 'What is a restaurant management system?',
    seoTitle: 'What is a restaurant management system? | Heselo guide',
    seoDescription:
      'What a restaurant management system is, which problems it solves, and how booking, cash, and inventory connect — with a path to a free Heselo demo.',
    keywords: [
      'what is restaurant management system',
      'restaurant management software',
      'restaurant POS software',
    ],
    datePublished: '2026-08-12',
    dateModified: '2026-08-12',
    intro:
      'A restaurant management system (RMS) helps a venue run the day — table bookings, floor flow, payments, products and stock, and often customer history — from one panel. It is not only an online booking form or only a till; the point is to replace spreadsheets, chats, and separate tools with one workday.',
    sections: [
      {
        id: 'why',
        title: 'Why restaurants look for this software',
        paragraphs: [
          'In many small and mid-size restaurants, bookings live in phone notes, table status lives in memory, payments live in another sheet, and inventory is counted on paper at week’s end. Closing the day turns into “who wrote what?”',
          'Restaurant management software ties those pieces to the same rules: a booking becomes a live session, payment lands in the shift, products come from one catalog.',
        ],
      },
      {
        id: 'modules',
        title: 'What parts does it usually include?',
        paragraphs: [
          'Names differ, but daily needs look similar. Most restaurant software is expected to cover:',
        ],
        bullets: [
          'Table and room reservations (schedule, move, cancel)',
          'Live floor / sessions (active tables, products, payment)',
          'Cash or POS flow (shift, report, count)',
          'Product catalog and stock levels',
          'Customer cards and simple reporting',
          'Staff permissions (who can see and change what)',
        ],
      },
      {
        id: 'reservations',
        title: 'How reservations should work',
        paragraphs: [
          'A solid booking flow is more than picking a free slot. The reservation must attach to a table or room; when guests arrive, the same record should become a live session. Moves, cancels, and history must be kept — otherwise schedule and floor disagree.',
          'In room-based venues (karaoke or VIP rooms), the same logic applies to room resources.',
        ],
      },
      {
        id: 'pos',
        title: 'How cash / POS connects',
        paragraphs: [
          'When a separate till is cut off from booking tools, day-end totals lose their source. In a healthy flow, payments from live sessions follow the same shift and day rules: cash, card, and POS stay distinct, and a count supports closing.',
        ],
      },
      {
        id: 'inventory',
        title: 'Why stock should not live only in Excel',
        paragraphs: [
          'If sales do not use the same product list, levels look fine on paper and wrong on the shelf. Inventory that works like restaurant stock software keeps catalog, levels, and counts aligned with sales — including walk-in (quick) sale.',
        ],
      },
      {
        id: 'choose',
        title: 'What to check when choosing a system',
        paragraphs: [
          'Look past marketing lists and test a real day: is there one path from booking to payment? Are past days protected? Are permissions page-level? Is language and local support available? Is pricing clear?',
          'In Azerbaijan many teams work in AZ / EN / RU — panel language support reduces daily mistakes.',
        ],
      },
      {
        id: 'heselo',
        title: 'How Heselo addresses these needs',
        paragraphs: [
          'Heselo is a venue management system: schedule and reservations, live tracking, cash (shift, report, count), products, inventory, customers, and statistics in one panel. Balances are calculated on the server — the screen shows results, not guesses.',
          'See the restaurant-focused solution page, and the reservation, cash, and inventory pages linked below.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is a restaurant management system the same as a booking website?',
        a: 'No. An online booking form captures a guest, but does not run the floor, cash, or inventory. A full system keeps one flow from booking to day close.',
      },
      {
        q: 'Do small restaurants need this?',
        a: 'Even with few tables, if bookings and payments collide, a central panel saves time. Clarify needs (booking, cash, stock) first, then pick a plan.',
      },
      {
        q: 'Is POS sold separately?',
        a: 'In some products, yes. In Heselo, cash flow is part of the panel and subscription.',
      },
    ],
    relatedSolutions: ['restaurant', 'reservations', 'pos', 'inventory'],
    ctaTitle: 'See your restaurant flow in a demo',
    ctaBody: 'In about 15 minutes we walk from booking to cash close — matched to your venue type.',
  },
  {
    slug: 'manage-restaurant-reservations',
    shortTitle: 'Reservation management',
    h1: 'How do restaurants manage reservations?',
    seoTitle: 'How do restaurants manage reservations? | Heselo guide',
    seoDescription:
      'How a table reservation system should work in practice: schedule, list, moves, cancels, and handoff to the live floor.',
    keywords: [
      'table reservation system',
      'how to manage restaurant reservations',
      'restaurant booking management',
      'room reservation system',
    ],
    datePublished: '2026-08-12',
    dateModified: '2026-08-12',
    intro:
      'Restaurant reservation management is more than phone notes. A proper table reservation system keeps the schedule, booking list, and live session on the same data when guests arrive. This guide explains the practical flow — not marketing fluff.',
    sections: [
      {
        id: 'problem',
        title: 'Why phone and messenger bookings fail',
        paragraphs: [
          'When bookings live in one place and table status in another, you get “7:30 booking exists but the table looks free” — or the opposite. Without move/cancel history, reception answers the same questions all day.',
          'A reservation system aims for one resource (table or room), one schedule, one list — same day rules for everyone.',
        ],
      },
      {
        id: 'flow',
        title: 'Typical daily reservation flow',
        paragraphs: [
          'Morning: review the day on the schedule — table, room, time, party size. During service: take new bookings, move or cancel existing ones; list and schedule must match. On arrival: the same booking becomes a live session — no retyping.',
          'Room bookings (karaoke, VIP) follow the same logic; only the resource type differs.',
        ],
      },
      {
        id: 'fields',
        title: 'What a booking record should include',
        paragraphs: ['Minimum practical set:'],
        bullets: [
          'Guest name and contact',
          'Time and duration (or expected stay)',
          'Table / room / resource',
          'Party size and notes (label)',
          'Pre-order or deposit (if any)',
          'Status: waiting, arrived, cancelled, no-show',
        ],
      },
      {
        id: 'mistakes',
        title: 'Common mistakes',
        paragraphs: [
          'Not showing bookings on the schedule — floor looks empty while tables are reserved.',
          'Moving by phone without updating the system — next shift does not know.',
          'Colliding walk-ins with reserved tables — schedule must update in real time.',
          'Editing past days freely — breaks audit and reports; protection rules help.',
        ],
      },
      {
        id: 'heselo',
        title: 'How reservations work in Heselo',
        paragraphs: [
          'Schedule and reservation list share one panel. Forms cover guest, time, labels, pre-order, and payment collection; moves, cancels, and history are kept. On arrival, the same booking becomes a live session.',
          'For commercial detail, see our table reservation system page; request a demo below.',
        ],
      },
    ],
    faq: [
      {
        q: 'Should tables and rooms use one system?',
        a: 'Yes. Both are resources on the same schedule — separate tools should not split the day.',
      },
      {
        q: 'Is a booking website enough?',
        a: 'Online booking captures the guest but does not run the floor. A full system keeps one flow through payment.',
      },
      {
        q: 'How are no-shows recorded?',
        a: 'Via status and history; may appear on the customer card for future bookings.',
      },
    ],
    relatedSolutions: ['reservations', 'restaurant', 'cafe', 'karaoke'],
    ctaTitle: 'See reservation flow in a demo',
    ctaBody: 'We show schedule and booking list matched to your venue.',
  },
  {
    slug: 'restaurant-pos-system',
    shortTitle: 'Restaurant cash / POS',
    h1: 'How does a restaurant POS system work?',
    seoTitle: 'How does a restaurant POS system work? | Heselo guide',
    seoDescription:
      'Restaurant cash software and POS flow: shifts, cash/card/POS, reports, and day close — practical guide.',
    keywords: [
      'restaurant POS software',
      'cash software',
      'restaurant cash register',
      'cash reconciliation',
    ],
    datePublished: '2026-08-12',
    dateModified: '2026-08-12',
    intro:
      'A restaurant POS system is more than a pay button. Shift open, transactions, reports, and counts should answer the owner at day end. This guide explains the practical parts and how to connect cash with bookings.',
    sections: [
      {
        id: 'parts',
        title: 'Core parts of cash flow',
        paragraphs: ['Restaurant POS flow usually includes:'],
        bullets: [
          'Open/close shift',
          'Payment transactions (cash, bank, terminal)',
          'Payments from live sessions or quick sale',
          'Cash report (by day/shift)',
          'Cash count (actual vs system at close)',
        ],
      },
      {
        id: 'shift',
        title: 'Why shifts matter',
        paragraphs: [
          'Without shifts, “how much cash today?” has no clear answer. Opening a shift sets the period; closing ties count and report to that period. If reception and floor run different shifts, each shift’s result should be visible separately.',
        ],
      },
      {
        id: 'connect',
        title: 'Connecting bookings and cash',
        paragraphs: [
          'Separate till + separate booking tools make “where did this total come from?” hard at close. In a healthy flow, live session payments follow the same day and shift rules — no manual re-entry or guessed totals.',
          'Pre-orders or deposits collected on bookings should stay in the same guest and session flow.',
        ],
      },
      {
        id: 'close',
        title: 'Day close (cash count)',
        paragraphs: [
          'At close you count cash: actual vs system. Small differences happen; what matters is traceability. Closed-day history should be kept for later audit.',
        ],
      },
      {
        id: 'heselo',
        title: 'How cash works in Heselo',
        paragraphs: [
          'Cash modules cover shift, transactions, report, and count in one panel. Live session payments use the same flow; balances are calculated on the server. No separate restaurant till app required.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is there terminal (POS) integration?',
        a: 'Heselo records cash, bank, and POS by shift; specific terminal integration depends on venue needs.',
      },
      {
        q: 'Is cash count required?',
        a: 'In practice yes for a proper close — count surfaces differences and completes the report.',
      },
      {
        q: 'Where are payment amounts calculated?',
        a: 'In Heselo, balances and status are calculated on the server; the screen shows results only.',
      },
    ],
    relatedSolutions: ['pos', 'restaurant', 'reservations', 'cafe'],
    ctaTitle: 'Cash flow demo',
    ctaBody: 'We walk shift open through count with a realistic scenario.',
  },
  {
    slug: 'restaurant-inventory-basics',
    shortTitle: 'Restaurant inventory',
    h1: 'How is restaurant inventory managed?',
    seoTitle: 'How is restaurant inventory managed? | Heselo guide',
    seoDescription:
      'Restaurant inventory software: catalog, stock levels, count journals, and link to sales — practical guide.',
    keywords: [
      'restaurant inventory software',
      'inventory management system',
      'restaurant stock control',
      'stock count',
    ],
    datePublished: '2026-08-12',
    dateModified: '2026-08-12',
    intro:
      'Restaurant inventory is not “fill Excel on Sunday.” If sales do not use the same product list, levels look fine on paper and wrong on the shelf. This guide explains practical stock principles and linking inventory with cash flow.',
    sections: [
      {
        id: 'why',
        title: 'Why track inventory?',
        paragraphs: [
          'Without stock tracking you know what you sold but not what remains — leading to waste, over-ordering, or stockouts. Even small venues benefit for drinks and dry goods.',
        ],
      },
      {
        id: 'catalog',
        title: 'Catalog — the foundation',
        paragraphs: [
          'The product catalog holds names, prices, and units. Live session adds, quick sale, and reports must use the same catalog — not multiple spreadsheets.',
        ],
      },
      {
        id: 'count',
        title: 'Count journals',
        paragraphs: [
          'Periodic counts (daily/weekly) align levels with reality. Journals should record who counted what and when. History helps spot trends: fast movers and recurring variances.',
        ],
      },
      {
        id: 'sales',
        title: 'Linking sales and stock',
        paragraphs: [
          'Walk-in sales must use the same catalog — otherwise inventory misses off-session sales. Floor adds follow the same rules.',
          'Inventory statistics can show category cuts and count variance by day.',
        ],
      },
      {
        id: 'heselo',
        title: 'How inventory works in Heselo',
        paragraphs: [
          'Products, inventory, and quick sale share one catalog. Stock levels and count journals live in the panel with the same day flow as live sessions and cash. No separate restaurant inventory app required.',
        ],
      },
    ],
    faq: [
      {
        q: 'Do small cafes need inventory?',
        a: 'If you sell products, even a simple catalog and count helps — scale can stay small.',
      },
      {
        q: 'Can we migrate from Excel?',
        a: 'Initial lists can be imported; ongoing sales must use the same catalog to keep levels accurate.',
      },
      {
        q: 'Is inventory separate from bookings?',
        a: 'It is a module, but data stays in one panel — session sales and stock complement each other.',
      },
    ],
    relatedSolutions: ['inventory', 'restaurant', 'pos', 'cafe'],
    ctaTitle: 'Inventory and catalog demo',
    ctaBody: 'We show product list and count flow for your venue.',
  },
  {
    slug: 'cafe-management-system',
    shortTitle: 'Café management system',
    h1: 'What is a café management system?',
    seoTitle: 'What is a café management system? | Heselo guide',
    seoDescription:
      'What café management software covers: walk-ins, bookings, live floor, cash, and inventory — a practical guide for small and mid-size cafés.',
    keywords: [
      'what is cafe management system',
      'cafe management software',
      'cafe POS system',
      'cafe booking system',
      'café management system',
    ],
    datePublished: '2026-08-12',
    dateModified: '2026-08-12',
    intro:
      'A café management system runs daily work — table booking, walk-in guests, live floor sessions, payments, product sales, and sometimes inventory — in one panel. Compared with full-service restaurants, the flow is faster; the system must not lose track of quick table turnover and short sessions within the same day.',
    sections: [
      {
        id: 'vs-restaurant',
        title: 'Is café software the same as restaurant software?',
        paragraphs: [
          'Both need booking, cash, and products, but cafés often have more walk-ins, shorter stays, and faster table rotation. Restaurant tools may optimize for evening reservations; café software should show free tables, active sessions, and quick sales on one screen throughout the day.',
          'When choosing café management software, test your real shift — not just a booking form or a standalone POS.',
        ],
      },
      {
        id: 'modules',
        title: 'Which modules do cafés typically need?',
        paragraphs: ['A practical minimum usually includes:'],
        bullets: [
          'Live floor — which table is active and what is owed',
          'Schedule and reservations — phone bookings visible on the grid',
          'Cash flow — cash, card, and POS clear by day and shift',
          'Product catalog and quick sale — for guests without a booking',
          'Inventory (even at small scale) — coffee, tea, pastry stock',
          'Simple stats — understand daily revenue',
        ],
      },
      {
        id: 'walk-in',
        title: 'How do walk-ins and bookings share the same tables?',
        paragraphs: [
          'A typical café problem: a booking exists on paper but the floor looks empty — or a walk-in sits at an already booked table. In a solid flow, each table is one resource on the schedule and live floor with the same status.',
          'Walk-ins open a live session directly; phone bookings convert to the same session when the guest arrives. Moves and cancellations stay in history so the next shift does not repeat the same questions.',
        ],
      },
      {
        id: 'pos-inventory',
        title: 'Why should cash and inventory stay connected?',
        paragraphs: [
          'Café sales often tie to sessions: drinks at the table, pastries at the counter. The product list must be the same for sessions, cash, and inventory — otherwise end-of-day counts drift.',
          'Even a small café can keep inventory simple (weekly counts), but it should run on the same catalog as sales.',
        ],
      },
      {
        id: 'choose',
        title: 'What to check when choosing café software',
        paragraphs: [
          'One flow from booking to payment? Walk-ins and reservations on the same tables without clashes? Past days preserved? Works on mobile browsers? AZ / EN / RU if your team needs them?',
          'Pricing should be transparent — hidden fees or pay-per-module models can be expensive for a small café.',
        ],
      },
      {
        id: 'heselo',
        title: 'How Heselo fits cafés',
        paragraphs: [
          'Heselo is venue management: live floor, schedule, reservations, cash, products, inventory, and customers in one panel. Cafés, restaurants, and lounges use the same resource logic — the difference is how fast your shift moves.',
          'See our café solution page and linked reservation and cash pages below.',
        ],
      },
    ],
    faq: [
      {
        q: 'Does a small café need a full system?',
        a: 'Even with few tables, mixed bookings and payments waste time without a central panel. Clarify what you need first — booking, cash, inventory.',
      },
      {
        q: 'Is café software different from restaurant software?',
        a: 'Modules overlap, but café flow is faster. Heselo runs both in one panel — no separate “café edition” to buy.',
      },
      {
        q: 'How are walk-in guests recorded?',
        a: 'Open a live session or quick sale without a booking — same product catalog and cash flow.',
      },
    ],
    relatedSolutions: ['cafe', 'reservations', 'pos', 'inventory'],
    ctaTitle: 'Café flow demo',
    ctaBody: 'We show a short demo matched to walk-in and booking needs.',
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
