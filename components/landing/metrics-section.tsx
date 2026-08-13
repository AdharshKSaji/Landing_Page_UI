"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import {
  Building,
  Shield,
  Award,
  Users,
  TrendingUp,
  Gavel,
  ArrowRight,
  Sparkles,
  X,
  Mail,
  BookOpen,
  MessageSquare,
  Check,
  ExternalLink,
  Clock,
  Zap,
  BarChart3,
  FileCheck,
  GitBranch,
  HandCoins,
  LandPlot,
  LayoutGrid,
  LucideIcon,
} from "lucide-react";

interface Product {
  name: string;
  icon: LucideIcon;
  description: string;
  features: string[];
  category: string;
  status: "Available" | "Coming Soon" | "Beta";
  detailedDescription: string;
  longDescription?: string;
  benefits?: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

const products: Product[] = [
  {
    name: "Vendor Management System",
    icon: Building,
    description:
      "Streamline vendor relationships and optimize supply chain operations with intelligent automation.",
    features: ["Automated Onboarding", "Performance Tracking", "Risk Assessment"],
    category: "Operations",
    status: "Available",
    detailedDescription:
      "Our Vendor Management System revolutionizes how enterprises manage their supplier ecosystem. By leveraging intelligent automation and data-driven insights, we help organizations reduce procurement cycles by up to 40% while ensuring compliance and fostering stronger vendor relationships.",
    longDescription:
      "The Grandreves Vendor Management System (VMS) is an enterprise-grade platform designed to centralize and optimize all vendor-related activities. From initial onboarding through performance evaluation and contract renewal, our VMS provides complete visibility and control over your supply chain. Advanced analytics and risk assessment tools enable proactive decision-making, while automated workflows eliminate manual errors and reduce administrative overhead.",
    benefits: [
      "40% reduction in procurement cycle time",
      "Centralized vendor data repository",
      "Automated compliance monitoring",
      "Real-time performance dashboards",
      "Seamless ERP integration",
    ],
    metrics: [
      { label: "Vendor Onboarding", value: "3x faster" },
      { label: "Compliance Rate", value: "99.7%" },
      { label: "Cost Savings", value: "25-35%" },
    ],
  },
  {
    name: "Audit Management System",
    icon: Shield,
    description:
      "Ensure compliance and automate audit workflows with precision and real-time monitoring.",
    features: ["Real-time Monitoring", "Compliance Tracking", "Automated Reporting"],
    category: "Compliance",
    status: "Available",
    detailedDescription:
      "Transform your audit processes with our comprehensive Audit Management System. Designed to automate every facet of auditing—from planning and preparation to reporting and follow-up—our solution helps organizations achieve compliance, mitigate risk, and drive operational excellence.",
    longDescription:
      "The Grandreves Audit Management System (AMS) redefines how organizations approach compliance and risk management. Built on a robust, scalable architecture, our AMS provides end-to-end audit lifecycle management with features like automated scheduling, real-time evidence collection, and intelligent risk scoring. Deep analytics and customizable reporting empower audit teams to identify trends, track remediation, and demonstrate compliance with confidence.",
    benefits: [
      "Automated audit workflow management",
      "Real-time risk scoring and alerts",
      "Centralized evidence repository",
      "Customizable report generation",
      "Regulatory compliance mapping",
    ],
    metrics: [
      { label: "Audit Efficiency", value: "60% faster" },
      { label: "Issue Resolution", value: "45% quicker" },
      { label: "Compliance Rate", value: "98.5%" },
    ],
  },
  {
    name: "Quality Management System",
    icon: Award,
    description:
      "Maintain high standards with integrated quality control processes and continuous improvement.",
    features: ["Quality Control", "Process Optimization", "Continuous Improvement"],
    category: "Quality",
    status: "Available",
    detailedDescription:
      "Empower your organization with a comprehensive Quality Management System that drives excellence across all operations. Our QMS provides the framework for documenting processes, managing quality policies, and fostering a culture of continuous improvement.",
    longDescription:
      "The Grandreves Quality Management System (QMS) is engineered to help organizations achieve and maintain the highest quality standards. With modules for document control, corrective and preventive actions (CAPA), non-conformance management, and supplier quality, our QMS ensures complete traceability and accountability. Real-time analytics and dashboards provide visibility into quality metrics, enabling data-driven decisions that improve product quality and customer satisfaction.",
    benefits: [
      "Integrated document management",
      "Automated CAPA workflows",
      "Supplier quality tracking",
      "Real-time quality dashboards",
      "Audit-ready reporting",
    ],
    metrics: [
      { label: "Quality Score", value: "99.2%" },
      { label: "Defect Reduction", value: "55%" },
      { label: "Customer Satisfaction", value: "96%" },
    ],
  },
  {
    name: "Customer Relationship Management",
    icon: Users,
    description:
      "Build lasting relationships with intelligent CRM solutions that drive customer success.",
    features: ["Lead Management", "Analytics Dashboard", "Automated Workflows"],
    category: "Sales",
    status: "Available",
    detailedDescription:
      "Elevate customer interactions with our intelligent CRM solution designed to nurture relationships and drive revenue. Beyond basic contact management, our platform provides comprehensive tools for sales optimization, marketing automation, and customer success.",
    longDescription:
      "The Grandreves Customer Relationship Management (CRM) system is built for modern enterprises seeking to deepen customer engagement and accelerate growth. Combining AI-powered lead scoring, automated workflow orchestration, and advanced analytics, our CRM provides a 360-degree view of every customer interaction. Integration with marketing automation and customer support tools ensures seamless handoffs and consistent experiences across the entire customer journey.",
    benefits: [
      "AI-powered lead scoring",
      "Automated marketing campaigns",
      "360-degree customer view",
      "Predictive sales analytics",
      "Mobile-ready interface",
    ],
    metrics: [
      { label: "Sales Efficiency", value: "35% increase" },
      { label: "Lead Conversion", value: "28% higher" },
      { label: "Customer Retention", value: "94%" },
    ],
  },
  {
    name: "FinTech GoldLoan Management",
    icon: TrendingUp,
    description:
      "Modernize gold loan processing with secure fintech capabilities and real-time valuation.",
    features: ["Real-time Valuation", "Secure Processing", "Instant Approval"],
    category: "FinTech",
    status: "Available",
    detailedDescription:
      "Transform gold loan processing with our secure, intelligent FinTech platform. Leveraging cutting-edge technology for real-time valuation, instant approvals, and seamless integration with banking systems, we enable financial institutions to deliver superior customer experiences.",
    longDescription:
      "The Grandreves GoldLoan Management Platform is a comprehensive solution for financial institutions offering gold-backed lending services. Our platform combines automated valuation models, real-time market data integration, and secure transaction processing to streamline loan origination and management. Advanced risk assessment algorithms ensure accurate valuations, while automated workflows reduce processing times from days to minutes.",
    benefits: [
      "Instant loan approvals",
      "Real-time gold valuation",
      "Secure transaction processing",
      "Regulatory compliance",
      "Scalable architecture",
    ],
    metrics: [
      { label: "Processing Time", value: "< 15 min" },
      { label: "Valuation Accuracy", value: "99.5%" },
      { label: "Customer Satisfaction", value: "97%" },
    ],
  },
  {
    name: "Auction Management",
    icon: Gavel,
    description:
      "Powerful auction platforms for seamless bidding and transparent transaction management.",
    features: ["Live Bidding", "Secure Transactions", "Real-time Updates"],
    category: "Marketplace",
    status: "Available",
    detailedDescription:
      "Launch and manage high-performance auction platforms with our comprehensive solution. Designed for marketplaces, auction houses, and enterprises, our platform delivers engaging bidding experiences with enterprise-grade security and reliability.",
    longDescription:
      "The Grandreves Auction Management Platform is a feature-rich solution for organizations seeking to create or enhance their auction capabilities. From real-time bidding engines to multi-currency support and advanced analytics, our platform provides everything needed to run successful auctions. Built on a microservices architecture, the platform scales effortlessly to handle peak demand while maintaining sub-second response times.",
    benefits: [
      "Real-time bidding engine",
      "Multi-currency support",
      "Advanced fraud detection",
      "Comprehensive analytics",
      "White-label ready",
    ],
    metrics: [
      { label: "Transaction Speed", value: "< 500ms" },
      { label: "Uptime", value: "99.99%" },
      { label: "Bidder Engagement", value: "65% higher" },
    ],
  },
];

const statusColors = {
  Available: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
  "Coming Soon": "text-amber-500 bg-amber-500/10 border-amber-500/20",
  Beta: "text-blue-500 bg-blue-500/10 border-blue-500/20",
};

export function MetricsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProduct]);

  const scrollToCta = () => {
    setSelectedProduct(null);
    const ctaSection = document.getElementById("cta");
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        id="products"
        ref={sectionRef}
        className="relative pt-2 pb-10 lg:pt-2 lg:pb-16 overflow-hidden bg-white text-[#171A1C]"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.02] rounded-full blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 40px, currentColor 40px, currentColor 41px),
                repeating-linear-gradient(90deg, transparent, transparent 40px, currentColor 40px, currentColor 41px)
              `,
            }}
          />
        </div>

        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-16">
          {/* Header */}
          <div className="mb-10 lg:mb-12">
            <div className="flex items-center gap-3 mb-6">
              {/* <span className="w-8 h-px bg-gradient-to-r from-primary/60 to-transparent" /> */}
              <span className="h-px w-8 bg-blue-500" />
              <span className="text-medium font-bold uppercase tracking-[0.22em] bg-gradient-to-r from-[#087EA4] via-[#18A8D1] to-[#24B35A] bg-clip-text text-transparent">
                Enterprise Solutions
              </span>

            </div>

            <div
              className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display tracking-tight leading-[1.08]">
                <span className="block text-[#164A5B] font-bold">
                  Technology Engineered to
                </span>
                <span className="inline-flex font-bold bg-gradient-to-r from-[#087EA4] via-[#18A8D1] to-[#24B35A] bg-clip-text text-transparent">
                  Transform Your Business
                </span>
              </h2>

              <p className="mt-6 text-lg text-muted-foreground max-w-3xl leading-relaxed">
                At the forefront of technological advancement, we deliver enterprise-grade
                solutions engineered to scale, secure, and transform your operations.
                Our product suite empowers organizations to achieve operational
                excellence and drive sustainable growth.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">


                </div>
                <div className="flex items-center gap-2 text-medium text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  <span>100% Production Ready</span>
                </div>
                <div className="flex items-center gap-2 text-medium text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-purple-500" />
                  <span>Enterprise Grade Security</span>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div
            className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <LayoutGrid className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-display tracking-tight font-bold bg-gradient-to-r from-[#087EA4] via-[#18A8D1] to-[#24B35A] bg-clip-text text-transparent">
  Our Product Suite
</h3>

              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => {
                const Icon = product.icon;
                const isHovered = hoveredProduct === product.name;
                return (
                  <div
                    key={product.name}
                    className={cn(
                      "group relative p-7 rounded-2xl border transition-all duration-500 cursor-pointer text-white",
                      isHovered
                        ? "border-blue-500/50 bg-[#0c1e3f] shadow-[0_0_50px_rgba(37,99,235,0.12)]"
                        : "border-white/10 bg-[#061126] hover:border-blue-500/30"
                    )}
                    onMouseEnter={() => setHoveredProduct(product.name)}
                    onMouseLeave={() => setHoveredProduct(null)}
                    onClick={() => setSelectedProduct(product)}
                  >
                    {/* Background Effects */}
                    <div
                      className={cn(
                        "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500",
                        "bg-gradient-to-br from-blue-500/10 via-transparent to-blue-500/5",
                        isHovered && "opacity-100"
                      )}
                    />
                    <div
                      className={cn(
                        "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 pointer-events-none",
                        "bg-gradient-to-r from-blue-500/15 via-transparent to-blue-500/15 blur-2xl",
                        isHovered && "opacity-100"
                      )}
                    />

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3.5">
                          <div
                            className={cn(
                              "p-2.5 rounded-xl transition-all duration-300",
                              isHovered
                                ? "bg-blue-500/20 shadow-lg shadow-blue-500/10"
                                : "bg-blue-500/10"
                            )}
                          >
                            <Icon
                              className={cn(
                                "w-5 h-5 transition-colors duration-300",
                                isHovered ? "text-blue-400" : "text-blue-400/70"
                              )}
                            />
                          </div>
                          <div>
                            <h4
                              className={cn(
                                "text-base font-semibold transition-colors duration-300 leading-tight",
                                isHovered ? "text-blue-400" : "text-white"
                              )}
                            >
                              {product.name}
                            </h4>
                            {product.status !== "Available" && (
                              <div className="flex items-center gap-2 mt-1">
                                <span
                                  className={cn(
                                    "text-[10px] font-mono px-2 py-0.5 rounded-full border",
                                    statusColors[product.status]
                                  )}
                                >
                                  {product.status}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-slate-300 leading-relaxed mb-4 line-clamp-2">
                        {product.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-1.5">
                        {product.features.slice(0, 3).map((feature) => (
                          <span
                            key={feature}
                            className={cn(
                              "text-xs px-2.5 py-1 rounded-full border transition-colors duration-300 font-medium",
                              isHovered
                                ? "border-blue-500/30 bg-blue-500/10 text-blue-300"
                                : "border-white/5 bg-white/5 text-slate-300"
                            )}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Action */}
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <button
                          className={cn(
                            "w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium",
                            isHovered
                              ? "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-500/20"
                              : "bg-white/5 hover:bg-white/10 text-white"
                          )}
                        >
                          Learn More
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/45 backdrop-blur-[5px] animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedProduct(null);
            }
          }}
        >
          <div
            className="
        relative w-full max-w-[860px]
        max-h-[92vh]
        overflow-y-auto
        bg-white
        text-[#171A1C]
        rounded-[18px]
        border border-black/[0.08]
        shadow-[0_25px_80px_rgba(0,0,0,0.18)]
        animate-in
        zoom-in-[0.98]
        duration-300
      "
          >
            {/* ───────────────────────── CLOSE ───────────────────────── */}
            <button
              onClick={() => setSelectedProduct(null)}
              aria-label="Close"
              className="
          absolute
          top-4
          right-4
          z-20
          w-8
          h-8
          flex
          items-center
          justify-center
          rounded-full
          text-[#737373]
          hover:text-[#171A1C]
          hover:bg-black/[0.05]
          transition-all
        "
            >
              <X className="w-[15px] h-[15px]" />
            </button>

            <div className="px-6 py-6 sm:px-8 sm:py-7 lg:px-10 lg:py-8">

              {/* ───────────────────────── HEADER ───────────────────────── */}
              <div className="pr-10">
                <div className="flex flex-wrap items-center gap-3 mb-3.5">
                  {/* Small icon */}
                  <div
                    className="
                      w-10
                      h-10
                      shrink-0
                      rounded-xl
                      border
                      border-black/[0.08]
                      bg-[#f7f7f7]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <selectedProduct.icon
                      className="w-5 h-5 text-[#303030]"
                    />
                  </div>

                  <h3
                    className="
                      text-[22px]
                      sm:text-[26px]
                      font-semibold
                      tracking-[-0.035em]
                      leading-tight
                      text-[#171A1C]
                    "
                  >
                    {selectedProduct.name}
                  </h3>

                  {selectedProduct.status !== "Available" && (
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-[0.08em] px-2 py-0.5 rounded-full border",
                        selectedProduct.status === "Beta"
                          ? "text-blue-600 border-blue-200 bg-blue-50/50"
                          : "text-amber-600 border-amber-200 bg-amber-50/50"
                      )}
                    >
                      <span
                        className={cn(
                          "w-1.5 h-1.5 rounded-full",
                          selectedProduct.status === "Beta"
                            ? "bg-blue-500 animate-pulse"
                            : "bg-amber-500 animate-pulse"
                        )}
                      />
                      {selectedProduct.status}
                    </span>
                  )}
                </div>
              </div>


              {/* ───────────────────────── DIVIDER ───────────────────────── */}
              <div className="h-px bg-black/[0.07] mt-5 mb-5" />


              {/* ───────────────────────── DESCRIPTION ───────────────────────── */}
              <div className="space-y-3">

                <p className="text-md sm:text-md leading-[1.6] text-[#444] max-w-[780px]">
                  {selectedProduct.detailedDescription}
                </p>

                {selectedProduct.longDescription && (
                  <p className="text-md sm:text-md leading-[1.6] text-[#666] max-w-[780px]">
                    {selectedProduct.longDescription}
                  </p>
                )}

              </div>


              {/* ───────────────────────── METRICS ───────────────────────── */}
              {selectedProduct.metrics && (
                <div className="mt-6 grid grid-cols-3 border border-black/[0.07] rounded-xl overflow-hidden bg-[#fafafa]">
                  {selectedProduct.metrics.map((metric, index) => (
                    <div
                      key={metric.label}
                      className={cn(
                        "px-3 py-4 sm:py-4.5 text-center",
                        index !== selectedProduct.metrics!.length - 1 &&
                        "border-r border-black/[0.07]"
                      )}
                    >
                      <div className="text-[18px] sm:text-[21px] font-semibold tracking-[-0.03em] text-[#171A1C]"> {metric.value} </div>
                      <div className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}


              {/* ───────────────────────── KEY BENEFITS ───────────────────────── */}
              {selectedProduct.benefits && (
                <div className="mt-6">
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#666]">
                      Key Benefits
                    </span>
                    <span className="h-px flex-1 bg-black/[0.06]" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProduct.benefits.map((benefit) => (
                      <div key={benefit}
                        className="flex items-center gap-2.5 min-h-[35px] px-3 rounded-md border border-black/[0.07] bg-[#fbfbfb] text-[14px] sm:text-[15px] text-[#444]">
                        <Check className="w-3 h-3 text-[#555] shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}


              {/* ───────────────────────── CORE CAPABILITIES ───────────────────────── */}
              <div className="mt-6">
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="text-[14px] font-semibold uppercase tracking-[0.12em] text-[#666]">
                    Core Capabilities
                  </span>
                  <span className="h-px flex-1 bg-black/[0.06]" />

                </div>

                <div className="flex flex-wrap gap-2">

                  {selectedProduct.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-black/[0.1] bg-white text-[9px] sm:text-[14px] font-medium text-[#444]"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#888]"
                      />

                      {feature}
                    </span>
                  ))}

                </div>

              </div>



            </div>
          </div>
        </div>
      )}
    </>
  );
}