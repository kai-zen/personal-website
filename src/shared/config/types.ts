export interface IArticleItem {
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  publishedAt: string;
  readingTime: number;
  tags: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
  link?: string;
}
