
"use client";

import { useEffect, useRef, useState } from "react";
import { 
  Smartphone, 
  Server, 
  Monitor, 
  Brain, 
  Eye, 
  Users,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Shield,
  Zap,
  Globe,
  Award,
  TrendingUp
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Mobile Application Development",
    result:
      "We design and develop high-performance mobile applications that deliver seamless, intuitive experiences across native and cross-platform environments.",
    icon: Smartphone,
    tag: "Native & Cross-Platform",
  metrics: "Successful App Deliveries",
    expertise: ["iOS", "Android", "React Native", "Flutter"]
  },
  {
    number: "02",
    title: "Backend Development",
    result:
      "We engineer secure, scalable backend systems, robust APIs, and reliable database architectures that power modern business applications.",
    icon: Server,
    tag: "Scalable Infrastructure",
    metrics: "99.9% Uptime",
    expertise: ["Node.js", "Python", "Java", "Cloud"]
  },
  {
    number: "03",
    title: "Front-End Development",
    result:
      "We develop responsive, scalable web interfaces that deliver fast, accessible, and consistent experiences across devices and browsers.",
    icon: Monitor,
    tag: "Responsive Design",
    metrics: "Digital Web Solutions",
    expertise: ["React", "Next.js", "TypeScript", "Tailwind"]
  },
  {
    number: "04",
    title: "AI Development",
    result:
      "We develop intelligent solutions using artificial intelligence, machine learning, and advanced analytics to enable automation, prediction, and smarter business decisions.",
    icon: Brain,
    tag: "Machine Learning",
    metrics: "Trused AI Models",
    expertise: ["LLM", "NLP", "Computer Vision", "Analytics"]
  },
  {
  number: "05",
  title: "Computer Vision Development",
  result:
    "We build computer vision solutions for document recognition, object detection, image analysis, and visual intelligence to enhance digital experiences.",
  icon: Eye,
  tag: "Visual Intelligence",
  metrics: "Computer Vision Solutions",
  expertise: ["OCR", "Object Detection", "Face Recognition", "Image Processing"]
},
  {
    number: "06",
    title: "Team Augmentation",
    result:
      "We provide experienced software developers who integrate seamlessly with your team, strengthen technical capabilities, and accelerate project delivery.",
    icon: Users,
    tag: "Elite Talent",
    metrics: "Talented Engineers",
    expertise: ["Staff Augmentation", "Dedicated Teams", "Consulting", "Training"]
  },
];

// Trust badges data
const trustBadges = [
  // { icon: Award, label: "ISO 27001 Certified" },
  { icon: Shield, label: "GDPR Compliant" },
  { icon: Globe, label: "Global Presence" },
  { icon: TrendingUp, label: "150% Growth Rate" },
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-rotate steps with smooth progress
  useEffect(() => {
    let startTime = Date.now();
    let animationFrame: number;
    
    const updateProgress = () => {
      const elapsed = (Date.now() - startTime) % 5000;
      const newProgress = (elapsed / 5000) * 100;
      setProgress(newProgress);
      animationFrame = requestAnimationFrame(updateProgress);
    };
    
    animationFrame = requestAnimationFrame(updateProgress);
    
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        const nextStep = (prev + 1) % steps.length;
        setIsExpanded(false);
        startTime = Date.now();
        return nextStep;
      });
    }, 5000);

    return () => {
      clearInterval(interval);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  const handleStepChange = (index: number) => {
    if (index === activeStep) return;
    setActiveStep(index);
    setIsExpanded(false);
    setProgress(0);
  };

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const fullResult = steps[activeStep].result;
  const firstSentence = fullResult.split('. ')[0] + '.';
  const remainingText = fullResult.substring(firstSentence.length);
  const shouldShowReadMore = fullResult.length > firstSentence.length;
  const ActiveIcon = steps[activeStep].icon;

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-foreground text-background overflow-hidden"
    >
      {/* Premium gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background/[0.02] via-transparent to-transparent" />
        <div 
          className="absolute top-0 right-0 w-1/2 h-1/2 opacity-[0.04]"
          style={{
            background: 'radial-gradient(circle, currentColor 0%, transparent 70%)',
          }}
        />
        <div 
          className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-[0.03]"
          style={{
            background: 'radial-gradient(circle, currentColor 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Sophisticated pattern overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 40px,
                currentColor 40px,
                currentColor 41px
              ),
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 40px,
                currentColor 40px,
                currentColor 41px
              )
            `
          }} 
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Header with enhanced premium feel */}
        <div className="mb-16 lg:mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="inline-flex items-center gap-3 text-xs font-mono text-background/30 tracking-[0.2em] uppercase">
              <span className="w-12 h-px bg-background/20" />
              Our Expertise
            </span>
            <Sparkles className="w-4 h-4 text-background/20" />
          </div>
          
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <h2 className="text-5xl lg:text-7xl font-display tracking-tight leading-[1.05]">
                  Our Services.
                  <br />
                  <span className="text-background/30 text-4xl lg:text-5xl font-light block mt-2">
                    Built to move your business forward.
                  </span>
                </h2>
              </div>
              <div className="lg:max-w-md">
                <p className="text-background/50 text-base lg:text-lg leading-relaxed font-light">
                  Enterprise-grade solutions delivered with precision, innovation, and unwavering commitment to excellence.
                </p>
              </div>
            </div>

            {/* Trust badges with enhanced styling */}
            <div className="flex flex-wrap gap-8 mt-10 pt-10 border-t border-background/5">
              {trustBadges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="p-1.5 rounded-full bg-background/5 group-hover:bg-background/10 transition-colors duration-300">
                      <Icon className="w-3.5 h-3.5 text-background/30" />
                    </div>
                    <span className="text-xs text-background/30 font-mono tracking-wide">
                      {badge.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main content with improved layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Steps with enterprise-level interaction */}
          <div className="space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              
              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => handleStepChange(index)}
                  className={`w-full text-left py-6 border-b border-background/5 transition-all duration-700 group relative ${
                    isActive ? "opacity-100" : "opacity-20 hover:opacity-50"
                  }`}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  {isActive && (
                    <div className="absolute -left-0 top-0 bottom-0 w-px bg-background/20">
                      <div 
                        className="w-px bg-background transition-all duration-100 ease-linear"
                        style={{ height: `${progress}%` }}
                      />
                    </div>
                  )}
                  
                  <div className="flex items-start gap-5 pl-4">
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-sm transition-colors duration-500 ${
                        isActive ? "text-background/40" : "text-background/10"
                      }`}>
                        {step.number}
                      </span>
                      <div className={`p-2 rounded-lg transition-all duration-500 ${
                        isActive ? "bg-background/5" : "bg-transparent"
                      }`}>
                        <Icon className={`w-4 h-4 transition-colors duration-500 ${
                          isActive ? "text-background/40" : "text-background/10"
                        }`} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl lg:text-2xl font-display transition-all duration-500 ${
                        isActive ? "translate-x-1" : "group-hover:translate-x-1"
                      }`}>
                        {step.title}
                      </h3>
                      
                      <div className="flex items-center gap-3 mt-1.5">
                        <span className={`text-xs font-mono transition-opacity duration-500 ${
                          isActive ? "opacity-50" : "opacity-0"
                        }`}>
                          {step.tag}
                        </span>
                        {isActive && (
                          <>
                            <span className="w-px h-3 bg-background/10" />
                            <span className="text-xs text-background/20 font-mono">
                              {step.metrics}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                    {isActive && (
                      <CheckCircle2 className="w-4 h-4 text-background/20 flex-shrink-0 mt-1" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Result display with premium card design */}
          <div className="relative">
            <div className="sticky top-8">
              <div className="relative overflow-hidden rounded-2xl border border-background/5 bg-background/[0.02] p-8 min-h-[180px] backdrop-blur-sm">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32">
                  <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-background/5" />
                </div>
                <div className="absolute bottom-0 left-0 w-32 h-32">
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-background/5" />
                </div>
                
                {/* Glow effect */}
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-background/5 blur-3xl" />
                
                <div 
                  className="w-full relative"
                  style={{ 
                    animation: "fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                  }}
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 mt-1">
                      <div className="p-3 rounded-xl bg-background/5">
                        <ActiveIcon className="w-5 h-5 text-background/30" />
                      </div>
                    </div>
                    <div className="flex-1">
                      {/* Service tag */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[10px] font-mono text-background/20 tracking-[0.15em] uppercase">
                          {steps[activeStep].tag}
                        </span>
                        <span className="w-px h-3 bg-background/10" />
                        <span className="text-[10px] font-mono text-background/15 tracking-[0.15em] uppercase">
                          {steps[activeStep].metrics}
                        </span>
                      </div>
                      
                      <p className="text-background/70 leading-relaxed text-base font-light">
                        {firstSentence}
                        {isExpanded && (
                          <span className="text-background/50">{remainingText}</span>
                        )}
                      </p>
                      
                      {/* Expertise tags */}
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {steps[activeStep].expertise.map((item, idx) => (
                          <span 
                            key={idx}
                            className="px-2.5 py-1 text-[10px] font-mono text-background/20 border border-background/5 rounded-full"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                      
                      {shouldShowReadMore && (
                        <button
                          onClick={toggleReadMore}
                          className="mt-4 inline-flex items-center gap-2 text-xs font-mono text-background/20 hover:text-background/50 transition-all duration-300 group"
                        >
                          <span className="relative">
                            {isExpanded ? 'Read Less' : 'Read More'}
                            <span className="absolute -bottom-0.5 left-0 w-full h-px bg-background/5 group-hover:bg-background/20 transition-colors duration-300" />
                          </span>
                          <ArrowRight className={`w-3 h-3 transition-transform duration-300 ${isExpanded ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-6 flex items-center justify-between pt-6 border-t border-background/5">
                <div className="flex items-center gap-4">
                  {/* <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div 
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-foreground bg-background/5 flex items-center justify-center"
                      >
                        <span className="text-[8px] text-background/20 font-mono">●</span>
                      </div>
                    ))}
                  </div> */}
                  <span className="text-xs text-background/20 font-light">
                    Trusted by worldwide enterprises
                  </span>
                </div>
                <button className="group inline-flex items-center gap-2 text-xs font-mono text-background/20 hover:text-background/50 transition-colors duration-300">
                  <span className="relative">
                    Explore all services
                    <span className="absolute -bottom-0.5 left-0 w-full h-px bg-background/5 group-hover:bg-background/20 transition-colors duration-300" />
                  </span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        /* Smooth scroll behavior */
        .sticky {
          position: sticky;
          top: 2rem;
        }

        /* Hover card effect */
        .group:hover .group-hover\\:translate-x-1 {
          transform: translateX(4px);
        }
      `}</style>
    </section>
  );
}