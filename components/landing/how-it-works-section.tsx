"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "I",
    title: "Mobile Application Development",
    result:
      "We design and develop high-performance mobile applications that deliver seamless, intuitive experiences across native and cross-platform environments.",
  },
  {
    number: "II",
    title: "Backend Development",
    result:
      "We engineer secure, scalable backend systems, robust APIs, and reliable database architectures that power modern business applications.",
  },
  {
    number: "III",
    title: "Front-End Development",
    result:
      "We develop responsive, scalable web interfaces that deliver fast, accessible, and consistent experiences across devices and browsers.",
  },
  {
    number: "IV",
    title: "AI Development",
    result:
      "We develop intelligent solutions using artificial intelligence, machine learning, and advanced analytics to enable automation, prediction, and smarter business decisions.",
  },
  {
    number: "V",
    title: "Computer Vision Development",
    result:
      "We build computer vision solutions for document recognition, object detection, image analysis, and visual intelligence to enhance digital experiences.",
  },
  {
    number: "VI",
    title: "Team Augmentation",
    result:
      "We provide experienced software developers who integrate seamlessly with your team, strengthen technical capabilities, and accelerate project delivery.",
  },
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  // Auto-rotate steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        const nextStep = (prev + 1) % steps.length;
        setIsExpanded(false);
        return nextStep;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleStepChange = (index: number) => {
    if (index === activeStep) return;
    setActiveStep(index);
    setIsExpanded(false);
  };

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  // Get the full result text
  const fullResult = steps[activeStep].result;
  
  // Extract first sentence (up to first period)
  const firstSentence = fullResult.split('. ')[0] + '.';
  const remainingText = fullResult.substring(firstSentence.length);
  const shouldShowReadMore = fullResult.length > firstSentence.length;

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-foreground text-background overflow-hidden"
    >
      {/* Diagonal lines pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 40px,
              currentColor 40px,
              currentColor 41px
            )`
          }} 
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-background/50 mb-4">
            <span className="w-8 h-px bg-background/30" />
             Process
          </span>
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight">
              Our Services.
              <br />
              <span className="text-background/50 text-3xl md:text-4xl">
                Built to move your business forward.
              </span>
            </h2>
            <p className="text-background/70 text-lg lg:text-xl leading-relaxed max-w-3xl mt-6">
              As a leading software company, we specialize in delivering cutting-edge services that cater to the diverse needs of our clients. Our team of skilled professionals is dedicated to crafting bespoke software solutions, ranging from robust applications to scalable web platforms.
            </p>
          </div>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Steps */}
          <div className="space-y-0">
            {steps.map((step, index) => (
              <button
                key={step.number}
                type="button"
                onClick={() => handleStepChange(index)}
                className={`w-full text-left py-5 border-b border-background/10 transition-all duration-500 group ${
                  activeStep === index ? "opacity-100" : "opacity-40 hover:opacity-70"
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="font-display text-xl text-background/30">
                    {step.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-display group-hover:translate-x-2 transition-transform duration-300">
                      {step.title}
                    </h3>
                    
                    {/* Progress indicator */}
                    {activeStep === index && (
                      <div className="mt-3 h-px bg-background/20 overflow-hidden">
                        <div 
                          className="h-full bg-background w-0"
                          style={{
                            animation: 'progress 5s linear forwards'
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Result display - Reduced height */}
          <div className="relative overflow-hidden rounded-2xl border border-background/10 bg-background/[0.03] p-6 min-h-[120px] flex items-center">
            <div 
              className="w-full"
              style={{ 
                animation: "fadeIn 0.6s ease-out forwards",
              }}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl text-background/20 select-none">→</span>
                <div className="flex-1">
                  <p className="text-background/80 leading-relaxed text-base">
                    {firstSentence}
                    {isExpanded && (
                      <span className="text-background/70">{remainingText}</span>
                    )}
                  </p>
                  
                  {shouldShowReadMore && (
                    <button
                      onClick={toggleReadMore}
                      className="mt-2 inline-flex items-center gap-2 text-xs font-mono text-background/40 hover:text-background/70 transition-colors duration-300 group"
                    >
                      <span className="relative">
                        {isExpanded ? 'Read Less' : 'Read More'}
                        <span className="absolute -bottom-0.5 left-0 w-full h-px bg-background/20 group-hover:bg-background/40 transition-colors duration-300" />
                      </span>
                      <span className={`inline-block transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                        ↓
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}