"use client";

import { motion, useReducedMotion } from "framer-motion";
import { luxuryEase } from "@/lib/animations";

type TextRevealProps = {
  text: string;
  className?: string;
};

export function TextReveal({ text, className }: TextRevealProps) {
  const reducedMotion = useReducedMotion();
  const words = text.split(" ");

  if (reducedMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className} aria-label={text}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          aria-hidden="true"
          className="inline-block overflow-hidden pr-[0.18em]"
          initial={{ opacity: 0, y: 18, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: index * 0.055, duration: 0.72, ease: luxuryEase }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
