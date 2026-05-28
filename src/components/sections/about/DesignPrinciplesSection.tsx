import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function DesignPrinciplesSection() {
  return (
    <section className="py-24 md:py-32">
      <Container className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionLabel>Design Principles</SectionLabel>
          <h2 className="font-serif text-5xl font-bold leading-none text-ivory">
            “A room should lower your shoulders before it asks to be admired.”
          </h2>
        </div>
        <div className="space-y-5 text-base leading-8 text-ivory/66">
          <p>We start with feeling, then solve the practical structure that makes that feeling last.</p>
          <p>Light, texture, movement, storage, and negative space are treated as one composition.</p>
          <p>The result is a room that photographs beautifully because it already works beautifully.</p>
        </div>
      </Container>
    </section>
  );
}
