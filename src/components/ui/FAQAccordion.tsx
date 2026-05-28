"use client";

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
          <div key={item.question} className="rounded-xl border border-gold/10 bg-panel/75">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left font-serif text-xl font-bold text-ivory"
            >
              {item.question}
              <span className={cn("text-gold transition", isOpen && "rotate-45")}>+</span>
            </button>
            {isOpen ? <p className="px-5 pb-5 text-sm leading-7 text-ivory/64">{item.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
