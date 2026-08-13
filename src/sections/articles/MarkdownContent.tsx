import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { MarkdownAsync, type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import { prettyCodeOptions } from "./prettyCode";

const isInternalHref = (href: string) =>
  href.startsWith("/") || href.startsWith("#");

const markdownComponents: Components = {
  a: ({ href, children, className }) => {
    if (!href) {
      return <span className={className}>{children}</span>;
    }

    if (isInternalHref(href)) {
      return (
        <Link href={href} className={className}>
          {children}
        </Link>
      );
    }

    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  },
  img: ({ src, alt }) => {
    if (!src || typeof src !== "string") return null;

    return (
      <Image
        src={src}
        alt={alt ?? ""}
        width={768}
        height={432}
        sizes="(min-width: 768px) 768px, calc(100vw - 3rem)"
        className="mx-auto h-auto w-full max-w-3xl rounded-xl border border-gray-200/80 bg-linear-to-br from-gray-50 via-white to-gray-100/80 shadow-[0_20px_40px_-28px_rgba(0,0,0,0.18)] sm:mt-10 dark:border-white/10 dark:from-white/8 dark:via-white/3 dark:to-white/6 dark:shadow-[0_20px_40px_-28px_rgba(0,0,0,0.65)]"
      />
    );
  },
};

interface Props {
  content: string;
}

const MarkdownContent: FC<Props> = async ({ content }) => {
  return (
    <div className="article-prose prose prose-neutral max-w-none dark:prose-invert prose-headings:scroll-mt-24 prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-gray-950 dark:prose-headings:text-white prose-p:leading-7 prose-p:text-gray-600 dark:prose-p:text-gray-400 prose-a:font-medium prose-a:text-gray-950 prose-a:underline prose-a:decoration-gray-300 prose-a:underline-offset-4 hover:prose-a:decoration-gray-950 dark:prose-a:text-white dark:prose-a:decoration-white/25 dark:hover:prose-a:decoration-white prose-strong:text-gray-950 dark:prose-strong:text-white prose-code:rounded-md prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:font-normal prose-code:text-gray-950 prose-code:before:content-none prose-code:after:content-none dark:prose-code:bg-white/8 dark:prose-code:text-white prose-pre:bg-transparent prose-pre:p-0 prose-blockquote:border-gray-300 prose-blockquote:text-gray-600 dark:prose-blockquote:border-white/20 dark:prose-blockquote:text-gray-400 prose-hr:border-gray-200 dark:prose-hr:border-white/10 prose-li:text-gray-600 dark:prose-li:text-gray-400 prose-th:text-gray-950 dark:prose-th:text-white prose-td:text-gray-600 dark:prose-td:text-gray-400 prose-img:rounded-xl">
      <MarkdownAsync
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: "append",
              properties: {
                className: ["heading-anchor"],
                ariaLabel: "Link to this section",
              },
            },
          ],
          [rehypePrettyCode, prettyCodeOptions],
        ]}
        components={markdownComponents}
      >
        {content}
      </MarkdownAsync>
    </div>
  );
};

export default MarkdownContent;
