import { Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { testimonials } from "@/lib/data";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

export function Testimonials() {
  return (
    <Section id="testimonials" className="bg-canvas-soft/30">
      <Container>
        <SectionHeading
          kicker="Testimonials"
          title={
            <>
              Teams that stopped{" "}
              <span className="text-gradient">worrying</span> about their site
            </>
          }
          subtitle="We're judged on outcomes — speed, uptime, and revenue. Here's what that feels like to work with."
        />

        <Stagger className="mt-14 grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name} className="h-full">
              <figure className="flex h-full flex-col rounded-xl border border-line bg-surface/50 p-6 transition-colors duration-300 hover:border-line-strong">
                <div className="flex gap-0.5 text-brand-bright">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-brand-bright" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-fg/90">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-linear-to-br from-brand/30 to-accent/20 font-display text-sm font-semibold text-fg">
                    {initials(t.name)}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-fg">{t.name}</p>
                    <p className="text-xs text-muted">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
