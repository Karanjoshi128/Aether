import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { PageHero } from "@/components/sections/page-hero";
import { CaseStudyCard } from "@/components/sections/case-study-card";
import { CTA } from "@/components/sections/cta";
import { ButtonLink } from "@/components/ui/button";
import { caseStudies, stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "Case Studies & Client Results",
  description:
    "Case studies from Aether — products we've designed, built, deployed, and kept running. Faster sites, higher conversion, zero downtime.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        kicker="Selected work"
        title={
          <>
            Shipped, scaled, and <span className="text-gradient">still running</span>
          </>
        }
        subtitle="We measure success the way you do — in load times, uptime, conversion, and revenue. Here's a sample of what that looks like."
      >
        <ButtonLink href="/contact" size="lg">
          Book a free call
        </ButtonLink>
      </PageHero>

      <Section className="pt-4">
        <Container>
          {/* outcome strip */}
          <Stagger className="mb-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-4">
            {stats.map((s) => (
              <StaggerItem key={s.label} className="bg-canvas-soft/70 px-5 py-7 text-center">
                <p className="font-display text-3xl font-semibold text-gradient sm:text-4xl">
                  {s.prefix ?? ""}
                  {s.value}
                  {s.suffix ?? ""}
                </p>
                <p className="mt-1 text-xs text-muted">{s.label}</p>
              </StaggerItem>
            ))}
          </Stagger>

          <Stagger className="grid gap-6 md:grid-cols-2">
            {caseStudies.map((study) => (
              <StaggerItem key={study.slug} className="h-full">
                <CaseStudyCard study={study} />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <CTA />
    </>
  );
}
