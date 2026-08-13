
"use client";

import { ArrowUpRight, Mail, MapPin, Phone, X } from "lucide-react";
import { AnimatedWave } from "./animated-wave";
import { useState, useEffect } from "react";

const footerLinks = {
  Company: [
    { name: "Home", href: "#hero" },
    { name: "Who We Are", href: "#how-it-works" },
    { name: "What We Do", href: "#features" },
    { name: "Our Portfolio", href: "#portfolio" },
  ],

  Services: [
    { name: "Mobile Development", href: "#services" },
    { name: "Web Development", href: "#services" },
    { name: "AI Development", href: "#services" },
    { name: "Computer Vision", href: "#services" },
    { name: "Team Augmentation", href: "#services" },
  ],

  Legal: [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Cookies Policy", href: "#cookies" },
  ],
};

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
  },
  {
    name: "Instagram",
    href: "#",
  },
  {
    name: "GitHub",
    href: "#",
  },
];

export function FooterSection() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const handleOpenForm = () => {
      setShowForm(true);
      setTimeout(() => {
        const element = document.getElementById("contact-form");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    };
    window.addEventListener("open-contact-form", handleOpenForm);
    return () => window.removeEventListener("open-contact-form", handleOpenForm);
  }, []);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-[#020611] text-white scroll-mt-20"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      {/* Animated wave */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] overflow-hidden opacity-[0.14]">
        <AnimatedWave />
      </div>

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Blue glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-blue-600/[0.08] blur-[130px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/[0.05] blur-[120px]" />

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* =======================================================
            TOP CTA
        ======================================================== */}

        <div className="border-b border-white/[0.08] py-12 lg:py-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            {/* Heading */}

            <div className="max-w-4xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-blue-500" />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-blue-400">
                  Let's build together
                </span>
              </div>

              <h2 className="text-4xl font-display font-light leading-[1] tracking-[-0.04em] sm:text-5xl lg:text-[68px]">
                Have an idea?
                <br />
                <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  Let's make it real.
                </span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                From ambitious ideas to complex digital challenges, we help
                businesses create technology that delivers meaningful results.
              </p>
            </div>

            {/* CTA */}

            <button
              onClick={toggleForm}
              className="group inline-flex h-14 shrink-0 items-center justify-center rounded-full bg-white px-7 text-sm font-medium text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:text-white hover:shadow-[0_15px_40px_rgba(59,130,246,0.25)]"
            >
              Start a Conversation

              <span className="ml-3 flex h-7 w-7 items-center justify-center rounded-full bg-slate-950/10 transition-all group-hover:bg-white/20">
                {showForm ? (
                  <X
                    size={15}
                    className="transition-transform duration-300 group-hover:rotate-90"
                  />
                ) : (
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                )}
              </span>
            </button>
          </div>
        </div>

        {/* =======================================================
            CONTACT FORM SECTION
        ======================================================== */}

        {showForm && (
          <div
            id="contact-form"
            className="scroll-mt-20 py-16 lg:py-20 animate-in fade-in slide-in-from-top-4 duration-500"
          >
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              {/* Left - Contact Info */}

              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-8 bg-blue-500" />

                  <span className="text-xs font-medium uppercase tracking-[0.22em] text-blue-400">
                    Contact Us
                  </span>
                </div>

                <h3 className="text-3xl font-display font-light leading-[1.1] tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                  Ready to initiate your path towards a brighter future?
                </h3>

                <div className="mt-8 space-y-6">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.15em] text-blue-400">
                      Get In Touch
                    </p>
                    <p className="mt-2 text-sm leading-7 text-white/45">
                      Be assured, Your Confidentiality is paramount within these
                      walls.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <a
                      href="tel:+919995773273"
                      className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
                    >
                      <Phone size={16} className="text-blue-400" />
                      +91 99957 73273
                    </a>

                    <a
                      href="mailto:info@grandreves.com"
                      className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
                    >
                      <Mail size={16} className="text-blue-400" />
                      info@grandreves.com
                    </a>
                  </div>

                  <p className="text-xs text-white/30">
                    We strive to respond to all inquiries within 24 hours on
                    business days.
                  </p>
                </div>
              </div>

              {/* Right - Contact Form */}

              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 sm:p-10">
                <div className="mb-8">
                  {/* <h4 className="text-xl font-semibold">Drop Us 👇 a Line</h4> */}
                  <p className="ext-xs font-medium uppercase tracking-[0.22em] text-blue-400">
                    Make Enquiry Today - Request Free Quote
                  </p>
                </div>

                <form className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-xs font-medium uppercase tracking-[0.1em] text-white/50"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your full name"
                      className="w-full rounded-lg border border-white/[0.10] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-medium uppercase tracking-[0.1em] text-white/50"
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-white/[0.10] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="country"
                      className="mb-1.5 block text-xs font-medium uppercase tracking-[0.1em] text-white/50"
                    >
                      Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      placeholder="Your country"
                      className="w-full rounded-lg border border-white/[0.10] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-xs font-medium uppercase tracking-[0.1em] text-white/50"
                    >
                      Phone.No
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="+91 99999 99999"
                      className="w-full rounded-lg border border-white/[0.10] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-xs font-medium uppercase tracking-[0.1em] text-white/50"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full rounded-lg border border-white/[0.10] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50"
                    />
                  </div>

                  {/* reCAPTCHA placeholder */}

                  <div className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-5 w-5 rounded border-2 border-white/30 bg-white/5" />

                      <span className="text-sm text-white/40">
                        I'm not a robot
                      </span>
                    </div>

                    <p className="mt-2 text-[10px] text-white/25">
                      reCAPTCHA is changing its terms of service. Take action.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)]"
                  >
                    Yes, I want to talk to an expert

                    <ArrowUpRight
                      size={16}
                      className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* =======================================================
            MAIN FOOTER
        ======================================================== */}

        <div className="grid gap-10 py-12 lg:grid-cols-[1.5fr_1fr_1fr_1.1fr] lg:gap-8 lg:py-14">
          {/* =====================================================
              BRAND
          ====================================================== */}

          <div>
            {/* Logo / Brand */}

            <a href="#hero" className="group inline-block">
              <div className="flex items-center gap-3">
                {/* Logo mark */}

                <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-blue-400/30 bg-blue-500/[0.08]">
                  <div className="absolute h-5 w-5 rotate-45 border border-blue-400/70" />

                  <div className="absolute h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.8)]" />
                </div>

                <div>
                  <span className="block text-lg font-semibold tracking-tight">
                    Grandreves
                  </span>

                  <span className="block text-[9px] uppercase tracking-[0.25em] text-slate-400">
                    Technologies
                  </span>
                </div>
              </div>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              Building smart digital solutions that help businesses transform,
              grow and move forward with confidence.
            </p>

            {/* Social */}

            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.10] bg-white/[0.02] text-xs text-slate-400 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500 hover:text-white"
                >
                  {social.name === "Facebook" && "f"}
                  {social.name === "Instagram" && "ig"}
                  {social.name === "GitHub" && "gh"}
                </a>
              ))}
            </div>
          </div>

          {/* =====================================================
              COMPANY
          ====================================================== */}

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Company
            </h3>

            <ul className="space-y-4">
              {footerLinks.Company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center text-sm text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    {link.name}

                    <ArrowUpRight
                      size={12}
                      className="ml-1.5 -translate-x-1 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* =====================================================
              SERVICES
          ====================================================== */}

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Services
            </h3>

            <ul className="space-y-4">
              {footerLinks.Services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center text-sm text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    {link.name}

                    <ArrowUpRight
                      size={12}
                      className="ml-1.5 -translate-x-1 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* =====================================================
              CONTACT
          ====================================================== */}

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Get in touch
            </h3>

            <div className="space-y-3.5">
              {/* Email */}

              <a
                href="mailto:info@grandreves.com"
                className="group flex items-start gap-3"
              >
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.08] text-blue-400 transition-colors group-hover:border-blue-500/40 group-hover:bg-blue-500/10">
                  <Mail size={14} />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-slate-500">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-slate-300 transition-colors group-hover:text-white">
                    info@grandreves.com
                  </p>
                </div>
              </a>

              {/* Phone */}

              <a
                href="tel:+919995773273"
                className="group flex items-start gap-3"
              >
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.08] text-blue-400 transition-colors group-hover:border-blue-500/40 group-hover:bg-blue-500/10">
                  <Phone size={14} />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-slate-500">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-slate-300 transition-colors group-hover:text-white">
                    +91 99957 73273
                  </p>
                </div>
              </a>

              {/* Address */}

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.08] text-blue-400">
                  <MapPin size={14} />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-slate-500">
                    Office
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Mananth Complex, First Floor,
                    <br />
                    Near NGO Quarters,
                    <br />
                    Kakkanad, Kochi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =======================================================
            BOTTOM BAR
        ======================================================== */}

        <div className="flex flex-col gap-5 border-t border-white/[0.08] py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Grandreves Technologies. All rights
            reserved.
          </p>

          <div className="flex items-center gap-5 text-xs">
            <a
              href="#privacy"
              className="text-slate-400 transition-colors hover:text-white"
            >
              Privacy Policy
            </a>

            <span className="h-3 w-px bg-slate-800" />

            <a
              href="#cookies"
              className="text-slate-400 transition-colors hover:text-white"
            >
              Cookies Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}