import { articles, categories } from "./data";
import type { Article, Category } from "./types";

/**
 * 返回全部分类。
 */
export function getCategories(): Category[] {
  return categories;
}

/**
 * 按 slug 获取分类。
 */
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

/**
 * 返回按发布日期倒序排列的全部文章。
 */
export function getArticles(): Article[] {
  return [...articles].sort((left, right) => {
    return new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime();
  });
}

/**
 * 返回首页所需的最新文章。
 */
export function getLatestArticles(limit = 6): Article[] {
  return getArticles().slice(0, limit);
}

/**
 * 返回某个分类下的全部文章。
 */
export function getArticlesByCategory(categorySlug: string): Article[] {
  return getArticles().filter((article) => article.category === categorySlug);
}

/**
 * 按分类和 slug 获取单篇文章。
 */
export function getArticleBySlug(categorySlug: string, slug: string): Article | undefined {
  return articles.find((article) => article.category === categorySlug && article.slug === slug);
}

/**
 * 返回相关文章，优先同分类。
 */
export function getRelatedArticles(article: Article, limit = 3): Article[] {
  return getArticlesByCategory(article.category)
    .filter((item) => item.slug !== article.slug)
    .slice(0, limit);
}
