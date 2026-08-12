"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const features = [
  {
    number: "01",
    title: "24/7 Customer Support",
    shortDescription: "Round-the-clock assistance with dedicated support teams.",
    description:
      "Our dedicated support team is available around the clock to provide timely assistance, resolve issues, and ensure a smooth experience whenever you need us.",
    visual: "support",
  },
  {
    number: "02",
    title: "50+ Achieved Milestones",
    shortDescription: "Proven track record with over 50 successful deliveries.",
    description:
      "With more than 50 successfully delivered milestones, we continue to build reliable solutions and create measurable value for our clients.",
    visual: "milestones",
  },
  {
    number: "03",
    title: "10 Years Experience",
    shortDescription: "A decade of industry expertise and proven methodologies.",
    description:
      "With over a decade of industry experience, Grandreves combines proven expertise with a deep understanding of evolving business and technology needs.",
    visual: "experience",
  },
  {
    number: "04",
    title: "Latest Technology",
    shortDescription: "Cutting-edge tech stack for scalable solutions.",
    description:
      "We leverage modern technologies and innovative development practices to build scalable, efficient, and future-ready digital solutions.",
    visual: "technology",
  },
  {
    number: "05",
    title: "Expert Developers",
    shortDescription: "Seasoned professionals with deep technical expertise.",
    description:
      "Our experienced developers bring technical expertise, creative thinking, and attention to detail to every project we deliver.",
    visual: "developers",
  },
  {
    number: "06",
    title: "On Time Project Delivery",
    shortDescription: "Structured processes ensuring on-schedule delivery.",
    description:
      "We follow a structured development process focused on quality and efficiency, helping ensure projects are delivered on schedule.",
    visual: "delivery",
  },
  {
    number: "07",
    title: "Cost Effective",
    shortDescription: "Optimized solutions with maximum business value.",
    description:
      "We provide practical and high-quality solutions designed to maximize business value while keeping development and operational costs efficient.",
    visual: "cost",
  },
  {
    number: "08",
    title: "Security & IP Protection",
    shortDescription: "Enterprise-grade security throughout development.",
    description:
      "Security and intellectual property protection remain a priority throughout development, helping keep your applications, data, and ideas secure.",
    visual: "security",
  },
];

// Support Visual - 24/7 Customer Support (Professional Version)
function SupportVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <defs>
        <linearGradient id="supportGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.05" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="supportGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
        </linearGradient>
        <radialGradient id="pulseGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background glow */}
      <circle cx="100" cy="75" r="60" fill="url(#pulseGrad)" opacity="0.3">
        <animate attributeName="r" values="50;65;50" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* 24/7 Badge with gradient */}
      <g transform="translate(125, 15)">
        <rect x="0" y="0" width="50" height="24" rx="12" fill="currentColor" opacity="0.15" />
        <rect x="1" y="1" width="48" height="22" rx="11" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
        <text x="25" y="16" textAnchor="middle" fontSize="11" fontFamily="monospace" fontWeight="bold" fill="currentColor" opacity="0.8">
          24/7
        </text>
        <rect x="0" y="0" width="25" height="24" rx="12" fill="currentColor" opacity="0.05">
          <animate attributeName="x" values="-25;50;-25" dur="3s" repeatCount="indefinite" />
        </rect>
      </g>

      {/* Headset - Professional design */}
      <g transform="translate(100, 65)">
        <path d="M -30 -25 Q -30 -45 0 -45 Q 30 -45 30 -25" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M -30 -25 L -30 -10 Q -30 -5 -25 -5 L -15 -5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <circle cx="-22" cy="-15" r="12" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.2" />
        <path d="M 30 -25 L 30 -10 Q 30 -5 25 -5 L 15 -5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <circle cx="22" cy="-15" r="12" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.2" />
        <path d="M -20 -5 L -20 15 Q -20 20 -15 20 L -10 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="-15" y="20" width="10" height="6" rx="3" fill="currentColor" opacity="0.3" />
        <circle cx="-10" cy="23" r="3" fill="currentColor" opacity="0.5">
          <animate attributeName="r" values="3;4;3" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0.8;0.5" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <path d="M -2 15 Q 5 23 -2 31" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="1.2s" begin="0s" repeatCount="indefinite" />
        </path>
        <path d="M 5 10 Q 15 23 5 36" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.2">
          <animate attributeName="opacity" values="0.2;0.6;0.2" dur="1.2s" begin="0.4s" repeatCount="indefinite" />
        </path>
        <path d="M 12 5 Q 25 23 12 41" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.15">
          <animate attributeName="opacity" values="0.15;0.5;0.15" dur="1.2s" begin="0.8s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Support chat bubbles */}
      <g>
        <rect x="20" y="130" width="45" height="18" rx="9" fill="currentColor" opacity="0.1" />
        <rect x="21" y="131" width="43" height="16" rx="8" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        <circle cx="35" cy="139" r="3" fill="currentColor" opacity="0.3">
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" begin="0s" repeatCount="indefinite" />
        </circle>
        <circle cx="45" cy="139" r="3" fill="currentColor" opacity="0.3">
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" begin="0.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="55" cy="139" r="3" fill="currentColor" opacity="0.3">
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" begin="1s" repeatCount="indefinite" />
        </circle>

        <rect x="75" y="135" width="40" height="14" rx="7" fill="currentColor" opacity="0.08" />
        <rect x="76" y="136" width="38" height="12" rx="6" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.15" />
        <rect x="85" y="139" width="15" height="4" rx="2" fill="currentColor" opacity="0.2">
          <animate attributeName="width" values="15;25;15" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
        </rect>

        <rect x="125" y="130" width="50" height="18" rx="9" fill="currentColor" opacity="0.1" />
        <rect x="126" y="131" width="48" height="16" rx="8" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        <rect x="135" y="136" width="20" height="6" rx="3" fill="currentColor" opacity="0.2">
          <animate attributeName="width" values="20;35;20" dur="1.8s" begin="0.7s" repeatCount="indefinite" />
        </rect>
      </g>

      {/* Pulse rings */}
      <circle cx="100" cy="65" r="15" fill="none" stroke="currentColor" strokeWidth="1" opacity="0">
        <animate attributeName="r" values="15;70;15" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="65" r="15" fill="none" stroke="currentColor" strokeWidth="1" opacity="0">
        <animate attributeName="r" values="15;55;15" dur="3s" begin="1s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" begin="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="65" r="15" fill="none" stroke="currentColor" strokeWidth="1" opacity="0">
        <animate attributeName="r" values="15;40;15" dur="3s" begin="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.2;0;0.2" dur="3s" begin="2s" repeatCount="indefinite" />
      </circle>

      {/* Status indicator */}
      <circle cx="140" cy="45" r="3" fill="#22c55e" opacity="0.8">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="140" cy="45" r="6" fill="#22c55e" opacity="0.2">
        <animate attributeName="r" values="6;12;6" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.2;0;0.2" dur="1.5s" repeatCount="indefinite" />
      </circle>

      {/* Decorative elements */}
      <circle cx="30" cy="40" r="2" fill="currentColor" opacity="0.15">
        <animate attributeName="opacity" values="0.15;0.4;0.15" dur="2s" begin="0.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="165" cy="70" r="2" fill="currentColor" opacity="0.15">
        <animate attributeName="opacity" values="0.15;0.4;0.15" dur="2s" begin="0.7s" repeatCount="indefinite" />
      </circle>
      <circle cx="175" cy="35" r="1.5" fill="currentColor" opacity="0.1">
        <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2.5s" begin="1.2s" repeatCount="indefinite" />
      </circle>

      <path d="M 55 40 Q 70 20 85 25" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
      <path d="M 145 40 Q 130 20 115 25" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
    </svg>
  );
}

// Milestones Visual - 50+ Achieved Milestones
function MilestonesVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <defs>
        <linearGradient id="milestoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Trophy */}
      <path d="M 75 30 L 125 30 L 120 80 Q 100 95 80 80 Z" fill="none" stroke="currentColor" strokeWidth="3" />
      <rect x="90" y="80" width="20" height="25" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M 85 105 L 115 105" stroke="currentColor" strokeWidth="2" />

      {/* Stars */}
      <text x="140" y="25" fontSize="18" fill="currentColor" opacity="0.3">
        ★
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" begin="0s" repeatCount="indefinite" />
      </text>
      <text x="150" y="45" fontSize="14" fill="currentColor" opacity="0.3">
        ★
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" begin="0.3s" repeatCount="indefinite" />
      </text>
      <text x="30" y="45" fontSize="14" fill="currentColor" opacity="0.3">
        ★
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" begin="0.6s" repeatCount="indefinite" />
      </text>

      {/* Count */}
      <text x="100" y="140" textAnchor="middle" fontSize="24" fontFamily="monospace" fill="currentColor" opacity="0.3">
        50+
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
      </text>
    </svg>
  );
}

// Experience Visual - 10 Years Experience
function ExperienceVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <defs>
        <linearGradient id="expGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Calendar */}
      <rect x="50" y="40" width="100" height="80" rx="6" fill="none" stroke="currentColor" strokeWidth="3" />
      <line x1="50" y1="60" x2="150" y2="60" stroke="currentColor" strokeWidth="2" />
      <line x1="70" y1="40" x2="70" y2="25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="130" y1="40" x2="130" y2="25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

      {/* Years marked */}
      <text x="100" y="85" textAnchor="middle" fontSize="16" fontWeight="bold" fill="currentColor" opacity="0.5">2016</text>
      <text x="100" y="110" textAnchor="middle" fontSize="16" fontWeight="bold" fill="currentColor" opacity="0.5">2026</text>

      {/* Arrow */}
      <line x1="85" y1="95" x2="115" y2="95" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" />

      <defs>
        <marker id="arrowhead" markerWidth="8" markerHeight="5" refX="8" refY="2.5" orient="auto">
          <polygon points="0 0, 8 2.5, 0 5" fill="currentColor" />
        </marker>
      </defs>

      {/* 10 years text */}
      <text x="100" y="145" textAnchor="middle" fontSize="14" fill="currentColor" opacity="0.3">
        10 Years
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
      </text>
    </svg>
  );
}

// Technology Visual - Latest Technology
function TechnologyVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <defs>
        <linearGradient id="techGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Main node */}
      <circle cx="100" cy="80" r="15" fill="none" stroke="currentColor" strokeWidth="3">
        <animate attributeName="r" values="15;18;15" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="80" r="8" fill="currentColor" opacity="0.3" />

      {/* Connected nodes */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const angle = i * 60 * (Math.PI / 180);
        const radius = 50;
        return (
          <g key={i}>
            <line
              x1="100"
              y1="80"
              x2={100 + Math.cos(angle) * radius}
              y2={80 + Math.sin(angle) * radius}
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.2"
            >
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            </line>
            <circle
              cx={100 + Math.cos(angle) * radius}
              cy={80 + Math.sin(angle) * radius}
              r="6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <animate attributeName="r" values="6;9;6" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            </circle>
          </g>
        );
      })}

      {/* Pulse rings */}
      <circle cx="100" cy="80" r="25" fill="none" stroke="currentColor" strokeWidth="1" opacity="0">
        <animate attributeName="r" values="15;70" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0" dur="3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

// Developers Visual - Expert Developers
function DevelopersVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <defs>
        <linearGradient id="devGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Developer 1 */}
      <g transform="translate(40, 30)">
        <circle cx="20" cy="15" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x="10" y="28" width="20" height="25" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="13" y="45" fontSize="10" fill="currentColor" opacity="0.3">&lt;/&gt;</text>
        <animateTransform attributeName="transform" type="translate" values="40,30;40,28;40,30" dur="2s" begin="0s" repeatCount="indefinite" />
      </g>

      {/* Developer 2 */}
      <g transform="translate(100, 25)">
        <circle cx="20" cy="15" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x="10" y="28" width="20" height="25" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="13" y="45" fontSize="10" fill="currentColor" opacity="0.3">&lt;/&gt;</text>
        <animateTransform attributeName="transform" type="translate" values="100,25;100,27;100,25" dur="2s" begin="0.5s" repeatCount="indefinite" />
      </g>

      {/* Developer 3 */}
      <g transform="translate(70, 60)">
        <circle cx="20" cy="15" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x="10" y="28" width="20" height="25" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="13" y="45" fontSize="10" fill="currentColor" opacity="0.3">&lt;/&gt;</text>
        <animateTransform attributeName="transform" type="translate" values="70,60;70,58;70,60" dur="2s" begin="1s" repeatCount="indefinite" />
      </g>

      {/* Developer 4 */}
      <g transform="translate(30, 85)">
        <circle cx="20" cy="15" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x="10" y="28" width="20" height="25" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="13" y="45" fontSize="10" fill="currentColor" opacity="0.3">&lt;/&gt;</text>
        <animateTransform attributeName="transform" type="translate" values="30,85;30,83;30,85" dur="2s" begin="1.5s" repeatCount="indefinite" />
      </g>

      {/* Developer 5 */}
      <g transform="translate(120, 90)">
        <circle cx="20" cy="15" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x="10" y="28" width="20" height="25" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="13" y="45" fontSize="10" fill="currentColor" opacity="0.3">&lt;/&gt;</text>
        <animateTransform attributeName="transform" type="translate" values="120,90;120,88;120,90" dur="2s" begin="0.8s" repeatCount="indefinite" />
      </g>
    </svg>
  );
}

// Delivery Visual - On Time Project Delivery
function DeliveryVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <defs>
        <linearGradient id="deliveryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Checkmark circle */}
      <circle cx="100" cy="80" r="40" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.2">
        <animate attributeName="r" values="40;45;40" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Checkmark */}
      <path d="M 85 80 L 95 90 L 115 70" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

      {/* Clock */}
      <circle cx="100" cy="80" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="100" y1="80" x2="100" y2="60" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <animateTransform attributeName="transform" type="rotate" from="0 100 80" to="360 100 80" dur="4s" repeatCount="indefinite" />
      </line>
      <line x1="100" y1="80" x2="115" y2="80" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <animateTransform attributeName="transform" type="rotate" from="0 100 80" to="360 100 80" dur="2s" repeatCount="indefinite" />
      </line>

      {/* Delivery truck icon */}
      <rect x="35" y="120" width="30" height="15" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="45" cy="135" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="58" cy="135" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

// Cost Visual - Cost Effective
function CostVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <defs>
        <linearGradient id="costGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Dollar signs */}
      <text x="40" y="50" fontSize="24" fontWeight="bold" fill="currentColor" opacity="0.1">$</text>
      <text x="90" y="40" fontSize="32" fontWeight="bold" fill="currentColor" opacity="0.2">$</text>
      <text x="140" y="55" fontSize="28" fontWeight="bold" fill="currentColor" opacity="0.15">$</text>

      {/* Graph bars */}
      <rect x="50" y="90" width="20" height="40" rx="2" fill="currentColor" opacity="0.15">
        <animate attributeName="height" values="40;30;40" dur="2s" begin="0s" repeatCount="indefinite" />
        <animate attributeName="y" values="90;100;90" dur="2s" begin="0s" repeatCount="indefinite" />
      </rect>
      <rect x="80" y="80" width="20" height="50" rx="2" fill="currentColor" opacity="0.2">
        <animate attributeName="height" values="50;40;50" dur="2s" begin="0.5s" repeatCount="indefinite" />
        <animate attributeName="y" values="80;90;80" dur="2s" begin="0.5s" repeatCount="indefinite" />
      </rect>
      <rect x="110" y="70" width="20" height="60" rx="2" fill="currentColor" opacity="0.25">
        <animate attributeName="height" values="60;50;60" dur="2s" begin="1s" repeatCount="indefinite" />
        <animate attributeName="y" values="70;80;70" dur="2s" begin="1s" repeatCount="indefinite" />
      </rect>
      <rect x="140" y="85" width="20" height="45" rx="2" fill="currentColor" opacity="0.15">
        <animate attributeName="height" values="45;35;45" dur="2s" begin="1.5s" repeatCount="indefinite" />
        <animate attributeName="y" values="85;95;85" dur="2s" begin="1.5s" repeatCount="indefinite" />
      </rect>

      {/* Arrow pointing down (cost reduction) */}
      <path d="M 120 25 L 120 15 L 115 20 M 120 15 L 125 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="120" y1="15" x2="120" y2="35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Security Visual - Security & IP Protection
function SecurityVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <defs>
        <linearGradient id="securityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Shield */}
      <path
        d="M 100 25 L 145 45 L 145 85 Q 145 120 100 140 Q 55 120 55 85 L 55 45 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />

      {/* Shield inner glow */}
      <path
        d="M 100 35 L 135 50 L 135 80 Q 135 110 100 125 Q 65 110 65 80 L 65 50 Z"
        fill="currentColor"
        opacity="0.05"
      >
        <animate attributeName="opacity" values="0.05;0.15;0.05" dur="2s" repeatCount="indefinite" />
      </path>

      {/* Lock */}
      <rect x="85" y="75" width="30" height="25" rx="3" fill="currentColor" opacity="0.8" />
      <path d="M 90 75 L 90 65 Q 90 55 100 55 Q 110 55 110 65 L 110 75" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />

      {/* Keyhole */}
      <circle cx="100" cy="85" r="4" fill="white" />
      <rect x="98" y="87" width="4" height="6" fill="white" />

      {/* IP badge */}
      <rect x="130" y="20" width="35" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <text x="140" y="34" fontSize="10" fontFamily="monospace" fill="currentColor" opacity="0.5">IP</text>

      {/* Scan line effect */}
      <line x1="60" y1="50" x2="140" y2="50" stroke="currentColor" strokeWidth="1" opacity="0">
        <animate attributeName="y1" values="45;115;45" dur="3s" repeatCount="indefinite" />
        <animate attributeName="y2" values="45;115;45" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;0.3;0" dur="3s" repeatCount="indefinite" />
      </line>
    </svg>
  );
}

function AnimatedVisual({ type }: { type: string }) {
  switch (type) {
    case "support":
      return <SupportVisual />;
    case "milestones":
      return <MilestonesVisual />;
    case "experience":
      return <ExperienceVisual />;
    case "technology":
      return <TechnologyVisual />;
    case "developers":
      return <DevelopersVisual />;
    case "delivery":
      return <DeliveryVisual />;
    case "cost":
      return <CostVisual />;
    case "security":
      return <SecurityVisual />;
    default:
      return <SupportVisual />;
  }
}

function getVisualColor(type: string) {
  switch (type) {
    case "deploy":
      return "text-[#087EA4]";
    case "ai":
      return "text-[#18A8D1]";
    case "collab":
      return "text-[#24B35A]";
    case "security":
      return "text-[#164A5B]";
    default:
      return "text-[#087EA4]";
  }
}

function FeatureCard({
  feature,
  index,
}: {
  feature: typeof features[0];
  index: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      ref={cardRef}
      className={`group relative transition-all duration-700 ${isVisible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-12"
        }`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 py-7 lg:py-9 border-b border-foreground/10">
        {/* Number */}
        <div className="shrink-0">
          <span className="font-mono text-sm text-muted-foreground">
            {feature.number}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl lg:text-4xl font-display mb-4 group-hover:translate-x-2 transition-transform duration-500">
              {feature.title}
            </h3>

            {/* Description with Read More */}
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {isExpanded ? feature.description : feature.shortDescription}
              </p>

              {/* Minimal Read More Button */}
              <button
                onClick={toggleReadMore}
                className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 group/btn"
              >
                <span>{isExpanded ? "Read Less" : "Read More"}</span>
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4 transition-transform duration-200 group-hover/btn:-translate-y-0.5" />
                ) : (
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-y-0.5" />
                )}
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className={`w-48 h-40 ${getVisualColor(feature.visual)}`}>
              <AnimatedVisual type={feature.visual} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
      className="relative pt-8 pb-24 lg:pt-14 lg:pb-32 bg-white"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Why Grandreves
          </span>

          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
              }`}
          >
            <span className="block">Experience the Grandreves</span>

            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-300 to-black dark:from-gray-200 dark:via-gray-400 dark:to-gray-800 font-bold">
              Difference
            </span>

          </h2>
        </div>

        {/* Features List */}
        <div>
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.number}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}