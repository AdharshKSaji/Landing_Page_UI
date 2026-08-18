"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronRight, Home, Users, Briefcase, Mail, FolderOpen } from "lucide-react";
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
            ? "bg-gradient-to-br from-[#f0f4f8] via-[#e8edf3] to-[#dce4ed] border border-[#d0d8e0] rounded-2xl shadow-lg shadow-[#087EA4]/10 max-w-[1200px]"
            : "bg-transparent max-w-[1400px]"
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 px-6 lg:px-8 ${
            isScrolled ? "h-14" : "h-20"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo2.png"
              alt="GRANDREVES TECHNOLOGIES"
              className={`object-contain transition-all duration-500 ${
                isScrolled ? "h-8 w-auto" : "h-10 w-auto"
              }`}
            />

            <span
              className={`ml-3 font-mono font-bold transition-all duration-500 ${
                isScrolled ? "text-[16px] mt-0" : "text-[18px] mt-0.5"
              } bg-gradient-to-r from-[#087EA4] via-[#18A8D1] to-[#24B35A] bg-clip-text text-transparent`}
            >
              Grandreves Technologies
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-bold text-[#2c3e50] hover:text-[#087EA4] transition-colors duration-300 relative group"
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <span
                  className={`text-medium font-bold uppercase tracking-[0.2em] inline-flex transition-all duration-300 ${
                    hoveredLink === link.name
                      ? "bg-gradient-to-r from-[#087EA4] via-[#18A8D1] to-[#24B35A] bg-clip-text text-transparent"
                      : "text-[#2c3e50]"
                  }`}
                >
                  {link.name}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[#087EA4] via-[#18A8D1] to-[#24B35A] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-[#d0d8e0] rounded-lg transition-colors text-[#2c3e50]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Professional Drawer */}
      <div
        className={`md:hidden fixed inset-y-0 right-0 w-[340px] bg-gradient-to-br from-[#f0f4f8] via-[#e8edf3] to-[#dce4ed] backdrop-blur-xl z-40 shadow-2xl transition-all duration-500 ease-out ${
          isMobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header with Brand and Close */}
          <div className="px-6 pt-8 pb-4 border-b border-[#d0d8e0]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="/logo2.png"
                  alt="GRANDREVES TECHNOLOGIES"
                  className="object-contain h-6 w-auto"
                />
                <span
                  className="font-mono font-bold text-[14px] bg-gradient-to-r from-[#087EA4] via-[#18A8D1] to-[#24B35A] bg-clip-text text-transparent"
                >
                  Grandreves Technologies
                </span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-[#d0d8e0] rounded-lg transition-colors text-[#2c3e50]"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Links - At Top */}
          <div className="flex-1 overflow-y-auto px-4 py-6">
            <div className="space-y-1">
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
                    className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 group relative ${
                      isActive
                        ? "bg-[#d0d8e0]/50 text-[#0a1628]"
                        : "hover:bg-[#d0d8e0] text-[#2c3e50] hover:text-[#0a1628]"
                    }`}
                    style={{
                      transitionDelay: isMobileMenuOpen ? `${i * 60}ms` : "0ms",
                    }}
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {/* Active Indicator Bar */}
                    {isActive && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full bg-gradient-to-b from-[#087EA4] to-[#24B35A]" />
                    )}
                    
                    {/* Icon */}
                    <div
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-[#087EA4] to-[#24B35A] text-white shadow-lg shadow-[#087EA4]/20"
                          : "bg-[#d0d8e0] group-hover:bg-[#b8c4d0] text-[#2c3e50]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Label */}
                    <span
                      className={`flex-1 font-medium transition-all duration-300 ${
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

            {/* Divider */}
            <div className="my-6 border-t border-[#d0d8e0]" />

            {/* Quick Actions */}
           
          </div>

          
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-30 transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}