import { Button, Typography } from "@/shared/components";
import { FC } from "react";
import ArticleCard from "./ArticleCard";
import { mockArticles } from "./mock";

const LATEST_COUNT = 3;

const ArticlesSection: FC = () => {
  const articles = mockArticles.slice(0, LATEST_COUNT);
  const [featured, ...rest] = articles;

  return (
    <section id="articles" aria-labelledby="articles-heading">
      <div className="relative mx-auto max-w-6xl px-6 py-10 sm:py-14">
        <div className="mb-6 flex flex-col gap-3 sm:mb-12 sm:gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-2.5 sm:mb-4 sm:gap-3">
              <span
                aria-hidden
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-gray-950 dark:bg-white"
              />
              <Typography
                as="p"
                className="text-[0.625rem] font-medium uppercase tracking-[0.24em] text-gray-500 sm:text-[0.6875rem] sm:tracking-[0.28em]"
              >
                Latest writing
              </Typography>
            </div>

            <Typography
              as="h2"
              id="articles-heading"
              className="text-[1.625rem] font-black leading-[1.15] tracking-tight text-gray-950 sm:text-[clamp(1.75rem,2.5vw+0.5rem,2.5rem)] sm:leading-[1.1] sm:tracking-[-0.03em] dark:text-white"
            >
              Notes from&nbsp;
              <span className="bg-linear-to-r from-gray-950 via-gray-500 to-gray-400 bg-clip-text font-light italic text-transparent dark:from-gray-100 dark:via-gray-500 dark:to-gray-600">
                building
              </span>
            </Typography>

            <Typography
              as="p"
              className="mt-3 max-w-md text-sm leading-6 text-gray-600 sm:hidden dark:text-gray-400"
            >
              Practical takeaways from shipping products and learning in public.
            </Typography>
          </div>

          <div className="hidden items-end gap-6 sm:flex">
            <Typography
              as="p"
              className="max-w-sm text-sm leading-7 text-gray-600 sm:text-[0.9375rem] dark:text-gray-400"
            >
              Practical takeaways from shipping products, designing systems, and
              learning in public.
            </Typography>

            <Button href="/articles" variant="primary" size="sm" arrow>
              View all
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-4">
          {featured && <ArticleCard article={featured} featured />}
          {rest.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

        <div className="mt-6 flex justify-center sm:hidden">
          <Button href="/articles" variant="primary" size="sm" arrow>
            View all articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
