import { Button } from "@/components/ui/button";
import { ArrowDown, User } from "lucide-react";

// Helper function for smooth scrolling to sections
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float opacity-40" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-float opacity-30" style={{ animationDelay: '-2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-glow-pulse" />
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.02]" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="opacity-0 animate-fade-in-up">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-6">
            Software Developer
          </p>
        </div>
        
        <h1 className="opacity-0 animate-fade-in-up delay-100 font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <span className="text-foreground">Hi, I'm </span>
          <span className="text-gradient">Camil Hamdane</span>
        </h1>
        
        <p className="opacity-0 animate-fade-in-up delay-200 text-muted-foreground text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto mb-4 font-light">
          AI & Data Engineer | Full Stack Developer
        </p>
        
        <p className="opacity-0 animate-fade-in-up delay-300 text-muted-foreground/70 text-base md:text-lg max-w-xl mx-auto mb-12">
          Building intelligent systems and scalable applications that transform data into meaningful experiences.
        </p>
        
        <div className="opacity-0 animate-fade-in-up delay-400 flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* View Work button — scrolls to projects section */}
          <Button variant="hero" size="xl" onClick={() => scrollToSection("projects")}>
            View Work
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          {/* About Me button — scrolls to about section */}
          <Button variant="heroOutline" size="xl" onClick={() => scrollToSection("about")}>
            <User className="mr-2 h-5 w-5" />
            About Me
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-500">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
