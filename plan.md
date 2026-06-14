# Project Plan — Aether Web Engineering Studio site

## Goal
Ship a **responsive, lead-generative marketing website** for a fictional full-lifecycle
web services agency ("Aether"). The site must make a qualified visitor want to hire us
and funnel them to **Book a call** / **Get a proposal**.

## Stack (latest, as requested)
- **Next.js 16.2.9** (App Router, `src/`, TypeScript, **React Compiler** on, Turbopack default)
- **React 19.2**
- **Tailwind CSS v4** (CSS-first `@theme` tokens)
- **Framer Motion 12.40** (`framer-motion`) for all animation
- **lucide-react** (icons) + inline SVG for brand/social logos
- **react-hook-form + zod + @hookform/resolvers** for the lead form
- **clsx + tailwind-merge** (`cn()` helper)

## Information architecture
- `/` — Home (full conversion narrative)
- `/services` — Detailed services + sub-capabilities + tech stack
- `/work` — Case studies grid with outcome metrics
- `/about` — Story, values, team, the "how we run it" pitch
- `/contact` — Lead form + booking CTA + FAQ
- `/api/lead` — Route handler that accepts the lead form (validates, returns ok)
- Global: sticky Navbar, Footer, mobile sticky CTA bar
- SEO: `metadata` per route, `sitemap.ts`, `robots.ts`, OG image

## Home page section order (the conversion narrative)
1. **Navbar** — logo, links, "Book a call" CTA (glassy, shrinks on scroll)
2. **Hero** — headline + subhead + dual CTA + micro-proof + animated aurora visual
3. **Trust bar** — client logo marquee + "trusted by" line
4. **Stats band** — animated count-up (projects, uptime %, avg LCP, years)
5. **Services** — 6-card grid, hover glow, links to /services
6. **Process** — 4 steps: Discover → Design & Build → Deploy → Scale & Support
7. **Why Aether** — bento of differentiators (senior team, lifecycle, perf, transparency)
8. **Work** — 3 featured case studies with metrics
9. **Testimonials** — quotes from founders/CTOs
10. **Pricing / Engagements** — 3 models: Project, Care Plan (retainer), Embedded
11. **FAQ** — accordion (objection handling)
12. **Final CTA + Lead form** — the primary conversion block
13. **Footer** — nav, newsletter, socials, legal

## Reusable building blocks (`src/components`)
- `ui/` — `Button`, `Badge`/`Kicker`, `Container`, `Section`, `GradientText`,
  `Reveal` (scroll-reveal wrapper), `Marquee`, `Counter`, `GlowCard`, `Accordion`, `AuroraBackground`, `GridPattern`
- `sections/` — `Navbar`, `Hero`, `TrustBar`, `Stats`, `Services`, `Process`,
  `WhyUs`, `Work`, `Testimonials`, `Pricing`, `FAQ`, `CTA`, `LeadForm`, `Footer`, `MobileCTA`
- `lib/` — `cn.ts`, `data.ts` (all copy/content: services, steps, stats, cases,
  testimonials, pricing, faqs), `motion.ts` (shared variants), `validators.ts` (zod)

## Build order
1. ✅ Scaffold + deps
2. Planning docs (this set)
3. Design system: `globals.css` tokens + utilities, `layout.tsx` fonts + metadata, `cn`
4. UI primitives (Reveal, Button, Section, Aurora, etc.)
5. Content data file (`lib/data.ts`)
6. Section components (Navbar → Footer)
7. Pages (home, services, work, about, contact) + API route + sitemap/robots
8. `npm run build` — fix any type/lint/SSR errors
9. Multi-agent review pass (responsiveness, a11y, conversion) → apply fixes
10. Final QA + run instructions

## Definition of done
- `npm run build` passes clean (no type errors).
- Fully responsive 360px → 1440px+; mobile nav + sticky CTA work.
- All animations smooth and respect `prefers-reduced-motion`.
- Lead form validates and shows success state.
- Every page has a clear path to convert.
