"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedTetrahedron } from "./animated-tetrahedron";

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`relative border border-foreground transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          onMouseMove={handleMouseMove}
        >
          {/* Spotlight effect */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0,0,0,0.15), transparent 40%)`
            }}
          />
          
          <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-24">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left content */}
              <div className="flex-1">
                <h2 className="text-4xl lg:text-7xl font-display tracking-tight mb-8 leading-[0.95]">
                  Ready to initiate
                  <br />
                  your path towards a brighter future?
                </h2>

                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl">
                  Be assured, your confidentiality is paramount within these walls. 
                  We strive to respond to all enquiries within 24 hours on business days.
                </p>

                <div className="flex flex-col sm:flex-row items-start gap-4">
                  {/* <Button
                    size="lg"
                    className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group"
                  >
                    Yes, I want to talk to an expert
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button> */}
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 px-8 text-base rounded-full border-foreground/20 hover:bg-foreground/5"
                    onClick={() => setShowForm(prev => !prev)}
                  >
                    Make Enquiry Today
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground mt-8 font-mono">
                  📞 +91 99957 73273 &nbsp; | &nbsp; ✉️ info@grandreeves.com
                </p>
              </div>

              {/* Right animation */}
              <div className="hidden lg:flex items-center justify-center w-[500px] h-[500px] -mr-16">
                <AnimatedTetrahedron />
              </div>
            </div>

            {/* Enquiry Form Toggle */}
            {showForm && (
              <div className="mt-12 border border-foreground/10 rounded-xl p-10 bg-white shadow-xl">
                <h3 className="text-3xl font-display mb-2 text-foreground">Drop Us 👋 a Line</h3>
                <p className="text-muted-foreground mb-8 text-lg">
                  Make Enquiry Today — Request Free Quote
                </p>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full border border-foreground/20 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/30"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full border border-foreground/20 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/30"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full border border-foreground/20 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/30"
                    />
                    <input
                      type="text"
                      placeholder="Country"
                      className="w-full border border-foreground/20 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/30"
                    />
                  </div>

                  <textarea
                    placeholder="Your Message"
                    className="w-full border border-foreground/20 px-4 py-3 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-foreground/30"
                  />

                  <div className="flex items-center gap-3">
                    <input type="checkbox" id="captcha" className="h-5 w-5" />
                    <label htmlFor="captcha" className="text-sm text-muted-foreground">
                      I'm not a robot
                    </label>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full font-semibold shadow-md"
                  >
                    Yes, I want to talk to an expert
                  </Button>
                </form>
              </div>
            )}
          </div>

          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-foreground/10" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-foreground/10" />
        </div>
      </div>
    </section>
  );
}
