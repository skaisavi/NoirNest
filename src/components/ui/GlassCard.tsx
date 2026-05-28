import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  as?: "article" | "div" | "li";
};

export function GlassCard({ children, className, as: Component = "article" }: GlassCardProps) {
  return (
    <Component
      className={cn(
        "rounded-xl border border-gold/10 bg-panel/90 shadow-luxury backdrop-blur-md",
        "bg-[linear-gradient(145deg,rgba(240,235,226,0.055),rgba(240,235,226,0.012)_42%,rgba(193,161,105,0.035))]",
        className,
      )}
    >
      {children}
    </Component>
  );
}
