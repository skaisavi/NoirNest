export type Service = {
  id: string;
  title: string;
  description: string;
  details: string[];
};

export const services: Service[] = [
  {
    id: "brand-identity",
    title: "Brand Identity",
    description:
      "Naming, positioning, art direction, typography, palette systems, packaging, and launch-ready guidelines.",
    details: ["Naming systems", "Visual identity", "Packaging direction"],
  },
  {
    id: "digital-experience",
    title: "Digital Experience",
    description:
      "Editorial websites, booking journeys, ecommerce direction, landing pages, and responsive interface systems.",
    details: ["Website strategy", "Interface design", "Conversion journeys"],
  },
  {
    id: "product-design",
    title: "Product Design",
    description:
      "UX audits, app flows, component libraries, dashboards, prototypes, and high-fidelity product storytelling.",
    details: ["UX audits", "Product systems", "Prototype design"],
  },
  {
    id: "launch-direction",
    title: "Launch Direction",
    description:
      "Campaign concepts, social art direction, pitch decks, investor narratives, and go-to-market creative support.",
    details: ["Campaign concepts", "Deck systems", "Launch assets"],
  },
];

export const addOns = [
  "Founder deck refinement",
  "Social launch art direction",
  "Photography shot lists",
  "Post-launch design support",
] as const;
