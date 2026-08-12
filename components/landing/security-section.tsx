"use client";

import { useEffect, useState, useRef } from "react";
import { 
  Shield, 
  Users, 
  Award, 
  TrendingUp, 
  Building, 
  Gavel,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Briefcase,
  FileCheck,
  Star,
  Rocket,
  Coins,
  Hammer
} from "lucide-react";

function AnimatedCounter({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <div ref={ref} className="text-5xl lg:text-7xl font-display tracking-tight bg-gradient-to-r from-slate-950 via-slate-800 to-slate-900 bg-clip-text text-transparent">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
}

const products = [
  {
    name: "Vendor Management System",
    icon: Building,
    description: "Streamline vendor relationships and optimize supply chain operations with intelligent automation.",
    features: ["Automated onboarding", "Performance tracking", "Risk assessment"],
    gradient: "from-blue-500/20 to-cyan-500/20",
    badge: "Efficiency"
  },
  {
    name: "Audit Management System",
    icon: Shield,
    description: "Ensure compliance and automate audit workflows with precision and real-time monitoring.",
    features: ["Real-time monitoring", "Compliance tracking", "Automated reporting"],
    gradient: "from-purple-500/20 to-pink-500/20",
    badge: "Compliance"
  },
  {
    name: "Quality Management System",
    icon: Award,
    description: "Maintain high standards with integrated quality control processes and continuous improvement.",
    features: ["Quality control", "Process optimization", "Continuous improvement"],
    gradient: "from-emerald-500/20 to-teal-500/20",
    badge: "Excellence"
  },
  {
    name: "Customer Relationship Management",
    icon: Users,
    description: "Build lasting relationships with intelligent CRM solutions that drive customer success.",
    features: ["Lead management", "Analytics dashboard", "Automated workflows"],
    gradient: "from-orange-500/20 to-red-500/20",
    badge: "Growth"
  },
  {
    name: "FinTech GoldLoan Management",
    icon: TrendingUp,
    description: "Modernize gold loan processing with secure fintech capabilities and real-time valuation.",
    features: ["Real-time valuation", "Secure processing", "Instant approval"],
    gradient: "from-yellow-500/20 to-amber-500/20",
    badge: "Innovation"
  },
  {
    name: "Auction Management",
    icon: Gavel,
    description: "Powerful auction platforms for seamless bidding and transparent transaction management.",
    features: ["Live bidding", "Secure transactions", "Real-time updates"],
    gradient: "from-indigo-500/20 to-violet-500/20",
    badge: "Transparency"
  },
];

export function SecuritySection() {
  const [time, setTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

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

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary/5 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl" />
        
        {/* Animated floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/20 rounded-full animate-pulse" style={{ animationDuration: "3s" }} />
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-primary/10 rounded-full animate-pulse" style={{ animationDuration: "4s", animationDelay: "1s" }} />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-primary/30 rounded-full animate-pulse" style={{ animationDuration: "2.5s", animationDelay: "0.5s" }} />
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-primary/15 rounded-full animate-pulse" style={{ animationDuration: "3.5s", animationDelay: "1.5s" }} />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-6 mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-foreground/10 bg-foreground/5 backdrop-blur-sm hover:border-primary/20 transition-colors duration-300">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-mono text-muted-foreground">Live • {time.toLocaleTimeString()}</span>
            <span className="w-px h-4 bg-foreground/10" />
            <span className="text-xs font-mono text-primary/60">Enterprise Ready</span>
          </div>
          
          <div className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            <span className="inline-flex items-center gap-2 text-sm font-mono text-primary/80 tracking-widest uppercase mb-4 bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
              <Sparkles className="w-4 h-4" />
              Enterprise Solutions
            </span>
            <h1 className="text-5xl lg:text-7xl font-display tracking-tight leading-[1.1]">
              <span className="bg-gradient-to-r from-slate-950 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                Transform Your Business
              </span>
              <br />
              <span className="text-slate-500 text-3xl lg:text-5xl">
                with Grandreves Enterprise Suite
              </span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive suite of enterprise-grade solutions designed 
              to drive innovation, ensure compliance, and accelerate your digital transformation journey.
            </p>
            
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Trusted by 500+ enterprises</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>99.9% uptime guaranteed</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>24/7 dedicated support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl lg:text-4xl font-display tracking-tight">
                Comprehensive <span className="text-primary">Solutions</span>
              </h2>
              <p className="mt-2 text-muted-foreground">
                Enterprise-grade products built for modern businesses
              </p>
            </div>
            <button className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all group bg-primary/5 px-4 py-2 rounded-lg border border-primary/10 hover:bg-primary/10">
              View all products <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <div
                  key={product.name}
                  className="group relative p-8 rounded-2xl border border-slate-200 bg-slate-50/50 hover:border-primary/20 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors shadow-lg shadow-primary/5">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-xs font-mono text-primary/60 px-2 py-1 rounded-full bg-primary/5 border border-primary/10">
                          Enterprise
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-primary/60 bg-primary/5 px-2.5 py-1 rounded-full border border-primary/10">
                        {product.badge}
                      </div>
                    </div>

                    <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {product.description}
                    </p>

                    <ul className="space-y-2">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground/80 group-hover:text-muted-foreground transition-colors">
                          <CheckCircle className="w-4 h-4 text-primary/60 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 pt-6 border-t border-foreground/5">
                      <button className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors text-sm font-medium group-hover:text-primary group">
                        Learn more 
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center lg:hidden">
          <button className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all group bg-primary/5 px-6 py-3 rounded-lg border border-primary/10 hover:bg-primary/10">
            View all products <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}