"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield } from "lucide-react";
import { AnimatedSphere } from "./animated-sphere";

const words = ["transform", "grow", "accelerate", "lead"];

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Gradient background orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[150px] opacity-20 pointer-events-none bg-gradient-radial from-blue-500/20 to-transparent" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-15 pointer-events-none bg-gradient-radial from-purple-500/15 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[200px] opacity-5 pointer-events-none bg-gradient-radial from-blue-400/10 to-transparent" />
      
      {/* Animated sphere background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] opacity-30 pointer-events-none">
        <AnimatedSphere />
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40">
        {/* Eyebrow */}
        <div 
          className={`mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-400 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm px-5 py-2.5 rounded-full border border-slate-200/50 dark:border-slate-800/50 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
            </span>
            Enterprise-grade solutions for modern businesses
          </span>
        </div>
        
        {/* Main headline */}
        <div className="mb-10">
          <h1 
            className={`text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.1] tracking-tight transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block text-slate-900 dark:text-white">
              We build digital solutions
            </span>
            <span className="block mt-3 text-slate-700 dark:text-slate-300">
              that enable businesses to{" "}
              <span className="relative inline-block min-w-[120px]">
                <span 
                  key={wordIndex}
className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-600 to-gray-300 dark:from-white dark:via-gray-400 dark:to-gray-700 font-bold"                >
                  {words[wordIndex]}
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent rounded-full" />
              </span>
            </span>
          </h1>
        </div>
        
        {/* Description and CTAs */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <p 
              className={`text-lg lg:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Intelligent technology that moves your business forward.
              <span className="block mt-3 text-slate-500 dark:text-slate-500">
                From launch to scale, we build secure solutions for lasting impact.
              </span>
            </p>
          </div>
          
          {/* CTAs */}
          <div 
            className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-base font-semibold rounded-xl"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-900/50 px-8 py-6 text-base font-semibold rounded-xl"
            >
              <Zap className="mr-2 h-4 w-4" />
              View Our Work
            </Button>
          </div>
        </div>
      </div>
      
      {/* Stats marquee */}
      <div 
        className={`absolute bottom-24 left-0 right-0 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10" />
          
          <div className="flex gap-12 marquee whitespace-nowrap overflow-hidden">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-12">
                {[
                  { value: "20 days", label: "saved on builds" },
                  { value: "98%", label: "faster deployment" },
                  { value: "300%", label: "throughput increase" },
                  { value: "6x", label: "faster to ship" },
                ].map((stat) => (
                  <div key={`${stat.value}-${i}`} className="flex items-baseline gap-4 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm px-6 py-4 rounded-xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm">
                    <span className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                      {stat.value}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <button 
          className="flex flex-col items-center gap-2 group"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <div className="w-6 h-10 rounded-full border-2 border-slate-300 dark:border-slate-700 flex items-start justify-center p-1.5 group-hover:border-slate-400 dark:group-hover:border-slate-600 transition-colors">
            <div className="w-1 h-2 rounded-full bg-gradient-to-b from-blue-500 to-indigo-500 animate-scroll-down" />
          </div>
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-slate-400 dark:text-slate-600 group-hover:text-slate-500 dark:group-hover:text-slate-500 transition-colors">
            Scroll
          </span>
        </button>
      </div>

      {/* Custom styles */}
      <style jsx>{`
        @keyframes scroll-down {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(8px); opacity: 0; }
        }
        .animate-scroll-down {
          animation: scroll-down 1.5s ease-in-out infinite;
        }
        .bg-gradient-radial {
          background-image: radial-gradient(circle, var(--tw-gradient-stops));
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee {
          animation: marquee 30s linear infinite;
          display: flex;
        }
      `}</style>
    </section>
  );
}