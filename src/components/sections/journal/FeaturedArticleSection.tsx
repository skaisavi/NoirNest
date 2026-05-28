import Image from "next/image";
import { journalArticles } from "@/data/journal";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function FeaturedArticleSection() {
  const featured = journalArticles[0];

  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionLabel>Featured article</SectionLabel>
        <GlassCard className="grid overflow-hidden md:grid-cols-[1.1fr_.9fr]">
          <div className="relative min-h-[420px]">
            <Image src={featured.image} alt={featured.alt} fill sizes="55vw" className="object-cover brightness-[.78]" />
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
