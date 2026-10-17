# Current task — product HTML mocks

## Completed
- LiveFloor / Cash / Sessions / Inventory HTML mocks (replace AI shots)
- Mobile overflow fixes (`minmax(0,1fr)`, width constraints)
- Solution hero: copy left + mock right (homepage-style)
- Inventory flatten (no outer/card wrappers) + desktop side-by-side at 28rem
- **ProductsMock** replaces `products.webp` (inventory page extra shot)

## Current state
- `ProductShot` HTML paths: `cash`, `sessions`, `inventory`, `products`
- Still image-based: `live-floor` (except Hero), `room-analytics`, `audit`

## Remaining (optional)
- Wire LiveFloorMock for solution `live-floor` shots
- HTML mocks for `room-analytics` / `audit` if needed
- Commit ProductsMock when asked

## Relevant files
- `src/components/{ProductsMock,InventoryMock,CashMock,SessionsMock,LiveFloorMock,ProductShot}.astro`
- `src/pages/[locale]/solutions/[slug].astro`
- `src/i18n/messages/{az,en,ru}.ts`, `src/i18n/types.ts`
