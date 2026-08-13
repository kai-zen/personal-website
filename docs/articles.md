# Markdown articles

Git-based blog: add `content/articles/my-slug.md`, commit, and push. No CMS, no API.

**Authoring:** filename = slug. Required frontmatter: `title`, `description`, `publishedAt` (`YYYY-MM-DD`), `tags`. Optional: `draft` (default `false`), `coverImage`. Reading time is computed from the body (~200 wpm). Files that start with `_` are ignored (see `_example.md` for a template).

## Checklist

- [x] Step 1 — Dependencies, `content/articles/`, typography plugin
- [x] Step 2 — Article loader (`getAllArticles`, `getArticleBySlug`, `getLatestArticles`, `getArticleSlugs`)
- [x] Step 3 — Markdown renderer (GFM, Shiki, prose, light/dark)
- [x] Step 4 — Article page `/articles/[slug]` (metadata, notFound, JSON-LD)
- [x] Step 5 — Listing page `/articles`, Topbar → `/articles`
- [x] Step 6 — Home section uses `getLatestArticles(3)`; drop mock
- [x] Step 7 — Sitemap + RSS from published articles

## Out of scope

MDX, tag index pages, drafts preview route, copy-code button, cover-image redesign of `ArticleCard`, any HTTP API.
