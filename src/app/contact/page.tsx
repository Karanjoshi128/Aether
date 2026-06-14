import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CTA } from "@/components/sections/cta";
import { FAQ } from "@/components/sections/faq";
import { planPrefill } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us what you're building. Book a free strategy call or request a proposal — a senior engineer replies within one business day.",
  alternates: { canonical: "/contact" },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string }>;
}) {
  const { plan } = await searchParams;
  const prefill = plan ? planPrefill[plan] : undefined;

  return (
    <>
      <PageHero
        kicker="Contact"
        title={
          <>
            Let&apos;s build something <span className="text-gradient">great</span>
          </>
        }
        subtitle="Tell us about your project below and we'll set up a free, no-pressure call. A senior engineer replies within one business day."
      />
      <CTA initialService={prefill?.service} initialBudget={prefill?.budget} />
      <FAQ />
    </>
  );
}
