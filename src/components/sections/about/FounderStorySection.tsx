import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function FounderStorySection() {
  return (
    <section className="py-24 md:py-32">
      <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <ImageFrame
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop"
          alt="NoirNest studio table with materials and warm light"
          className="h-[520px]"
        />
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
      </Container>
    </section>
  );
}
