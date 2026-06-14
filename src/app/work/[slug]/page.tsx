import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, Kicker } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { JsonLd } from "@/components/seo/json-ld";
import { CaseStudyCard } from "@/components/sections/case-study-card";
import { CTA } from "@/components/sections/cta";
import { caseStudies, caseStudyDetails, services, type Service } from "@/lib/data";
import { caseStudyJsonLd, absoluteUrl } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) return {};
  const title = `${study.client} — ${study.category} Case Study`;
  return {
    title,
    description: study.summary,
    alternates: { canonical: `/work/${slug}` },
    openGraph: {
      title: `${study.client} · Aether`,
      description: study.summary,
      url: absoluteUrl(`/work/${slug}`),
    },
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  const detail = caseStudyDetails[slug];
  if (!study || !detail) notFound();

  const usedServices: Service[] = detail.services.flatMap((s) => {
    const match = services.find((x) => x.slug === s);
    return match ? [match] : [];
  });
  const more = caseStudies.filter((c) => c.slug !== slug).slice(0, 3);

  const sections = [
    { heading: "The challenge", body: detail.challenge },
    { heading: "Our approach", body: detail.approach },
    { heading: "The result", body: detail.result },
  ];

  return (
    <>
      <JsonLd data={caseStudyJsonLd(study)} />

      <section className="relative overflow-hidden pb-12 pt-32 sm:pt-36">
        <AuroraBackground className="opacity-60" />
        <Container>
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Work", path: "/work" },
              { name: study.client, path: `/work/${slug}` },
            ]}
          />
          <Reveal className="mt-6 max-w-3xl">
            <Kicker>{study.category}</Kicker>
            <h1 className="mt-5 text-balance font-display text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
              {study.title}
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted">
              {study.summary}
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact" variant="primary" size="lg">
                Start a project like this
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </ButtonLink>
            </div>
          </Reveal>

          {/* metrics strip */}
          <Reveal className="mt-12 grid grid-cols-3 divide-x divide-line overflow-hidden rounded-xl border border-line">
            {study.metrics.map((m) => (
              <div key={m.label} className="bg-surface/50 px-4 py-6 text-center sm:px-6">
                <p className="font-display text-2xl font-bold text-gradient sm:text-4xl">
                  {m.value}
                </p>
                <p className="mt-1 text-xs text-muted">{m.label}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      <Section className="pt-4">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
            {/* narrative */}
            <div className="space-y-10">
              {sections.map((s) => (
                <Reveal key={s.heading}>
                  <h2 className="font-display text-2xl font-bold tracking-tight">
                    {s.heading}
                  </h2>
                  <p className="mt-3 text-pretty leading-relaxed text-muted">{s.body}</p>
                </Reveal>
              ))}
            </div>

            {/* meta aside */}
            <Reveal>
              <div className="space-y-8 rounded-xl border border-line bg-surface/40 p-6 lg:sticky lg:top-28">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-dim">Client</p>
                  <p className="mt-1.5 font-display text-lg font-semibold text-fg">
                    {study.client}
                  </p>
                  <p className="text-sm text-muted">{study.category}</p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-dim">Stack</p>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {study.tags.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-dim">
                    Services applied
                  </p>
                  <ul className="mt-2.5 space-y-2">
                    {usedServices.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="group inline-flex items-center gap-1.5 text-sm text-fg transition-colors hover:text-brand-bright"
                        >
                          {s.title}
                          <ArrowUpRight className="size-3.5 text-dim transition-colors group-hover:text-brand-bright" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-canvas-soft/30">
        <Container>
          <h2 className="font-display text-2xl font-bold tracking-tight">More work</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {more.map((c) => (
              <CaseStudyCard key={c.slug} study={c} />
            ))}
          </div>
        </Container>
      </Section>

      <CTA />
    </>
  );
}
