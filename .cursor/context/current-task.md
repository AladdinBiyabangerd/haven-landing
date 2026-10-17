# Current task — Hero HTML mock + SEO leftovers

## Completed (this chat wave)

1. **html1** — Hero `live-floor` → `LiveFloorMock.astro`.
2. **html2** — `cash` → `CashMock.astro` (POS primary).
3. **html3** — `sessions` → `SessionsMock.astro`.
4. **html4** — `inventory` → `InventoryMock.astro` (user HTML adapted; no emoji).
5. Home preload of `live-floor-*.webp` removed.

## Current state

- HTML mocks: live-floor (hero), cash, sessions, inventory.
- Still AI: products, room-analytics, audit.
- Prior SEO P0 edits still uncommitted.

## Decisions

- Mocks = sparse mist vignettes (option 2), not full admin UIs.
- Amounts use `AZN` (not ₼) for font reliability.

## Remaining

1. Later: products / room-analytics / audit mocks or real screenshots.
2. SEO leftovers: Metrica goals, deploy header verify, thin AZ guides.

## Relevant files

- `src/components/{LiveFloorMock,CashMock,SessionsMock,InventoryMock,ProductShot,Hero}.astro`
- View inventory: `/az/solutions/inventory/`
