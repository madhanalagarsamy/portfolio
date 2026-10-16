"use client";

import { motion } from "framer-motion";
import { featuredProjectData } from "@/data/projects";
import { Cpu, ShieldCheck, Zap, Layers } from "lucide-react";

export default function FeaturedProject() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 px-6 sm:px-10 md:px-14 lg:px-20 z-10 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Apple Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-18 max-w-2xl"
        >
          <div className="text-[#2997ff] text-xs sm:text-sm font-semibold tracking-[-0.01em] mb-3">
            Featured Protocol
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] leading-tight text-[#f5f5f7] mb-3">
            Decimal Optical Transfer.
          </h2>
          <p className="text-[#86868b] text-base sm:text-lg font-normal leading-relaxed">
            High-speed screen-to-camera optical data transmission powered by WebAssembly.
          </p>
        </motion.div>

        {/* Feature Container */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="bg-[#161617] border border-white/[0.08] hover:border-white/[0.18] rounded-[32px] p-8 sm:p-12 transition-all duration-400 relative overflow-hidden"
        >
          <div className="relative z-10">
            {/* Tech Badges */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-white/[0.06]">
              <span className="inline-flex items-center space-x-2 text-xs font-medium text-[#2997ff] bg-[#2997ff]/10 px-3.5 py-1.5 rounded-full border border-[#2997ff]/20">
                <Zap size={14} />
                <span>WASM OPTICAL ENGINE</span>
              </span>

              <div className="flex flex-wrap items-center gap-2">
                {featuredProjectData.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-[#1d1d1f] border border-white/[0.08] text-xs font-mono text-[#f5f5f7]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Title & 1-line summary */}
            <div className="mb-8">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight mb-3">
                {featuredProjectData.title}
              </h3>
              <p className="text-base sm:text-lg text-[#86868b] font-normal max-w-2xl leading-relaxed">
                Transfers binary payloads up to 1 GB via real-time camera scanning without network connectivity.
              </p>
            </div>

            {/* 3 Architecture Specs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-[#1d1d1f]/80 border border-white/[0.06] rounded-[22px] p-6">
                <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-4">
                  <Layers size={18} className="text-[#2997ff]" />
                </div>
                <h4 className="text-sm font-semibold text-[#f5f5f7] tracking-tight uppercase mb-1.5">
                  Duo-QR Mosaic
                </h4>
                <p className="text-xs text-[#86868b] leading-relaxed">
                  Interleaved frame matrix doubling transmission density.
                </p>
              </div>

              <div className="bg-[#1d1d1f]/80 border border-white/[0.06] rounded-[22px] p-6">
                <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-4">
                  <Cpu size={18} className="text-[#30d158]" />
                </div>
                <h4 className="text-sm font-semibold text-[#f5f5f7] tracking-tight uppercase mb-1.5">
                  Luby Transform
                </h4>
                <p className="text-xs text-[#86868b] leading-relaxed">
                  Fountain codes for packet loss recovery over optical feeds.
                </p>
              </div>

              <div className="bg-[#1d1d1f]/80 border border-white/[0.06] rounded-[22px] p-6">
                <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-4">
                  <ShieldCheck size={18} className="text-[#bf5af2]" />
                </div>
                <h4 className="text-sm font-semibold text-[#f5f5f7] tracking-tight uppercase mb-1.5">
                  SHA-256 Checksum
                </h4>
                <p className="text-xs text-[#86868b] leading-relaxed">
                  Cryptographic verification ensuring byte-level integrity.
                </p>
              </div>
            </div>

            {/* Attribution */}
            <div className="pt-6 border-t border-white/[0.06] text-xs text-[#86868b] flex items-center justify-between">
              <span>Original Credits: {featuredProjectData.originalAuthor}</span>
              <span>WASM &amp; PWA</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
