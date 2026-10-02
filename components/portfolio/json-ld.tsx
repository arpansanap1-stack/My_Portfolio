import { siteConfig } from "@/lib/site-config";

export default function JsonLd() {
  const personSchema = {
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.name,
    alternateName: ["Arpan", "arpansanap1-stack"],
    jobTitle: "Computer Science & Design Builder",
    description: siteConfig.description,
    url: siteConfig.url,
    sameAs: [siteConfig.socials.github],
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "B.Tech in Computer Science & Design",
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Full-Stack Development",
      "Computer Science",
      "UI/UX Design",
      "Product Design",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Python",
      "Node.js",
      "Data Analytics",
    ],
  };

  const websiteSchema = {
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.title,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#person`,
    },
    inLanguage: "en-US",
  };

  const webpageSchema = {
    "@type": "ProfilePage",
    "@id": `${siteConfig.url}/#webpage`,
    url: siteConfig.url,
    name: siteConfig.title,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@id": `${siteConfig.url}/#person`,
    },
    mainEntity: {
      "@id": `${siteConfig.url}/#person`,
    },
  };

  const itemListSchema = {
    "@type": "ItemList",
    itemListElement: siteConfig.projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: project.name,
        description: project.description,
        applicationCategory: "WebApplication",
        operatingSystem: "Web",
        url: project.url,
        sameAs: project.github,
        author: {
          "@id": `${siteConfig.url}/#person`,
        },
      },
    })),
  };

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [personSchema, websiteSchema, webpageSchema, itemListSchema],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaGraph),
      }}
    />
  );
}
