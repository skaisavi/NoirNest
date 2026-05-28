import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NoirNest - Dark Luxury Interior Design Studio",
    template: "%s - NoirNest",
  },
  description:
    "NoirNest is a dark luxury interior design studio for apartments, bedrooms, boutique cafes, and creative workspaces.",
  openGraph: {
    title: "NoirNest - Dark Luxury Interior Design Studio",
    description:
      "Warm, cinematic interior concepts for compact homes, bedrooms, boutique cafes, and creative studios.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
