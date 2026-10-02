import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./section-header";

const facts = [
  { label: "Studying", value: "B.Tech, Computer Science & Design" },
  { label: "Based in", value: "Maharashtra, India" },
  { label: "Focus", value: "AI / ML, full-stack, product design" },
  { label: "Status", value: "Open to internships & collaborations" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative scroll-mt-24 border-t border-line bg-ink px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader index="01" label="About" title="About me" />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Bio */}
          <div className="flex max-w-2xl flex-col gap-6 lg:col-span-7">
            <p className="font-serif text-2xl leading-snug text-paper sm:text-3xl">
              I&apos;m a Computer Science &amp; Design student who builds to learn.
            </p>
            <p className="text-lg leading-relaxed text-bone">
              I&apos;m naturally curious about how things work, and I enjoy turning ideas into real, usable
              products. My interests span software development, AI/ML, data, UI/UX and product design, and I
              learn new technologies by building with them.
            </p>
            <p className="text-lg leading-relaxed text-bone">
              I don&apos;t like limiting myself to one area. Whether I&apos;m training a model, designing a
              backend, or polishing a small interaction in an interface, I enjoy connecting ideas and going
              deeper into whatever catches my curiosity.
            </p>
          </div>

          {/* At a glance */}
          <aside className="lg:col-span-5">
            <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
              <h3 className="mb-6 font-mono text-sm tracking-widest text-crimson-soft uppercase">At a glance</h3>
              <dl className="flex flex-col divide-y divide-line">
                {facts.map((fact) => (
                  <div key={fact.label} className="flex flex-col gap-1 py-4 first:pt-0 sm:flex-row sm:gap-6">
                    <dt className="w-24 shrink-0 text-base text-bone-dim">{fact.label}</dt>
                    <dd className="text-base text-paper">{fact.value}</dd>
                  </div>
                ))}
              </dl>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-base font-medium text-crimson-soft transition-colors hover:text-paper"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
