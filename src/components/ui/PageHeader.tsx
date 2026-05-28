import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

type PageHeaderProps = {
  label: string;
  title: string;
  description: string;
};

export function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <section className="border-b border-white/10 bg-ink py-28 md:py-36">
      <Container>
        <SectionLabel>{label}</SectionLabel>
        <h1 className="max-w-4xl font-serif text-5xl font-bold leading-[1.02] tracking-[0.01em] text-ivory md:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-ivory/70">{description}</p>
      </Container>
    </section>
  );
}
