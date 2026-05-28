export type QuizResult = {
  title: string;
  copy: string;
};

export const quizResults: Record<string, QuizResult> = {
  duskApartment: {
    title: "The Dusk Apartment",
    copy:
      "Your space needs soft zoning, layered lamps, warm neutrals, and a more intentional evening atmosphere.",
  },
  velvetBedroom: {
    title: "The Velvet Bedroom",
    copy:
      "Your direction is soft texture, low lighting, hotel-inspired bedding, and quiet visual comfort.",
  },
  cafeNocturne: {
    title: "Cafe Nocturne",
    copy:
      "Your space needs mood-led seating, darker finishes, memorable lighting, and stronger customer flow.",
  },
  blackStudio: {
    title: "The Black Studio",
    copy:
      "Your space needs flexible zones, acoustic softness, hidden storage, and cinematic but practical lighting.",
  },
};

export const quizQuestions = [
  {
    id: "feeling",
    question: "What should your space feel like?",
    options: ["Calm and hotel-like", "Dark and cinematic", "Warm and lived-in", "Minimal and focused"],
  },
  {
    id: "room",
    question: "What room are you rethinking?",
    options: ["Apartment", "Bedroom", "Cafe", "Studio / workspace"],
  },
  {
    id: "priority",
    question: "What matters most?",
    options: ["Better lighting", "More storage", "Stronger atmosphere", "A full visual refresh"],
  },
] as const;
