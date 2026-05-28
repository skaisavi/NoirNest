import { Container } from "@/components/ui/Container";

const filters = ["All", "Identity", "Product", "Hospitality"];

export function ProjectFiltersSection() {
  return (
    <section className="border-b border-white/10 py-8">
      <Container>
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <span
              key={filter}
              className="rounded-full border border-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-ivory/68"
            >
              {filter}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
