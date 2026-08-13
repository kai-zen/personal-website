import { Typography } from "@/shared/components";
import { formatArticleDate } from "@/shared/config/functions";
import type { IArticle } from "@/shared/config/types";
import { FC } from "react";

interface Props {
  article: IArticle;
}

const ArticleHeader: FC<Props> = ({ article }) => {
  const { title, description, publishedAt, readingTime, tags } = article;

  return (
    <header className="mb-10 sm:mb-12">
      <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-gray-500 sm:mb-5 sm:gap-2.5 dark:text-gray-400">
        <time dateTime={publishedAt}>{formatArticleDate(publishedAt)}</time>
        <span
          aria-hidden
          className="h-0.5 w-0.5 rounded-full bg-gray-300 dark:bg-gray-600"
        />
        <span>{readingTime} min read</span>
      </div>

      <Typography
        as="h1"
        className="text-[1.75rem] font-black leading-[1.15] tracking-tight text-gray-950 sm:text-[clamp(1.875rem,2.4vw+1rem,2.75rem)] sm:leading-[1.1] sm:tracking-[-0.03em] dark:text-white"
      >
        {title}
      </Typography>

      <Typography
        as="p"
        className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:mt-5 sm:text-[0.9375rem] dark:text-gray-400"
      >
        {description}
      </Typography>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-gray-200/80 px-2.5 py-0.5 text-[0.6875rem] text-gray-500 dark:border-white/10 dark:text-gray-400"
          >
            {tag}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default ArticleHeader;
