# Decisions Log

Records *why* each significant choice was made, so future changes are informed.

## Brand & naming
- **D1 — Name "Aether."** Evokes the invisible medium light travels through → "we're the
  invisible infrastructure your business runs on." Also reads cloud/ethereal/light,
  matching hosting + cloud + edge work. Short, ownable, premium.
- **D2 — Positioning: full-lifecycle owner, not a hand-off dev shop.** This is the
  differentiator that justifies maintenance + hosting + cloud + CI/CD as one offer and
  supports higher-value retainers. Lead-gen copy leans on "one accountable partner."

## Visual design
- **D3 — Dark-first "aurora" theme.** Senior/premium dev-tool aesthetic; high contrast
  makes the violet→cyan CTAs pop and signals technical credibility to the target buyer
  (founders/CTOs). Dark also photographs/screenshots well for a portfolio feel.
- **D4 — Violet (#7C5CFF) primary + cyan (#22D3EE) secondary.** Energetic, modern,
  un-corporate; gradient is the signature device used sparingly on headlines & CTAs.
- **D5 — Space Grotesk (display) + Inter (body) + JetBrains Mono (labels).** Grotesk is
  distinctive without being gimmicky; Inter is the most legible UI face; mono kickers add
  an "engineering" texture that reinforces the technical brand.

## Tech
- **D6 — Next.js 16 App Router + React Compiler + Turbopack.** User asked for the latest;
  these are Next 16 flagship features. RSC by default; mark only interactive/animated
  components `"use client"`.
- **D7 — Tailwind v4 CSS-first config.** Tokens live in `globals.css` via `@theme` (no
  `tailwind.config.js` needed in v4). Brand colors become `bg-violet`, `text-cyan`, etc.
- **D8 — framer-motion (not the bare `motion` package).** User explicitly named Framer
  Motion; `framer-motion@12.40` is the current published line and is well-documented.
- **D9 — react-hook-form + zod for the lead form.** Minimal re-renders, schema validation
  shared between client and the `/api/lead` route handler. Lead-gen depends on a form that
  feels instant and trustworthy.
- **D10 — Centralized content in `lib/data.ts`.** All copy (services, cases, pricing,
  FAQs, testimonials) is data-driven so sections stay consistent and easy to edit.
- **D11 — lucide-react v1 for icons.** Brand/social logos were removed from lucide v1, so
  social icons in the footer are small inline SVGs.

## UX / conversion
- **D12 — CTA always reachable.** Persistent nav button + mobile sticky CTA bar + a CTA in
  most sections. Primary action: "Book a call"; secondary: "Get a proposal" (form).
- **D13 — Proof early & repeated.** Stats band right under the hero, logo marquee, case
  metrics, and testimonials de-risk the buy before the ask.
- **D14 — Single primary conversion form** with name, work email, company, service,
  budget, details. Work-email + budget fields lightly qualify leads without adding friction.
- **D15 — Accessibility & reduced motion.** All animations gate on `prefers-reduced-motion`;
  semantic landmarks, focus-visible rings, labelled inputs, alt text.

## Scope boundaries
- **D16 — No real backend / DB / auth.** `/api/lead` validates and returns success (logs
  server-side) — production-ready to wire to email/CRM, but no secrets shipped.
- **D17 — Placeholder brand assets.** Client logos and case studies are representative
  (clearly generic), not real companies, to avoid implying false endorsements.
