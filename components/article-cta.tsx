import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { ArticleCta } from "../lib/content/types";

type ArticleCtaProps = {
  cta: ArticleCta;
};

/**
 * 渲染文章底部转化区域。
 */
export function ArticleCta({ cta }: ArticleCtaProps) {
  return (
    <section
      id="subscribe"
      className="rounded-[2rem] border border-emerald-400/20 bg-gradient-to-br from-emerald-400/12 via-white/4 to-transparent p-8"
    >
      <div className="space-y-4">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-emerald-200">
          Next step
        </p>
        <h2 className="text-2xl font-semibold text-white">{cta.title}</h2>
        <p className="max-w-2xl text-sm leading-7 text-[#cbd5e1]">{cta.description}</p>
        <Link
          href={cta.href}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400 px-5 py-3 text-sm font-semibold text-[#052e20] transition hover:bg-emerald-300"
        >
          {cta.label}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
