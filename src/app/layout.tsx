import { cn } from "@/shared/config/functions";
import "./globals.css";
import { fontSans } from "@/shared/config/fonts";
import { siteConfig } from "@/shared/config/site";
import { ThemeProvider } from "@/shared/providers/ThemeProvider";
import { CustomCursor } from "@/shared/components";
import { FC, ReactNode } from "react";
import type { Metadata } from "next";
import { Footer, Topbar } from "@/sections/layout";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  applicationName: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@kaizenjs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

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
