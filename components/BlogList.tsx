"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Tag, ExternalLink, ArrowRight, ShieldCheck, AlertTriangle } from "lucide-react";
import type { BlogPost } from "@/data/posts";

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  const [selectedTag, setSelectedTag] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    posts.forEach((p) => {
      p.tags.forEach((t) => tagsSet.add(t));
    });
    return ["ALL", ...Array.from(tagsSet)];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesTag =
        selectedTag === "ALL" || post.tags.includes(selectedTag);
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.summary.toLowerCase().includes(query) ||
        post.tags.some((t) => t.toLowerCase().includes(query)) ||
        (post.advisoryId && post.advisoryId.toLowerCase().includes(query));

      return matchesTag && matchesSearch;
    });
  }, [posts, selectedTag, searchQuery]);

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Search and Tag Filtering Controls */}
      <div className="flex flex-col md:flex-row gap-3 sm:gap-4 justify-between items-stretch md:items-center">
        {/* Search Bar */}
        <div className="relative flex-1 w-full max-w-full md:max-w-md">
          <Search
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"
          />
          <input
            type="text"
            placeholder="Search writeups, CVE, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/[0.04] border border-white/10 rounded-xl pl-10 pr-12 py-2.5 text-xs font-mono text-white placeholder-neutral-500 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] font-mono text-neutral-400 hover:text-white px-1 py-0.5"
            >
              CLEAR
            </button>
          )}
        </div>

        {/* Post Count Indicator */}
        <div className="text-xs font-mono text-neutral-400 flex items-center space-x-2 shrink-0">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>
            SHOWING {filteredPosts.length} OF {posts.length} ARTICLES
          </span>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
        {allTags.map((tag) => {
          const isActive = selectedTag === tag;
          return (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-white text-black font-semibold shadow-md shadow-white/10"
                  : "bg-white/[0.03] text-neutral-400 border border-white/10 hover:border-white/25 hover:text-white"
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>

      {/* Posts List */}
      <div className="space-y-4 sm:space-y-6">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12 sm:py-16 bg-white/[0.02] border border-white/10 rounded-2xl px-4">
            <AlertTriangle className="mx-auto text-neutral-500 mb-3" size={28} />
            <p className="text-neutral-400 font-mono text-xs sm:text-sm">
              No writeups found matching your query.
            </p>
            <button
              onClick={() => {
                setSelectedTag("ALL");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-white/10 text-white font-mono text-xs hover:bg-white/20 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="group relative bg-black/40 border border-white/10 hover:border-emerald-500/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.08)] flex flex-col justify-between overflow-hidden"
            >
              {/* Top Meta Header */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3 text-xs font-mono">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <span className="px-2 py-0.5 rounded bg-white/[0.06] border border-white/10 text-neutral-300 uppercase text-[11px]">
                      {post.category}
                    </span>
                    {post.advisoryId && (
                      <span className="text-emerald-400 font-semibold flex items-center space-x-1 text-[11px] break-all">
                        <ShieldCheck size={12} className="shrink-0" />
                        <span>{post.advisoryId}</span>
                      </span>
                    )}
                    {post.severity && (
                      <span
                        className={`px-2 py-0.5 rounded font-mono text-[10px] sm:text-[11px] uppercase ${
                          post.severity.toLowerCase() === "critical"
                            ? "bg-rose-500/15 border border-rose-500/40 text-rose-300 font-bold shadow-[0_0_10px_rgba(244,63,94,0.25)]"
                            : post.severity.toLowerCase() === "high"
                            ? "bg-orange-500/15 border border-orange-500/40 text-orange-300 font-semibold"
                            : "bg-amber-500/10 border border-amber-500/30 text-amber-300 font-medium"
                        }`}
                      >
                        {post.severity}
                      </span>
                    )}
                  </div>
                  <div className="text-neutral-500 flex items-center space-x-2 text-[11px] sm:text-xs">
                    <span>{post.publishedDate}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-mono text-white group-hover:text-emerald-300 transition-colors mb-2.5 leading-snug break-words">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h3>

                {/* Target Repo */}
                {post.targetRepo && (
                  <p className="text-xs font-mono text-neutral-400 mb-3 break-all">
                    TARGET: <span className="text-neutral-200">{post.targetRepo}</span>
                  </p>
                )}

                {/* Summary */}
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-5">
                  {post.summary}
                </p>
              </div>

              {/* Bottom Footer: Tags and Read Action */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                <div className="flex flex-wrap items-center gap-1.5">
                  <Tag size={12} className="text-neutral-500 shrink-0" />
                  {post.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] sm:text-[11px] font-mono text-neutral-400 bg-white/[0.03] px-1.5 sm:px-2 py-0.5 rounded border border-white/5"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto pt-1 sm:pt-0">
                  {post.githubAdvisoryUrl && (
                    <a
                      href={post.githubAdvisoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-neutral-400 hover:text-white flex items-center space-x-1 transition-colors px-2 py-1 rounded bg-white/[0.02] border border-white/5 sm:border-0"
                      title={post.advisoryId?.startsWith("GHSA") ? "View GitHub Advisory" : "View Source Issue"}
                    >
                      <span>{post.advisoryId?.startsWith("GHSA") ? "GHSA" : "ISSUE"}</span>
                      <ExternalLink size={12} />
                    </a>
                  )}

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold text-emerald-400 hover:text-emerald-300 transition-colors py-1"
                  >
                    <span>READ WRITEUP</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform shrink-0" />
                  </Link>
                </div>
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
