# Current task — product HTML mocks

## Completed
- LiveFloor / Cash / Sessions / Inventory / Products / RoomAnalytics HTML mocks
- Mobile overflow fixes (`minmax(0,1fr)`, width constraints)
- Solution hero: copy left + mock right (homepage-style)
- Extra shot beside who/problems on desktop
- Inventory flatten + ProductsMock

## Current state
- `ProductShot` HTML paths: `cash`, `sessions`, `inventory`, `products`, `room-analytics`
- Still image-based: `live-floor` (except Hero), `audit`

## Remaining (optional)
- Wire LiveFloorMock for solution `live-floor` shots
- **html7** = `audit` HTML mock
- Commit RoomAnalyticsMock when asked

## Relevant files
- `src/components/{RoomAnalyticsMock,ProductsMock,InventoryMock,CashMock,SessionsMock,LiveFloorMock,ProductShot}.astro`
- `src/pages/[locale]/solutions/[slug].astro`
- `src/i18n/messages/{az,en,ru}.ts`, `src/i18n/types.ts`
