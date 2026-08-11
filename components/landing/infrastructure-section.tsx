
"use client";

import { useEffect, useState, useRef } from "react";
import { CheckCircle2, Clock, Zap, Shield, TrendingUp, ArrowRight } from "lucide-react";

const processSteps = [
  { 
    step: "Requirement Analysis & Strategy", 
    description: "Comprehensive assessment of business needs, technical requirements, and project objectives to establish a clear development roadmap."
  },
  { 
    step: "UI/UX Design & Prototyping", 
    description: "User-centric design approach creating intuitive interfaces, seamless user experiences, and interactive prototypes for stakeholder validation."
  },
  { 
    step: "Architecture & Prototype Development", 
    description: "Designing scalable system architecture and developing functional prototypes to validate technical approaches and user flows."
  },
  { 
    step: "Agile Development & Coding", 
    description: "Iterative development using agile methodologies, ensuring clean, maintainable code with continuous integration and delivery practices."
  },
  { 
    step: "Quality Assurance & Testing", 
    description: "Rigorous testing protocols including functional, performance, security, and user acceptance testing to ensure enterprise-grade reliability."
  },
  { 
    step: "Deployment & Integration", 
    description: "Strategic deployment planning with seamless integration into existing infrastructure, ensuring minimal disruption and optimal performance."
  },
  { 
    step: "Maintenance & Continuous Support", 
    description: "Ongoing technical support, performance monitoring, regular updates, and continuous optimization to ensure long-term success and scalability."
  },
];

export function InfrastructureSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-background via-background to-background/50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-secondary/5 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="mb-6">
              <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
                <span className="w-8 h-px bg-gradient-to-r from-foreground/30 to-transparent" />
                Our Methodology
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-6 leading-[1.1]">
              Streamlined Development
              <br />
              <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
                Lifecycle.
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg">
              Our proven development methodology combines industry best practices with agile principles, 
              ensuring transparent, efficient, and high-quality delivery from concept to deployment and beyond.
            </p>

            {/* Stats with icons */}
            <div className="grid grid-cols-3 gap-6">
              <div className="group p-4 rounded-xl border border-foreground/5 hover:border-foreground/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-4 h-4 text-primary/60" />
                  </div>
                </div>
                <div className="text-2xl lg:text-3xl font-display mb-1">100%</div>
                <div className="text-xs text-muted-foreground font-mono tracking-wide">Client Commitment</div>
              </div>
              
              <div className="group p-4 rounded-xl border border-foreground/5 hover:border-foreground/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-4 h-4 text-primary/60" />
                  </div>
                </div>
                <div className="text-2xl lg:text-3xl font-display mb-1">100%</div>
                <div className="text-xs text-muted-foreground font-mono tracking-wide">Quality Assurance</div>
              </div>
              
              <div className="group p-4 rounded-xl border border-foreground/5 hover:border-foreground/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-4 h-4 text-primary/60" />
                  </div>
                </div>
                <div className="text-2xl lg:text-3xl font-display mb-1">Agile</div>
                <div className="text-xs text-muted-foreground font-mono tracking-wide">Development</div>
              </div>
            </div>
          </div>

          {/* Right: Process list */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="border border-foreground/10 rounded-2xl overflow-hidden bg-background/50 backdrop-blur-sm shadow-xl shadow-foreground/5">
              {/* Header */}
              <div className="px-6 py-5 border-b border-foreground/10 flex items-center justify-between bg-foreground/[0.02]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-primary/60" />
                  </div>
                  <span className="text-sm font-mono text-muted-foreground">Development Lifecycle</span>
                </div>
                <span className="flex items-center gap-2 text-xs font-mono text-emerald-600 bg-emerald-50/50 px-3 py-1.5 rounded-full border border-emerald-200/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  In Progress
                </span>
              </div>

              {/* Process Steps */}
              <div className="divide-y divide-foreground/5">
                {processSteps.map((step, index) => (
                  <div
                    key={step.step}
                    className={`px-6 py-5 flex items-center justify-between transition-all duration-500 group ${
                      activeStep === index 
                        ? "bg-gradient-to-r from-primary/[0.03] to-transparent" 
                        : "hover:bg-foreground/[0.01]"
                    }`}
                  >
                    <div className="flex items-center gap-4 flex-1">
                      {/* Step indicator */}
                      <div className="relative flex-shrink-0">
                        {activeStep === index ? (
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                          </div>
                        ) : (
                          <div className="w-10 h-10 rounded-full border-2 border-foreground/10 flex items-center justify-center group-hover:border-foreground/20 transition-colors duration-300">
                            <span className="text-xs font-mono text-muted-foreground/40">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                          </div>
                        )}
                        
                        {/* Progress line */}
                        {index < processSteps.length - 1 && (
                          <div className={`absolute left-1/2 -translate-x-1/2 top-full w-0.5 h-6 transition-colors duration-500 ${
                            activeStep === index ? "bg-primary/20" : "bg-foreground/5"
                          }`} />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-0.5">
                          <span className="text-sm font-medium">{step.step}</span>
                          {activeStep === index && (
                            <span className="text-[10px] font-mono text-primary/60 bg-primary/5 px-2 py-0.5 rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-muted-foreground leading-relaxed">{step.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-foreground/10 bg-foreground/[0.02] flex items-center justify-end">
                <button className="text-xs font-mono text-primary/60 hover:text-primary transition-colors duration-300 flex items-center gap-1.5 group">
                  Explore our process
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}