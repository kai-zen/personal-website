import { Code2, Gauge, LucideIcon, Users } from "lucide-react";
import { FC } from "react";
import StatCard from "./StatCard";

export interface IHighlightStat {
  value: string;
  label: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  featured?: boolean;
}

const HIGHLIGHTS_STATS: IHighlightStat[] = [
  {
    value: "6+",
    label: "Years shipping",
    description: "Production systems across backend, web, and infrastructure.",
    icon: Code2,
    className: "col-span-2 sm:col-span-2 lg:col-span-6",
    featured: true,
  },
  {
    value: "5M+",
    label: "Users reached",
    description: "Through products I've helped design and build.",
    icon: Users,
    className: "lg:col-span-3",
  },
  {
    value: "40K+",
    label: "Pages optimized",
    description: "Technical SEO and performance at scale.",
    icon: Gauge,
    className: "lg:col-span-3",
  },
];

const HighlightsStats: FC = () => {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-12">
      {HIGHLIGHTS_STATS.map((stat) => (
        <StatCard key={stat.label} data={stat} />
      ))}
    </div>
  );
};

export default HighlightsStats;
