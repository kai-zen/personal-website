import { FC } from "react";
import { Button, Typography } from "@/shared/components";
import FocusAreas from "./FocusAreas";

const HeroSection: FC = () => {
  return (
    <section className="relative flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[3.5rem_3.5rem] mask-[radial-gradient(ellipse_80%_60%_at_50%_0%,#000_50%,transparent_100%)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-8 sm:px-8 sm:py-10 lg:px-12">
        <div className="max-w-3xl border-l border-gray-200 pl-8 sm:pl-10 dark:border-gray-800">
          <div className="flex flex-col gap-5 sm:gap-6">
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="h-1.5 w-1.5 rounded-full bg-gray-950 dark:bg-white"
              />
              <Typography
                as="p"
                className="text-xs font-medium uppercase tracking-[0.28em] text-gray-500"
              >
                Software Engineer
              </Typography>
            </div>

            <Typography
              as="h1"
              className="text-[clamp(2rem,3.2vw+0.75rem,3.25rem)] font-black leading-[1.08] tracking-[-0.035em] text-gray-950 dark:text-white"
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
              className="max-w-lg text-[0.9375rem] leading-7 text-gray-600 sm:text-base dark:text-gray-400"
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

            <FocusAreas />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
