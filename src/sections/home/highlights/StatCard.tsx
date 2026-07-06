import { Typography } from "@/shared/components";
import { cn } from "@/shared/config/functions";
import { FC } from "react";
import { IHighlightStat } from "./Stats";

const numberGradientClass =
  "bg-linear-to-b from-gray-950 via-gray-900 to-gray-700 bg-clip-text font-black tracking-tight text-transparent";

const numberGradientDarkClass =
  "bg-linear-to-b from-white from-0% via-white via-45% to-[#e8e8e8] to-100% bg-clip-text font-black tracking-tight text-transparent";

interface Props {
  data: IHighlightStat;
}

const StatCard: FC<Props> = ({ data }) => {
  const { value, label, description, icon: Icon, className, featured } = data;
  const sizeClass = featured ? "text-6xl sm:text-7xl" : "text-5xl";

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.18)] sm:p-8 dark:border-white/10 dark:bg-white/3 dark:hover:border-white/20 dark:hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.6)]",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gray-100/80 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 dark:bg-white/5"
      />

      <div className="relative flex h-full flex-col">
        <div className="mb-6 flex items-center justify-between gap-4">
          <span className="inline-flex rounded-xl border border-gray-200/80 bg-gray-50 p-2.5 text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
            <Icon className="h-4 w-4" strokeWidth={1.75} />
          </span>

          {featured && (
            <span className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-gray-400">
              Core metric
            </span>
          )}
        </div>

        <p className={sizeClass}>
          <span className={cn(numberGradientClass, "dark:hidden")}>
            {value}
          </span>
          <span className={cn(numberGradientDarkClass, "hidden dark:inline")}>
            {value}
          </span>
        </p>

        <Typography
          as="h3"
          className="mt-4 text-lg font-semibold tracking-tight text-gray-900 dark:text-white"
        >
          {label}
        </Typography>

        <Typography
          as="p"
          className="mt-2 max-w-sm text-sm leading-6 text-gray-600 dark:text-gray-400"
        >
          {description}
        </Typography>
      </div>
    </article>
  );
};

export default StatCard;
