import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function FinalCTASection() {
  return (
    <section className="py-24 md:py-28">
      <Container>
        <GlassCard className="grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-end md:p-10">
          <div>
            <SectionLabel>Next Step</SectionLabel>
            <h2 className="max-w-3xl font-serif text-4xl font-bold leading-tight text-ivory md:text-6xl">
              Bring a brief, a challenge, or a half-formed instinct.
            </h2>
          </div>
          <Button href="/contact">Start a Project</Button>
        </GlassCard>
      </Container>
    </section>
  );
}
