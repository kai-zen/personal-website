import { Typography } from "@/shared/components";
import { cn, formatArticleDate } from "@/shared/config/functions";
import { IArticleItem } from "@/shared/config/types";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import ArticleCover from "./ArticleCover";

interface Props {
  article: IArticleItem;
  featured?: boolean;
  className?: string;
}

const ArticleCard: FC<Props> = ({ article, featured = false, className }) => {
  const {
    slug,
    title,
    description,
    publishedAt,
    readingTime,
    tags,
    coverImage,
  } = article;
  const primaryTag = tags[0] ?? "Article";

  return (
    <Link
      href={`/articles/${slug}`}
      prefetch={false}
      className={cn(
        "group relative flex overflow-hidden rounded-xl border border-gray-200/80 bg-white/70 backdrop-blur-sm transition-all duration-300 sm:rounded-2xl dark:border-white/10 dark:bg-white/3",
        "sm:hover:-translate-y-0.5 sm:hover:border-gray-300 sm:hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.18)] dark:sm:hover:border-white/20 dark:sm:hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.6)]",
        "flex-row",
        featured ? "sm:col-span-2 sm:flex-row" : "sm:flex-col",
        className,
      )}
    >
      <div
        className={cn(
          "shrink-0 self-stretch",
          featured ? "sm:w-[42%]" : "sm:w-full",
        )}
      >
        <ArticleCover
          title={title}
          tag={primaryTag}
          featured={featured}
          coverImage={coverImage}
          eagerLoading={featured}
        />
      </div>

      <div
        className={cn(
          "relative flex min-w-0 flex-1 flex-col justify-center p-3",
          featured ? "sm:p-8" : "sm:justify-start sm:p-6",
        )}
      >
        <div className="mb-1.5 flex items-center gap-2 text-[0.625rem] text-gray-500 sm:mb-4 sm:gap-2.5 sm:text-xs dark:text-gray-400">
          <time dateTime={publishedAt}>{formatArticleDate(publishedAt)}</time>
          <span
            aria-hidden
            className="h-0.5 w-0.5 rounded-full bg-gray-300 dark:bg-gray-600"
          />
          <span>{readingTime} min</span>
        </div>

        <Typography
          as="h3"
          className={cn(
            "font-semibold tracking-tight text-gray-950 transition-colors group-hover:text-gray-700 dark:text-white dark:group-hover:text-gray-200",
            featured
              ? "text-[0.9375rem] leading-snug sm:text-2xl sm:leading-tight"
              : "text-[0.875rem] leading-snug sm:text-lg",
          )}
        >
          {title}
        </Typography>

        <Typography
          as="p"
          className={cn(
            "mt-2 hidden text-sm leading-6 text-gray-600 sm:block dark:text-gray-400",
            featured ? "line-clamp-2 sm:mt-3 sm:line-clamp-3" : "line-clamp-2",
          )}
        >
          {description}
        </Typography>

        <div className="mt-auto hidden items-end justify-between gap-3 pt-5 sm:flex">
          <ul className="flex flex-wrap gap-1.5">
            {tags.slice(0, featured ? 3 : 2).map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-gray-200/80 px-2.5 py-0.5 text-[0.6875rem] text-gray-500 dark:border-white/10 dark:text-gray-400"
              >
                {tag}
              </li>
            ))}
          </ul>

          <span className="inline-flex shrink-0 items-center justify-center rounded-full border border-gray-200/80 p-1.5 text-gray-500 transition-all duration-300 group-hover:border-gray-300 group-hover:text-gray-950 dark:border-white/10 dark:group-hover:border-white/20 dark:group-hover:text-white">
            <ArrowUpRight
              aria-hidden
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-px group-hover:translate-x-px"
            />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
