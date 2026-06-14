import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { GlowCard } from "@/components/ui/glow-card";
import { Stagger, StaggerItem, Reveal } from "@/components/ui/reveal";
import { services } from "@/lib/data";

export function Services() {
  return (
    <Section id="services" className="bg-canvas-soft/30">
      <Container>
        <SectionHeading
          kicker="What we do"
          title={
            <>
              Everything your web presence needs,{" "}
              <span className="text-gradient">under one roof</span>
            </>
          }
          subtitle="Six services, one accountable team. Start with a build or a single piece — most clients end up letting us run the whole thing."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.slug} className="h-full">
              <GlowCard className="h-full">
                <div className="flex h-full flex-col gap-5 p-6 sm:p-7">
                  <div className="flex size-12 items-center justify-center rounded-xl border border-line bg-linear-to-br from-brand/20 to-accent/10 text-brand-bright">
                    <service.icon className="size-6" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-fg">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {service.description}
                    </p>
                  </div>
                  <ul className="mt-auto space-y-2 border-t border-line pt-4">
                    {service.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted">
                        <Check className="size-4 shrink-0 text-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlowCard>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-10 flex justify-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-medium text-fg transition-colors hover:text-brand-bright"
          >
            Explore all services in detail
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}
