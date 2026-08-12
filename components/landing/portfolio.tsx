"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Building2,
  Cloud,
  Coins,
  Gavel,
  GraduationCap,
  MessageCircle,
  ClipboardCheck,
  ShieldCheck,
  Sparkles,
  Ticket,
  Trophy,
  Users,
  WalletCards,
} from "lucide-react";

interface Project {
  number: string;
  title: string;
  description: string;
  tech: string[];
  icon: React.ElementType;
  size: "normal" | "large" | "featured";
}

const projects: Project[] = [
  {
    number: "01",
    title: "AIHub SafeZone",
    description:
      "A secure data-governance platform for South Korea's national AI data repository, managing dataset approval workflows between data holders, managers, and the MSP.",
    tech: ["React JS", "Node JS"],
    icon: ShieldCheck,
    size: "large",
  },
  {
    number: "02",
    title: "Ariistotle",
    description:
      "Real-world asset tokenization platform for fractional real-estate investment, with KYC authentication and MetaMask-backed asset storage.",
    tech: ["React JS", "Node JS", "MySQL", "MongoDB"],
    icon: WalletCards,
    size: "normal",
  },
  {
    number: "03",
    title: "Competition Management Software",
    description:
      "eTalenter streamlines competition creation, candidate management, live scoring, and automated chest-card and certificate generation for events of any scale.",
    tech: ["React JS", ".NET Core", "MySQL", "Flutter"],
    icon: Trophy,
    size: "featured",
  },
  {
    number: "04",
    title: "Edu Claim Management System",
    description:
      "Portal for DSD-formatted education-loan subsidy claims across schemes like Pado Pardesh and Dr. Ambedkar, with MIS reporting for statutory audits.",
    tech: ["Angular", "ASP.NET Core", "Oracle 19c", "Redis"],
    icon: GraduationCap,
    size: "normal",
  },
  {
    number: "05",
    title: "Didim365",
    description:
      "Cloud consulting and migration platform for an AWS value-added distributor, with native iOS/Android notification systems and offline-first sync.",
    tech: ["Flutter", "SQLite", "OneSignal", "Redis"],
    icon: Cloud,
    size: "normal",
  },
  {
    number: "06",
    title: "Door Step Gold Loan",
    description:
      "On-boarding and disbursal system letting Business Consultants collect documents and gold at a customer's doorstep, with instant credit and repayment delivery.",
    tech: ["React JS", "ASP.NET Core", "Oracle 19c"],
    icon: Coins,
    size: "large",
  },
  {
    number: "07",
    title: "Signature Solutions CMS",
    description:
      "A consultancy CMS supporting hospitality and food-service clients across India, Africa, and the GCC region.",
    tech: ["WordPress", "PHP", "MySQL", "HTML"],
    icon: Building2,
    size: "normal",
  },
  {
    number: "08",
    title: "Seekl",
    description:
      "Classroom chat application that keeps students and educators connected, encouraging students to lead conversations around their own learning.",
    tech: ["React JS", "Node JS", "MySQL", "GraphQL"],
    icon: MessageCircle,
    size: "normal",
  },
  {
    number: "09",
    title: "Digital Portal Enrolment & Raffle",
    description:
      "Three-sided raffle platform for malls and organisation clusters — client dashboard, vendor/customer QR scanning, and automated result-reminder emails.",
    tech: ["React JS", "Node JS"],
    icon: Ticket,
    size: "normal",
  },
  {
    number: "10",
    title: "Auction",
    description:
      "Recovery system for gold-backed loans covering auction requests, data capture, master configuration, write-offs, and notice tracking end-to-end.",
    tech: ["Oracle 19c", "Nest JS"],
    icon: Gavel,
    size: "large",
  },
  {
    number: "11",
    title: "Empanel",
    description:
      "Centralizes empanelment and annual review workflows for external valuers, standardizing the process across every branch and level.",
    tech: ["React JS", "Node JS"],
    icon: ClipboardCheck,
    size: "normal",
  },
  {
    number: "12",
    title: "Vendor Management",
    description:
      "Banking-sector vendor oversight system automating periodic audits, risk categorization, and due-diligence tracking by department.",
    tech: ["React JS", "Node JS"],
    icon: Users,
    size: "normal",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const Icon = project.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isLarge = project.size === "large";
  const isFeatured = project.size === "featured";
  const clampLines = isFeatured ? 5 : isLarge ? 3 : 3;

  return (
    <div
      ref={ref}
      className={`
        group relative overflow-hidden rounded-[28px]
        border border-border
        bg-card
        transition-all duration-700
        hover:-translate-y-1
        hover:border-primary/40
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
        ${isLarge ? "md:col-span-2" : isFeatured ? "md:row-span-2" : ""}
        ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
      `}
      style={{ transitionDelay: `${(index % 8) * 80}ms` }}
    >
      <div
        className="
          absolute -right-20 -top-20
          h-48 w-48 rounded-full
          bg-primary/10
          blur-3xl
          opacity-0
          transition-opacity duration-500
          group-hover:opacity-100
        "
      />

      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute left-1/4 top-0 h-full w-px bg-border" />
        <div className="absolute left-2/4 top-0 h-full w-px bg-border" />
        <div className="absolute left-3/4 top-0 h-full w-px bg-border" />
      </div>

      <div
        className={`
          relative z-10 flex h-full flex-col
          ${isFeatured ? "p-8 lg:p-10" : "p-7 lg:p-8"}
        `}
      >
        <div className="flex items-start justify-between">
          <span className="font-mono text-xs font-medium tracking-widest text-muted-foreground">
            {project.number}
          </span>

          <div
            className="
              flex h-11 w-11 items-center justify-center
              rounded-2xl
              border border-border
              bg-secondary
              text-blue-600
              transition-all duration-500
              group-hover:border-blue-600/20
              group-hover:rotate-3
            "
          >
            <Icon size={20} strokeWidth={1.7} />
          </div>
        </div>

        <div className="mt-auto pt-4">
          <h3
            className={`
              max-w-md font-medium tracking-tight text-foreground
              transition-colors duration-300
              group-hover:text-blue-600
              ${isFeatured ? "text-2xl lg:text-3xl" : "text-xl lg:text-2xl"}
            `}
          >
            {project.title}
          </h3>

          <p
            className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground lg:text-[15px]"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: clampLines,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="
                  rounded-full border border-border bg-secondary
                  px-3 py-1 text-xs font-medium text-muted-foreground
                  transition-colors duration-300
                  group-hover:border-primary/20 group-hover:bg-primary/5 group-hover:text-blue-600
                "
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div
          className="
            absolute bottom-0 left-0
            h-[2px] w-0
            bg-primary
            transition-all duration-500
            group-hover:w-full
          "
        />
      </div>
    </div>
  );
}

export function PortfolioSection() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const industryCount = 8; // banking, real-estate, AI data, edtech, hospitality, retail, logistics, cloud
  const techCount = new Set(projects.flatMap((p) => p.tech)).size;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="relative overflow-hidden bg-background py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-40 h-[420px] w-[420px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-primary/5 blur-[120px]" />
        <div
          className="absolute right-10 top-10 h-40 w-40 opacity-30"
          style={{
            backgroundImage: "radial-gradient(#94a3b8 1px, transparent 1px)",
            backgroundSize: "12px 12px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10">
        <div
          className={`
            mb-16 max-w-4xl transition-all duration-700 lg:mb-20
            ${headerVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
          `}
        >
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-blue-600">
              Our Portfolio
            </span>
          </div>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="max-w-3xl text-4xl font-medium leading-[1.05] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-7xl">
                Ideas we've
                <br />
                <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  shipped to production.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-muted-foreground lg:pb-2">
              A snapshot of platforms we've designed, built, and scaled across
              banking, fintech, edtech, and cloud — solving real operational
              problems, not just shipping features.
            </p>
          </div>
        </div>

        <div className="mb-6 grid grid-cols-2 overflow-hidden rounded-[24px] border border-border bg-card sm:grid-cols-4">
          <Stat value={`${projects.length}+`} label="Projects Delivered" icon={Sparkles} />
          <Stat value={`${industryCount}+`} label="Industries Served" icon={Building2} />
          <Stat value={`${techCount}+`} label="Technologies Used" icon={Coins} />
          <Stat value="100%" label="In-House Built" icon={ShieldCheck} />
        </div>

        <div className="grid auto-rows-[280px] grid-cols-1 gap-5 [grid-auto-flow:dense] md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-6 rounded-[28px] border border-border bg-primary p-8 text-primary-foreground lg:flex-row lg:items-center lg:justify-between lg:p-10">
          <div>
            <div className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
              Have a project in mind?
            </div>
            <h3 className="max-w-2xl text-2xl font-medium tracking-tight lg:text-3xl">
              Let's build something that fits your workflow, not the other way around.
            </h3>
          </div>

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary-foreground/15 bg-primary-foreground/5">
            <ArrowUpRight size={20} className="text-primary-foreground" />
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
        group flex items-center gap-4
        border-border p-5
        transition-colors
        hover:bg-accent
        sm:p-6
        sm:first:border-l-0
        sm:[&:not(:last-child)]:border-r
      "
    >
      <div
        className="
          flex h-10 w-10 shrink-0 items-center justify-center
          rounded-xl bg-accent text-blue-600
          transition-all duration-300
        "
      >
        <Icon size={17} strokeWidth={1.8} />
      </div>

      <div>
        <div className="text-xl font-semibold tracking-tight text-foreground">{value}</div>
        <div className="mt-0.5 text-xs text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}