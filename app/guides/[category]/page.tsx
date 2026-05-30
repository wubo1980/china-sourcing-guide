import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { GuideCard } from "../../../components/guide-card";
import { SiteFooter } from "../../../components/site-footer";
import { SiteHeader } from "../../../components/site-header";
import { getArticlesByCategory, getCategories, getCategoryBySlug } from "../../../lib/content/queries";
import { buildMetadata } from "../../../lib/seo";

type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

export const dynamicParams = false;

/**
 * 生成全部分类静态参数。
 */
export function generateStaticParams() {
  return getCategories().map((category) => ({
    category: category.slug
  }));
}

/**
 * 生成分类页元数据。
 */
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const currentCategory = getCategoryBySlug(category);

  if (!currentCategory) {
    return buildMetadata({
      title: "Guide category not found",
      description: "The requested sourcing guide category does not exist.",
      path: `/guides/${category}/`
    });
  }

  return buildMetadata({
    title: currentCategory.title,
    description: currentCategory.description,
    path: `/guides/${currentCategory.slug}/`
  });
}

/**
 * 渲染分类页。
 */
export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const currentCategory = getCategoryBySlug(category);

  if (!currentCategory) {
    notFound();
  }

  const guides = getArticlesByCategory(currentCategory.slug);

  return (
    <main className="min-h-screen">
      <SiteHeader activePath={`/guides/${currentCategory.slug}`} />

      <section className="border-b border-white/8">
        <div className="page-shell space-y-8 py-16 md:py-20">
          <Link href="/" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.28em] text-[#9ca3af] transition hover:text-white">
            Back to home
          </Link>
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2">
              <span className="text-xl">{currentCategory.icon}</span>
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-emerald-200">
                {currentCategory.title}
              </span>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold text-white md:text-6xl">{currentCategory.heroTitle}</h1>
              <p className="max-w-3xl text-base leading-8 text-[#cbd5e1] md:text-lg">
                {currentCategory.heroDescription}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 font-mono text-xs text-[#9ca3af]">
              <span className="rounded-full border border-white/8 px-3 py-2">{guides.length} guides</span>
              <span className="rounded-full border border-white/8 px-3 py-2">
                Mobile-friendly reading
              </span>
              <span className="rounded-full border border-white/8 px-3 py-2">
                Static export ready
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell py-16 md:py-20">
        <div className="mb-8 space-y-3">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-emerald-200">
            Articles in this section
          </p>
          <h2 className="text-3xl font-semibold text-white">Browse every guide</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {guides.map((article) => (
            <GuideCard key={article.slug} article={article} category={currentCategory} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
