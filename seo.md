# SEO Improvement Plan

Goal: expand indexable, keyword-targeted surface area and structured data without
regressing the design or Core Web Vitals.

## Baseline (already in place)
- `metadataBase`, title template, per-page `description` + `canonical`
- `sitemap.ts`, `robots.ts`, dynamic OG image
- JSON-LD: ProfessionalService + FAQPage (home)
- One `<h1>` per page, semantic headings, self-hosted fonts, static rendering

## Changes in this pass

### 1. Centralize SEO config — `src/lib/seo.ts`
- Single `SITE_URL` / `SITE_NAME` / `absoluteUrl()` (was duplicated in layout, sitemap, robots).
- JSON-LD builders: `organizationJsonLd`, `websiteJsonLd`, `breadcrumbJsonLd(items)`,
  `serviceJsonLd(service)`, `caseStudyJsonLd(study)`, `faqJsonLd(faqs)`.
- `<JsonLd>` component (`components/seo/json-ld.tsx`) to render `<script type="application/ld+json">`.

### 2. Individual detail pages (biggest lever)
- **`/services/[slug]`** — `generateStaticParams` + `generateMetadata`; renders overview,
  what's included, outcomes, related services, CTA. Emits `Service` + `BreadcrumbList` JSON-LD.
- **`/work/[slug]`** — `generateStaticParams` + `generateMetadata`; renders challenge /
  approach / result, metrics, stack, services used (internal links), CTA, more work.
  Emits `CreativeWork` + `BreadcrumbList` JSON-LD.
- Enrich `data.ts` with `serviceDetails` and `caseStudyDetails` (slug-keyed) so pages
  aren't thin.

### 3. Internal linking
- List cards (`/services`, `/work`, home Work) link to their detail pages.
- **Richer footer**: Services + Company columns linking every key page (regression fix
  from the minimal redesign), plus socials + legal.
- `Breadcrumbs` (visual + schema) on detail pages.

### 4. Sitewide + per-page structured data
- `Organization` + `WebSite` JSON-LD rendered once in `layout.tsx` (every page).
- Home keeps `FAQPage`. Service/Work pages add their own schema + breadcrumbs.

### 5. Keyword-aware metadata
- Per-page titles/descriptions lead with target keywords
  (e.g. "Web Development, Hosting & CI/CD Services"), via `generateMetadata` on detail pages.

### 6. Sitemap + robots
- `sitemap.ts` generated from routes + services + case studies, with `lastModified`,
  per-type `priority`/`changeFrequency`.
- `robots.ts` disallows `/api`, references sitemap + host, uses central `SITE_URL`.

## Pre-launch (config, not code)
- Replace placeholder `https://aether.studio` in `lib/seo.ts` with the real domain.
- Add GA4 + Google Search Console verification.
- After deploy, run `/seo-audit` against the live URL for a crawl-based pass.

## Out of scope (noted, not done here)
- Real images / per-route OG images / image SEO.
- Blog / resources content hub.
- Converting client-side Reveal/Stagger to CSS-only (INP optimization).
