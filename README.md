# Kitsune Asia

Independent restaurant website concept built with Next.js 15, TypeScript and Tailwind CSS 4. Polish default with complete English and Russian dictionaries. Responsive navigation, category filters, FAQ, Wolt ordering, phone and directions links. Language preference is stored locally.

## Run

`npm ci`, `npm run dev`, `npm run check`, `npm run build`.

Hub export: `NEXT_PUBLIC_BASE_PATH=/kitsune npm run build`, then copy `out/` to `plex-demo/public/kitsune/`. The demo hub serves the index through a rewrite. Metadata is noindex. No simulated bookings or payments; order through Wolt or enquire by telephone.

## Sources

Design reference: https://starter.designinx.com/ — clear headings, concise copy, primary/secondary actions, image/text sections, FAQ and contact hierarchy, adapted to the restaurant.

Restaurant data: https://wolt.com/en/pol/bialystok/restaurant/kitsune-biaystok — indexed menu retrieved 2026-10-03. Prices and delivery hours are qualified in the interface. Dine-in opening hours are unverified.

Photos: https://pl.restaurantguru.com/Kitsune-Kuchnia-Azjatycka-Bialystok

- feast.jpg: https://img02.restaurantguru.com/c5aa-Kitsune-Kuchnia-Azjatycka-Bialystok-ramen.jpg
- sushi.jpg: https://img02.restaurantguru.com/c17e-Restaurant-Kitsune-Kuchnia-Azjatycka-meals.jpg
- takeaway.jpg: https://img02.restaurantguru.com/c1d8-Restaurant-Kitsune-Kuchnia-Azjatycka-sushi.jpg
- hero.jpg: sushi crop of feast.jpg.

Public customer/listing photos have no established reuse licence. Obtain restaurant-approved originals and confirm content before an official launch. Wordmark is a concept, not a verified official logo. No affiliation or client engagement is claimed.
