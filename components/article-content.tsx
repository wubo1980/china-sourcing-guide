import type { ArticleSection } from "../lib/content/types";

type ArticleContentProps = {
  sections: ArticleSection[];
};

/**
 * 渲染文章正文结构。
 */
export function ArticleContent({ sections }: ArticleContentProps) {
  return (
    <div className="article-prose space-y-10">
      {sections.map((section) => (
        <section key={section.title} className="space-y-5 rounded-3xl border border-white/8 bg-white/3 p-6 md:p-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
            <div className="space-y-4">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          {section.bullets ? (
            <ul>
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}

          {section.takeaway ? (
            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-4 text-sm leading-7 text-emerald-100">
              <span className="font-semibold text-white">Key takeaway:</span> {section.takeaway}
            </div>
          ) : null}
        </section>
      ))}
    </div>
  );
}
