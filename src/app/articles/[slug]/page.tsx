import {
  getAllArticles,
  getArticleBySlug,
  getArticleSlugs,
} from "@/content/articles";
import {
  AdjacentArticles,
  ArticleHeader,
  ArticleJsonLd,
  MarkdownContent,
  ReadingProgress,
} from "@/sections/articles";
import { Breadcrumbs } from "@/shared/components";
import { siteConfig } from "@/shared/config/site";
import type { Metadata, NextPage } from "next";
import { notFound } from "next/navigation";

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

const ArticlePage: NextPage<Props> = async ({ params }) => {
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
      <ReadingProgress />
      <article
        data-reading-progress
        className="relative mx-auto max-w-6xl px-6 py-10 sm:py-14"
      >
        <Breadcrumbs
          className="mb-8 sm:mb-10"
          items={[
            { label: "Home", href: "/" },
            { label: "Articles", href: "/articles" },
            { label: article.title, href: `/articles/${article.slug}` },
          ]}
        />

        <ArticleHeader article={article} />
        <MarkdownContent content={article.content} />

        <AdjacentArticles older={older} newer={newer} />
      </article>
    </>
  );
};

export default ArticlePage;
