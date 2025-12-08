import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TechMarquee from "@/components/TechMarquee";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TechMarquee />
        <ProjectsSection />
        <ExperienceSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
