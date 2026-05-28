"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("noirnest-intro-shown");
    if (alreadyShown) {
      return;
    }

    setVisible(true);
    sessionStorage.setItem("noirnest-intro-shown", "true");

    const leaveTimer = window.setTimeout(() => setLeaving(true), reducedMotion ? 250 : 900);
    const hideTimer = window.setTimeout(() => setVisible(false), reducedMotion ? 420 : 1250);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
    };
  }, [reducedMotion]);

  if (!visible) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] grid place-items-center bg-obsidian transition duration-500 ${
        leaving ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center">
        <motion.p
          className="font-serif text-5xl font-bold tracking-[0.08em] text-ivory"
          initial={reducedMotion ? false : { opacity: 0, y: 12, filter: "blur(6px)" }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          NoirNest
        </motion.p>
        <motion.span
          className="mx-auto mt-5 block h-px w-28 origin-left bg-gold"
          initial={reducedMotion ? false : { scaleX: 0, opacity: 0.35 }}
          animate={reducedMotion ? undefined : { scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
