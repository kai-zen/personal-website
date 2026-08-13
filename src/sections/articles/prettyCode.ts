import type { Options } from "rehype-pretty-code";

export const prettyCodeOptions = {
  theme: {
    light: "github-light",
    dark: "github-dark",
  },
  keepBackground: false,
  bypassInlineCode: true,
  defaultLang: "txt",
} satisfies Options;
