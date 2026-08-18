"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Phone,
  ShieldCheck,
  Clock3,
  X,
} from "lucide-react";
import { AnimatedTetrahedron } from "./animated-tetrahedron";

interface CtaSectionProps {
  id?: string;  // ✅ Added optional id prop
}

export function  ConatactDetails({ id }: CtaSectionProps) {  // ✅ Destructure id prop
  const [isVisible, setIsVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);
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

  return (
    <section
      id={id}  // ✅ Apply the id prop to the section
      ref={sectionRef}
      className="relative overflow-hidden bg-white pt-2 pb-8 sm:pt-2 sm:pb-12 lg:pt-2 lg:pb-16"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      {/* Soft blue glow */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-blue-500/[0.06] blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-400/[0.04] blur-[120px]" />

      {/* Architectural grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15,23,42,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,23,42,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div
          className={`relative overflow-hidden border border-slate-200 bg-white transition-all duration-1000 ${isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
            }`}
        >
          {/* =====================================================
              DECORATIVE CORNERS
          ====================================================== */}

          <div className="pointer-events-none absolute left-0 top-0 h-20 w-20 border-b border-r border-slate-200" />

          <div className="pointer-events-none absolute bottom-0 right-0 h-20 w-20 border-l border-t border-slate-200" />

          {/* Blue corner accent */}
          <div className="absolute right-0 top-0 h-[1px] w-32 bg-gradient-to-l from-blue-500 to-transparent" />

          <div className="absolute bottom-0 left-0 h-[1px] w-32 bg-gradient-to-r from-blue-500 to-transparent" />

          {/* =====================================================
              CONTENT
          ====================================================== */}

          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            {/* ===================================================
                LEFT CONTENT
            ==================================================== */}

            <div className="relative px-7 pt-4 pb-8 sm:px-10 sm:pt-6 sm:pb-10 lg:px-14 lg:pt-8 lg:pb-14 xl:px-16">

              {/* Small label */}
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-blue-500" />
<span className="font-sans text-medium font-medium uppercase tracking-[0.2em] text-[#087EA4]">     
               Let's Work Together
                </span>
              </div>

              {/* Heading */}
              <h2 className="max-w-[720px] text-[42px] font-display font-light leading-[0.98] tracking-[-0.045em] text-[#164A5B] sm:text-5xl lg:text-[64px] xl:text-[72px]">
                Ready to build
                <br />
                something{" "}
                <span className="inline-flex bg-gradient-to-r from-[#087EA4] via-[#18A8D1] to-[#24B35A] bg-clip-text text-transparent">
                  remarkable?
                </span>
              </h2>

              {/* Description */}
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base lg:text-lg">
                Have an idea, a project, or a business challenge? Let's turn
                it into a digital solution that creates real impact. Tell us
                what you're building and we'll take it from there.
              </p>

              {/* =================================================
                  TRUST INDICATORS
              ================================================== */}

              <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 border-t border-slate-100 pt-6 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <ShieldCheck size={17} />
                  </div>

                  <div>
                    <p className="text-medium font-medium text-slate-800">
                      Your privacy matters
                    </p>

                    <p className="mt-0.5 text-[14px] leading-5 text-slate-400">
                      Your information stays confidential.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <Clock3 size={17} />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-slate-800">
                      Quick response
                    </p>

                    <p className="mt-0.5 text-[14px] leading-5 text-slate-400">
                      We respond within 24 business hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ===================================================
                RIGHT VISUAL
            ==================================================== */}

            <div className="relative min-h-[320px] overflow-hidden border-t border-slate-100 bg-[#f8fbff] lg:min-h-[540px] lg:border-l lg:border-t-0">
              {/* Blue gradient */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.10),transparent_55%)]" />

              {/* Large circle */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/[0.08] sm:h-[420px] sm:w-[420px]" />

              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/[0.08]" />

              {/* Dashed orbit */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-blue-500/[0.12]" />

              {/* Small decorative points */}
              <span className="absolute left-[18%] top-[25%] h-1.5 w-1.5 rounded-full bg-blue-500/60" />

              <span className="absolute right-[20%] top-[30%] h-2 w-2 rounded-full bg-cyan-400/70" />

              <span className="absolute bottom-[25%] left-[25%] h-1.5 w-1.5 rounded-full bg-blue-400/50" />

              <span className="absolute bottom-[20%] right-[25%] h-1.5 w-1.5 rounded-full bg-blue-500/50" />

              {/* Tetrahedron */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-[340px] w-[340px] sm:h-[420px] sm:w-[420px]">
                  <AnimatedTetrahedron />
                </div>
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between border-t border-slate-200/80 pt-4 sm:left-8 sm:right-8">
                <div>
                  <p className="text-[14px] font-semibold uppercase tracking-[0.2em] text-blue-600">
                    Grandreves Technologies
                  </p>

                  <p className="mt-0.5 text-[14px] text-slate-400">
                    Digital solutions built for growth
                  </p>
                </div>

                <div className="hidden h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white sm:flex">
                  <ArrowUpRight size={14} className="text-slate-500" />
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              CONTACT BAR
          ====================================================== */}

          <div className="border-t bg-white border-slate-200 bg-slate-50/70">
            <div className="grid sm:grid-cols-2">
              {/* Phone */}
              <a
                href="tel:+919995773273"
                className="group flex items-center gap-4 border-b border-slate-200 px-7 py-4 transition-colors hover:bg-white sm:border-b-0 sm:border-r sm:px-10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-blue-600 transition-all group-hover:border-blue-200 group-hover:bg-blue-50">
                  <Phone size={16} />
                </div>

                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Call Us
                  </p>

                  <p className="mt-0.5 text-medium font-medium text-slate-700">
                    +91 99957 73273
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@grandreeves.com"
                className="group flex items-center gap-4 px-7 py-4 transition-colors hover:bg-white sm:px-10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-blue-600 transition-all group-hover:border-blue-200 group-hover:bg-blue-50">
                  <Mail size={16} />
                </div>

                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Email Us
                  </p>

                  <p className="mt-0.5 text-medium font-medium text-slate-700">
                    info@grandreeves.com
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          ENQUIRY MODAL
      ========================================================== */}

      {showForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Overlay */}
          <button
            type="button"
            aria-label="Close enquiry form"
            onClick={() => setShowForm(false)}
            className="absolute inset-0 cursor-default bg-slate-950/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <div className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-7 shadow-2xl sm:p-10">
            {/* Close */}
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-colors hover:bg-slate-50 hover:text-slate-800"
            >
              <X size={17} />
            </button>

            {/* Header */}
            <div className="mb-6 pr-10">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-6 bg-blue-500" />

                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                  Start a Conversation
                </span>
              </div>

              <h3 className="text-3xl font-light tracking-tight text-slate-950 sm:text-4xl">
                Tell us about
                <span className="text-blue-600"> your project.</span>
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                Share a few details about your requirements and our team will
                get back to you shortly.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-slate-600">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-slate-600">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-slate-600">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="+91"
                    className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-slate-600">
                    Company
                  </label>

                  <input
                    type="text"
                    placeholder="Company name"
                    className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-slate-600">
                  Tell us about your project
                </label>

                <textarea
                  placeholder="What are you looking to build?"
                  className="h-28 w-full resize-none rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              {/* Submit */}
              <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-slate-400">
                  We typically respond within 24 business hours.
                </p>

                <Button
                  type="submit"
                  className="group h-12 rounded-full bg-slate-950 px-7 text-sm text-white hover:bg-blue-600"
                >
                  Send Enquiry

                  <ArrowRight
                    size={16}
                    className="ml-2 transition-transform group-hover:translate-x-1"
                  />
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
// Force reload