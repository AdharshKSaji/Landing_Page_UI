"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronRight, Home, Users, Briefcase, Mail, FolderOpen, Sparkles } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "Who we are", href: "#how-it-works", icon: Users },
  { name: "What we do", href: "#features", icon: Briefcase },
  { name: "Contact Us", href: "#footer", icon: Mail },
  { name: "Our Portfolio", href: "#portfolio", icon: FolderOpen },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ${
        isScrolled ? "top-4 left-4 right-4" : "top-0 left-0 right-0"
      }`}
    >
      <nav
        className={`mx-auto transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "bg-gradient-to-br from-[#f7fafc] via-[#eef4fb] to-[#e6eef7] border border-[#d0d8e0] rounded-2xl shadow-lg max-w-[1200px]"
            : "bg-transparent max-w-[1400px]"
        }`}
        aria-label="Primary navigation"
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 px-6 lg:px-8 ${
            isScrolled ? "h-14" : "h-20"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              {/* <div className="absolute -inset-1 bg-gradient-to-r from-[#087EA4] via-[#18A8D1] to-[#24B35A] rounded-full blur-sm opacity-70 animate-pulse"></div> */}
              <img
                src="/logo2.png"
                alt="GRANDREVES TECHNOLOGIES"
                className={`relative object-contain transition-all duration-500 ${
                  isScrolled ? "h-8 w-auto" : "h-10 w-auto"
                }`}
              />
            </div>

            <div className="flex flex-col">
              <span
                className={`font-mono font-bold transition-all duration-500 leading-tight ${
                  isScrolled ? "text-[20px]" : "text-[17px]"
                } bg-gradient-to-r from-[#087EA4] via-[#18A8D1] to-[#24B35A] bg-clip-text text-transparent`}
              >
                Grandreves Technologies
              </span>
              <span
                className={`text-[8px] uppercase tracking-[0.3em] font-medium text-[#087EA4]/60 transition-all duration-500 ${
                  isScrolled ? "opacity-0 h-0" : "opacity-100 h-3"
                }`}
              >
              
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative group"
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <span
                  className={`text-xs font-bold uppercase tracking-[0.2em] inline-flex items-center gap-1.5 transition-all duration-300 ${
                    hoveredLink === link.name
                      ? "bg-gradient-to-r from-[#087EA4] via-[#18A8D1] to-[#24B35A] bg-clip-text text-transparent"
                      : "text-[#2c3e50]"
                  }`}
                >
                  <link.icon className="w-3.5 h-3.5" />
                  {link.name}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#087EA4] via-[#18A8D1] to-[#24B35A] transition-all duration-300 group-hover:w-full rounded-full" />
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#087EA4] via-[#18A8D1] to-[#24B35A] transition-all duration-300 group-hover:w-0" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 hover:bg-[#e6eef7] rounded-xl transition-all duration-300 text-[#2c3e50] focus:outline-none focus:ring-2 focus:ring-[#18A8D1]/40 relative group"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-drawer"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#087EA4]/5 via-[#18A8D1]/5 to-[#24B35A]/5 rounded-xl blur-sm group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 relative" />
            ) : (
              <Menu className="w-6 h-6 relative" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Professional Drawer */}
      <aside
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-hidden={!isMobileMenuOpen}
        className={`md:hidden fixed inset-y-0 right-0 w-[360px] bg-gradient-to-br from-[#f7fafc] via-[#eef4fb] to-[#e6eef7] backdrop-blur-xl z-40 shadow-2xl transition-transform duration-500 ease-out transform ${
          isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header with Brand and Close */}
          <div className="px-6 pt-8 pb-4 border-b border-[#d0d8e0] bg-gradient-to-r from-[#087EA4]/5 via-[#18A8D1]/5 to-[#24B35A]/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#087EA4] via-[#18A8D1] to-[#24B35A] rounded-full blur-sm opacity-50"></div>
                  <img
                    src="/logo2.png"
                    alt="GRANDREVES TECHNOLOGIES"
                    className="relative object-contain h-8 w-auto"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono font-bold text-[14px] bg-gradient-to-r from-[#087EA4] via-[#18A8D1] to-[#24B35A] bg-clip-text text-transparent leading-tight">
                    Grandreves Technologies
                  </span>
                 
                </div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-[#e6eef7] rounded-xl transition-all duration-300 text-[#2c3e50] focus:outline-none focus:ring-2 focus:ring-[#18A8D1]/40 relative group"
                aria-label="Close menu"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#087EA4]/5 via-[#18A8D1]/5 to-[#24B35A]/5 rounded-xl blur-sm group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
                <X className="w-5 h-5 relative" />
              </button>
            </div>
          </div>

          {/* Navigation Links - At Top */}
          <div className="flex-1 overflow-y-auto px-4 py-8">
            <div className="space-y-2">
              {navLinks.map((link, i) => {
                const Icon = link.icon;
                const isActive = activeLink === link.name;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setActiveLink(link.name);
                    }}
                    className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group relative overflow-hidden ${
                      isActive
                        ? "bg-gradient-to-r from-[#087EA4]/10 via-[#18A8D1]/10 to-[#24B35A]/10 text-[#0a1628] shadow-lg shadow-[#087EA4]/5"
                        : "hover:bg-[#d0d8e0]/30 text-[#2c3e50] hover:text-[#0a1628]"
                    }`}
                    style={{
                      transitionDelay: isMobileMenuOpen ? `${i * 60}ms` : "0ms",
                    }}
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {/* Active Background Glow */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-[#087EA4]/5 via-[#18A8D1]/5 to-[#24B35A]/5 rounded-2xl" />
                    )}
                    
                    {/* Active Indicator Bar */}
                    {isActive && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-10 rounded-r-full bg-gradient-to-b from-[#087EA4] to-[#24B35A] shadow-lg shadow-[#087EA4]/30" />
                    )}

                    {/* Icon */}
                    <div
                      className={`p-2.5 rounded-xl transition-all duration-300 relative ${
                        isActive
                          ? "bg-gradient-to-r from-[#087EA4] to-[#24B35A] text-white shadow-lg shadow-[#087EA4]/30"
                          : "bg-[#d0d8e0]/50 group-hover:bg-[#b8c4d0] text-[#2c3e50]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Label */}
                    <span
                      className={`flex-1 font-semibold transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-[#087EA4] via-[#18A8D1] to-[#24B35A] bg-clip-text text-transparent"
                          : ""
                      }`}
                    >
                      {link.name}
                    </span>

                    {/* Chevron */}
                    <ChevronRight
                      className={`w-4 h-4 transition-all duration-300 ${
                        isActive
                          ? "text-[#087EA4] translate-x-1"
                          : "text-[#d0d8e0] group-hover:translate-x-1 group-hover:text-[#2c3e50]"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Divider with decorative dot */}
            <div className="my-8 flex items-center gap-4">
              <div className="flex-1 border-t border-[#d0d8e0]" />
              <Sparkles className="w-4 h-4 text-[#087EA4]/30" />
              <div className="flex-1 border-t border-[#d0d8e0]" />
            </div>

            {/* Footer */}
           
          </div>
        </div>
      </aside>

      {/* Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30 transition-opacity duration-500 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden={!isMobileMenuOpen}
      />
    </header>
  );
}