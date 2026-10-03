# Demo deployment — 2026-10-03

Live: https://demo.plexrs.com/kitsune/
Repository: https://github.com/Yury-Soika/kitsune (master)
Source checkout: /Users/puma/Documents/projects/plex/kitsune
Hub: /Users/puma/Documents/projects/plex-demo

The existing hub contains a new card, thumbnail, static-export rewrite, generated-file lint exclusion, build-landings entry (`kitsune:plex/kitsune`) and deployment export check. Refresh with `npm run build:landings -- kitsune` from the hub.

Validation: Kitsune production export and TypeScript check passed. Hub lint and build passed. Local and live browser checks passed for PL/EN/RU, document language, language persistence, menu categories, FAQ, mobile navigation, image loading, hub card and overflow at 375/390/768/1440px. No JavaScript errors or failed assets observed. All 14 checked existing/new demo routes returned HTTP 200.

Deployed using the existing shared host and Passenger restart workflow. Remote runtime Next.js 16.3.6 matched the hub build; runtime dependencies and node_modules symlink were preserved. Previous server application archive: /home/iwbfnzmznr/kitsune-backup-20261003/application.tar.gz.

This is a labelled website concept. Confirm current menu, dine-in hours, official branding and photo reuse permission with the restaurant before an official launch.

## Softer visual revision — 2026-10-03

Replaced the near-black/full-yellow treatment with warm stone surfaces, a soft charcoal hero, restrained antique gold, rounded photographs and editorial Playfair Display headings. Inter and Playfair are hosted locally with Latin, Polish and Cyrillic coverage. Integrated a transparent Kitsune fox emblem regenerated from the user's reference (see IMAGE_PROMPT.md), with a matching PNG favicon. Replaced customer collages with clearer menu photography from Kitsune on Wolt. Refreshed the hub card and thumbnail.

Kitsune build and TypeScript checks, hub lint/build and local browser checks passed. All three languages were checked for horizontal overflow at 320/375/768/1440px, alongside language persistence, filters, mobile navigation, FAQ, images, fonts and the hub card.

Published successfully to the existing hub. Live checks confirmed the new stone palette, fox emblem and all browser interactions; all 14 demo routes returned HTTP 200. Previous version backup: `/home/iwbfnzmznr/kitsune-redesign-backup-20261003/application.tar.gz` (hub build/configuration and Kitsune assets). Existing runtime dependencies and other demo assets were preserved.

## Closer logo recreation — 2026-10-03

Regenerated the fox medallion closer to the original user reference, retaining bright gold and black and a slimmer face. Full-resolution 1254 × 1254 PNG retained alongside an optimized 512px website version and versioned 64px favicon. Header logo is now 72px desktop / 56px mobile; footer is 72px desktop / 64px mobile. Narrow-header spacing adjusted to accommodate the larger emblem. The softer site palette remains in place.

Published the static preview and refreshed thumbnail. Kitsune build/TypeScript and local/live browser checks passed, including PL/EN/RU, 320px layout coverage, menu, FAQ, mobile navigation and image loading. Full-resolution logo and favicon downloaded from the live host matched the source files exactly. Backup: `/home/iwbfnzmznr/kitsune-logo-v2-backup-20261003/assets.tar.gz`. Only Kitsune assets and its thumbnail were deployed; the hub runtime was preserved.

## Black and yellow palette — 2026-10-03

Replaced the stone theme with warm black (#1D201C), layered charcoal surfaces and saffron yellow (#E9C64B). Yellow highlights actions, selected controls, headings and prices. Retained the enlarged fox logo, serif typography and rounded photography. Contact panel uses charcoal with a restrained gold border. Palette specifications: DESIGN_PALETTE.md. Measured contrast: primary text/background 13.53:1; secondary text on the lightest charcoal surface 6.09:1; button text/yellow 9.10:1.
