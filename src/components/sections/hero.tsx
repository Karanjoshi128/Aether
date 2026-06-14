import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Kicker } from "@/components/ui/section";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Reveal } from "@/components/ui/reveal";
import { scaleIn } from "@/lib/motion";

const logLines = [
  "> initializing pipeline... [OK]",
  "> connecting to cluster eu-west-1... [OK]",
  "> fetching artifacts... 100%",
  "> compiling assets (production build)... [OK]",
  "> running health checks (12/12)... [OK]",
  "> warming edge cache · 38 regions... [OK]",
];

const metrics = [
  { label: "Req/sec", value: "24.8k", className: "text-accent" },
  { label: "P99", value: "42ms", className: "text-mint" },
  { label: "Uptime", value: "99.99%", className: "text-brand-bright" },
];

function HeroTerminal() {
  return (
    <div className="glow-soft flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
        </div>
        <span className="font-mono text-xs text-dim">terminal.sh — deployed</span>
      </div>

      <div className="flex-1 space-y-2.5 px-5 py-6 font-mono text-[13px] leading-relaxed">
        {logLines.map((line) => (
          <p key={line} className="text-mint">
            {line}
          </p>
        ))}
        <p className="pt-2 text-brand-bright">
          &gt; [AETHER_SYSTEM] Optimal performance state reached.
          <span className="ml-1 inline-block h-3.5 w-2 translate-y-0.5 animate-blink bg-brand-bright" />
        </p>
      </div>

      <div className="grid grid-cols-3 divide-x divide-line border-t border-line">
        {metrics.map((m) => (
          <div key={m.label} className="px-4 py-4 sm:px-5">
            <p className="font-mono text-[10px] uppercase tracking-widest text-dim">
              {m.label}
            </p>
            <p className={`mt-1 font-display text-2xl font-bold ${m.className}`}>{m.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col justify-center overflow-hidden pb-10 pt-24 sm:pb-12 sm:pt-28">
      <AuroraBackground />

      <Container>
        <Reveal>
          <Kicker>Avant-garde engineering</Kicker>
        </Reveal>

        <div className="mt-6 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          {/* Left: copy + CTAs as one tight stack */}
          <div className="flex flex-col">
            <Reveal delay={0.05}>
              <h1 className="font-display text-[clamp(2.5rem,6.2vw,4.75rem)] font-black leading-[0.92] tracking-tight">
                We build, ship, and{" "}
                <span className="uppercase text-brand-bright">scale</span> the web.
              </h1>
            </Reveal>

            <Reveal delay={0.12} className="mt-7 max-w-xl">
              <p className="text-pretty leading-relaxed text-muted">
                Aether Studio bridges high-end technical engineering with sophisticated
                architectural design. We architect robust, performant digital ecosystems
                for industry leaders who demand uncompromising quality.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href="/contact" variant="primary" size="lg">
                  Start Project
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </ButtonLink>
                <ButtonLink href="/services" variant="secondary" size="lg">
                  Explore Expertise
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          {/* Right: terminal, centered against the copy */}
          <Reveal variants={scaleIn} delay={0.15}>
            <HeroTerminal />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
