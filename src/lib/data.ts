import {
  type LucideIcon,
  CodeXml,
  ShieldCheck,
  Server,
  Cloud,
  GitBranch,
  Gauge,
  Search,
  PencilRuler,
  Rocket,
  Activity,
  Users,
  RefreshCw,
  LineChart,
  Eye,
} from "lucide-react";

/* ------------------------------------------------------------------ brand */
export const brand = {
  name: "Aether",
  descriptor: "Web Engineering Studio",
  tagline: "We build, ship, and scale the web.",
  email: "hello@aether.studio",
  location: "Remote-first · Worldwide",
  responseTime: "Replies within 1 business day",
};

/* ------------------------------------------------------------------- nav */
export const navLinks = [
  { label: "Expertise", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/#process" },
  { label: "Studio", href: "/about" },
];

/* --------------------------------------------------------------- services */
export interface Service {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    tagline: "Sites & apps that look sharp and load instantly.",
    description:
      "Custom websites and web apps built on Next.js and React — fast, accessible, and easy for your team to run.",
    icon: CodeXml,
    features: [
      "Next.js & React builds",
      "Headless CMS (Sanity, Contentful)",
      "E-commerce & checkout",
      "Design systems & UI libraries",
      "WCAG accessibility built in",
    ],
  },
  {
    slug: "maintenance-support",
    title: "Maintenance & Support",
    tagline: "Proactive care so nothing goes stale or down.",
    description:
      "We watch, patch, and improve your site every month under a clear SLA — no more scrambling when something breaks.",
    icon: ShieldCheck,
    features: [
      "24/7 uptime monitoring",
      "Security patches & updates",
      "Bug fixes & content edits",
      "Monthly health reports",
      "SLA-backed response times",
    ],
  },
  {
    slug: "managed-hosting",
    title: "Managed Hosting",
    tagline: "Fast, secure, auto-scaling hosting on the edge.",
    description:
      "Hands-off hosting tuned for speed and reliability, with backups, SSL, and staging environments handled for you.",
    icon: Server,
    features: [
      "Global edge CDN",
      "Automated backups & rollbacks",
      "Free SSL & DDoS protection",
      "99.99% uptime SLA",
      "Staging + production parity",
    ],
  },
  {
    slug: "cloud-deployment",
    title: "Cloud Deployment",
    tagline: "Production-grade infra on AWS, GCP, or Vercel.",
    description:
      "We design and provision cloud infrastructure as code — scalable, observable, and cost-optimized from day one.",
    icon: Cloud,
    features: [
      "Infrastructure as code (Terraform)",
      "Autoscaling & load balancing",
      "Cost monitoring & optimization",
      "Multi-region failover",
      "Secrets & access management",
    ],
  },
  {
    slug: "ci-cd-devops",
    title: "CI/CD & DevOps",
    tagline: "Ship multiple times a day with zero drama.",
    description:
      "Automated pipelines that build, test, and deploy with zero downtime — plus preview environments for every change.",
    icon: GitBranch,
    features: [
      "Automated build & test pipelines",
      "Zero-downtime deploys",
      "Preview environment per PR",
      "Observability & alerting",
      "One-click rollbacks",
    ],
  },
  {
    slug: "performance-seo",
    title: "Performance & SEO",
    tagline: "Green Core Web Vitals and search that converts.",
    description:
      "We make your site fast and findable — tuning Core Web Vitals, technical SEO, and the analytics behind growth.",
    icon: Gauge,
    features: [
      "Core Web Vitals tuning",
      "Lighthouse ~100 scores",
      "Technical & on-page SEO",
      "Analytics & conversion tracking",
      "Image & asset optimization",
    ],
  },
];

/* ------------------------------------------------------------------ stats */
export interface Stat {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 250, suffix: "+", label: "Projects shipped" },
  { value: 99.99, decimals: 2, suffix: "%", label: "Uptime delivered" },
  { value: 0.8, decimals: 1, suffix: "s", label: "Median load time" },
  { value: 4.9, decimals: 1, suffix: "/5", label: "Client rating" },
];

/* ---------------------------------------------------------------- process */
export interface ProcessStep {
  step: string;
  title: string;
  duration: string;
  description: string;
  icon: LucideIcon;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    duration: "Week 1",
    description:
      "We map your goals, users, and constraints, then agree on a fixed scope, timeline, and success metrics — no surprises.",
    icon: Search,
  },
  {
    step: "02",
    title: "Design & Build",
    duration: "Weeks 2–6",
    description:
      "Senior designers and engineers ship in weekly increments. You see real, working software every Friday — not mockups.",
    icon: PencilRuler,
  },
  {
    step: "03",
    title: "Deploy",
    duration: "Launch week",
    description:
      "We provision cloud infra, wire up CI/CD, and push to production with zero downtime and a full rollback safety net.",
    icon: Rocket,
  },
  {
    step: "04",
    title: "Scale & Support",
    duration: "Ongoing",
    description:
      "We monitor, maintain, and optimize — keeping your site fast, secure, and improving long after launch day.",
    icon: Activity,
  },
];

/* ----------------------------------------------------------------- why us */
export interface Differentiator {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const differentiators: Differentiator[] = [
  {
    title: "Senior-only team",
    description:
      "No juniors learning on your budget. Every line is written by engineers who've shipped at scale.",
    icon: Users,
  },
  {
    title: "We build it and run it",
    description:
      "Most shops hand off a repo and vanish. We own hosting, CI/CD, and uptime — so it stays fast and online.",
    icon: RefreshCw,
  },
  {
    title: "Performance obsessed",
    description:
      "Green Core Web Vitals and Lighthouse ~100 aren't extras — they're the baseline we ship on every project.",
    icon: LineChart,
  },
  {
    title: "Transparent & fast",
    description:
      "Fixed scopes, weekly ships, and shared dashboards. You always know what's happening and what it costs.",
    icon: Eye,
  },
];

/* ------------------------------------------------------------ case studies */
export interface Metric {
  label: string;
  value: string;
}
export interface CaseStudy {
  slug: string;
  client: string;
  category: string;
  title: string;
  summary: string;
  metrics: Metric[];
  tags: string[];
  accent: string; // tailwind gradient classes for the card visual
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "finlope",
    client: "Finlope",
    category: "Fintech · Web App",
    title: "A fintech dashboard that loads before you blink",
    summary:
      "We rebuilt Finlope's analytics dashboard on Next.js and moved it to autoscaling cloud infra — cutting load time by 71% and lifting activation.",
    metrics: [
      { label: "Load time", value: "-71%" },
      { label: "Activation", value: "+38%" },
      { label: "Uptime", value: "99.99%" },
    ],
    tags: ["Next.js", "AWS", "CI/CD"],
    accent: "from-brand/30 to-accent/20",
  },
  {
    slug: "marrow-oak",
    client: "Marrow & Oak",
    category: "DTC · E-commerce",
    title: "Headless replatform that doubled revenue",
    summary:
      "A move to a headless, edge-rendered storefront took mobile load under a second and turned browsers into buyers.",
    metrics: [
      { label: "Mobile conversion", value: "+52%" },
      { label: "Revenue", value: "2.4×" },
      { label: "LCP", value: "0.7s" },
    ],
    tags: ["Headless commerce", "Edge", "Performance"],
    accent: "from-accent/30 to-mint/20",
  },
  {
    slug: "northwind-health",
    client: "Northwind Health",
    category: "Healthcare · Platform",
    title: "HIPAA-ready cloud with zero downtime",
    summary:
      "We designed compliant cloud infrastructure and a CI/CD pipeline that shipped 600+ deploys without a single minute of downtime.",
    metrics: [
      { label: "Downtime", value: "0 min" },
      { label: "Deploys", value: "600+" },
      { label: "Lighthouse", value: "98" },
    ],
    tags: ["GCP", "Terraform", "DevOps"],
    accent: "from-magenta/25 to-brand/25",
  },
  {
    slug: "vellum",
    client: "Vellum",
    category: "SaaS · Marketing site",
    title: "A marketing site engineered for growth",
    summary:
      "A rebuilt, SEO-first marketing site with programmatic landing pages more than doubled Vellum's organic traffic in six months.",
    metrics: [
      { label: "Organic traffic", value: "+120%" },
      { label: "Lighthouse", value: "100" },
      { label: "Time to launch", value: "5 wks" },
    ],
    tags: ["Next.js", "Technical SEO", "Hosting"],
    accent: "from-brand/25 to-accent/25",
  },
];

/* --------------------------------------------------------------- clients */
export const clientLogos = [
  "Finlope",
  "Northwind",
  "Vellum",
  "Lumina",
  "Cobalt",
  "Hearth",
  "Quanta",
  "Skylark",
  "Marrow & Oak",
  "Ferro Labs",
];

/* ----------------------------------------------------------- testimonials */
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Aether shipped in five weeks what our last agency couldn't in five months. And they still run our infra — I haven't thought about uptime since.",
    name: "Priya Nadar",
    role: "Co-founder & CEO",
    company: "Finlope",
  },
  {
    quote:
      "The site is fast, our conversion is up, and deploys just happen. It feels like we hired a senior platform team without the headcount.",
    name: "Marcus Reyes",
    role: "CTO",
    company: "Marrow & Oak",
  },
  {
    quote:
      "They treated our compliance and uptime like their own reputation depended on it. Zero downtime in over a year says everything.",
    name: "Dr. Lena Fischer",
    role: "VP Engineering",
    company: "Northwind Health",
  },
  {
    quote:
      "Weekly demos, a shared dashboard, fixed scope. For the first time I actually trusted a dev partner's timeline.",
    name: "Tom Albright",
    role: "Head of Growth",
    company: "Vellum",
  },
  {
    quote:
      "Our Core Web Vitals went from red to green and organic traffic followed. Aether sweats the details most agencies skip.",
    name: "Sofia Marin",
    role: "Marketing Director",
    company: "Lumina",
  },
];

/* -------------------------------------------------------------- pricing */
export interface Plan {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export const plans: Plan[] = [
  {
    name: "Launch",
    price: "From $8k",
    cadence: "fixed project",
    description: "A fixed-scope build, from first call to live in production.",
    features: [
      "Discovery & UX strategy",
      "Custom design & development",
      "Performance & SEO setup",
      "Cloud deploy + CI/CD",
      "30 days post-launch support",
    ],
    cta: "Start a project",
  },
  {
    name: "Care Plan",
    price: "From $1.5k",
    cadence: "per month",
    description: "We build it, host it, and keep it improving every month.",
    features: [
      "Everything in Launch",
      "Managed hosting + monitoring",
      "Ongoing maintenance & updates",
      "Monthly improvements",
      "Priority SLA support",
      "Shared roadmap dashboard",
    ],
    cta: "Get a Care Plan",
    highlighted: true,
  },
  {
    name: "Embedded",
    price: "Custom",
    cadence: "dedicated squad",
    description: "A senior engineering squad that works as your web team.",
    features: [
      "Dedicated engineers + PM",
      "Cloud + CI/CD ownership",
      "Weekly sprints & demos",
      "Slack + shared dashboards",
      "Quarterly strategy reviews",
    ],
    cta: "Talk to us",
  },
];

/* ------------------------------------------------------------------ faqs */
export const faqs = [
  {
    q: "How fast can you start?",
    a: "Most engagements kick off within 1–2 weeks. Urgent maintenance or hosting migrations can often start within days — tell us your timeline and we'll be straight with you about it.",
  },
  {
    q: "Can you work with our existing code and team?",
    a: "Absolutely. We frequently improve, maintain, and deploy existing codebases, and we're happy to embed alongside your in-house developers rather than replace them.",
  },
  {
    q: "What exactly does a Care Plan include?",
    a: "Managed hosting, uptime monitoring, security patching, dependency updates, bug fixes, content edits, monthly improvements, and SLA-backed support — all tracked on a dashboard you can see.",
  },
  {
    q: "Which tech stack do you use?",
    a: "We default to Next.js, React, and TypeScript on the front end, with Node, Postgres, and headless CMS options behind it. For infra we work across Vercel, AWS, and GCP with Terraform and GitHub Actions.",
  },
  {
    q: "Can you deploy to our own cloud account?",
    a: "Yes. We can build and deploy into your AWS, GCP, or Azure account with infrastructure as code, so you fully own the environment and we manage it for you.",
  },
  {
    q: "How do you price projects?",
    a: "Fixed-scope projects are quoted up front after a short discovery call. Ongoing work runs on a monthly Care Plan or a dedicated retainer. No hourly surprises.",
  },
  {
    q: "What if we only need maintenance, not a rebuild?",
    a: "That's a common starting point. We'll audit your current site, stabilize it, and take over hosting and maintenance — no rebuild required unless it's genuinely the better call.",
  },
  {
    q: "What happens after I submit the form?",
    a: "A senior engineer — not a sales rep — replies within one business day with concrete next steps, usually a short, no-pressure call to scope exactly what you need.",
  },
  {
    q: "Is there any risk or commitment to reach out?",
    a: "None. The first call is free, scope and price are agreed up front before any work starts, and there's no obligation to proceed.",
  },
];

/* ----------------------------------------------------------- tech stack */
export const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Vercel",
  "AWS",
  "Google Cloud",
  "Docker",
  "Terraform",
  "GitHub Actions",
  "Sanity",
  "Stripe",
];

/* ---------------------------------------------------------------- values */
export const values = [
  {
    title: "Own the outcome",
    description:
      "We measure ourselves on your results — load times, uptime, conversions — not hours billed.",
  },
  {
    title: "Senior by default",
    description:
      "Small team, high bar. The people who scope your work are the people who build it.",
  },
  {
    title: "Build to last",
    description:
      "Clean, documented, tested code and infrastructure you could hand to any team tomorrow.",
  },
  {
    title: "Radically transparent",
    description:
      "Shared dashboards, honest timelines, and fixed scopes. No black boxes, no surprise invoices.",
  },
];

export const team = [
  { name: "Alex Rivera", role: "Founder & Principal Engineer", initials: "AR" },
  { name: "Mei Tan", role: "Lead Designer", initials: "MT" },
  { name: "Daniel Okoye", role: "DevOps & Cloud Lead", initials: "DO" },
  { name: "Sara Lindqvist", role: "Frontend Engineer", initials: "SL" },
];

/* --------------------------------------------------------- form options */
export const serviceOptions = [
  "Web Development",
  "Maintenance & Support",
  "Managed Hosting",
  "Cloud Deployment",
  "CI/CD & DevOps",
  "Performance & SEO",
  "Not sure yet",
];

export const budgetOptions = [
  "Under $5k",
  "$5k – $15k",
  "$15k – $50k",
  "$50k+",
  "Monthly retainer",
  "Not sure yet",
];

// Prefill the lead form when a visitor arrives from a specific pricing plan.
export const planPrefill: Record<string, { service: string; budget: string }> = {
  Launch: { service: "Web Development", budget: "$15k – $50k" },
  "Care Plan": { service: "Maintenance & Support", budget: "Monthly retainer" },
  Embedded: { service: "Not sure yet", budget: "$50k+" },
};

/* ----------------------------------------------- service detail pages */
export interface ServiceDetail {
  overview: string;
  outcomes: string[];
}

export const serviceDetails: Record<string, ServiceDetail> = {
  "web-development": {
    overview:
      "We design and build fast, accessible websites and web applications on Next.js, React, and TypeScript. From marketing sites and headless-CMS platforms to full web apps and e-commerce, we ship production-grade code with a design system your team can actually extend.",
    outcomes: [
      "Green Core Web Vitals and Lighthouse scores near 100",
      "A documented, type-safe codebase your developers can own",
      "Interfaces designed to convert visitors, not just look good",
    ],
  },
  "maintenance-support": {
    overview:
      "Software rots when no one is watching it. Our maintenance plans keep your site secure, current, and fast — monitoring, dependency and security updates, bug fixes, and content changes handled under a clear SLA so nothing slips through the cracks.",
    outcomes: [
      "No more scrambling when something breaks at 2am",
      "Security patches and dependency updates applied proactively",
      "A monthly report showing exactly what changed and why",
    ],
  },
  "managed-hosting": {
    overview:
      "We host your site on fast, secure, auto-scaling infrastructure at the edge — with SSL, automated backups, DDoS protection, and staging environments handled for you. You get a 99.99% uptime SLA and one team accountable for keeping it online.",
    outcomes: [
      "Sub-second global load times via an edge CDN",
      "Automated backups and one-click rollbacks",
      "99.99% uptime, monitored around the clock",
    ],
  },
  "cloud-deployment": {
    overview:
      "We design and provision production-grade cloud infrastructure on AWS, GCP, or Vercel — defined as code so it's reproducible, observable, and cost-optimized. Autoscaling, multi-region failover, and secrets management come standard, in your account or ours.",
    outcomes: [
      "Infrastructure as code that you fully own",
      "Autoscaling that handles spikes without manual work",
      "Cloud spend monitored and tuned, not left to drift",
    ],
  },
  "ci-cd-devops": {
    overview:
      "We wire up automated pipelines that build, test, and deploy your code with zero downtime — plus a preview environment for every pull request. Ship multiple times a day with confidence, full observability, and one-click rollbacks when you need them.",
    outcomes: [
      "Deploys that are boring, frequent, and reversible",
      "A preview URL for every change before it ships",
      "Alerting and observability so you hear about issues first",
    ],
  },
  "performance-seo": {
    overview:
      "We make your site fast and findable — tuning Core Web Vitals, fixing technical SEO, adding structured data, and wiring the analytics that prove growth. Speed and search visibility aren't add-ons here; they're how we build everything.",
    outcomes: [
      "Core Web Vitals in the green on real-world field data",
      "Technical SEO and structured data done right",
      "Analytics and conversion tracking you can actually read",
    ],
  },
};

/* -------------------------------------------- case study detail pages */
export interface CaseStudyDetail {
  challenge: string;
  approach: string;
  result: string;
  services: string[]; // service slugs applied
}

export const caseStudyDetails: Record<string, CaseStudyDetail> = {
  finlope: {
    challenge:
      "Finlope's analytics dashboard had grown into a slow, monolithic single-page app. Time-to-interactive crept past five seconds, activation was stalling, and every deploy was a manual, white-knuckle event.",
    approach:
      "We rebuilt the dashboard on Next.js with server components and streaming, moved it onto autoscaling AWS infrastructure defined in Terraform, and set up a CI/CD pipeline with preview environments and zero-downtime deploys.",
    result:
      "Median load time dropped 71%, new-user activation rose 38%, and the team now ships several times a day on infrastructure that holds 99.99% uptime — without anyone watching the pager.",
    services: ["web-development", "cloud-deployment", "ci-cd-devops"],
  },
  "marrow-oak": {
    challenge:
      "Marrow & Oak's storefront ran on a rigid, slow platform. Mobile shoppers — the majority of their traffic — bounced before pages finished loading, and the team couldn't ship changes without a developer.",
    approach:
      "We replatformed to a headless, edge-rendered storefront, rebuilt the product and checkout experience for mobile-first speed, and gave the team a CMS to run merchandising themselves.",
    result:
      "Mobile conversion jumped 52%, revenue grew 2.4×, and largest-contentful-paint fell to 0.7s — turning browsers into buyers.",
    services: ["web-development", "performance-seo", "managed-hosting"],
  },
  "northwind-health": {
    challenge:
      "Northwind Health needed a HIPAA-ready platform with rock-solid uptime, but their existing setup had no real deployment process and no infrastructure guarantees — a non-starter in a regulated industry.",
    approach:
      "We designed compliant cloud infrastructure as code on GCP, implemented a CI/CD pipeline with automated checks and audit trails, and wrapped monitoring and alerting around everything that mattered.",
    result:
      "Over 600 deploys shipped with zero minutes of downtime in 14 months, a Lighthouse score of 98, and an infrastructure footprint that passes compliance review.",
    services: ["cloud-deployment", "ci-cd-devops", "maintenance-support"],
  },
  vellum: {
    challenge:
      "Vellum's marketing site was invisible in search and slow to update. Organic traffic had flatlined, and every new landing page required engineering time the team didn't have.",
    approach:
      "We rebuilt the site as an SEO-first Next.js project with programmatic landing pages, fixed the technical SEO and Core Web Vitals, and connected it to a CMS so marketing could publish on their own.",
    result:
      "Organic traffic more than doubled (+120%) in six months, the site scores a perfect 100 on Lighthouse, and it went from brief to launch in five weeks.",
    services: ["web-development", "performance-seo", "managed-hosting"],
  },
};
