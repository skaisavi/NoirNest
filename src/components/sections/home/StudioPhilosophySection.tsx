import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StatCard } from "@/components/ui/StatCard";

const stats = [
  { value: "38", label: "brand and product launches" },
  { value: "11", label: "hospitality and lifestyle markets" },
  { value: "4.9", label: "average client satisfaction" },
];

export function StudioPhilosophySection() {
  return (
    <section className="border-b border-white/10 bg-[linear-gradient(180deg,#0d0b0a,#110e0c)] py-24 md:py-28">
      <Container>
        <div className="grid gap-10 md:grid-cols-[0.86fr_1.14fr]">
          <div>
            <SectionLabel>Studio</SectionLabel>
            <h2 className="font-serif text-4xl font-bold leading-tight text-ivory md:text-6xl">
              Quiet luxury, built with commercial bite.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-ivory/68">
            <p>
              NoirNest partners with boutique brands, finance products, and destination-led
              hospitality teams to turn taste into a complete operating system: naming, identity,
              interface, copy, launch assets, and the details that make a client linger.
            </p>
            <p>
              Every engagement is led by Taylor Vale with a compact network of senior
              collaborators, so the work stays precise, personal, and obsessively edited.
            </p>
          </div>
        </div>
        <div className="mt-16 grid gap-1 md:grid-cols-3">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}
