/**
 * Future SEO content roadmap (AZ market primary).
 * Ship pages only when unique, intent-matching copy is ready — never doorway clones.
 */
export const SEO_CONTENT_PLAN = {
  product: [
    { id: 'what-is-heselo', status: 'covered-on-home', note: 'Home #about + solutions hub' },
    { id: 'how-heselo-works', status: 'covered-on-home', note: 'How section + features page' },
  ],
  business: [
    { id: 'gaming', path: '/solutions/gaming/', status: 'live' },
    { id: 'karaoke', path: '/solutions/karaoke/', status: 'live' },
    { id: 'billiards', path: '/solutions/billiards/', status: 'live' },
    { id: 'antikafe', path: '/solutions/antikafe/', status: 'live' },
    { id: 'lounge', path: '/solutions/lounge/', status: 'live' },
  ],
  feature: [
    { id: 'reservations', path: '/solutions/reservations/', status: 'live' },
    { id: 'pos', path: '/solutions/pos/', status: 'live' },
    { id: 'inventory', path: '/solutions/inventory/', status: 'live' },
    { id: 'live-floor', path: '/features/', status: 'hub', note: 'Deepen later if demand appears' },
  ],
  educational: [
    {
      id: 'what-is-gaming-club-management',
      path: '/guides/gaming-club-management/',
      status: 'live',
    },
    {
      id: 'how-karaoke-rooms-are-booked',
      path: '/guides/karaoke-room-booking/',
      status: 'live',
    },
    {
      id: 'how-billiards-clubs-run',
      path: '/guides/billiards-club-management/',
      status: 'live',
    },
    {
      id: 'what-is-room-lounge-management',
      path: '/guides/room-lounge-management/',
      status: 'live',
    },
    {
      id: 'what-is-antikafe-management-system',
      path: '/guides/antikafe-management-system/',
      status: 'live',
    },
    {
      id: 'playstation-club-software',
      path: '/guides/playstation-club-software/',
      status: 'live',
      note: 'Phase C1 — PS/console software choice',
    },
    {
      id: 'billiards-table-booking',
      path: '/guides/billiards-table-booking/',
      status: 'live',
      note: 'Phase C1 — booking + scheduling',
    },
    {
      id: 'karaoke-booking-system',
      path: '/guides/karaoke-booking-system/',
      status: 'live',
      note: 'Phase C1 — choosing a booking system',
    },
    {
      id: 'club-pos-vs-excel',
      path: '/guides/club-pos-vs-excel/',
      status: 'live',
      note: 'Phase C0/C1 — Excel/WhatsApp pain + polish',
    },
  ],
  comparison: [
    {
      id: 'iiko-alternative-clubs',
      path: '/guides/iiko-alternative-clubs/',
      status: 'live',
      note: 'Phase C0 P0',
    },
    {
      id: 'clopos-alternative',
      path: '/guides/clopos-alternative/',
      status: 'live',
      note: 'Phase C0 P0',
    },
    {
      id: 'dine-alternative',
      path: '/guides/dine-alternative/',
      status: 'live',
      note: 'Phase C0 P0',
    },
    {
      id: 'restomas-alternative',
      path: '/guides/restomas-alternative/',
      status: 'live',
      note: 'Phase C0 P1',
    },
    {
      id: 'minupos-alternative',
      path: '/guides/minupos-alternative/',
      status: 'live',
      note: 'Phase C0 P1',
    },
    {
      id: 'robotpos-alternative',
      path: '/guides/robotpos-alternative/',
      status: 'live',
      note: 'Phase C0 P1',
    },
    {
      id: 'affordable-club-pos',
      path: '/guides/affordable-club-pos/',
      status: 'live',
      note: 'Phase C0 P1 category',
    },
    {
      id: 'restaurant-pos-vs-karaoke-system',
      path: '/guides/restaurant-pos-vs-karaoke-system/',
      status: 'live',
      note: 'Phase C0 P1 category',
    },
    {
      id: 'playstation-cafe-software-alternative',
      path: '/guides/playstation-cafe-software-alternative/',
      status: 'live',
      note: 'Phase C0 P2',
    },
    {
      id: 'izi-alternative',
      path: '/guides/izi-alternative/',
      status: 'live',
      note: 'Phase C0 P2',
    },
    {
      id: 'kaktus-alternative',
      path: '/guides/kaktus-alternative/',
      status: 'live',
      note: 'Phase C0 P2',
    },
    {
      id: 'resto-az-alternative',
      path: '/guides/resto-az-alternative/',
      status: 'live',
      note: 'Phase C0 P2',
    },
  ],
} as const
