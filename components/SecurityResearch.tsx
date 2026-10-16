"use client";

import { motion } from "framer-motion";
import { researchData } from "@/data/research";
import { Terminal, Workflow, KeyRound, ChevronRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function SecurityResearch() {
  const domainIcons = [Terminal, Workflow, KeyRound];
  const domainLinks = [
    { label: "View Apple #2261 Analysis", href: "/blog/apple-container-connecthandler-fd-leak", isExternal: false },
    { label: "View CI/CD PAT Leakage Advisory", href: "/blog/ghsa-x3cj-mm38-329g", isExternal: false },
    { label: "View BigBlueButton IDOR Advisory", href: "/blog/ghsa-9v52-vhvw-4w5c", isExternal: false },
  ];

  return (
    <section id="research" className="relative py-28 sm:py-36 px-6 sm:px-10 md:px-14 lg:px-20 z-10 bg-black">
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
            Core Research Domains
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] leading-tight text-[#f5f5f7] mb-6">
            System Failure Modes.
            <br />
            <span className="text-[#86868b]">Methodical Source-Level Auditing.</span>
          </h2>
          <p className="text-[#86868b] text-base sm:text-lg font-normal leading-relaxed">
            Detailed investigation into asynchronous event loops, automated CI/CD token delegation, and distributed object references to eliminate systemic risk at the source.
          </p>
        </motion.div>

        {/* 3-Column Apple Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {researchData.pillars.map((pillar, idx) => {
            const Icon = domainIcons[idx % domainIcons.length];
            const link = domainLinks[idx];
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-[#161617] border border-white/[0.08] hover:border-white/[0.2] rounded-[28px] p-8 sm:p-10 flex flex-col justify-between group transition-all duration-400"
              >
                <div>
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.06]">
                    <span className="text-[11px] font-semibold text-[#86868b] uppercase tracking-wider">
                      DOMAIN 0{idx + 1}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                      <Icon size={16} className="text-[#2997ff]" />
                    </div>
                  </div>

                  <span className="text-xs font-semibold text-[#2997ff] tracking-wide block mb-3 uppercase">
                    {pillar.target}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-semibold text-[#f5f5f7] mb-4 tracking-tight group-hover:text-white transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-[#86868b] text-sm font-normal leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/[0.06]">
                  <Link
                    href={link.href}
                    className="inline-flex items-center space-x-1 text-xs text-[#2997ff] hover:text-[#70baff] hover:underline transition-colors font-medium"
                  >
                    <span>{link.label}</span>
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Apple CVD Compliance Bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="bg-[#161617] border border-white/[0.08] rounded-[20px] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#86868b]"
        >
          <div className="flex items-center space-x-2 text-[#f5f5f7]">
            <ShieldCheck size={16} className="text-[#30d158]" />
            <span className="font-medium">Disclosure Standard: RFC 9116 / ISO/IEC 29147 (CVD)</span>
          </div>
          <span className="text-[#86868b]">Zero 0-Day Exploitation · 100% Coordinated Upstream Mitigation</span>
        </motion.div>
      </div>
    </section>
  );
}
