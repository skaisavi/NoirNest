import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/Container";

export function TestimonialsSection() {
  const [featured] = testimonials;

  return (
    <section
      className="bg-cover bg-center py-24 md:py-28"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(5,4,4,0.96), rgba(5,4,4,0.74)), url('https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop')",
      }}
    >
      <Container>
        <blockquote className="max-w-[16ch] font-serif text-4xl font-bold leading-[1.1] text-ivory md:text-6xl">
          &ldquo;{featured.quote}&rdquo;
        </blockquote>
        <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.12em] text-gold">
          {featured.name}, {featured.role}
        </p>
      </Container>
    </section>
  );
}
