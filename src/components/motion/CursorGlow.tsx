"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CursorGlow() {
  const reducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const x = useSpring(useMotionValue(-200), { stiffness: 80, damping: 30, mass: 0.4 });
  const y = useSpring(useMotionValue(-200), { stiffness: 80, damping: 30, mass: 0.4 });

  useEffect(() => {
    if (reducedMotion || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    setEnabled(true);
    const move = (event: PointerEvent) => {
      x.set(event.clientX - 140);
      y.set(event.clientY - 140);
    };

    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [reducedMotion, x, y]);

  if (!enabled) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-[1] h-72 w-72 rounded-full bg-gold/[0.055] blur-[70px]"
      style={{ x, y }}
    />
  );
}
