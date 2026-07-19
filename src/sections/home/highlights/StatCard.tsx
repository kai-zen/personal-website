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

const StatNumber: FC<{ value: string; className?: string }> = ({
  value,
  className,
}) => (
  <p className={className}>
    <span className={cn(numberGradientClass, "dark:hidden")}>{value}</span>
    <span className={cn(numberGradientDarkClass, "hidden dark:inline")}>
      {value}
    </span>
  </p>
);

const StatCard: FC<Props> = ({ data }) => {
  const { value, label, description, icon: Icon, className, featured } = data;

  if (featured) {
    return (
      <article
        className={cn(
          "group relative col-span-2 overflow-hidden rounded-xl border border-gray-200/80 bg-white/70 p-4 backdrop-blur-sm transition-all duration-300 sm:rounded-2xl sm:p-8 dark:border-white/10 dark:bg-white/3 sm:hover:-translate-y-0.5 sm:hover:border-gray-300 sm:hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.18)] dark:sm:hover:border-white/20 dark:sm:hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.6)]",
          className,
        )}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gray-100/80 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 dark:bg-white/5"
        />

        <div className="relative flex h-full flex-col">
          <div className="mb-3 flex items-center justify-between gap-3 sm:mb-6 sm:gap-4">
            <span className="inline-flex rounded-lg border border-gray-200/80 bg-gray-50 p-2 text-gray-700 sm:rounded-xl sm:p-2.5 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
              <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={1.75} />
            </span>

            <span className="text-[0.625rem] font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 sm:text-[0.6875rem] sm:tracking-[0.22em]">
              Core metric
            </span>
          </div>

          <div className="flex items-end gap-3 sm:block">
            <StatNumber
              value={value}
              className="text-5xl leading-none sm:text-7xl"
            />

            <Typography
              as="h3"
              className="pb-1 text-base font-semibold tracking-tight text-gray-900 sm:mt-4 sm:pb-0 sm:text-lg dark:text-white"
            >
              {label}
            </Typography>
          </div>

          <Typography
            as="p"
            className="mt-2 text-xs leading-5 text-gray-600 sm:mt-2 sm:max-w-sm sm:text-sm sm:leading-6 dark:text-gray-300"
          >
            {description}
          </Typography>
        </div>
      </article>
    );
  }

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-xl border border-gray-200/80 bg-white/70 p-3.5 backdrop-blur-sm transition-all duration-300 sm:rounded-2xl sm:p-8 dark:border-white/10 dark:bg-white/3 sm:hover:-translate-y-0.5 sm:hover:border-gray-300 sm:hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.18)] dark:sm:hover:border-white/20 dark:sm:hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.6)]",
        className,
      )}
    >
      <div className="relative flex h-full flex-col">
        <span className="mb-2.5 inline-flex w-fit rounded-lg border border-gray-200/80 bg-gray-50 p-1.5 text-gray-700 sm:mb-6 sm:rounded-xl sm:p-2.5 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
          <Icon className="h-3 w-3 sm:h-4 sm:w-4" strokeWidth={1.75} />
        </span>

        <StatNumber
          value={value}
          className="text-3xl leading-none sm:text-5xl"
        />

        <Typography
          as="h3"
          className="mt-2 text-[0.8125rem] font-semibold leading-snug tracking-tight text-gray-900 sm:mt-4 sm:text-lg dark:text-white"
        >
          {label}
        </Typography>

        <Typography
          as="p"
          className="mt-2 hidden max-w-sm text-sm leading-6 text-gray-600 sm:block dark:text-gray-400"
        >
          {description}
        </Typography>
      </div>
    </article>
  );
};

export default StatCard;
