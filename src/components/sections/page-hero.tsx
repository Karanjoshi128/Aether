import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { AuroraBackground } from "@/components/ui/aurora-background";

export function PageHero({
  kicker,
  title,
  subtitle,
  children,
}: {
  kicker?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-36 sm:pb-20 sm:pt-44">
      <AuroraBackground className="opacity-60" />
      <div className="bg-grid mask-radial pointer-events-none absolute inset-0 -z-10 opacity-50" />
      <Container>
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          {kicker ? <Kicker>{kicker}</Kicker> : null}
          <h1 className="text-balance font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted">
              {subtitle}
            </p>
          ) : null}
          {children ? (
            <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
              {children}
            </div>
          ) : null}
        </Reveal>
      </Container>
    </section>
  );
}
