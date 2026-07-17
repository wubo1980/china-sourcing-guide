import Link from "next/link";
import { ArrowRight, BadgeCheck, PackageSearch, ShieldCheck, Truck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { GuideCard } from "../components/guide-card";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { getCategories, getLatestArticles } from "../lib/content/queries";
import { buildMetadata } from "../lib/seo";

export const metadata = buildMetadata({
  title: "Source from China Without the Headaches",
  description:
    "A practical guide to finding factories, negotiating deals, and importing products for first-time importers and experienced buyers alike.",
  path: "/"
});

const featureIcons: Record<string, LucideIcon> = {
  "factory-finder": PackageSearch,
  "quality-control": ShieldCheck,
  "negotiation-pricing": BadgeCheck,
  "shipping-logistics": Truck
};

/**
 * 渲染首页。
 */
export default async function HomePage() {
  const categories = await getCategories();
  const latestGuides = await getLatestArticles();

  return (
    <main className="min-h-screen">
      <SiteHeader activePath="/" />

      <section className="grid-pattern border-b border-white/8">
        <div className="page-shell py-20 md:py-28">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.28em] text-emerald-200">
              China sourcing intelligence
            </div>

            <div className="space-y-6">
              <h1 className="max-w-4xl text-5xl font-semibold leading-tight text-white md:text-7xl">
                Source from China Without the Headaches
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-[#cbd5e1] md:text-xl">
                A practical guide to finding factories, negotiating deals, and importing products
                — built for first-time importers and experienced buyers alike.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/guides/factory-finder/"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400 px-6 py-3 text-sm font-semibold text-[#052e20] transition hover:bg-emerald-300"
              >
                Start Sourcing Guide
                <ArrowRight className="h-4 w-4" />
              </Link>
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[#9ca3af]">
                <span className="rounded-full border border-white/8 px-3 py-2">Factory search</span>
                <span className="rounded-full border border-white/8 px-3 py-2">QC workflows</span>
                <span className="rounded-full border border-white/8 px-3 py-2">Import compliance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell py-16 md:py-20">
        <div className="mb-8 space-y-3">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-emerald-200">
            Core playbooks
          </p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">What buyers need most</h2>
          <p className="max-w-2xl text-sm leading-7 text-[#9ca3af] md:text-base">
            Four practical tracks for supplier discovery, quality control, negotiation, and
            landed-cost protection.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => {
            const Icon = featureIcons[category.slug];

            return (
              <Link
                key={category.slug}
                href={`/guides/${category.slug}/`}
                className="group rounded-[2rem] border border-white/8 bg-white/4 p-6 transition hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/6"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-3xl">{category.icon}</span>
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 p-3 text-emerald-200">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  <p className="text-sm leading-7 text-[#9ca3af]">{category.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="page-shell py-8 pb-20 md:pb-24">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-emerald-200">
              Latest guides
            </p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Read the latest playbooks</h2>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {latestGuides.map((article) => {
            const category = categories.find((item) => item.slug === article.category);

            if (!category) {
              return null;
            }

            return <GuideCard key={article.slug} article={article} category={category} />;
          })}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
