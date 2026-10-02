export const siteConfig = {
  name: "Arpan Sanap",
  title: "Arpan Sanap — Computer Science & Design Builder",
  titleTemplate: "%s | Arpan Sanap",
  shortTitle: "Arpan Sanap",
  description:
    "Portfolio of Arpan Sanap. Computer Science & Design student exploring AI, software engineering, data systems, and product design through building.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://arpansanap.vercel.app"),
  email: "arpansanap1@gmail.com",
  location: "Maharashtra, India",
  role: "Computer Science & Design Builder",
  github: "https://github.com/arpansanap1-stack",
  socials: {
    github: "https://github.com/arpansanap1-stack",
    email: "mailto:arpansanap1@gmail.com",
  },
  keywords: [
    "Arpan Sanap",
    "Arpan Sanap Portfolio",
    "Computer Science and Design",
    "Full-Stack Developer",
    "AI Engineer",
    "Machine Learning",
    "UI/UX Design",
    "Product Design",
    "Curiosity Machine",
    "MarketPulse",
    "Software Engineer",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Maharashtra India Developer",
    "Vercel Portfolio",
    "Student Builder",
  ],
  projects: [
    {
      name: "Curiosity Machine",
      tagline: "Turn wandering curiosity into structured understanding.",
      description:
        "An AI platform that turns random thoughts, questions and ideas into deeper explorations, connecting ideas across domains and going beyond surface-level answers.",
      url: "https://curiosity-machine.vercel.app/",
      github: "https://github.com/arpansanap1-stack/Curiosity_machine",
      technologies: ["React", "JavaScript", "AI / LLM", "Vercel", "Tailwind CSS"],
    },
    {
      name: "MarketPulse",
      tagline: "Complex market data, made clear and interactive.",
      description:
        "A market analysis platform that turns complex data streams into actionable insights using real-time data processing and interactive visualizations.",
      url: "https://github.com/arpansanap1-stack/market_Pulse",
      github: "https://github.com/arpansanap1-stack/market_Pulse",
      technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Financial APIs", "Data Analysis"],
    },
  ],
};
