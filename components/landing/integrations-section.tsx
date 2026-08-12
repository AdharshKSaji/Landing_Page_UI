
"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import {
  Code2,
  Server,
  Smartphone,
  Database,
  Brain,
  Cloud,
  Sparkles,
} from "lucide-react";

// Group integrations by category for better organization
const integrationCategories = [
  {
    title: "Front-end",
    icon: "🎨",
    iconComponent: Code2,
    technologies: ["React", "Next.js", "Angular", "TypeScript"],
    description: "Modern UI frameworks for exceptional user experiences"
  },
  {
    title: "Backend",
    icon: "⚙️",
    iconComponent: Server,
    technologies: ["PHP", "Go", "Node.js", "Django", "Nest.js", "Python"],
    description: "Scalable server-side architecture and APIs"
  },
  {
    title: "Mobile App",
    icon: "📱",
    iconComponent: Smartphone,
    technologies: ["Swift", "Kotlin", "Java", "Flutter", "React Native"],
    description: "Native and cross-platform mobile excellence"
  },
  {
    title: "Databases",
    icon: "🗄️",
    iconComponent: Database,
    technologies: ["SQL", "MySQL", "Oracle", "MariaDB", "MongoDB", "Redis", "DynamoDB"],
    description: "High-performance data storage solutions"
  },
  {
    title: "AI & ML",
    icon: "🤖",
    iconComponent: Brain,
    technologies: ["Python", "TensorFlow", "NumPy", "PyTorch", "OpenCV", "dlib", "CUDA"],
    description: "Intelligent automation and predictive analytics"
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    iconComponent: Cloud,
    technologies: ["AWS", "Docker", "Kubernetes", "Google Cloud", "Microsoft Azure"],
    description: "Enterprise-grade cloud infrastructure and CI/CD"
  },
];

// Create a flattened array for marquee with unique IDs
const getFlattenedIntegrations = () => {
  return integrationCategories.flatMap((category) =>
    category.technologies.map((tech) => ({
      id: `${tech}-${category.title}`,
      name: tech,
      category: category.title,
      icon: category.iconComponent,
    }))
  );
};

const allIntegrations = getFlattenedIntegrations();

export function IntegrationsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
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

  const MarqueeItem = ({ integration, reverse = false }: any) => {
    const IconComponent = integration.icon;
    const isHovered = hoveredTech === integration.id;

    return (
      <div
        key={integration.id}
        className={cn(
          "shrink-0 px-8 py-5 border rounded-xl transition-all duration-500 relative overflow-hidden",
          "hover:shadow-lg hover:shadow-primary/10",
          "group cursor-default min-w-[140px]",
          isHovered
            ? "border-primary/40 bg-primary/[0.03] scale-[1.02]"
            : "border-border hover:border-primary/20"
        )}
        onMouseEnter={() => setHoveredTech(integration.id)}
        onMouseLeave={() => setHoveredTech(null)}
      >
        {/* Premium background gradient on hover */}
        <div
          className={cn(
            "absolute inset-0 opacity-0 transition-opacity duration-500",
            "bg-gradient-to-r from-primary/5 via-transparent to-primary/5",
            isHovered && "opacity-100"
          )}
        />

        {/* Subtle border glow */}
        <div
          className={cn(
            "absolute inset-0 opacity-0 transition-opacity duration-500",
            "bg-gradient-to-r from-primary/10 via-transparent to-primary/10 blur-xl",
            isHovered && "opacity-100"
          )}
        />

        <div className="relative z-10 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-2">
            <IconComponent className={cn(
              "w-4 h-4 transition-colors duration-300",
              isHovered ? "text-primary" : "text-muted-foreground/30"
            )} />
            <span className={cn(
              "text-lg font-semibold transition-colors duration-300",
              isHovered ? "text-primary" : "text-foreground"
            )}>
              {integration.name}
            </span>
          </div>
          <span className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-[0.15em]">
            {integration.category}
          </span>

          {/* Animated indicator dot */}
          <div className={cn(
            "mt-2 h-px transition-all duration-500",
            isHovered ? "w-8 bg-primary/30" : "w-0 bg-transparent"
          )} />
        </div>
      </div>
    );
  };

  return (
    <section
      id="integrations"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-background via-background to-background/50"
    >
      {/* Premium background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/3 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.02] rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, currentColor 40px, currentColor 41px),
                             repeating-linear-gradient(90deg, transparent, transparent 40px, currentColor 40px, currentColor 41px)`
          }}
        />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Header with exact same style as example */}
        <div className="mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Technology Stack
          </span>

          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
              }`}
          >
            <span className="block">Engineering solutions with</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-300 to-black dark:from-gray-200 dark:via-gray-400 dark:to-gray-800 font-bold">
              modern technology
            </span>
          </h2>
        </div>

        {/* Category Pills - Quick overview with enhanced interaction */}
        <div
          className={cn(
            "flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          {integrationCategories.map((category, idx) => {
            const IconComponent = category.iconComponent;
            const isActive = activeCategory === category.title;

            return (
              <button
                key={idx}
                onClick={() => setActiveCategory(isActive ? null : category.title)}
                className={cn(
                  "px-4 py-2.5 text-xs font-mono rounded-full border transition-all duration-300",
                  "hover:border-primary/30 hover:bg-primary/5",
                  isActive
                    ? "border-primary/30 bg-primary/5 text-primary"
                    : "border-border/50 bg-secondary/30 text-muted-foreground hover:text-foreground"
                )}
              >
                <span className="flex items-center gap-2">
                  <IconComponent className={cn(
                    "w-3.5 h-3.5 transition-colors duration-300",
                    isActive ? "text-primary" : "text-muted-foreground/40"
                  )} />
                  {category.title}
                  <span className="text-[9px] opacity-40">({category.technologies.length})</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Professional marquee rows */}
      <div className="w-full space-y-6">
        <div
          className={cn(
            "w-full transition-all duration-1000 delay-300",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="flex gap-6 marquee py-3">
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
          <div className="flex gap-6 marquee-reverse py-3">
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

      {/* Enhanced bottom subtle gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none" />

      {/* Bottom decorative line */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent pointer-events-none" />
    </section>
  );
}