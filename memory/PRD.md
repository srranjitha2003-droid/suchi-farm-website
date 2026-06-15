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
- Hero, About, Services (Silk Cocoon Production · Mulberry Cultivation · Fishery), Gallery, Live from the Farm (autoplays both farm videos), Contact, Footer.
- Floating "Chat on WhatsApp" button on every page (deep-links to +91 96402 14052 with prefilled enquiry).
- Testimonials section removed per family request (no real bulk-buyer testimonials available).

## Backlog / Next tasks
- **P1**: Replace stock clownfish image in Fishery service card with an actual fish/pond photo from the farm.
- **P2**: Add a logo / favicon when available.
- **P2**: SEO meta tags, Open Graph image, sitemap.xml.
- **P2**: Optional Kannada/English language toggle.
- **P2**: A discreet "Bulk Enquiry" form (or stay WhatsApp-only).
