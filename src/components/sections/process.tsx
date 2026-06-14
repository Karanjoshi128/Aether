import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { processSteps } from "@/lib/data";

export function Process() {
  return (
    <Section id="process">
      <Container>
        <SectionHeading
          kicker="How we work"
          title={
            <>
              A clear path from idea to{" "}
              <span className="text-gradient">always-on</span>
            </>
          }
          subtitle="No black boxes. You see working software every week and know exactly where things stand from kickoff to long after launch."
        />

        <div className="relative mt-16">
          {/* connecting line (desktop) */}
          <div className="absolute inset-x-0 top-7 hidden h-px bg-linear-to-r from-transparent via-line-strong to-transparent md:block" />

          <Stagger className="grid gap-10 md:grid-cols-4 md:gap-6">
            {processSteps.map((step) => (
              <StaggerItem key={step.step} className="relative flex flex-col gap-4">
                <div className="relative z-10 grid size-14 place-items-center rounded-2xl border border-line bg-surface text-brand-bright shadow-[0_0_0_6px_var(--color-canvas)]">
                  <step.icon className="size-6" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-dim">
                    Step {step.step}
                  </p>
                  <div className="mt-1.5 flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-lg font-semibold text-fg">
                      {step.title}
                    </h3>
                    <span className="rounded-full border border-line bg-canvas px-2.5 py-0.5 font-mono text-[11px] text-accent">
                      {step.duration}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </Section>
  );
}
