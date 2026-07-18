import { ButtonHTMLAttributes, FC, MouseEventHandler, ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/shared/config/functions";

type Variant = "primary" | "outlined" | "text";
type Size = "sm" | "md";

const sizes: Record<Size, string> = {
  sm: "h-9 gap-1.5 px-4 text-[0.8125rem]",
  md: "h-11 gap-2 px-6 text-sm",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-gray-950 text-white shadow-[0_1px_2px_rgba(0,0,0,0.06)] hover:bg-gray-800 hover:shadow-[0_4px_14px_rgba(0,0,0,0.1)] active:scale-[0.98] dark:bg-white dark:text-gray-950 dark:hover:bg-gray-100 dark:shadow-[0_1px_2px_rgba(255,255,255,0.04)] dark:hover:shadow-[0_4px_14px_rgba(0,0,0,0.35)]",

  outlined:
    "border border-gray-200/90 bg-white/60 text-gray-800 backdrop-blur-sm hover:border-gray-300 hover:bg-white active:scale-[0.98] dark:border-gray-800 dark:bg-black/40 dark:text-gray-200 dark:hover:border-gray-700 dark:hover:bg-black/80",

  text: "text-gray-600 hover:bg-gray-100/70 hover:text-gray-950 active:scale-[0.98] dark:text-gray-400 dark:hover:bg-gray-800/50 dark:hover:text-white",
};

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  external?: boolean;
  download?: boolean | string;
  fullWidth?: boolean;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
}

const baseStyles =
  "group inline-flex items-center justify-center rounded-full font-medium tracking-[-0.01em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950/15 focus-visible:ring-offset-2 dark:focus-visible:ring-white/20 dark:focus-visible:ring-offset-gray-950";

const ButtonContent: FC<{
  children: ReactNode;
  arrow?: boolean;
  external?: boolean;
}> = ({ children, arrow, external }) => (
  <>
    {children}
    {arrow &&
      (external ? (
        <ArrowUpRight
          aria-hidden
          className="h-3.5 w-3.5 opacity-70 transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px"
        />
      ) : (
        <ArrowRight
          aria-hidden
          className="h-3.5 w-3.5 opacity-70 transition-transform duration-200 group-hover:translate-x-0.5"
        />
      ))}
  </>
);

const Button: FC<Props> = ({
  children,
  href,
  external,
  download,
  fullWidth,
  variant = "primary",
  size = "md",
  arrow = false,
  className,
  ...props
}) => {
  const classes = cn(
    baseStyles,
    sizes[size],
    variants[variant],
    fullWidth && "w-full",
    className,
  );

  if (href) {
    const { onClick } = props;
    const isMailOrTel = href.startsWith("mailto:") || href.startsWith("tel:");

    if (download) {
      return (
        <a
          href={href}
          download={download === true ? undefined : download}
          className={classes}
          onClick={onClick as unknown as MouseEventHandler<HTMLAnchorElement>}
        >
          <ButtonContent arrow={arrow} external={external}>
            {children}
          </ButtonContent>
        </a>
      );
    }

    if (isMailOrTel) {
      return (
        <a
          href={href}
          className={classes}
          onClick={onClick as unknown as MouseEventHandler<HTMLAnchorElement>}
        >
          <ButtonContent arrow={arrow} external>
            {children}
          </ButtonContent>
        </a>
      );
    }

    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          onClick={onClick as unknown as MouseEventHandler<HTMLAnchorElement>}
        >
          <ButtonContent arrow={arrow} external>
            {children}
          </ButtonContent>
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={classes}
        onClick={onClick as unknown as MouseEventHandler<HTMLAnchorElement>}
      >
        <ButtonContent arrow={arrow}>{children}</ButtonContent>
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      <ButtonContent arrow={arrow} external={external}>
        {children}
      </ButtonContent>
    </button>
  );
};

export default Button;
