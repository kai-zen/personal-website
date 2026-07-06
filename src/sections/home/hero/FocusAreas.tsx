import { FC } from "react";

const SKILLS = [
  "TypeScript",
  "Next.js",
  "NestJS",
  "MongoDB",
  "Software Architecture",
];

const FocusAreas: FC = () => {
  return (
    <div>
      <p className="mb-3 text-sm font-medium uppercase text-gray-400">
        Focus areas
      </p>
      <ul className="flex flex-wrap gap-2">
        {SKILLS.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-gray-200/80 px-3 py-1 text-xs text-gray-600 dark:border-gray-800 dark:text-gray-400"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FocusAreas;
