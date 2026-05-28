import Image from "next/image";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
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
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          {projects.map((project, index) => (
            <GlassCard
              key={project.title}
              className={cn(
                "group overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-gold/35",
                index === 0 && "lg:row-span-2",
              )}
            >
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
              </div>
              <div className="p-6 md:p-7">
                <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.12em] text-gold/85">
                  {project.location}
                </p>
                <h3 className="font-serif text-3xl font-bold leading-tight text-ivory">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-ivory/66">{project.description}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
