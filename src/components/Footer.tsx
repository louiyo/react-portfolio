/**
 * Footer Component
 * 
 * The footer section of the portfolio containing:
 * - Call-to-action heading encouraging collaboration
 * - Social media links (GitHub, LinkedIn)
 * - Email contact button
 * - Copyright notice with tech stack credit
 * 
 * To modify:
 * - Update social links by changing the href values
 * - Update email by changing the mailto: link
 * - Modify the tech stack list in the "Made with" section
 */

import { Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {SiGithub, SiLinkedin} from "react-icons/si";

// ============================================
// Footer Component
// ============================================
const Footer = () => {
  // Get current year dynamically for copyright
  const currentYear = new Date().getFullYear();
  
  return (
    // Footer section with ID for navigation anchor
    <footer id="contact" className="py-16 bg-card border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          
          {/* ============================================
              Call-to-Action Header
              Encourages visitors to reach out
              ============================================ */}
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground max-w-md mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          {/* ============================================
              Social Links & Contact Button
              
              To add more social links:
              1. Copy one of the Button components
              2. Change the href to your profile URL
              3. Change the icon import and usage
              4. Update the aria-label for accessibility
              ============================================ */}
          <div className="flex items-center gap-4 mb-12">
            {/* GitHub Link */}
            <Button 
              variant="outline" 
              size="icon" 
              asChild 
              className="h-12 w-12 rounded-full border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <a 
                href="https://github.com/louiyo" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
              >
                <SiGithub className="h-5 w-5" />
              </a>
            </Button>
            
            {/* LinkedIn Link */}
            <Button 
              variant="outline" 
              size="icon" 
              asChild 
              className="h-12 w-12 rounded-full border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <a 
                href="https://linkedin.com/in/camil-hamdane" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
              >
                <SiLinkedin className="h-5 w-5" />
              </a>
            </Button>
            
            {/* Email Contact Button - Primary CTA */}
            <Button variant="glow" size="lg" asChild>
              <a href="mailto:camil.hamdane@protonmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </a>
            </Button>
          </div>
          
          {/* ============================================
              Copyright & Tech Stack Section
              
              Displays:
              - Copyright with current year and name
              - "Built with love" message
              - Tech stack used to build this portfolio
              ============================================ */}
          <div className="w-full border-t border-border/50 pt-8">
            {/* Copyright line */}
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-1 mb-2">
              © {currentYear} Camil Hamdane. Built with
              <Heart className="h-4 w-4 text-primary fill-primary" />
              and code.
            </p>
            
            {/* Tech stack credit - lists the technologies used */}
            <p className="text-muted-foreground/60 text-xs">
              Made with React, TypeScript, Tailwind CSS & Vite
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
