import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "LLM Fine-tuning for Hazard Processing",
    description: "Natural and man-made hazard classification using RAG, prompt engineering, OpenAI function calling, and LLM fine-tuning with Unsloth. Embeddings generated with Cohere & Hugging Face.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    tags: ["RAG", "LLM Fine-tuning", "OpenAI", "Cohere", "Hugging Face"],
    githubUrl: "https://github.com/louiyo/hazard-classification",
  },
  {
    title: "Transfer Learning for Precision Medicine",
    description: "Industry internship at Metadvice SA developing transfer learning models for cardiovascular disease prediction with large-scale data handling.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop",
    tags: ["Transfer Learning", "MongoDB", "Healthcare AI"],
    publication: "https://dom-pubs.onlinelibrary.wiley.com/doi/10.1111/dom.16029",
  },
  {
    title: "Full-Stack JavaScript Development",
    description: "Freelance full-stack development building modern web applications with React, Next.js, and Prisma for various clients.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    tags: ["React", "Next.js", "Tailwind", "Prisma"],
    nda: true,
  },
  {
    title: "Digital Human Experiment for Memory Research",
    description: "Master thesis at Priestley Lab (EPFL) designing Unity C# experiments for mental time-travel and one-shot learning studies in behavioral neurosciences.",
    image: "src/resources/thesis.png",
    tags: ["Unity", "C#", "Neuroscience", "Experiment Design"],
    liveUrl: "https://www.epfl.ch/labs/gr-priestley/research/",
  },
  {
    title: "Explainable AI for Neural Networks",
    description: "Lab immersion at MATHIS-Lab building XAI tools for understanding task-driven ANNs applied to the proprioceptive pathway.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop",
    tags: ["TensorFlow", "XAI", "Brain Modelling"],
    nda: true,
  },
  {
    title: "Autonomous Assistive Rehabilitation Device",
    description: "Semester project developing an embedded computer vision system on Jetson Nano for safe at-home rehabilitation for spinal cord injury patients.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    tags: ["Python", "Jetson Nano", "Computer Vision", "Embedded"],
  },
  {
    title: "Hate Speech Analysis in US Media",
    description: "Applied Data Analysis project assessing hate speech trends in US newspapers using NLP and sentiment analysis on a corpus of quotations.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop",
    tags: ["NLP", "Sentiment Analysis", "Pandas", "Data Analysis"],
  },
  {
    title: "Retina Model with NEURON & NEST",
    description: "Bachelor project at the Laboratory of Neural Engineering building computational retina models in Python using NEURON and NEST simulators.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
    tags: ["Python", "NEURON", "Brain Modelling"],
  },
  {
    title: "Road Segmentation with CNN",
    description: "Machine learning project implementing U-Net CNN architecture for road segmentation from satellite imagery.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    tags: ["Python", "CNN", "U-Net", "Computer Vision"],
    githubUrl: "https://github.com/louiyo/twohundredbpm",
  },
  {
    title: "MVP of an asymmetric strategy video-game",
    description: "Minimum Viable Product of a video-game built with Unity set in an original dark fantasy universe.",
    image: "src/resources/yspanor.png",
    tags: ["Unity", "C#", "Game Design", "Game development"],
    nda: true,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Portfolio
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in AI, data engineering, and full-stack development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 10}ms`, animationFillMode: 'forwards' }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
