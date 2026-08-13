---
title: "React.lazy vs Next.js dynamic(): Which One Should You Use?"
description: "Learn the differences between React.lazy and Next.js dynamic imports, when SSR matters, and how to choose the right solution for your application."
publishedAt: "2026-07-12"
tags: ["React", "Next.js", "Performance"]
---

Both APIs split a component into its own JavaScript chunk. The difference is what happens on the server, and what you get for free around loading states.

## The short version

Use `React.lazy` in a client-only React tree. Use `next/dynamic` in a Next.js app, especially when the component should skip SSR or needs a typed loading fallback.

| API            | SSR                          | Loading UI              | Typical use                    |
| -------------- | ---------------------------- | ----------------------- | ------------------------------ |
| `React.lazy`   | No (needs a client boundary) | `Suspense`              | Client widgets, modals         |
| `next/dynamic` | Optional                     | `loading` or `Suspense` | App Router pages, heavy charts |

## React.lazy

`React.lazy` is a client API. It has to sit under a Client Component and a `Suspense` boundary:

```tsx title="lazy-chart.tsx"
"use client";

import { lazy, Suspense } from "react";

const Chart = lazy(() => import("./Chart"));

export const LazyChart = () => (
  <Suspense fallback={<p>Loading chart…</p>}>
    <Chart />
  </Suspense>
);
```

That is enough when the parent is already a Client Component and you do not care about HTML for the first paint.

## next/dynamic

`next/dynamic` wraps the same idea and adds SSR control. Turning SSR off is the usual reason to reach for it — maps, editors, and anything that touches `window` during render:

```tsx title="dynamic-map.tsx"
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => <p>Loading map…</p>,
});

export const StoreMap = () => <Map />;
```

In the App Router this still works from a Server Component. The split happens at the bundler, and the fallback is rendered on the server.

## When SSR actually matters

Skip SSR when the component:

- Reads `window` or `document` at render time
- Ships a large library the crawler does not need (charts, WASM)
- Hydrates poorly because the server HTML cannot match the client

Keep SSR when the content is the page — headings, product copy, anything you want indexed or painted before JS.

> If you are unsure, keep SSR on. `ssr: false` is a fix for a specific problem, not a default performance win.

## A practical rule

1. Start with a Server Component and a normal import.
2. If the file is huge and below the fold, switch to `next/dynamic` and keep SSR.
3. If it crashes on the server, set `ssr: false`.
4. Reach for `React.lazy` only inside an existing Client Component tree that already has `Suspense`.

That order avoids turning the whole page into a client bundle just to code-split a widget.
