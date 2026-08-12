"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

const trustedCompanies = [
  {
    name: "ZETA SOLUTIONS",
    logo: "/zeta_solutions.svg",
    width: 200,
    height: 70,
  },
  {
    name: "FEDERAL BANK",
    logo: "/Federal.png",
    width: 200,
    height: 70,
  },
  {
    name: "ALTAIRE INSIGHTS",
    logo: "/altirenew.png",
    width: 220,
    height: 70,
  },
  {
    name: "DIDIM365",
    logo: "/didim365.jpg",
    width: 180,
    height: 70,
  },
  {
    name: "SIGNATURE",
    logo: "/signature.jpg",
    width: 180,
    height: 70,
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-28 lg:py-40 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 text-[#0A1628]">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/5 rounded-full blur-2xl" />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 40px, #1e293b 40px, #1e293b 41px),
              repeating-linear-gradient(90deg, transparent, transparent 40px, #1e293b 40px, #1e293b 41px)
            `,
          }}
        />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="mb-20 lg:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-gradient-to-r from-indigo-600/80 to-transparent" />
            <span className="text-sm font-mono text-indigo-600 uppercase tracking-[0.2em] font-semibold">
              Strategic Partnerships
            </span>
          </div>

          <div className="transition-all duration-700">
            <h2 className="text-3xl lg:text-5xl xl:text-6xl font-display tracking-tight leading-[1.08] whitespace-nowrap">
              <span className="bg-gradient-to-r from-slate-900 via-indigo-800 to-slate-900 bg-clip-text text-transparent font-bold">
                Trusted by Global Enterprises
              </span>
            </h2>

            <p className="mt-6 text-lg text-slate-600 max-w-3xl leading-relaxed font-light">
              GrandReves is the technology partner of choice for leading enterprises worldwide.
              We deliver scalable solutions that enhance operational efficiency, strengthen
              performance, and support sustainable growth. With a documented track record of
              success, we enable organizations to adapt confidently in today’s evolving digital
              landscape.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-slate-600 bg-indigo-50/50 px-3 py-1.5 rounded-full border border-indigo-100/50">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/30" />
                <span className="font-medium">Global Enterprise Partners</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600 bg-blue-50/50 px-3 py-1.5 rounded-full border border-blue-100/50">
                <span className="w-2 h-2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/30" />
                <span className="font-medium">Scalable Technology Solutions</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600 bg-purple-50/50 px-3 py-1.5 rounded-full border border-purple-100/50">
                <span className="w-2 h-2 rounded-full bg-purple-500 shadow-lg shadow-purple-500/30" />
                <span className="font-medium">Documented Track Record</span>
              </div>
            </div>
          </div>
        </div>

        {/* Company Logos Marquee */}
        <div className="w-full overflow-hidden">
          <div className="flex gap-24 items-center marquee">
            {[...Array(3)].map((_, setIdx) => (
              <div
                key={setIdx}
                className="flex gap-24 items-center shrink-0"
              >
                {trustedCompanies.map((company) => (
                  <div
                    key={`${setIdx}-${company.name}`}
                    className="group flex items-center justify-center px-12 py-8 rounded-2xl border border-slate-200/80 hover:border-indigo-400/60 transition-all duration-500 hover:shadow-md bg-white/80 backdrop-blur-sm min-w-[200px]"
                  >
                    <div className="relative w-full h-16 flex items-center justify-center">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        width={company.width}
                        height={company.height}
                        className="object-contain w-full h-full"
                        priority={setIdx === 0}
                        quality={100}
                        unoptimized={company.logo.endsWith('.svg')}
                        style={{
                          imageRendering: 'auto',
                          filter: 'none'
                        }}
                        aria-label={`${company.name} logo`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-50 via-slate-50/50 to-transparent pointer-events-none" />
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent pointer-events-none" />
      </div>

      <style jsx>{`
        .marquee {
          animation: scroll 35s linear infinite;
          display: flex;
          width: max-content;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        .marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
