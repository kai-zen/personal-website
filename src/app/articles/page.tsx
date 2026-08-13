import { getAllArticles } from "@/content/articles";
import ArticleCard from "@/sections/home/articles/ArticleCard";
import { Breadcrumbs, Typography } from "@/shared/components";
import { siteConfig } from "@/shared/config/site";
import type { Metadata } from "next";
import type { NextPage } from "next";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Practical takeaways from shipping products, designing systems, and learning in public.",
  alternates: {
    canonical: "/articles",
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: `${siteConfig.url}/articles`,
    title: "Articles",
    description:
      "Practical takeaways from shipping products, designing systems, and learning in public.",
    siteName: siteConfig.name,
  },
};

const ArticlesPage: NextPage = async () => {
  const articles = await getAllArticles();
  const [featured, ...rest] = articles;

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-10 sm:py-14">
      <Breadcrumbs
        className="mb-8 sm:mb-10"
        items={[
          { label: "Home", href: "/" },
          { label: "Articles", href: "/articles" },
        ]}
      />

      <div className="mb-6 max-w-2xl sm:mb-12 lg:mb-14">
        <div className="mb-3 flex items-center gap-2.5 sm:mb-4 sm:gap-3">
          <span
            aria-hidden
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-gray-950 dark:bg-white"
          />
          <Typography
            as="p"
            className="text-[0.625rem] font-medium uppercase tracking-[0.24em] text-gray-500 sm:text-[0.6875rem] sm:tracking-[0.28em]"
          >
            Writing
          </Typography>
        </div>

        <Typography
          as="h1"
          className="text-[1.625rem] font-black leading-[1.15] tracking-tight text-gray-950 sm:text-[clamp(1.75rem,2.5vw+0.5rem,2.5rem)] sm:leading-[1.1] sm:tracking-[-0.03em] dark:text-white"
        >
          Notes from&nbsp;
          <span className="bg-linear-to-r from-gray-950 via-gray-500 to-gray-400 bg-clip-text font-light italic text-transparent dark:from-gray-100 dark:via-gray-500 dark:to-gray-600">
            building
          </span>
        </Typography>

        <Typography
          as="p"
          className="mt-3 max-w-md text-sm leading-7 text-gray-600 dark:text-gray-400"
        >
          Practical takeaways from shipping products, designing systems, and
          learning in public.
        </Typography>
      </div>

      {articles.length === 0 ? (
        <Typography as="p" className="text-sm text-gray-600 dark:text-gray-400">
          No articles yet. Add a markdown file to{" "}
          <code className="rounded-md bg-gray-100 px-1.5 py-0.5 text-[0.8125rem] dark:bg-white/8">
            content/articles/
          </code>{" "}
          and push.
        </Typography>
      ) : (
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-4">
          {featured && <ArticleCard article={featured} featured titleAs="h2" />}
          {rest.map((article, idx) => (
            <ArticleCard
              key={article.slug}
              article={article}
              eagerLoading={idx === 2}
              titleAs="h2"
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ArticlesPage;
