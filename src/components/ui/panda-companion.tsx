"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";

/**
 * A cute panda companion that hangs from a twig on the right edge: gentle sway,
 * cursor-following eyes, occasional blink, hover wiggle, and a dismiss button.
 * Desktop-only, decorative (aria-hidden), and never blocks page clicks.
 */
export function PandaCompanion() {
  const [hidden, setHidden] = useState(false);
  const [pupil, setPupil] = useState({ x: 0, y: 0 });
  const [blink, setBlink] = useState(false);
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  // Eyes follow the cursor.
  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height * 0.34;
      const ang = Math.atan2(e.clientY - cy, e.clientX - cx);
      const reach = Math.min(3, 1 + Math.hypot(e.clientX - cx, e.clientY - cy) / 240);
      setPupil({ x: Math.cos(ang) * reach, y: Math.sin(ang) * reach });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduce]);

  // Occasional blink.
  useEffect(() => {
    if (reduce) return;
    let open: ReturnType<typeof setTimeout>;
    let shut: ReturnType<typeof setTimeout>;
    const schedule = () => {
      open = setTimeout(() => {
        setBlink(true);
        shut = setTimeout(() => {
          setBlink(false);
          schedule();
        }, 150);
      }, 2600 + Math.random() * 3500);
    };
    schedule();
    return () => {
      clearTimeout(open);
      clearTimeout(shut);
    };
  }, [reduce]);

  if (hidden) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed right-1 top-[15%] z-40 hidden lg:block"
    >
      <div ref={ref} className="group pointer-events-auto relative">
        {/* soft grounding glow */}
        <div className="pointer-events-none absolute inset-0 -z-10 translate-y-8 scale-90 rounded-full bg-brand/10 blur-2xl" />

        {/* dismiss */}
        <button
          type="button"
          tabIndex={-1}
          onClick={() => setHidden(true)}
          aria-label="Hide the panda"
          className="absolute -left-1 top-10 z-10 grid size-5 place-items-center rounded-full border border-line bg-surface text-dim opacity-0 transition-opacity hover:text-fg group-hover:opacity-100"
        >
          <X className="size-3" />
        </button>

        {/* speech bubble */}
        <div className="absolute right-full top-12 mr-1 hidden whitespace-nowrap rounded-lg border border-line bg-surface px-2.5 py-1 font-mono text-[10px] text-muted opacity-0 transition-opacity duration-300 group-hover:opacity-100 xl:block">
          hi there 👋
        </div>

        <div className="origin-top animate-sway motion-reduce:animate-none">
          <motion.div
            whileHover={{ scale: 1.06 }}
            whileTap={{ rotate: [0, -9, 7, -4, 0] }}
            transition={{ duration: 0.5 }}
          >
            <svg viewBox="0 0 120 230" className="w-20" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* twig + leaves */}
              <rect x="6" y="12" width="108" height="7" rx="3.5" fill="#4a4a55" />
              <ellipse cx="104" cy="9" rx="6" ry="3" transform="rotate(-25 104 9)" fill="#7c5cff" opacity="0.85" />
              <ellipse cx="95" cy="13" rx="4.5" ry="2.3" transform="rotate(-12 95 13)" fill="#7c5cff" opacity="0.55" />

              {/* arms gripping the twig */}
              <path d="M44 18 C 40 44 40 84 46 110" stroke="#2b2b34" strokeWidth="12" strokeLinecap="round" />
              <path d="M76 18 C 80 44 80 84 74 110" stroke="#2b2b34" strokeWidth="12" strokeLinecap="round" />
              <circle cx="44" cy="17" r="7" fill="#2b2b34" />
              <circle cx="76" cy="17" r="7" fill="#2b2b34" />

              {/* dangling legs + paw beans */}
              <path d="M50 176 C 48 196 48 206 50 216" stroke="#2b2b34" strokeWidth="13" strokeLinecap="round" />
              <path d="M70 176 C 72 196 72 206 70 216" stroke="#2b2b34" strokeWidth="13" strokeLinecap="round" />
              <circle cx="50" cy="217" r="7.5" fill="#2b2b34" />
              <circle cx="70" cy="217" r="7.5" fill="#2b2b34" />
              <circle cx="50" cy="217" r="2.8" fill="#7c5cff" opacity="0.5" />
              <circle cx="70" cy="217" r="2.8" fill="#7c5cff" opacity="0.5" />

              {/* belly */}
              <ellipse cx="60" cy="152" rx="30" ry="36" fill="#ededeb" />

              {/* head */}
              <circle cx="60" cy="80" r="42" fill="#ededeb" />

              {/* ears */}
              <circle cx="30" cy="48" r="15" fill="#2b2b34" />
              <circle cx="90" cy="48" r="15" fill="#2b2b34" />
              <circle cx="30" cy="50" r="6.5" fill="#1c1c22" />
              <circle cx="90" cy="50" r="6.5" fill="#1c1c22" />

              {/* eye patches */}
              <ellipse cx="47" cy="78" rx="10" ry="13" transform="rotate(-16 47 78)" fill="#2b2b34" />
              <ellipse cx="73" cy="78" rx="10" ry="13" transform="rotate(16 73 78)" fill="#2b2b34" />

              {/* eyes (blink) */}
              <g
                style={{
                  transform: blink ? "scaleY(0.12)" : "scaleY(1)",
                  transformBox: "fill-box",
                  transformOrigin: "center",
                  transition: "transform 90ms ease",
                }}
              >
                <circle cx="47" cy="80" r="5.5" fill="#ededeb" />
                <circle cx="73" cy="80" r="5.5" fill="#ededeb" />
                <g transform={`translate(${pupil.x} ${pupil.y})`}>
                  <circle cx="47" cy="80" r="2.8" fill="#141419" />
                  <circle cx="73" cy="80" r="2.8" fill="#141419" />
                  <circle cx="48.2" cy="78.8" r="0.9" fill="#ededeb" />
                  <circle cx="74.2" cy="78.8" r="0.9" fill="#ededeb" />
                </g>
              </g>

              {/* nose + mouth */}
              <ellipse cx="60" cy="93" rx="4.5" ry="3" fill="#2b2b34" />
              <path d="M60 96 L60 99" stroke="#2b2b34" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M54 100 Q60 106 66 100" stroke="#2b2b34" strokeWidth="1.8" strokeLinecap="round" />

              {/* cheeks */}
              <circle cx="40" cy="95" r="5" fill="#7c5cff" opacity="0.5" />
              <circle cx="80" cy="95" r="5" fill="#7c5cff" opacity="0.5" />
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
