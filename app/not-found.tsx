import Link from "next/link";

import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

/**
 * 渲染 404 页面。
 */
export default function NotFound() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <section className="page-shell py-24">
        <div className="max-w-2xl rounded-[2rem] border border-white/8 bg-white/4 p-10">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-emerald-200">404</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Guide not found</h1>
          <p className="mt-4 text-base leading-8 text-[#cbd5e1]">
            The page you requested does not exist. Head back to the homepage or browse one of the
            sourcing guide categories.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400 px-5 py-3 text-sm font-semibold text-[#052e20] transition hover:bg-emerald-300"
            >
              Back to home
            </Link>
            <Link
              href="/guides/factory-finder/"
              className="inline-flex items-center justify-center rounded-full border border-white/8 px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald-400/30"
            >
              Start with factories
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
