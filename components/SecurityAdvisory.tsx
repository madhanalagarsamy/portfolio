"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { advisoryData } from "@/data/advisory";
import { ExternalLink, ArrowRight, ShieldCheck, Check } from "lucide-react";

export default function SecurityAdvisory() {
  return (
    <section id="advisory" className="relative py-24 sm:py-32 px-6 sm:px-10 md:px-14 lg:px-20 z-10 border-t border-white/10 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 sm:mb-18 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10"
        >
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="w-1.5 h-1.5 bg-emerald-400" />
              <span className="text-xs font-mono text-neutral-400 tracking-widest uppercase">
                02 // VERIFIED DISCLOSURES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              SECURITY ADVISORIES &amp;<br />
              COORDINATED DISCLOSURES
            </h2>
            <p className="mt-4 text-neutral-400 font-light text-sm sm:text-base max-w-2xl leading-relaxed">
              Official vulnerability disclosures and vendor patches published across GitHub Security Advisories and Apple open-source repositories.
            </p>
          </div>

          <div className="shrink-0 flex items-center space-x-4 text-xs font-mono">
            <span className="text-neutral-500">TOTAL LOGGED:</span>
            <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-white font-semibold">
              5 DISCLOSURES
            </span>
          </div>
        </motion.div>

        {/* Advisories Technical Dossier Stack */}
        <div className="space-y-6 mb-16">
          {advisoryData.advisories.map((advisory, idx) => {
            const isCritical = advisory.severity?.toLowerCase() === "critical";
            const isHigh = advisory.severity?.toLowerCase() === "high";

            return (
              <motion.article
                key={advisory.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-neutral-950 border border-white/10 hover:border-white/30 transition-colors p-6 sm:p-8 md:p-10 relative"
              >
                {/* Header Row: ID, Badges, Target Repo */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10 text-xs font-mono">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <span className="text-base sm:text-lg font-bold text-white tracking-wide">
                      {advisory.id}
                    </span>

                    {advisory.severity && (
                      <span
                        className={`px-2 py-0.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider ${
                          isCritical
                            ? "bg-rose-500/10 border border-rose-500/30 text-rose-300"
                            : isHigh
                            ? "bg-amber-500/10 border border-amber-500/30 text-amber-300"
                            : "bg-emerald-500/10 border border-emerald-500/30 text-emerald-300"
                        }`}
                      >
                        {advisory.severity}
                      </span>
                    )}

                    <span className="text-neutral-500 hidden sm:inline">|</span>
                    <span className="text-emerald-400 font-medium">
                      {advisory.badge}
                    </span>
                  </div>

                  <div className="text-neutral-400 text-xs font-mono">
                    <span className="text-neutral-600">TARGET: </span>
                    <span className="text-neutral-200">{advisory.targetRepo}</span>
                  </div>
                </div>

                {/* Advisory Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-mono text-white mb-4 leading-snug">
                  {advisory.title}
                </h3>

                {/* Synopsis */}
                <p className="text-neutral-300 font-light text-sm sm:text-base leading-relaxed mb-6">
                  {advisory.description}
                </p>

                {/* Technical Meta Chips */}
                <div className="flex flex-wrap items-center gap-2 mb-8 text-xs font-mono">
                  {advisory.cwe?.map((cweItem) => (
                    <span
                      key={cweItem}
                      className="px-2 py-1 bg-white/[0.04] border border-white/10 text-neutral-300"
                    >
                      {cweItem}
                    </span>
                  ))}
                  {advisory.patchedVersions && (
                    <span className="px-2 py-1 bg-emerald-500/5 border border-emerald-500/20 text-emerald-300">
                      PATCHED: {advisory.patchedVersions.join(", ")}
                    </span>
                  )}
                  {advisory.publishedDate && (
                    <span className="px-2 py-1 bg-white/[0.02] border border-white/5 text-neutral-400">
                      DATE: {advisory.publishedDate}
                    </span>
                  )}
                </div>

                {/* Direct Action Links */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      href={`/blog/${advisory.slug || advisory.id.toLowerCase()}`}
                      className="inline-flex items-center space-x-2 text-white hover:text-emerald-400 transition-colors font-semibold group"
                    >
                      <span>READ TECHNICAL WRITEUP &amp; PoC</span>
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <span className="text-neutral-700 hidden sm:inline">/</span>

                    <a
                      href={advisory.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-neutral-400 hover:text-white transition-colors"
                    >
                      <span>{advisory.id.startsWith("GHSA") ? "OFFICIAL GITHUB ADVISORY" : "APPLE REPO ISSUE #2261"}</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>

                  <span className="text-[11px] text-neutral-600 hidden md:inline">
                    STATUS: VERIFIED &amp; REMEDIATED
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Responsible Disclosure Protocol Pipeline */}
        <div className="border border-white/10 bg-neutral-950 p-6 sm:p-8">
          <div className="flex items-center space-x-2 mb-6 pb-3 border-b border-white/10 text-xs font-mono text-neutral-400 uppercase tracking-widest">
            <ShieldCheck size={14} className="text-emerald-400" />
            <span>COORDINATED DISCLOSURE LIFECYCLE</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisoryData.process.map((item) => (
              <div key={item.step} className="space-y-1.5 text-xs font-mono">
                <div className="flex items-center space-x-2">
                  <span className="text-emerald-400 font-bold">{item.step}</span>
                  <span className="text-white font-semibold">{item.label}</span>
                </div>
                <p className="text-neutral-400 font-sans font-light text-[13px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
