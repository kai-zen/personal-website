import { FC, HTMLAttributes, ElementType, ReactNode } from "react";
import { cn } from "@/shared/config/functions";

type Variant =
  | "brand"
  | "nav"
  | "navMobile"
  | "body"
  | "hero"
  | "subtitle"
  | "caption";

interface Props extends HTMLAttributes<HTMLElement> {
  variant?: Variant;
  as?: ElementType;
  children: ReactNode;
}

const variantStyles: Record<Variant, string> = {
  brand: "text-xl font-bold tracking-tight text-gray-900 dark:text-white",
  nav: "text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors",
  navMobile:
    "text-base font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors",
  hero: "text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white",
  subtitle: "text-xl text-gray-600 dark:text-gray-400",
  caption: "text-sm text-gray-500 dark:text-gray-500",
  body: "text-base text-gray-600 dark:text-gray-400",
};

const Typography: FC<Props> = ({
  variant = "body",
  as: Component = "span",
  className = "",
  children,
  ...props
}) => {
  const styles = variantStyles[variant];

  return (
    <Component className={cn(styles, className)} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
