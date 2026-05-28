"use client";

import Image from "next/image";
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
        <div className="grid gap-5 md:grid-cols-3">
          {articles.map((article) => (
            <GlassCard key={article.title} className="group overflow-hidden">
              <div className="relative h-64">
                <Image src={article.image} alt={article.alt} fill sizes="33vw" className="object-cover brightness-[.78] transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[.12em] text-gold">{article.category} · {article.readTime}</p>
                <h3 className="mt-4 font-serif text-2xl font-bold leading-tight text-ivory">{article.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ivory/62">{article.excerpt}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
