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
  fullDescription: string;
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
    fullDescription:
      "South Korea, with a steadfast commitment to advancing its AI capabilities, aspires to establish a prominent global presence in the AI technologies market. AIHub, a repository of Artificial Intelligence data, serves as a comprehensive resource, offering diverse datasets essential for AI learning. The data is made available upon request, following a meticulous approval process involving the data holder, data manager, and Managed Service Provider (MSP). The Safezone app meticulously manages and controls this data online, leveraging the ReactJS and NodeJS platform to ensure a secure and efficient operation.",
    tech: ["React JS", "Node JS"],
    icon: ShieldCheck,
    size: "large",
  },
  {
    number: "02",
    title: "Ariistotle",
    description:
      "Real-world asset tokenization platform for fractional real-estate investment, with KYC authentication and MetaMask-backed asset storage.",
    fullDescription:
      "Ariistotle is a revolutionary platform ushering in a new era for seamless trading of Real World Asset Tokens, initially focusing on Real Estate Asset Tokens. This innovative platform enables users to participate in real estate investments with minimal capital, backed by a team proficient in Portfolio Management, Real Estate, and Blockchain Technology. Beyond real estate, Ariistotle introduces diverse global tradable assets to the decentralized space, offering a secure ecosystem with advanced KYC authentication, support for multiple currencies, a centralized console for efficient asset management, and secure storage on MetaMask wallets.",
    tech: ["React JS", "Node JS", "MySQL", "MongoDB"],
    icon: WalletCards,
    size: "normal",
  },
  {
    number: "03",
    title: "Competition Management Software",
    description:
      "eTalenter streamlines competition creation, candidate management, live scoring, and automated chest-card and certificate generation for events of any scale.",
    fullDescription:
      "eTalenter is an advanced online competition management software with a streamlined and secure framework designed for competitions of varying scales. Its versatile features include seamless competition creation, candidate addition, result management, online scoring, and the generation of chest cards and certificates. With its functional token-projector system, automated ID generation, and comprehensive tools for efficient competition operations, eTalenter provides a precise and organized solution for competition management.",
    tech: ["React JS", ".NET Core", "MySQL", "Flutter"],
    icon: Trophy,
    size: "featured",
  },
  {
    number: "04",
    title: "Edu Claim Management System",
    description:
      "Portal for DSD-formatted education-loan subsidy claims across schemes like Pado Pardesh and Dr. Ambedkar, with MIS reporting for statutory audits.",
    fullDescription:
      "It functions as a dedicated portal for streamlined submission of subsidy claims in accordance with Ministry guidelines, instructing Member Banks on DSD-formatted claim submissions and efficiently managing operations for education loans. The system encompasses capturing loan details, data preparation, report generation, and maintenance under schemes like Pado Pardesh, Dr. Ambedkar, and CSIS, ensuring accurate uploads through MIS data and facilitating swift statutory audits.",
    tech: ["Angular", "ASP.NET Core", "Oracle 19c", "Redis"],
    icon: GraduationCap,
    size: "normal",
  },
  {
    number: "05",
    title: "Didim365",
    description:
      "Cloud consulting and migration platform for an AWS value-added distributor, with native iOS/Android notification systems and offline-first sync.",
    fullDescription:
      "Didim365, a Cloud Service Consulting, Migration and Maintenance specialist, is an AWS value-added distributor. Facing challenges in the implementation of iOS features through Objective-C and Android features through Java, the project also involved mobile device-based testing and offline data storage using SQLite and Redis. The project included the development of a Cloud Company Notification System and was executed in South Korea for both Android and iOS devices.",
    tech: ["Flutter", "SQLite", "OneSignal", "Redis"],
    icon: Cloud,
    size: "normal",
  },
  {
    number: "06",
    title: "Door Step Gold Loan",
    description:
      "On-boarding and disbursal system letting Business Consultants collect documents and gold at a customer's doorstep, with instant credit and repayment delivery.",
    fullDescription:
      "In the door step gold loan facility, the Bank, through Business Consultants, reaches out to the customer's doorstep to on-board the customer and to collect the documents and gold ornaments. The system envisages instantaneous credit of the loan amount to the customer's account, and also delivery of the gold ornaments back to their doorstep on repayment.",
    tech: ["React JS", "ASP.NET Core", "Oracle 19c"],
    icon: Coins,
    size: "large",
  },
  {
    number: "07",
    title: "Signature Solutions CMS",
    description:
      "A consultancy CMS supporting hospitality and food-service clients across India, Africa, and the GCC region.",
    fullDescription:
      "With extensive experience in the hospitality and food-related industries across India, Africa, and GCC countries, Signature Training & Consultancy is well-equipped to offer a diverse range of specialized support services to meet evolving business and local agency needs. Their team of full-time staff, associates, and part-time professionals brings a wealth of experience, skills, and qualifications, fostering business growth through independent thinking, tailored recommendations, and a commitment to maintaining confidential and respectful client relationships.",
    tech: ["WordPress", "PHP", "MySQL", "HTML"],
    icon: Building2,
    size: "normal",
  },
  {
    number: "08",
    title: "Seekl",
    description:
      "Classroom chat application that keeps students and educators connected, encouraging students to lead conversations around their own learning.",
    fullDescription:
      "Seekl is a dedicated chat application designed for learning environments, fostering engagement and connectivity among students. It serves as a valuable tool to maintain consistent communication and empowers students to take the lead in conversations by showcasing their learning within the classroom. With Seekl, educators can create an interactive and collaborative space that enhances the overall learning experience.",
    tech: ["React JS", "Node JS", "MySQL", "GraphQL"],
    icon: MessageCircle,
    size: "normal",
  },
  {
    number: "09",
    title: "Digital Portal Enrolment & Raffle",
    description:
      "Three-sided raffle platform for malls and organisation clusters — client dashboard, vendor/customer QR scanning, and automated result-reminder emails.",
    fullDescription:
      "A digital portal for setting up raffle draws that occur within malls and organisation clusters during festivals. The project consists of three interfaces: a web application for the client, such as a mall or any other organisation cluster like a jewellery group; a web interface for vendors and/or customers which includes a QR code scanning scenario; and email integration for sending reminders to customers regarding the raffle draw and its results.",
    tech: ["React JS", "Node JS"],
    icon: Ticket,
    size: "normal",
  },
  {
    number: "10",
    title: "Auction",
    description:
      "Recovery system for gold-backed loans covering auction requests, data capture, master configuration, write-offs, and notice tracking end-to-end.",
    fullDescription:
      "The Gold Loan Auction is a comprehensive system meticulously crafted to optimize the recovery process of gold-backed loans, ensuring efficiency and transparency throughout. It encompasses specialized modules for Auction Request, Auction Data Capture, Master Configuration, Write-Off Request, Notice Tracking, and Reporting, providing a seamless and structured workflow. This project aims to enhance operational effectiveness in managing gold-backed loans while maintaining transparency in the overall process.",
    tech: ["Oracle 19c", "Nest JS"],
    icon: Gavel,
    size: "large",
  },
  {
    number: "11",
    title: "Empanel",
    description:
      "Centralizes empanelment and annual review workflows for external valuers, standardizing the process across every branch and level.",
    fullDescription:
      "The Empanel Application is designed to efficiently oversee outsourced services, specifically addressing the end-to-end process of empanelment and annual reviews for external valuers. This comprehensive solution streamlines and centralizes the entire workflow associated with the empanelment and annual review procedures, ensuring seamless and standardized processes across branches and levels of the organization.",
    tech: ["React JS", "Node JS"],
    icon: ClipboardCheck,
    size: "normal",
  },
  {
    number: "12",
    title: "Vendor Management",
    description:
      "Banking-sector vendor oversight system automating periodic audits, risk categorization, and due-diligence tracking by department.",
    fullDescription:
      "The Vendor Management Application is a sophisticated solution aimed at optimizing the oversight of external vendors in the banking sector. It facilitates periodic vendor audits, capturing details such as risk categories, user departments, and audit observations. Additionally, the system automates due diligence procedures, enhancing efficiency and compliance for vendors across different risk levels.",
    tech: ["React JS", "Node JS"],
    icon: Users,
    size: "normal",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
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
      // { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isLarge = project.size === "large";
  const isFeatured = project.size === "featured";
  const clampLines = isFeatured ? 8 : 3;

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
      <div
        className={`
          relative z-10 flex h-full flex-col
          ${isFeatured ? "pt-5 pb-5 px-6 lg:pt-6 lg:pb-6 lg:px-8" : "pt-4 pb-4 px-5 lg:pt-5 lg:pb-5 lg:px-6"}
        `}
      >
        {/* Header - Icon and Title inline */}
        <div className="flex items-center gap-3 mb-2.5">
          <div
            className="
              flex h-10 w-10 shrink-0 items-center justify-center
              rounded-xl
              border border-border
              bg-secondary
              transition-all duration-500
              group-hover:border-transparent
              group-hover:bg-gradient-to-r group-hover:from-[#087EA4] group-hover:via-[#18A8D1] group-hover:to-[#24B35A]
              group-hover:rotate-3
            "
          >
            <Icon
              size={18}
              strokeWidth={1.7}
              stroke="url(#icon-grad-portfolio)"
              className="group-hover:stroke-white transition-colors duration-300"
            />
          </div>

          <h3
            className={`
              font-semibold tracking-tight text-foreground
              transition-all duration-300
              group-hover:bg-gradient-to-r group-hover:from-[#087EA4] group-hover:via-[#18A8D1] group-hover:to-[#24B35A] group-hover:bg-clip-text group-hover:text-transparent
              ${isFeatured ? "text-xl lg:text-2xl" : "text-lg lg:text-xl"}
            `}
          >
            {project.title}
          </h3>
        </div>

        {/* Content body flowing naturally */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <p
              className="max-w-lg text-[14px] leading-5 text-muted-foreground lg:text-sm lg:leading-6"
              style={
                expanded
                  ? undefined
                  : {
                    display: "-webkit-box",
                    WebkitLineClamp: clampLines,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }
              }
            >
              {project.fullDescription}
            </p>

            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="mt-1.5 inline-flex items-center gap-1 text-[14px] font-semibold text-[#087EA4] transition-colors hover:text-teal-600"
            >
              {expanded ? "Show less" : "Show more"}
            </button>
          </div>

          <div className="mt-3 flex flex-wrap gap-1.5">
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
    <section id="portfolio" ref={sectionRef} className="relative overflow-hidden bg-white py-4 lg:py-8">
      {/* Global SVG Gradients for Icons */}
      <svg className="absolute w-0 h-0 pointer-events-none" width="0" height="0">
        <defs>
          <linearGradient id="icon-grad-portfolio" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#087EA4" />
            <stop offset="50%" stopColor="#18A8D1" />
            <stop offset="100%" stopColor="#24B35A" />
          </linearGradient>
        </defs>
      </svg>
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
<span className="font-sans text-medium font-medium uppercase tracking-[0.2em] text-[#087EA4]">
                Our Portfolio
            </span>
          </div>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="max-w-3xl text-4xl text-[#164A5B] font-bold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
                Ideas we've
                <br />
                <span className="inline-flex font-bold bg-gradient-to-r from-[#087EA4] via-[#18A8D1] to-[#24B35A] bg-clip-text text-transparent">
                  shipped to production.
                </span>
              </h2>
            </div>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base lg:text-lg">
              A snapshot of platforms we've designed, built, and scaled across
              banking, fintech, edtech, and cloud — solving real operational
              problems, not just shipping features.
            </p>
          </div>
        </div>

        {/* <div className="mb-6 grid grid-cols-2 overflow-hidden rounded-[24px] border border-border bg-card sm:grid-cols-4">
          <Stat value={`${projects.length}+`} label="Projects Delivered" icon={Sparkles} />
          <Stat value={`${industryCount}+`} label="Industries Served" icon={Building2} />
          <Stat value={`${techCount}+`} label="Technologies Used" icon={Coins} />
          <Stat value="100%" label="In-House Built" icon={ShieldCheck} />
        </div> */}

        <div className="grid grid-cols-1 items-start gap-5 [grid-auto-flow:dense] md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-6 rounded-[28px] border border-border bg-[#020611] p-8 text-primary-foreground lg:flex-row lg:items-center lg:justify-between lg:p-10">
          <div>
            <div className="font-sans text-medium font-medium uppercase tracking-[0.2em] text-[#087EA4]">
  Have a project in mind?
</div>
            <h3 className="max-w-2xl text-2xl font-medium tracking-tight lg:text-3xl">
              Let's build something that fits your workflow, not the other way around.
            </h3>
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
          rounded-xl bg-accent
          transition-all duration-300
        "
      >
        <Icon
          size={17}
          strokeWidth={1.8}
          stroke="url(#icon-grad-portfolio)"
        />
      </div>

      <div>
        <div className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">{value}</div>
        <div className="mt-1 text-[14px] font-medium text-slate-500">{label}</div>
      </div>
    </div>
  );
}