/**
 * ProjectCard Component
 * 
 * A reusable card component for displaying project information.
 * Features:
 * - Project image with hover zoom effect
 * - Title and description
 * - Technology tags
 * - Optional GitHub and live demo links (appear on hover)
 * 
 * Props:
 * - title: Project name
 * - description: Brief project description
 * - image: URL or path to project thumbnail
 * - tags: Array of technology/skill tags
 * - githubUrl: (optional) Link to GitHub repository
 * - liveUrl: (optional) Link to live demo/website
 */

import { ExternalLink, FileText } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Button } from "@/components/ui/button";

// ============================================
// TypeScript Interface for Props
// ============================================
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;  // Optional - some projects may be under NDA
  liveUrl?: string;    // Optional - not all projects have live demos
  nda?: boolean;       // Optional - indicates if project is under NDA
  publication?: string // Optional - indicates if project is published and where
}

// ============================================
// ProjectCard Component
// ============================================
const ProjectCard = ({ title, description, image, tags, githubUrl, liveUrl, nda=false, publication="" }: ProjectCardProps) => {
  return (
    // Main card container with hover effects
    // - card-gradient: custom gradient background from design system
    // - hover:-translate-y-2: subtle lift on hover
    // - hover:shadow-2xl: enhanced shadow on hover
    <div className="group relative rounded-2xl overflow-hidden card-gradient border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-0 hover:shadow-2xl hover:shadow-primary/10">
      
      {/* ============================================
          Image Container
          - Fixed height for consistent card sizes
          - Overflow hidden to contain the zoom effect
          ============================================ */}
      <div className="relative h-48 overflow-hidden bg-background">
        {/* Project thumbnail image */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
        
        {/* ============================================
            Hover Overlay with Action Buttons
            Only appears when hovering over the card
            Contains GitHub and Live Demo links
            ============================================ */}
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 pointer-events-none group-hover:pointer-events-auto will-change-opacity">
          {/* GitHub Link Button - only renders if githubUrl is provided */}
          {githubUrl && (
            <Button 
              variant="outline" 
              size="default"
              asChild
              className="border-primary/50 hover:border-primary hover:bg-primary/10"
            >
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="View on GitHub"
              >
                <SiGithub className="h-5 w-5 mr-2" />
                Link to GitHub
              </a>
            </Button>
          )}
          
          {/* Live Demo Link Button - only renders if liveUrl is provided */}
          {liveUrl && (
            <Button 
              variant="outline" 
              size="icon" 
              asChild 
              className="border-primary/50 hover:border-primary hover:bg-primary/10"
            >
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="View live demo"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </Button>
          )}
          
          {/* Message when no links are available (e.g., NDA projects) */}
          {nda && (
            <span className="text-muted-foreground text-sm px-4 py-2 rounded-lg bg-secondary/50">
              Private Project (NDA)
            </span>
          )}
          {publication && (
            <Button
                variant="outline"
                size="default"
                asChild
                className="border-primary/50 hover:border-primary hover:bg-primary/10"
            >
              <a
                  href={publication}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View publication"
              >
                <FileText className="h-5 w-5 mr-2" />
                Link to Publication
              </a>
            </Button>
          )}
        </div>
      </div>
      
      {/* ============================================
          Card Content Section
          Contains title, description, and tags
          ============================================ */}
      <div className="p-6">
        {/* Project Title - changes color on card hover */}
        <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        {/* Project Description - limited to 2 lines with ellipsis */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        {/* ============================================
            Technology Tags
            Displayed as small rounded badges
            ============================================ */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
