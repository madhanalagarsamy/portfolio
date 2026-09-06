"use client";

import { motion } from "framer-motion";
import { advisoryData } from "@/data/advisory";
import { ExternalLink, ShieldCheck, CheckCircle2 } from "lucide-react";

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
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            VERIFIED SECURITY RESEARCH ADVISORY
          </h2>
        </motion.div>

        {/* Featured Advisory Display Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          className="bg-black/10 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-xs relative overflow-hidden mb-16 hover:border-emerald-500/40 hover:shadow-[0_0_40px_rgba(16,185,129,0.12)] transition-all duration-500"
        >
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div className="flex items-center space-x-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-emerald-400 font-medium tracking-widest uppercase">
                {advisoryData.badge}
              </span>
            </div>

            <span className="text-xs font-mono text-neutral-400">
              TARGET REPO: <span className="text-white">{advisoryData.targetRepo}</span>
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-8">
            <div>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block mb-2">
                ADVISORY IDENTIFIER & RESEARCH SCOPE
              </span>
              <h3 className="text-3xl md:text-5xl font-mono font-extrabold text-white tracking-wider mb-3">
                {advisoryData.id}
              </h3>
              <p className="text-base md:text-lg text-neutral-200 font-medium font-mono">
                {advisoryData.title}
              </p>
            </div>

            <a
              href={advisoryData.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-full bg-white text-black font-mono text-xs tracking-widest uppercase font-semibold hover:bg-neutral-200 transition-all duration-300 shrink-0 shadow-lg shadow-white/5"
            >
              <span>VIEW ADVISORY ON GITHUB</span>
              <ExternalLink size={14} />
            </a>
          </div>

          <div className="text-neutral-300 font-light text-sm md:text-base leading-relaxed max-w-3xl pt-4 border-t border-white/10">
            <p>
              Official security advisory documentation published on GitHub Security Advisory Database for <span className="text-white font-medium">{advisoryData.targetRepo}</span>. Representing verified vulnerability research, responsible disclosure practices, and defensive security contributions.
            </p>
          </div>
        </motion.div>

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
