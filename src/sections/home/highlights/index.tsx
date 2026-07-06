import { Typography } from "@/shared/components";
import { FC } from "react";
import HighlightsStats from "./Stats";

const HighlightsSection: FC = () => {
  return (
    <section id="highlights" aria-labelledby="highlights-heading">
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mb-12 flex flex-col gap-8 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl  dark:border-white/20">
            <div className="mb-4 flex items-center gap-3">
              <span
                aria-hidden
                className="h-1.5 w-1.5 rounded-full bg-gray-950 dark:bg-white"
              />
              <Typography
                as="p"
                className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-gray-500"
              >
                By the numbers
              </Typography>
            </div>

            <Typography
              as="h2"
              id="highlights-heading"
              className="text-[clamp(1.75rem,2.5vw+0.5rem,2.5rem)] font-black leading-[1.1] tracking-[-0.03em] text-gray-950 dark:text-white"
            >
              Impact you can&nbsp;
              <span className="bg-linear-to-r from-gray-950 via-gray-500 to-gray-400 bg-clip-text font-light italic text-transparent dark:from-gray-100 dark:via-gray-500 dark:to-gray-600">
                measure
              </span>
            </Typography>
          </div>

          <Typography
            as="p"
            className="max-w-md text-sm leading-7 text-gray-600 sm:text-[0.9375rem] dark:text-gray-400"
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
