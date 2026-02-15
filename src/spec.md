# Specification

## Summary
**Goal:** Replace the website’s Menu content with the exact categories/items/prices shown in the 12 user-uploaded menu screenshots, and ensure the Menu UI renders this structure correctly.

**Planned changes:**
- Replace the data in `frontend/src/content/menu.ts` with menu categories, items, variant prices (e.g., Half/Full; Medium/Large with inch sizes), and Veg/Non-Veg indicators transcribed strictly from the 12 uploaded screenshots; remove all previously hardcoded/invented menu content.
- Update `frontend/src/components/MenuSection.tsx` to render the new menu data structure in the existing accordion layout, including single-price items, multi-variant pricing layouts, and consistent Veg/Non-Veg markers; update the Menu section description text to be generic (not Italian-only).
- Add the 12 uploaded screenshots to frontend static assets (using the exact filenames) and add an optional in-page control to view the original menu images in a readable modal/gallery.

**User-visible outcome:** Visitors see the full menu exactly as provided in the screenshots, with clear variant pricing and Veg/Non-Veg indicators, and they can optionally open and view the original menu images directly on the page.
