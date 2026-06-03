import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";

import Script from "next/script";




const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap"
});

export const metadata: Metadata = {
  ...buildMetadata({
    description:
      "A practical guide to finding factories, negotiating deals, quality control, shipping, and customs when sourcing from China."
  }),
  other: {
    "google-site-verification": "N21K5VoxWUyIIwGf5NZjvhvU2Ty_JC2EoVhMWPL-iro"
  }
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

/**
 * 渲染全站根布局。
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetBrainsMono.variable} bg-[#0f1117] font-[var(--font-inter)] text-[#f3f4f6] antialiased`}>
        <Script src={"https://www.googletagmanager.com/gtag/js?id=G-VFDC1ZCH9K"} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag("js", new Date());
            gtag("config", "G-VFDC1ZCH9K");
          `}
        </Script>
        {children}
        <Analytics mode="production" />
      </body>
    </html>
  );
}
