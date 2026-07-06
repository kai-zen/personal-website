import { ButtonHTMLAttributes, FC } from "react";
import Link from "next/link";
import { cn } from "@/shared/config/functions";

const baseStyles =
  "inline-flex items-center justify-center rounded-md bg-gray-900 dark:bg-white px-4 py-2 text-sm font-medium text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  external?: boolean;
  fullWidth?: boolean;
}

const Button: FC<Props> = ({
  children,
  href,
  external,
  fullWidth,
  className = "",
  ...props
}) => {
  const widthStyles = fullWidth ? "w-full" : "";
  const combinedClasses = cn(baseStyles, widthStyles, className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
