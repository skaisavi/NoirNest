"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { journalArticles } from "@/data/journal";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

const categories = ["All", ...Array.from(new Set(journalArticles.map((article) => article.category)))] as const;

export function JournalGridSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const articles = useMemo(
    () => activeCategory === "All" ? journalArticles : journalArticles.filter((article) => article.category === activeCategory),
    [activeCategory],
  );

  return (
    <section className="pb-24 md:pb-32">
      <Container>
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn("rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[.1em]", activeCategory === category ? "border-gold/55 bg-gold/10 text-ivory" : "border-gold/10 text-ivory/58")}
            >
              {category}
            </button>
          ))}
        </div>
        <motion.div layout className="grid gap-5 md:grid-cols-3">
          <AnimatePresence mode="popLayout">
          {articles.map((article) => (
            <motion.div
              key={article.title}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
            <GlassCard className="group h-full overflow-hidden">
              <div className="relative h-64">
                <Image src={article.image} alt={article.alt} fill sizes="33vw" className="object-cover brightness-[.78] transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[.12em] text-gold">{article.category} · {article.readTime}</p>
                <h3 className="mt-4 font-serif text-2xl font-bold leading-tight text-ivory">{article.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ivory/62">{article.excerpt}</p>
                <p className="mt-5 text-xs font-bold uppercase tracking-[.12em] text-gold/70">
                  Read note <span className="inline-block transition group-hover:translate-x-1">→</span>
                </p>
              </div>
            </GlassCard>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
