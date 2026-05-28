export type JournalArticle = {
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  image: string;
  alt: string;
};

export const journalArticles: JournalArticle[] = [
  {
    title: "How to Make a Dark Room Feel Warm, Not Heavy",
    category: "Interior Mood",
    excerpt: "Dark interiors work best when light, texture, and contrast are carefully layered.",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
    alt: "Warm dark living room with layered light",
  },
  {
    title: "The Secret to Hotel-Like Bedrooms at Home",
    category: "Bedroom Styling",
    excerpt:
      "Soft lighting, generous bedding, and controlled clutter can completely change how a bedroom feels.",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop",
    alt: "Hotel-like bedroom with soft bedding",
  },
  {
    title: "Why Cafes Need Atmosphere Before Decoration",
    category: "Boutique Commercial",
    excerpt:
      "Customers remember how a space made them feel long before they remember individual furniture pieces.",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop",
    alt: "Atmospheric cafe interior",
  },
  {
    title: "Smoked Glass, Brass, and Walnut: A NoirNest Material Story",
    category: "Materials",
    excerpt: "A closer look at the finishes that create depth, warmth, and quiet luxury.",
    readTime: "3 min read",
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1200&auto=format&fit=crop",
    alt: "Dark materials and warm brass interior details",
  },
  {
    title: "Small Apartment, Big Atmosphere",
    category: "Apartments",
    excerpt: "Compact spaces can feel richer when zoning, lighting, and storage work together.",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    alt: "Compact apartment with warm atmosphere",
  },
  {
    title: "How to Choose a Palette Before Buying Furniture",
    category: "Design Process",
    excerpt:
      "A strong room starts with mood, contrast, and material direction, not random shopping.",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1200&auto=format&fit=crop",
    alt: "Interior palette and furniture direction",
  },
];
