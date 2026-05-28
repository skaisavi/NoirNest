export type Palette = {
  name: string;
  description: string;
  swatches: {
    label: string;
    value: string;
  }[];
};

export const palettes: Palette[] = [
  {
    name: "Smoke & Walnut",
    description:
      "A structured NoirNest signature: deep black, dark timber, smoked glass, linen softness, and restrained brass warmth.",
    swatches: [
      { label: "Noir black", value: "#050404" },
      { label: "Dark walnut", value: "#3a2418" },
      { label: "Smoked glass", value: "#4a4a42" },
      { label: "Brass", value: "#a8834e" },
      { label: "Linen", value: "#d8cbb4" },
    ],
  },
  {
    name: "Sand & Shadow",
    description:
      "A softer direction with warm beige, stone, espresso depth, sheer curtains, and brushed gold details.",
    swatches: [
      { label: "Warm beige", value: "#c7b89e" },
      { label: "Soft stone", value: "#958b7b" },
      { label: "Espresso", value: "#1b120e" },
      { label: "Sheer curtain", value: "#e2d8c8" },
      { label: "Brushed gold", value: "#b2935b" },
    ],
  },
  {
    name: "Velvet Dusk",
    description:
      "A bedroom-led palette with charcoal, muted plum-brown, velvet depth, antique brass, and soft cream.",
    swatches: [
      { label: "Charcoal", value: "#171615" },
      { label: "Plum-brown", value: "#4b2b2c" },
      { label: "Velvet", value: "#2a2024" },
      { label: "Antique brass", value: "#96774b" },
      { label: "Soft cream", value: "#e7dcc8" },
    ],
  },
  {
    name: "Marble Noir",
    description:
      "A sharper luxury mood built from black marble, champagne, smoked mirror, dark oak, and amber light.",
    swatches: [
      { label: "Black marble", value: "#0a0908" },
      { label: "Champagne", value: "#cfb98a" },
      { label: "Smoked mirror", value: "#57544d" },
      { label: "Dark oak", value: "#2b1b13" },
      { label: "Warm light", value: "#e0a95b" },
    ],
  },
];
