"use client";

import { useEffect, useState, useRef } from "react";

const processSteps = [
  { step: "Requirement Gathering", description: "Define project scope & goals" },
  { step: "UI/UX Design", description: "Create intuitive user experiences" },
  { step: "Prototype", description: "Build interactive mockups" },
  { step: "App Development", description: "Write clean, scalable code" },
  { step: "Quality Assurance", description: "Rigorous testing & validation" },
  { step: "Deployment", description: "Launch to production" },
  { step: "Support & Maintenance", description: "Ongoing optimization & care" },
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
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Process
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              Process We
              <br />
              Follow.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              A streamlined approach from concept to deployment. Our proven 
              methodology ensures quality at every stage of development.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
             <div>
  <div className="text-4xl lg:text-5xl font-display mb-2">100%</div>
  <div className="text-sm text-muted-foreground">Professionalism</div>
</div>
              <div>
                <div className="text-4xl lg:text-5xl font-display mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Quality focus</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-display mb-2">Agile</div>
                <div className="text-sm text-muted-foreground">Methodology</div>
              </div>
            </div>
          </div>

          {/* Right: Process list */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="border border-foreground/10">
              {/* Header */}
              <div className="px-6 py-4 border-b border-foreground/10 flex items-center justify-between">
                <span className="text-sm font-mono text-muted-foreground">Development Process</span>
                <span className="flex items-center gap-2 text-xs font-mono text-green-600">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  In progress
                </span>
              </div>

              {/* Process Steps */}
              <div>
                {processSteps.map((step, index) => (
                  <div
                    key={step.step}
                    className={`px-6 py-5 border-b border-foreground/5 last:border-b-0 flex items-center justify-between transition-all duration-300 ${
                      activeStep === index ? "bg-foreground/[0.02]" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span 
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          activeStep === index ? "bg-foreground" : "bg-foreground/20"
                        }`}
                      />
                      <div>
                        <div className="font-medium">{step.step}</div>
                        <div className="text-sm text-muted-foreground">{step.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}