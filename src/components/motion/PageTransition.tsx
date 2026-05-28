"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { pageFade } from "@/lib/animations";

type PageTransitionProps = {
  children: React.ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      key={pathname}
      variants={reducedMotion ? undefined : pageFade}
      initial={reducedMotion ? false : "initial"}
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
