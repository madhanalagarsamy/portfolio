"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { Shield, GitCommit, Cpu, Layers, Award } from "lucide-react";

export default function About() {
  const bentoDirectives = [
    {
      title: "Deterministic Verification",
      category: "Vulnerability Discovery",
      icon: Shield,
      accent: "text-[#2997ff]",
      borderAccent: "group-hover:border-[#2997ff]/40",
      description:
        "Every disclosure begins with minimal, reproducible proof-of-concept harnesses verified across Darwin and Linux runtimes before maintainer contact. Zero theoretical noise.",
    },
    {
      title: "Coordinated Upstream Fixes",
      category: "Ecosystem Collaboration",
      icon: GitCommit,
      accent: "text-[#30d158]",
      borderAccent: "group-hover:border-[#30d158]/40",
      description:
        "Direct collaboration with maintainers to diagnose root causes and draft resilient patches—including Apple Container PR #2260 and esp-rs/espflash PR #1074.",
    },
    {
      title: "Supply Chain & CI/CD Defense",
      category: "Workflow Hardening",
      icon: Layers,
      accent: "text-[#ff9f0a]",
      borderAccent: "group-hover:border-[#ff9f0a]/40",
      description:
        "Methodical analysis of GitHub Actions self-hosted runners, unpinned composite actions, and scheduled token execution to prevent silent enterprise compromise.",
    },
    {
      title: "Production Protocol Engineering",
      category: "Systems Architecture",
      icon: Cpu,
      accent: "text-[#bf5af2]",
      borderAccent: "group-hover:border-[#bf5af2]/40",
      description:
        "Applying security rigor to software products at Net Corporation: WebAssembly optical data transmission, high-concurrency event loops, and full-stack architectures.",
    },
  ];

  return (
    <section id="about" className="relative py-28 sm:py-36 px-6 sm:px-10 md:px-14 lg:px-20 z-10 bg-black">
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
            Profile &amp; Engineering Philosophy
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] leading-tight text-[#f5f5f7] mb-6">
            System Integrity.
            <br />
            <span className="text-[#86868b]">Built on Deep Code Analysis.</span>
          </h2>
          <p className="text-[#86868b] text-base sm:text-lg font-normal leading-relaxed tracking-[-0.015em]">
            I investigate the edge cases where asynchronous runtimes, automated continuous integration, and distributed access controls intersect. Rather than surface-level automated scanners, my research examines source architectures, event loops, and resource lifecycles.
          </p>
        </motion.div>

        {/* Apple Bento Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {bentoDirectives.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className={`bg-[#161617] border border-white/[0.08] ${item.borderAccent} rounded-[28px] p-8 sm:p-10 transition-all duration-400 group flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[12px] font-semibold text-[#86868b] uppercase tracking-wider">
                      {item.category}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                      <Icon size={18} className={item.accent} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold text-[#f5f5f7] tracking-tight mb-4 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-[#86868b] text-sm sm:text-[15px] font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#86868b]">
                  <span>VERIFIED METHODOLOGY</span>
                  <span className="text-[#f5f5f7] group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Apple Specification Bar / Dossier */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="bg-[#161617] border border-white/[0.08] rounded-[24px] p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div>
            <span className="text-[11px] font-semibold text-[#86868b] uppercase tracking-wider block mb-1">
              Location
            </span>
            <span className="text-[15px] font-medium text-[#f5f5f7]">
              {profileData.location}
            </span>
          </div>

          <div>
            <span className="text-[11px] font-semibold text-[#86868b] uppercase tracking-wider block mb-1">
              Organization
            </span>
            <span className="text-[15px] font-medium text-[#f5f5f7]">
              Net Corporation (Founder)
            </span>
          </div>

          <div>
            <span className="text-[11px] font-semibold text-[#86868b] uppercase tracking-wider block mb-1">
              Education
            </span>
            <span className="text-[15px] font-medium text-[#f5f5f7]">
              MCA · Periyar University
            </span>
          </div>

          <div>
            <span className="text-[11px] font-semibold text-[#86868b] uppercase tracking-wider block mb-1">
              Disclosure Standard
            </span>
            <span className="text-[15px] font-medium text-[#30d158] flex items-center space-x-1.5">
              <Award size={14} />
              <span>RFC 9116 / CVD Standard</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
