import type { MetadataRoute } from "next";

import { getArticles, getCategories } from "../lib/content/queries";
import { buildAbsoluteUrl } from "../lib/seo";

export const dynamic = "force-static";

/**
 * 生成站点地图。
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const categoryEntries = getCategories().map((category) => ({
    url: buildAbsoluteUrl(`/guides/${category.slug}/`),
    lastModified: new Date()
  }));

  const articleEntries = getArticles().map((article) => ({
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
