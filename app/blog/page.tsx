import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogList from "@/components/BlogList";
import JsonLd from "@/components/JsonLd";
import { getAllPosts } from "@/data/posts";
import { SITE_URL, SEO_CONFIG } from "@/data/seo";
import { ArrowLeft } from "lucide-react";

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
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <JsonLd data={[blogSchema, breadcrumbSchema]} />

      {/* Subtle fine technical grid */}
      <div className="fixed inset-0 bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="relative z-10">
        <Navigation />

        <main className="max-w-5xl mx-auto px-5 sm:px-8 md:px-12 pt-28 sm:pt-36 pb-20 sm:pb-28">
          {/* Back link */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors group"
            >
              <ArrowLeft size={14} className="shrink-0 group-hover:-translate-x-1 transition-transform" />
              <span>RETURN TO PORTFOLIO</span>
            </Link>
          </div>

          {/* Clean Editorial Header */}
          <header className="mb-12 pb-8 border-b border-white/10">
            <div className="flex items-center space-x-2.5 font-mono text-xs text-emerald-400 mb-4 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 bg-emerald-400 shrink-0" />
              <span>COORDINATED VULNERABILITY DISCLOSURES &amp; ADVISORIES</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-mono tracking-tight text-white mb-3">
              SECURITY RESEARCH & ADVISORIES
            </h1>

            <p className="text-neutral-400 text-sm sm:text-base font-light max-w-3xl leading-relaxed">
              Original vulnerability research, verified GitHub Security Advisories, Apple open-source patches, and technical root-cause analyses authored by independent security researcher <strong>Madhan Alagarsamy</strong>.
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
