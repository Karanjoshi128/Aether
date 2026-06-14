import { cn } from "@/lib/cn";

/**
 * Subtle ambient glow — a single faint violet radial. Decorative only.
 * The page's film grain (layout) carries most of the texture.
 */
export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
    >
      <div className="absolute left-1/2 -top-32 h-112 w-184 -translate-x-1/2 rounded-full bg-brand/10 blur-[150px]" />
    </div>
  );
}
