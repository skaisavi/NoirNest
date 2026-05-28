"use client";

import Link from "next/link";
import { navigationItems } from "@/data/navigation";

type MobileMenuProps = {
  isOpen: boolean;
  onNavigate: () => void;
};

export function MobileMenu({ isOpen, onNavigate }: MobileMenuProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="absolute left-4 right-4 top-[72px] rounded-lg border border-white/10 bg-ink/98 p-2 shadow-luxury md:hidden">
      <nav aria-label="Mobile navigation" className="grid">
        {navigationItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className="border-b border-white/[0.08] px-4 py-4 text-xs font-bold uppercase tracking-[0.08em] text-ivory/72 last:border-b-0 hover:text-ivory"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
