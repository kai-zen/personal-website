import { Typography } from "@/shared/components";
import { cn } from "@/shared/config/functions";
import { IArticleItem } from "@/shared/config/types";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface Props {
  article: IArticleItem;
  featured?: boolean;
  className?: string;
}

const formatDate = (value: string) => {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const ArticleCover: FC<{ title: string; tag: string; featured?: boolean }> = ({
  title,
  tag,
  featured,
}) => (
  <div
    aria-hidden
    className={cn(
      "relative h-full overflow-hidden bg-linear-to-br from-gray-100 via-gray-50 to-gray-200/80 dark:from-white/8 dark:via-white/3 dark:to-white/6",
      "border-gray-200/80 dark:border-white/10",
      featured
        ? "aspect-square w-24 shrink-0 border-r sm:aspect-auto sm:h-full sm:min-h-56 sm:w-full sm:border-b-0 sm:border-r"
        : "aspect-square w-24 shrink-0 border-r sm:aspect-16/10 sm:w-full sm:border-b sm:border-r-0",
    )}
  >
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,0,0,0.06),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08),transparent_55%)]" />
    <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-gray-300/40 blur-xl sm:-right-6 sm:-top-6 sm:h-28 sm:w-28 sm:blur-2xl dark:bg-white/10" />

    <div className="relative flex h-full flex-col justify-between p-2.5 sm:p-5">
      <span className="hidden w-fit rounded-md border border-gray-200/80 bg-white/70 px-2 py-0.5 text-[0.625rem] font-medium uppercase tracking-[0.16em] text-gray-500 backdrop-blur-sm sm:inline-flex dark:border-white/10 dark:bg-white/5 dark:text-gray-400">
        {tag}
      </span>
      <p
        className={cn(
          "mt-auto font-black leading-none tracking-tight text-gray-950/10 dark:text-white/10",
          featured ? "text-3xl sm:text-7xl" : "text-3xl sm:text-5xl",
        )}
      >
        {title.charAt(0)}
      </p>
    </div>
  </div>
);

const ArticleCard: FC<Props> = ({ article, featured = false, className }) => {
  const { slug, title, description, publishedAt, readingTime, tags } = article;
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
        <ArticleCover title={title} tag={primaryTag} featured={featured} />
      </div>

      <div
        className={cn(
          "relative flex min-w-0 flex-1 flex-col justify-center p-3",
          featured ? "sm:p-8" : "sm:justify-start sm:p-6",
        )}
      >
        <div className="mb-1.5 flex items-center gap-2 text-[0.625rem] text-gray-500 sm:mb-4 sm:gap-2.5 sm:text-xs dark:text-gray-400">
          <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
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
