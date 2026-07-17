import Link from "next/link";

import { getCategories } from "../lib/content/queries";

type SiteHeaderProps = {
  activePath?: string;
};

/**
 * 渲染全站顶部导航。
 */
export async function SiteHeader({ activePath }: SiteHeaderProps) {
  const categories = await getCategories();

  return (
    <header className="sticky top-0 z-30 border-b border-white/8 bg-[#0f1117]/80 backdrop-blur-xl">
      <div className="page-shell flex items-center justify-between gap-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-400/10 text-lg">
            CN
          </span>
          <div>
            <p className="text-sm font-semibold tracking-wide text-white">China Sourcing Guide</p>
            <p className="font-mono text-xs text-[#9ca3af]">Practical sourcing intelligence</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {categories.map((category) => {
            const href = `/guides/${category.slug}`;
            const isActive = activePath?.startsWith(href);

            return (
              <Link
                key={category.slug}
                href={href}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  isActive
                    ? "border-emerald-400/40 bg-emerald-400/10 text-white"
                    : "border-white/8 bg-white/4 text-[#9ca3af] hover:border-emerald-400/30 hover:text-white"
                }`}
              >
                {category.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
