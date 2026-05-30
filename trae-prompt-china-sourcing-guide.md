# Trae 提示词：China Sourcing Guide 中国采购指南站

## 项目定位
面向欧美中小企业主和创业者的中国采购指南网站。帮助他们理解如何从中国找供应商、谈判、质检、物流、清关。

## 风格要求
- 深色主题（深灰 #0f1117 背景，绿色 #10b981 强调色）
- 字体：Inter（正文）+ JetBrains Mono（代码/数据）
- 设计参考：简洁现代 SaaS 风格，卡片式布局
- 英文网站，面向英文读者
- 语气：实用、直接、专业但不学术（类似 guides.co 的感党）

## 技术栈
- 框架：Next.js (App Router)
- 样式：TailwindCSS v4
- 部署：Vercel（静态导出）

## 页面结构

### 首页
- Hero 区域：标题 + 副标题 + CTA
  - 标题："Source from China Without the Headaches"
  - 副标题："A practical guide to finding factories, negotiating deals, and importing products — built for first-time importers and experienced buyers alike."
  - CTA 按钮："Start Sourcing Guide"
- 核心板块卡片（FeatureGrid）：
  1. 🏭 Factory Finder — How to find reliable suppliers on Alibaba, 1688, trade shows
  2. 📋 Quality Control — Inspection checklists, sampling, factory audits
  3. 💰 Negotiation & Pricing — MOQ, payment terms, getting the best deal
  4. 🚢 Shipping & Logistics — FOB vs CIF, freight forwarding, customs clearance
- 最新文章列表（Latest Guides）
- 底部 Footer

### 板块/分类页
每个板块一个落地页，有该板块的文章索引。

### 文章详情页
- 右侧边栏（相关文章推荐）
- 预计阅读时间
- 文章最后一行的 CTA（引导订阅或购买相关付费工具）

## 初始文章（8篇，一次性生成）

1. **"How to Find Reliable Suppliers on Alibaba (2026 Guide)"**
   - Verified vs unverified suppliers
   - Trade Assurance explained
   - Red flags to watch for
   - How to shortlist suppliers efficiently

2. **"Alibaba vs 1688: What's the Difference and Which Should You Use?"**
   - Price comparison
   - Registration requirements
   - Agent services explained
   - When to use which platform

3. **"Complete Guide to Product Sourcing from China"**
   - End-to-end sourcing workflow
   - Finding the right factory type
   - RFQ best practices
   - Sample ordering process

4. **"Quality Control Checklist for Chinese Manufacturers"**
   - Pre-production inspection
   - During-production checkpoints
   - Final random inspection (AQL)
   - Third-party QC services

5. **"Understanding MOQ, Payment Terms, and Negotiation"**
   - How MOQ works and how to negotiate lower
   - T/T vs L/C vs PayPal vs Alibaba Pay
   - Deposit percentages and risk management
   - Cultural tips for negotiating with Chinese suppliers

6. **"FOB vs CIF vs EXW: Shipping Terms Explained for Importers"**
   - What each incoterm means
   - Cost comparison
   - When to choose which
   - Common mistakes

7. **"How to Avoid Scams and Bad Suppliers in China"**
   - Common scam patterns
   - Due diligence checklist
   - Background check services
   - Legal recourse options

8. **"US Customs Clearance: A Step-by-Step Guide for Chinese Imports"**
   - HS code classification
   - Duties and tariffs
   - Customs bond requirements
   - Common clearance issues

## 技术要求
- 每条路由都是静态页面（generateStaticParams）
- 所有图片使用 emoji 或 SVG 图标（无需外部图片资源）
- sitemap.xml 自动生成
- robots.txt 允许所有爬虫
- Google Analytics 占位（GA_MEASUREMENT_ID 环境变量）
- SEO：每页有 meta description, og:title, og:description
- 移动端响应式优先
