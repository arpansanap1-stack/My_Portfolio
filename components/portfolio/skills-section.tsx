import { Code2, Brain, Palette, Wrench } from "lucide-react";
import SectionHeader from "./section-header";

const skillCategories = [
  {
    title: "Development",
    icon: Code2,
    description: "Full-stack web apps and backend services with a clean separation of concerns.",
    skills: ["Python", "JavaScript", "React", "Node.js", "FastAPI"],
  },
  {
    title: "AI & Data",
    icon: Brain,
    description: "Machine learning, data analysis, and LLM-powered features.",
    skills: ["Machine Learning", "Generative AI", "NumPy", "Pandas", "LLM Integration"],
  },
  {
    title: "UI/UX & Product Design",
    icon: Palette,
    description: "Layouts, user flows, and interaction details that make products easy to use.",
    skills: ["UI/UX Design", "Product Design", "Interaction Design", "Wireframing", "Design Systems"],
  },
  {
    title: "Tools & Infrastructure",
    icon: Wrench,
    description: "Version control, databases, and deployment workflows.",
    skills: ["Git", "GitHub", "MongoDB", "Vercel", "REST APIs"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative border-t border-line bg-ink px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader index="02" label="Skills" title="Skills" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillCategories.map(({ title, icon: Icon, description, skills }) => (
            <article
              key={title}
              className="flex flex-col gap-6 rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-crimson/60 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line bg-ink text-crimson-soft">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-serif text-2xl text-paper">{title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-bone">{description}</p>
                </div>
              </div>

              <ul className="mt-auto flex flex-wrap gap-2 border-t border-line pt-6">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-line bg-ink px-3 py-1.5 text-sm text-paper"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
