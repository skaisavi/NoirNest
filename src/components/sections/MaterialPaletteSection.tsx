"use client";

import { useState } from "react";
import { palettes } from "@/data/palettes";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Swatch } from "@/components/ui/Swatch";
import { cn } from "@/lib/utils";

export function MaterialPaletteSection() {
  const [activePalette, setActivePalette] = useState(palettes[0]);

  return (
    <section
      id="palette"
      className="border-y border-gold/10 bg-[radial-gradient(circle_at_18%_20%,rgba(193,161,105,0.08),transparent_25rem),linear-gradient(180deg,#0b0908,#0d0b0a)] py-28 md:py-36"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <SectionLabel>Material Palette</SectionLabel>
            <h2 className="font-serif text-[clamp(2.5rem,5.4vw,5rem)] font-bold leading-[1] text-ivory">
              Choose the atmosphere before the furniture.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-ivory/64">
              Explore the material stories that shape our rooms, from smoked glass and walnut to
              soft stone and brass.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {palettes.map((palette) => (
              <button
                key={palette.name}
                type="button"
                aria-pressed={activePalette.name === palette.name}
                onClick={() => setActivePalette(palette)}
                className={cn(
                  "rounded-xl border p-4 text-left transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/70",
                  activePalette.name === palette.name
                    ? "border-gold/55 bg-gold/10 text-ivory"
                    : "border-gold/10 bg-panel/70 text-ivory/62 hover:border-gold/35 hover:text-ivory",
                )}
              >
                <span className="font-serif text-xl font-bold">{palette.name}</span>
              </button>
            ))}
          </div>
        </div>
        <GlassCard className="mt-10 grid gap-8 p-6 md:grid-cols-[0.8fr_1.2fr] md:p-8">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-gold">
              {activePalette.name}
            </p>
            <p className="mt-4 text-lg leading-8 text-ivory/72">{activePalette.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
            {activePalette.swatches.map((swatch) => (
              <Swatch key={swatch.label} {...swatch} />
            ))}
          </div>
        </GlassCard>
      </Container>
    </section>
  );
}
