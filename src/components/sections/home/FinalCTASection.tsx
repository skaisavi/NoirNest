import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function FinalCTASection() {
  return (
    <section className="pb-24 md:pb-32">
      <Container>
        <GlassCard className="p-8 md:p-10">
          <SectionLabel>Begin</SectionLabel>
          <h2 className="max-w-4xl font-serif text-5xl font-bold leading-none text-ivory">
            Ready to make the room feel considered?
          </h2>
          <Button href="/contact" className="mt-8">Book a Consultation</Button>
        </GlassCard>
      </Container>
    </section>
  );
}
