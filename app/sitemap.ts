import type { MetadataRoute } from "next";

import { getArticles, getCategories } from "../lib/content/queries";
import { buildAbsoluteUrl } from "../lib/seo";

export const dynamic = "force-static";

/**
 * 生成站点地图。
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const categories = await getCategories();
  const articles = await getArticles();

  const categoryEntries = categories.map((category) => ({
    url: buildAbsoluteUrl(`/guides/${category.slug}/`),
    lastModified: new Date()
  }));

  const articleEntries = articles.map((article) => ({
    url: buildAbsoluteUrl(`/guides/${article.category}/${article.slug}/`),
    lastModified: new Date(article.publishedAt)
  }));

  return [
    {
      url: buildAbsoluteUrl("/"),
      lastModified: new Date()
    },
    ...categoryEntries,
    ...articleEntries
  ];
}
