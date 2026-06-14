import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal";
import { brand } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of the Aether website and our engagements.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <LegalPage
      kicker="Legal"
      title="Terms of Service"
      updated="June 2026"
      intro="The plain-language terms for using this website and working with us."
      sections={[
        {
          heading: "Using this website",
          body: [
            "This site is provided for general information about Aether's services. Content may change at any time, and nothing here is a binding offer until we agree a written scope together.",
          ],
        },
        {
          heading: "Engagements & payment",
          body: [
            "Project scope, deliverables, timelines, and pricing are agreed in a separate written proposal or statement of work before any work begins.",
            "Fixed-scope projects are quoted up front; ongoing Care Plans and retainers are billed monthly. Payment terms are set out in your proposal.",
          ],
        },
        {
          heading: "Ownership",
          body: [
            "On full payment, you own the source code and deliverables we produce for you. We retain the right to reuse general know-how, components, and techniques across our work.",
          ],
        },
        {
          heading: "Warranties & liability",
          body: [
            "We deliver work with professional care and skill. To the extent permitted by law, our liability for any engagement is limited to the fees paid for that engagement.",
          ],
        },
        {
          heading: "Contact",
          body: [`Questions about these terms? Email ${brand.email}.`],
        },
      ]}
    />
  );
}
