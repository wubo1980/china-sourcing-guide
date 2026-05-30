import type { Metadata } from "next";

type BuildMetadataOptions = {
  title?: string;
  description: string;
  path?: string;
  openGraphType?: "website" | "article";
};

const siteName = "China Sourcing Guide";
const defaultDescription =
  "Practical guidance on finding factories, negotiating deals, quality control, logistics, and customs when sourcing from China.";
const defaultSiteUrl = "https://china-sourcing-guide.vercel.app";

/**
 * 返回当前站点 URL。
 */
export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL || defaultSiteUrl;
}

/**
 * 生成绝对 URL。
 */
export function buildAbsoluteUrl(path = "/"): string {
  return new URL(path, getSiteUrl()).toString();
}

/**
 * 构建页面元数据。
 */
export function buildMetadata(options: BuildMetadataOptions): Metadata {
  const pageTitle = options.title ? `${options.title} | ${siteName}` : siteName;
  const canonicalPath = options.path ?? "/";
  const url = buildAbsoluteUrl(canonicalPath);

  return {
    title: pageTitle,
    description: options.description || defaultDescription,
    metadataBase: new URL(getSiteUrl()),
    alternates: {
      canonical: url
    },
    openGraph: {
      title: pageTitle,
      description: options.description || defaultDescription,
      url,
      siteName,
      type: options.openGraphType ?? "website"
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: options.description || defaultDescription
    }
  };
}
