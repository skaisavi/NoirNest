"use client";

import Link from "next/link";
import { useState } from "react";

export function StickyCTA() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-40 flex max-w-[calc(100%-2rem)] items-center gap-2 rounded-full border border-gold/15 bg-obsidian/82 p-2 pl-4 text-ivory shadow-luxury backdrop-blur-xl">
      <span className="size-2 rounded-full bg-gold" aria-hidden="true" />
      <Link
        href="/contact"
        className="group text-xs font-extrabold uppercase tracking-[0.1em] text-ivory/78 transition hover:text-ivory"
      >
        Book a consultation <span className="inline-block transition group-hover:translate-x-1">→</span>
      </Link>
      <button
        type="button"
        aria-label="Dismiss consultation button"
        onClick={() => setDismissed(true)}
        className="grid size-7 place-items-center rounded-full text-ivory/45 transition hover:bg-white/5 hover:text-ivory"
      >
        ×
      </button>
    </div>
  );
}
