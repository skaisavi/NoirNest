import { addOns } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function AddOnsSection() {
  return (
    <section className="border-y border-white/10 bg-ink py-24 md:py-28">
      <Container>
        <SectionLabel>Add-ons</SectionLabel>
        <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
          <h2 className="font-serif text-4xl font-bold leading-tight text-ivory md:text-6xl">
            Support for the pieces that make launch feel complete.
          </h2>
          <div className="grid gap-3">
            {addOns.map((addOn) => (
              <GlassCard key={addOn} className="p-5 text-ivory/72">
                {addOn}
              </GlassCard>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
