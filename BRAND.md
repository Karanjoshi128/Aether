# Aether — Brand Guide

> The single source of truth for who we are, how we sound, and how we look.

---

## 1. The Name

**Aether** (pronounced *EE-ther*).

In classical physics the *aether* was the invisible medium believed to carry light
across the universe — the thing everything else moved through. That's the metaphor:
**we're the invisible infrastructure your business moves through.** Customers never
see hosting, pipelines, or deploys — they just feel a product that's fast, reliable,
and always on. Aether is the layer that makes that true.

It also reads as "ethereal / cloud / light" — which fits a studio whose work spans
the **cloud**, **the edge**, and **the web**.

- **Primary wordmark:** `Aether`
- **Descriptor:** `Web Engineering Studio`
- **Lockup:** `Aether — Web Engineering Studio`
- **Logo concept:** lowercase-feel geometric wordmark with a small orbiting "spark"
  glyph (a 4-point star / sparkle) that doubles as a favicon and loading mark.

## 2. One-liner & Taglines

- **Primary tagline:** *We build, ship, and scale the web.*
- **Hero headline:** *The web partner that owns the whole lifecycle.*
- **Supporting lines:**
  - *From first commit to global scale.*
  - *One accountable team for design, code, cloud, and uptime.*
  - *Your invisible engineering department.*

## 3. Positioning

Aether is a **senior, full-lifecycle web engineering studio**. Most companies stitch
together a designer, a dev shop, a hosting bill, and a freelancer "when something
breaks." Aether replaces that mess with **one accountable partner** that designs,
builds, deploys, and keeps it running.

**Who we're for:** funded startups and growth-stage / SMB teams (Seed–Series B,
or established businesses modernizing) who need product-grade web work without
hiring a full in-house platform team.

**The wedge:** we don't just hand off a repo and disappear. We own **CI/CD, cloud,
hosting, monitoring, and maintenance** — so the thing we build stays fast and online.

**Proof pillars (the 4 reasons to believe):**
1. **Senior-only team** — no juniors learning on your budget.
2. **Lifecycle ownership** — build *and* run; SLAs, not "good luck."
3. **Performance obsession** — Core Web Vitals green, Lighthouse ~100.
4. **Transparent & fast** — fixed scopes, shared dashboards, weekly ships.

## 4. Services (canonical names & taglines)

| # | Service | One-line | Icon (lucide) |
|---|---------|----------|---------------|
| 1 | **Web Development** | Custom sites & web apps built on Next.js, React, and headless CMS. | `code-xml` |
| 2 | **Maintenance & Support** | Proactive monitoring, patches, fixes, and tuning — under SLA. | `shield-check` |
| 3 | **Managed Hosting** | Blazing-fast, secure, auto-scaling hosting on the edge. | `server` |
| 4 | **Cloud Deployment** | AWS / GCP / Vercel infra as code, autoscaling, cost-tuned. | `cloud` |
| 5 | **CI/CD & DevOps** | Automated pipelines, tests, and zero-downtime releases. | `git-branch` |
| 6 | **Performance & SEO** | Core Web Vitals, technical SEO, and analytics that convert. | `gauge` |

## 5. Voice & Tone

- **Confident, not cocky.** We state outcomes plainly. No "synergy," no hype words.
- **Technical but clear.** We respect the reader's intelligence; we never hide behind jargon.
- **Outcome-first.** Talk in shipped features, load times, uptime, conversions — not tasks.
- **Human.** Short sentences. Active voice. A little dry wit is fine.

**Words we use:** ship, build, scale, deploy, own, fast, reliable, green, accountable.
**Words we avoid:** cutting-edge (show it instead), world-class, ninja/rockstar, leverage, synergy.

## 6. Visual Identity

### Theme
Dark-first, "aurora in the aether." Deep near-black canvas with soft violet→cyan
gradient light bleeding through, glassy surfaces, and a faint engineering grid.
Premium, calm, and high-contrast — feels like a senior product team's tools.

### Color tokens
| Token | Hex | Use |
|-------|-----|-----|
| `bg` (base) | `#07070B` | Page background |
| `bg-soft` | `#0B0B14` | Alternating sections |
| `surface` | `#111120` | Cards / panels |
| `surface-2` | `#16162A` | Raised / hover |
| `border` | `rgba(255,255,255,0.08)` | Hairline borders |
| **`violet` (primary)** | `#7C5CFF` | Primary brand, CTAs, links |
| `violet-bright` | `#9B7BFF` | Hover / highlights |
| **`cyan` (secondary)** | `#22D3EE` | Accent, gradients |
| `magenta` (tertiary) | `#E879F9` | Aurora gradient stop only |
| `mint` | `#34D399` | "Green / healthy / uptime" signals |
| `text` | `#F5F6FA` | Primary text |
| `text-muted` | `#9B9BB4` | Secondary text |
| `text-dim` | `#6B6B83` | Captions, labels |

**Signature gradient:** `#7C5CFF → #22D3EE` (violet → cyan), 135°.
**Aurora gradient (ambient blobs):** `#7C5CFF`, `#22D3EE`, `#E879F9` blended at low opacity.

### Typography
- **Display / headings:** `Space Grotesk` — geometric, techy, a little unusual.
- **Body / UI:** `Inter` — neutral, hyper-legible at all sizes.
- **Mono / labels:** `JetBrains Mono` — for kicker labels like `// 02 — process`,
  metrics, code snippets, the "engineering" texture.

Heading scale is large and tight (`tracking-tight`, big line-height control).
Mono kickers are uppercase, letter-spaced, small, and cyan/violet.

### Shape & depth
- Radii: cards `rounded-3xl` (24px), buttons/inputs `rounded-xl/full`.
- Borders: 1px hairline (`border`), brightening to violet on hover.
- Glow: colored, soft box-shadows (`shadow-violet-500/20`) instead of hard shadows.
- Glass: `backdrop-blur` + translucent surface for floating elements (nav, cards).

### Motion (Framer Motion)
- **Scroll reveal:** fade + 24px slide-up, staggered children (the house style).
- **Hero:** slow-drifting aurora blobs + gradient text shimmer.
- **Buttons:** subtle scale on hover/tap, animated gradient sheen.
- **Cards:** lift + border-glow on hover; optional pointer-tracking spotlight.
- **Stats:** count-up when in view.
- **Logos:** infinite marquee.
- Respect `prefers-reduced-motion` — disable transforms, keep opacity.

## 7. Conversion / Lead-gen principles

Every page is built to move a visitor toward **"Book a call"** or **"Get a proposal."**
- A clear CTA is always within reach (nav button + sticky mobile bar + section CTAs).
- Trust is shown early and often: stats band, logos, testimonials, case-study metrics.
- The final section is always a high-intent **lead form** (name, work email, company,
  service, budget, details) with low friction and an obvious payoff ("free proposal").
- Risk reversal: "free strategy call," "no lock-in," "fixed scope," "reply in 1 business day."

## 8. Contact (placeholder identity)

- Email: `hello@aether.studio`
- Booking: `/contact` (Cal.com / Calendly placeholder)
- Socials: `@aetherstudio` (X, LinkedIn, GitHub, Dribbble) — placeholders.
