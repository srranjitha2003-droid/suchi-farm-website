# Suchi Farm — Family Business Website

## Original Problem Statement
> "want to build a web app to my family business, if I can attach their google map details link. will u able to make it?"

Business: **Suchi Farm** — silk cocoon production (with mulberry cultivation and hand grading). Family originally mentioned fishery and aquaculture too; visuals + signboard indicate silk is the primary craft — to confirm with family.
Google Maps link: https://maps.app.goo.gl/81Z4HTzcm4U78QpP6?g_st=ic
Resolved address: SUCHI FARM Productions, B. Seehalli, Karnataka 571101.

## Real contact details (live on site)
- Phones: +91 96402 14052 · +91 70134 43123
- Email: scravikumar1968@gmail.com
- Hours: 7:00 AM – 7:00 PM · All days of the week

## Real media assets used
- Mulberry plantation rows (hero background)
- Farm entrance with Kannada signboard "ರೇಷ್ಮೆ ಪುಲು ಸಾಕಾಣಿಕೆ ಮನೆ" (About)
- White silk cocoons close-up (Silk Cocoon Production)
- Silkworms in tray + on mulberry stems (Gallery)
- Cocoons in orange rearing nets — wide and close (Gallery, Services)
- 2 farm video clips (Gallery autoplays one)

## Architecture
- **Frontend**: React (CRA + craco) + Tailwind + shadcn/ui base, single-page marketing site, anchor-link smooth nav. Cormorant Garamond + Manrope + Noto Serif Kannada fonts.
- **Backend**: FastAPI + MongoDB scaffold (untouched; no inquiry form per user choice).
- **Content layer**: All copy, images, contact details centralized in `/app/frontend/src/data/site.js`.

## Sections shipped (2026-06-15)
- Hero with mulberry plantation backdrop, brand title, dual CTAs (Get Directions + Our Services).
- About: Kannada brand mark, family story, 3 stats (Crafts / Days / Hand-tended), farm signboard photo with pull-quote.
- Services: 3 cards — Silk Cocoon Production, Mulberry Cultivation, Cocoon Grading.
- Gallery: 6-tile bento grid with images + auto-playing muted video.
- Testimonials: rotating quote carousel on deep-green background.
- Contact: 2 phones + email + address + hours with click-to-call/email, real Google Maps iframe centered on the farm, primary "Get Directions" CTA.
- Footer with quick links, contact, copyright.

## Backlog / Next tasks
- **P0**: Confirm whether fishery & aquaculture services should be re-added (currently silk-focused based on photos and signboard).
- **P1**: Replace 3 placeholder testimonials with real customer quotes (with permission).
- **P2**: Add a floating WhatsApp button using one of the family's mobile numbers.
- **P2**: Add a small "Live from the Farm" reel using the uploaded videos (currently 1 is in gallery; the 2nd is unused).
- **P2**: SEO meta tags, Open Graph image, favicon, sitemap.xml.
- **P2**: Optional Kannada/English language toggle.
