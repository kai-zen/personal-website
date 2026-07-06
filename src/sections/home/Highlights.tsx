import Typography from "@/shared/components/Typography";
import { FC } from "react";

const stats = [
  {
    value: "5+",
    label: "Years Building",
    description: "Production software",
  },
  {
    value: "5M+",
    label: "Users Reached",
    description: "Through products I've contributed to",
  },
  {
    value: "40K+",
    label: "Pages Optimized",
    description: "Technical SEO at scale",
  },
  {
    value: "∞",
    label: "Curiosity",
    description: "Always learning",
  },
];

const HighlightsSection: FC = () => {
  return (
    <section>
      <div className="mx-auto max-w-6xl py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 dark:border-gray-800 dark:bg-gray-800 lg:grid-cols-4">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="bg-white p-8 transition-colors hover:bg-gray-50 dark:bg-black dark:hover:bg-gray-950"
            >
              <Typography
                as="p"
                className="text-5xl font-black tracking-tight text-gray-950 dark:text-white"
              >
                {stat.value}
              </Typography>

              <Typography
                as="h3"
                className="mt-4 text-lg font-semibold text-gray-900 dark:text-white"
              >
                {stat.label}
              </Typography>

              <Typography
                as="p"
                className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400"
              >
                {stat.description}
              </Typography>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
