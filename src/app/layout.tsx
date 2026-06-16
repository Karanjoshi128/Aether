import type { Metadata, Viewport } from "next";
import { Archivo, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { MobileCTA } from "@/components/sections/mobile-cta";
import { PandaCompanion } from "@/components/ui/panda-companion";
import { Providers } from "@/components/providers";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE_URL, organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { GoogleAnalytics } from "@next/third-parties/google";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});



const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Aether — We build, ship, and scale the web",
    template: "%s · Aether",
  },
  description:
    "Aether is a full-lifecycle web engineering studio. One accountable team for web development, maintenance, managed hosting, cloud deployment, and CI/CD. Book a free strategy call.",
  keywords: [
    "web development agency",
    "web design",
    "Next.js development",
    "website maintenance",
    "managed hosting",
    "cloud deployment",
    "CI/CD pipeline",
    "DevOps",
    "web performance",
    "technical SEO",
  ],
  authors: [{ name: "Aether" }],
  creator: "Aether",
  applicationName: "Aether",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Aether",
    title: "Aether — We build, ship, and scale the web",
    description:
      "One accountable team for web development, maintenance, hosting, cloud deployment, and CI/CD.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aether — We build, ship, and scale the web",
    description:
      "One accountable team for web development, maintenance, hosting, cloud deployment, and CI/CD.",
    creator: "@aetherstudio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
  verification: {
    google: "CHKIopqUo4s8mj70u34Hu3u_KKABU79B84EuQAQfr20",
  },
};

export const viewport: Viewport = {
  themeColor: "#07070b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-canvas text-fg selection:text-white">
        <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
        <div className="grain-overlay" aria-hidden />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Providers>
          <Navbar />
          <main id="main" className="flex flex-col">
            {children}
          </main>
          <Footer />
          <MobileCTA />
          <PandaCompanion />
        </Providers>
        {GA_ID ? <GoogleAnalytics gaId={GA_ID} /> : null}
      </body>
    </html>
  );
}
