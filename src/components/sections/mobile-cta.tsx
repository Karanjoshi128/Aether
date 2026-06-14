"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";

export function MobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const nearBottom =
        y + window.innerHeight > document.body.scrollHeight - 320;
      setShow(y > 640 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="fixed inset-x-3 bottom-3 z-50 md:hidden"
        >
          <div className="glass flex items-center justify-between gap-3 rounded-2xl border border-line p-2 pl-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9)]">
            <div className="min-w-0">
              <p className="text-sm font-medium text-fg">Ready to ship?</p>
              <p className="truncate text-xs text-muted">Free call · 1-day reply</p>
            </div>
            <ButtonLink href="/contact" variant="primary" size="md" className="shrink-0">
              Book a call
              <ArrowRight className="size-4" />
            </ButtonLink>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
