"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/cn";

/**
 * Card with a pointer-tracking spotlight and border glow on hover.
 */
export function GlowCard({
  children,
  className,
  spotlight = "rgba(124,92,255,0.16)",
}: {
  children: React.ReactNode;
  className?: string;
  spotlight?: string;
}) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const background = useMotionTemplate`radial-gradient(440px circle at ${mx}px ${my}px, ${spotlight}, transparent 60%)`;

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  }

  return (
    <div
      onMouseMove={handleMove}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-line bg-surface/50 transition-colors duration-300 hover:border-line-strong",
        className
      )}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}
