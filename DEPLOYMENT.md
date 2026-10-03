# Demo deployment — 2026-10-03

Live: https://demo.plexrs.com/kitsune/
Repository: https://github.com/Yury-Soika/kitsune (master)
Source checkout: /Users/puma/Documents/projects/plex/kitsune
Hub: /Users/puma/Documents/projects/plex-demo

The existing hub contains a new card, thumbnail, static-export rewrite, generated-file lint exclusion, build-landings entry (`kitsune:plex/kitsune`) and deployment export check. Refresh with `npm run build:landings -- kitsune` from the hub.

Validation: Kitsune production export and TypeScript check passed. Hub lint and build passed. Local and live browser checks passed for PL/EN/RU, document language, language persistence, menu categories, FAQ, mobile navigation, image loading, hub card and overflow at 375/390/768/1440px. No JavaScript errors or failed assets observed. All 14 checked existing/new demo routes returned HTTP 200.

Deployed using the existing shared host and Passenger restart workflow. Remote runtime Next.js 16.3.6 matched the hub build; runtime dependencies and node_modules symlink were preserved. Previous server application archive: /home/iwbfnzmznr/kitsune-backup-20261003/application.tar.gz.

This is a labelled website concept. Confirm current menu, dine-in hours, official branding and photo reuse permission with the restaurant before an official launch.
