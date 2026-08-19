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
  X,
  Check,
  LayoutGrid,
  LucideIcon,
  Smartphone,
  Sparkles,
  Zap,
  Cpu,
  Database,
  Cloud,
  Lock,
  Globe,
  Code,
  Bot,
  BarChart3,
  Network,
  Blocks,
  Cog,
  Microchip,
  Truck,
  Landmark,
  ChevronUp,
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
      "Optimize external vendor oversight in banking with automated audits and risk-based due diligence.",
    features: ["Periodic Audits", "Risk Categorization", "Due Diligence Automation", "Compliance Tracking"],
    category: "Operations",
    status: "Available",
    detailedDescription:
      "A sophisticated solution for banking sector vendor oversight. Facilitates periodic audits capturing risk categories, user departments, and observations while automating due diligence procedures to enhance efficiency and compliance across all risk levels.",
    longDescription:
      "Enterprise-grade platform for financial institutions to centralize vendor management. Enables systematic audits with detailed tracking of risk classifications, departmental assignments, and findings. Automated due diligence workflows ensure consistent compliance assessment across vendors of all risk tiers, reducing manual effort while providing real-time visibility into vendor performance, risk exposure, and compliance status.",
    benefits: [
      "Automated periodic vendor audits",
      "Risk-based vendor categorization",
      "Streamlined due diligence workflows",
      "Real-time compliance monitoring",
      "Centralized vendor documentation",
      "Regulatory reporting capabilities",
    ],
    metrics: [
      { label: "Audit Efficiency", value: "60% faster" },
      { label: "Compliance Rate", value: "99.5%" },
      { label: "Risk Coverage", value: "100%" },
    ],
  },
  {
    name: "Audit Management System",
    icon: Shield,
    description:
      "Automate audit workflows with real-time monitoring and compliance tracking.",
    features: ["Real-time Monitoring", "Compliance Tracking", "Automated Reporting"],
    category: "Compliance",
    status: "Available",
    detailedDescription:
      "End-to-end audit automation from planning through reporting. Achieve compliance, mitigate risk, and drive operational excellence with precision monitoring.",
    longDescription:
      "Complete audit lifecycle management with automated scheduling, real-time evidence collection, and intelligent risk scoring. Advanced analytics and customizable reporting empower teams to identify trends, track remediation, and demonstrate compliance confidently.",
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
      "Maintain high standards with integrated quality control and continuous improvement.",
    features: ["Quality Control", "Process Optimization", "Continuous Improvement"],
    category: "Quality",
    status: "Available",
    detailedDescription:
      "Comprehensive framework for documenting processes, managing quality policies, and fostering continuous improvement across all operations.",
    longDescription:
      "Achieve highest quality standards with modules for document control, corrective and preventive actions (CAPA), non-conformance management, and supplier quality. Complete traceability with real-time analytics and dashboards for data-driven quality decisions.",
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
      "Intelligent CRM solution for building lasting relationships and driving customer success.",
    features: ["Lead Management", "Analytics Dashboard", "Automated Workflows"],
    category: "Sales",
    status: "Available",
    detailedDescription:
      "Nurture relationships and drive revenue with comprehensive sales optimization, marketing automation, and customer success tools.",
    longDescription:
      "AI-powered lead scoring, automated workflow orchestration, and advanced analytics provide a 360-degree customer view. Seamless integration with marketing automation and support tools ensures consistent experiences across the entire customer journey.",
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
      "Secure, intelligent platform for real-time gold valuation, instant approvals, and seamless banking system integration.",
    longDescription:
      "Comprehensive solution for gold-backed lending with automated valuation models, real-time market data integration, and secure transaction processing. Advanced risk assessment ensures accurate valuations while automated workflows reduce processing times from days to minutes.",
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
      "Powerful platforms for seamless bidding and transparent transaction management.",
    features: ["Live Bidding", "Secure Transactions", "Real-time Updates"],
    category: "Marketplace",
    status: "Available",
    detailedDescription:
      "High-performance auction platforms delivering engaging bidding experiences with enterprise-grade security and reliability.",
    longDescription:
      "Feature-rich solution with real-time bidding engines, multi-currency support, and advanced analytics. Built on microservices architecture that scales effortlessly to handle peak demand with sub-second response times.",
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
  {
    name: "Sharjah Education Academy (SEA) Mobile App",
    icon: Smartphone,
    description:
      "Enterprise mobile app providing centralized access to academic, administrative, and organizational services.",
    features: [
      "Role-based Access",
      "Oracle Fusion ERP Integration",
      "Nursery Management Integration",
      "Multi-service Portal",
    ],
    category: "Mobile Enterprise",
    status: "Available",
    detailedDescription:
      "Enterprise-grade mobile solution transforming academic and administrative service delivery. Seamlessly integrated with Oracle Fusion ERP and Nursery Management System for personalized, role-based experiences.",
    longDescription:
      "Unified mobile platform enabling access to grades, attendance, financial information, nursery updates, event registrations, visitor management, and claims processing. Full lifecycle development with robust authentication, comprehensive testing, and successful deployment to both App Store and Google Play Store.",
    benefits: [
      "Centralized access to all services",
      "Role-based personalized experiences",
      "Real-time Oracle Fusion ERP sync",
      "Integrated Nursery Management",
      "Streamlined claims and visitor management",
      "Secure authentication and authorization",
    ],
    metrics: [
      { label: "User Base", value: "5,000+" },
      { label: "Service Uptime", value: "99.9%" },
      { label: "Process Efficiency", value: "40% improvement" },
      { label: "User Satisfaction", value: "4.8/5" },
    ],
  },
  {
    name: "Rent Collection",
    icon: Landmark,
    description:
      "Practical solution for managing rental collections, dues, tenant records, and reports.",
    features: [
      "Tenant Records",
      "Rent Tracking",
      "Due Monitoring",
      "Collection Reports",
    ],
    category: "Property Management",
    status: "Available",
    detailedDescription:
      "Comprehensive property management for rental collections, due tracking, tenant records, and detailed reporting.",
    longDescription:
      "Tailored for property owners and administrators with tenant record management, automated rent tracking, real-time due monitoring, and detailed collection reports. Eliminates manual paperwork, reduces overhead, and provides complete visibility into rental income and outstanding dues.",
    benefits: [
      "Centralized tenant record management",
      "Automated rent tracking and reminders",
      "Real-time due monitoring and alerts",
      "Comprehensive collection reports",
      "Simplified property administration",
      "Improved cash flow management",
    ],
    metrics: [
      { label: "Rent Collection Rate", value: "95%" },
      { label: "Processing Efficiency", value: "60% faster" },
      { label: "Tenant Satisfaction", value: "94%" },
    ],
  },
  {
    name: "Request Management System (RMS)",
    icon: Blocks,
    description:
      "All-in-one solution for tracking and managing request jobs with seamless collaboration.",
    features: [
      "Dynamic Workflow Builder",
      "Real-Time Job Tracking",
      "Automatic Alerts & Notifications",
      "Integrated Billing",
    ],
    category: "Operations",
    status: "Available",
    detailedDescription:
      "Complete request management enabling collaboration between front-desk, service officers, and administrators with customizable workflows, automatic updates, integrated billing, and SMS alerts.",
    longDescription:
      "Dynamic workflow engine for creating and customizing multi-stage workflows. Complete visibility and control from initial intake through assignment, status tracking, billing, and closure. Real-time dashboards, automatic SMS notifications, and integrated billing ensure efficient handling and seamless payment collection.",
    benefits: [
      "Customizable multi-stage workflows with SLA definitions",
      "Unified dashboard for real-time job tracking",
      "Automated SMS notifications",
      "Integrated billing and payment collection",
      "Role-based access control",
      "Complete audit trail from intake to closure",
    ],
    metrics: [
      { label: "Job Resolution Time", value: "45% faster" },
      { label: "Customer Satisfaction", value: "96%" },
      { label: "Process Efficiency", value: "60% improvement" },
    ],
  },
  {
    name: "Kaargos",
    icon: Truck,
    description:
      "India's smart truck booking platform connecting businesses with verified drivers through intelligent matching.",
    features: [
      "Smart Geolocation Matching",
      "Instant OTP Login",
      "Real-Time Trip Status",
      "Verified Driver Network",
    ],
    category: "Logistics",
    status: "Available",
    detailedDescription:
      "Smart truck booking platform connecting shippers with verified transporters for instant booking with KYC verification, intelligent real-time matching, and live notifications.",
    longDescription:
      "Modern logistics platform with advanced geolocation algorithms matching load specifications to ideal nearby vehicles. Instant OTP-based authentication, secure profiles, and real-time trip tracking. Robust KYC verification ensuring every driver undergoes thorough verification for trust and reliability.",
    benefits: [
      "Instant truck booking in under 30 seconds",
      "Intelligent geolocation-based matching",
      "Verified KYC-compliant driver network",
      "Real-time trip status and location tracking",
      "Secure OTP-based authentication",
      "Transparent pricing and freight visibility",
    ],
    metrics: [
      { label: "Booking Speed", value: "< 30 seconds" },
      { label: "Driver Coverage", value: "500+ cities" },
      { label: "Customer Satisfaction", value: "4.8/5" },
    ],
  },
];

const statusColors = {
  Available: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
  "Coming Soon": "text-amber-500 bg-amber-500/10 border-amber-500/20",
  Beta: "text-blue-500 bg-blue-500/10 border-blue-500/20",
};

export function EnterpriseSolutions() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { rootMargin: "0px 0px -50px 0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleExpand = (productName: string) => {
    setExpandedProduct(expandedProduct === productName ? null : productName);
  };

  const ProductCard = ({ product }: { product: Product }) => {
    const Icon = product.icon;
    const isHovered = hoveredProduct === product.name;
    const isExpanded = expandedProduct === product.name;
    const displayFeatures = product.features.slice(0, 3);
    const hasMoreFeatures = product.features.length > 3;

    if (isExpanded) {
      return (
        <div
          key={product.name}
          className="col-span-1 sm:col-span-2 lg:col-span-4 p-5 sm:p-7 rounded-2xl border border-blue-500/30 bg-[#0c1e3f] text-white transition-all duration-500"
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-0 mb-5">
            <div className="flex items-center gap-4">
              <div className="p-2.5 rounded-xl bg-blue-500/20 shrink-0">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-white">{product.name}</h4>
                <p className="text-sm sm:text-base text-slate-300">{product.category}</p>
              </div>
            </div>
            <button
              onClick={() => toggleExpand(product.name)}
              className="p-2.5 rounded-lg hover:bg-white/10 transition-colors self-start sm:self-center"
            >
              <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <p className="text-base sm:text-lg leading-[1.8] text-slate-200 font-light tracking-wide mb-4">
                {product.detailedDescription}
              </p>
              {product.longDescription && (
                <p className="text-base sm:text-lg leading-[1.8] text-slate-300 font-light tracking-wide">
                  {product.longDescription}
                </p>
              )}
            </div>
            <div>
              {product.metrics && (
                <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-5">
                  {product.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="text-center p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10"
                    >
                      <div className="text-lg sm:text-xl font-semibold text-blue-400">
                        {metric.value}
                      </div>
                      <div className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.1em] text-slate-400">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {product.benefits && (
                <div className="mb-5">
                  <h5 className="text-sm sm:text-base font-semibold text-white mb-3">Key Benefits</h5>
                  <div className="grid grid-cols-1 gap-2">
                    {product.benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="flex items-center gap-2.5 px-3 sm:px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm sm:text-base text-slate-200"
                      >
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h5 className="text-sm sm:text-base font-semibold text-white mb-3">Core Capabilities</h5>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs sm:text-sm font-medium text-slate-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div
        key={product.name}
        className={cn(
          "group relative p-5 sm:p-6 rounded-2xl border transition-all duration-500 cursor-pointer text-white",
          isHovered
            ? "border-blue-500/50 bg-[#0c1e3f] shadow-[0_0_50px_rgba(37,99,235,0.12)]"
            : "border-white/10 bg-[#061126] hover:border-blue-500/30"
        )}
        onMouseEnter={() => setHoveredProduct(product.name)}
        onMouseLeave={() => setHoveredProduct(null)}
        onClick={() => toggleExpand(product.name)}
      >
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3 min-w-0">
              <div
                className={cn(
                  "p-2 rounded-xl transition-all duration-300 shrink-0",
                  isHovered
                    ? "bg-blue-500/20 shadow-lg shadow-blue-500/10"
                    : "bg-blue-500/10"
                )}
              >
                <Icon
                  className={cn(
                    "w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300",
                    isHovered ? "text-blue-400" : "text-blue-400/70"
                  )}
                />
              </div>
              <h4
                className={cn(
                  "text-sm sm:text-base font-semibold transition-colors duration-300 leading-tight truncate",
                  isHovered ? "text-blue-400" : "text-white"
                )}
              >
                {product.name}
              </h4>
            </div>
          </div>

          <p className="text-base sm:text-lg leading-[1.8] text-slate-300 font-light tracking-wide mb-3 line-clamp-2">
            {product.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-3">
            {displayFeatures.map((feature) => (
              <span
                key={feature}
                className={cn(
                  "text-[10px] sm:text-xs px-2 py-0.5 rounded-full border transition-colors duration-300 font-medium truncate max-w-[120px] sm:max-w-none",
                  isHovered
                    ? "border-blue-500/30 bg-blue-500/10 text-blue-300"
                    : "border-white/5 bg-white/5 text-slate-300"
                )}
              >
                {feature}
              </span>
            ))}
            {hasMoreFeatures && (
              <span
                className={cn(
                  "text-[10px] sm:text-xs px-2 py-0.5 rounded-full border transition-colors duration-300 font-medium",
                  isHovered
                    ? "border-blue-500/30 bg-blue-500/10 text-blue-300"
                    : "border-white/5 bg-white/5 text-slate-300"
                )}
              >
                +{product.features.length - 3}
              </span>
            )}
          </div>

          <div className="pt-3 border-t border-white/10">
            <button
              className={cn(
                "w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg transition-all duration-300 text-xs sm:text-sm font-medium",
                isHovered
                  ? "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-500/20"
                  : "bg-white/5 hover:bg-white/10 text-white"
              )}
            >
              Learn More
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Create a wrapper function to render products with proper grid
  const renderProductRow = (rowProducts: Product[]) => {
    // Check if any product in this row is expanded
    const hasExpanded = rowProducts.some(p => expandedProduct === p.name);

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-6 sm:mb-8">
        {rowProducts.map((product) => {
          const isExpanded = expandedProduct === product.name;
          
          // If this product is expanded, render it with full width
          if (isExpanded) {
            return (
              <div key={product.name} className="col-span-1 sm:col-span-2 lg:col-span-4">
                <ProductCard product={product} />
              </div>
            );
          }
          
          // If another product in the same row is expanded, hide this product
          if (hasExpanded) {
            return null;
          }
          
          // Normal rendering
          return <ProductCard key={product.name} product={product} />;
        })}
      </div>
    );
  };

  return (
    <>
      <section
        id="products"
        ref={sectionRef}
        className="relative pt-3 pb-12 lg:pt-4 lg:pb-20 overflow-hidden bg-white text-[#171A1C]"
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

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          {/* Header */}
          <div className="mb-10 lg:mb-14">
            <div className="flex items-center gap-4 mb-5">
              <span className="h-px w-10 bg-blue-500" />
              <span className="font-sans font-semibold uppercase tracking-[0.25em] text-[#087EA4] text-xs sm:text-sm">
                Enterprise Solutions
              </span>
            </div>

            <div
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display tracking-tight leading-[1.08]">
                <span className="block text-[#164A5B] font-bold">
                  Technology Engineered to
                </span>
                <span className="inline-flex font-bold bg-gradient-to-r from-[#087EA4] via-[#18A8D1] to-[#24B35A] bg-clip-text text-transparent">
                  Transform Your Business
                </span>
              </h2>

              <p className="mt-4 sm:mt-5 text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
                At the forefront of technological advancement, we deliver enterprise-grade
                solutions engineered to scale, secure, and transform your operations.
                Our product suite empowers organizations to achieve operational
                excellence and drive sustainable growth.
              </p>

              <div className="mt-5 sm:mt-6 flex flex-wrap gap-4 sm:gap-6">
                <div className="flex items-center gap-2.5 text-sm sm:text-base text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  <span>100% Production Ready</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm sm:text-base text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-purple-500" />
                  <span>Enterprise Grade Security</span>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-6 sm:mb-8">
              <div className="flex items-center gap-3">
                <LayoutGrid className="w-5 h-5 text-primary" />
                <h3 className="font-sans font-semibold uppercase tracking-[0.2em] text-[#087EA4] text-xs sm:text-sm">
                  Our Product Suite
                </h3>
              </div>
             
            </div>

            {/* Row 1 - Products 0-3 */}
            {renderProductRow(products.slice(0, 4))}

            {/* Row 2 - Products 4-7 */}
            {renderProductRow(products.slice(4, 8))}

            {/* Row 3 - Products 8-9 centered */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-6 sm:mb-8">
              <div className="hidden lg:block" />
              {products.slice(8, 10).map((product) => {
                const isExpanded = expandedProduct === product.name;
                if (isExpanded) {
                  return (
                    <div key={product.name} className="col-span-1 sm:col-span-2 lg:col-span-4">
                      <ProductCard product={product} />
                    </div>
                  );
                }
                return <ProductCard key={product.name} product={product} />;
              })}
              <div className="hidden lg:block" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}