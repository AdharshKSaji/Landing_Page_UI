"use client";

import Image from "next/image";

const trustedCompanies = [
  {
    name: "FEDERAL BANK",
    logo: "/Federal.png",
    width: 160,
    height: 48,
  },
  {
    name: "ALT AIRE INSIGHTS",
    logo: "/altirenew.png",
    width: 180,
    height: 48,
  },
  {
    name: "DIDIM365",
    logo: "/didim365.jpg",
    width: 150,
    height: 48,
  },
  {
    name: "ZETA SOLUTIONS",
    logo: "/zeta_solutions.svg",
    width: 160,
    height: 48,
  },
  {
    name: "SIGNATURE",
    logo: "/signature.jpg",
    width: 140,
    height: 48,
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-32 lg:py-40 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Trusted by Section */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-4">
            Trusted by leading global organizations
          </p>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            GrandReves is the trusted technology partner for enterprises
            worldwide, delivering innovative, scalable, and reliable software
            solutions. With a proven track record of excellence, we empower
            businesses to accelerate growth, enhance operational efficiency, and
            achieve sustainable success in today’s dynamic digital landscape.
          </p>
        </div>

        {/* Company Logos Marquee */}
        <div className="w-full overflow-hidden">
          <div className="flex gap-16 items-center marquee">
            {[...Array(3)].map((_, setIdx) => (
              <div
                key={setIdx}
                className="flex gap-16 items-center shrink-0"
              >
                {trustedCompanies.map((company) => (
                  <div
                    key={`${setIdx}-${company.name}`}
                    className="group flex items-center justify-center px-6 py-3 rounded-lg border border-foreground/5 hover:border-foreground/20 transition-all duration-300 hover:scale-105"
                  >
                    <div className="relative h-10 flex items-center justify-center">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        width={company.width}
                        height={company.height}
                        className="object-contain transition-all duration-300"
                        priority={setIdx === 0}
                      />
                    </div>
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
