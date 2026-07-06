import { FC } from "react";
import { Button, Typography } from "@/shared/components";
import FocusAreas from "./FocusAreas";
import Background from "./Background";

const HeroSection: FC = () => {
  return (
    <section className="relative flex items-center overflow-hidden">
      <Background />
      <div className="relative mx-auto w-full max-w-6xl px-6 py-16 lg:py-20">
        <div className="max-w-3xl sm:border-l sm:border-gray-200 sm:pl-8 lg:pl-10 dark:sm:border-white/20">
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span
                aria-hidden
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-gray-950 dark:bg-white"
              />
              <Typography
                as="p"
                className="text-[0.6875rem] font-medium uppercase tracking-[0.24em] text-gray-500 sm:text-xs sm:tracking-[0.28em]"
              >
                Software Engineer
              </Typography>
            </div>

            <Typography
              as="h1"
              className="text-[2.125rem] font-black leading-[1.1] tracking-[-0.03em] text-gray-950 sm:text-[clamp(2rem,3.2vw+0.75rem,3.25rem)] sm:leading-[1.08] sm:tracking-[-0.035em] dark:text-white"
            >
              Building software,
              <br />
              <span className="bg-linear-to-r from-gray-950 via-gray-500 to-gray-400 bg-clip-text font-light italic text-transparent dark:from-gray-100 dark:via-gray-500 dark:to-gray-600">
                writing ideas,
              </span>
              <br />
              <span className="text-gray-800 dark:text-gray-200">
                learning in public.
              </span>
            </Typography>

            <Typography
              as="p"
              className="max-w-lg text-sm mt-4 mb-3 text-gray-600 sm:text-[0.9375rem]  sm:text-base dark:text-gray-400"
            >
              I build products and write about software engineering — backend
              architecture, modern web development, and lessons from shipping
              real systems.
            </Typography>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button href="/articles" arrow>
                Read Articles
              </Button>
              <Button href="/projects" variant="text">
                Explore Projects
              </Button>
            </div>

            <div className="mt-4">
              <FocusAreas />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
