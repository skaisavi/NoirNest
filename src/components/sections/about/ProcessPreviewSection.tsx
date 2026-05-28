import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

const steps = ["Listen", "Shape the mood", "Resolve the room", "Guide the finish"];

export function ProcessPreviewSection() {
  return (
    <section className="pb-24 md:pb-32">
      <Container>
        <SectionLabel>Approach</SectionLabel>
        <div className="grid gap-4 md:grid-cols-4">
          {steps.map((step) => (
            <GlassCard key={step} className="p-6">
              <p className="font-serif text-2xl font-bold text-ivory">{step}</p>
            </GlassCard>
          ))}
        </div>
        <Button href="/services" className="mt-8">Explore Services</Button>
      </Container>
    </section>
  );
}
