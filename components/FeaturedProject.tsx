"use client";

import { motion } from "framer-motion";
import { featuredProjectData } from "@/data/projects";
import { Cpu, ShieldCheck, Zap, Layers } from "lucide-react";

export default function FeaturedProject() {
  return (
    <section id="projects" className="relative py-28 sm:py-36 px-6 sm:px-10 md:px-14 lg:px-20 z-10 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Apple Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-20 max-w-3xl"
        >
          <div className="text-[#2997ff] text-xs sm:text-sm font-semibold tracking-[-0.01em] mb-3">
            Flagship Engineering Project
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] leading-tight text-[#f5f5f7] mb-6">
            Decimal Optical Transfer.
            <br />
            <span className="text-[#86868b]">High-Speed Screen-to-Camera Data.</span>
          </h2>
          <p className="text-[#86868b] text-base sm:text-lg font-normal leading-relaxed">
            {featuredProjectData.tagline}
          </p>
        </motion.div>

        {/* Apple Pro Feature Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="bg-[#161617] border border-white/[0.08] hover:border-white/[0.18] rounded-[32px] p-8 sm:p-12 transition-all duration-500 relative overflow-hidden"
        >
          {/* Subtle Ambient Radial Highlight */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#bf5af2]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            {/* Tech Badges */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-white/[0.06]">
              <span className="inline-flex items-center space-x-2 text-xs font-medium text-[#2997ff] bg-[#2997ff]/10 px-3.5 py-1.5 rounded-full border border-[#2997ff]/20">
                <Zap size={14} />
                <span>HIGH-THROUGHPUT WASM ENGINE</span>
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

            {/* Title */}
            <div className="mb-10">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
                {featuredProjectData.title}
              </h3>
              <p className="text-base sm:text-lg text-[#86868b] font-normal max-w-3xl leading-relaxed">
                Re-engineered optical transfer engine capable of streaming binary payloads up to 1 GB via real-time camera scanning without Wi-Fi, Bluetooth, or physical cables.
              </p>
            </div>

            {/* Apple 3-Column Architecture Specs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-[#1d1d1f]/80 border border-white/[0.06] rounded-[24px] p-6 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-4">
                  <Layers size={18} className="text-[#2997ff]" />
                </div>
                <h4 className="text-sm font-semibold text-[#f5f5f7] tracking-tight uppercase mb-2">
                  Duo-QR Mosaic
                </h4>
                <p className="text-xs text-[#86868b] leading-relaxed font-normal">
                  Optimized core optical transfer logic with a Duo-QR mosaic architecture to double transmission density and capture speed.
                </p>
              </div>

              <div className="bg-[#1d1d1f]/80 border border-white/[0.06] rounded-[24px] p-6 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-4">
                  <Cpu size={18} className="text-[#30d158]" />
                </div>
                <h4 className="text-sm font-semibold text-[#f5f5f7] tracking-tight uppercase mb-2">
                  Luby Transform
                </h4>
                <p className="text-xs text-[#86868b] leading-relaxed font-normal">
                  Refined Luby Transform (Fountain Codes) for lossy screen-to-camera transmission, enabling automatic packet loss recovery.
                </p>
              </div>

              <div className="bg-[#1d1d1f]/80 border border-white/[0.06] rounded-[24px] p-6 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-4">
                  <ShieldCheck size={18} className="text-[#bf5af2]" />
                </div>
                <h4 className="text-sm font-semibold text-[#f5f5f7] tracking-tight uppercase mb-2">
                  1 GB SHA-256
                </h4>
                <p className="text-xs text-[#86868b] leading-relaxed font-normal">
                  Upgraded capabilities to support 1 GB transfers with integrated hardware-accelerated cryptographic checksum validation.
                </p>
              </div>
            </div>

            {/* Attribution Footer */}
            <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4 text-xs text-[#86868b]">
              <div>
                ORIGINAL ARCHITECTURE CREDITS:{" "}
                <span className="text-[#f5f5f7] font-medium">{featuredProjectData.originalAuthor}</span>
              </div>
              <div className="text-[#86868b]">
                WASM &amp; Progressive Web Application
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
