import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden">
      <AuroraBackground className="opacity-60" />
      <Container className="flex flex-col items-center gap-6 text-center">
        <p className="font-mono text-sm uppercase tracking-[0.22em] text-accent">
          404 — page not found
        </p>
        <h1 className="text-balance font-display text-4xl font-semibold tracking-tight sm:text-6xl">
          This page took a <span className="text-gradient">wrong deploy</span>
        </h1>
        <p className="max-w-md text-pretty text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get
          you back to something useful.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <ButtonLink href="/" size="lg">
            Back home
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary" size="lg">
            Book a call
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
