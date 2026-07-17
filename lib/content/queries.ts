/**
 * queries.ts
 *
 * Async 查询层，从 content/ JSON 目录读取数据。
 * 所有函数均为 async，供 App Router 组件使用。
 * 内部使用 content-reader 的 sync 方法 + 简单包装。
 */
import type { Article, Category } from "./types";
import {
  getCategoriesSync,
  getCategoryBySlugSync,
  getArticlesSync,
  getLatestArticlesSync,
  getArticlesByCategorySync,
  getArticleBySlugSync,
  getRelatedArticlesSync
} from "./content-reader";

// ── 公共导出 ───────────────────────────────────────

export async function getCategories(): Promise<Category[]> {
  return getCategoriesSync();
}

export async function getCategoryBySlug(
  slug: string
): Promise<Category | undefined> {
  return getCategoryBySlugSync(slug);
}

export async function getArticles(): Promise<Article[]> {
  return getArticlesSync();
}

export async function getLatestArticles(limit = 6): Promise<Article[]> {
  return getLatestArticlesSync(limit);
}

export async function getArticlesByCategory(
  categorySlug: string
): Promise<Article[]> {
  return getArticlesByCategorySync(categorySlug);
}

export async function getArticleBySlug(
  categorySlug: string,
  slug: string
): Promise<Article | undefined> {
  return getArticleBySlugSync(categorySlug, slug);
}

export async function getRelatedArticles(
  article: Article,
  limit = 3
): Promise<Article[]> {
  return getRelatedArticlesSync(article, limit);
}
