"use client";

import { ArrowUpRight } from "lucide-react";
import { AnimatedWave } from "./animated-wave";

const footerLinks = {
  QuickLinks: [
    { name: "Home", href: "#" },
    { name: "Who we are", href: "#" },
    { name: "What we do", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Our Portfolio", href: "#" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Cookies Policy", href: "#" },
  ],
};

const socialLinks = [
  { name: "Facebook", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "GitHub", href: "#" },
];

export function FooterSection() {
  return (
    <footer className="relative border-t border-foreground/10">
      {/* Animated wave background */}
      <div className="absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-24 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand & Contact */}
          <div>
            <a href="#" className="inline-flex items-center gap-2 mb-6">
              <span className="text-2xl font-display font-semibold tracking-tight">
                Grandreves Technologies
              </span>
            </a>

            <div className="space-y-6 text-sm leading-relaxed">
              <div>
                <p className="font-medium">Write to us</p>
                <p className="text-muted-foreground">Our team is here to help</p>
                <p className="text-muted-foreground">info@grandreves.com</p>
              </div>
              <div>
                <p className="font-medium">Visit us</p>
                <p className="text-muted-foreground">Come, say hello to us at our office</p>
                <p className="text-muted-foreground">
                  Mananth Complex, First Floor, Near NGO Quarters, Kakkanad, Kochi.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 mt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                >
                  {link.name}
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {footerLinks.QuickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold mb-6">Legal</h3>
            <ul className="space-y-4">
              {footerLinks.Legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2023 Grandreves Technologies, Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            Privacy Policy | Cookies Policy
          </div>
        </div>
      </div>
    </footer>
  );
}
