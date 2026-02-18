/**
 * ExperienceSection Component
 * 
 * Displays a timeline of professional experience and education.
 * Uses an alternating layout for visual interest on desktop,
 * with a vertical timeline connecting all entries.
 * 
 * To modify:
 * - Add/remove experiences in the `experiences` array
 * - Each experience has: title, company, period, description, highlights (tech tags)
 * - The timeline alternates left/right on desktop based on index
 */

import { Briefcase, Calendar, GraduationCap } from "lucide-react";

// ============================================
// Experience Data Configuration
// ============================================
// Add, remove, or modify experiences here.
// The component will automatically render them in order.
const experiences = [
  {
    title: "Scientific Assistant",
    company: "EPFL - Digital Humanities Lab",
    period: "February 2026 - Present",
    description: "Using LLMs to analyze the weaponization of culture online through Wikipedia edits.",
    highlights: ["LLMs", "Digital Humanities", "Wikipedia Analysis", "NLP", "Cultural Studies"],
    icon: "work", // Use "work" for briefcase, "education" for graduation cap
  },
  {
    title: "Freelance Full-Stack & AI Developer",
    company: "Self-Employed",
    period: "2025 - Present",
    description: "Building modern web applications and AI-powered solutions for clients. Specializing in React, Next.js, and LLM integrations for diverse industries.",
    highlights: ["React", "Next.js", "LLM Integration", "Full-Stack", "Unity"],
    icon: "work", // Use "work" for briefcase, "education" for graduation cap
  },
  {
    title: "Master Thesis Researcher",
    company: "Priestley Lab - EPFL",
    period: "February 2024 - August 2024",
    description: "Designed and implemented Unity C# experiments for studying mental time-travel and one-shot learning in humans. Analyzed behavioral data to draw conclusions on memory processes.",
    highlights: ["Unity", "Data analysis", "Behavioral Neuroscience", "Experiment Design"],
    icon: "work",
  },
  {
    title: "Data Scientist Intern",
    company: "METADVICE SA",
    period: "2023 - 2024",
    description: "Developed transfer learning models for cardiovascular disease prediction using large-scale healthcare data. Implemented data preprocessing pipelines and baseline models.",
    highlights: ["Transfer Learning", "Precision medicine", "MongoDB"],
    icon: "work",
  },
  {
    title: "MSc Life Sciences",
    company: "EPFL - Minor in Computational Neurosciences",
    period: "2020 - 2024",
    description: "Advanced studies in life sciences with specialization in computational neurosciences, combining biology with machine learning and data analysis techniques.",
    highlights: ["Computational Neurosciences", "Machine Learning", "Research"],
    icon: "education",
  },
  {
    title: "BSc Life Sciences",
    company: "EPFL",
    period: "2017 - 2020",
    description: "Foundation in life sciences, mathematics, and programming. Developed strong analytical and problem-solving skills through rigorous coursework.",
    highlights: ["Life Sciences", "Mathematics", "Programming"],
    icon: "education",
  },
];

// ============================================
// ExperienceSection Component
// ============================================
const ExperienceSection = () => {
  return (
    // Section with subtle background differentiation
    <section id="experience" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        
        {/* ============================================
            Section Header
            Includes: label, title, and description
            ============================================ */}
        <div className="text-center mb-16">
          {/* Small uppercase label above the main title */}
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Career
          </p>
          
          {/* Main section title */}
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experience
          </h2>
          
          {/* Section description */}
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My personal journey, from research to enterprise solutions.
          </p>
        </div>
        
        {/* ============================================
            Timeline Container
            Max width for readability, centered
            ============================================ */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            
            {/* ============================================
                Timeline Vertical Line
                Positioned on left (mobile) or center (desktop)
                ============================================ */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />
            
            {/* ============================================
                Experience Cards Loop
                Maps through experiences array
                ============================================ */}
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                // Alternating layout: even indexes go right, odd go left on desktop
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* ============================================
                    Timeline Dot
                    Positioned on the timeline line with glow effect
                    ============================================ */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background glow-soft" />
                
                {/* ============================================
                    Experience Card
                    Contains all the experience details
                    ============================================ */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                  <div className={`p-6 rounded-2xl card-gradient border border-border/50 hover:border-primary/30 transition-all duration-300 ${
                    index % 2 === 0 ? '' : 'md:ml-auto'
                  }`}>
                    
                    {/* Period/Date with calendar icon */}
                    <div className={`flex items-center gap-2 text-primary mb-2 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                    
                    {/* Job/Education Title */}
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    
                    {/* Company/Institution with appropriate icon */}
                    <div className={`flex items-center gap-2 text-muted-foreground mb-3 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                      {/* Show graduation cap for education, briefcase for work */}
                      {exp.icon === "education" ? (
                        <GraduationCap className="h-4 w-4" />
                      ) : (
                        <Briefcase className="h-4 w-4" />
                      )}
                      <span className="text-sm">{exp.company}</span>
                    </div>
                    
                    {/* Description text */}
                    <p className="text-muted-foreground text-sm mb-4">
                      {exp.description}
                    </p>
                    
                    {/* ============================================
                        Highlight Tags/Skills
                        Displayed as small pills/badges
                        ============================================ */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
