import { Container } from "@/components/ui/Container";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function FounderSection() {
  return (
    <section className="py-24 md:py-28">
      <Container className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <ImageFrame
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop"
          alt="Refined studio workspace"
          className="h-[420px]"
        />
        <div>
          <SectionLabel>Founder</SectionLabel>
          <h2 className="font-serif text-4xl font-bold leading-tight text-ivory md:text-6xl">
            Led by Taylor Vale, edited with a founder&apos;s urgency.
          </h2>
          <p className="mt-6 text-base leading-8 text-ivory/68">
            NoirNest combines brand strategy, interface design, art direction, and launch systems.
            The studio stays intentionally small so every decision is handled with senior attention,
            not passed through layers of account theatre.
          </p>
        </div>
      </Container>
    </section>
  );
}
