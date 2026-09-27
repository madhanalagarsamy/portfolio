import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getAllPosts, getPostBySlug } from "@/data/posts";
import {
  ArrowLeft,
  ExternalLink,
  Shield,
  ShieldAlert,
  CheckCircle2,
  Calendar,
  Clock,
  Tag,
  AlertTriangle,
  Code2,
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
      title: "Writeup Not Found",
    };
  }

  return {
    title: `${post.title} — Madhan Alagarsamy`,
    description: post.summary,
    openGraph: {
      title: `${post.title} — Madhan Alagarsamy`,
      description: post.summary,
      type: "article",
      publishedTime: post.publishedDate,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/5 blur-[130px] pointer-events-none" />

      <div className="relative z-10">
        <Navigation />

        <main className="max-w-4xl mx-auto px-6 md:px-12 pt-32 pb-24">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-xs font-mono text-neutral-400 mb-8 overflow-x-auto">
            <Link href="/" className="hover:text-white transition-colors">
              HOME
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">
              BLOG
            </Link>
            <span>/</span>
            <span className="text-neutral-500 truncate max-w-xs">{post.slug}</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12 pb-10 border-b border-white/10">
            {/* Badges / Advisory ID */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-2.5 py-1 rounded bg-white/[0.06] border border-white/10 text-xs font-mono text-neutral-300 uppercase">
                {post.category}
              </span>
              {post.advisoryId && (
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold">
                  <Shield size={13} />
                  <span>{post.advisoryId}</span>
                </span>
              )}
              {post.severity && (
                <span
                  className={`inline-flex items-center space-x-1 px-3 py-1 rounded font-mono text-xs font-medium uppercase ${
                    post.severity.toLowerCase() === "critical"
                      ? "bg-rose-500/15 border border-rose-500/40 text-rose-300 font-bold shadow-[0_0_12px_rgba(244,63,94,0.25)]"
                      : post.severity.toLowerCase() === "high"
                      ? "bg-orange-500/15 border border-orange-500/40 text-orange-300 font-semibold"
                      : "bg-amber-500/10 border border-amber-500/30 text-amber-300 font-medium"
                  }`}
                >
                  <ShieldAlert size={13} />
                  <span>SEVERITY: {post.severity}</span>
                </span>
              )}
            </div>

            <h1 className="text-2xl md:text-4xl font-extrabold font-mono tracking-tight text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Target Repo & CWEs */}
            {post.targetRepo && (
              <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4 mb-6 text-xs font-mono">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <span className="text-neutral-500">TARGET REPOSITORY: </span>
                    <span className="text-white font-medium">{post.targetRepo}</span>
                  </div>
                  {post.patchedVersions && (
                    <div>
                      <span className="text-neutral-500">PATCHED VERSIONS: </span>
                      <span className="text-emerald-300 font-medium">
                        {post.patchedVersions.join(", ")}
                      </span>
                    </div>
                  )}
                  {post.cwe && (
                    <div className="sm:col-span-2">
                      <span className="text-neutral-500">CWE CLASSIFICATION: </span>
                      <span className="text-neutral-300">{post.cwe.join(" · ")}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-neutral-400">
              <div className="flex items-center space-x-4">
                <span className="flex items-center space-x-1.5">
                  <Calendar size={13} />
                  <span>{post.publishedDate}</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1.5">
                  <Clock size={13} />
                  <span>{post.readTime}</span>
                </span>
                <span>•</span>
                <span className="text-neutral-300">MADHAN A</span>
              </div>

              {post.githubAdvisoryUrl && (
                <a
                  href={post.githubAdvisoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all font-mono text-xs"
                >
                  <span>
                    {post.advisoryId?.startsWith("GHSA")
                      ? "OFFICIAL GITHUB ADVISORY"
                      : "OFFICIAL ISSUE & FIX"}
                  </span>
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
          </header>

          {/* Article Body */}
          <article className="space-y-12">
            {/* Overview / Executive Summary */}
            <section className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 flex items-center space-x-2">
                <Shield size={14} />
                <span>EXECUTIVE SUMMARY</span>
              </h2>
              <p className="text-sm md:text-base text-neutral-200 font-light leading-relaxed">
                {post.overview}
              </p>
            </section>

            {/* Coordinated Disclosure Timeline */}
            {post.timeline && post.timeline.length > 0 && (
              <section className="border border-white/10 rounded-2xl p-6 md:p-8 bg-black/40">
                <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-6 flex items-center space-x-2">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>COORDINATED DISCLOSURE TIMELINE</span>
                </h2>
                <div className="space-y-4">
                  {post.timeline.map((step, idx) => (
                    <div key={idx} className="flex items-start space-x-4">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      <div className="flex-1">
                        <span className="text-xs font-mono text-neutral-400 font-medium">
                          {step.date}:
                        </span>
                        <p className="text-xs md:text-sm text-neutral-200 font-mono mt-0.5">
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
                <h2 className="text-lg md:text-xl font-bold font-mono text-white flex items-center space-x-2">
                  <span className="text-neutral-500 font-light text-base">0{idx + 1}.</span>
                  <span>{sec.heading}</span>
                </h2>
                <p className="text-sm md:text-base text-neutral-300 font-light leading-relaxed">
                  {sec.description}
                </p>

                {sec.codeSnippet && (
                  <div className="mt-4 rounded-xl overflow-hidden border border-white/10 bg-neutral-950">
                    {sec.codeSnippet.caption && (
                      <div className="px-4 py-2 border-b border-white/10 bg-white/[0.02] flex items-center justify-between text-xs font-mono text-neutral-400">
                        <span className="flex items-center space-x-2">
                          <Code2 size={13} className="text-emerald-400" />
                          <span>{sec.codeSnippet.caption}</span>
                        </span>
                        <span className="uppercase text-[10px] text-neutral-500">
                          {sec.codeSnippet.language}
                        </span>
                      </div>
                    )}
                    <pre className="p-4 text-xs font-mono text-neutral-200 overflow-x-auto leading-relaxed">
                      <code>{sec.codeSnippet.code}</code>
                    </pre>
                  </div>
                )}
              </section>
            ))}

            {/* PoC Steps */}
            {post.poc && (
              <section className="bg-amber-500/[0.03] border border-amber-500/20 rounded-2xl p-6 md:p-8">
                <h2 className="text-xs font-mono uppercase tracking-widest text-amber-300 mb-3 flex items-center space-x-2">
                  <AlertTriangle size={14} />
                  <span>REPRODUCTION & PROOF OF CONCEPT (PoC)</span>
                </h2>
                <p className="text-sm text-neutral-300 font-light mb-4">
                  {post.poc.description}
                </p>
                <ol className="list-decimal list-inside space-y-2 text-xs md:text-sm font-mono text-neutral-300">
                  {post.poc.steps.map((st, i) => (
                    <li key={i} className="pl-1">
                      <span className="text-neutral-200">{st}</span>
                    </li>
                  ))}
                </ol>

                {post.poc.requestSnippet && (
                  <div className="mt-4 rounded-xl overflow-hidden border border-white/10 bg-black">
                    <pre className="p-4 text-xs font-mono text-neutral-200 overflow-x-auto">
                      <code>{post.poc.requestSnippet.code}</code>
                    </pre>
                  </div>
                )}
              </section>
            )}

            {/* Impact */}
            <section className="space-y-3">
              <h2 className="text-lg md:text-xl font-bold font-mono text-white">
                IMPACT & BLAST RADIUS
              </h2>
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 text-sm md:text-base text-neutral-300 font-light leading-relaxed">
                {post.impact}
              </div>
            </section>

            {/* Remediation */}
            <section className="space-y-3">
              <h2 className="text-lg md:text-xl font-bold font-mono text-white">
                REMEDIATION & MITIGATION
              </h2>
              <div className="p-5 rounded-xl bg-emerald-500/[0.03] border border-emerald-500/20 text-sm md:text-base text-neutral-300 font-light leading-relaxed">
                {post.remediation}
              </div>

              {post.patchDetails && (
                <div className="mt-4 rounded-xl overflow-hidden border border-white/10 bg-neutral-950">
                  <div className="px-4 py-2 border-b border-white/10 bg-white/[0.02] text-xs font-mono text-neutral-400">
                    {post.patchDetails.description}
                  </div>
                  {post.patchDetails.codeSnippet && (
                    <pre className="p-4 text-xs font-mono text-emerald-300/90 overflow-x-auto">
                      <code>{post.patchDetails.codeSnippet.code}</code>
                    </pre>
                  )}
                </div>
              )}
            </section>

            {/* References */}
            {post.references && post.references.length > 0 && (
              <section className="pt-6 border-t border-white/10">
                <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">
                  REFERENCES & DOCUMENTATION
                </h3>
                <ul className="space-y-2">
                  {post.references.map((ref, idx) => (
                    <li key={idx}>
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-xs font-mono text-emerald-400 hover:underline"
                      >
                        <ExternalLink size={12} />
                        <span>{ref.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/10">
              <Tag size={13} className="text-neutral-500" />
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono text-neutral-400 bg-white/[0.03] px-2.5 py-1 rounded border border-white/5"
                >
                  #{t}
                </span>
              ))}
            </div>

            {/* Back to Blog Button */}
            <div className="pt-8 flex items-center justify-between">
              <Link
                href="/blog"
                className="inline-flex items-center space-x-2 text-xs font-mono text-neutral-400 hover:text-white px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all"
              >
                <ArrowLeft size={14} />
                <span>BACK TO ALL WRITEUPS</span>
              </Link>

              <Link
                href="/"
                className="text-xs font-mono text-neutral-400 hover:text-white transition-colors"
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
