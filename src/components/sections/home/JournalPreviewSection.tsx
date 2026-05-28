import { journalArticles } from "@/data/journal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function JournalPreviewSection() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel>Journal</SectionLabel>
            <h2 className="max-w-3xl font-serif text-5xl font-bold leading-none text-ivory">
              Interior notes from the darker side of luxury.
            </h2>
          </div>
          <Button href="/journal" variant="outline">Read Journal</Button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {journalArticles.slice(0, 3).map((article) => (
            <GlassCard key={article.title} className="p-6">
              <p className="text-xs font-bold uppercase tracking-[.12em] text-gold">{article.category}</p>
              <h3 className="mt-4 font-serif text-2xl font-bold leading-tight text-ivory">{article.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ivory/62">{article.excerpt}</p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
