# Current task — product HTML mocks

## Completed
- All ProductShot HTML mocks: cash, sessions, schedule, inventory, products, room-analytics, audit
- Hero still uses LiveFloorMock; solution `live-floor` image path may still be WebP
- Solution layout: hero copy+mock; extra shot beside who/problems on desktop
- ScheduleMock wired: karaoke / lounge / reservations hero; features gallery after live-floor

## Current state
- `ProductShot` HTML: cash, sessions, schedule, inventory, products, room-analytics, audit
- Raster: only `public/images/product/live-floor*` (+ PH live-floor/thumbs, brand, og-final, tiktok)

## Remaining (optional)
- Wire LiveFloorMock on solution pages that use `live-floor`
- Commit ScheduleMock + prior mock/asset cleanup when asked

## Relevant files
- `src/components/{ScheduleMock,AuditMock,RoomAnalyticsMock,ProductsMock,InventoryMock,CashMock,SessionsMock,LiveFloorMock,ProductShot}.astro`
- `src/lib/productShots.ts`
- `src/i18n/messages/{az,en,ru}.ts`, `src/i18n/types.ts`
