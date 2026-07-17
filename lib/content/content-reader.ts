/**
 * content-reader.ts
 *
 * 从 content/ JSON 目录读取文章和分类数据。
 * 提供 sync（用于 generateStaticParams / sitemap）和 async（用于页面渲染）两种接口。
 */
import { readFileSync, readdirSync, existsSync } from "fs";
import { join } from "path";
import type { Article, Category } from "./types";

// ── 路径 ──────────────────────────────────────────
const contentDir = join(process.cwd(), "content");
const articlesDir = join(contentDir, "articles");

// 运行时缓存（仅在 build 阶段有效，每次服务重启重建）
let _indexCache: { slug: string; category: string }[] | null = null;
let _categoriesCache: Category[] | null = null;

// ── 内部辅助 ───────────────────────────────────────

function ensureDir() {
  if (!existsSync(contentDir)) {
    throw new Error(
      `content/ directory not found at ${contentDir}. Did you run the extraction script?`
    );
  }
}

function loadIndexSync(): { slug: string; category: string }[] {
  if (_indexCache) return _indexCache;
  ensureDir();
  const raw = readFileSync(join(contentDir, "index.json"), "utf-8");
  const parsed = JSON.parse(raw);
  _indexCache = parsed.articles;
  return _indexCache!;
}

function loadCategoriesSync(): Category[] {
  if (_categoriesCache) return _categoriesCache;
  ensureDir();
  const raw = readFileSync(join(contentDir, "categories.json"), "utf-8");
  _categoriesCache = JSON.parse(raw) as Category[];
  return _categoriesCache;
}

function loadArticleSync(slug: string): Article {
  const raw = readFileSync(join(articlesDir, `${slug}.json`), "utf-8");
  return JSON.parse(raw) as Article;
}

// ── 公共导出 — sync 版本 ───────────────────────────

export function getCategoriesSync(): Category[] {
  return loadCategoriesSync();
}

export function getCategoryBySlugSync(slug: string): Category | undefined {
  return loadCategoriesSync().find((c) => c.slug === slug);
}

export function getArticlesSync(): Article[] {
  const index = loadIndexSync();
  return index
    .map((entry) => loadArticleSync(entry.slug))
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export function getLatestArticlesSync(limit = 6): Article[] {
  return getArticlesSync().slice(0, limit);
}

export function getArticleBySlugSync(
  categorySlug: string,
  slug: string
): Article | undefined {
  try {
    const article = loadArticleSync(slug);
    return article.category === categorySlug ? article : undefined;
  } catch {
    return undefined;
  }
}

export function getArticlesByCategorySync(categorySlug: string): Article[] {
  return getArticlesSync().filter((a) => a.category === categorySlug);
}

export function getRelatedArticlesSync(
  article: Article,
  limit = 3
): Article[] {
  return getArticlesByCategorySync(article.category)
    .filter((a) => a.slug !== article.slug)
    .slice(0, limit);
}
