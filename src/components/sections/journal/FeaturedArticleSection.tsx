import { journalArticles } from "@/data/journal";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ParallaxImage } from "@/components/motion/ParallaxImage";

export function FeaturedArticleSection() {
  const featured = journalArticles[0];

  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionLabel>Featured article</SectionLabel>
        <GlassCard className="grid overflow-hidden md:grid-cols-[1.1fr_.9fr]">
          <div className="relative min-h-[420px]">
            <ParallaxImage
              src={featured.image}
              alt={featured.alt}
              sizes="55vw"
              className="h-full min-h-[420px]"
              imageClassName="brightness-[.78] contrast-110 saturate-[.84]"
            />
          </div>
          <div className="p-8 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[.12em] text-gold">{featured.category} · {featured.readTime}</p>
            <h2 className="mt-5 font-serif text-5xl font-bold leading-none text-ivory">{featured.title}</h2>
            <p className="mt-6 text-base leading-8 text-ivory/66">{featured.excerpt}</p>
          </div>
        </GlassCard>
      </Container>
    </section>
  );
}
