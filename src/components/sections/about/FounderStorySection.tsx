import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Reveal } from "@/components/motion/Reveal";

export function FounderStorySection() {
  return (
    <section className="py-24 md:py-32">
      <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop"
          alt="NoirNest studio table with materials and warm light"
          className="h-[520px] rounded-xl border border-gold/10 shadow-luxury"
          imageClassName="brightness-[0.82] contrast-110 saturate-[0.82]"
        />
        <Reveal>
          <GlassCard className="p-7 md:p-9">
            <SectionLabel>Mara Vey</SectionLabel>
            <h2 className="font-serif text-5xl font-bold leading-none text-ivory">
              Creative Director & Interior Stylist
            </h2>
            <p className="mt-6 text-base leading-8 text-ivory/68">
              Mara founded NoirNest to create interiors that feel cinematic without becoming cold.
              Her work focuses on warm minimalism, layered lighting, dark materials, and rooms that
              feel deeply personal.
            </p>
          </GlassCard>
        </Reveal>
      </Container>
    </section>
  );
}
