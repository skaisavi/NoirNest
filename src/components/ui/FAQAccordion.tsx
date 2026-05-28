"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FAQ } from "@/data/faqs";
import { cn } from "@/lib/utils";

type FAQAccordionProps = {
  items: FAQ[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="grid gap-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <motion.div
            key={item.question}
            className={cn(
              "rounded-xl border bg-panel/75 transition-colors",
              isOpen ? "border-gold/35" : "border-gold/10",
            )}
            layout
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left font-serif text-xl font-bold text-ivory"
            >
              {item.question}
              <span className={cn("text-gold transition", isOpen && "rotate-45")}>+</span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm leading-7 text-ivory/64">{item.answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
