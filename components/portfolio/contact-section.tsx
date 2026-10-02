"use client";

import * as React from "react";
import { Mail, Copy, Check, ArrowUpRight, FileText, Send, X } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import SectionHeader from "./section-header";

const email = "arpansanap1@gmail.com";

export default function ContactSection() {
  const [copied, setCopied] = React.useState(false);
  const [resumeOpen, setResumeOpen] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      /* clipboard unavailable — the address is still selectable */
    }
  };

  // Close the resume dialog with Escape and lock page scroll while it is open.
  React.useEffect(() => {
    if (!resumeOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setResumeOpen(false);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [resumeOpen]);

  return (
    <section id="contact" className="relative scroll-mt-24 border-t border-line bg-ink px-6 py-24 sm:px-8 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 left-1/2 h-[300px] w-[700px] max-w-full -translate-x-1/2 rounded-full opacity-20 blur-[160px]"
        style={{ background: "radial-gradient(circle, #e3131b, transparent 75%)" }}
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        <SectionHeader index="05" label="Contact" title="Let's connect" />

        <div className="flex flex-col items-center rounded-2xl border border-line bg-surface p-5 text-center sm:p-14">
          <h3 className="max-w-2xl font-serif text-3xl leading-snug text-paper sm:text-4xl">
            Have a project, internship, or hackathon idea?
          </h3>
          <p className="mt-4 mb-8 max-w-xl text-lg leading-relaxed text-bone">
            I&apos;m always happy to collaborate on ambitious products and take on new technical challenges.
          </p>

          {/* Email bar */}
          <div className="mb-8 flex w-full max-w-2xl flex-col items-stretch gap-3 rounded-xl border border-line bg-ink p-2 sm:flex-row sm:items-center">
            <div className="flex min-w-0 flex-1 items-center justify-center gap-3 px-3 py-2 text-paper sm:justify-start sm:px-4">
              <Mail className="h-5 w-5 shrink-0 text-crimson-soft" />
              <span className="font-mono text-base break-all select-all sm:text-lg">{email}</span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleCopy}
                className="flex h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-line px-4 text-base font-medium whitespace-nowrap text-bone transition-colors hover:border-bone hover:text-paper sm:flex-none"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-green-400" />
                    <span className="text-green-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy
                  </>
                )}
              </button>
              <a
                href={`mailto:${email}`}
                className="flex h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-bone px-4 text-base font-semibold whitespace-nowrap text-ink transition-colors hover:bg-crimson hover:text-white sm:flex-none sm:px-5"
              >
                Email me
                <Send className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Secondary links */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://github.com/arpansanap1-stack"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-line px-5 text-base text-bone transition-colors hover:border-bone hover:text-paper"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
              <ArrowUpRight className="h-4 w-4 text-crimson-soft" />
            </a>
            <button
              onClick={() => setResumeOpen(true)}
              className="inline-flex h-11 items-center gap-2 rounded-full border border-line px-5 text-base text-bone transition-colors hover:border-bone hover:text-paper"
            >
              <FileText className="h-4 w-4 text-crimson-soft" />
              Resume summary
            </button>
          </div>
        </div>
      </div>

      {/* Resume dialog */}
      {resumeOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          onClick={() => setResumeOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-title"
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-line bg-surface p-6 text-left shadow-2xl sm:p-8"
          >
            <div className="mb-6 flex items-start justify-between gap-4 border-b border-line pb-5">
              <div>
                <h4 id="resume-title" className="font-serif text-2xl text-paper">
                  Arpan Sanap
                </h4>
                <p className="mt-1 text-base text-crimson-soft">Computer Science &amp; Design student</p>
              </div>
              <button
                onClick={() => setResumeOpen(false)}
                aria-label="Close resume summary"
                className="rounded-lg border border-line p-2 text-bone transition-colors hover:border-bone hover:text-paper"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-6 text-base leading-relaxed text-bone">
              <div>
                <h5 className="mb-2 font-mono text-sm tracking-widest text-crimson-soft uppercase">Education</h5>
                <p className="font-medium text-paper">B.Tech in Computer Science &amp; Design</p>
                <p className="text-bone-dim">Maharashtra, India · 2025 – Present</p>
              </div>

              <div>
                <h5 className="mb-2 font-mono text-sm tracking-widest text-crimson-soft uppercase">Skills</h5>
                <ul className="space-y-1.5">
                  <li>
                    <strong className="font-medium text-paper">Languages &amp; frameworks:</strong> Python,
                    JavaScript, React, Node.js, FastAPI, C
                  </li>
                  <li>
                    <strong className="font-medium text-paper">AI &amp; data:</strong> Machine Learning,
                    Generative AI, NumPy, Pandas, LLM prompt engineering
                  </li>
                  <li>
                    <strong className="font-medium text-paper">Design &amp; tooling:</strong> UI/UX, product
                    architecture, Git, GitHub, MongoDB, Vercel
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="mb-2 font-mono text-sm tracking-widest text-crimson-soft uppercase">Projects</h5>
                <ul className="list-disc space-y-1.5 pl-5">
                  <li>
                    <strong className="font-medium text-paper">Curiosity Machine:</strong> AI-powered
                    exploration and knowledge-connection platform (React, AI/LLM, Vercel).
                  </li>
                  <li>
                    <strong className="font-medium text-paper">MarketPulse:</strong> financial market analytics
                    and data visualization platform (React, Node.js, MongoDB).
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-3 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href={`mailto:${email}?subject=Interview%20/%20Opportunity`}
                  className="inline-flex h-11 items-center justify-center rounded-lg bg-bone px-5 text-base font-semibold text-ink transition-colors hover:bg-crimson hover:text-white"
                >
                  Contact Arpan
                </a>
                <span className="font-mono text-sm text-bone-dim">{email}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
