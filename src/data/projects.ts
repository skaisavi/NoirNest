export type Project = {
  title: string;
  category: string;
  filter: "Apartments" | "Bedrooms" | "Cafes" | "Studios";
  location: string;
  description: string;
  image: string;
  alt: string;
  mood: string;
  materials: string;
  lighting: string;
};

export const projects: Project[] = [
  {
    title: "The Ember Apartment",
    category: "Apartments",
    filter: "Apartments",
    location: "Kensington, London",
    description:
      "A compact apartment transformed with dark walnut, linen textures, warm lighting, and smoked glass zoning.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1400&auto=format&fit=crop",
    alt: "Dark luxury apartment living room with warm lighting",
    mood: "Warm, intimate, structured",
    materials: "Dark walnut · smoked glass · linen",
    lighting: "Low lamps · wall glow · brass warmth",
  },
  {
    title: "Velvet Room",
    category: "Bedrooms",
    filter: "Bedrooms",
    location: "Chelsea, London",
    description:
      "A hotel-inspired bedroom using layered neutrals, curved furniture, low lighting, and soft velvet details.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop",
    alt: "Warm hotel inspired bedroom with layered neutral bedding",
    mood: "Soft, restful, hotel-like",
    materials: "Velvet · boucle · sheer curtain",
    lighting: "Low pendants · bedside glow · shaded lamps",
  },
  {
    title: "Cafe Nocturne",
    category: "Cafes",
    filter: "Cafes",
    location: "Shoreditch, London",
    description:
      "A small cafe redesigned with intimate seating, dark plaster walls, brass lighting, and editorial styling.",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop",
    alt: "Moody boutique cafe interior with brass lighting",
    mood: "Social, memorable, nocturnal",
    materials: "Dark plaster · brass · leather",
    lighting: "Table pools · counter glow · warm halos",
  },
  {
    title: "Black Studio",
    category: "Studios",
    filter: "Studios",
    location: "Hackney, London",
    description:
      "A content studio designed with flexible backdrops, acoustic softness, hidden storage, and dramatic lighting.",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1200&auto=format&fit=crop",
    alt: "Moody dark creative studio with desk and warm light",
    mood: "Focused, minimal, cinematic",
    materials: "Dark oak · acoustic fabric · smoked mirror",
    lighting: "Track light · desk pools · soft backlight",
  },
  {
    title: "Sand & Smoke Loft",
    category: "Apartments",
    filter: "Apartments",
    location: "Manchester",
    description:
      "A loft refreshed with warm beige textiles, smoked mirrors, sculptural lighting, and minimal furniture.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
    alt: "Warm beige loft interior with sculptural lighting",
    mood: "Airy, edited, softly dramatic",
    materials: "Warm beige · smoked mirror · stone",
    lighting: "Sculptural pendants · curtain glow · table lamps",
  },
  {
    title: "Maison Dusk",
    category: "Apartments",
    filter: "Apartments",
    location: "Notting Hill, London",
    description:
      "A full-home interior concept balancing Parisian warmth, black accents, antique brass, and soft stone.",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1200&auto=format&fit=crop",
    alt: "Elegant dark apartment with soft stone and brass accents",
    mood: "Parisian, warm, collected",
    materials: "Soft stone · antique brass · black accents",
    lighting: "Picture lights · shaded lamps · evening glow",
  },
];
