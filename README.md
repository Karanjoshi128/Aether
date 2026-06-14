# Aether — Web Engineering Studio

A responsive, lead-generative marketing website for **Aether**, a (fictional)
full-lifecycle web engineering studio: development, maintenance, managed hosting,
cloud deployment, CI/CD, and performance/SEO.

> **Tagline:** *We build, ship, and scale the web.*

Built end-to-end with the latest stack: **Next.js 16** (App Router, React Compiler,
Turbopack), **React 19**, **Tailwind CSS v4**, **Framer Motion 12**, **lucide-react**,
and **react-hook-form + zod** for the lead form.

## Getting started

```bash
npm install      # install dependencies (already done)
npm run dev      # start dev server  → http://localhost:3000
npm run build    # production build (Turbopack)
npm start        # serve the production build
npm run lint     # ESLint
```

## What's inside

| Path | Purpose |
|------|---------|
| `src/app/` | Routes: `/`, `/services`, `/work`, `/about`, `/contact`, `/api/lead`, plus `sitemap.ts`, `robots.ts`, `opengraph-image.tsx`, `icon.svg`, `not-found.tsx` |
| `src/app/globals.css` | Tailwind v4 `@theme` design tokens + custom utilities & keyframes |
| `src/app/layout.tsx` | Fonts (Space Grotesk / Inter / JetBrains Mono), global metadata, Navbar/Footer shell |
| `src/components/ui/` | Primitives: `Reveal`, `Button`, `Section`, `AuroraBackground`, `Marquee`, `Counter`, `GlowCard`, `Accordion`, `Logo`, `Badge` |
| `src/components/sections/` | Page sections: `Navbar`, `Hero`, `TrustBar`, `Stats`, `Services`, `Process`, `WhyUs`, `Work`, `Testimonials`, `Pricing`, `FAQ`, `CTA`, `LeadForm`, `Footer`, `MobileCTA` |
| `src/lib/data.ts` | **All site copy/content** — edit here to change text |
| `src/lib/cn.ts` · `motion.ts` · `validators.ts` | class merge helper · shared motion variants · zod schema |

## Editing content

Almost all visible text lives in [`src/lib/data.ts`](src/lib/data.ts) — services,
stats, process steps, case studies, testimonials, pricing, FAQs, team, and form
options. Change copy there and it propagates across pages.

## Design system

- **Colors** (Tailwind tokens): `brand` (violet `#7C5CFF`), `accent` (cyan `#22D3EE`),
  surfaces `canvas` / `canvas-soft` / `surface`, text `fg` / `muted` / `dim`, `line` borders.
- **Fonts**: `font-display` (Space Grotesk), `font-sans` (Inter), `font-mono` (JetBrains Mono).
- **Motion**: scroll-reveals via `<Reveal>` / `<Stagger>`; everything respects
  `prefers-reduced-motion`.

## The lead form

The contact/CTA form posts to `src/app/api/lead/route.ts`, which validates with the
shared zod schema and (currently) logs the lead server-side. **To go live**, forward the
validated `lead` object to your email/CRM provider (Resend, Postmark, HubSpot, Slack, a
database, etc.) in that route. A honeypot field blocks basic bots.

## Project docs

- [`plan.md`](plan.md) — build plan & information architecture
- [`decisions.md`](decisions.md) — why each choice was made
- [`BRAND.md`](BRAND.md) — brand voice, colors, typography, services
- [`memory.md`](memory.md) — quick-reference facts & status

## Production follow-ups

- Wire `/api/lead` to a real email/CRM.
- Replace placeholder client logos & case studies with real ones.
- Add a real booking embed (Cal.com / Calendly) on `/contact`.
- Set the real domain in `metadataBase` (`src/app/layout.tsx`), `sitemap.ts`, `robots.ts`.
# Aether
