"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export function MagneticButton({ children, className }: MagneticButtonProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 180, damping: 18, mass: 0.25 });
  const y = useSpring(useMotionValue(0), { stiffness: 180, damping: 18, mass: 0.25 });

  return (
    <motion.span
      ref={ref}
      style={reducedMotion ? undefined : { x, y }}
      className={cn("inline-flex", className)}
      onPointerMove={(event) => {
        if (reducedMotion || event.pointerType !== "mouse") {
          return;
        }

        const bounds = ref.current?.getBoundingClientRect();
        if (!bounds) {
          return;
        }

        x.set((event.clientX - (bounds.left + bounds.width / 2)) * 0.12);
        y.set((event.clientY - (bounds.top + bounds.height / 2)) * 0.12);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.span>
  );
}
