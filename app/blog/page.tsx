import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogList from "@/components/BlogList";
import JsonLd from "@/components/JsonLd";
import { getAllPosts } from "@/data/posts";
import { SITE_URL, SEO_CONFIG } from "@/data/seo";
import { ChevronLeft } from "lucide-react";

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
    siteName: "Madhan Alagarsamy — Security Research & Advisories",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_CONFIG.blogTitle,
    description: SEO_CONFIG.blogDescription,
    creator: "@madhanalagarsamy",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Madhan Alagarsamy — Security Research & Advisories",
    headline: "Security Research & Advisories by Madhan Alagarsamy",
    description: SEO_CONFIG.blogDescription,
    url: `${SITE_URL}/blog`,
    inLanguage: "en-US",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog`,
    },
    author: {
      "@type": "Person",
      name: "Madhan Alagarsamy",
      alternateName: ["MADHAN A", "Madhan A"],
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      name: "Madhan Alagarsamy",
      url: SITE_URL,
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.summary,
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: post.publishedDate,
      author: {
        "@type": "Person",
        name: "Madhan Alagarsamy",
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Security Research & Advisories",
        item: `${SITE_URL}/blog`,
      },
    ],
  };

  return (
    <div className="relative min-h-screen bg-black text-[#f5f5f7] selection:bg-[#0071e3] selection:text-white">
      <JsonLd data={[blogSchema, breadcrumbSchema]} />

      <div className="relative z-10">
        <Navigation />

        <main className="max-w-5xl mx-auto px-5 sm:px-8 md:px-12 pt-24 sm:pt-32 pb-20 sm:pb-28">
          {/* Apple Breadcrumb / Back Link */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center space-x-1 text-xs text-[#2997ff] hover:text-[#70baff] hover:underline transition-colors group"
            >
              <ChevronLeft size={14} className="shrink-0 group-hover:-translate-x-0.5 transition-transform" />
              <span>Return to Overview</span>
            </Link>
          </div>

          {/* Apple Newsroom Editorial Header */}
          <header className="mb-12 pb-8 border-b border-white/[0.08]">
            <div className="text-[#2997ff] text-xs sm:text-sm font-semibold tracking-[-0.01em] mb-3">
              Apple Security Updates &amp; Coordinated Advisories
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-tight text-white mb-4">
              <span className="block bg-gradient-to-b from-[#ffffff] via-[#f5f5f7] to-[#86868b] bg-clip-text text-transparent">
                Security Advisories.
              </span>
              <span className="block text-[#f5f5f7]">
                Original Research &amp; Fixes.
              </span>
            </h1>

            <p className="text-[#86868b] text-base sm:text-lg font-normal max-w-3xl leading-relaxed">
              Vulnerability disclosures, verified GitHub Security Advisories, Apple open-source patches, and technical root-cause analyses authored by independent security researcher <strong>Madhan Alagarsamy</strong>.
            </p>
          </header>

          {/* Interactive Posts Listing (Apple Newsroom Style) */}
          <BlogList posts={posts} />
        </main>

        <Footer />
      </div>
    </div>
  );
}
