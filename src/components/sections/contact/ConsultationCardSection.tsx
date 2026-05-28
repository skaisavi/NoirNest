import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { StatCard } from "@/components/ui/StatCard";

export function ConsultationCardSection() {
  return (
    <section className="py-24 md:py-32">
      <Container className="grid gap-4 md:grid-cols-3">
        <StatCard value="48h" label="typical enquiry response" />
        <StatCard value="3" label="clear next-step options" />
        <GlassCard className="p-6">
          <p className="font-serif text-2xl font-bold text-ivory">Remote and London-based projects welcome.</p>
        </GlassCard>
      </Container>
    </section>
  );
}
