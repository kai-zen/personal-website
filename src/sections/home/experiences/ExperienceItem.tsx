"use client";

import { Typography } from "@/shared/components";
import { cn } from "@/shared/config/functions";
import { ExperienceItem as ExperienceItemType } from "@/shared/config/types";
import { ChevronDown, Link as LinkIcon } from "lucide-react";
import { FC, useId, useState } from "react";

const MAX_HIGHLIGHTS = 3;
const MAX_TECH = 4;

interface Props {
  experience: ExperienceItemType;
  index: number;
  isLast: boolean;
  defaultExpanded?: boolean;
}

const ExperienceItem: FC<Props> = ({
  experience,
  index,
  isLast,
  defaultExpanded = false,
}) => {
  const { company, role, period, description, highlights, technologies, link } =
    experience;

  const [expanded, setExpanded] = useState(defaultExpanded);
  const panelId = useId();

  const visibleHighlights = highlights.slice(0, MAX_HIGHLIGHTS);
  const visibleTech = technologies.slice(0, MAX_TECH);
  const step = String(index + 1).padStart(2, "0");

  const toggle = () => setExpanded((prev) => !prev);

  return (
    <li className="relative flex gap-4 sm:gap-8">
      <div className="relative flex w-5 shrink-0 flex-col items-center sm:w-6">
        <span
          aria-hidden
          className={cn(
            "relative z-10 mt-1.5 flex h-3 w-3 items-center justify-center rounded-full border-2 border-gray-950 bg-white sm:mt-2 sm:h-3.5 sm:w-3.5 dark:border-white dark:bg-gray-950",
            index === 0 &&
              "shadow-[0_0_0_4px_rgba(0,0,0,0.04)] dark:shadow-[0_0_0_4px_rgba(255,255,255,0.06)]",
          )}
        >
          {index === 0 && (
            <span className="h-1 w-1 rounded-full bg-gray-950 dark:bg-white" />
          )}
        </span>

        {!isLast && (
          <span
            aria-hidden
            className="mt-1 w-px flex-1 bg-linear-to-b from-gray-300 via-gray-200 to-gray-200 dark:from-white/25 dark:via-white/10 dark:to-white/10"
          />
        )}
      </div>

      <article
        className={cn(
          "group relative min-w-0 flex-1",
          expanded ? "pb-8 sm:pb-10" : "pb-5 sm:pb-6",
          isLast && "pb-0 sm:pb-0",
        )}
      >
        <div className="flex items-start gap-2 sm:gap-3">
          <button
            type="button"
            aria-expanded={expanded}
            aria-controls={panelId}
            onClick={toggle}
            className="flex min-w-0 flex-1 items-start justify-between gap-4 rounded-xl text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-gray-950/15 focus-visible:ring-offset-2 dark:focus-visible:ring-white/20 dark:focus-visible:ring-offset-gray-950"
          >
            <div className="min-w-0">
              <div className="mb-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 sm:mb-2">
                <Typography
                  as="p"
                  className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-gray-500 sm:text-xs sm:tracking-[0.18em] dark:text-gray-400"
                >
                  {period}
                </Typography>
                <span
                  aria-hidden
                  className="hidden h-0.5 w-0.5 rounded-full bg-gray-300 sm:inline-block dark:bg-gray-600"
                />
                <span className="hidden font-mono text-[0.6875rem] text-gray-500 sm:inline dark:text-gray-400">
                  {step}
                </span>
              </div>

              <Typography
                as="h3"
                className="text-[1.0625rem] font-semibold tracking-tight text-gray-950 sm:text-xl dark:text-white"
              >
                {role}
              </Typography>

              <Typography
                as="p"
                className="mt-1 text-sm font-medium text-gray-700 sm:text-[0.9375rem] dark:text-gray-300"
              >
                {company}
              </Typography>
            </div>

            <span
              aria-hidden
              className={cn(
                "mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:h-10 sm:w-10 border-gray-300 bg-gray-100 text-gray-900 dark:border-white/25 dark:bg-white/10 dark:text-white",
                expanded &&
                  "border-gray-950 bg-gray-950 text-white dark:border-white dark:bg-white dark:text-gray-950",
              )}
            >
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-300 sm:h-4.5 sm:w-4.5",
                  expanded && "rotate-180",
                )}
              />
            </span>

            <span className="sr-only">
              {expanded ? "Collapse" : "Expand"} {role} at {company}
            </span>
          </button>

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${company} website`}
              className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-50 hover:text-gray-950 sm:h-10 sm:w-10 dark:border-white/20 dark:bg-white/5 dark:text-gray-200 dark:hover:border-white/30 dark:hover:bg-white/10 dark:hover:text-white"
            >
              <LinkIcon className="h-4 w-4" />
            </a>
          )}
        </div>

        <div
          id={panelId}
          className={cn(
            "grid transition-[grid-template-rows] duration-300 ease-out",
            expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <div className="overflow-hidden">
            <Typography
              as="p"
              className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:mt-3.5 sm:text-[0.9375rem] sm:leading-7 dark:text-gray-400"
            >
              {description}
            </Typography>

            {visibleHighlights.length > 0 && (
              <ul className="mt-4 hidden space-y-2 sm:block">
                {visibleHighlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-2.5 text-sm leading-6 text-gray-600 dark:text-gray-400"
                  >
                    <span
                      aria-hidden
                      className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gray-300 dark:bg-gray-600"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}

            {visibleTech.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-1.5 sm:mt-5">
                {visibleTech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-gray-200/80 px-2.5 py-0.5 text-[0.6875rem] text-gray-500 dark:border-white/10 dark:text-gray-400"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </article>
    </li>
  );
};

export default ExperienceItem;
