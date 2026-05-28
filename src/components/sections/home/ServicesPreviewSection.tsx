import { services } from "@/data/services";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ServicesPreviewSection() {
  return (
    <AnimatedSection className="py-24 md:py-28">
      <Container>
        <div className="mb-9 max-w-3xl">
          <SectionLabel>Services</SectionLabel>
          <h2 className="font-serif text-4xl font-bold leading-tight text-ivory md:text-6xl">
            Designed for brands that need more than surface polish.
          </h2>
        </div>
        <div className="grid overflow-hidden rounded-lg border border-white/10 bg-white/10 shadow-luxury md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <GlassCard
              key={service.id}
              className="min-h-[300px] rounded-none border-0 border-r border-white/10 p-6 transition hover:-translate-y-0.5 hover:bg-panel-soft"
            >
              <span className="mb-14 block text-xs font-extrabold text-gold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-2xl font-bold text-ivory">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-ivory/66">{service.description}</p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}
