"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { AnimatedSphere } from "./animated-sphere";

const words = ["transform", "grow", "accelerate", "lead"];

const services = [
  "Mobile & Web Development",
  "Modern UI / UX",
  "AI & Computer Vision",
  "Technology Consulting",
];

const serviceColors = [
  "#087EA4",
  "#18A8D1",
  "#24B35A",
  "#164A5B",
];

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white text-[#171A1C]">

      {/* ============================================================
          BACKGROUND GRID
      ============================================================ */}

      <div className="absolute inset-0 pointer-events-none">

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #171A1C 1px, transparent 1px),
              linear-gradient(to bottom, #171A1C 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />

        {/* Soft background fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white" />

        {/* Right-side subtle color glow */}
        <div
          className="
            absolute
            right-[-180px]
            top-1/2
            h-[700px]
            w-[700px]
            -translate-y-1/2
            rounded-full
            bg-[radial-gradient(circle,rgba(24,168,209,0.07)_0%,rgba(36,179,90,0.035)_35%,transparent_70%)]
          "
        />

      </div>

      {/* ============================================================
          TOP BORDER
      ============================================================ */}

      <div className="absolute left-0 right-0 top-0 h-px bg-[#164A5B]/10" />

      {/* ============================================================
          ANIMATED SPHERE
      ============================================================ */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-1/2
          h-[560px]
          w-[560px]
          -translate-y-1/2

          lg:right-[-80px]
          lg:h-[720px]
          lg:w-[720px]

          xl:right-[-20px]
          xl:h-[780px]
          xl:w-[780px]
        "
      >

        <div className="absolute inset-0 opacity-[0.42]">
          <AnimatedSphere />
        </div>

        {/* Soft left-side fade */}

        <div
          className="
            absolute
            inset-0
            rounded-full
            bg-gradient-to-r
            from-white
            via-transparent
            to-transparent
            opacity-80
          "
        />

        {/* Soft bottom fade */}

        <div
          className="
            absolute
            inset-0
            rounded-full
            bg-gradient-to-t
            from-white/40
            via-transparent
            to-transparent
          "
        />

      </div>

      {/* ============================================================
          HERO CONTENT
      ============================================================ */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          max-w-[1500px]
          flex-col
          justify-start
          px-6
          pb-10
          pt-28

          lg:px-12
          lg:pt-32
        "
      >

        {/* ==========================================================
            HERO MAIN
        ========================================================== */}

        <div className="grid gap-16 lg:grid-cols-[1fr_360px] lg:gap-24">

          {/* ========================================================
              LEFT CONTENT
          ======================================================== */}

          <div className="max-w-[900px]">

            {/* ------------------------------------------------------
                EYEBROW
            ------------------------------------------------------ */}

            <div
              className={`
                mb-10
                flex
                items-center
                gap-4
                transition-all
                duration-700
                ${isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
                }
              `}
            >

              <span
                className="
                  h-px
                  w-10
                  bg-gradient-to-r
                  from-[#087EA4]
                  to-[#24B35A]
                "
              />

<span className="font-sans text-medium font-medium uppercase tracking-[0.2em] text-[#087EA4]">

                Where technology meets business ambition
              </span>

            </div>

            {/* ------------------------------------------------------
                MAIN HEADLINE
            ------------------------------------------------------ */}

            <h1
              className={`
                max-w-[950px]
                text-[clamp(3.4rem,7vw,7.5rem)]
                font-display
                font-medium
                leading-[0.88]
                tracking-[-0.055em]
                transition-all
                duration-1000

                ${isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
                }
              `}
            >

              {/* Line 1 */}

              {/* Line 1 */}
              <span className="block text-[#164A5B]">
                We build
              </span>

              {/* Line 2 */}
              <span className="block text-[#164A5B]">
                digital solutions
              </span>

              {/* Line 3 */}
              <span className="block text-[#164A5B]">
                that help
              </span>
              {/* Animated word */}

              <span className="relative inline-block">

                <span
                  key={wordIndex}
                  className="
                    inline-flex
                    bg-gradient-to-r
                    from-[#087EA4]
                    via-[#18A8D1]
                    to-[#24B35A]
                    bg-clip-text
                    text-transparent
                  "
                >
                  {words[wordIndex].split("").map((char, index) => (
                    <span
                      key={`${wordIndex}-${index}`}
                      className="inline-block animate-char-in"
                      style={{
                        animationDelay: `${index * 45}ms`,
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </span>

              </span>

            </h1>

            {/* ------------------------------------------------------
                DESCRIPTION
            ------------------------------------------------------ */}

            <div className={`mt-12 max-w-[650px] transition-all delay-200 duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}>

              <p className="text-lg leading-[1.7] text-[#164A5B]/90 lg:text-xl">
                From <strong className="font-bold text-[#164A5B]">bold ideas</strong> to <strong className="font-bold text-[#164A5B]">meaningful innovation</strong>, we create <strong className="font-bold text-[#164A5B]">secure, scalable technology</strong> that helps businesses <strong className="font-bold text-[#164A5B]">launch, modernize, and grow</strong> with confidence.
              </p>
            </div>
          </div>
          <div
            className={`
              hidden
              flex-col
              justify-end
              pb-10
              transition-all
              delay-500
              duration-700

              lg:flex

              ${isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
              }
            `}
          >

            <div className="border-t border-[#164A5B]/15 pt-5">

              {/* Header */}

              <div className="flex items-start justify-between">

                <span
                  className="
                    font-display
                    text-xl
                    italic
                    text-[#164A5B]
                    tracking-wide
                  "
                >
                  What we do
                </span>

              </div>

              {/* Services */}

              <div className="mt-8 space-y-4">

                {services.map((item, index) => (
                  <div
                    key={item}
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      border-b
                      border-[#164A5B]/10
                      pb-4
                    "
                  >

                    <div className="flex items-center gap-3">

                      {/* Color indicator */}

                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          transition-transform
                          duration-300
                          group-hover:scale-150
                        "
                        style={{
                          backgroundColor: serviceColors[index],
                        }}
                      />

                      <span
                        className="
                          font-sans
                          text-base
                          font-semibold
                          text-[#164A5B]/90
                          transition-colors
                          duration-300
                          group-hover:text-[#087EA4]
                        "
                      >
                        {item}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

