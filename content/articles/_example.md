---
title: "Article template"
description: "Copy this file, rename it, and fill in the frontmatter. Files that start with an underscore are not published."
publishedAt: "2026-01-01"
tags: ["Template"]
draft: true
coverImage: "/images/articles/your-cover.png"
---

# Heading 1 (avoid this — the page already renders the title)

## Heading 2

### Heading 3

Paragraph with **bold**, *italic*, `inline code`, and a [link](https://nextjs.org).

- Bullet one
- Bullet two

1. First
2. Second

> A quote. Use these for callouts or pull quotes.

| Column | Value |
| ------ | ----- |
| Fast   | Yes   |
| Simple | Yes   |

```ts title="example.ts"
export const greet = (name: string) => {
  return `Hello, ${name}`;
};
```

![Optional local image](/images/articles/your-cover.png)

Cover images: put the file in `public/images/articles/`, set `coverImage` above, and paste the same path in a markdown figure. Generate new covers from `content/articles/image-prompt.json` — keep `style` and `constraints` fixed so they match the site UI, only change `subject`.
