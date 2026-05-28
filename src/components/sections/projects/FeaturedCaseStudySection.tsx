import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/sections/projects/ProjectCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function FeaturedCaseStudySection() {
  const [featured] = projects;

  return (
    <section className="border-y border-white/10 bg-ink py-24 md:py-28">
      <Container>
        <div className="mb-9 max-w-3xl">
          <SectionLabel>Featured</SectionLabel>
          <h2 className="font-serif text-4xl font-bold leading-tight text-ivory md:text-6xl">
            A tactile identity system for a fragrance house.
          </h2>
        </div>
        <ProjectCard project={featured} featured />
      </Container>
    </section>
  );
}
