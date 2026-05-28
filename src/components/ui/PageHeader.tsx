import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  label: string;
  title: string;
  description: string;
  cta?: React.ReactNode;
  className?: string;
};

export function PageHeader({ label, title, description, cta, className }: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-gold/10 bg-[radial-gradient(circle_at_78%_16%,rgba(193,161,105,0.1),transparent_25rem),linear-gradient(180deg,#0d0b0a,#050404)] py-28 md:py-36",
        className,
      )}
    >
      <Container>
        <SectionLabel>{label}</SectionLabel>
        <h1 className="max-w-5xl font-serif text-[clamp(3.2rem,8vw,7rem)] font-bold leading-[0.96] text-ivory">
          {title}
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-8 text-ivory/68 md:text-lg">{description}</p>
        {cta ? <div className="mt-9">{cta}</div> : null}
      </Container>
    </section>
  );
}
