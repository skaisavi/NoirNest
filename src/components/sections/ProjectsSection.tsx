"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

const filters = ["All", "Apartments", "Bedrooms", "Cafes", "Studios"] as const;
type ProjectFilter = (typeof filters)[number];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");

  const filteredProjects = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((project) => project.filter === activeFilter),
    [activeFilter],
  );

  return (
    <section
      id="projects"
      className="border-y border-gold/10 bg-[radial-gradient(circle_at_80%_0%,rgba(193,161,105,0.08),transparent_28rem),linear-gradient(180deg,#100d0c,#0b0908)] py-28 md:py-36"
    >
      <Container>
        <div className="mb-12 grid gap-6 md:grid-cols-[0.9fr_0.55fr] md:items-end">
          <div className="max-w-3xl">
          <SectionLabel>Featured Projects</SectionLabel>
          <h2 className="font-serif text-[clamp(2.6rem,6vw,5.6rem)] font-bold leading-[0.98] text-ivory">
            Editorial rooms designed for real life, not just the first photograph.
          </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-ivory/58">
            Each preview is treated like a small case study: atmosphere first, then location,
            function, and the material decisions that make the space memorable.
          </p>
        </div>
        <div className="mb-8 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "rounded-full border px-4 py-2 text-xs font-extrabold uppercase tracking-[0.1em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/70",
                activeFilter === filter
                  ? "border-gold/55 bg-gold/12 text-ivory"
                  : "border-gold/12 bg-ivory/[0.025] text-ivory/58 hover:border-gold/35 hover:text-ivory",
              )}
            >
              {filter}
            </button>
          ))}
        </div>
        <motion.div layout className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 18, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "group overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-gold/35",
                index === 0 && "lg:row-span-2",
              )}
            >
              <GlassCard className="h-full overflow-hidden border-0 bg-transparent">
              <div
                className={cn(
                  "relative h-[340px] overflow-hidden bg-ink md:h-[390px]",
                  index === 0 && "lg:h-[610px]",
                )}
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes={index === 0 ? "(max-width: 1024px) 100vw, 55vw" : "(max-width: 1024px) 100vw, 45vw"}
                  className="object-cover brightness-[0.78] contrast-110 saturate-[0.82] transition duration-700 group-hover:scale-[1.045]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,4,4,0.02)_10%,rgba(5,4,4,0.74)_100%)]" />
                <div className="absolute left-5 top-5 rounded-full border border-gold/20 bg-obsidian/45 px-3 py-1 text-[0.62rem] font-extrabold uppercase tracking-[0.14em] text-gold backdrop-blur">
                  {project.category}
                </div>
                <div className="absolute inset-x-5 bottom-5 translate-y-4 rounded-xl border border-gold/12 bg-obsidian/72 p-4 opacity-0 backdrop-blur-xl transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.14em] text-gold">
                    Explore atmosphere
                  </p>
                  <dl className="mt-3 grid gap-2 text-xs leading-5 text-ivory/72">
                    <div>
                      <dt className="text-ivory/42">Mood</dt>
                      <dd>{project.mood}</dd>
                    </div>
                    <div>
                      <dt className="text-ivory/42">Materials</dt>
                      <dd>{project.materials}</dd>
                    </div>
                    <div>
                      <dt className="text-ivory/42">Lighting</dt>
                      <dd>{project.lighting}</dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div className="p-6 md:p-7">
                <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.12em] text-gold/85">
                  {project.location}
                </p>
                <h3 className="font-serif text-3xl font-bold leading-tight text-ivory">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-ivory/66">{project.description}</p>
                <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.12em] text-gold/70">
                  View mood <span className="inline-block transition group-hover:translate-x-1">→</span>
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
