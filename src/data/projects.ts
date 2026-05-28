export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  client: string;
  scope: string;
  timeline: string;
  image: string;
  detailImage: string;
  alt: string;
  highlights: {
    title: string;
    description: string;
  }[];
};

export const projects: Project[] = [
  {
    slug: "maison-aure",
    title: "Maison Aure",
    category: "Identity / Packaging",
    summary: "Brand identity and tactile packaging for a boutique perfumery.",
    description:
      "A boutique perfumery identity built around silence, scent memory, and the feeling of unboxing something rare.",
    client: "Maison Aure",
    scope: "Strategy, identity, packaging",
    timeline: "8 weeks",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1400&auto=format&fit=crop",
    detailImage:
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=80&w=1500&auto=format&fit=crop",
    alt: "Maison Aure perfume display",
    highlights: [
      {
        title: "Signature Mark",
        description:
          "A compressed serif wordmark and monogram system gave the bottles a collected, heirloom presence.",
      },
      {
        title: "Material System",
        description:
          "Soft black stock, blind debossing, and warm metallic accents kept the packaging quiet but memorable.",
      },
      {
        title: "Launch Language",
        description:
          "Short editorial copy created a sense of ritual without drifting into ornate fragrance cliche.",
      },
    ],
  },
  {
    slug: "the-ledger",
    title: "The Ledger",
    category: "Product / Fintech",
    summary: "Fintech app UI with refined motion and clarity-first UX.",
    description:
      "A finance product interface that trades noise for calm, helping users understand money movement at a glance.",
    client: "The Ledger",
    scope: "UX audit, UI system, prototype",
    timeline: "6 weeks",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop",
    detailImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1500&auto=format&fit=crop",
    alt: "The Ledger workspace and product planning",
    highlights: [
      {
        title: "Signal Hierarchy",
        description:
          "Critical balances, movement, and risk alerts were organized into fast scanning zones.",
      },
      {
        title: "Trust Patterns",
        description:
          "Microcopy, confirmation states, and history details reduced uncertainty in high-stakes actions.",
      },
      {
        title: "Component Library",
        description:
          "A lean component set gave product and engineering a shared language for future features.",
      },
    ],
  },
  {
    slug: "aurum-retreat",
    title: "Aurum Retreat",
    category: "Hospitality / Web",
    summary: "Web experience and booking platform for a private coastal resort.",
    description:
      "An immersive hospitality site and booking path for a private coastal resort with a deliberately slower pace.",
    client: "Aurum Retreat",
    scope: "Web strategy, UI, booking UX",
    timeline: "10 weeks",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    detailImage:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1500&auto=format&fit=crop",
    alt: "Aurum Retreat coastline",
    highlights: [
      {
        title: "Editorial Pace",
        description:
          "Long-form destination storytelling was paired with concise decision points throughout the journey.",
      },
      {
        title: "Room Discovery",
        description:
          "Suite pages balanced practical detail with image-led atmosphere and comparison-friendly specs.",
      },
      {
        title: "Private Enquiry",
        description:
          "The booking path supported both direct reservations and high-touch concierge requests.",
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
