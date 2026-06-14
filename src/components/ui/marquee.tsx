import { cn } from "@/lib/cn";

/**
 * Seamless infinite marquee. The track holds two identical copies and slides
 * -50% (exactly one copy width), so the loop is invisible. Pauses on hover.
 * Pure CSS animation.
 */
export function Marquee({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("group flex w-full overflow-hidden", className)}>
      <div className="flex w-max shrink-0 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        <div className="flex shrink-0 items-center gap-14 pr-14">{children}</div>
        <div className="flex shrink-0 items-center gap-14 pr-14" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
