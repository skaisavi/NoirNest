import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-28">
      <Container>
        <div className="mb-9 max-w-3xl">
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="font-serif text-4xl font-bold leading-tight text-ivory md:text-6xl">
            Rooms remembered for how they feel.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <GlassCard key={testimonial.client} className="p-6">
              <blockquote className="font-serif text-2xl font-bold leading-snug text-ivory">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.12em] text-gold">
                {testimonial.client}
              </p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
