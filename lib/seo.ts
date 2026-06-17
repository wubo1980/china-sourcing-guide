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
/**
 * 站点基础 URL。
 * VERCEL_URL 是 Vercel 自动注入的环境变量（如 china-sourcing-guide-murex.vercel.app），
 * 取不到则回退到 VERCEL_BRANCH_URL 或硬编码值。
 */
export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL
    || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "")
    || (process.env.VERCEL_BRANCH_URL ? `https://${process.env.VERCEL_BRANCH_URL}` : "")
    || "https://china-sourcing-guide-murex.vercel.app";
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
