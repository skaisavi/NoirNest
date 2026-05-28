import { services } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function SignatureServicesSection() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel>Signature services</SectionLabel>
            <h2 className="max-w-3xl font-serif text-5xl font-bold leading-none text-ivory">
              Atmosphere-led design packages.
            </h2>
          </div>
          <Button href="/services" variant="outline">View Services</Button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {services.slice(0, 3).map((service) => (
            <GlassCard key={service.title} className="p-6">
              <h3 className="font-serif text-2xl font-bold text-ivory">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-ivory/64">{service.description}</p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
