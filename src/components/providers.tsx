"use client";

import { MotionConfig } from "framer-motion";

/**
 * Global motion provider. `reducedMotion="user"` makes every framer-motion
 * component automatically respect the OS "reduce motion" setting (disabling
 * transform/layout animation, keeping opacity) without per-component branching
 * during render — which avoids SSR/client hydration mismatches.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
