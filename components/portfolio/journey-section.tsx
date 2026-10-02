import SectionHeader from "./section-header";

const milestones = [
  {
    period: "2025",
    stage: "Foundations",
    description:
      "Started Computer Science & Design. Built early command-line programs and learned how algorithms and structured code work in C and Python.",
    highlights: [
      "Programming fundamentals in C and Python",
      "First independent scripts and console apps",
      "Problem solving and math foundations",
    ],
  },
  {
    period: "2026",
    stage: "Full-stack & AI",
    description:
      "Moved into product engineering: data structures and algorithms, client-server web apps, databases, early machine learning, and IoT prototypes, plus hackathons.",
    highlights: [
      "DSA in C++ and Python",
      "React, Node.js and MongoDB",
      "Machine learning and IoT prototypes",
      "Hackathons and rapid prototyping",
    ],
  },
  {
    period: "Now",
    stage: "Building bigger",
    description:
      "Working on larger platforms like Curiosity Machine and MarketPulse, while going deeper into AI/LLM apps, system design, and deployment.",
    highlights: [
      "LLM-powered applications",
      "Full-stack web apps, idea to deployment",
      "System design and scalability",
    ],
    current: true,
  },
];

export default function JourneySection() {
  return (
    <section id="journey" className="relative scroll-mt-24 border-t border-line bg-ink px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader index="04" label="Journey" title="Journey" />

        {/* Current role */}
        <div className="mb-14 flex flex-col gap-2 rounded-2xl border border-line bg-surface p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="font-mono text-sm tracking-widest text-crimson-soft uppercase">Currently</p>
            <h3 className="mt-2 font-serif text-2xl text-paper sm:text-3xl">
              Independent developer &amp; student builder
            </h3>
          </div>
          <p className="text-base text-bone sm:text-right">
            B.Tech, Computer Science &amp; Design
            <br />
            2025 – Present
          </p>
        </div>

        {/* Timeline */}
        <ol className="ml-2 flex flex-col gap-10 border-l border-line sm:ml-4">
          {milestones.map((m) => (
            <li key={m.period} className="relative pl-8 sm:pl-12">
              <span
                aria-hidden
                className={`absolute top-2 -left-[9px] h-[17px] w-[17px] rounded-full border-2 ${
                  m.current ? "border-crimson bg-crimson" : "border-bone-dim bg-ink"
                }`}
              />

              <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
                <div className="mb-4 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="font-serif text-3xl text-paper">{m.period}</h3>
                  <p className="text-lg text-crimson-soft">{m.stage}</p>
                  {m.current && (
                    <span className="rounded-full border border-crimson/40 bg-crimson/10 px-3 py-0.5 text-sm text-crimson-soft">
                      In progress
                    </span>
                  )}
                </div>

                <p className="max-w-3xl text-base leading-relaxed text-bone sm:text-lg">{m.description}</p>

                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {m.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-base text-paper">
                      <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
