import { FeaturedCaseStudySection } from "@/components/sections/projects/FeaturedCaseStudySection";
import { ProjectFiltersSection } from "@/components/sections/projects/ProjectFiltersSection";
import { ProjectGridSection } from "@/components/sections/projects/ProjectGridSection";
import { ProjectsHeroSection } from "@/components/sections/projects/ProjectsHeroSection";

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHeroSection />
      <ProjectFiltersSection />
      <FeaturedCaseStudySection />
      <ProjectGridSection />
    </>
  );
}
