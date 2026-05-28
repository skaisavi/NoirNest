"use client";

import { useMemo, useState } from "react";
import { quizQuestions, quizResults } from "@/data/quizResults";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { OptionCard } from "@/components/ui/OptionCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

type Answers = Record<string, string>;

function getResultKey(answers: Answers) {
  if (answers.room === "Cafe" || answers.priority === "Stronger atmosphere") {
    return "cafeNocturne";
  }

  if (answers.room === "Studio / workspace" || answers.feeling === "Minimal and focused") {
    return "blackStudio";
  }

  if (answers.room === "Bedroom" || answers.feeling === "Warm and lived-in") {
    return "velvetBedroom";
  }

  return "duskApartment";
}

export function MoodQuizSection() {
  const [answers, setAnswers] = useState<Answers>({});

  const result = useMemo(() => {
    if (Object.keys(answers).length < quizQuestions.length) {
      return null;
    }

    return quizResults[getResultKey(answers)];
  }, [answers]);

  function updateAnswer(questionId: string, value: string) {
    setAnswers((current) => ({ ...current, [questionId]: value }));
  }

  return (
    <section
      id="mood-quiz"
      className="border-y border-gold/10 bg-[linear-gradient(180deg,#0d0b0a,#080706)] py-28 md:py-36"
    >
      <Container>
        <div className="mb-12 max-w-3xl">
          <SectionLabel>Mood Quiz</SectionLabel>
          <h2 className="font-serif text-[clamp(2.5rem,5.4vw,5rem)] font-bold leading-[1] text-ivory">
            Find your interior mood.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-ivory/64">
            Answer a few quiet questions and discover which NoirNest direction fits your space.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-5">
            {quizQuestions.map((question, questionIndex) => (
              <GlassCard key={question.id} className="p-6">
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-gold/80">
                  0{questionIndex + 1}
                </p>
                <h3 className="mt-3 font-serif text-2xl font-bold text-ivory">
                  {question.question}
                </h3>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {question.options.map((option) => (
                    <OptionCard
                      key={option}
                      selected={answers[question.id] === option}
                      onClick={() => updateAnswer(question.id, option)}
                    >
                      {option}
                    </OptionCard>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>

          <GlassCard className="p-7 lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-gold">
              Your direction
            </p>
            {result ? (
              <>
                <h3 className="mt-5 font-serif text-4xl font-bold leading-tight text-ivory">
                  {result.title}
                </h3>
                <p className="mt-5 text-base leading-8 text-ivory/68">{result.copy}</p>
                <Button href="#contact" className="mt-7">
                  Start with this mood
                </Button>
              </>
            ) : (
              <p className="mt-5 text-base leading-8 text-ivory/58">
                Choose one answer from each question and your NoirNest mood will appear here.
              </p>
            )}
          </GlassCard>
        </div>
      </Container>
    </section>
  );
}
