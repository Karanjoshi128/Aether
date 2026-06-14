import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Stagger, StaggerItem, Reveal } from "@/components/ui/reveal";
import { PageHero } from "@/components/sections/page-hero";
import { CTA } from "@/components/sections/cta";
import { Counter } from "@/components/ui/counter";
import { values, team, stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Aether is a small, senior web engineering studio that builds and runs the web. Meet the team and the principles behind the work.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About"
        title={
          <>
            A senior studio that <span className="text-gradient">builds and runs</span>{" "}
            the web
          </>
        }
        subtitle="We started Aether because great products kept dying after launch — abandoned by the agencies that built them. So we built a studio that stays."
      />

      <Section className="pt-4">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="space-y-5 text-pretty leading-relaxed text-muted">
              <h2 className="font-display text-2xl font-semibold text-fg">
                Our story
              </h2>
              <p>
                Aether is a small team of senior engineers and designers who got tired
                of the hand-off model: a site gets built, the agency disappears, and six
                months later it&apos;s slow, insecure, and nobody owns it.
              </p>
              <p>
                So we do it differently. We design and build your site, then we deploy it,
                host it, monitor it, and keep improving it — all under one roof. You get a
                single accountable partner instead of a stack of vendors and a pile of
                logins.
              </p>
              <p>
                We&apos;re remote-first, deliberately small, and senior-only. The people who
                scope your work are the people who build it — and the people who&apos;ll pick
                up the phone when it matters.
              </p>
            </Reveal>

            <Reveal className="grid grid-cols-2 gap-px self-start overflow-hidden rounded-xl border border-line bg-line">
              {stats.map((s) => (
                <div key={s.label} className="bg-surface/60 px-5 py-8 text-center">
                  <p className="font-display text-3xl font-semibold sm:text-4xl">
                    <Counter
                      className="text-gradient"
                      value={s.value}
                      decimals={s.decimals}
                      prefix={s.prefix}
                      suffix={s.suffix}
                    />
                  </p>
                  <p className="mt-1 text-xs text-muted">{s.label}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-canvas-soft/30">
        <Container>
          <SectionHeading
            kicker="What we believe"
            title={
              <>
                Principles we <span className="text-gradient">don&apos;t bend</span>
              </>
            }
          />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2">
            {values.map((v) => (
              <StaggerItem key={v.title} className="h-full">
                <div className="h-full rounded-xl border border-line bg-surface/50 p-7 transition-colors duration-300 hover:border-line-strong">
                  <h3 className="font-display text-lg font-semibold text-fg">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{v.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            kicker="The team"
            title={
              <>
                Senior people, <span className="text-gradient">start to finish</span>
              </>
            }
            subtitle="No account managers, no juniors learning on your budget — just the people doing the work."
          />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <StaggerItem key={member.name} className="h-full">
                <div className="flex h-full flex-col items-center gap-4 rounded-xl border border-line bg-surface/50 p-7 text-center transition-colors duration-300 hover:border-line-strong">
                  <span className="grid size-16 place-items-center rounded-full bg-linear-to-br from-brand/30 to-accent/20 font-display text-xl font-semibold text-fg">
                    {member.initials}
                  </span>
                  <div>
                    <p className="font-display font-semibold text-fg">{member.name}</p>
                    <p className="mt-1 text-sm text-muted">{member.role}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <CTA />
    </>
  );
}
