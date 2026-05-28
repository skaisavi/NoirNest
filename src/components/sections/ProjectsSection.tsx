import Image from "next/image";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  return (
    <section id="projects" className="border-y border-white/10 bg-[linear-gradient(180deg,#100d0c,#0b0908)] py-24 md:py-28">
      <Container>
        <div className="mb-9 max-w-3xl">
          <SectionLabel>Featured Projects</SectionLabel>
          <h2 className="font-serif text-4xl font-bold leading-tight text-ivory md:text-6xl">
            Editorial rooms designed for real life, not just the first photograph.
          </h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          {projects.map((project, index) => (
            <GlassCard
              key={project.title}
              className={cn("group overflow-hidden transition hover:-translate-y-1 hover:border-gold/35", index === 0 && "lg:row-span-2")}
            >
              <div className={cn("relative h-[310px] overflow-hidden bg-ink md:h-[360px]", index === 0 && "lg:h-[590px]")}>
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes={index === 0 ? "(max-width: 1024px) 100vw, 55vw" : "(max-width: 1024px) 100vw, 45vw"}
                  className="object-cover brightness-[0.86] contrast-105 saturate-[0.86] transition duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-6">
                <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.12em] text-gold">
                  {project.category} / {project.location}
                </p>
                <h3 className="font-serif text-2xl font-bold text-ivory">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ivory/66">{project.description}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
