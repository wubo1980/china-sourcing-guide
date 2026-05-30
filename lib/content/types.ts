export type ArticleSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  takeaway?: string;
};

export type Category = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  heroTitle: string;
  heroDescription: string;
  icon: string;
  accent: string;
};

export type ArticleCta = {
  title: string;
  description: string;
  label: string;
  href: string;
};

export type Article = {
  slug: string;
  category: string;
  title: string;
  description: string;
  publishedAt: string;
  readingTime: number;
  tags: string[];
  sections: ArticleSection[];
  cta: ArticleCta;
};
