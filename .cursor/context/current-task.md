# Current task: Billiards SEO accuracy fixes (19 Oct 2026)

## Completed
- EN/AZ solution prices: hardcoded `AZN` / `59` → `{currency}` / `{billiardsHigh}` from catalog API (`catalogCopy.ts` + `solutions/{az,en}.ts`)
- Comparison guide: light relay for BilliardPOS (ESP32) & Biliardo.kz (USB); price `{billiards}–{billiardsHigh} {currency}`; sources; AZ/RU market section; no “open price only” differentiator; slug renamed to `billiards-software-comparison` + 301
- Competitor guides: BilliardPOS / Biliardo / CueDesk / BCMS factual corrections
- `llms.txt` locale-prefixed URLs; QR legend cleanup in comparison hub
- EN/RU mocks: localized room names + `formatMoney` currency
- Billiards alt-seeking heading; AZ alt guides include Club Timer

## Remaining (optional / later)
- Full SoftBilling / Smartbit / Paloma365 dedicated guides (only framed in hub for now)
- Article schema `image`; deeper first-hand screenshots in guides
- CashMock-style leftovers already fixed via locale; InventoryMock if any AZN left

## Relevant files
- `src/lib/catalogCopy.ts`
- `src/data/solutions/{az,en,ru}.ts`
- `src/data/guides/billiardsSoftwareComparisonGuide.ts` (+ alternative guides)
- `src/pages/llms.txt.ts`, `astro.config.mjs`, `vercel.json`
- `src/components/{LiveFloor,RoomAnalytics,Cash,Sessions,Products}Mock.astro`
