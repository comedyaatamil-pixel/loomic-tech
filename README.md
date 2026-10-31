# Loomic Tech Innovation — Company Website

Premium light-theme Next.js website for Loomic Tech Innovation.

## Pages
- `/` — Home, project categories, company profile, client feedback section and enquiry form
- `/about` — Company profile, mission, vision and principles
- `/services` — Software and technology service categories
- `/work` — Project capability showcases

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm run start
```

## Assets
- `public/logo.png` — supplied Loomic Tech logo with transparent background
- `public/loomic-office.webp` — supplied Loomic Tech office/team image used on the home and About pages

The enquiry form currently prepares an email using the visitor's email application. Connect a server-side email provider or CRM endpoint before treating it as an online lead-capture system.
