# Suchi Farm — Family Business Website

## Original Problem Statement
> "want to build a web app to my family business, if I can attach their google map details link. will u able to make it?"

Business: **Suchi Farm** — silk cocoons production, fishery and aquaculture.
Google Maps link: https://maps.app.goo.gl/81Z4HTzcm4U78QpP6?g_st=ic
Resolved address: SUCHI FARM Productions, B. Seehalli, Karnataka 571101.

## Architecture
- **Frontend**: React (CRA + craco) + Tailwind + shadcn/ui base, single-page marketing site, anchor-link nav.
- **Backend**: FastAPI + MongoDB scaffold (left as-is; not needed yet — user chose no inquiry form).
- **Content layer**: All site copy/images/contact details centralized in `/app/frontend/src/data/site.js` so the family can edit one file.

## User personas
1. Buyers (silk weavers, restaurants, wholesale) — need credibility + visit info.
2. Local community / curious visitors — need quick directions.
3. Future employees / partners — need story + scope.

## Core requirements (static)
- Single-page site with Home, About, Services, Gallery, Testimonials, Contact sections.
- Sticky navbar with smooth-scroll anchors and mobile menu.
- Google Maps embed + multiple "Get Directions" CTAs linking to the family's actual Maps URL.
- No backend submissions. Phone/email/address/hours displayed only.
- Warm + traditional + modern + minimal aesthetic. Cormorant Garamond + Manrope fonts. Earthy palette.

## What's been implemented (2026-06-15)
- Hero with full-bleed background, brand serif title, dual CTAs.
- About section with stats, pull-quote card, asymmetric image grid.
- Services section: 3 cards (Silk Cocoons, Fishery, Aquaculture) with lucide icons.
- Gallery: bento grid (5 images, mixed spans).
- Testimonials: rotating quote carousel on deep-green background.
- Contact: phone/email/address/hours rows + real Google Maps iframe centered on SUCHI FARM Productions + "Open in Maps" overlay + primary directions button.
- Footer with quick links, contact, copyright.
- All interactive elements include `data-testid` attributes.

## Backlog / Next tasks
- **P0**: Family to fill real phone, email, business hours in `/app/frontend/src/data/site.js`.
- **P1**: Replace stock gallery images with actual farm photos.
- **P1**: Replace placeholder testimonials with real customer quotes (with permission).
- **P2**: Add a language toggle (Kannada/English/Hindi) if useful for local visitors.
- **P2**: Add an "Inquiry / Order" form with WhatsApp deep-link or email backend if buyers start asking.
- **P2**: Add a small "Latest Harvest" or "Seasonal Update" section the family can update.
- **P2**: SEO meta tags, Open Graph image, favicon, sitemap.
