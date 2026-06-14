import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/cn";
import type { CaseStudy } from "@/lib/data";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      aria-label={`${study.client} case study — ${study.title}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface/50 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_24px_70px_-30px_rgba(124,92,255,0.5)]">
      <div className={cn("relative h-40 bg-linear-to-br", study.accent)}>
        <div className="bg-dots absolute inset-0 opacity-50" />
        <div className="absolute inset-0 flex flex-col justify-between p-6">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-fg/80">
            {study.category}
          </span>
          <span className="font-display text-3xl font-semibold tracking-tight text-fg">
            {study.client}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-6">
        <div>
          <h3 className="text-balance font-display text-lg font-semibold text-fg">
            {study.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{study.summary}</p>
        </div>

        <div className="grid grid-cols-3 gap-2 border-t border-line pt-4">
          {study.metrics.map((m) => (
            <div key={m.label}>
              <p className="font-display text-lg font-semibold text-gradient">{m.value}</p>
              <p className="text-[11px] leading-tight text-dim">{m.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-1">
          {study.tags.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}
