"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { advisoryData } from "@/data/advisory";
import { ExternalLink, ChevronRight } from "lucide-react";

export default function SecurityAdvisory() {
  const appleAdvisory = advisoryData.advisories.find(
    (a) => a.id === "apple/container#2261"
  );
  const otherAdvisories = advisoryData.advisories.filter(
    (a) => a.id !== "apple/container#2261"
  );

  return (
    <section id="advisory" className="relative py-24 sm:py-32 px-6 sm:px-10 md:px-14 lg:px-20 z-10 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-18 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]"
        >
          <div className="max-w-2xl">
            <div className="text-[#2997ff] text-xs sm:text-sm font-semibold tracking-[-0.01em] mb-3">
              Verified Disclosures
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] leading-tight text-[#f5f5f7]">
              Security Advisories.
            </h2>
            <p className="mt-3 text-[#86868b] text-base sm:text-lg font-normal leading-relaxed">
              Vulnerability disclosures and vendor patches published across Apple and GitHub.
            </p>
          </div>

          <div className="shrink-0">
            <span className="px-3.5 py-1.5 bg-[#1d1d1f] border border-white/10 text-[#f5f5f7] rounded-full text-xs font-medium">
              {advisoryData.advisories.length} Disclosures Logged
            </span>
          </div>
        </motion.div>

        {/* Apple Container #2261 Showcase Card */}
        {appleAdvisory && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="mb-8 bg-gradient-to-br from-[#1c1c1e] to-[#121214] border border-white/[0.12] hover:border-[#2997ff]/40 rounded-[32px] p-8 sm:p-12 transition-all duration-300 relative overflow-hidden group shadow-2xl"
          >
            <div className="relative z-10">
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center space-x-3">
                  <span className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-lg text-white font-semibold">
                    
                  </span>
                  <div>
                    <span className="text-xs font-semibold text-[#2997ff] uppercase tracking-wider block">
                      Apple Open Source
                    </span>
                    <span className="text-sm font-medium text-[#f5f5f7]">
                      {appleAdvisory.targetRepo}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1 rounded-full bg-[#30d158]/15 border border-[#30d158]/30 text-[#30d158] text-xs font-semibold">
                    ACKNOWLEDGED BY APPLE · FIXED IN PR #2260
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#ff9f0a]/15 border border-[#ff9f0a]/30 text-[#ff9f0a] text-xs font-semibold">
                    HIGH
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight mb-3">
                {appleAdvisory.title}
              </h3>

              {/* Description */}
              <p className="text-[#a1a1a6] text-base sm:text-lg font-normal leading-relaxed mb-6 max-w-3xl">
                Socket file descriptor leak in Apple Container&apos;s Swift-NIO connect handler leading to monotonic FD exhaustion DoS. Identified, responsibly disclosed, and resolved in PR #2260.
              </p>

              {/* Quotation */}
              <div className="p-4 rounded-[18px] bg-white/[0.04] border border-white/[0.08] mb-8 flex items-center space-x-3">
                <span className="text-lg text-[#2997ff] font-serif shrink-0">“</span>
                <p className="text-sm text-[#f5f5f7] italic font-normal">
                  Thanks to <span className="font-semibold text-white not-italic">@madhanalagarsamy</span> for helping identify this bug! Resolved in PR #2260.
                </p>
              </div>

              {/* Actions & Specs */}
              <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  {appleAdvisory.cwe?.map((cwe) => (
                    <span
                      key={cwe}
                      className="px-2.5 py-1 rounded-full bg-[#1d1d1f] border border-white/10 text-[#f5f5f7] font-mono"
                    >
                      {cwe}
                    </span>
                  ))}
                  <span className="px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[#86868b]">
                    PR #2260
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <Link
                    href={`/blog/${appleAdvisory.slug}`}
                    className="inline-flex items-center space-x-1.5 px-5 py-2.5 bg-[#0071e3] hover:bg-[#0077ed] text-white text-sm font-normal rounded-full transition-all duration-200"
                  >
                    <span>Read Advisory</span>
                    <ChevronRight size={15} />
                  </Link>

                  <a
                    href={appleAdvisory.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-4 py-2.5 bg-white/[0.08] hover:bg-white/[0.14] text-[#f5f5f7] border border-white/10 text-sm font-normal rounded-full transition-all duration-200"
                  >
                    <span>Issue #2261</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Bento Grid for Remaining Advisories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherAdvisories.map((advisory, idx) => {
            const isCritical = advisory.severity?.toLowerCase() === "critical";

            return (
              <motion.article
                key={advisory.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-[#161617] border border-white/[0.08] hover:border-white/[0.2] rounded-[28px] p-8 sm:p-10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-white/[0.06]">
                    <span className="text-xs font-semibold text-[#86868b] uppercase tracking-wider">
                      {advisory.targetRepo}
                    </span>

                    <span
                      className={`px-3 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider ${
                        isCritical
                          ? "bg-[#ff453a]/15 border border-[#ff453a]/30 text-[#ff453a]"
                          : "bg-[#ff9f0a]/15 border border-[#ff9f0a]/30 text-[#ff9f0a]"
                      }`}
                    >
                      {advisory.severity}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-[#2997ff] mb-2 font-medium">
                    {advisory.id}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-[#f5f5f7] tracking-tight mb-3">
                    {advisory.title}
                  </h3>

                  <p className="text-[#86868b] text-sm leading-relaxed mb-6 font-normal">
                    {advisory.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {advisory.cwe?.slice(0, 2).map((cwe) => (
                      <span
                        key={cwe}
                        className="px-2 py-0.5 text-[11px] font-mono text-[#86868b] bg-[#1d1d1f] rounded-full border border-white/5"
                      >
                        {cwe}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${advisory.slug}`}
                    className="inline-flex items-center space-x-1 text-xs text-[#2997ff] hover:text-[#70baff] hover:underline font-medium"
                  >
                    <span>Read Advisory</span>
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
