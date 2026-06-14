import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Stagger, StaggerItem, Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { CaseStudyCard } from "./case-study-card";
import { caseStudies } from "@/lib/data";

export function Work() {
  return (
    <Section id="work">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            align="left"
            kicker="Selected work"
            title={
              <>
                Real results, <span className="text-gradient">measured</span>
              </>
            }
            subtitle="A few of the products we've designed, shipped, and kept running."
          />
          <Reveal className="shrink-0">
            <ButtonLink href="/work" variant="secondary" size="md">
              View all case studies
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </ButtonLink>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.slice(0, 3).map((study) => (
            <StaggerItem key={study.slug} className="h-full">
              <CaseStudyCard study={study} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
