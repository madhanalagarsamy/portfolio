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
  ArrowLeft,
  ExternalLink,
  Shield,
  CheckCircle2,
  Calendar,
  Clock,
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
        name: "Security Research & Advisories",
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

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <ReadingProgress />
      <JsonLd data={[articleSchema, breadcrumbSchema]} />

      {/* Subtle fine technical grid */}
      <div className="fixed inset-0 bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="relative z-10">
        <Navigation />

        <main className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 pt-24 sm:pt-32 pb-16 sm:pb-24">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-[11px] sm:text-xs font-mono text-neutral-400 mb-6 sm:mb-8 overflow-x-auto py-1">
            <Link href="/" className="hover:text-white transition-colors shrink-0">
              HOME
            </Link>
            <span className="shrink-0 text-neutral-600">/</span>
            <Link href="/blog" className="hover:text-white transition-colors shrink-0">
              SECURITY ADVISORIES
            </Link>
            <span className="shrink-0 text-neutral-600">/</span>
            <span className="text-neutral-400 truncate max-w-[140px] sm:max-w-xs">{post.slug}</span>
          </nav>

          {/* Article Header */}
          <header className="mb-10 sm:mb-12 pb-6 sm:pb-10 border-b border-white/10">
            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4 text-xs font-mono text-neutral-400">
              <span className="text-neutral-300 uppercase tracking-wider">{post.category}</span>
              {post.advisoryId && (
                <>
                  <span className="text-neutral-600">•</span>
                  <span className="text-emerald-400 font-semibold">{post.advisoryId}</span>
                </>
              )}
              {post.severity && (
                <>
                  <span className="text-neutral-600">•</span>
                  <span className="text-neutral-300 uppercase">SEVERITY: {post.severity}</span>
                </>
              )}
            </div>

            <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold font-mono tracking-tight text-white mb-4 sm:mb-6 leading-snug break-words">
              {post.title}
            </h1>

            {/* Target Repo & CWEs */}
            {post.targetRepo && (
              <div className="bg-neutral-950 border border-white/10 p-4 mb-6 text-xs font-mono">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  <div className="break-all">
                    <span className="text-neutral-500">TARGET REPOSITORY: </span>
                    <span className="text-white font-medium">{post.targetRepo}</span>
                  </div>
                  {post.patchedVersions && (
                    <div className="break-words">
                      <span className="text-neutral-500">PATCHED VERSIONS: </span>
                      <span className="text-emerald-300 font-medium">
                        {post.patchedVersions.join(", ")}
                      </span>
                    </div>
                  )}
                  {post.cwe && (
                    <div className="sm:col-span-2 break-words">
                      <span className="text-neutral-500">CWE CLASSIFICATION: </span>
                      <span className="text-neutral-300">{post.cwe.join(" · ")}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Metadata Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 text-xs font-mono text-neutral-400">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs">
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
                <span className="text-neutral-300 shrink-0">MADHAN A</span>
              </div>

              {post.githubAdvisoryUrl && (
                <a
                  href={post.githubAdvisoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-1.5 px-3 py-1.5 bg-white/5 border border-white/10 text-white hover:border-white/30 transition-colors font-mono text-xs w-full sm:w-auto"
                >
                  <span>
                    {post.advisoryId?.startsWith("GHSA")
                      ? "OFFICIAL GITHUB ADVISORY"
                      : post.githubAdvisoryUrl?.includes("/pull/")
                      ? "OFFICIAL PR & UPSTREAM FIX"
                      : "OFFICIAL ISSUE & FIX"}
                  </span>
                  <ExternalLink size={12} className="shrink-0" />
                </a>
              )}
            </div>
          </header>

          {/* Hero / Cover Image */}
          {post.coverImage && (
            <div className="relative w-full overflow-hidden border border-white/10 bg-neutral-950 mb-8 sm:mb-12 group aspect-[1376/768]">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover transform group-hover:scale-[1.01] transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
          )}

          {/* Article Body */}
          <article className="space-y-8 sm:space-y-12">
            {/* Overview / Executive Summary */}
            <section className="bg-neutral-950 border border-white/10 p-5 sm:p-7 md:p-8">
              <h2 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest text-emerald-400 mb-3 flex items-center space-x-2">
                <Shield size={14} className="shrink-0" />
                <span>EXECUTIVE SUMMARY</span>
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-neutral-200 font-light leading-relaxed break-words whitespace-pre-line">
                {post.overview}
              </p>
            </section>

            {/* Coordinated Disclosure Timeline */}
            {post.timeline && post.timeline.length > 0 && (
              <section className="border border-white/10 p-5 sm:p-7 md:p-8 bg-neutral-950">
                <h2 className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400 mb-5 sm:mb-6 flex items-center space-x-2">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                  <span>COORDINATED DISCLOSURE TIMELINE</span>
                </h2>
                <div className="space-y-3.5 sm:space-y-4">
                  {post.timeline.map((step, idx) => (
                    <div key={idx} className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-1.5 h-1.5 bg-emerald-400 mt-2 shrink-0" />
                      <div className="flex-1 min-w-0">
                        <span className="text-[11px] sm:text-xs font-mono text-neutral-400 font-medium">
                          {step.date}:
                        </span>
                        <p className="text-xs sm:text-sm text-neutral-200 font-mono mt-0.5 break-words">
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
              <section key={idx} className="space-y-3 sm:space-y-4">
                <h2 className="text-base sm:text-lg md:text-xl font-bold font-mono text-white flex items-start space-x-2.5 break-words">
                  <span className="text-neutral-500 font-light text-sm sm:text-base shrink-0 mt-0.5">0{idx + 1}.</span>
                  <span className="flex-1 min-w-0">{sec.heading}</span>
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-neutral-300 font-light leading-relaxed break-words whitespace-pre-line">
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
              <section className="border border-white/10 bg-neutral-950 p-5 sm:p-7 md:p-8">
                <h2 className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-amber-300 mb-3 flex items-center space-x-2">
                  <AlertTriangle size={14} className="shrink-0" />
                  <span>REPRODUCTION &amp; PROOF OF CONCEPT (PoC)</span>
                </h2>
                <p className="text-xs sm:text-sm text-neutral-300 font-light mb-4 break-words">
                  {post.poc.description}
                </p>
                <ol className="list-decimal list-outside ml-4 sm:ml-5 space-y-2 sm:space-y-2.5 text-xs sm:text-sm font-mono text-neutral-300">
                  {post.poc.steps.map((st, i) => (
                    <li key={i} className="pl-1 break-words">
                      <span className="text-neutral-200">{st}</span>
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
            <section className="space-y-2.5 sm:space-y-3">
              <h2 className="text-base sm:text-lg md:text-xl font-bold font-mono text-white break-words">
                IMPACT &amp; BLAST RADIUS
              </h2>
              <div className="p-5 sm:p-6 bg-neutral-950 border border-white/10 text-xs sm:text-sm md:text-base text-neutral-300 font-light leading-relaxed break-words whitespace-pre-line">
                {post.impact}
              </div>
            </section>

            {/* Remediation */}
            <section className="space-y-2.5 sm:space-y-3">
              <h2 className="text-base sm:text-lg md:text-xl font-bold font-mono text-white break-words">
                REMEDIATION &amp; MITIGATION
              </h2>
              <div className="p-5 sm:p-6 bg-neutral-950 border border-white/10 text-xs sm:text-sm md:text-base text-neutral-300 font-light leading-relaxed break-words whitespace-pre-line">
                {post.remediation}
              </div>

              {post.patchDetails && (
                <div className="mt-4">
                  {post.patchDetails.description && (
                    <div className="p-3.5 bg-neutral-950 border border-white/10 text-xs font-mono text-neutral-300 mb-2">
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
              <section className="pt-6 border-t border-white/10">
                <h3 className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3 sm:mb-4">
                  REFERENCES &amp; DOCUMENTATION
                </h3>
                <ul className="space-y-2">
                  {post.references.map((ref, idx) => (
                    <li key={idx}>
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-start space-x-2 text-xs font-mono text-neutral-300 hover:text-emerald-400 transition-colors break-words"
                      >
                        <ExternalLink size={12} className="shrink-0 mt-0.5" />
                        <span className="break-all">{ref.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}


            {/* Back to Blog Button */}
            <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center space-x-2 text-xs font-mono text-neutral-300 hover:text-white px-4 py-2 bg-white/5 border border-white/10 hover:border-white/30 transition-colors text-center"
              >
                <ArrowLeft size={14} className="shrink-0" />
                <span>BACK TO ALL ADVISORIES</span>
              </Link>

              <Link
                href="/"
                className="text-xs font-mono text-neutral-400 hover:text-white transition-colors text-center py-2"
              >
                RETURN HOME
              </Link>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </div>
  );
}
