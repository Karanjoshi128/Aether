import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Stagger, StaggerItem, Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/sections/page-hero";
import { CTA } from "@/components/sections/cta";
import { ButtonLink } from "@/components/ui/button";
import { services, techStack } from "@/lib/data";

export const metadata: Metadata = {
  title: "Web Development, Hosting & CI/CD Services",
  description:
    "Web development, maintenance, managed hosting, cloud deployment, CI/CD, and performance & SEO — the full web lifecycle handled by one senior team.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Services"
        title={
          <>
            From first commit to <span className="text-gradient">global scale</span>
          </>
        }
        subtitle="Hire us for one piece or the whole lifecycle. Either way, you get senior engineers who design, build, deploy, and keep your web presence running fast."
      >
        <ButtonLink href="/contact" size="lg">
          Book a free call
        </ButtonLink>
        <ButtonLink href="/work" variant="secondary" size="lg">
          See the results
        </ButtonLink>
      </PageHero>

      <Section className="pt-4">
        <Container>
          <Stagger className="grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <StaggerItem key={service.slug} className="h-full">
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col gap-6 rounded-xl border border-line bg-surface/50 p-7 transition-colors duration-300 hover:border-line-strong sm:p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-line bg-linear-to-br from-brand/20 to-accent/10 text-brand-bright">
                      <service.icon className="size-6" strokeWidth={1.75} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h2 className="font-display text-xl font-semibold text-fg">
                          {service.title}
                        </h2>
                        <ArrowUpRight className="size-5 shrink-0 text-dim transition-colors group-hover:text-brand-bright" />
                      </div>
                      <p className="mt-1 text-sm text-accent">{service.tagline}</p>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>

                  <ul className="mt-auto grid gap-2.5 border-t border-line pt-5 sm:grid-cols-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted">
                        <Check className="size-4 shrink-0 text-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section className="bg-canvas-soft/30">
        <Container>
          <SectionHeading
            kicker="Our toolkit"
            title={
              <>
                Built on a <span className="text-gradient">modern, proven</span> stack
              </>
            }
            subtitle="We pick boring-where-it-counts, cutting-edge-where-it-matters. No framework-of-the-week churn — just tools that ship reliably and scale."
          />
          <Reveal className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <Badge key={tech} className="px-4 py-2 text-sm text-fg">
                {tech}
              </Badge>
            ))}
          </Reveal>
        </Container>
      </Section>

      <CTA />
    </>
  );
}
