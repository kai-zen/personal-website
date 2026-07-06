"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { FC, ReactNode } from "react";

type Props = Readonly<{
  children: ReactNode;
}>;

export const ThemeProvider: FC<Props> = ({ children }) => (
  <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
    {children}
  </NextThemesProvider>
);
