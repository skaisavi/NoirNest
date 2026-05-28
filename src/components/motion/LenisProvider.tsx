"use client";

import Lenis from "lenis";
import { useReducedMotion } from "framer-motion";
import { useEffect } from "react";

type LenisProviderProps = {
  children: React.ReactNode;
};

export function LenisProvider({ children }: LenisProviderProps) {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const lenis = new Lenis({
      duration: isCoarsePointer ? 0.85 : 1.05,
      smoothWheel: !isCoarsePointer,
      wheelMultiplier: 0.92,
      touchMultiplier: 1,
      anchors: {
        offset: 86,
      },
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [prefersReducedMotion]);

  return <>{children}</>;
}
