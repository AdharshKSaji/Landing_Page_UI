"use client";

import { useEffect, useRef, useState } from "react";
import {
  Smartphone,
  Code2,
  Monitor,
  Brain,
  Eye,
  Users,
  ArrowRight,
  Zap,
  MonitorSmartphone,
  UserRound,
} from "lucide-react";

const steps = [
  {
    number: "I",
    title: "Mobile Application Development",
    icon: Smartphone,
    result:
      "We design and develop high-performance mobile applications that deliver seamless, intuitive experiences across native and cross-platform environments.",
  },
  {
    number: "II",
    title: "Backend Development",
    icon: Code2,
    result:
      "We engineer secure, scalable backend systems, robust APIs, and reliable database architectures that power modern business applications.",
  },
  {
    number: "III",
    title: "Front-End Development",
    icon: Monitor,
    result:
      "We develop responsive, scalable web interfaces that deliver fast, accessible, and consistent experiences across devices and browsers.",
  },
  {
    number: "IV",
    title: "AI Development",
    icon: Brain,
    result:
      "We develop intelligent solutions using artificial intelligence, machine learning, and advanced analytics to enable automation, prediction, and smarter business decisions.",
  },
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      // { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const activeService = steps[activeStep] || steps[0];
  const ActiveIcon = activeService?.icon;

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#0a1a3a] via-[#06112a] to-[#020611] text-white pt-10 pb-20 lg:pt-14 lg:pb-28"
    >
      {/* =========================================================
          BACKGROUND - Lighter gradient with more proportions at top
      ========================================================== */}

      {/* Main radial glow - lighter and with gradient emphasis at top */}
      <div className="pointer-events-none absolute inset-0">
        {/* Top glow - more prominent */}
        <div className="absolute left-[30%] top-[-10%] h-[600px] w-[600px] rounded-full bg-blue-400/[0.15] blur-[140px]" />
        <div className="absolute right-[10%] top-[-5%] h-[500px] w-[500px] rounded-full bg-indigo-400/[0.10] blur-[120px]" />
        
        {/* Mid section glows */}
        <div className="absolute left-[45%] top-[30%] h-[400px] w-[400px] rounded-full bg-blue-300/[0.08] blur-[130px]" />
        <div className="absolute left-[60%] top-[40%] h-[350px] w-[350px] rounded-full bg-cyan-400/[0.06] blur-[110px]" />
        
        {/* Bottom glows - less prominent */}
        <div className="absolute right-[-10%] bottom-[-10%] h-[400px] w-[400px] rounded-full bg-blue-400/[0.05] blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[350px] w-[350px] rounded-full bg-blue-500/[0.04] blur-[130px]" />
      </div>

      {/* Gradient overlay - more light at top */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-400/[0.06] via-transparent to-transparent" />

      {/* Diagonal lines - lighter visibility */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              -45deg,
              transparent 0px,
              transparent 44px,
              rgba(150,200,255,0.5) 44px,
              rgba(150,200,255,0.5) 45px
            )
          `,
        }}
      />

      {/* Top-right curved lines - lighter and more visible at top */}
      <div className="pointer-events-none absolute -right-32 -top-20 h-[450px] w-[650px] opacity-[0.18]">
        {[0, 1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="absolute right-0 rounded-full border-t border-blue-300/40"
            style={{
              width: `${400 + item * 45}px`,
              height: `${220 + item * 35}px`,
              top: `${item * 25}px`,
              transform: "rotate(-25deg)",
            }}
          />
        ))}
      </div>

      {/* Bottom-left curved lines - less visible */}
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[600px] opacity-[0.08]">
        {[0, 1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="absolute bottom-0 rounded-full border-b border-blue-300/25"
            style={{
              width: `${400 + item * 50}px`,
              height: `${180 + item * 35}px`,
              left: `${item * 20}px`,
              transform: "rotate(-25deg)",
            }}
          />
        ))}
      </div>

      {/* Subtle top highlight gradient */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-blue-400/[0.04] via-blue-300/[0.02] to-transparent" />

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* =====================================================
            MAIN GRID
        ====================================================== */}

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">
          {/* ===================================================
              LEFT — SERVICES & HEADER
          ==================================================== */}

          <div className="flex flex-col lg:h-full lg:justify-between">
            {/* HEADER */}
            <div
              className={`mb-10 transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              {/* Small label */}
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-blue-400" />
<span className="font-sans text-medium font-medium uppercase tracking-[0.2em] text-[#087EA4]">
                  Our Services
                </span>
              </div>

              {/* Heading */}
              <h2 className="max-w-xl text-3xl font-display font-light leading-[1.08] tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                Built to move
                <br />
                your{" "}
            <span className="block inline-flex bg-gradient-to-r from-[#087EA4] via-[#18A8D1] to-[#24B35A] bg-clip-text text-transparent">
                  business forward.
                </span>
              </h2>

              {/* Description */}
              <p className="mt-5 text-sm leading-6 text-white/60 lg:text-base">
                Our team delivers exceptional IT services and innovative digital
                solutions tailored to drive measurable results. From concept to
                execution, we build scalable, secure and future-ready solutions
                that help businesses adapt, grow and lead in a digital world.
              </p>
            </div>

            {/* Buttons list */}
            <div className="space-y-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;

              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className={`group relative flex w-full items-center gap-4 overflow-hidden rounded-xl border px-4 py-4 text-left transition-all duration-500 sm:px-5 sm:py-5 ${
                    isActive
                      ? "border-blue-400/60 bg-blue-500/[0.12] shadow-[0_0_35px_rgba(59,130,246,0.12)]"
                      : "border-white/[0.08] bg-white/[0.02] hover:border-blue-400/30 hover:bg-white/[0.04]"
                  }`}
                >
                  {/* Active left line */}
                  <span
                    className={`absolute left-0 top-0 h-full w-[2px] bg-blue-400 transition-all duration-500 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {/* Icon */}
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border transition-all duration-500 ${
                      isActive
                        ? "border-blue-400/30 bg-blue-400/[0.12] text-blue-300"
                        : "border-white/[0.06] bg-white/[0.02] text-white/40 group-hover:text-blue-300"
                    }`}
                  >
                    <Icon size={20} strokeWidth={1.5} />
                  </div>

                  {/* Number */}
                  <span
                    className={`hidden w-8 text-xs font-medium tracking-widest transition-colors duration-300 sm:block ${
                      isActive ? "text-blue-300" : "text-white/25"
                    }`}
                  >
                    {step.number}
                  </span>

                  {/* Title */}
                  <span
                    className={`flex-1 text-sm font-medium transition-all duration-300 sm:text-base lg:text-lg ${
                      isActive
                        ? "text-white"
                        : "text-white/55 group-hover:text-white/80"
                    }`}
                  >
                    {step.title}
                  </span>

                  {/* Arrow */}
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-500 ${
                      isActive
                        ? "bg-blue-400 text-white shadow-[0_0_25px_rgba(59,130,246,0.4)]"
                        : "text-white/30 group-hover:text-blue-300"
                    }`}
                  >
                    <ArrowRight
                      size={17}
                      className={`transition-transform duration-300 ${
                        isActive
                          ? "translate-x-0"
                          : "group-hover:translate-x-1"
                      }`}
                    />
                  </div>

                  {/* Progress */}
                  {isActive && (
                    <span
                      key={`progress-${activeStep}`}
                      className="absolute bottom-0 left-0 h-[1px] bg-blue-400"
                      style={{
                        animation: "serviceProgress 5s linear forwards",
                      }}
                    />
                  )}
                </button>
              );
            })}
            </div>
          </div>

          {/* ===================================================
              RIGHT — SERVICE DETAIL CARD
          ==================================================== */}

          <div
            className="relative lg:h-full overflow-hidden rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-500/[0.10] via-white/[0.03] to-transparent p-7 sm:p-9 lg:p-10"
          >
            {/* Card glow - lighter */}
            <div className="pointer-events-none absolute right-[-20%] top-[-15%] h-[300px] w-[300px] rounded-full bg-blue-400/[0.12] blur-[100px]" />

            {/* Inner border */}
            <div className="pointer-events-none absolute inset-3 rounded-xl border border-white/[0.04]" />

            <div
              key={activeStep}
              className="relative z-10 flex h-full flex-col justify-between animate-service-fade"
            >
              {/* =================================================
                  ABSTRACT WEB UI — improved clarity
              ================================================== */}

              <div className="mb-8 flex justify-center">
                <div className="relative w-full max-w-[380px]">
                  {/* Glow - lighter and more vibrant */}
                  <div className="absolute inset-10 rounded-full bg-blue-400/20 blur-[70px]" />

                  {/* Browser */}
                  <div className="relative overflow-hidden rounded-xl border border-blue-400/40 bg-gradient-to-b from-[#0a1a3a] to-[#051028] shadow-[0_0_50px_rgba(59,130,246,0.15)]">
                    {/* Browser header */}
                    <div className="flex h-9 items-center gap-1.5 border-b border-blue-400/20 px-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-300/70" />
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-300/40" />
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-300/20" />

                      <div className="ml-auto h-1.5 w-16 rounded-full bg-blue-300/15" />
                    </div>

                    {/* Browser content - improved contrast */}
                    <div className="p-6">
                      <div className="mb-5 flex gap-4">
                        <div className="h-14 w-14 rounded-md border border-blue-400/50 bg-blue-500/15" />
                        <div className="flex-1 pt-1">
                          <div className="mb-2 h-2 w-24 rounded-full bg-blue-300/60" />
                          <div className="h-1.5 w-32 rounded-full bg-blue-300/25" />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        <div className="h-16 rounded-md border border-blue-400/20 bg-blue-500/[0.06]" />
                        <div className="h-16 rounded-md border border-blue-400/20 bg-blue-500/[0.06]" />
                        <div className="h-16 rounded-md border border-blue-400/20 bg-blue-500/[0.06]" />
                      </div>

                      <div className="mt-4 space-y-2">
                        <div className="h-1.5 w-full rounded-full bg-blue-300/15" />
                        <div className="h-1.5 w-4/5 rounded-full bg-blue-300/15" />
                        <div className="h-1.5 w-3/5 rounded-full bg-blue-300/15" />
                      </div>
                    </div>
                  </div>

                  {/* Floating elements - more visible */}
                  <div className="absolute -left-5 top-16 h-3 w-3 border border-blue-400 bg-[#020611] shadow-[0_0_20px_rgba(59,130,246,0.8)]" />

                  <div className="absolute -right-3 bottom-12 h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.9)]" />
                </div>
              </div>

              {/* Bottom Info Group */}
              <div>
                {/* Small divider */}
                <div className="mb-6 h-px w-20 bg-blue-400" />

                {/* Description */}
                <p className="max-w-lg text-xl font-light leading-relaxed text-white/85 sm:text-2xl">
                  {activeService.result}
                </p>

                {/* Benefits */}
                <div className="mt-10 grid grid-cols-3 border-t border-white/[0.08] pt-7">
                  {/* Benefit 1 */}
                  <div className="flex flex-col items-center border-r border-white/[0.08] px-2 text-center">
                    <Zap
                      size={25}
                      strokeWidth={1.5}
                      className="mb-3 text-blue-300"
                    />

                    <span className="text-xs leading-5 text-white/60 sm:text-sm">
                      Fast &amp;
                      <br />
                      Performant
                    </span>
                  </div>

                  {/* Benefit 2 */}
                  <div className="flex flex-col items-center border-r border-white/[0.08] px-2 text-center">
                    <MonitorSmartphone
                      size={25}
                      strokeWidth={1.5}
                      className="mb-3 text-blue-300"
                    />

                    <span className="text-xs leading-5 text-white/60 sm:text-sm">
                      Responsive
                      <br />
                      by Design
                    </span>
                  </div>

                  {/* Benefit 3 */}
                  <div className="flex flex-col items-center px-2 text-center">
                    <UserRound
                      size={25}
                      strokeWidth={1.5}
                      className="mb-3 text-blue-300"
                    />

                    <span className="text-xs leading-5 text-white/60 sm:text-sm">
                      User-Centric
                      <br />
                      Experience
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          ANIMATIONS
      ========================================================== */}

      <style jsx>{`
        @keyframes serviceProgress {
          from {
            width: 0%;
          }

          to {
            width: 100%;
          }
        }

        @keyframes serviceFade {
          from {
            opacity: 0;
            transform: translateY(10px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-service-fade {
          animation: serviceFade 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}