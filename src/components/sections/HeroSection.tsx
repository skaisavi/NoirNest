import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function HeroSection() {
  return (
    <section id="top" className="relative flex min-h-[calc(100svh-72px)] items-center overflow-hidden">
      <div
        className="absolute inset-0 scale-[1.02] bg-cover bg-[center_45%] animate-image-reveal"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 40%, rgba(193,161,105,0.16), transparent 24%), linear-gradient(90deg, rgba(5,4,4,0.95) 0%, rgba(5,4,4,0.66) 48%, rgba(5,4,4,0.34) 100%), linear-gradient(180deg, rgba(5,4,4,0.08), rgba(5,4,4,0.96)), url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1800&auto=format&fit=crop')",
        }}
      />
      <Container className="relative py-24 pb-48 md:py-32 md:pb-40">
        <div className="max-w-[820px] animate-fade-up">
          <SectionLabel>Dark luxury interior studio</SectionLabel>
          <h1 className="max-w-[9ch] font-serif text-[clamp(4.2rem,10vw,8.6rem)] font-bold leading-[1.02] tracking-[0.01em] text-ivory">
            NoirNest
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ivory/80 md:text-xl">
            Cinematic apartment, bedroom, cafe, and workspace interiors shaped with warm light,
            smoked materials, and a quiet editorial mood.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects">View Projects</Button>
            <Button href="#contact" variant="outline">
              Start an Enquiry
            </Button>
          </div>
        </div>
      </Container>
      <div className="absolute inset-x-0 bottom-0 grid border-t border-white/10 bg-ink/72 backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4">
        {["Private Homes", "Bedroom Styling", "Boutique Cafes", "Creative Studios"].map((item) => (
          <span
            key={item}
            className="border-r border-white/10 px-5 py-4 text-left text-[0.72rem] font-extrabold uppercase tracking-[0.12em] text-ivory/65 md:text-center md:text-xs"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
