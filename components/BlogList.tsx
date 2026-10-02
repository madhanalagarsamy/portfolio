"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ExternalLink, ArrowRight, AlertTriangle } from "lucide-react";
import type { BlogPost } from "@/data/posts";

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPosts = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return posts;

    return posts.filter((post) => {
      return (
        post.title.toLowerCase().includes(query) ||
        post.summary.toLowerCase().includes(query) ||
        post.tags.some((t) => t.toLowerCase().includes(query)) ||
        (post.advisoryId && post.advisoryId.toLowerCase().includes(query)) ||
        (post.targetRepo && post.targetRepo.toLowerCase().includes(query))
      );
    });
  }, [posts, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Search and Count Indicator */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center pb-2 border-b border-white/10">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search
            size={14}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none"
          />
          <input
            type="text"
            placeholder="Search advisories by keyword, CVE, or repository..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-neutral-950 border border-white/10 pl-9 pr-12 py-2 text-xs font-mono text-white placeholder-neutral-500 focus:outline-none focus:border-white/40 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-neutral-400 hover:text-white px-1.5 py-0.5 bg-white/5"
            >
              CLEAR
            </button>
          )}
        </div>

        {/* Post Count Indicator */}
        <div className="text-xs font-mono text-neutral-400 flex items-center space-x-2 shrink-0">
          <span className="w-1.5 h-1.5 bg-emerald-400" />
          <span>
            {filteredPosts.length} {filteredPosts.length === 1 ? "ADVISORY" : "ADVISORIES"}
          </span>
        </div>
      </div>

      {/* Posts List */}
      <div className="space-y-6">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-neutral-950 border border-white/10 px-4">
            <AlertTriangle className="mx-auto text-neutral-500 mb-3" size={24} />
            <p className="text-neutral-400 font-mono text-xs sm:text-sm">
              No security advisories matched your query.
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 px-4 py-2 bg-white/10 text-white font-mono text-xs hover:bg-white/20 transition-colors"
            >
              Reset Search
            </button>
          </div>
        ) : (
          filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="group relative bg-neutral-950 border border-white/10 hover:border-white/30 p-6 sm:p-8 transition-colors flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Meta Bar - Clean Plain Monospace Text, No Button/Pill Chips */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4 text-xs font-mono text-neutral-400">
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                    {post.advisoryId && (
                      <span className="text-emerald-400 font-semibold">{post.advisoryId}</span>
                    )}
                    {post.severity && (
                      <span>· {post.severity} Severity</span>
                    )}
                    {post.targetRepo && (
                      <span className="text-neutral-400 hidden sm:inline">· {post.targetRepo}</span>
                    )}
                  </div>

                  <div className="text-neutral-500 flex items-center space-x-2 text-[11px] sm:text-xs">
                    <span>{post.publishedDate}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl font-bold font-mono text-white group-hover:text-emerald-300 transition-colors mb-3 leading-snug break-words">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>

                {/* Summary */}
                <p className="text-sm text-neutral-300 font-light leading-relaxed mb-6">
                  {post.summary}
                </p>

                {/* Optional Cover Image Preview */}
                {post.coverImage && (
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block relative w-full h-44 sm:h-56 md:h-64 overflow-hidden mb-6 border border-white/10 bg-neutral-950 group/img"
                  >
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 850px"
                      className="object-cover transform group-hover/img:scale-[1.01] transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  </Link>
                )}
              </div>

              {/* Bottom Footer: Official Link & Read Action */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                <div>
                  {post.githubAdvisoryUrl && (
                    <a
                      href={post.githubAdvisoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-neutral-400 hover:text-white flex items-center space-x-1.5 transition-colors"
                      title="Open verified advisory on GitHub"
                    >
                      <span>OFFICIAL ADVISORY</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold text-white hover:text-emerald-400 transition-colors py-1 group/link"
                >
                  <span>READ WRITEUP</span>
                  <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform shrink-0" />
                </Link>
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
