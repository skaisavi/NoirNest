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
        "rounded-lg border border-white/10 bg-panel/92 shadow-luxury",
        "bg-[linear-gradient(180deg,rgba(240,235,226,0.035),rgba(240,235,226,0.01))]",
        className,
      )}
    >
      {children}
    </Component>
  );
}
