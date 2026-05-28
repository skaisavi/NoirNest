export type PackageRecommendation = {
  name: string;
  explanation: string;
  bestFor: string;
  range: string;
};

export const packageRecommendations: PackageRecommendation[] = [
  {
    name: "Moodboard Direction",
    explanation: "Clear visual direction, colour palette, furniture references, and lighting mood.",
    bestFor: "Early-stage rooms that need a confident atmosphere before sourcing begins.",
    range: "Starting from £450",
  },
  {
    name: "Room Concept",
    explanation: "Layout ideas, materials, furniture direction, lighting, and styling plan.",
    bestFor: "Homes that need a complete design direction without full implementation support.",
    range: "Starting from £950",
  },
  {
    name: "Full Atmosphere Plan",
    explanation: "Complete transformation with mood, layout, sourcing, styling, and implementation notes.",
    bestFor: "Rooms that need a deeper plan with practical details and finish-level confidence.",
    range: "Starting from £1,850",
  },
  {
    name: "Boutique Commercial Concept",
    explanation: "Cafes and client-facing spaces that need customer flow, atmosphere, and brand detail.",
    bestFor: "Hospitality spaces where memory, seating behaviour, and visual identity matter.",
    range: "Starting from £2,400",
  },
];
