"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Code2,
  Headphones,
  LockKeyhole,
  Rocket,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  WalletCards,
  Zap,
} from "lucide-react";

const features = [
  {
    number: "01",
    title: "24/7 Customer Support",
    description:
      "Dedicated support whenever you need it, keeping your business moving without unnecessary delays.",
    icon: Headphones,
    size: "large",
  },
  {
    number: "02",
    title: "50+ Successful Milestones",
    description:
      "A growing track record of delivering reliable digital solutions across diverse business needs.",
    icon: Trophy,
    size: "normal",
  },
  {
    number: "03",
    title: "10+ Years of Experience",
    description:
      "Years of hands-on expertise helping businesses turn technology into meaningful results.",
    icon: Clock3,
    size: "featured",
  },
  {
    number: "04",
    title: "Latest Technology",
    description:
      "Modern frameworks, tools, and development practices built for today's digital landscape.",
    icon: Zap,
    size: "normal",
  },
  {
    number: "05",
    title: "Expert Developers",
    description:
      "Skilled professionals focused on building clean, scalable, and dependable solutions.",
    icon: Code2,
    size: "normal",
  },
  {
    number: "06",
    title: "On-Time Delivery",
    description:
      "Structured planning and execution designed to keep projects aligned with agreed timelines.",
    icon: Rocket,
    size: "normal",
  },
  {
    number: "07",
    title: "Cost Effective",
    description:
      "Smart technology choices that maximize business value without unnecessary complexity.",
    icon: WalletCards,
    size: "normal",
  },
  {
    number: "08",
    title: "Security & IP Protection",
    description:
      "Security-conscious development practices designed to protect your applications, data, and ideas.",
    icon: ShieldCheck,
    size: "large",
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[number];
  index: number;
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const Icon = feature.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const isLarge = feature.size === "large";
  const isFeatured = feature.size === "featured";

  return (
    <div
      ref={ref}
      className={`
        group relative overflow-hidden rounded-[28px]
        border border-slate-200/80
        bg-white
        transition-all duration-700
        hover:-translate-y-1
        hover:border-[#159BC1]/40
        hover:shadow-[0_20px_60px_rgba(8,126,164,0.10)]
        ${isLarge
          ? "md:col-span-2"
          : isFeatured
            ? "md:row-span-2"
            : ""
        }
        ${visible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
        }
      `}
      style={{
        transitionDelay: `${index * 80}ms`,
      }}
    >
      {/* Hover glow */}
      <div
        className="
          absolute -right-20 -top-20
          h-48 w-48 rounded-full
          bg-[#16A9D2]/10
          blur-3xl
          opacity-0
          transition-opacity duration-500
          group-hover:opacity-100
        "
      />

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute left-1/4 top-0 h-full w-px bg-slate-100" />
        <div className="absolute left-2/4 top-0 h-full w-px bg-slate-100" />
        <div className="absolute left-3/4 top-0 h-full w-px bg-slate-100" />
      </div>

      <div
        className={`
          relative z-10 flex h-full flex-col
          ${isFeatured ? "p-8 lg:p-10" : "p-7 lg:p-8"}
        `}
      >
        {/* Top */}
        <div className="flex items-start justify-between">
          <span
            className="
              font-mono text-xs font-medium
              tracking-widest text-slate-400
            "
          >
            {feature.number}
          </span>

          <div
            className="
              flex h-11 w-11 items-center justify-center
              rounded-2xl
              border border-slate-200
              bg-slate-50
              text-[#087EA4]
              transition-all duration-500
              group-hover:border-[#087EA4]/20
              group-hover:bg-[#087EA4]
              group-hover:text-white
              group-hover:rotate-3
            "
          >
            <Icon size={20} strokeWidth={1.7} />
          </div>
        </div>

        {/* Featured content */}
        {isFeatured ? (
          <div className="mt-auto pt-4">
            <div className="mb-6 flex items-end gap-3">
              <span
                className="
                  text-7xl font-semibold
                  tracking-[-0.08em]
                  text-slate-900
                  lg:text-8xl
                "
              >
                10
              </span>

              <span className="mb-3 text-3xl font-light text-[#0D9AC8]">
                +
              </span>
            </div>

            <h3 className="mb-4 text-2xl font-medium tracking-tight text-slate-900 lg:text-3xl">
              Years of Experience
            </h3>

            <p className="max-w-md text-base leading-7 text-slate-500">
              Deep industry experience, practical engineering knowledge,
              and proven approaches that help turn complex ideas into
              dependable digital products.
            </p>
          </div>
        ) : (
          <div className="mt-auto pt-4">
            <h3
              className="
                max-w-md
                text-xl font-medium
                tracking-tight text-slate-900
                transition-colors duration-300
                group-hover:text-[#087EA4]
                lg:text-2xl
              "
            >
              {feature.title}
            </h3>

            <p className="mt-3 max-w-lg text-sm leading-6 text-slate-500 lg:text-[15px]">
              {feature.description}
            </p>
          </div>
        )}

        {/* Bottom accent */}
        <div
          className="
            absolute bottom-0 left-0
            h-[2px] w-0
            bg-gradient-to-r from-[#087EA4] to-[#36C5EE]
            transition-all duration-500
            group-hover:w-full
          "
        />
      </div>
    </div>
  );
}

export function FeaturesSection() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="
        relative overflow-hidden
        bg-[#F8FAFC]
        py-24
        lg:py-32
      "
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute -left-40 top-40
            h-[420px] w-[420px]
            rounded-full
            bg-[#16A9D2]/5
            blur-[120px]
          "
        />

        <div
          className="
            absolute -right-40 bottom-20
            h-[420px] w-[420px]
            rounded-full
            bg-[#087EA4]/5
            blur-[120px]
          "
        />

        {/* Dot pattern */}
        <div
          className="
            absolute right-10 top-10
            h-40 w-40
            opacity-30
          "
          style={{
            backgroundImage:
              "radial-gradient(#94a3b8 1px, transparent 1px)",
            backgroundSize: "12px 12px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10">
        {/* Header */}
        <div
          className={`
            mb-16
            max-w-4xl
            transition-all duration-700
            lg:mb-20
            ${headerVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
            }
          `}
        >
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-10 bg-[#087EA4]" />

            <span
              className="
                font-mono text-xs
                font-medium uppercase
                tracking-[0.2em]
                text-[#087EA4]
              "
            >
              Why Grandreves
            </span>
          </div>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2
                className="
                  max-w-3xl
                  text-4xl
                  font-medium
                  leading-[1.05]
                  tracking-[-0.045em]
                  text-slate-950
                  sm:text-5xl
                  lg:text-7xl
                "
              >
                Built on experience.
                <br />

                <span
                  className="
                    bg-gradient-to-r
                    from-[#087EA4]
                    via-[#159BC1]
                    to-[#49C7EA]
                    bg-clip-text
                    text-transparent
                  "
                >
                  Driven by results.
                </span>
              </h2>
            </div>

            <p
              className="
                max-w-sm
                text-sm
                leading-6
                text-slate-500
                lg:pb-2
              "
            >
              Technology is only part of the equation. We combine
              experience, expertise, and a business-first mindset to
              create solutions that make a difference.
            </p>
          </div>
        </div>

        {/* Stats strip */}
        <div
          className="
            mb-6
            grid grid-cols-2
            overflow-hidden
            rounded-[24px]
            border border-slate-200
            bg-white
            sm:grid-cols-4
          "
        >
          <Stat
            value="10+"
            label="Years Experience"
            icon={Sparkles}
          />

          <Stat
            value="50+"
            label="Milestones"
            icon={CheckCircle2}
          />

          <Stat
            value="24/7"
            label="Support"
            icon={Headphones}
          />

          <Stat
            value="100%"
            label="Commitment"
            icon={Users}
          />
        </div>

        {/* Bento Grid */}
        <div
          className="
            grid
            auto-rows-[250px]
            grid-cols-1
            gap-5
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {/* 01 */}
          <FeatureCard feature={features[0]} index={0} />

          {/* 02 */}
          <FeatureCard feature={features[1]} index={1} />

          {/* 03 - Featured */}
          <FeatureCard feature={features[2]} index={2} />

          {/* 04 */}
          <FeatureCard feature={features[3]} index={3} />

          {/* 05 */}
          <FeatureCard feature={features[4]} index={4} />

          {/* 06 */}
          <FeatureCard feature={features[5]} index={5} />

          {/* 07 */}
          <FeatureCard feature={features[6]} index={6} />

          {/* 08 */}
          <FeatureCard feature={features[7]} index={7} />
        </div>

        {/* Bottom statement */}
        <div
          className="
            mt-8
            flex flex-col
            gap-6
            rounded-[28px]
            border border-slate-200
            bg-slate-950
            p-8
            text-white
            lg:flex-row
            lg:items-center
            lg:justify-between
            lg:p-10
          "
        >
          <div>
            <div
              className="
                mb-2
                text-xs font-medium
                uppercase tracking-[0.2em]
                text-[#49C7EA]
              "
            >
              One team. One goal.
            </div>

            <h3
              className="
                max-w-2xl
                text-2xl
                font-medium
                tracking-tight
                lg:text-3xl
              "
            >
              Turning technology into measurable business value.
            </h3>
          </div>

          <div
            className="
              flex h-12 w-12
              shrink-0 items-center justify-center
              rounded-full
              border border-white/15
              bg-white/5
            "
          >
            <ArrowUpRight
              size={20}
              className="text-[#49C7EA]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  label,
  icon: Icon,
}: {
  value: string;
  label: string;
  icon: React.ElementType;
}) {
  return (
    <div
      className="
        group
        flex items-center
        gap-4
        border-slate-200
        p-5
        transition-colors
        hover:bg-slate-50
        sm:p-6
        sm:first:border-l-0
        sm:[&:not(:last-child)]:border-r
      "
    >
      <div
        className="
          flex h-10 w-10
          shrink-0 items-center justify-center
          rounded-xl
          bg-[#087EA4]/8
          text-[#087EA4]
          transition-all duration-300
          group-hover:bg-[#087EA4]
          group-hover:text-white
        "
      >
        <Icon size={17} strokeWidth={1.8} />
      </div>

      <div>
        <div
          className="
            text-xl
            font-semibold
            tracking-tight
            text-slate-900
          "
        >
          {value}
        </div>

        <div className="mt-0.5 text-xs text-slate-400">
          {label}
        </div>
      </div>
    </div>
  );
}