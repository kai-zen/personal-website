const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "http://localhost:3000";

export const siteConfig = {
  name: "Ali Razipour",
  title: "Ali Razipour | Software Engineer",
  description:
    "Software engineer building products and writing about backend architecture, modern web development, and lessons from shipping real systems.",
  url: siteUrl,
  locale: "en_US",
  author: {
    name: "Ali Razipour",
    email: "reazipurali@gmail.com",
    url: siteUrl,
  },
  keywords: [
    "Ali Razipour",
    "Software Engineer",
    "Full Stack Developer",
    "TypeScript",
    "Next.js",
    "NestJS",
    "MongoDB",
    "Software Architecture",
    "Web Development",
  ],
  links: {
    github: "https://github.com/kai-zen",
    linkedin: "https://www.linkedin.com/in/ali-razipour-b80618262",
  },
} as const;
