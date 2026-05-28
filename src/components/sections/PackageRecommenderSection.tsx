"use client";

import { useMemo, useState } from "react";
import { packageRecommendations } from "@/data/packages";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { OptionCard } from "@/components/ui/OptionCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

const projectTypes = ["Apartment", "Bedroom", "Cafe", "Studio", "Moodboard only"] as const;
const roomSizes = ["Small", "Medium", "Large"] as const;
const helpLevels = [
  "Mood direction only",
  "Full concept",
  "Styling and sourcing",
  "Complete transformation",
] as const;

function getRecommendation(projectType: string, helpLevel: string) {
  if (projectType === "Cafe") {
    return packageRecommendations[3];
  }

  if (projectType === "Studio") {
    return packageRecommendations[2];
  }

  if (projectType === "Moodboard only" || helpLevel === "Mood direction only") {
    return packageRecommendations[0];
  }

  if (helpLevel === "Complete transformation" || helpLevel === "Styling and sourcing") {
    return packageRecommendations[2];
  }

  return packageRecommendations[1];
}

export function PackageRecommenderSection() {
  const [projectType, setProjectType] = useState("Apartment");
  const [roomSize, setRoomSize] = useState("Medium");
  const [helpLevel, setHelpLevel] = useState("Full concept");

  const recommendation = useMemo(
    () => getRecommendation(projectType, helpLevel),
    [projectType, helpLevel],
  );

  return (
    <section className="py-28 md:py-36">
      <Container>
        <div className="mb-12 max-w-3xl">
          <SectionLabel>Consultation Helper</SectionLabel>
          <h2 className="font-serif text-[clamp(2.5rem,5.4vw,5rem)] font-bold leading-[1] text-ivory">
            Not sure where to start?
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-ivory/64">
            Choose your space and level of support. We&apos;ll suggest the NoirNest package that
            fits best.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <GlassCard className="grid gap-6 p-6 md:p-7">
            <fieldset>
              <legend className="mb-3 text-xs font-extrabold uppercase tracking-[0.14em] text-gold">
                Project type
              </legend>
              <div className="grid gap-3 sm:grid-cols-2">
                {projectTypes.map((type) => (
                  <OptionCard
                    key={type}
                    selected={projectType === type}
                    onClick={() => setProjectType(type)}
                  >
                    {type}
                  </OptionCard>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className="mb-3 text-xs font-extrabold uppercase tracking-[0.14em] text-gold">
                Room size
              </legend>
              <div className="grid gap-3 sm:grid-cols-3">
                {roomSizes.map((size) => (
                  <OptionCard key={size} selected={roomSize === size} onClick={() => setRoomSize(size)}>
                    {size}
                  </OptionCard>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className="mb-3 text-xs font-extrabold uppercase tracking-[0.14em] text-gold">
                Help level
              </legend>
              <div className="grid gap-3 sm:grid-cols-2">
                {helpLevels.map((level) => (
                  <OptionCard
                    key={level}
                    selected={helpLevel === level}
                    onClick={() => setHelpLevel(level)}
                  >
                    {level}
                  </OptionCard>
                ))}
              </div>
            </fieldset>
          </GlassCard>

          <GlassCard className="p-7">
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-gold">
              Recommended package
            </p>
            <h3 className="mt-5 font-serif text-4xl font-bold leading-tight text-ivory">
              {recommendation.name}
            </h3>
            <p className="mt-5 text-base leading-8 text-ivory/70">{recommendation.explanation}</p>
            <div className="mt-6 border-t border-gold/10 pt-5">
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-ivory/42">
                Best for
              </p>
              <p className="mt-2 text-sm leading-7 text-ivory/68">{recommendation.bestFor}</p>
            </div>
            <p className="mt-6 font-serif text-3xl font-bold text-gold">{recommendation.range}</p>
            <p className="mt-4 text-xs leading-6 text-ivory/48">
              Final pricing depends on scope, room size, sourcing depth, and timeline. Selected:
              {" "}
              {roomSize.toLowerCase()} {projectType.toLowerCase()}.
            </p>
          </GlassCard>
        </div>
      </Container>
    </section>
  );
}
