import { cn } from "@/shared/config/functions";
import "./globals.css";
import { fontSans } from "@/shared/config/fonts";
import { ThemeProvider } from "@/shared/providers/ThemeProvider";
import { CustomCursor } from "@/shared/components";
import { FC, ReactNode } from "react";
import { Footer, Topbar } from "@/sections/layout";

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
          <Topbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
