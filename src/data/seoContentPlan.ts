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
    { id: 'restaurant', path: '/solutions/restaurant/', status: 'live' },
    { id: 'cafe', path: '/solutions/cafe/', status: 'live' },
    { id: 'billiards', path: '/solutions/billiards/', status: 'live' },
    { id: 'karaoke', path: '/solutions/karaoke/', status: 'live' },
    { id: 'gaming', path: '/solutions/gaming/', status: 'live' },
    { id: 'antikafe', path: '/solutions/antikafe/', status: 'live' },
  ],
  feature: [
    { id: 'reservations', path: '/solutions/reservations/', status: 'live' },
    { id: 'pos', path: '/solutions/pos/', status: 'live' },
    { id: 'inventory', path: '/solutions/inventory/', status: 'live' },
    { id: 'live-floor', path: '/features/', status: 'hub', note: 'Deepen later if demand appears' },
  ],
  educational: [
    {
      id: 'what-is-restaurant-management-system',
      path: '/guides/restaurant-management-system/',
      status: 'live',
    },
    {
      id: 'how-restaurants-manage-reservations',
      path: '/guides/manage-restaurant-reservations/',
      status: 'live',
    },
    {
      id: 'how-restaurant-pos-works',
      path: '/guides/restaurant-pos-system/',
      status: 'live',
    },
    {
      id: 'restaurant-inventory-basics',
      path: '/guides/restaurant-inventory-basics/',
      status: 'live',
    },
    {
      id: 'what-is-antikafe-management-system',
      path: '/guides/antikafe-management-system/',
      status: 'live',
    },
    {
      id: 'what-is-cafe-management-system',
      path: '/guides/cafe-management-system/',
      status: 'live',
    },
  ],
} as const
