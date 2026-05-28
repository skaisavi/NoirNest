import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function TestimonialsSection() {
  return (
    <section className="py-28 md:py-36">
      <Container>
        <div className="mb-12 max-w-3xl">
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="font-serif text-[clamp(2.5rem,5.4vw,5rem)] font-bold leading-[1] text-ivory">
            Rooms remembered for how they feel.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <GlassCard key={testimonial.client} className="relative min-h-72 p-7">
              <span className="absolute right-6 top-4 font-serif text-7xl leading-none text-gold/12">
                &rdquo;
              </span>
              <blockquote className="relative font-serif text-[1.65rem] font-bold leading-snug text-ivory">
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
