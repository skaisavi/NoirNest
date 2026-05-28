import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const steps = [
  {
    title: "Discover",
    description: "Audit the current brand, audience tension, competitive space, and commercial goals.",
  },
  {
    title: "Define",
    description: "Shape the strategic idea, creative direction, content hierarchy, and rollout priorities.",
  },
  {
    title: "Design",
    description: "Build the identity, interface, and visual system with fast reviews and precise iteration.",
  },
  {
    title: "Deliver",
    description: "Prepare launch assets, handoff libraries, documentation, and support for the first release.",
  },
];

export function ProcessTimelineSection() {
  return (
    <section className="py-24 md:py-28">
      <Container>
        <div className="mb-9 max-w-3xl">
          <SectionLabel>Process</SectionLabel>
          <h2 className="font-serif text-4xl font-bold leading-tight text-ivory md:text-6xl">
            A sharp, senior-led path from first signal to launch.
          </h2>
        </div>
        <ol className="grid overflow-hidden rounded-lg border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="min-h-60 border-t-2 border-gold/75 bg-panel p-6">
              <span className="mb-10 block text-sm font-extrabold text-gold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-2xl font-bold text-ivory">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-ivory/66">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
