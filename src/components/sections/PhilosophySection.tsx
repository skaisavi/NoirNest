import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

const principles = [
  "Warmth before spectacle",
  "Storage as part of the mood",
  "Lighting that edits the room",
];

export function PhilosophySection() {
  return (
    <section id="philosophy" className="border-y border-white/10 bg-[linear-gradient(180deg,#0d0b0a,#110e0c)] py-24 md:py-28">
      <Container>
        <div className="grid gap-10 md:grid-cols-[0.86fr_1.14fr]">
          <div>
            <SectionLabel>Studio Philosophy</SectionLabel>
            <h2 className="font-serif text-4xl font-bold leading-tight text-ivory md:text-6xl">
              Dark interiors should feel intimate, never heavy.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-ivory/68">
            <p>
              NoirNest designs rooms around atmosphere and daily use: where coats land, how evening
              light falls, what clients see on arrival, and how a small space can feel composed
              rather than crowded.
            </p>
            <p>
              The palette stays deep and tactile, but the outcome is practical: considered storage,
              softer lighting, richer material contrast, and a room that photographs beautifully
              because it already works beautifully.
            </p>
          </div>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {principles.map((principle) => (
            <GlassCard key={principle} className="p-6">
              <p className="font-serif text-2xl font-bold text-ivory">{principle}</p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
