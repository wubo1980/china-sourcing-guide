/**
 * 从 data.ts 提取数据并输出到 content/ 目录
 * 用法: npx tsx scripts/extract-content.ts
 */
import { existsSync, mkdirSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

async function main() {
  const { articles, categories } = await import("../lib/content/data");

  const contentDir = join(root, "content");
  const articlesDir = join(contentDir, "articles");

  if (!existsSync(contentDir)) mkdirSync(contentDir, { recursive: true });
  if (!existsSync(articlesDir)) mkdirSync(articlesDir, { recursive: true });

  // 1. categories.json
  writeFileSync(join(contentDir, "categories.json"), JSON.stringify(categories, null, 2), "utf-8");

  // 2. articles/{slug}.json + index.json 索引
  const index: { slug: string; category: string }[] = [];

  for (const article of articles) {
    const { slug, category } = article;
    writeFileSync(
      join(articlesDir, `${slug}.json`),
      JSON.stringify(article, null, 2),
      "utf-8"
    );
    index.push({ slug, category });
  }

  // 3. index.json 包含 summary 索引
  writeFileSync(
    join(contentDir, "index.json"),
    JSON.stringify(
      {
        articles: index,
        count: articles.length
      },
      null,
      2
    ),
    "utf-8"
  );

  console.log(`✅ 导出完成: ${articles.length} 篇文章, ${categories.length} 个分类`);
  console.log(`   content/categories.json`);
  console.log(`   content/index.json`);
  console.log(`   content/articles/*.json`);
}

main().catch(console.error);
