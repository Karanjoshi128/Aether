import { ArrowRight, RefreshCw } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, Kicker } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { differentiators } from "@/lib/data";

const loop = ["Design & build", "Deploy to cloud", "Monitor & maintain", "Optimize & scale"];

export function WhyUs() {
  return (
    <Section className="bg-canvas-soft/30">
      <Container>
        <Stagger className="grid gap-5 lg:grid-cols-3">
          {/* Feature tile */}
          <StaggerItem className="lg:row-span-2">
            <div className="accent-border bg-surface glow-soft relative flex h-full flex-col justify-between gap-8 overflow-hidden rounded-xl p-8">
              <div className="pointer-events-none absolute -right-16 -top-16 size-52 rounded-full bg-brand/20 blur-3xl" />
              <div className="relative">
                <Kicker>Why Aether</Kicker>
                <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                  Build it. Ship it.{" "}
                  <span className="text-gradient">Run it.</span>
                </h2>
                <p className="mt-4 leading-relaxed text-muted">
                  Most agencies hand off a repo and disappear. We stay on the hook
                  for hosting, deploys, and uptime — so the thing we built keeps
                  performing long after launch.
                </p>
              </div>

              <ul className="relative space-y-3">
                {loop.map((stage, i) => (
                  <li key={stage} className="flex items-center gap-3">
                    <span className="grid size-7 shrink-0 place-items-center rounded-full border border-line bg-canvas font-mono text-xs text-accent">
                      {i + 1}
                    </span>
                    <span className="text-sm text-fg">{stage}</span>
                  </li>
                ))}
                <li className="flex items-center gap-3 pt-1 text-sm text-brand-bright">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full border border-brand/40 bg-brand/10">
                    <RefreshCw className="size-3.5" />
                  </span>
                  <span>…and repeat, every week</span>
                </li>
              </ul>

              <ButtonLink href="/contact" variant="primary" size="md" className="relative w-full">
                Book a free call
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </ButtonLink>
            </div>
          </StaggerItem>

          {/* Differentiators */}
          {differentiators.map((d) => (
            <StaggerItem key={d.title} className="h-full">
              <div className="h-full rounded-xl border border-line bg-surface/50 p-7 transition-colors duration-300 hover:border-line-strong">
                <div className="flex size-11 items-center justify-center rounded-xl border border-line bg-canvas text-accent">
                  <d.icon className="size-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-fg">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{d.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
