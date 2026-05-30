import assert from "node:assert/strict";
import test from "node:test";

import { articles, categories } from "../lib/content/data";

/**
 * 验证分类数量符合预期。
 */
test("contains four guide categories", () => {
  assert.equal(categories.length, 4);
});

/**
 * 验证文章数量符合预期。
 */
test("contains eight launch articles", () => {
  assert.equal(articles.length, 8);
});

/**
 * 验证文章 slug 唯一。
 */
test("uses unique article slugs", () => {
  const uniqueSlugs = new Set(articles.map((article) => article.slug));

  assert.equal(uniqueSlugs.size, articles.length);
});

/**
 * 验证每篇文章都映射到有效分类。
 */
test("maps every article to an existing category", () => {
  const categorySlugs = new Set(categories.map((category) => category.slug));

  for (const article of articles) {
    assert.ok(categorySlugs.has(article.category), `Unknown category: ${article.category}`);
  }
});
