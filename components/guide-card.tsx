import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Article, Category } from "../lib/content/types";

type GuideCardProps = {
  article: Article;
  category: Category;
};

/**
 * 渲染文章摘要卡片。
 */
export function GuideCard({ article, category }: GuideCardProps) {
  return (
    <Link
      href={`/guides/${article.category}/${article.slug}`}
      className="group flex h-full flex-col justify-between rounded-3xl border border-white/8 bg-white/4 p-6 transition hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/6"
    >
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-xs">
          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 font-mono text-emerald-200">
            {category.shortTitle}
          </span>
          <span className="font-mono text-[#9ca3af]">{article.readingTime} min read</span>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold leading-tight text-white">{article.title}</h3>
          <p className="text-sm leading-7 text-[#9ca3af]">{article.description}</p>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between text-sm text-white">
        <span className="font-mono text-[#9ca3af]">{article.publishedAt}</span>
        <span className="inline-flex items-center gap-2 text-emerald-300">
          Read guide
          <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
