# Project Memory — Aether site

Quick-reference facts so anyone (or any agent) can pick this up cold.

## What this is
A lead-generative marketing website for **Aether**, a fictional full-lifecycle web
engineering studio (development, maintenance, hosting, cloud, CI/CD, performance/SEO).

## Where things live
- `src/app/` — routes: `/`, `/services`, `/services/[slug]` (6, SSG), `/work`,
  `/work/[slug]` (4, SSG), `/about`, `/contact`, `/privacy`, `/terms`, `/api/lead`
  (`/contact` is dynamic — reads `?plan=` to prefill the form)
- `src/lib/seo.ts` — central `SITE_URL`/`SITE_NAME`/`absoluteUrl` + JSON-LD builders
  (organization, website, breadcrumb, service, caseStudy, faq). Change the domain HERE.
- `src/components/seo/json-ld.tsx` — `<JsonLd data={...}>` renders ld+json script(s)
- `src/components/ui/breadcrumbs.tsx` — visual breadcrumbs + BreadcrumbList schema
- `src/lib/data.ts` — also holds `serviceDetails` & `caseStudyDetails` (slug-keyed copy
  for the detail pages) alongside the base `services`/`caseStudies` arrays
- `src/components/providers.tsx` — `<MotionConfig reducedMotion="user">` wrapper
- **Logo/brand assets** — `public/logo/1.png`–`7.png` are the GPT-generated originals
  (all transparent but dark-ink). `scripts/process-logos.mjs` (needs `sharp`) derives the
  files the site uses: `public/logo/lockup-white.png` + `mark-white.png` (dark ink
  recolored to off-white, violet `#7C5CFF` accent preserved) and `src/app/icon.png` (256)
  + `src/app/apple-icon.png` (180) from the charcoal-tile icons (3/7.png). Re-run the
  script if the source logos change. `Logo` (`ui/logo.tsx`) renders the white lockup via
  next/image; the old `icon.svg` was removed (Next file-convention uses icon.png now).

## SEO notes
- Sitewide `Organization` + `WebSite` JSON-LD in `layout.tsx`; home adds `FAQPage`;
  service pages add `Service` + breadcrumbs; case studies add `CreativeWork` + breadcrumbs.
- `sitemap.ts` is data-driven (static + service + case routes, with lastModified).
- Detail-page metadata is keyword-led via `generateMetadata`.
- Pre-launch: swap placeholder domain in `lib/seo.ts`; add GA4 + GSC; run `/seo-audit`.
- See `seo.md` for the full plan + out-of-scope items (images, blog, CSS-only reveals).
- `src/app/globals.css` — Tailwind v4 `@theme` design tokens + custom utilities
- `src/app/layout.tsx` — fonts (Space Grotesk / Inter / JetBrains Mono), global metadata
- `src/components/ui/` — primitives (Button, Reveal, Section, AuroraBackground, …)
- `src/components/sections/` — page sections (Navbar, Hero, Services, … Footer)
- `src/lib/cn.ts` — `cn()` class merge helper
- `src/lib/data.ts` — ALL site copy/content (edit here to change text)
- `src/lib/motion.ts` — shared Framer Motion variants
- `src/lib/validators.ts` — zod schema for the lead form (shared client + API)

## Key facts / conventions
- **Stack:** Next 16.2.9, React 19.2, Tailwind v4, framer-motion 12.40, lucide-react 1.18,
  react-hook-form 7 + zod 4. React Compiler is ON (`next.config.ts`).
- **Server components by default.** Add `"use client"` only to interactive/animated files.
- **Colors:** `brand` = violet `#7C5CFF` (primary), `accent` = cyan `#22D3EE` (secondary);
  page canvas `#07070B`. Use Tailwind tokens: `bg-canvas`, `bg-canvas-soft`, `bg-surface`,
  `text-fg`, `text-muted`, `text-dim`, `text-brand`, `text-accent`, `border-line`.
  NOTE: the darkest color token is named `canvas` (NOT `base`) on purpose — `base` would
  collide with the `text-base` font-size utility and silently color text near-black.
- **Fonts via CSS vars:** `font-display` (**Archivo**, heavy/black for big headlines),
  `font-sans` (Inter), `font-mono` (JetBrains — used heavily for UI chrome/labels).
- **Design direction:** "avant-garde engineering" — flat charcoal canvas + film grain
  (`.grain-overlay` in layout), NO aurora blobs, solid-violet accent (no gradients;
  `.text-gradient` now renders solid violet), sharp radii (cards `rounded-xl`, buttons
  `rounded-md` mono-uppercase), terminal/console motif in hero. Logo is the wordmark
  "Aether Studio" (no icon). Nav: Expertise/Work/Process/Studio + "Booking Q4" pill +
  "Start Project". Emphasized panels use `.accent-border` (1px violet).
- **Scroll reveal:** wrap content in `<Reveal>`; respects reduced motion.
- **Lead form** posts to `/api/lead`; no real email/CRM wired (returns success + logs).

## Commands
- `npm run dev` — local dev (http://localhost:3000)
- `npm run build` — production build (Turbopack)
- `npm start` — serve production build
- `npm run lint` — eslint

## Status
- [x] Scaffold + deps + planning docs
- [x] Design system + UI primitives + content data
- [x] All sections + pages + API + sitemap/robots
- [x] `npm run build` passing + `npm run lint` clean
- [x] Multi-agent review (5 lenses, adversarially verified) — 22 confirmed findings
  applied: AA contrast fixes (text-dim → #8a8aa6), reduced-motion hydration fix via
  MotionConfig, form a11y (aria-invalid/describedby, role=alert, strong focus ring),
  mobile-nav close-on-navigate + Escape, FAQ/Org JSON-LD, privacy/terms pages,
  optional budget + "Not sure yet", pricing→form plan prefill, CTA social proof.

## Open follow-ups (not blocking)
- Wire `/api/lead` to a real email provider / CRM (Resend, HubSpot, etc.).
- Replace placeholder client logos & case studies with real ones.
- Add a real booking embed (Cal.com/Calendly) on `/contact`.
- Generate a real OG image (currently a styled fallback).
