import { siteConfig } from "@/shared/config/site";
import type { IArticle } from "@/shared/config/types";
import { FC } from "react";

interface Props {
  article: IArticle;
}

const ArticleJsonLd: FC<Props> = ({ article }) => {
  const url = `${siteConfig.url}/articles/${article.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
      url: siteConfig.author.url,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.author.name,
      url: siteConfig.author.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: article.tags.join(", "),
    ...(article.coverImage
      ? { image: `${siteConfig.url}${article.coverImage}` }
      : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default ArticleJsonLd;
