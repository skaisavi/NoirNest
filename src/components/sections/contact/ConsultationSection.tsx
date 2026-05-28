import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ConsultationSection() {
  return (
    <section className="border-t border-white/10 bg-ink py-24 md:py-28">
      <Container>
        <GlassCard className="p-8 md:p-10">
          <SectionLabel>Consultation</SectionLabel>
          <h2 className="max-w-4xl font-serif text-4xl font-bold leading-tight text-ivory md:text-6xl">
            The first conversation is about fit, pressure, and the decision the work needs to make easier.
          </h2>
        </GlassCard>
      </Container>
    </section>
  );
}
