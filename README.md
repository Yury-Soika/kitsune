# Kitsune Asia

Independent restaurant website concept built with Next.js 15, TypeScript and Tailwind CSS 4. Polish default with complete English and Russian dictionaries. Responsive navigation, category filters, FAQ, Wolt ordering, phone and directions links. Language preference is stored locally.

## Run

`npm ci`, `npm run dev`, `npm run check`, `npm run build`.

Hub export: `NEXT_PUBLIC_BASE_PATH=/kitsune npm run build`, then copy `out/` to `plex-demo/public/kitsune/`. The demo hub serves the index through a rewrite. Metadata is noindex. No simulated bookings or payments; order through Wolt or enquire by telephone.

## Sources

Design reference: https://starter.designinx.com/ — clear headings, concise copy, primary/secondary actions, image/text sections, FAQ and contact hierarchy, adapted to the restaurant.

Restaurant data: https://wolt.com/en/pol/bialystok/restaurant/kitsune-biaystok — indexed menu retrieved 2026-10-03. Prices and delivery hours are qualified in the interface. Dine-in opening hours are unverified.

Current in-page photographs: Kitsune’s Wolt menu (retrieved 2026-10-03).

- california.png: https://wolt-menu-images-cdn.wolt.com/menu-images/64e1d9251fac7d649ad8d7d7/6822eb8c-40c7-11ee-8c4a-a22c12803cdb_34._california_z__ososiem.png
- pad-thai.png: https://wolt-menu-images-cdn.wolt.com/menu-images/64e1d9251fac7d649ad8d7d7/ffafbb08-40c5-11ee-854b-a22c12803cdb_1._pad_thai_z_kurczakiem_i_tofu.png
- tom-yum.png: https://wolt-menu-images-cdn.wolt.com/menu-images/64e1d9251fac7d649ad8d7d7/96a30420-40c6-11ee-bf69-8ef85970d558_18._tom_yum.png

The fox emblem is regenerated from the user’s reference using the built-in image-generation tool. The final prompt is recorded in IMAGE_PROMPT.md. Inter and Playfair Display fonts are hosted locally with their OFL licence files in public/fonts.

Original sourced assets retained, no longer used in-page: https://pl.restaurantguru.com/Kitsune-Kuchnia-Azjatycka-Bialystok

- feast.jpg: https://img02.restaurantguru.com/c5aa-Kitsune-Kuchnia-Azjatycka-Bialystok-ramen.jpg
- sushi.jpg: https://img02.restaurantguru.com/c17e-Restaurant-Kitsune-Kuchnia-Azjatycka-meals.jpg
- takeaway.jpg: https://img02.restaurantguru.com/c1d8-Restaurant-Kitsune-Kuchnia-Azjatycka-sushi.jpg
- hero.jpg: sushi crop of feast.jpg.

Public customer/listing photos have no established reuse licence. Obtain restaurant-approved originals and confirm content before an official launch. Wordmark is a concept, not a verified official logo. No affiliation or client engagement is claimed.

The closer logo recreation is saved at `public/images/kitsune-emblem-hd.png` (1254 × 1254), with a 512px website asset and 64px favicon. See IMAGE_PROMPT_V2.md for the generation prompt. This version retains the original reference's bright gold and black and uses a slimmer fox shape; it is a recreation rather than an exact trace.

## Current visual palette

Warm black and layered charcoal with saffron yellow accents, soft ivory text, rounded photo frames and editorial serif headings. Exact colors and usage are recorded in [DESIGN_PALETTE.md](./DESIGN_PALETTE.md).
