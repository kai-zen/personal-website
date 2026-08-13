import {
  getAllArticles,
  getArticleBySlug,
  getArticleSlugs,
} from "@/content/articles";
import ArticleHeader from "@/sections/articles/ArticleHeader";
import ArticleJsonLd from "@/sections/articles/ArticleJsonLd";
import MarkdownContent from "@/sections/articles/MarkdownContent";
import { Button, Typography } from "@/shared/components";
import { siteConfig } from "@/shared/config/site";
import type { IArticle } from "@/shared/config/types";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FC } from "react";

type Props = {
  params: Promise<{ slug: string }>;
};

export const generateStaticParams = async () => {
  const slugs = await getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  const url = `${siteConfig.url}/articles/${article.slug}`;

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `/articles/${article.slug}`,
    },
    openGraph: {
      type: "article",
      locale: siteConfig.locale,
      url,
      title: article.title,
      description: article.description,
      siteName: siteConfig.name,
      publishedTime: article.publishedAt,
      authors: [siteConfig.author.name],
      tags: article.tags,
      ...(article.coverImage ? { images: [{ url: article.coverImage }] } : {}),
    },
    twitter: {
      card: article.coverImage ? "summary_large_image" : "summary",
      title: article.title,
      description: article.description,
      ...(article.coverImage ? { images: [article.coverImage] } : {}),
    },
  };
};

const AdjacentLink: FC<{
  label: string;
  article: IArticle;
  align?: "start" | "end";
}> = ({ label, article, align = "start" }) => (
  <Link
    href={`/articles/${article.slug}`}
    prefetch={false}
    className={`group flex min-w-0 flex-col gap-1 ${align === "end" ? "items-end text-right" : "items-start"}`}
  >
    <span className="text-[0.625rem] font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
      {label}
    </span>
    <Typography
      as="span"
      className="text-sm font-medium text-gray-950 transition-colors group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300"
    >
      {article.title}
    </Typography>
  </Link>
);

const ArticlePage: FC<Props> = async ({ params }) => {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const articles = await getAllArticles();
  const index = articles.findIndex((item) => item.slug === article.slug);
  const newer = index > 0 ? articles[index - 1] : null;
  const older =
    index >= 0 && index < articles.length - 1 ? articles[index + 1] : null;

  return (
    <>
      <ArticleJsonLd article={article} />
      <article className="mx-auto max-w-3xl px-6 py-10 sm:py-14">
        <Button
          href="/articles"
          variant="text"
          size="sm"
          className="-ml-4 mb-8 sm:mb-10"
        >
          All articles
        </Button>

        <ArticleHeader article={article} />
        <MarkdownContent content={article.content} />

        {(newer || older) && (
          <nav
            aria-label="Adjacent articles"
            className="mt-14 grid grid-cols-1 gap-6 border-t border-gray-200/80 pt-8 sm:grid-cols-2 dark:border-white/10"
          >
            {older ? (
              <AdjacentLink label="Previous" article={older} />
            ) : (
              <span />
            )}
            {newer ? (
              <AdjacentLink label="Next" article={newer} align="end" />
            ) : null}
          </nav>
        )}
      </article>
    </>
  );
};

export default ArticlePage;
