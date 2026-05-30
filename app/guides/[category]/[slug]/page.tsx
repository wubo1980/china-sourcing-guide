import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleContent } from "../../../../components/article-content";
import { ArticleCta } from "../../../../components/article-cta";
import { GuideCard } from "../../../../components/guide-card";
import { SiteFooter } from "../../../../components/site-footer";
import { SiteHeader } from "../../../../components/site-header";
import {
  getArticleBySlug,
  getArticles,
  getCategoryBySlug,
  getRelatedArticles
} from "../../../../lib/content/queries";
import { buildMetadata } from "../../../../lib/seo";

type ArticlePageProps = {
  params: Promise<{
    category: string;
    slug: string;
  }>;
};

export const dynamicParams = false;

/**
 * 生成全部文章静态参数。
 */
export function generateStaticParams() {
  return getArticles().map((article) => ({
    category: article.category,
    slug: article.slug
  }));
}

/**
 * 生成文章页元数据。
 */
export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const article = getArticleBySlug(category, slug);

  if (!article) {
    return buildMetadata({
      title: "Guide not found",
      description: "The requested sourcing guide does not exist.",
      path: `/guides/${category}/${slug}/`
    });
  }

  return buildMetadata({
    title: article.title,
    description: article.description,
    path: `/guides/${article.category}/${article.slug}/`,
    openGraphType: "article"
  });
}

/**
 * 渲染文章详情页。
 */
export default async function ArticlePage({ params }: ArticlePageProps) {
  const { category, slug } = await params;
  const article = getArticleBySlug(category, slug);

  if (!article) {
    notFound();
  }

  const articleCategory = getCategoryBySlug(article.category);

  if (!articleCategory) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article);

  return (
    <main className="min-h-screen">
      <SiteHeader activePath={`/guides/${articleCategory.slug}`} />

      <section className="border-b border-white/8">
        <div className="page-shell py-16 md:py-20">
          <div className="max-w-4xl space-y-6">
            <Link
              href={`/guides/${articleCategory.slug}/`}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.28em] text-[#9ca3af] transition hover:text-white"
            >
              {articleCategory.title}
            </Link>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
                {article.title}
              </h1>
              <p className="max-w-3xl text-base leading-8 text-[#cbd5e1] md:text-lg">
                {article.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 font-mono text-xs text-[#9ca3af]">
              <span className="rounded-full border border-white/8 px-3 py-2">{article.publishedAt}</span>
              <span className="rounded-full border border-white/8 px-3 py-2">
                {article.readingTime} min read
              </span>
              {article.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-emerald-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell grid gap-10 py-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
        <div className="space-y-10">
          <ArticleContent sections={article.sections} />
          <ArticleCta cta={article.cta} />
        </div>

        <aside className="space-y-5 lg:sticky lg:top-24">
          <div className="rounded-[2rem] border border-white/8 bg-white/4 p-6">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-emerald-200">
              Related guides
            </p>
            <div className="mt-5 space-y-4">
              {relatedArticles.map((relatedArticle) => (
                <GuideCard key={relatedArticle.slug} article={relatedArticle} category={articleCategory} />
              ))}
            </div>
          </div>
        </aside>
      </section>

      <SiteFooter />
    </main>
  );
}
