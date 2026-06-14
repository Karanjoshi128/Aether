import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal";
import { brand } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Aether collects, uses, and protects the information you share with us.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      kicker="Legal"
      title="Privacy Policy"
      updated="June 2026"
      intro="We keep this simple: we only collect what we need to reply to you and do great work, and we never sell your data."
      sections={[
        {
          heading: "What we collect",
          body: [
            "When you submit our contact form, we collect the details you provide: your name, work email, company, the service you're interested in, an optional budget range, and your message.",
            "We also collect standard, anonymized analytics about how the site is used (such as page views) to improve it.",
          ],
        },
        {
          heading: "How we use it",
          body: [
            "We use your contact details solely to respond to your enquiry, scope potential work, and stay in touch about the project you asked about.",
            "We do not sell, rent, or share your personal information with third parties for marketing.",
          ],
        },
        {
          heading: "Data retention",
          body: [
            "We keep enquiry details only as long as needed to follow up and maintain our business records, then delete them on request.",
          ],
        },
        {
          heading: "Your rights",
          body: [
            "You can ask us to access, correct, or delete your personal information at any time. Just email us and we'll take care of it.",
          ],
        },
        {
          heading: "Contact",
          body: [`Questions about privacy? Email ${brand.email} and we'll respond promptly.`],
        },
      ]}
    />
  );
}
