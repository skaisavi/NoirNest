"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { navigationItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-gold/10 bg-obsidian/78 backdrop-blur-2xl">
      <Container className="flex min-h-[72px] items-center justify-between">
        <Link
          href="/"
          className="font-serif text-xl font-bold tracking-[0.08em] text-ivory no-underline"
          aria-label="NoirNest home"
        >
          NoirNest
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-xs font-bold uppercase tracking-[0.1em] transition after:absolute after:-bottom-2 after:left-0 after:h-px after:bg-gold/70 after:transition-all hover:text-ivory",
                pathname === item.href
                  ? "text-ivory after:w-full"
                  : "text-ivory/62 after:w-0 hover:after:w-full",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="grid size-11 place-items-center rounded-full border border-gold/12 text-ivory md:hidden"
        >
          <span className="sr-only">Menu</span>
          <span className="grid gap-1.5" aria-hidden="true">
            <span
              className={cn(
                "block h-0.5 w-5 bg-current transition",
                isOpen && "translate-y-1 rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-current transition",
                isOpen && "-translate-y-1 -rotate-45",
              )}
            />
          </span>
        </button>
      </Container>
      {isOpen && (
        <div className="absolute left-4 right-4 top-[72px] rounded-xl border border-gold/12 bg-ink/98 p-2 shadow-luxury md:hidden">
          <nav aria-label="Mobile navigation" className="grid">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "border-b border-gold/[0.08] px-4 py-4 text-xs font-bold uppercase tracking-[0.1em] last:border-b-0 hover:text-ivory",
                  pathname === item.href ? "text-gold" : "text-ivory/72",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
