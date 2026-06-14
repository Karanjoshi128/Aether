import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Stagger, StaggerItem, Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { plans } from "@/lib/data";
import { cn } from "@/lib/cn";

export function Pricing() {
  return (
    <Section id="pricing">
      <Container>
        <SectionHeading
          kicker="Engagements"
          title={
            <>
              Ways to <span className="text-gradient">work with us</span>
            </>
          }
          subtitle="Start with a fixed-scope build or hand us the whole lifecycle. Every engagement is senior-led and transparently priced — no hourly surprises."
        />

        <Stagger className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <StaggerItem key={plan.name} className="h-full">
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-xl p-8",
                  plan.highlighted
                    ? "accent-border bg-surface glow-brand"
                    : "border border-line bg-surface/50"
                )}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-8 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white shadow-lg">
                    Most popular
                  </span>
                )}

                <h3 className="font-display text-xl font-semibold text-fg">{plan.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{plan.description}</p>

                <div className="mt-6">
                  <span className="font-display text-4xl font-semibold tracking-tight text-fg">
                    {plan.price}
                  </span>
                  <p className="mt-1 font-mono text-xs uppercase tracking-widest text-dim">
                    {plan.cadence}
                  </p>
                </div>

                <ul className="mt-6 flex-1 space-y-3 border-t border-line pt-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm text-muted">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <ButtonLink
                  href={`/contact?plan=${encodeURIComponent(plan.name)}`}
                  variant={plan.highlighted ? "primary" : "secondary"}
                  size="lg"
                  className="mt-8 w-full"
                >
                  {plan.cta}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </ButtonLink>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-8 text-center text-sm text-muted">
          Every engagement includes source-code ownership, documentation, and a
          1-business-day response SLA.
        </Reveal>
      </Container>
    </Section>
  );
}
