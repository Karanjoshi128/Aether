"use client";

import { motion, type Variants } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/cn";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
}

/**
 * Single element that fades/slides in once it scrolls into view.
 * Reduced motion is handled globally by <MotionConfig reducedMotion="user">
 * (see components/providers.tsx), so both server and client render the same
 * element — no hydration mismatch.
 */
export function Reveal({ children, className, variants = fadeUp, delay = 0 }: RevealProps) {
  const show = variants.show as { transition?: Record<string, unknown> };
  const withDelay: Variants = delay
    ? {
        hidden: variants.hidden,
        show: {
          ...(variants.show as Record<string, unknown>),
          transition: { ...(show.transition ?? {}), delay },
        },
      }
    : variants;

  return (
    <motion.div
      className={className}
      variants={withDelay}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
}

/** Container that staggers the reveal of its <StaggerItem> children. */
export function Stagger({ children, className, stagger = 0.09, delayChildren = 0 }: StaggerProps) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer(stagger, delayChildren)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  variants = fadeUp,
}: {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
}) {
  return (
    <motion.div className={cn(className)} variants={variants}>
      {children}
    </motion.div>
  );
}
