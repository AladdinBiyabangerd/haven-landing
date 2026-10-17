# Current task — interactive product HTML mocks

## Completed
- HTML mocks clickable for demo feel (not link wrappers)
- LiveFloor: tap card → toggle active/empty + timer
- Schedule: select row → Move / Cancel chips
- Sessions: Extend / Pause·Resume / End
- Cash, Inventory, Products, RoomAnalytics, Audit: single-select highlight
- Shared helper: `src/lib/mockInteract.ts`
- az/en/ru hint + a11y strings updated

## Current state
- ProductShot still routes to HTML mocks; live-floor raster path optional
- Interactivity is client-side only; refresh restores demo data

## Remaining (optional)
- Wire LiveFloorMock on solution pages that still use `live-floor` WebP
- Commit when asked

## Relevant files
- `src/components/{LiveFloor,Schedule,Sessions,Cash,Inventory,Products,RoomAnalytics,Audit}Mock.astro`
- `src/lib/mockInteract.ts`
- `src/i18n/messages/{az,en,ru}.ts`, `src/i18n/types.ts`
