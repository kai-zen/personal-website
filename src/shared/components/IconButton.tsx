import { FC, ButtonHTMLAttributes } from "react";
import { cn } from "@/shared/config/functions";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  "aria-label": string;
}

const baseStyles =
  "p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 rounded-lg transition-colors cursor-pointer";

const IconButton: FC<Props> = ({ children, className = "", ...props }) => {
  return (
    <button className={cn(baseStyles, className)} {...props}>
      {children}
    </button>
  );
};

export default IconButton;
