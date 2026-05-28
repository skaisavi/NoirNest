import { FeaturedArticleSection } from "@/components/sections/journal/FeaturedArticleSection";
import { InteriorTipsSection } from "@/components/sections/journal/InteriorTipsSection";
import { JournalGridSection } from "@/components/sections/journal/JournalGridSection";
import { JournalHeroSection } from "@/components/sections/journal/JournalHeroSection";
import { FinalCTASection } from "@/components/sections/home/FinalCTASection";

export default function JournalPage() {
  return (
    <>
      <JournalHeroSection />
      <FeaturedArticleSection />
      <JournalGridSection />
      <InteriorTipsSection />
      <FinalCTASection />
    </>
  );
}
