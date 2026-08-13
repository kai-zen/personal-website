import { Typography } from "@/shared/components";
import { cn, formatArticleDate } from "@/shared/config/functions";
import type { IArticle } from "@/shared/config/types";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

const AdjacentLink: FC<{
  article: IArticle;
  direction: "previous" | "next";
}> = ({ article, direction }) => {
  const isNext = direction === "next";

  return (
    <Link
      href={`/articles/${article.slug}`}
      prefetch={false}
      className={cn(
        "group flex min-w-0 flex-col gap-2.5 rounded-2xl border border-gray-200/80 bg-white/70 p-5 backdrop-blur-sm",
        "transition-all duration-300",
        "hover:border-gray-300 hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.18)] sm:hover:-translate-y-0.5",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950/15 focus-visible:ring-offset-2",
        "dark:border-white/10 dark:bg-white/3 dark:hover:border-white/20 dark:hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.6)]",
        "dark:focus-visible:ring-white/20 dark:focus-visible:ring-offset-gray-950",
        isNext && "sm:items-end sm:text-right",
      )}
    >
      <span
        className={cn(
          "inline-flex items-center gap-1.5 text-[0.625rem] font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400",
          isNext && "sm:flex-row-reverse",
        )}
      >
        {isNext ? (
          <ArrowRight
            aria-hidden
            className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5"
          />
        ) : (
          <ArrowLeft
            aria-hidden
            className="h-3 w-3 transition-transform duration-300 group-hover:-translate-x-0.5"
          />
        )}
        {isNext ? "Next" : "Previous"}
      </span>

      <Typography
        as="span"
        className="line-clamp-2 text-[0.9375rem] font-semibold leading-snug tracking-tight text-gray-950 transition-colors group-hover:text-gray-700 dark:text-white dark:group-hover:text-gray-200"
      >
        {article.title}
      </Typography>

      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
        <time dateTime={article.publishedAt}>
          {formatArticleDate(article.publishedAt)}
        </time>
        <span
          aria-hidden
          className="h-0.5 w-0.5 rounded-full bg-gray-300 dark:bg-gray-600"
        />
        <span>{article.readingTime} min read</span>
      </div>
    </Link>
  );
};

interface Props {
  older: IArticle | null;
  newer: IArticle | null;
}

const AdjacentArticles: FC<Props> = ({ older, newer }) => {
  if (!older && !newer) {
    return null;
  }

  return (
    <nav
      aria-label="Adjacent articles"
      className="mt-14 border-t border-gray-200/80 pt-8 dark:border-white/10"
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
        {older ? (
          <AdjacentLink direction="previous" article={older} />
        ) : (
          <span className="hidden sm:block" />
        )}
        {newer ? <AdjacentLink direction="next" article={newer} /> : null}
      </div>
    </nav>
  );
};

export default AdjacentArticles;
