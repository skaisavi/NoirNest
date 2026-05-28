import { cn } from "@/lib/utils";

type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "mb-4 text-xs font-extrabold uppercase tracking-[0.16em] text-gold",
        className,
      )}
    >
      {children}
    </p>
  );
}
