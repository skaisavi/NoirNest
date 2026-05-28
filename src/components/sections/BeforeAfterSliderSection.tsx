"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

const beforeNotes = ["Flat lighting", "Weak zoning", "Cold layout"];
const afterNotes = ["Layered lighting", "Smoked glass", "Warm materials"];

export function BeforeAfterSliderSection() {
  const [position, setPosition] = useState(56);

  return (
    <section className="py-28 md:py-36">
      <Container>
        <div className="mb-12 grid gap-6 md:grid-cols-[0.9fr_0.6fr] md:items-end">
          <div>
            <SectionLabel>Before / After</SectionLabel>
            <h2 className="font-serif text-[clamp(2.5rem,5.4vw,5rem)] font-bold leading-[1] text-ivory">
              See how atmosphere changes everything.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-ivory/62">
            A room does not need to become louder to feel transformed. Sometimes it needs better
            light, warmer materials, and a clearer sense of calm.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.42fr] lg:items-stretch">
          <div className="relative h-[430px] overflow-hidden rounded-2xl border border-gold/12 bg-ink shadow-luxury md:h-[650px]">
            <Image
              src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=1500&auto=format&fit=crop"
              alt="Before room with flatter unfinished lighting"
              fill
              sizes="100vw"
              className="object-cover brightness-[0.95] contrast-95 saturate-[0.65]"
            />
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${position}%` }}
            >
              <div className="relative h-full w-[min(1180px,calc(100vw-2rem))] md:w-[min(1180px,calc(100vw-3rem))]">
                <Image
                  src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1500&auto=format&fit=crop"
                  alt="After room with layered warm luxury lighting"
                  fill
                  sizes="100vw"
                  className="object-cover brightness-[0.78] contrast-110 saturate-[0.82]"
                />
              </div>
            </div>
            <div
              className="absolute inset-y-0 w-px bg-gold shadow-[0_0_28px_rgba(193,161,105,0.55)]"
              style={{ left: `${position}%` }}
            >
              <span className="absolute left-1/2 top-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gold/45 bg-obsidian/80 text-gold shadow-luxury backdrop-blur">
                ↔
              </span>
            </div>
            <div className="absolute left-5 top-5 rounded-full border border-gold/15 bg-obsidian/60 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-gold backdrop-blur">
              After
            </div>
            <div className="absolute bottom-5 right-5 rounded-full border border-white/12 bg-obsidian/55 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-ivory/62 backdrop-blur">
              Before
            </div>
            <input
              aria-label="Compare before and after transformation"
              type="range"
              min="18"
              max="82"
              value={position}
              onChange={(event) => setPosition(Number(event.target.value))}
              className="absolute inset-x-6 bottom-7 z-10 h-8 cursor-ew-resize opacity-0"
            />
          </div>

          <div className="grid gap-4">
            <GlassCard className="p-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-ivory/48">
                Before
              </p>
              <ul className="mt-5 grid gap-3 text-sm text-ivory/62">
                {beforeNotes.map((note) => (
                  <li key={note} className="border-t border-white/10 pt-3">
                    {note}
                  </li>
                ))}
              </ul>
            </GlassCard>
            <GlassCard className="p-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-gold">
                After
              </p>
              <ul className="mt-5 grid gap-3 text-sm text-ivory/72">
                {afterNotes.map((note) => (
                  <li key={note} className="border-t border-gold/10 pt-3">
                    {note}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </div>
      </Container>
    </section>
  );
}
