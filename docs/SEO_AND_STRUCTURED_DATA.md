# 🌐 SEO & Structured Data Specification — Madhan Alagarsamy Portfolio

This document outlines the Search Engine Optimization (SEO) strategy, metadata architecture, Schema.org JSON-LD knowledge graph, and crawler discovery mechanisms implemented across [`https://madhanalagarsamy.site`](https://madhanalagarsamy.site).

---

## 📑 Table of Contents

- [1. SEO Strategy & Brand Identity](#1-seo-strategy--brand-identity)
- [2. Central SEO Configuration (`data/seo.ts`)](#2-central-seo-configuration-dataseots)
- [3. Next.js 16 Metadata Engine](#3-nextjs-16-metadata-engine)
  - [3.1 Root Layout Metadata (`app/layout.tsx`)](#31-root-layout-metadata-applayouttsx)
  - [3.2 Blog Index Metadata (`app/blog/page.tsx`)](#32-blog-index-metadata-appblogpagetsx)
  - [3.3 Dynamic Article Metadata (`app/blog/[slug]/page.tsx`)](#33-dynamic-article-metadata-appblogslugpagetsx)
- [4. Schema.org JSON-LD Knowledge Graph](#4-schemaorg-json-ld-knowledge-graph)
  - [4.1 `Person` Schema](#41-person-schema)
  - [4.2 `WebSite` & `ProfilePage` Schema](#42-website--profilepage-schema)
  - [4.3 `Blog` & `BlogPosting` Schema](#43-blog--blogposting-schema)
  - [4.4 `TechArticle` Schema for Research Posts](#44-techarticle-schema-for-research-posts)
  - [4.5 `BreadcrumbList` Schema](#45-breadcrumblist-schema)
- [5. Crawler Directives & Discovery](#5-crawler-directives--discovery)
  - [5.1 Dynamic Robots.txt (`app/robots.ts`)](#51-dynamic-robotstxt-approbotsts)
  - [5.2 Dynamic XML Sitemap (`app/sitemap.ts`)](#52-dynamic-xml-sitemap-appsitemapts)
- [6. Validation & Testing Tools](#6-validation--testing-tools)

---

## 1. SEO Strategy & Brand Identity

The SEO strategy is structured around three core search pillars:

1. **Personal Brand & Search Identity**:
   - `Madhan Alagarsamy`
   - `MADHAN A` / `Madhan A`
   - `madhanalagarsamy`
   - `Net Corporation Founder`
   - `Cybersecurity Researcher Hosur / Tamil Nadu / India`
2. **Technical Domain & Advisory Discoveries**:
   - `Security Research Blog & Advisories — Madhan Alagarsamy`
   - `Madhan Alagarsamy Blog` / `madhan alagarsamy blog`
   - Verified advisories: `GHSA-8rfq-rmx4-8qhr`, `GHSA-x3cj-mm38-329g`, `GHSA-9v52-vhvw-4w5c`, `apple/container #2261`
   - Target queries: `Apple Container ConnectHandler DoS`, `BigBlueButton IDOR Vulnerability`, `CI/CD Shell Injection`.
3. **Engineering Disciplines & Methodologies**:
   - Application Security (AppSec), Vulnerability Assessment & Penetration Testing (VAPT), Swift-NIO Security, GitHub Actions CI/CD Security, Insecure Direct Object References (IDOR).

---

## 2. Central SEO Configuration (`data/seo.ts`)

Located in [`data/seo.ts`](../data/seo.ts), this file serves as the centralized source of truth for domain URLs and keywords:

```typescript
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://madhanalagarsamy.site";

export const SEO_CONFIG = {
  defaultTitle: "Madhan Alagarsamy (MADHAN A) — Cybersecurity Researcher | Software Developer | Founder",
  titleTemplate: "%s | Madhan Alagarsamy",
  description: "Official technical portfolio and security research writelog of Madhan Alagarsamy...",
  author: "Madhan Alagarsamy",
  blogTitle: "Security Research Blog & Advisories — Madhan Alagarsamy",
  blogDescription: "Official Security Research Blog & Advisories by Madhan Alagarsamy...",
  keywords: [ /* Exhaustive targeted keyword matrix */ ],
  social: {
    github: "https://github.com/madhanalagarsamy",
    email: "amadhan882@gmail.com"
  }
};
```

---

## 3. Next.js 16 Metadata Engine

### 3.1 Root Layout Metadata (`app/layout.tsx`)

Configures site-wide default headers, canonical links, and social card previews:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SEO_CONFIG.defaultTitle,
    template: SEO_CONFIG.titleTemplate,
  },
  description: SEO_CONFIG.description,
  keywords: SEO_CONFIG.keywords,
  authors: [{ name: SEO_CONFIG.author, url: SITE_URL }],
  creator: SEO_CONFIG.author,
  publisher: SEO_CONFIG.author,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.description,
    url: SITE_URL,
    siteName: "Madhan Alagarsamy Portfolio & Research",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.description,
    creator: "@madhanalagarsamy",
  },
  category: "technology",
};
```

### 3.2 Blog Index Metadata (`app/blog/page.tsx`)

Overrides the title with an exact match for target queries:

```typescript
export const metadata: Metadata = {
  title: {
    absolute: SEO_CONFIG.blogTitle,
  },
  description: SEO_CONFIG.blogDescription,
  keywords: SEO_CONFIG.keywords,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: SEO_CONFIG.blogTitle,
    description: SEO_CONFIG.blogDescription,
    url: `${SITE_URL}/blog`,
    siteName: "Security Research Blog & Advisories — Madhan Alagarsamy",
    type: "website",
  },
};
```

### 3.3 Dynamic Article Metadata (`app/blog/[slug]/page.tsx`)

Generates targeted metadata for every vulnerability writeup at build time:

```typescript
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return { title: "Writeup Not Found" };

  return {
    title: `${post.title} — Security Research Blog & Advisories | Madhan Alagarsamy`,
    description: post.summary,
    keywords: [
      post.title,
      post.category,
      ...(post.advisoryId ? [post.advisoryId] : []),
      ...(post.targetRepo ? [post.targetRepo] : []),
      ...(post.cwe || []),
      ...post.tags,
    ],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} — Security Research Blog & Advisories | Madhan Alagarsamy`,
      description: post.summary,
      url: `${SITE_URL}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedDate,
      authors: ["Madhan Alagarsamy"],
      images: post.coverImage ? [{ url: `${SITE_URL}${post.coverImage}`, width: 1200, height: 675 }] : [],
    },
  };
}
```

---

## 4. Schema.org JSON-LD Knowledge Graph

The portfolio utilizes the [`components/JsonLd.tsx`](../components/JsonLd.tsx) component to deliver deep structured data to search engine crawlers.

### 4.1 `Person` Schema
Injected in [`app/layout.tsx`](../app/layout.tsx):
- Establishes entity recognition for **Madhan Alagarsamy**.
- Directly ties the author's identity to authoritative open-source security records via the `sameAs` array:
  - GitHub profile
  - Apple container issue `#2261`
  - GitHub Security Advisories (`GHSA-9v52-vhvw-4w5c`, `GHSA-8rfq-rmx4-8qhr`, `GHSA-x3cj-mm38-329g`)
- Enumerates verified competencies via `knowsAbout`.

### 4.2 `WebSite` & `ProfilePage` Schema
- Clarifies the authoritative source for Madhan Alagarsamy's digital presence.

### 4.3 `Blog` & `BlogPosting` Schema
Injected in [`app/blog/page.tsx`](../app/blog/page.tsx):
- Indexes the entire collection of technical writeups in a unified `Blog` schema with sub-entries (`blogPost`) for each published research piece.

### 4.4 `TechArticle` Schema for Research Posts
Injected in [`app/blog/[slug]/page.tsx`](../app/blog/[slug]/page.tsx):
- Types each writeup as a `TechArticle`.
- Binds advisory IDs to `about: { "@type": "Thing", "name": post.advisoryId }`.
- Binds target repositories to `about: { "@type": "SoftwareApplication", "name": post.targetRepo }`.
- Supplies article section tags, author entities, and modified timestamps.

### 4.5 `BreadcrumbList` Schema
Provides structured breadcrumb navigation:
- `Position 1`: Home (`/`)
- `Position 2`: Security Research Blog & Advisories (`/blog`)
- `Position 3`: Article Title (`/blog/[slug]`)

---

## 5. Crawler Directives & Discovery

### 5.1 Dynamic Robots.txt (`app/robots.ts`)

Directs web crawlers to index all portfolio and research routes while specifying sitemap locations:

```typescript
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
```

### 5.2 Dynamic XML Sitemap (`app/sitemap.ts`)

Iterates over all blog posts at build time to construct a complete XML sitemap:

```typescript
export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const currentDate = new Date();

  const blogUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [
    { url: SITE_URL, lastModified: currentDate, changeFrequency: "daily", priority: 1.0 },
    { url: `${SITE_URL}/blog`, lastModified: currentDate, changeFrequency: "daily", priority: 0.9 },
    ...blogUrls,
  ];
}
```

---

## 6. Validation & Testing Tools

To verify that structured data and metadata render accurately:

1. **Google Rich Results Test**:  
   [https://search.google.com/test/rich-results](https://search.google.com/test/rich-results)  
   Verify that `TechArticle`, `BreadcrumbList`, and `Person` are detected with 0 errors.

2. **Schema Markup Validator (Schema.org)**:  
   [https://validator.schema.org/](https://validator.schema.org/)  
   Inspect the complete interconnected JSON-LD entity graph.

3. **OpenGraph & Social Preview Checkers**:
   - [Twitter/X Card Validator](https://cards-dev.twitter.com/validator)
   - [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)

---

*Authored by Madhan Alagarsamy. Maintained under the architecture repository of [`https://madhanalagarsamy.site`](https://madhanalagarsamy.site).*
