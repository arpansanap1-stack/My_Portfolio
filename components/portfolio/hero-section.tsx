"use client";

import * as React from "react";
import LycorisSpecimen from "@/components/ui/lycoris-specimen";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#050505]">
      <LycorisSpecimen
        name="ARPAN SANAP"
        studio="CS & Design Builder"
        year="2026"
        description="Computer Science & Design student exploring AI, software, data, and product design through building."
        specs={[
          "CS & Design Student",
          "AI / ML & Full-Stack",
          "Product & UI/UX Design",
          "Maharashtra, India",
          "Open to Internships",
        ]}
        tagline={[
          { text: "Curiosity Machine" },
          { text: "AI Platform", small: true },
          { text: "MarketPulse" },
          { text: "Data Analytics", small: true },
        ]}
        multilingual="AI · FullStack · Data · Design"
        ligatureWord="Curiosity"
        links={[
          { label: "EXPLORE PORTFOLIO ↓", href: "#about" },
          { label: "GITHUB @ ARPAN-STACK →", href: "https://github.com/arpansanap1-stack" },
        ]}
        crimson="#e3131b"
        bone="#d8d2be"
        ink="#050505"
        sceneScroll={1.1}
      />
    </section>
  );
}
