import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, Kicker } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ButtonLink } from "@/components/ui/button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { JsonLd } from "@/components/seo/json-ld";
import { CTA } from "@/components/sections/cta";
import { services, serviceDetails } from "@/lib/data";
import { serviceJsonLd, absoluteUrl } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  const title = `${service.title} Services`;
  return {
    title,
    description: service.description,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: `${title} · Aether`,
      description: service.description,
      url: absoluteUrl(`/services/${slug}`),
    },
  };
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  const detail = serviceDetails[slug];
  if (!service || !detail) notFound();

  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <JsonLd data={serviceJsonLd(service)} />

      <section className="relative overflow-hidden pb-12 pt-32 sm:pt-36">
        <AuroraBackground className="opacity-60" />
        <Container>
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Expertise", path: "/services" },
              { name: service.title, path: `/services/${slug}` },
            ]}
          />
          <Reveal className="mt-6 max-w-3xl">
            <Kicker>Expertise</Kicker>
            <h1 className="mt-5 font-display text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
              {service.title}
            </h1>
            <p className="mt-3 font-mono text-sm text-accent">{service.tagline}</p>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted">
              {detail.overview}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/contact" variant="primary" size="lg">
                Start Project
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </ButtonLink>
              <ButtonLink href="/work" variant="secondary" size="lg">
                See the results
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      <Section className="pt-4">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h2 className="font-display text-2xl font-bold tracking-tight">
                What&apos;s included
              </h2>
              <ul className="mt-6 space-y-3">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-muted">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-2xl font-bold tracking-tight">
                Outcomes you can expect
              </h2>
              <ul className="mt-6 space-y-4">
                {detail.outcomes.map((o, i) => (
                  <li
                    key={o}
                    className="flex items-start gap-4 rounded-xl border border-line bg-surface/50 p-5"
                  >
                    <span className="font-mono text-sm text-brand-bright">
                      0{i + 1}
                    </span>
                    <span className="text-fg">{o}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-canvas-soft/30">
        <Container>
          <h2 className="font-display text-2xl font-bold tracking-tight">
            Related expertise
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/services/${r.slug}`}
                className="group flex flex-col gap-3 rounded-xl border border-line bg-surface/50 p-6 transition-colors hover:border-line-strong"
              >
                <div className="flex size-11 items-center justify-center rounded-xl border border-line bg-canvas text-brand-bright">
                  <r.icon className="size-5" strokeWidth={1.75} />
                </div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-fg">
                    {r.title}
                  </h3>
                  <ArrowUpRight className="size-4 shrink-0 text-dim transition-colors group-hover:text-fg" />
                </div>
                <p className="text-sm leading-relaxed text-muted">{r.tagline}</p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CTA initialService={service.title} />
    </>
  );
}
