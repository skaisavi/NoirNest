"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Container } from "@/components/ui/Container";
import { navigationItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur-xl">
      <Container className="flex min-h-[72px] items-center justify-between">
        <Link
          href="/"
          className="font-serif text-xl font-bold tracking-[0.055em] text-ivory no-underline"
          aria-label="NoirNest home"
        >
          NoirNest
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-bold uppercase tracking-[0.08em] text-ivory/68 transition hover:text-ivory"
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
          className="grid size-11 place-items-center rounded-md border border-white/10 text-ivory md:hidden"
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
      <MobileMenu isOpen={isOpen} onNavigate={() => setIsOpen(false)} />
    </header>
  );
}
