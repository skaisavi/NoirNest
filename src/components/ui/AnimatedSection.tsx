import { cn } from "@/lib/utils";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function AnimatedSection({ children, className, id }: AnimatedSectionProps) {
  return (
    <section id={id} className={cn("animate-fade-up", className)}>
      {children}
    </section>
  );
}
