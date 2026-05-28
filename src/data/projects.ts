export type Project = {
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  alt: string;
};

export const projects: Project[] = [
  {
    title: "The Ember Apartment",
    category: "Private Residence",
    location: "Kensington, London",
    description:
      "A compact apartment transformed with dark walnut, linen textures, warm lighting, and smoked glass zoning.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1400&auto=format&fit=crop",
    alt: "Dark luxury apartment living room with warm lighting",
  },
  {
    title: "Velvet Room",
    category: "Bedroom Design",
    location: "Chelsea, London",
    description:
      "A hotel-inspired bedroom using layered neutrals, curved furniture, low lighting, and soft velvet details.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop",
    alt: "Warm hotel inspired bedroom with layered neutral bedding",
  },
  {
    title: "Cafe Nocturne",
    category: "Boutique Commercial",
    location: "Shoreditch, London",
    description:
      "A small cafe redesigned with intimate seating, dark plaster walls, brass lighting, and editorial styling.",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop",
    alt: "Moody boutique cafe interior with brass lighting",
  },
];
