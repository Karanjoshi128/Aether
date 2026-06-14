import { Container } from "@/components/ui/container";
import { Marquee } from "@/components/ui/marquee";
import { Reveal } from "@/components/ui/reveal";
import { clientLogos } from "@/lib/data";

export function TrustBar() {
  return (
    <section className="border-y border-line bg-canvas-soft/40 py-10">
      <Container>
        <Reveal className="mb-8 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-dim">
            Trusted by teams who can&apos;t afford downtime
          </p>
        </Reveal>
      </Container>

      <div className="relative">
        <Marquee>
          {clientLogos.map((name) => (
            <span
              key={name}
              className="whitespace-nowrap font-display text-xl font-semibold text-muted transition-colors duration-300 hover:text-fg sm:text-2xl"
            >
              {name}
            </span>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-canvas to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-canvas to-transparent sm:w-32" />
      </div>
    </section>
  );
}
