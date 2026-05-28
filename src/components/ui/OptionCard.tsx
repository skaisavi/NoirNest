import { cn } from "@/lib/utils";

type OptionCardProps = {
  children: React.ReactNode;
  selected?: boolean;
  onClick: () => void;
  className?: string;
};

export function OptionCard({ children, selected = false, onClick, className }: OptionCardProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={cn(
        "rounded-xl border p-4 text-left text-sm leading-6 transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/70",
        selected
          ? "border-gold/55 bg-gold/10 text-ivory shadow-[0_0_30px_rgba(193,161,105,0.08)]"
          : "border-gold/10 bg-panel/70 text-ivory/68 hover:-translate-y-0.5 hover:border-gold/35 hover:text-ivory",
        className,
      )}
    >
      {children}
    </button>
  );
}
