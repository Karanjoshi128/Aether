import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Counter } from "@/components/ui/counter";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { stats } from "@/lib/data";

export function Stats() {
  return (
    <Section className="py-14 sm:py-16">
      <Container>
        <Stagger className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem
              key={s.label}
              className="bg-canvas-soft/70 px-5 py-8 text-center sm:px-8"
            >
              <p className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                <Counter
                  className="text-gradient"
                  value={s.value}
                  decimals={s.decimals}
                  prefix={s.prefix}
                  suffix={s.suffix}
                />
              </p>
              <p className="mt-2 text-sm text-muted">{s.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
