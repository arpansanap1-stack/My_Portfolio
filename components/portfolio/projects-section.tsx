import Image from "next/image";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import SectionHeader from "./section-header";

const projects = [
  {
    id: "curiosity-machine",
    title: "Curiosity Machine",
    category: "AI & knowledge exploration",
    tagline: "Turn wandering curiosity into structured understanding.",
    description:
      "A platform built around one of my strongest traits: curiosity. It turns random thoughts, questions and ideas into deeper explorations, helping users connect ideas across domains and go beyond surface-level answers.",
    tech: ["React", "JavaScript", "AI / LLM", "Vercel", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    demoUrl: "https://curiosity-machine.vercel.app/",
    githubUrl: "https://github.com/arpansanap1-stack/Curiosity_machine",
  },
  {
    id: "market-pulse",
    title: "MarketPulse",
    category: "Market analytics",
    tagline: "Complex market data, made clear and interactive.",
    description:
      "A market analysis platform that turns complex data streams into actionable insights. It combines real-time data processing, interactive visualizations and full-stack backend APIs to make financial information intuitive and accessible.",
    tech: ["JavaScript", "React", "Node.js", "MongoDB", "Financial APIs", "Data Analysis"],
    image:
      "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1200&q=80",
    demoUrl: null,
    githubUrl: "https://github.com/arpansanap1-stack/market_Pulse",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative scroll-mt-24 border-t border-line bg-ink px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader index="03" label="Work" title="Selected projects">
          <a
            href="https://github.com/arpansanap1-stack"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-base font-medium text-bone transition-colors hover:text-paper"
          >
            All repositories
            <ArrowUpRight className="h-4 w-4 text-crimson-soft" />
          </a>
        </SectionHeader>

        <div className="flex flex-col gap-10">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group grid grid-cols-1 overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-crimson/60 lg:grid-cols-2"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-[#121212] lg:aspect-auto lg:min-h-[420px]">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover opacity-80 transition duration-700 ease-out group-hover:scale-105 group-hover:opacity-95"
                  unoptimized
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-6 p-6 sm:p-10">
                <div>
                  <p className="font-mono text-sm tracking-wider text-crimson-soft uppercase">
                    {project.category}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl text-paper sm:text-4xl">{project.title}</h3>
                  <p className="mt-2 font-serif text-lg text-bone italic">{project.tagline}</p>
                </div>

                <p className="text-base leading-relaxed text-bone sm:text-lg">{project.description}</p>

                <ul className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li key={t} className="rounded-md border border-line bg-ink px-3 py-1 text-sm text-paper">
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-line pt-6">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-11 items-center gap-2 rounded-lg bg-bone px-5 text-base font-semibold text-ink transition-colors hover:bg-crimson hover:text-white"
                    >
                      Live demo
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-lg border border-line px-5 text-base font-medium text-paper transition-colors hover:border-bone"
                  >
                    <GithubIcon className="h-4 w-4" />
                    Source code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
