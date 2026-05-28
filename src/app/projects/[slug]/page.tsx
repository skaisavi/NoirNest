import Image from "next/image";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="relative grid min-h-[60svh] items-end overflow-hidden py-16 md:py-24">
        <Image
          src={project.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.42] contrast-105 saturate-[0.88]"
        />
        <Container className="relative">
          <SectionLabel>{project.category}</SectionLabel>
          <h1 className="max-w-[9ch] font-serif text-[clamp(4rem,10vw,8rem)] font-bold leading-[1.02] text-ivory">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ivory/78">{project.description}</p>
          <div className="mt-8 grid overflow-hidden rounded-lg border border-white/10 bg-white/10 shadow-luxury md:grid-cols-3">
            <GlassCard className="rounded-none border-0 p-5">
              <span className="block text-xs font-extrabold uppercase tracking-[0.12em] text-gold">
                Client
              </span>
              <p className="mt-2 text-ivory/78">{project.client}</p>
            </GlassCard>
            <GlassCard className="rounded-none border-0 p-5">
              <span className="block text-xs font-extrabold uppercase tracking-[0.12em] text-gold">
                Scope
              </span>
              <p className="mt-2 text-ivory/78">{project.scope}</p>
            </GlassCard>
            <GlassCard className="rounded-none border-0 p-5">
              <span className="block text-xs font-extrabold uppercase tracking-[0.12em] text-gold">
                Timeline
              </span>
              <p className="mt-2 text-ivory/78">{project.timeline}</p>
            </GlassCard>
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-28">
        <Container>
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionLabel>Challenge</SectionLabel>
              <h2 className="font-serif text-4xl font-bold leading-tight text-ivory md:text-6xl">
                Make the brand feel considered before a single detail is explained.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-ivory/68">
              <p>
                NoirNest shaped the system around the exact customer decision: what needs to feel
                trustworthy, rare, useful, and effortless before someone commits.
              </p>
              <p>
                The result is a restrained visual and interaction language built to carry the
                brand across launch assets, product surfaces, and future growth.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {project.highlights.map((highlight) => (
              <GlassCard key={highlight.title} className="p-6">
                <h3 className="font-serif text-2xl font-bold text-ivory">{highlight.title}</h3>
                <p className="mt-4 text-sm leading-7 text-ivory/66">{highlight.description}</p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24 md:pb-28">
        <Container>
          <div className="relative h-[320px] overflow-hidden rounded-lg shadow-luxury md:h-[460px]">
            <Image
              src={project.detailImage}
              alt={project.alt}
              fill
              sizes="100vw"
              className="object-cover brightness-90 contrast-105 saturate-[0.88]"
            />
          </div>
          <div className="mt-8">
            <Button href="/projects" variant="outline">
              Back to Work
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
