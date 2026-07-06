import { ButtonHTMLAttributes, FC } from "react";
import Link from "next/link";
import { cn } from "@/shared/config/functions";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100",

  secondary:
    "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800",

  ghost:
    "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800",
};

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  external?: boolean;
  fullWidth?: boolean;
  variant?: Variant;
}

const baseStyles =
  "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors";

const Button: FC<Props> = ({
  children,
  href,
  external,
  fullWidth,
  variant = "primary",
  className,
  ...props
}) => {
  const classes = cn(
    baseStyles,
    variants[variant],
    fullWidth && "w-full",
    className,
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
