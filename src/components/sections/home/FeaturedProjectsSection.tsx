import Image from "next/image";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function FeaturedProjectsSection() {
  return (
    <section className="border-y border-gold/10 bg-ink py-24 md:py-32">
      <Container>
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel>Featured projects</SectionLabel>
            <h2 className="max-w-4xl font-serif text-5xl font-bold leading-none text-ivory">
              Rooms with a cinematic point of view.
            </h2>
          </div>
          <Button href="/projects" variant="outline">Open Gallery</Button>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <GlassCard key={project.title} className="group overflow-hidden">
              <div className="relative h-72">
                <Image src={project.image} alt={project.alt} fill sizes="33vw" className="object-cover brightness-[.78] transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-[.12em] text-gold">{project.category}</p>
                <h3 className="mt-2 font-serif text-2xl font-bold text-ivory">{project.title}</h3>
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
