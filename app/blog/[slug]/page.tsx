import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import CodeBlockView from "@/components/CodeBlockView";
import ReadingProgress from "@/components/ReadingProgress";
import { getAllPosts, getPostBySlug } from "@/data/posts";
import { SITE_URL } from "@/data/seo";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Shield,
  ShieldAlert,
  CheckCircle2,
  Calendar,
  Clock,
  Tag,
  AlertTriangle,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Security Advisory Not Found",
    };
  }

  const postKeywords = [
    post.title,
    "Madhan Alagarsamy",
    "MADHAN A",
    post.category,
    ...(post.advisoryId ? [post.advisoryId] : []),
    ...(post.targetRepo ? [post.targetRepo] : []),
    ...(post.cwe || []),
    ...post.tags,
    "Vulnerability Research",
    "Security Advisory",
  ];

  return {
    title: `${post.title} — Security Advisory | Madhan Alagarsamy`,
    description: post.summary,
    keywords: postKeywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} — Security Advisory | Madhan Alagarsamy`,
      description: post.summary,
      url: `${SITE_URL}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedDate,
      authors: ["Madhan Alagarsamy"],
      tags: post.tags,
      siteName: "Madhan Alagarsamy — Security Research & Advisories",
      ...(post.coverImage
        ? {
            images: [
              {
                url: `${SITE_URL}${post.coverImage}`,
                width: 1200,
                height: 675,
                alt: post.title,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} — Security Advisory | Madhan Alagarsamy`,
      description: post.summary,
      creator: "@madhanalagarsamy",
      ...(post.coverImage ? { images: [`${SITE_URL}${post.coverImage}`] } : {}),
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: post.title,
    description: post.summary,
    url: `${SITE_URL}/blog/${post.slug}`,
    ...(post.coverImage ? { image: `${SITE_URL}${post.coverImage}` } : {}),
    datePublished: post.publishedDate,
    dateModified: post.publishedDate,
    author: {
      "@type": "Person",
      name: "Madhan Alagarsamy",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      name: "Madhan Alagarsamy",
      url: SITE_URL,
    },
    keywords: post.tags.join(", "),
    articleSection: post.category,
    about: [
      post.advisoryId ? { "@type": "Thing", name: post.advisoryId } : null,
      post.targetRepo ? { "@type": "SoftwareApplication", name: post.targetRepo } : null,
    ].filter(Boolean),
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
        name: "Security Advisories",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${SITE_URL}/blog/${post.slug}`,
      },
    ],
  };

  const isCritical = post.severity?.toLowerCase() === "critical";
  const isHigh = post.severity?.toLowerCase() === "high";

  return (
    <div className="relative min-h-screen bg-black text-[#f5f5f7] selection:bg-[#0071e3] selection:text-white">
      <ReadingProgress />
      <JsonLd data={[articleSchema, breadcrumbSchema]} />

      <div className="relative z-10">
        <Navigation />

        <main className="max-w-4xl mx-auto px-5 sm:px-8 md:px-12 pt-24 sm:pt-32 pb-20 sm:pb-28">
          {/* Apple Breadcrumbs */}
          <nav className="flex items-center space-x-1.5 text-xs text-[#86868b] mb-8 overflow-x-auto py-1">
            <Link href="/" className="hover:text-white transition-colors shrink-0">
              Overview
            </Link>
            <ChevronRight size={13} className="shrink-0 text-[#6e6e73]" />
            <Link href="/blog" className="hover:text-white transition-colors shrink-0">
              Security Advisories
            </Link>
            <ChevronRight size={13} className="shrink-0 text-[#6e6e73]" />
            <span className="text-[#f5f5f7] truncate max-w-[200px] sm:max-w-xs">{post.slug}</span>
          </nav>

          {/* Article Header (Apple Platform Security Style) */}
          <header className="mb-12 pb-10 border-b border-white/[0.08]">
            {/* Badges / Advisory ID */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs text-[#86868b] uppercase tracking-wider font-semibold">
                {post.category}
              </span>
              {post.advisoryId && (
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#2997ff]/10 border border-[#2997ff]/25 text-[#2997ff] font-mono text-xs font-semibold">
                  <Shield size={13} className="shrink-0" />
                  <span>{post.advisoryId}</span>
                </span>
              )}
              {post.severity && (
                <span
                  className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                    isCritical
                      ? "bg-[#ff453a]/15 border border-[#ff453a]/30 text-[#ff453a]"
                      : isHigh
                      ? "bg-[#ff9f0a]/15 border border-[#ff9f0a]/30 text-[#ff9f0a]"
                      : "bg-[#30d158]/15 border border-[#30d158]/30 text-[#30d158]"
                  }`}
                >
                  <ShieldAlert size={13} className="shrink-0" />
                  <span>SEVERITY: {post.severity}</span>
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-[-0.03em] text-white mb-6 leading-tight break-words">
              {post.title}
            </h1>

            {/* Target Repo & CWEs Bento Strip */}
            {post.targetRepo && (
              <div className="bg-[#161617] border border-white/[0.08] rounded-[22px] p-5 mb-8 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="break-all">
                    <span className="text-[#86868b] block text-[11px] font-semibold uppercase tracking-wider mb-0.5">TARGET REPOSITORY</span>
                    <span className="text-white font-medium">{post.targetRepo}</span>
                  </div>
                  {post.patchedVersions && (
                    <div className="break-words">
                      <span className="text-[#86868b] block text-[11px] font-semibold uppercase tracking-wider mb-0.5">PATCHED VERSIONS</span>
                      <span className="text-[#30d158] font-medium">
                        {post.patchedVersions.join(", ")}
                      </span>
                    </div>
                  )}
                  {post.cwe && (
                    <div className="sm:col-span-2 break-words pt-2 border-t border-white/[0.06]">
                      <span className="text-[#86868b] text-[11px] font-semibold uppercase tracking-wider mr-2">CWE CLASSIFICATION:</span>
                      <span className="text-[#f5f5f7] font-mono">{post.cwe.join(" · ")}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Metadata Bar & External CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#86868b]">
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex items-center space-x-1.5 shrink-0">
                  <Calendar size={13} className="shrink-0" />
                  <span>{post.publishedDate}</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1.5 shrink-0">
                  <Clock size={13} className="shrink-0" />
                  <span>{post.readTime}</span>
                </span>
                <span>•</span>
                <span className="text-[#f5f5f7] font-medium shrink-0">Madhan Alagarsamy</span>
              </div>

              {post.githubAdvisoryUrl && (
                <a
                  href={post.githubAdvisoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-1.5 px-4 py-2 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs font-normal transition-all w-full sm:w-auto shadow-sm"
                >
                  <span>
                    {post.advisoryId?.startsWith("GHSA")
                      ? "Official GitHub Advisory"
                      : "Official Issue & Patch"}
                  </span>
                  <ExternalLink size={12} className="shrink-0" />
                </a>
              )}
            </div>
          </header>

          {/* Hero / Cover Image */}
          {post.coverImage && (
            <div className="relative w-full rounded-[28px] overflow-hidden border border-white/[0.08] bg-[#161617] mb-12 aspect-[1376/768] shadow-2xl">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
          )}

          {/* Article Body */}
          <article className="space-y-10 sm:space-y-12">
            {/* Executive Summary */}
            <section className="bg-[#161617] border border-white/[0.08] rounded-[28px] p-6 sm:p-8 md:p-10">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-[#2997ff] mb-4 flex items-center space-x-2">
                <Shield size={15} className="shrink-0" />
                <span>Executive Summary</span>
              </h2>
              <p className="text-base sm:text-lg text-[#f5f5f7] font-normal leading-relaxed break-words whitespace-pre-line">
                {post.overview}
              </p>
            </section>

            {/* Coordinated Disclosure Timeline */}
            {post.timeline && post.timeline.length > 0 && (
              <section className="bg-[#161617] border border-white/[0.08] rounded-[28px] p-6 sm:p-8 md:p-10">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-[#86868b] mb-6 flex items-center space-x-2">
                  <CheckCircle2 size={15} className="text-[#30d158] shrink-0" />
                  <span>Coordinated Disclosure Timeline</span>
                </h2>
                <div className="space-y-4">
                  {post.timeline.map((step, idx) => (
                    <div key={idx} className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#30d158] mt-1.5 shrink-0" />
                      <div className="flex-1 min-w-0">
                        <span className="text-xs font-medium text-[#86868b]">
                          {step.date}:
                        </span>
                        <p className="text-sm sm:text-base text-[#f5f5f7] mt-0.5 break-words">
                          {step.event}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Technical Vulnerability Details */}
            {post.vulnerabilityDetails.map((sec, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight flex items-start space-x-2.5 break-words">
                  <span className="text-[#86868b] font-normal text-base shrink-0 mt-0.5">0{idx + 1}.</span>
                  <span className="flex-1 min-w-0">{sec.heading}</span>
                </h2>
                <p className="text-sm sm:text-base text-[#a1a1a6] font-normal leading-relaxed break-words whitespace-pre-line">
                  {sec.description}
                </p>

                {sec.codeSnippet && (
                  <CodeBlockView
                    code={sec.codeSnippet.code}
                    language={sec.codeSnippet.language}
                    caption={sec.codeSnippet.caption}
                  />
                )}
              </section>
            ))}

            {/* PoC Steps */}
            {post.poc && (
              <section className="bg-[#161617] border border-[#ff9f0a]/30 rounded-[28px] p-6 sm:p-8 md:p-10">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-[#ff9f0a] mb-4 flex items-center space-x-2">
                  <AlertTriangle size={15} className="shrink-0" />
                  <span>Reproduction &amp; Proof of Concept (PoC)</span>
                </h2>
                <p className="text-sm sm:text-base text-[#a1a1a6] font-normal mb-5 break-words">
                  {post.poc.description}
                </p>
                <ol className="list-decimal list-outside ml-5 space-y-2 text-sm sm:text-base text-[#f5f5f7]">
                  {post.poc.steps.map((st, i) => (
                    <li key={i} className="pl-1 break-words">
                      <span>{st}</span>
                    </li>
                  ))}
                </ol>

                {post.poc.requestSnippet && (
                  <CodeBlockView
                    code={post.poc.requestSnippet.code}
                    language={post.poc.requestSnippet.language}
                    caption={post.poc.requestSnippet.caption || "Proof of Concept Payload"}
                  />
                )}
              </section>
            )}

            {/* Impact */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight break-words">
                Impact &amp; Blast Radius
              </h2>
              <div className="bg-[#161617] border border-white/[0.08] rounded-[24px] p-6 text-sm sm:text-base text-[#a1a1a6] leading-relaxed break-words whitespace-pre-line">
                {post.impact}
              </div>
            </section>

            {/* Remediation */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight break-words">
                Remediation &amp; Mitigation
              </h2>
              <div className="bg-[#161617] border border-[#30d158]/30 rounded-[24px] p-6 text-sm sm:text-base text-[#a1a1a6] leading-relaxed break-words whitespace-pre-line">
                {post.remediation}
              </div>

              {post.patchDetails && (
                <div className="mt-4">
                  {post.patchDetails.description && (
                    <div className="p-4 rounded-[18px] bg-white/[0.04] border border-white/[0.08] text-xs text-[#a1a1a6] mb-3">
                      {post.patchDetails.description}
                    </div>
                  )}
                  {post.patchDetails.codeSnippet && (
                    <CodeBlockView
                      code={post.patchDetails.codeSnippet.code}
                      language={post.patchDetails.codeSnippet.language}
                      caption={post.patchDetails.codeSnippet.caption || "Official Fix / Patched Code"}
                    />
                  )}
                </div>
              )}
            </section>

            {/* References */}
            {post.references && post.references.length > 0 && (
              <section className="pt-8 border-t border-white/[0.08]">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#86868b] mb-4">
                  References &amp; Documentation
                </h3>
                <ul className="space-y-2.5">
                  {post.references.map((ref, idx) => (
                    <li key={idx}>
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-sm text-[#2997ff] hover:underline break-words"
                      >
                        <ExternalLink size={13} className="shrink-0" />
                        <span className="break-all">{ref.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-white/[0.08]">
              <Tag size={14} className="text-[#86868b] shrink-0" />
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs text-[#86868b] bg-[#1d1d1f] px-3 py-1 rounded-full border border-white/[0.06]"
                >
                  #{t}
                </span>
              ))}
            </div>

            {/* Apple Back Actions */}
            <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center space-x-1.5 text-sm bg-[#0071e3] hover:bg-[#0077ed] text-white px-6 py-2.5 rounded-full transition-all text-center"
              >
                <ChevronLeft size={16} className="shrink-0" />
                <span>Back to All Advisories</span>
              </Link>

              <Link
                href="/"
                className="inline-flex items-center justify-center space-x-1 text-sm text-[#2997ff] hover:text-[#70baff] hover:underline transition-colors text-center py-2"
              >
                <span>Return to Overview</span>
                <ChevronRight size={15} />
              </Link>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </div>
  );
}
