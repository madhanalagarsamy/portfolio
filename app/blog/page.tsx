import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogList from "@/components/BlogList";
import JsonLd from "@/components/JsonLd";
import { getAllPosts } from "@/data/posts";
import { SITE_URL, SEO_CONFIG } from "@/data/seo";
import { ArrowLeft, Terminal, Shield } from "lucide-react";

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
    siteName: "Madhan Alagarsamy Blog",
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
    name: "Madhan Alagarsamy Blog",
    alternateName: [
      "Madhan Alagarsamy Security Blog",
      "Madhan Alagarsamy Research Blog",
      "MADHAN A Blog",
      "Madhan Alagarsamy Technical Blog",
    ],
    headline: "Madhan Alagarsamy Blog — Cybersecurity Research & Vulnerability Disclosures",
    description: SEO_CONFIG.blogDescription,
    url: `${SITE_URL}/blog`,
    inLanguage: "en-US",
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
        name: "Madhan Alagarsamy Blog",
        item: `${SITE_URL}/blog`,
      },
    ],
  };

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <JsonLd data={[blogSchema, breadcrumbSchema]} />

      {/* Ambient background grid & glow */}
      <div className="fixed inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10">
        <Navigation />

        <main className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 pt-24 sm:pt-32 pb-16 sm:pb-24">
          {/* Back link */}
          <div className="mb-6 sm:mb-8">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-[11px] sm:text-xs font-mono text-neutral-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={13} className="shrink-0" />
              <span>RETURN TO MAIN PORTFOLIO</span>
            </Link>
          </div>

          {/* Page Header */}
          <header className="mb-10 sm:mb-14 pb-6 sm:pb-8 border-b border-white/10">
            <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-mono text-emerald-400 mb-3 tracking-wider uppercase">
              <span className="flex items-center space-x-1.5">
                <Terminal size={13} className="shrink-0" />
                <span>~/MADHAN-A/BLOG</span>
              </span>
              <span className="text-neutral-600 hidden xs:inline">|</span>
              <span className="text-neutral-400 flex items-center space-x-1">
                <Shield size={12} className="text-emerald-400 shrink-0" />
                <span>CYBERSECURITY RESEARCH WRITELOG</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold font-mono tracking-tight text-white mb-2 break-words">
              MADHAN ALAGARSAMY BLOG
            </h1>

            <p className="text-emerald-400 font-mono text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4 font-semibold break-words">
              Cybersecurity Research, Vulnerability Disclosures & Technical Writeups
            </p>

            <p className="text-neutral-400 text-xs sm:text-sm md:text-base font-light max-w-3xl leading-relaxed">
              Official <strong>Madhan Alagarsamy Blog</strong> by independent cybersecurity researcher and developer <strong>Madhan Alagarsamy (MADHAN A)</strong>. Featuring in-depth technical writeups on discovered vulnerabilities, verified GitHub Security Advisories, Apple container patches, IDOR proofs of concept, and application security architecture.
            </p>
          </header>

          {/* Interactive Posts Listing */}
          <BlogList posts={posts} />
        </main>

        <Footer />
      </div>
    </div>
  );
}
