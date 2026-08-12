"use client";

import Image from "next/image";
import { useState } from "react";

const trustedCompanies = [
  {
    name: "ZETA SOLUTIONS",
    logo: "/zeta_solutions.svg",
    tagline: "",
    width: 180,
    height: 50,
  },
  {
    name: "FEDERAL BANK",
    logo: "/Federal.png",
    tagline: "YOUR PERFECT BANKING PARTNER",
    width: 180,
    height: 50,
  },
  {
    name: "ALTAIRE INSIGHTS",
    logo: "/altirenew.png",
    tagline: "",
    width: 180,
    height: 50,
  },
  {
    name: "DIDIM365",
    logo: "/didim365.jpg",
    tagline: "",
    width: 180,
    height: 50,
  },
];

export function TestimonialsSection() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (name: string) => {
    setImageErrors(prev => ({ ...prev, [name]: true }));
  };

  return (
    <section className="relative py-12 lg:py-16 overflow-hidden bg-white text-[#0A1628]">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-2xl" />

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
        <div className="mb-8 lg:mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-px bg-gradient-to-r from-[#087EA4] to-transparent" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#087EA4]">
              Strategic Partnerships
            </span>
          </div>

          <div className="transition-all duration-700">
            <h2 className="text-3xl lg:text-5xl xl:text-6xl font-display tracking-tight leading-[1.08]">
              <span className="text-[#164A5B] font-bold mr-3">
                Trusted by
              </span>
              <span className="inline-flex font-bold bg-gradient-to-r from-[#087EA4] via-[#18A8D1] to-[#24B35A] bg-clip-text text-transparent">
                Global Enterprises
              </span>
            </h2>

            <p className="mt-3 text-lg text-slate-600 max-w-3xl leading-relaxed font-light">
              GrandReves is the technology partner of choice for leading enterprises worldwide.
              We deliver scalable solutions that enhance operational efficiency, strengthen
              performance, and support sustainable growth. With a documented track record of
              success, we enable organizations to adapt confidently in today's evolving digital
              landscape.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
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

        {/* Company Logos */}
        <div className="w-full overflow-hidden py-4">
          <div className="flex gap-16 items-center marquee">
            {[...Array(3)].map((_, setIdx) => (
              <div
                key={setIdx}
                className="flex gap-16 items-center shrink-0"
              >
                {trustedCompanies.map((company) => (
                  <div
                    key={`${setIdx}-${company.name}`}
                    className="flex flex-col items-center justify-center min-w-[180px]"
                  >
                    {!imageErrors[company.name] ? (
                      <div className="relative h-12 w-[180px]">
                        <Image
                          src={company.logo}
                          alt={company.name}
                          width={company.width}
                          height={company.height}
                          className="object-contain w-full h-full"
                          priority={setIdx === 0}
                          unoptimized={company.logo.endsWith(".svg")}
                          style={{
                            imageRendering: "crisp-edges",
                            filter: "none",
                          }}
                          onError={() => handleImageError(company.name)}
                          draggable={false}
                        />
                      </div>
                    ) : (
                      <div className="text-center">
                        <span className="text-xl font-bold text-slate-800 tracking-wide">
                          {company.name}
                        </span>
                        {company.tagline && (
                          <span className="block text-xs text-slate-500 font-medium mt-0.5">
                            {company.tagline}
                          </span>
                        )}
                      </div>
                    )}
                    {company.tagline && !imageErrors[company.name] && (
                      <span className="text-[10px] text-slate-500 font-medium mt-1 tracking-wide">
                        {company.tagline}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
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
