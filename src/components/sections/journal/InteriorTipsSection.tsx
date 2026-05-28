import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

const tips = ["Layer low light before overhead light", "Choose material contrast before furniture", "Use storage to protect the atmosphere"];

export function InteriorTipsSection() {
  return (
    <section className="border-y border-gold/10 bg-ink py-24 md:py-32">
      <Container>
        <SectionLabel>Interior tips</SectionLabel>
        <div className="grid gap-4 md:grid-cols-3">
          {tips.map((tip) => (
            <GlassCard key={tip} className="p-6">
              <p className="font-serif text-2xl font-bold text-ivory">{tip}</p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
