import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TextReveal } from "@/components/motion/TextReveal";

export function HomeHeroSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-gold/10 py-28 md:py-40">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-[center_45%] opacity-75"
        style={{
          backgroundImage:
            "linear-gradient(90deg,rgba(5,4,4,.96),rgba(5,4,4,.62)),linear-gradient(180deg,rgba(5,4,4,.1),rgba(5,4,4,.96)),url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1900&auto=format&fit=crop')",
        }}
      />
      <Container>
        <SectionLabel>Dark luxury interior studio</SectionLabel>
        <h1 className="max-w-5xl font-serif text-[clamp(3.5rem,9vw,8rem)] font-bold leading-[.94] text-ivory">
          <TextReveal text="Dark interiors, softly composed for modern living." />
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-ivory/72">
          NoirNest designs cinematic apartments, bedrooms, cafes, and private studios with warm
          textures, smoked glass, and quiet luxury.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href="/projects">Explore Projects</Button>
          <Button href="/contact" variant="outline">Book a Consultation</Button>
        </div>
      </Container>
    </section>
  );
}
