import { cn } from "@/lib/utils";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
};

export function AnimatedSection({ children, className }: AnimatedSectionProps) {
  return <section className={cn("animate-fade-up", className)}>{children}</section>;
}
