"use client";

import { motion } from "framer-motion";
import { researchData } from "@/data/research";
import { Terminal, Workflow, KeyRound, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function SecurityResearch() {
  const domainIcons = [Terminal, Workflow, KeyRound];
  const domainLinks = [
    { label: "Apple #2261 Analysis", href: "/blog/apple-container-connecthandler-fd-leak" },
    { label: "CI/CD PAT Leakage Advisory", href: "/blog/ghsa-x3cj-mm38-329g" },
    { label: "BigBlueButton IDOR Advisory", href: "/blog/ghsa-9v52-vhvw-4w5c" },
  ];

  return (
    <section id="research" className="relative py-24 sm:py-32 px-6 sm:px-10 md:px-14 lg:px-20 z-10 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-18 max-w-2xl"
        >
          <div className="text-[#2997ff] text-xs sm:text-sm font-semibold tracking-[-0.01em] mb-3">
            Research Disciplines
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] leading-tight text-[#f5f5f7] mb-3">
            Research Areas.
          </h2>
          <p className="text-[#86868b] text-base sm:text-lg font-normal leading-relaxed">
            Asynchronous event loops, CI/CD supply chains, and web access controls.
          </p>
        </motion.div>

        {/* 3-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {researchData.pillars.map((pillar, idx) => {
            const Icon = domainIcons[idx % domainIcons.length];
            const link = domainLinks[idx];
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-[#161617] border border-white/[0.08] hover:border-white/[0.2] rounded-[28px] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.06]">
                    <span className="text-[11px] font-semibold text-[#86868b] uppercase tracking-wider">
                      Area 0{idx + 1}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                      <Icon size={16} className="text-[#2997ff]" />
                    </div>
                  </div>

                  <span className="text-xs font-semibold text-[#2997ff] tracking-wide block mb-2 uppercase">
                    {pillar.target}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-semibold text-[#f5f5f7] mb-3 tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-[#86868b] text-sm font-normal leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/[0.06]">
                  <Link
                    href={link.href}
                    className="inline-flex items-center space-x-1 text-xs text-[#2997ff] hover:text-[#70baff] hover:underline font-medium"
                  >
                    <span>{link.label}</span>
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
