"use client";

import * as React from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solid = scrolled || mobileMenuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "border-b border-line bg-ink/90 py-3 backdrop-blur-md" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-8">
        {/* Brand */}
        <a href="#" className="group flex items-center gap-3 text-paper" aria-label="Arpan Sanap — back to top">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line font-mono text-sm tracking-wide transition-colors group-hover:border-crimson">
            AS
          </span>
          <span className="hidden font-serif text-lg tracking-wide sm:inline">Arpan Sanap</span>
        </a>

        {/* Desktop links */}
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="py-1 text-base font-medium text-bone transition-colors hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden items-center gap-3 sm:flex">
          <a
            href="https://github.com/arpansanap1-stack"
            target="_blank"
            rel="noreferrer"
            className="flex h-10 items-center gap-2 rounded-full border border-line px-4 text-sm font-medium text-bone transition-colors hover:border-bone hover:text-paper"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="#contact"
            className="flex h-10 items-center gap-1.5 rounded-full bg-bone px-5 text-sm font-semibold text-ink transition-colors hover:bg-crimson hover:text-white"
          >
            Contact
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="-mr-2 p-2 text-paper md:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-line bg-ink px-6 pb-6 pt-2 md:hidden">
          <nav aria-label="Mobile" className="flex flex-col">
            {[...navLinks, { label: "Contact", href: "#contact" }].map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-line py-4 text-lg text-paper transition-colors hover:text-crimson-soft"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="https://github.com/arpansanap1-stack"
            target="_blank"
            rel="noreferrer"
            className="mt-5 flex h-12 items-center justify-center gap-2 rounded-lg border border-line text-base font-medium text-bone"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
        </div>
      )}
    </header>
  );
}
