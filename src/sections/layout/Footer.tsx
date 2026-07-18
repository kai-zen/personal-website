import { FC } from "react";
import { Typography } from "@/shared/components";

const year = new Date().getFullYear();

const Footer: FC = () => {
  return (
    <footer className="mt-auto w-full border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-6xl px-6 py-6">
        <Typography
          as="p"
          variant="caption"
          className="text-xs text-gray-600 dark:text-gray-300"
        >
          © {year} Ali Razipour. All rights reserved.
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
