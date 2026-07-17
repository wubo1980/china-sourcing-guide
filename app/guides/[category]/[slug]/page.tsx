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
export async function generateStaticParams() {
  const allArticles = await getArticles();
  return allArticles.map((article) => ({
    category: article.category,
    slug: article.slug
  }));
}

/**
 * 生成文章页元数据。
 */
export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const article = await getArticleBySlug(category, slug);

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
  const article = await getArticleBySlug(category, slug);

  if (!article) {
    notFound();
  }

  const articleCategory = await getCategoryBySlug(article.category);

  if (!articleCategory) {
    notFound();
  }

  const relatedArticles = await getRelatedArticles(article);

  const categorySvgMap: Record<string, string> = {
    "factory-finder": `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0l2 3H2l2-3"/><circle cx="9" cy="14" r="2"/><circle cx="15" cy="14" r="2"/><path d="M10 7h4v2h-4z"/></svg>`,
    "quality-control": `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
    "negotiation-pricing": `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    "shipping-logistics": `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`
  };

  const categorySvg = categorySvgMap[article.category] || "";

  // 生成可缓存的数据 URI SVG 图片（base64 编码，兼容所有浏览器）
  const categoryImgSrc = categorySvg
    ? `data:image/svg+xml;base64,${Buffer.from(categorySvg).toString("base64")}`
    : "";

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

        {/* JSON-LD 结构化数据用于文章标记 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: article.title,
              description: article.description,
              datePublished: article.publishedAt,
              dateModified: article.publishedAt,
              author: {
                "@type": "Organization",
                name: "China Sourcing Guide"
              },
              publisher: {
                "@type": "Organization",
                name: "China Sourcing Guide"
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `/guides/${article.category}/${article.slug}/`
              }
            })
          }}
        />
      </section>

      <section className="page-shell grid gap-10 py-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
        <div className="space-y-10">
          {/* 文章头图 - 使用 data URI SVG（无外部图片依赖） */}
          {categoryImgSrc ? (
            <img
              src={categoryImgSrc}
              alt={`${articleCategory.title} category illustration`}
              className="h-16 w-16 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-3"
              width={64}
              height={64}
            />
          ) : null}
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
