import { Typography } from "@/shared/components";
import { FC } from "react";
import HighlightsStats from "./Stats";

const HighlightsSection: FC = () => {
  return (
    <section>
      <div className="relative mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8 flex flex-col gap-4 sm:mb-12 sm:gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
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
                By the numbers
              </Typography>
            </div>

            <Typography
              as="h2"
              id="highlights-heading"
              className="text-[1.625rem] font-black leading-[1.15] tracking-tight text-gray-950 sm:text-[clamp(1.75rem,2.5vw+0.5rem,2.5rem)] sm:leading-[1.1] sm:tracking-[-0.03em] dark:text-white"
            >
              Impact you can&nbsp;
              <span className="bg-linear-to-r from-gray-950 via-gray-500 to-gray-400 bg-clip-text font-light italic text-transparent dark:from-gray-100 dark:via-gray-500 dark:to-gray-600">
                measure&nbsp;
              </span>
            </Typography>

            <Typography
              as="p"
              className="mt-3 max-w-md text-sm leading-6 text-gray-600 sm:hidden dark:text-gray-400"
            >
              A quick snapshot of the scale, craft, and curiosity behind the
              systems I build.
            </Typography>
          </div>

          <Typography
            as="p"
            className="hidden max-w-md text-sm leading-7 text-gray-600 sm:block sm:text-[0.9375rem] dark:text-gray-400"
          >
            A quick snapshot of the scale, craft, and curiosity behind the
            systems I build — from production code to performance at scale.
          </Typography>
        </div>

        <HighlightsStats />
      </div>
    </section>
  );
};

export default HighlightsSection;
