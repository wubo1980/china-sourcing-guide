import Link from "next/link";

import { getCategories } from "../lib/content/queries";

/**
 * 渲染全站页脚。
 */
export async function SiteFooter() {
  const categories = await getCategories();

  return (
    <footer className="border-t border-white/8 py-10">
      <div className="page-shell grid gap-8 md:grid-cols-[1.5fr_1fr]">
        <div className="space-y-3">
          <p className="text-sm font-semibold tracking-wide text-white">China Sourcing Guide</p>
          <p className="max-w-2xl text-sm leading-7 text-[#9ca3af]">
            Practical guidance for buyers who want better suppliers, cleaner negotiations, stronger
            quality control, and fewer surprises in freight and customs.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/guides/${category.slug}`}
              className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm text-[#d1d5db] transition hover:border-emerald-400/30 hover:text-white"
            >
              {category.title}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
