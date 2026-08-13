import { cn } from "@/shared/config/functions";
import Image from "next/image";
import { FC } from "react";

interface Props {
  title: string;
  tag: string;
  featured?: boolean;
  coverImage?: string;
}

const ArticleCover: FC<Props> = ({ title, tag, featured, coverImage }) => (
  <div
    aria-hidden
    className={cn(
      "relative h-full overflow-hidden bg-linear-to-br from-gray-100 via-gray-50 to-gray-200/80 dark:from-white/8 dark:via-white/3 dark:to-white/6",
      "border-gray-200/80 dark:border-white/10",
      featured
        ? "aspect-square w-24 shrink-0 border-r sm:aspect-auto sm:h-full sm:min-h-56 sm:w-full sm:border-b-0 sm:border-r"
        : "aspect-square w-24 shrink-0 border-r sm:aspect-16/10 sm:w-full sm:border-b sm:border-r-0",
    )}
  >
    {coverImage ? (
      <Image
        src={coverImage}
        alt=""
        fill
        sizes={
          featured
            ? "(min-width: 640px) 42vw, 96px"
            : "(min-width: 640px) 50vw, 96px"
        }
        className="object-cover"
      />
    ) : (
      <>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,0,0,0.06),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08),transparent_55%)]" />
        <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-gray-300/40 blur-xl sm:-right-6 sm:-top-6 sm:h-28 sm:w-28 sm:blur-2xl dark:bg-white/10" />
      </>
    )}

    <div className="relative flex h-full flex-col justify-between p-2.5 sm:p-5">
      <span className="hidden w-fit rounded-md border border-gray-200/80 bg-white/70 px-2 py-0.5 text-[0.625rem] font-medium uppercase tracking-[0.16em] text-gray-500 backdrop-blur-sm sm:inline-flex dark:border-white/10 dark:bg-white/5 dark:text-gray-400">
        {tag}
      </span>
      {!coverImage && (
        <p
          className={cn(
            "mt-auto font-black leading-none tracking-tight text-gray-950/10 dark:text-white/10",
            featured ? "text-3xl sm:text-7xl" : "text-3xl sm:text-5xl",
          )}
        >
          {title.charAt(0)}
        </p>
      )}
    </div>
  </div>
);

export default ArticleCover;
