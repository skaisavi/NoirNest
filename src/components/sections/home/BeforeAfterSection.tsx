import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

const comparisons = [
  {
    label: "Before",
    copy: "Good taste trapped in scattered assets, vague positioning, and pages that asked users to work too hard.",
  },
  {
    label: "After",
    copy: "A quieter system with sharper hierarchy, richer imagery, clearer decision points, and a brand world that can scale.",
  },
];

export function BeforeAfterSection() {
  return (
    <section className="py-24 md:py-28">
      <Container>
        <div className="mb-9 max-w-3xl">
          <SectionLabel>Refinement</SectionLabel>
          <h2 className="font-serif text-4xl font-bold leading-tight text-ivory md:text-6xl">
            The work is not louder. It is more resolved.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {comparisons.map((item) => (
            <GlassCard key={item.label} className="p-7">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-gold">
                {item.label}
              </p>
              <p className="mt-5 text-lg leading-8 text-ivory/72">{item.copy}</p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
