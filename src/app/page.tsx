import { FeaturedProjectsSection } from "@/components/sections/home/FeaturedProjectsSection";
import { FinalCTASection } from "@/components/sections/home/FinalCTASection";
import { HomeHeroSection } from "@/components/sections/home/HomeHeroSection";
import { JournalPreviewSection } from "@/components/sections/home/JournalPreviewSection";
import { SignatureServicesSection } from "@/components/sections/home/SignatureServicesSection";
import { MoodQuizSection } from "@/components/sections/MoodQuizSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";

export default function HomePage() {
  return (
    <>
      <HomeHeroSection />
      <SignatureServicesSection />
      <FeaturedProjectsSection />
      <MoodQuizSection />
      <PhilosophySection />
      <JournalPreviewSection />
      <FinalCTASection />
    </>
  );
}
