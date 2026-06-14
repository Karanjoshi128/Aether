import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { services } from "@/lib/data";

const socialLinks = [
  { label: "Twitter", href: "https://x.com/aetherstudio" },
  { label: "GitHub", href: "https://github.com/aetherstudio" },
  { label: "LinkedIn", href: "https://linkedin.com/company/aetherstudio" },
];

const companyLinks = [
  { label: "Work", href: "/work" },
  { label: "Studio", href: "/about" },
  { label: "Process", href: "/#process" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-dim">{title}</h3>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const external = href.startsWith("http");
  return (
    <li>
      {external ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted transition-colors hover:text-fg"
        >
          {children}
        </a>
      ) : (
        <Link href={href} className="text-sm text-muted transition-colors hover:text-fg">
          {children}
        </Link>
      )}
    </li>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <Container className="py-14 sm:py-20">
        <h2 className="sr-only">Site footer</h2>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 font-mono text-xs leading-relaxed text-dim">
              © {year} Aether Studio. All rights reserved. Engineered for the
              avant-garde.
            </p>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              {socialLinks.map((l) => (
                <FooterLink key={l.label} href={l.href}>
                  {l.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          <FooterColumn title="Expertise">
            {services.map((s) => (
              <FooterLink key={s.slug} href={`/services/${s.slug}`}>
                {s.title}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Company">
            {companyLinks.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Legal">
            {legalLinks.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
          </FooterColumn>
        </div>
      </Container>
    </footer>
  );
}
