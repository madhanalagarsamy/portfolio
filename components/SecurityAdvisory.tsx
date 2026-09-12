"use client";

import { motion } from "framer-motion";
import { advisoryData } from "@/data/advisory";
import { ExternalLink, CheckCircle2, ShieldAlert, Tag } from "lucide-react";

export default function SecurityAdvisory() {
  return (
    <section id="advisory" className="relative py-28 px-6 md:px-12 z-10 select-none">
      {/* Ultra-Light Transparent Overlay */}
      <div className="absolute inset-0 bg-black/5 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center space-x-3 mb-3">
            <span className="text-xs font-mono text-neutral-400 tracking-widest uppercase">04 / SECURITY ADVISORY</span>
            <span className="w-12 h-[1px] bg-neutral-700" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
            VERIFIED SECURITY RESEARCH ADVISORIES
          </h2>
          <p className="text-neutral-400 font-light text-base max-w-2xl">
            Official security advisory documentation published on GitHub Security Advisory Database for open-source software ecosystems.
          </p>
        </motion.div>

        {/* Advisories Stack */}
        <div className="space-y-10 mb-20">
          {advisoryData.advisories.map((advisory, idx) => (
            <motion.div
              key={advisory.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="bg-black/10 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-xs relative overflow-hidden hover:border-emerald-500/40 hover:shadow-[0_0_40px_rgba(16,185,129,0.12)] transition-all duration-500 group"
            >
              {/* Subtle Ambient Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono text-emerald-400 font-medium tracking-widest uppercase">
                    {advisory.badge}
                  </span>
                </div>

                <span className="text-xs font-mono text-neutral-400">
                  TARGET REPO: <span className="text-white font-medium">{advisory.targetRepo}</span>
                </span>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <h3 className="text-2xl md:text-4xl font-mono font-extrabold text-white tracking-wider">
                      {advisory.id}
                    </h3>
                    {advisory.severity && (
                      <span className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs uppercase font-medium">
                        {advisory.severity}
                      </span>
                    )}
                  </div>
                  <p className="text-base md:text-lg text-neutral-200 font-medium font-mono mb-4 leading-snug">
                    {advisory.title}
                  </p>

                  {/* Metadata Chips: CWE & Patched versions */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-400">
                    {advisory.cwe?.map((cweItem) => (
                      <span key={cweItem} className="px-2.5 py-1 rounded bg-white/[0.05] border border-white/10 text-neutral-300">
                        {cweItem}
                      </span>
                    ))}
                    {advisory.patchedVersions && advisory.patchedVersions.length > 0 && (
                      <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                        PATCHED: {advisory.patchedVersions.join(", ")}
                      </span>
                    )}
                    {advisory.publishedDate && (
                      <span className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/5 text-neutral-400">
                        PUBLISHED: {advisory.publishedDate}
                      </span>
                    )}
                  </div>
                </div>

                <a
                  href={advisory.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2.5 px-6 py-3 rounded-full bg-white text-black font-mono text-xs tracking-widest uppercase font-semibold hover:bg-neutral-200 transition-all duration-300 shrink-0 shadow-lg shadow-white/5 hover:scale-[1.02] active:scale-[0.98] mt-2 lg:mt-0"
                >
                  <span>VIEW ADVISORY ON GITHUB</span>
                  <ExternalLink size={14} />
                </a>
              </div>

              <p className="text-neutral-300 font-light text-sm md:text-base leading-relaxed pt-4 border-t border-white/10">
                {advisory.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Responsible Disclosure Process Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <h4 className="text-xs font-mono tracking-widest text-neutral-400 uppercase mb-8 text-center md:text-left">
            RESPONSIBLE DISCLOSURE NARRATIVE PIPELINE
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisoryData.process.map((item) => (
              <div
                key={item.step}
                className="bg-white/[0.02] border border-white/10 rounded-xl p-6 backdrop-blur-md hover:bg-white/[0.04] transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-neutral-500 font-bold">{item.step}</span>
                  <CheckCircle2 size={15} className="text-neutral-400" />
                </div>
                <div className="text-xs font-mono font-semibold text-white tracking-wider mb-2">
                  {item.label}
                </div>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
