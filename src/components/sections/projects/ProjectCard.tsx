import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";
import { GlassCard } from "@/components/ui/GlassCard";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <GlassCard className="group overflow-hidden transition hover:-translate-y-1 hover:border-gold/35">
      <Link href={`/projects/${project.slug}`} className="grid h-full no-underline">
        <div className={featured ? "relative h-[420px]" : "relative h-[310px]"}>
          <Image
            src={project.image}
            alt={project.alt}
            fill
            sizes={featured ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 100vw, 33vw"}
            className="object-cover brightness-[0.86] contrast-105 saturate-[0.86] transition duration-700 group-hover:scale-[1.04]"
          />
        </div>
        <div className="p-6">
          <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.12em] text-gold">
            {project.category}
          </p>
          <h3 className="font-serif text-2xl font-bold text-ivory">{project.title}</h3>
          <p className="mt-3 text-sm leading-7 text-ivory/66">{project.summary}</p>
        </div>
      </Link>
    </GlassCard>
  );
}
