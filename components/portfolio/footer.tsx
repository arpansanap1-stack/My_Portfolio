"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink px-6 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-serif text-lg text-paper">Arpan Sanap</p>
          <p className="text-sm text-bone-dim">
            &copy; {new Date().getFullYear()} · Built with Next.js
          </p>
        </div>

        <nav aria-label="Footer" className="flex items-center gap-6 text-base">
          <a
            href="https://github.com/arpansanap1-stack"
            target="_blank"
            rel="noreferrer"
            className="text-bone transition-colors hover:text-paper"
          >
            GitHub
          </a>
          <a href="mailto:arpansanap1@gmail.com" className="text-bone transition-colors hover:text-paper">
            Email
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex h-10 items-center gap-2 rounded-full border border-line px-4 text-sm text-bone transition-colors hover:border-crimson hover:text-paper"
          >
            Back to top
            <ArrowUp className="h-4 w-4 text-crimson-soft" />
          </button>
        </nav>
      </div>
    </footer>
  );
}
