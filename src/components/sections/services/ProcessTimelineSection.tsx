import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

const steps = ["Discovery", "Mood direction", "Room concept", "Sourcing notes", "Final handoff"];

export function ProcessTimelineSection() {
  return (
    <section className="border-y border-gold/10 bg-ink py-24 md:py-32">
      <Container>
        <SectionLabel>Process</SectionLabel>
        <div className="grid gap-4 md:grid-cols-5">
          {steps.map((step, index) => (
            <GlassCard key={step} className="p-6">
              <span className="text-xs font-bold text-gold">0{index + 1}</span>
              <p className="mt-10 font-serif text-xl font-bold text-ivory">{step}</p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
