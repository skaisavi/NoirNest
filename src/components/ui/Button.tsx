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
    "border-transparent bg-gradient-to-b from-[#d1b783] to-gold-dark text-ink shadow-[0_16px_34px_rgba(128,100,57,0.2)] hover:shadow-[0_22px_44px_rgba(128,100,57,0.26)]",
  outline:
    "border-gold/18 bg-ivory/[0.035] text-ivory shadow-none backdrop-blur hover:border-gold/45 hover:bg-ivory/[0.06]",
};

export function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  className,
}: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-12 items-center justify-center rounded-full border px-6 py-3 text-xs font-extrabold uppercase tracking-[0.1em] no-underline transition duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/70",
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
