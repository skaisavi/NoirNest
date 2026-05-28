import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const highlights = ["Identity Systems", "Product Direction", "Hospitality Web", "Launch Campaigns"];

export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100svh-72px)] items-center overflow-hidden">
      <div
        className="absolute inset-0 scale-[1.02] bg-cover bg-[center_42%] animate-image-reveal"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 38%, rgba(193,161,105,0.16), transparent 24%), linear-gradient(90deg, rgba(5,4,4,0.95) 0%, rgba(5,4,4,0.68) 46%, rgba(5,4,4,0.34) 100%), linear-gradient(180deg, rgba(5,4,4,0.05), rgba(5,4,4,0.96)), url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1800&auto=format&fit=crop')",
        }}
      />
      <Container className="relative max-w-[1180px] py-24 pb-56 md:py-32 md:pb-40">
        <div className="max-w-[820px] animate-fade-up">
          <SectionLabel>Luxury creative studio</SectionLabel>
          <h1 className="max-w-[9ch] font-serif text-[clamp(4.3rem,10vw,8.8rem)] font-bold leading-[1.02] tracking-[0.01em] text-ivory">
            NoirNest
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ivory/80 md:text-xl">
            Brand worlds, digital products, and editorial-grade web experiences for founders who
            need restraint to feel unforgettable.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/projects">View Work</Button>
            <Button href="/contact" variant="outline">
              Start a Project
            </Button>
          </div>
        </div>
      </Container>
      <div className="absolute inset-x-0 bottom-0 grid border-t border-white/10 bg-ink/72 backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((highlight) => (
          <span
            key={highlight}
            className="border-r border-white/10 px-5 py-4 text-left text-[0.72rem] font-extrabold uppercase tracking-[0.12em] text-ivory/65 md:text-center md:text-xs"
          >
            {highlight}
          </span>
        ))}
      </div>
    </section>
  );
}
