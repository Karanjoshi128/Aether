import { brand, type Service, type CaseStudy } from "./data";

export const SITE_URL = "https://aether-stdio.vercel.app";
export const SITE_NAME = "Aether";

/** Build an absolute URL for a path (used by canonical, sitemap, JSON-LD). */
export const absoluteUrl = (path = "/") => new URL(path, SITE_URL).toString();

export const socialLinks = [
  "https://x.com/aetherstudio",
  "https://github.com/aetherstudio",
  "https://linkedin.com/company/aetherstudio",
];

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  legalName: "Aether Studio",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  description:
    "Full-lifecycle web engineering studio: web development, maintenance, managed hosting, cloud deployment, and CI/CD.",
  email: brand.email,
  areaServed: "Worldwide",
  sameAs: socialLinks,
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

export function serviceJsonLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.tagline,
    url: absoluteUrl(`/services/${service.slug}`),
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "Worldwide",
  };
}

export function caseStudyJsonLd(study: CaseStudy) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: study.title,
    headline: study.title,
    about: study.category,
    abstract: study.summary,
    url: absoluteUrl(`/work/${study.slug}`),
    creator: { "@id": `${SITE_URL}/#organization` },
    keywords: study.tags.join(", "),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
