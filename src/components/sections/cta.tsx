import { Check, Mail, Clock, Globe, Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, Kicker } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { LeadForm } from "./lead-form";
import { fadeLeft } from "@/lib/motion";
import { brand, stats } from "@/lib/data";

const benefits = [
  "Free, no-pressure strategy call",
  "You talk to a senior engineer, not a salesperson",
  "Fixed scope and clear, upfront pricing",
];

// Compact, static social-proof bar shown right where the visitor decides.
const proof = [stats[0], stats[1], stats[3]];

export function CTA({
  initialService = "",
  initialBudget = "",
}: {
  initialService?: string;
  initialBudget?: string;
} = {}) {
  return (
    <Section id="contact" className="relative overflow-hidden">
      <AuroraBackground className="opacity-70" />
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="flex flex-col gap-6">
            <Kicker>Let&apos;s build</Kicker>
            <h2 className="text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Tell us what you&apos;re building.{" "}
              <span className="text-gradient">We&apos;ll handle the rest.</span>
            </h2>
            <p className="max-w-md text-pretty text-lg leading-relaxed text-muted">
              Book a free strategy call or send a few details — you&apos;ll hear back
              from a senior engineer within one business day.
            </p>

            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm text-fg">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-mint/15 text-mint">
                    <Check className="size-3.5" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            {/* Social proof at the point of decision */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-5">
              {proof.map((s) => (
                <div key={s.label} className="flex items-center gap-2">
                  {s.label === "Client rating" && (
                    <Star className="size-4 fill-brand-bright text-brand-bright" />
                  )}
                  <span className="font-display text-lg font-semibold text-gradient">
                    {s.prefix ?? ""}
                    {s.value}
                    {s.suffix ?? ""}
                  </span>
                  <span className="text-sm text-muted">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2.5 border-t border-line pt-5 text-sm text-muted">
              <a
                href={`mailto:${brand.email}`}
                className="inline-flex items-center gap-2.5 transition-colors hover:text-fg"
              >
                <Mail className="size-4 text-accent" />
                {brand.email}
              </a>
              <span className="inline-flex items-center gap-2.5">
                <Clock className="size-4 text-accent" />
                {brand.responseTime}
              </span>
              <span className="inline-flex items-center gap-2.5">
                <Globe className="size-4 text-accent" />
                {brand.location}
              </span>
            </div>
          </Reveal>

          <Reveal variants={fadeLeft}>
            <LeadForm initialService={initialService} initialBudget={initialBudget} />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
