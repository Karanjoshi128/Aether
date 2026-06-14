import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/ui/reveal";

export interface LegalSection {
  heading: string;
  body: string[];
}

export function LegalPage({
  kicker,
  title,
  updated,
  intro,
  sections,
}: {
  kicker: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero kicker={kicker} title={title} subtitle={intro} />
      <Section className="pt-4">
        <Container className="max-w-3xl">
          <Reveal className="space-y-10">
            <p className="rounded-2xl border border-line bg-surface/40 px-5 py-4 text-sm text-muted">
              <span className="font-medium text-fg">Note:</span> This is placeholder
              copy for a demo site. Replace it with your own reviewed legal text before
              going live. Last updated {updated}.
            </p>
            {sections.map((s) => (
              <section key={s.heading}>
                <h2 className="font-display text-xl font-semibold text-fg">{s.heading}</h2>
                <div className="mt-3 space-y-3 leading-relaxed text-muted">
                  {s.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
