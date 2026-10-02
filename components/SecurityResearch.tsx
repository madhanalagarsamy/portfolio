"use client";

import { motion } from "framer-motion";
import { researchData } from "@/data/research";
import { Terminal, Workflow, KeyRound } from "lucide-react";
import Link from "next/link";

export default function SecurityResearch() {
  const domainIcons = [Terminal, Workflow, KeyRound];
  const domainLinks = [
    { label: "View Apple #2261 Analysis", href: "/blog/apple-container-connecthandler-fd-leak" },
    { label: "View GHSA-8rfq & GHSA-x3cj", href: "/blog/ghsa-8rfq-rmx4-8qhr" },
    { label: "View BigBlueButton IDOR", href: "/blog/ghsa-9v52-vhvw-4w5c" },
  ];

  return (
    <section id="research" className="relative py-24 sm:py-32 px-6 sm:px-10 md:px-14 lg:px-20 z-10 border-t border-white/10 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 sm:mb-18"
        >
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-1.5 h-1.5 bg-emerald-400" />
            <span className="text-xs font-mono text-neutral-400 tracking-widest uppercase">
              03 // RESEARCH DOMAINS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            VULNERABILITY RESEARCH &amp;<br />
            SYSTEM FAILURE MODES
          </h2>
          <p className="mt-4 text-neutral-400 font-light text-sm sm:text-base max-w-2xl leading-relaxed">
            Methodical source-level auditing, taint tracing, and reproducible proof-of-concepts across production runtimes, automation pipelines, and network handlers.
          </p>
        </motion.div>

        {/* Technical Domain Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {researchData.pillars.map((pillar, idx) => {
            const Icon = domainIcons[idx % domainIcons.length];
            const link = domainLinks[idx];
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-black p-8 sm:p-10 flex flex-col justify-between group hover:bg-neutral-950 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                    <span className="text-[11px] font-mono text-neutral-500 tracking-widest uppercase">
                      DOM_0{idx + 1}
                    </span>
                    <Icon size={16} className="text-neutral-400 group-hover:text-emerald-400 transition-colors" />
                  </div>

                  <span className="text-[11px] font-mono text-emerald-400 tracking-wider block mb-3 uppercase">
                    {pillar.target}
                  </span>

                  <h3 className="text-lg sm:text-xl font-bold font-mono text-white mb-4 leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-neutral-400 font-light text-xs sm:text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <Link
                    href={link.href}
                    className="inline-flex items-center space-x-2 text-xs font-mono text-neutral-300 hover:text-emerald-300 transition-colors group-hover:translate-x-0.5 transform duration-200"
                  >
                    <span>{link.label}</span>
                    <span className="text-emerald-400">→</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CVD Standard Footnote */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 bg-neutral-600" />
            <span>DISCLOSURE STANDARD: RFC 9116 / ISO/IEC 29147 (COORDINATED VULNERABILITY DISCLOSURE)</span>
          </div>
          <span className="text-neutral-400">ZERO 0-DAY EXPLOITATION · 100% RESPONSIBLE MITIGATION</span>
        </div>
      </div>
    </section>
  );
}
