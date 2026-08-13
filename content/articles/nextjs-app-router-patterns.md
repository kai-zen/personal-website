---
title: "Next.js App Router Patterns I Use in Production"
description: "A collection of practical patterns for organizing large Next.js applications with the App Router."
publishedAt: "2026-06-18"
tags: ["Next.js", "Architecture", "TypeScript"]
coverImage: "/images/articles/nextjs-app-router-patterns.png"
---

![Next.js App Router Architecture](/images/articles/nextjs-app-router-patterns.png)

The App Router is easy to start and easy to tangle. These are the patterns that have held up for me once a codebase has more than a handful of routes.

## Colocate by route, share by meaning

Keep page-only UI next to the route. Put anything reused across routes in `src/shared` or a domain folder — not in `app/`.

```text
src/
  app/articles/[slug]/page.tsx
  sections/articles/MarkdownContent.tsx
  content/articles/index.ts
  shared/components/Button.tsx
```

If a component is only imported by one page, it does not belong in `shared`.

## Server by default, client on the leaves

Fetch and format data in Server Components. Push `"use client"` down to the control that actually needs state, effects, or browser APIs.

A theme toggle is a Client Component. The article body is not.

## Typed params are promises

In current Next.js, `params` and `searchParams` are promises. Await them once at the top of the page and pass plain values down:

```tsx title="app/articles/[slug]/page.tsx"
type Props = {
  params: Promise<{ slug: string }>;
};

const ArticlePage = async ({ params }: Props) => {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) notFound();

  return <ArticleBody article={article} />;
};
```

## Static when the source is git

If the data lives in the repo — markdown, JSON, a typed `data.ts` — load it with `fs` or a direct import and use `generateStaticParams`. You get static pages without inventing an API.

That is how these articles work: a file in `content/articles/` becomes a page at build time.

## Metadata belongs next to the page

`generateMetadata` should read the same loader as the page. Duplicate fetches are fine; wrap the loader in `cache()` so the work runs once per request.

## What I avoid

- Fetching from the client to render the first view of a public page
- A catch-all `components/` folder that becomes a junk drawer
- Turning a whole layout into a Client Component to add one `onClick`

The App Router rewards boring structure. Routes stay thin, data loaders stay explicit, and interactivity stays at the edges.
