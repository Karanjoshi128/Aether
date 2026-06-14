import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/accordion";
import { ButtonLink } from "@/components/ui/button";
import { faqs } from "@/lib/data";

export function FAQ() {
  return (
    <Section id="faq" className="bg-canvas-soft/30">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              align="left"
              kicker="FAQ"
              title={
                <>
                  Questions, <span className="text-gradient">answered</span>
                </>
              }
              subtitle="Still unsure about something? Book a call and we'll give you straight answers — no pressure."
            />
            <Reveal className="mt-6">
              <ButtonLink href="/contact" variant="secondary" size="md">
                Ask us anything
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </ButtonLink>
            </Reveal>
          </div>

          <Reveal>
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
