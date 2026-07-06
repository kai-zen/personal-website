import { cn } from "@/shared/config/functions";
import "./globals.css";
import { fontSans } from "@/shared/config/fonts";
import { ThemeProvider } from "@/shared/providers/ThemeProvider";
import { CustomCursor } from "@/shared/components";
import { Metadata } from "next";
import { FC, ReactNode } from "react";

type Props = Readonly<{
  children: ReactNode;
}>;

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased font-sans", fontSans.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
