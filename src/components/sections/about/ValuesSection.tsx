import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

const values = [
  {
    title: "Restraint",
    description: "Luxury is edited. The strongest systems leave room for the audience to feel smart.",
  },
  {
    title: "Commercial Clarity",
    description: "Taste matters most when it helps users choose, trust, book, buy, or remember.",
  },
  {
    title: "Material Detail",
    description: "Typography, pacing, image crops, labels, and handoff files all carry the brand.",
  },
];

export function ValuesSection() {
  return (
    <section className="border-y border-white/10 bg-ink py-24 md:py-28">
      <Container>
        <div className="mb-9 max-w-3xl">
          <SectionLabel>Values</SectionLabel>
          <h2 className="font-serif text-4xl font-bold leading-tight text-ivory md:text-6xl">
            Fewer moves. Better reasons.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {values.map((value) => (
            <GlassCard key={value.title} className="p-6">
              <h3 className="font-serif text-2xl font-bold text-ivory">{value.title}</h3>
              <p className="mt-4 text-sm leading-7 text-ivory/66">{value.description}</p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
