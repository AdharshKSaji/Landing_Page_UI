
"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

// Group integrations by category for better organization
const integrationCategories = [
  {
    title: "Front-end",
    icon: "🎨",
    technologies: ["React", "Next.js", "Angular", "TypeScript"],
  },
  {
    title: "Backend",
    icon: "⚙️",
    technologies: ["PHP", "Go", "Node.js", "Django", "Nest.js", "Python"],
  },
  {
    title: "Mobile App",
    icon: "📱",
    technologies: ["Swift", "Kotlin", "Java", "Flutter", "React Native"],
  },
  {
    title: "Databases",
    icon: "🗄️",
    technologies: ["SQL", "MySQL", "Oracle", "MariaDB", "MongoDB", "Redis", "DynamoDB"],
  },
  {
    title: "AI & ML",
    icon: "🤖",
    technologies: ["Python", "TensorFlow", "NumPy", "PyTorch", "OpenCV", "dlib", "CUDA"],
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    technologies: ["AWS", "Docker", "Kubernetes", "Google Cloud", "Microsoft Azure"],
  },
];

// Create a flattened array for marquee with unique IDs
const getFlattenedIntegrations = () => {
  return integrationCategories.flatMap((category) =>
    category.technologies.map((tech) => ({
      id: `${tech}-${category.title}`,
      name: tech,
      category: category.title,
    }))
  );
};

const allIntegrations = getFlattenedIntegrations();

export function IntegrationsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const MarqueeItem = ({ integration, reverse = false }: any) => (
    <div
      key={integration.id}
      className={cn(
        "shrink-0 px-8 py-5 border rounded-xl transition-all duration-500 relative overflow-hidden",
        "hover:shadow-lg hover:shadow-primary/10",
        "group cursor-default",
        hoveredTech === integration.id
          ? "border-primary/50 bg-primary/[0.03] scale-[1.02]"
          : "border-border hover:border-primary/30"
      )}
      onMouseEnter={() => setHoveredTech(integration.id)}
      onMouseLeave={() => setHoveredTech(null)}
    >
      {/* Background gradient on hover */}
      <div
        className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-500",
          "bg-gradient-to-r from-primary/5 via-transparent to-primary/5",
          hoveredTech === integration.id && "opacity-100"
        )}
      />
      
      <div className="relative z-10 flex flex-col items-center min-w-[120px]">
        <span className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
          {integration.name}
        </span>
        <span className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider mt-1">
          {integration.category}
        </span>
      </div>
    </div>
  );

  return (
    <section
      id="integrations"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-background via-background to-background/50"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={cn(
            "text-center max-w-4xl mx-auto mb-20 lg:mb-28 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-sm font-mono text-primary">Technology Stack</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
            Engineering solutions with
            <br />
            <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              modern technology
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Leveraging cutting-edge technologies and proven expertise to deliver
            secure, scalable, and reliable digital solutions.
          </p>
        </div>

        {/* Category Pills - Quick overview */}
        <div
          className={cn(
            "flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          {integrationCategories.map((category, idx) => (
            <span
              key={idx}
              className="px-4 py-2 text-xs font-mono rounded-full bg-secondary/50 border border-border/50 text-muted-foreground hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
            >
              {category.icon} {category.title}
            </span>
          ))}
        </div>
      </div>

      {/* Marquee rows */}
      <div className="w-full space-y-6">
        <div
          className={cn(
            "w-full transition-all duration-1000 delay-300",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="flex gap-6 marquee py-2">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-6 shrink-0">
                {allIntegrations.map((integration) => (
                  <MarqueeItem
                    key={`${integration.id}-${setIndex}`}
                    integration={integration}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div
          className={cn(
            "w-full transition-all duration-1000 delay-500",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="flex gap-6 marquee-reverse py-2">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-6 shrink-0">
                {[...allIntegrations].reverse().map((integration) => (
                  <MarqueeItem
                    key={`${integration.id}-reverse-${setIndex}`}
                    integration={integration}
                    reverse
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom subtle gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}