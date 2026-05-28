import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

const values = ["Atmosphere over trend", "Comfort over perfection", "Materials over decoration", "Detail over excess"];

export function StudioValuesSection() {
  return (
    <section className="border-y border-gold/10 bg-ink py-24 md:py-32">
      <Container>
        <SectionLabel>Values</SectionLabel>
        <div className="grid gap-4 md:grid-cols-4">
          {values.map((value, index) => (
            <GlassCard key={value} className="min-h-48 p-6">
              <span className="text-xs font-bold text-gold">0{index + 1}</span>
              <p className="mt-12 font-serif text-2xl font-bold leading-tight text-ivory">{value}</p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
