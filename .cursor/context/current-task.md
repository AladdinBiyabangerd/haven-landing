# Current task — product HTML mocks

## Completed
- All ProductShot HTML mocks: cash, sessions, inventory, products, room-analytics, audit
- Hero still uses LiveFloorMock; solution `live-floor` image path may still be WebP
- Solution layout: hero copy+mock; extra shot beside who/problems on desktop

## Current state
- `ProductShot` HTML: cash, sessions, inventory, products, room-analytics, audit
- Raster: only `public/images/product/live-floor*` (+ PH live-floor/thumbs, brand, og-final, tiktok)
- Deleted ~10MB obsolete marketing-raw / PH gallery / linkedin drafts

## Remaining (optional)
- Wire LiveFloorMock on solution pages that use `live-floor`
- Commit AuditMock + asset cleanup when asked

## Relevant files
- `src/components/{AuditMock,RoomAnalyticsMock,ProductsMock,InventoryMock,CashMock,SessionsMock,LiveFloorMock,ProductShot}.astro`
- `src/i18n/messages/{az,en,ru}.ts`, `src/i18n/types.ts`
