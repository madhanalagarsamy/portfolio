"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Tag, ExternalLink, ArrowRight, ShieldCheck, AlertTriangle, GitBranch } from "lucide-react";
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
        (post.advisoryId && post.advisoryId.toLowerCase().includes(query)) ||
        (post.targetRepo && post.targetRepo.toLowerCase().includes(query));

      return matchesTag && matchesSearch;
    });
  }, [posts, selectedTag, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Search and Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search
            size={15}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"
          />
          <input
            type="text"
            placeholder="Filter by vulnerability, CVE/GHSA, or repo..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/[0.04] border border-white/10 pl-10 pr-12 py-2 text-xs font-mono text-white placeholder-neutral-500 focus:outline-none focus:border-white/40 transition-colors"
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

      {/* Filter Chips */}
      <div className="flex flex-wrap gap-1.5 pt-1">
        {allTags.map((tag) => {
          const isActive = selectedTag === tag;
          return (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 text-[11px] font-mono tracking-wider transition-colors cursor-pointer ${
                isActive
                  ? "bg-white/10 text-white border border-white/30 font-semibold"
                  : "bg-white/[0.02] text-neutral-400 border border-white/10 hover:border-white/20 hover:text-neutral-200"
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>

      {/* Posts List */}
      <div className="space-y-6">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-white/[0.02] border border-white/10 px-4">
            <AlertTriangle className="mx-auto text-neutral-500 mb-3" size={26} />
            <p className="text-neutral-400 font-mono text-xs sm:text-sm">
              No security advisories matched your query.
            </p>
            <button
              onClick={() => {
                setSelectedTag("ALL");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 bg-white/10 text-white font-mono text-xs hover:bg-white/20 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="group relative bg-neutral-950 border border-white/10 hover:border-white/30 p-6 sm:p-8 transition-colors flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Meta Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4 text-xs font-mono">
                  <div className="flex flex-wrap items-center gap-2">
                    {post.advisoryId && (
                      <span className="inline-flex items-center space-x-1.5 px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold text-xs">
                        <ShieldCheck size={12} className="shrink-0" />
                        <span>{post.advisoryId}</span>
                      </span>
                    )}

                    {post.severity && (
                      <span
                        className={`px-2.5 py-0.5 rounded-md font-mono text-[10px] sm:text-xs font-semibold uppercase ${
                          post.severity.toLowerCase() === "critical"
                            ? "bg-rose-500/15 border border-rose-500/40 text-rose-300 shadow-[0_0_10px_rgba(244,63,94,0.2)]"
                            : post.severity.toLowerCase() === "high"
                            ? "bg-orange-500/15 border border-orange-500/40 text-orange-300"
                            : "bg-amber-500/10 border border-amber-500/30 text-amber-300"
                        }`}
                      >
                        {post.severity}
                      </span>
                    )}

                    {post.targetRepo && (
                      <span className="inline-flex items-center space-x-1 text-neutral-400 text-xs">
                        <GitBranch size={12} className="text-neutral-500 shrink-0" />
                        <span className="text-neutral-300 font-medium">{post.targetRepo}</span>
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

              {/* Bottom Footer: Tags and Read Action */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                <div className="flex flex-wrap items-center gap-1.5">
                  <Tag size={12} className="text-neutral-500 shrink-0" />
                  {post.cwe?.map((cwe) => (
                    <span
                      key={cwe}
                      className="text-[10px] sm:text-[11px] font-mono text-emerald-400 bg-emerald-500/5 px-2 py-0.5 border border-emerald-500/20"
                    >
                      {cwe.split(":")[0]}
                    </span>
                  ))}
                  {post.tags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] sm:text-[11px] font-mono text-neutral-400 bg-white/[0.02] px-2 py-0.5 border border-white/10"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
                  {post.githubAdvisoryUrl && (
                    <a
                      href={post.githubAdvisoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-neutral-400 hover:text-white flex items-center space-x-1.5 transition-colors px-2.5 py-1 bg-white/[0.02] border border-white/10 hover:border-white/30"
                      title="Open verified advisory on GitHub"
                    >
                      <span>OFFICIAL ADVISORY</span>
                      <ExternalLink size={12} />
                    </a>
                  )}

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold text-white hover:text-emerald-400 transition-colors py-1 group/link"
                  >
                    <span>READ WRITEUP</span>
                    <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform shrink-0" />
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
