"use client";

import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";

type StaggerRevealProps = {
  children: React.ReactNode;
  className?: string;
};

export function StaggerReveal({ children, className }: StaggerRevealProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={reducedMotion ? undefined : staggerContainer}
      initial={reducedMotion ? false : "hidden"}
      whileInView={reducedMotion ? undefined : "visible"}
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}
