import { cn } from "@/shared/config/functions";
import { siteConfig } from "@/shared/config/site";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

interface Props {
  items: BreadcrumbItem[];
  className?: string;
}

const toAbsoluteUrl = (href: string) => {
  if (href.startsWith("http://") || href.startsWith("https://")) {
    return href;
  }

  return `${siteConfig.url}${href}`;
};

const Breadcrumbs: FC<Props> = ({ items, className }) => {
  if (items.length === 0) {
    return null;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: toAbsoluteUrl(item.href) } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className={cn("min-w-0", className)}>
        <ol className="flex min-w-0 items-center gap-1.5 text-xs">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li
                key={`${item.href ?? item.label}-${index}`}
                className={cn(
                  "flex items-center gap-1.5",
                  isLast ? "min-w-0" : "shrink-0",
                )}
              >
                {index > 0 && (
                  <ChevronRight
                    aria-hidden
                    className="h-3 w-3 shrink-0 text-gray-400 dark:text-gray-500"
                  />
                )}
                {isLast || !item.href ? (
                  <span
                    aria-current={isLast ? "page" : undefined}
                    className="truncate font-medium text-gray-700 dark:text-gray-300"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    prefetch={false}
                    className="text-gray-500 transition-colors hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
