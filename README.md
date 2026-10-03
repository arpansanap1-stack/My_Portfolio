# Arpan Sanap — Portfolio & Creative Specimen

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.3.8-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.8-23272f?style=for-the-badge&logo=react&logoColor=61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![WebGL](https://img.shields.io/badge/WebGL-Raw_Shaders-990000?style=for-the-badge&logo=webgl&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

**Personal engineering portfolio and interactive creative showcase of Arpan Sanap — Computer Science & Design Builder.**

[Live Demo](https://arpansanap.vercel.app) • [GitHub Profile](https://github.com/arpansanap1-stack) • [Email Contact](mailto:arpansanap1@gmail.com)

</div>

---

## ✦ Overview

This repository houses the personal portfolio of **Arpan Sanap**, an engineering and design student focused on artificial intelligence, full-stack systems, data engineering, and product design.

Rather than relying on generic portfolio templates, the project combines a high-performance **Next.js 16 App Router** architecture with an original, dark-botanical visual identity inspired by the **Red Spider Lily (*Lycoris radiata*)**. The hero section showcases a custom **raw WebGL 3D specimen** rendered with procedural mathematical curves and illuminated in real time without heavy external 3D libraries.

---

## ✨ Key Features

### 🌺 Procedural 3D WebGL Specimen (Zero 3D Library Overhead)
- **Pure WebGL & Canvas**: Engineered with raw WebGL shaders and parametric 3D curves—no Three.js or heavy engine bundle overhead.
- **Parametric Anatomy**: Procedural generation of organic florets, curling petal ribbons, stamen tubes, and anther bulbs with custom pseudo-random seeding.
- **Scroll Choreography**: A continuous timeline scrubbing through multi-phase camera orbits, tilt transitions, and bloom animations.
- **Interactive Lighting**: Real-time cursor/touch tracking with ambient, diffuse, and specular illumination against deep dark space.

### 🎨 Editorial Aesthetic & Design System
- **Curated Palette**: Dark luxury aesthetic built around custom design tokens:
  - `ink` (`#050505`) & `surface` (`#0c0c0c`) for depth
  - `paper` (`#efebdc`) & `bone` (`#c4bea3`) for readability
  - `crimson` (`#e3131b`) & `crimson-soft` (`#ff5a5f`) for botanical accents
- **Typography**: Powered by `Geist Sans`, `Geist Mono`, and classical system serif headings.
- **Accessibility (a11y)**: All text pairings meet WCAG AA contrast ratios (4.5:1+), supports `prefers-reduced-motion`, and includes full keyboard navigation.

### 🔍 Native Next.js SEO & Metadata Engine
- **Dynamic Open Graph & Twitter Cards**: Programmatically generated 1200×630px social preview cards via `app/opengraph-image.tsx` and `app/twitter-image.tsx` with Edge ImageResponse.
- **Schema.org Structured Data**: Rich JSON-LD graph combining `Person`, `WebSite`, `ProfilePage`, and `SoftwareApplication` definitions for search engines.
- **Dynamic Icons & Manifest**: Next.js-generated favicons, Apple touch icons, web app manifest, sitemap (`sitemap.ts`), and robots rules (`robots.ts`).

### 💼 Portfolio Sections & Modals
- **About & At-a-Glance**: Core engineering philosophy, current education, and quick status metrics.
- **Domain Skills**: Organized across Development, AI & Data, UI/UX & Product Design, and Tools & Infrastructure.
- **Featured Projects**: Showcase cards for flagship builds including **Curiosity Machine** (AI/LLM exploration platform) and **MarketPulse** (interactive market analytics).
- **Journey Timeline**: Interactive chronological milestones documenting foundation, exploration, and current technical endeavors.
- **Contact & Interactive Resume**: Instant clipboard email copy with feedback state, mailto links, and an accessible, keyboard-trapped in-browser resume summary modal.

---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| **UI Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/postcss`) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Graphics & 3D** | Custom Raw WebGL Shaders, HTML5 Canvas 2D/3D Vector Math |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **SEO & Socials** | Next.js Metadata, Edge ImageResponse (`next/og`), JSON-LD |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📂 Project Structure

```text
├── app/
│   ├── apple-icon.tsx          # Dynamic Apple Touch icon generator
│   ├── favicon.ico             # Static fallback favicon
│   ├── globals.css             # Tailwind v4 theme definitions and design tokens
│   ├── icon.tsx                # Dynamic PNG favicon generator (ImageResponse)
│   ├── layout.tsx              # Root layout, fonts, meta tags, and JSON-LD injector
│   ├── manifest.ts             # Web App Manifest generator
│   ├── opengraph-image.tsx     # Dynamic 1200x630 OpenGraph preview card
│   ├── page.tsx                # Single-page application entry aggregating all sections
│   ├── robots.ts               # Dynamic robots.txt configuration
│   ├── sitemap.ts              # Dynamic XML sitemap
│   └── twitter-image.tsx       # Dynamic Twitter Summary card
├── components/
│   ├── portfolio/
│   │   ├── about-section.tsx   # Biography and "At a glance" quick specs
│   │   ├── contact-section.tsx # Contact CTA, copy-to-clipboard email, resume modal
│   │   ├── footer.tsx          # Minimalist footer and smooth scroll-to-top trigger
│   │   ├── hero-section.tsx    # Semantic hero container
│   │   ├── hero-specimen.tsx   # Lycoris specimen wrapper and scroll bridge
│   │   ├── journey-section.tsx # Chronological experience and education timeline
│   │   ├── json-ld.tsx         # Schema.org structured data scripts
│   │   ├── navbar.tsx          # Responsive floating navigation with glassmorphism
│   │   ├── projects-section.tsx# Featured work showcase with tech stacks and live links
│   │   ├── section-header.tsx  # Uniform numbered index and heading component
│   │   └── skills-section.tsx  # Categorized skill taxonomy
│   └── ui/
│       ├── icons.tsx           # Custom brand SVG icons (GitHub, etc.)
│       ├── lycoris-specimen.tsx# Procedural 3D WebGL Lycoris Radiata specimen
│       └── spider-lily-canvas.tsx # Real-time vector-math 3D canvas stage
├── lib/
│   ├── site-config.ts          # Central source of truth for portfolio data, URLs, & projects
│   └── utils.ts                # Styling utilities (clsx, tailwind-merge)
├── public/                     # Static media and assets
├── next.config.ts              # Next.js runtime configuration
└── package.json                # Project dependencies and scripts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v20.x` or higher recommended
- **Package Manager**: `npm`, `pnpm`, `yarn`, or `bun`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/arpansanap1-stack/My_Portfolio.git
   cd My_Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View in browser:**
   Open [http://localhost:3000](http://localhost:3000) to explore the site with hot-module reloading.

---

## 📜 Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Launches the Next.js development server with hot-reload |
| `npm run build` | Compiles the production build with type checking and asset optimization |
| `npm run start` | Boots the compiled production server |
| `npm run lint` | Runs ESLint across all TypeScript and React files |

---

## ⚙️ Configuration & Customization

### Modifying Site Content
All personal information, social handles, SEO keywords, and project entries are centralized in **[`lib/site-config.ts`](lib/site-config.ts)**:

```typescript
export const siteConfig = {
  name: "Arpan Sanap",
  title: "Arpan Sanap — Computer Science & Design Builder",
  description: "...",
  url: "https://arpansanap.vercel.app",
  email: "arpansanap1@gmail.com",
  socials: {
    github: "https://github.com/arpansanap1-stack",
    email: "mailto:arpansanap1@gmail.com",
  },
  projects: [
    // Add or modify project entries here
  ],
};
```

### Adjusting 3D Specimen Parameters
The 3D spider lily in **[`components/portfolio/hero-specimen.tsx`](components/portfolio/hero-specimen.tsx)** exposes granular procedural props:

```tsx
<LycorisSpecimen
  florets={6}            // Number of floral clusters (3 to 8)
  seed={42}             // Random seed for procedural variations
  sceneScroll={1.1}     // Scroll sensitivity along the 3D timeline
  crimson="#e3131b"     // Petal ribbon accent color
  bone="#d8d2be"        // Stem and filament tone
  ink="#050505"         // Background atmosphere
/>
```

---

## 🌐 Deployment

The application is optimized for deployment on the [Vercel Platform](https://vercel.com):

1. Push your changes to GitHub.
2. Import the repository into your Vercel Dashboard.
3. Configure the optional environment variable:
   - `NEXT_PUBLIC_SITE_URL`: Your custom production domain (e.g. `https://arpansanap.vercel.app`).
4. Click **Deploy**. Vercel will automatically run `npm run build` and provision Edge functions for dynamic OG image generation.

---

## 👤 Author

**Arpan Sanap**
- **GitHub:** [@arpansanap1-stack](https://github.com/arpansanap1-stack)
- **Email:** [arpansanap1@gmail.com](mailto:arpansanap1@gmail.com)
- **Portfolio:** [arpansanap.vercel.app](https://arpansanap.vercel.app)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
