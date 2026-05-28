import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ServicesGridSection() {
  return (
    <section className="py-24 md:py-28">
      <Container>
        <div className="mb-9 max-w-3xl">
          <SectionLabel>Capabilities</SectionLabel>
          <h2 className="font-serif text-4xl font-bold leading-tight text-ivory md:text-6xl">
            A precise stack for the full brand experience.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <GlassCard key={service.id} className="p-7">
              <h3 className="font-serif text-3xl font-bold text-ivory">{service.title}</h3>
              <p className="mt-4 text-base leading-8 text-ivory/68">{service.description}</p>
              <ul className="mt-6 grid gap-3 text-sm text-ivory/68">
                {service.details.map((detail) => (
                  <li key={detail} className="border-t border-white/10 pt-3">
                    {detail}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
