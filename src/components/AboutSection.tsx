/**
 * AboutSection Component
 *
 * Displays an "About Me" section with a personal bio that blends
 * professional tone with personal interests (music, acoustics, sound engineering)
 * and social justice values.
 *
 * Features:
 * - Portrait image with electric-blue overlay/tint
 * - Headline and short bio
 * - Highlight bullets for passions/interests
 * - CTA button to view resume
 * - Responsive layout with balanced text/image composition
 */

import { Button } from "@/components/ui/button";
import {FileText, Mail} from "lucide-react";

// Import image and resume assets so Vite can resolve them properly
import portraitImage from "@/resources/picOfMe.png";
import resumePdf from "@/resources/resume.pdf";

// ============================================
// Highlight/Passion Items Configuration
// ============================================
// These represent areas of focus beyond pure work — passions and values
const highlights = [
  // {
  //   icon: Music,
  //   title: "Sound & Acoustics",
  //   description: "Fascinated by sound engineering, acoustics, and how music shapes our experiences.",
  // },
  // {
  //   icon: Heart,
  //   title: "Social Impact",
  //   description: "Committed to leveraging technology for social justice and meaningful change.",
  // },
  // {
  //   icon: Lightbulb,
  //   title: "Creative Problem-Solving",
  //   description: "Combining analytical thinking with creative approaches to tackle complex challenges.",
  // },
];

// ============================================
// AboutSection Component
// ============================================
const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">

        {/* ============================================
            Section Header
            Consistent with other sections' styling
            ============================================ */}
        <div className="text-center mb-16">
          {/* Small uppercase label above the main title */}
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Get To Know Me
          </p>

          {/* Main section title */}
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>

          {/* Section description */}
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Beyond the code — who I am and what drives me.
          </p>
        </div>

        {/* ============================================
            Main Content: Image + Bio
            Responsive grid layout with image on one side
            ============================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto mb-16">

          {/* ============================================
              Portrait Image Container
              Features electric-blue overlay effect
              ============================================ */}
          <div className="relative group order-1 lg:order-1">
            {/* Outer glow effect behind the image */}
            <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />

            {/* Image container with overlay */}
            <div className="relative overflow-hidden rounded-2xl border border-border/50 group-hover:border-primary/30 transition-all duration-300">
              {/* Portrait image — replace placeholder path with actual portrait */}
              <img
                src={portraitImage}
                alt="Camil Hamdane portrait"
                className="w-full h-auto object-cover aspect-[3/4] sm:aspect-square lg:aspect-[3/4]"
              />

              {/* Electric-blue overlay tint — subtle blend mode keeps image visible */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent mix-blend-overlay pointer-events-none" />

              {/* Additional accent gradient at bottom for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* ============================================
              Bio Text Content
              Headline, bio paragraph, and CTA button
              ============================================ */}
          <div className="order-2 lg:order-2 space-y-6">
            {/* Personal headline */}
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground">
              Engineer by training, <span className="text-gradient">creative by nature</span>
            </h3>

            {/* Bio paragraph — blends professional with personal interests */}
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm Camil, a software developer with a background in life sciences and a deep
                curiosity for how things work, from neural networks to acoustic waves. My journey
                through computational neuroscience taught me to think across disciplines, and I
                bring that same versatile approach to everything I build.
              </p>
              <p>
                When I'm not coding, you'll find me exploring sound engineering and acoustics,
                diving into a niche jazz sub-genre, or organizing musical events that bring dancers together.
                I believe that understanding how music resonates with people makes
                me a better problem-solver both are about patterns, resonance, and finding harmony.
              </p>
              <p>
                I'm also driven by a commitment to social justice and organizing. Technology should empower
                communities and create more equitable outcomes. Whether through the projects I choose
                or how I approach collaboration, I aim to contribute to meaningful, positive change.
              </p>
            </div>

            {/* CTA Button — View Resume */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href={resumePdf} target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-5 w-5" />
                  View Resume
                </a>
              </Button>
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:camil.hamdane@protonmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* ============================================
            Highlight Cards
            Three cards showcasing passions/interests
            ============================================ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="opacity-0 animate-fade-in-up p-6 rounded-2xl card-gradient border border-border/50 hover:border-primary/30 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              {/* Icon with glow effect on hover */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <item.icon className="h-6 w-6 text-primary" />
              </div>

              {/* Highlight title */}
              <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h4>

              {/* Highlight description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

