import { IArticleItem } from "@/shared/config/types";

export const mockArticles: IArticleItem[] = [
  {
    slug: "react-lazy-vs-nextjs-dynamic",
    title: "React.lazy vs Next.js dynamic(): Which One Should You Use?",
    description:
      "Learn the differences between React.lazy and Next.js dynamic imports, when SSR matters, and how to choose the right solution for your application.",
    coverImage: "/images/articles/react-lazy-vs-dynamic.jpg",
    publishedAt: "2026-07-12",
    readingTime: 7,
    tags: ["React", "Next.js", "Performance"],
  },
  {
    slug: "building-an-offline-first-restaurant-saas",
    title: "Building an Offline-First Restaurant SaaS",
    description:
      "How I designed a restaurant management system that continues to work even when the internet goes down.",
    coverImage: "/images/articles/offline-first.jpg",
    publishedAt: "2026-07-05",
    readingTime: 12,
    tags: ["Case Study", "Architecture", "Offline First"],
  },
  {
    slug: "designing-a-reliable-data-sync-system",
    title: "Designing a Reliable Data Synchronization System",
    description:
      "Lessons learned from synchronizing thousands of orders between local and cloud databases with conflict handling.",
    coverImage: "/images/articles/data-sync.jpg",
    publishedAt: "2026-06-27",
    readingTime: 10,
    tags: ["System Design", "MongoDB", "NestJS"],
  },
  {
    slug: "nextjs-app-router-patterns",
    title: "Next.js App Router Patterns I Use in Production",
    description:
      "A collection of practical patterns for organizing large Next.js applications with the App Router.",
    coverImage: "/images/articles/app-router.jpg",
    publishedAt: "2026-06-18",
    readingTime: 9,
    tags: ["Next.js", "Architecture", "TypeScript"],
  },
  {
    slug: "seo-lessons-from-millions-of-users",
    title: "SEO Lessons from a Website Serving Millions of Users",
    description:
      "Real-world SEO practices, performance optimizations, and technical improvements that scale.",
    coverImage: "/images/articles/seo.jpg",
    publishedAt: "2026-06-09",
    readingTime: 8,
    tags: ["SEO", "Performance", "Case Study"],
  },
  {
    slug: "nestjs-project-structure",
    title: "Structuring Large NestJS Projects",
    description:
      "How I organize modules, services, and shared utilities to keep growing backends maintainable.",
    coverImage: "/images/articles/nestjs.jpg",
    publishedAt: "2026-05-30",
    readingTime: 11,
    tags: ["NestJS", "Architecture", "Backend"],
  },
  {
    slug: "mongodb-schema-design-tips",
    title: "MongoDB Schema Design Tips from Production",
    description:
      "Practical advice on modeling data, avoiding common pitfalls, and keeping queries efficient.",
    coverImage: "/images/articles/mongodb.jpg",
    publishedAt: "2026-05-22",
    readingTime: 8,
    tags: ["MongoDB", "Database", "Performance"],
  },
  {
    slug: "optimizing-react-performance",
    title: "React Performance Optimizations That Actually Matter",
    description:
      "Focus on the optimizations that make a measurable difference instead of premature micro-optimizations.",
    coverImage: "/images/articles/react-performance.jpg",
    publishedAt: "2026-05-10",
    readingTime: 9,
    tags: ["React", "Performance", "Frontend"],
  },
];
