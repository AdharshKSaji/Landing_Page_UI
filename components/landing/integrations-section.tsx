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
  CheckCircle,
  ArrowRight,
} from "lucide-react";

// Group integrations by category for better organization
const integrationCategories = [
  {
    title: "Front-end",
    icon: "🎨",
    iconComponent: Code2,
    technologies: ["React", "Next.js", "Angular", "TypeScript"],
    description: "Modern UI frameworks for exceptional user experiences",
    color: "from-blue-500/10 to-cyan-500/10",
    borderColor: "hover:border-blue-400/30",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    title: "Backend",
    icon: "⚙️",
    iconComponent: Server,
    technologies: ["PHP", "Go", "Node.js", "Django", "Nest.js", "Python"],
    description: "Scalable server-side architecture and APIs",
    color: "from-emerald-500/10 to-teal-500/10",
    borderColor: "hover:border-emerald-400/30",
    gradient: "from-emerald-600 to-teal-500",
  },
  {
    title: "Mobile App",
    icon: "📱",
    iconComponent: Smartphone,
    technologies: ["Swift", "Kotlin", "Java", "Flutter", "React Native"],
    description: "Native and cross-platform mobile excellence",
    color: "from-purple-500/10 to-pink-500/10",
    borderColor: "hover:border-purple-400/30",
    gradient: "from-purple-600 to-pink-500",
  },
  {
    title: "Databases",
    icon: "🗄️",
    iconComponent: Database,
    technologies: ["SQL", "MySQL", "Oracle", "MariaDB", "MongoDB", "Redis", "DynamoDB"],
    description: "High-performance data storage solutions",
    color: "from-orange-500/10 to-amber-500/10",
    borderColor: "hover:border-orange-400/30",
    gradient: "from-orange-600 to-amber-500",
  },
  {
    title: "AI & ML",
    icon: "🤖",
    iconComponent: Brain,
    technologies: ["Python", "TensorFlow", "NumPy", "PyTorch", "OpenCV", "dlib", "CUDA"],
    description: "Intelligent automation and predictive analytics",
    color: "from-violet-500/10 to-indigo-500/10",
    borderColor: "hover:border-violet-400/30",
    gradient: "from-violet-600 to-indigo-500",
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    iconComponent: Cloud,
    technologies: ["AWS", "Docker", "Kubernetes", "Google Cloud", "Microsoft Azure"],
    description: "Enterprise-grade cloud infrastructure and CI/CD",
    color: "from-sky-500/10 to-blue-500/10",
    borderColor: "hover:border-sky-400/30",
    gradient: "from-sky-600 to-blue-500",
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
      color: category.color,
      borderColor: category.borderColor,
      gradient: category.gradient,
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
          "shrink-0 px-7 py-4 rounded-2xl border-2 transition-all duration-500 relative overflow-hidden",
          "hover:shadow-xl hover:shadow-black/5 cursor-default min-w-[140px]",
          "bg-white/50 backdrop-blur-sm",
          isHovered
            ? `${integration.borderColor} scale-[1.03] shadow-lg`
            : "border-gray-200/60 hover:border-gray-300/80"
        )}
        onMouseEnter={() => setHoveredTech(integration.id)}
        onMouseLeave={() => setHoveredTech(null)}
      >
        {/* Friendly gradient background on hover */}
        <div
          className={cn(
            "absolute inset-0 opacity-0 transition-opacity duration-500 rounded-2xl",
            `bg-gradient-to-br ${integration.color}`,
            isHovered && "opacity-100"
          )}
        />

        <div className="relative z-10 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-2">
            <div className={cn(
              "p-1.5 rounded-lg transition-all duration-300",
              isHovered ? "bg-primary/10" : "bg-gray-50"
            )}>
              <IconComponent className={cn(
                "w-4 h-4 transition-colors duration-300",
                isHovered ? "text-primary" : "text-gray-400"
              )} />
            </div>
            <span className={cn(
              "text-base font-semibold transition-all duration-300",
              isHovered 
                ? `bg-gradient-to-r ${integration.gradient} bg-clip-text text-transparent` 
                : "text-gray-700"
            )}>
              {integration.name}
            </span>
          </div>
          
          <span className={cn(
            "text-[10px] font-medium uppercase tracking-wider transition-all duration-300",
            isHovered 
              ? `bg-gradient-to-r ${integration.gradient} bg-clip-text text-transparent` 
              : "text-gray-400"
          )}>
            {integration.category}
          </span>

          {/* Friendly dot indicator */}
          <div className={cn(
            "mt-2.5 h-1 rounded-full transition-all duration-500",
            isHovered ? `w-8 bg-gradient-to-r ${integration.gradient}` : "w-0 bg-transparent"
          )} />
        </div>
      </div>
    );
  };

  return (
    <section
      id="integrations"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white via-gray-50/30 to-white"
    >
      {/* Decorative elements - softer and friendlier */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-50/10 rounded-full blur-3xl" />

        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Header - Left aligned with premium gradient title matching the image */}
        <div className="mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-3 text-sm font-medium text-gray-500 mb-6 bg-white/80 px-4 py-2 rounded-full border border-gray-200/50 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse" />
            <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
              Technology Stack
            </span>
            <span className="text-xs text-gray-400">•</span>
            <span className="text-xs bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-medium">
              Enterprise Ready
            </span>
          </span>

          <h2
            className={`text-4xl lg:text-6xl font-bold tracking-tight transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <span className="block text-gray-800">
              Engineering solutions with
            </span>
            <span className="block bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#f093fb] bg-clip-text text-transparent mt-1 font-extrabold">
              modern technology
            </span>
          </h2>
          
          <p className={`mt-4 text-lg text-gray-500 max-w-2xl transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            We leverage industry-leading tools and frameworks to deliver 
            <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent font-medium"> exceptional digital experiences</span>
          </p>
        </div>

        {/* Category Pills - Friendlier with gradient text */}
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
                  "group px-5 py-2.5 text-sm font-medium rounded-full border-2 transition-all duration-300",
                  "hover:shadow-md hover:scale-[1.02] active:scale-[0.98]",
                  isActive
                    ? `border-[#667eea]/40 bg-gradient-to-r ${category.color} text-[#667eea] shadow-sm`
                    : "border-gray-200/60 bg-white/50 text-gray-600 hover:border-gray-300/80 hover:bg-white/80"
                )}
              >
                <span className="flex items-center gap-2.5">
                  <IconComponent className={cn(
                    "w-4 h-4 transition-all duration-300",
                    isActive ? "text-[#667eea]" : "text-gray-400 group-hover:text-gray-600"
                  )} />
                  <span className={cn(
                    "transition-all duration-300",
                    isActive 
                      ? `bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent` 
                      : "group-hover:bg-gradient-to-r group-hover:from-[#667eea] group-hover:to-[#764ba2] group-hover:bg-clip-text group-hover:text-transparent"
                  )}>
                    {category.title}
                  </span>
                  <span className={cn(
                    "text-xs px-2 py-0.5 rounded-full transition-all duration-300",
                    isActive 
                      ? `bg-gradient-to-r ${category.gradient} text-white` 
                      : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"
                  )}>
                    {category.technologies.length}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Professional marquee rows with better spacing */}
      <div className="w-full space-y-5">
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

      {/* CTA section - Friendly and inviting with gradient text */}
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-16 mt-16">
        <div className={cn(
          "flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/60 shadow-sm transition-all duration-700 delay-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        )}>
          <div className="flex items-center gap-4">
            <div className="p-2 bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 rounded-full">
              <CheckCircle className="w-5 h-5 text-[#667eea]" />
            </div>
            <div>
              <p className="text-sm font-medium">
                <span className="bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Ready to build something amazing?
                </span>
              </p>
              <p className="text-xs text-gray-500">
                Our team is here to help you choose the 
                <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent font-medium"> right technology stack</span>
              </p>
            </div>
          </div>
          <button className="group inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-[#667eea]/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
            Let's Talk
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Bottom subtle gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />

      {/* Bottom decorative line */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-[#667eea]/20 to-transparent pointer-events-none" />
    </section>
  );
}