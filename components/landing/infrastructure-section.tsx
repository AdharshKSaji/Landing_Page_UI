"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Zap,
  Shield,
  TrendingUp,
  Target,
  Palette,
  Boxes,
  Code2,
  TestTube2,
  Rocket,
  Headphones,
} from "lucide-react";

const processSteps = [
  {
    step: "Requirement Analysis & Strategy",
    short: "Strategy",
    description:
      "Comprehensive assessment of business needs, technical requirements, and project objectives to establish a clear development roadmap.",
    icon: Target,
  },
  {
    step: "UI/UX Design & Prototyping",
    short: "Design",
    description:
      "User-centric design approach creating intuitive interfaces, seamless user experiences, and interactive prototypes for stakeholder validation.",
    icon: Palette,
  },
  {
    step: "Architecture & Prototype Development",
    short: "Architecture",
    description:
      "Designing scalable system architecture and developing functional prototypes to validate technical approaches and user flows.",
    icon: Boxes,
  },
  {
    step: "Agile Development & Coding",
    short: "Development",
    description:
      "Iterative development using agile methodologies, ensuring clean, maintainable code with continuous integration and delivery practices.",
    icon: Code2,
  },
  {
    step: "Quality Assurance & Testing",
    short: "Testing",
    description:
      "Rigorous testing protocols including functional, performance, security, and user acceptance testing to ensure enterprise-grade reliability.",
    icon: TestTube2,
  },
  {
    step: "Deployment & Integration",
    short: "Deployment",
    description:
      "Strategic deployment planning with seamless integration into existing infrastructure, ensuring minimal disruption and optimal performance.",
    icon: Rocket,
  },
  {
    step: "Maintenance & Continuous Support",
    short: "Support",
    description:
      "Ongoing technical support, performance monitoring, regular updates, and continuous optimization to ensure long-term success and scalability.",
    icon: Headphones,
  },
];

export function InfrastructureSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  /* -----------------------------------------------------------
     Visibility
  ------------------------------------------------------------ */

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  /* -----------------------------------------------------------
     Auto rotation
  ------------------------------------------------------------ */

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const active = processSteps[activeStep];
  const ActiveIcon = active.icon;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white pt-4 pb-10 lg:pt-4 lg:pb-16"
    >
      {/* Global SVG Gradients for Icons */}
      <svg className="absolute w-0 h-0 pointer-events-none" width="0" height="0">
        <defs>
          <linearGradient id="icon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#172554" />
            <stop offset="50%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
        </defs>
      </svg>
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(15,23,42,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(15,23,42,0.035) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Blue glow */}
        <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/[0.06] blur-[120px]" />

        <div className="absolute -left-40 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-400/[0.04] blur-[120px]" />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid items-start gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          {/* =====================================================
              LEFT SIDE
          ====================================================== */}

          <div
            className={`transition-all duration-1000 ${isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-8 opacity-0"
              }`}
          >
            {/* Label */}

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#1E3A8A]" />

              <span className="text-xs text-[#164A5B] font-bold uppercase tracking-[0.22em] ">
                Our Methodology
              </span>
            </div>

            {/* Heading */}

            <h2 className="text-4xl font-display font-semibold leading-[1.02] tracking-[-0.045em] text-[#164A5B] sm:text-5xl lg:text-[64px]">
              Streamlined
              <br />
              development
              <br />

              <span className="bg-gradient-to-r from-[#087EA4] via-[#18A8D1] to-[#24B35A] bg-clip-text text-transparent">
                lifecycle.
              </span>
            </h2>

            {/* Description */}

            <p className="mt-7 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
              Our proven development methodology combines industry best
              practices with agile principles, ensuring transparent, efficient
              and high-quality delivery from concept to deployment and beyond.
            </p>

            {/* =================================================
                STATS
            ================================================== */}

            <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4">
              {/* Stat 1 */}

              <div className="group rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_15px_40px_rgba(15,23,42,0.07)]">
                <div className="mb-5 flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 border border-slate-200/60">
                  <Zap size={15} stroke="url(#icon-grad)" />
                </div>

                <div className="text-2xl font-light tracking-tight text-slate-950">
                  100%
                </div>

                <p className="mt-1 text-[12px] leading-4 text-slate-600 sm:text-medium">
                  Client
                  <br />
                  Commitment
                </p>
              </div>

              {/* Stat 2 */}

              <div className="group rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_15px_40px_rgba(15,23,42,0.07)]">
                <div className="mb-5 flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 border border-slate-200/60">
                  <Shield size={15} stroke="url(#icon-grad)" />
                </div>

                <div className="text-2xl font-light tracking-tight text-slate-950">
                  100%
                </div>

                <p className="mt-1 text-[12px] leading-4 text-slate-600 sm:text-medium">
                  Quality
                  <br />
                  Assurance
                </p>
              </div>

              {/* Stat 3 */}

              <div className="group rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_15px_40px_rgba(15,23,42,0.07)]">
                <div className="mb-5 flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 border border-slate-200/60">
                  <TrendingUp size={15} stroke="url(#icon-grad)" />
                </div>

                <div className="text-2xl font-light tracking-tight text-slate-950">
                  Agile
                </div>

                <p className="mt-1 text-[12px] leading-4 text-slate-600 sm:text-medium">
                  Development
                  <br />
                  Approach
                </p>
              </div>
            </div>

            {/* Small statement */}

            <div className="mt-10 flex items-center gap-3 text-medium text-slate-400">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />

              <span>
                From strategy to continuous support — one connected process.
              </span>
            </div>
          </div>

          {/* =====================================================
              RIGHT SIDE
          ====================================================== */}

          <div
            className={`transition-all delay-200 duration-1000 ${isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-8 opacity-0"
              }`}
          >
            {/* Main process card */}

            <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.08)]">
              {/* -----------------------------------------------
                  Card Header
              ------------------------------------------------ */}

              <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5 sm:px-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 border border-slate-200/60">
                    <Clock size={15} stroke="url(#icon-grad)" />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-slate-900">
                      Development Lifecycle
                    </p>

                    <p className="mt-0.5 text-[10px] uppercase tracking-[0.15em] text-slate-600">
                      07 stages
                    </p>
                  </div>
                </div>

                {/* Status */}

                <div className="flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </span>

                  <span className="text-[10px] font-medium text-emerald-600">
                    Active
                  </span>
                </div>
              </div>

              {/* -----------------------------------------------
                  ACTIVE STAGE
              ------------------------------------------------ */}

              <div className="relative overflow-hidden bg-slate-950 px-6 py-7 text-white sm:px-8 sm:py-8">
                {/* Background glow */}

                <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/20 blur-[70px]" />

                <div className="pointer-events-none absolute -bottom-20 left-20 h-40 w-40 rounded-full bg-cyan-400/10 blur-[60px]" />
                <div className="relative z-10">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white shadow-lg">
                      <ActiveIcon size={21} strokeWidth={1.5} stroke="url(#icon-grad)" />
                    </div>

                    <span className="font-mono text-xs text-white/30">
                      {String(activeStep + 1).padStart(2, "0")} /{" "}
                      {String(processSteps.length).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-blue-300">
                    Current Stage
                  </p>

                  <h3
                    key={activeStep}
                    className="text-2xl font-light tracking-tight sm:text-3xl"
                  >
                    {active.step}
                  </h3>

                  <p
                    key={`description-${activeStep}`}
                    className="mt-4 max-w-xl text-sm leading-6 text-white/50"
                  >
                    {active.description}
                  </p>

                  {/* Progress */}

                  <div className="mt-7 h-[2px] overflow-hidden rounded-full bg-white/10">
                    <div
                      key={activeStep}
                      className="h-full origin-left rounded-full bg-gradient-to-r from-blue-400 to-cyan-300"
                      style={{
                        animation: "methodologyProgress 4s linear forwards",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* -----------------------------------------------
                  STEP NAVIGATION
              ------------------------------------------------ */}

              <div className="p-3">
                {processSteps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = index === activeStep;

                  return (
                    <button
                      key={step.step}
                      type="button"
                      onClick={() => setActiveStep(index)}
                      className={`group relative flex w-full items-center gap-4 rounded-xl px-4 py-3 text-left transition-all duration-300 ${isActive
                        ? "bg-blue-50"
                        : "hover:bg-slate-50"
                        }`}
                    >
                      {/* Number / Icon */}

                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${isActive
                          ? "bg-slate-50 border border-slate-200/80 shadow-md"
                          : "border border-slate-200 bg-white text-slate-350 group-hover:border-[#1E3A8A]/30"
                          }`}
                      >
                        {isActive ? (
                          <CheckCircle2 size={15} stroke="url(#icon-grad)" />
                        ) : (
                          <span className="font-mono text-[10px] transition-colors duration-300 group-hover:text-[#1E3A8A]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        )}
                      </div>

                      {/* Text */}

                      <div className="min-w-0 flex-1">
                        <div
                          className={`text-sm transition-colors ${isActive
                            ? "font-semibold text-slate-900"
                            : "text-slate-500 group-hover:text-slate-900 font-semibold"
                            }`}
                        >
                          {step.step}
                        </div>

                        <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600">
                          {step.short}
                        </div>
                      </div>

                      {/* Arrow */}

                      <ArrowRight
                        size={14}
                        className={`shrink-0 transition-all duration-300 ${isActive
                          ? "translate-x-0 text-blue-500"
                          : "-translate-x-2 text-slate-200 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                          }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* -----------------------------------------------
                  FOOTER
              ------------------------------------------------ */}

              <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/60 px-6 py-4">
                <span className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
                  Continuous improvement
                </span>

                <span className="flex items-center gap-2 text-[10px] text-slate-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  Agile workflow
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          ANIMATION
      ========================================================== */}

      <style jsx>{`
        @keyframes methodologyProgress {
          from {
            transform: scaleX(0);
          }

          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  );
}