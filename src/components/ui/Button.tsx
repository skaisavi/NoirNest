import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit";
  variant?: "primary" | "outline";
  className?: string;
};

const variants = {
  primary:
    "border-transparent bg-gradient-to-b from-gold to-gold-dark text-ink shadow-[0_12px_28px_rgba(128,100,57,0.12)] hover:shadow-[0_18px_36px_rgba(128,100,57,0.18)]",
  outline:
    "border-white/10 bg-ivory/[0.035] text-ivory shadow-none hover:border-gold/35",
};

export function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  className,
}: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-12 items-center justify-center rounded-md border px-5 py-3 text-sm font-extrabold no-underline transition duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/70",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
