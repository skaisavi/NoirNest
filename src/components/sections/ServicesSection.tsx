import { services } from "@/data/services";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ServicesSection() {
  return (
    <AnimatedSection id="services" className="py-28 md:py-36">
      <Container>
        <div className="mb-12 max-w-4xl">
          <SectionLabel>Signature Services</SectionLabel>
          <h2 className="font-serif text-[clamp(2.5rem,5.4vw,5rem)] font-bold leading-[1] text-ivory">
            Interior concepts with mood, storage, light, and atmosphere resolved together.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <GlassCard
              key={service.title}
              className="group relative min-h-[330px] overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/35 hover:bg-panel-soft"
            >
              <span className="absolute right-5 top-5 h-2 w-2 rounded-full bg-gold/70" />
              <span className="mb-16 block text-xs font-extrabold text-gold/82">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="mb-5 h-px w-14 bg-gradient-to-r from-gold/70 to-transparent transition group-hover:w-24" />
              <h3 className="font-serif text-[1.7rem] font-bold leading-tight text-ivory">
                {service.title}
              </h3>
              <p className="mt-5 text-sm leading-7 text-ivory/64">{service.description}</p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}
