import localFont from "next/font/local";

export const fontSans = localFont({
  src: [
    {
      path: "../../assets/fonts/InterVariable.woff2",
      style: "normal",
      weight: "100 900",
    },
    {
      path: "../../assets/fonts/InterVariable-Italic.woff2",
      style: "italic",
      weight: "100 900",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});
