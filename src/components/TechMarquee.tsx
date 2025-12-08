import { Brain, Database } from "lucide-react";
import {
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiR,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiUnity,
  SiSharp,
  SiGit,
} from "react-icons/si";
import { TbMathFunction } from "react-icons/tb";

const technologies = [
  { name: "Python", icon: SiPython },
  { name: "LLM/AI", icon: Brain },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "PyTorch", icon: SiPytorch },
  { name: "R", icon: SiR },
  { name: "MATLAB", icon: TbMathFunction },
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "SQL", icon: Database },
  { name: "Unity", icon: SiUnity },
  { name: "C#", icon: SiSharp },
  { name: "Git", icon: SiGit },
  { name: "TypeScript", icon: SiTypescript },
];

const TechMarquee = () => {
  return (
    <section className="py-16 bg-secondary/30 border-y border-border/50 overflow-hidden">
      <div className="container mx-auto px-6 mb-8">
        <h2 className="text-center text-muted-foreground text-sm uppercase tracking-widest font-medium">
          Technologies I Work With
        </h2>
      </div>
      
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* Marquee container */}
        <div className="flex marquee">
          {/* First set */}
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-3 px-8 py-4 mx-4 rounded-xl glass group hover:border-primary/50 transition-all duration-300 cursor-default"
            >
              <tech.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              <span className="text-foreground font-medium whitespace-nowrap">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
