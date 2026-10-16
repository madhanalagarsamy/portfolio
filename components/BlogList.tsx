"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ChevronRight, GitBranch, AlertCircle, ShieldCheck } from "lucide-react";
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
      {/* Apple Search and Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
        {/* Apple Pill Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#86868b] pointer-events-none"
          />
          <input
            type="text"
            placeholder="Search by vulnerability, CVE, GHSA, or repository..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#1d1d1f] border border-white/10 rounded-full pl-11 pr-12 py-2.5 text-xs sm:text-sm text-[#f5f5f7] placeholder-[#86868b] focus:outline-none focus:border-[#2997ff] focus:ring-1 focus:ring-[#2997ff] transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[11px] text-[#86868b] hover:text-white px-2 py-0.5 rounded-full bg-white/10"
            >
              Clear
            </button>
          )}
        </div>

        {/* Counter Pill */}
        <div className="text-xs text-[#86868b] flex items-center space-x-2 shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#30d158]" />
          <span>
            {filteredPosts.length} {filteredPosts.length === 1 ? "ADVISORY" : "ADVISORIES"}
          </span>
        </div>
      </div>

      {/* Apple Filter Pills */}
      <div className="flex flex-wrap gap-2 pt-1">
        {allTags.map((tag) => {
          const isActive = selectedTag === tag;
          return (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-normal tracking-tight transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#0071e3] text-white shadow-sm font-medium"
                  : "bg-[#1d1d1f] text-[#86868b] border border-white/[0.08] hover:border-white/[0.18] hover:text-[#f5f5f7]"
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>

      {/* Apple Newsroom Articles Stack */}
      <div className="space-y-6">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 bg-[#161617] border border-white/[0.08] rounded-[28px] px-6">
            <AlertCircle className="mx-auto text-[#86868b] mb-3" size={28} />
            <p className="text-[#86868b] text-sm">
              No security advisories matched your query.
            </p>
            <button
              onClick={() => {
                setSelectedTag("ALL");
                setSearchQuery("");
              }}
              className="mt-4 px-5 py-2 rounded-full bg-[#0071e3] text-white text-xs hover:bg-[#0077ed] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredPosts.map((post) => {
            const isCritical = post.severity?.toLowerCase() === "critical";
            const isHigh = post.severity?.toLowerCase() === "high";

            return (
              <article
                key={post.slug}
                className="group relative bg-[#161617] border border-white/[0.08] hover:border-white/[0.2] rounded-[28px] p-6 sm:p-10 transition-all duration-400 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Meta Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4 text-xs">
                    <div className="flex flex-wrap items-center gap-2">
                      {post.advisoryId && (
                        <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#2997ff]/10 border border-[#2997ff]/20 text-[#2997ff] font-medium text-xs">
                          <ShieldCheck size={13} className="shrink-0" />
                          <span>{post.advisoryId}</span>
                        </span>
                      )}

                      {post.severity && (
                        <span
                          className={`px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider ${
                            isCritical
                              ? "bg-[#ff453a]/15 border border-[#ff453a]/30 text-[#ff453a]"
                              : isHigh
                              ? "bg-[#ff9f0a]/15 border border-[#ff9f0a]/30 text-[#ff9f0a]"
                              : "bg-[#30d158]/15 border border-[#30d158]/30 text-[#30d158]"
                          }`}
                        >
                          {post.severity}
                        </span>
                      )}

                      {post.targetRepo && (
                        <span className="inline-flex items-center space-x-1.5 text-[#86868b] text-xs">
                          <GitBranch size={13} className="text-[#86868b] shrink-0" />
                          <span className="text-[#f5f5f7] font-medium">{post.targetRepo}</span>
                        </span>
                      )}
                    </div>

                    <div className="text-[#86868b] flex items-center space-x-2 text-xs">
                      <span>{post.publishedDate}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#f5f5f7] group-hover:text-white transition-colors mb-3 leading-snug tracking-tight">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h2>

                  {/* Summary */}
                  <p className="text-[#86868b] text-sm sm:text-base font-normal leading-relaxed mb-6">
                    {post.summary}
                  </p>

                  {/* Cover Image Preview */}
                  {post.coverImage && (
                    <Link
                      href={`/blog/${post.slug}`}
                      className="block relative w-full h-48 sm:h-64 md:h-72 rounded-[20px] overflow-hidden mb-6 border border-white/[0.08] bg-[#121214] group/img"
                    >
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 850px"
                        className="object-cover transform group-hover/img:scale-[1.01] transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                    </Link>
                  )}
                </div>

                {/* Footer with Tags and Action */}
                <div className="pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {post.cwe?.map((cwe) => (
                      <span
                        key={cwe}
                        className="text-[11px] font-mono text-[#86868b] bg-[#1d1d1f] px-2.5 py-0.5 rounded-full border border-white/5"
                      >
                        {cwe}
                      </span>
                    ))}
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] text-[#86868b] bg-white/[0.04] px-2.5 py-0.5 rounded-full border border-white/5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center space-x-1 text-sm text-[#2997ff] hover:text-[#70baff] hover:underline font-medium shrink-0 group/link"
                  >
                    <span>Read Advisory</span>
                    <ChevronRight size={15} className="group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </article>
            );
          })
        )}
      </div>
    </div>
  );
}
