import "server-only";

import { cache } from "react";
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import type { IArticle } from "@/shared/config/types";

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");
const WORDS_PER_MINUTE = 200;
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

type ParsedFrontmatter = {
  title: string;
  description: string;
  publishedAt: string;
  tags: string[];
  draft: boolean;
  coverImage?: string;
};

const normalizePublishedAt = (value: unknown): string | null => {
  if (typeof value === "string" && DATE_PATTERN.test(value)) {
    return value;
  }

  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }

  return null;
};

const parseFrontmatter = (
  filename: string,
  data: Record<string, unknown>,
): ParsedFrontmatter => {
  const invalid: string[] = [];
  const publishedAt = normalizePublishedAt(data.publishedAt);

  if (typeof data.title !== "string" || !data.title.trim()) {
    invalid.push("title");
  }

  if (typeof data.description !== "string" || !data.description.trim()) {
    invalid.push("description");
  }

  if (!publishedAt) {
    invalid.push("publishedAt");
  }

  if (
    !Array.isArray(data.tags) ||
    data.tags.length === 0 ||
    data.tags.some((tag) => typeof tag !== "string" || !tag.trim())
  ) {
    invalid.push("tags");
  }

  if (data.draft !== undefined && typeof data.draft !== "boolean") {
    invalid.push("draft");
  }

  if (
    data.coverImage !== undefined &&
    (typeof data.coverImage !== "string" || !data.coverImage.startsWith("/"))
  ) {
    invalid.push("coverImage");
  }

  if (invalid.length > 0) {
    throw new Error(
      `Invalid frontmatter in ${filename}: missing or invalid ${invalid.join(", ")}`,
    );
  }

  return {
    title: (data.title as string).trim(),
    description: (data.description as string).trim(),
    publishedAt: publishedAt as string,
    tags: (data.tags as string[]).map((tag) => tag.trim()),
    draft: Boolean(data.draft),
    coverImage:
      typeof data.coverImage === "string" ? data.coverImage : undefined,
  };
};

const computeReadingTime = (content: string): number => {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
};

const isPublishedFilename = (name: string): boolean =>
  name.endsWith(".md") && !name.startsWith("_");

const listArticleFilenames = async (): Promise<string[]> => {
  try {
    const entries = await fs.readdir(ARTICLES_DIR);
    return entries.filter(isPublishedFilename);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }

    throw error;
  }
};

const parseArticleFile = async (filename: string): Promise<IArticle | null> => {
  const slug = filename.replace(/\.md$/, "");
  const raw = await fs.readFile(path.join(ARTICLES_DIR, filename), "utf8");
  const { data, content } = matter(raw);
  const frontmatter = parseFrontmatter(filename, data);

  if (frontmatter.draft) {
    return null;
  }

  const body = content.trim();

  return {
    slug,
    title: frontmatter.title,
    description: frontmatter.description,
    publishedAt: frontmatter.publishedAt,
    tags: frontmatter.tags,
    coverImage: frontmatter.coverImage,
    content: body,
    readingTime: computeReadingTime(body),
  };
};

const loadPublishedArticles = async (): Promise<IArticle[]> => {
  const filenames = await listArticleFilenames();
  const articles = await Promise.all(filenames.map(parseArticleFile));

  return articles
    .filter((article): article is IArticle => article !== null)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
};

export const getAllArticles = cache(loadPublishedArticles);

export const getLatestArticles = async (count: number): Promise<IArticle[]> => {
  const articles = await getAllArticles();
  return articles.slice(0, count);
};

export const getArticleSlugs = async (): Promise<string[]> => {
  const articles = await getAllArticles();
  return articles.map((article) => article.slug);
};

export const getArticleBySlug = async (
  slug: string,
): Promise<IArticle | null> => {
  if (!slug || slug.startsWith("_") || slug.includes("..") || /[\\/]/.test(slug)) {
    return null;
  }

  const articles = await getAllArticles();
  return articles.find((article) => article.slug === slug) ?? null;
};
