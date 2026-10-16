"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { Shield, GitCommit, Cpu, Layers, Award } from "lucide-react";

export default function About() {
  const bentoDirectives = [
    {
      title: "Deterministic PoCs",
      category: "Discovery",
      icon: Shield,
      accent: "text-[#2997ff]",
      borderAccent: "hover:border-[#2997ff]/40",
      description:
        "Reproducible proofs of concept verified across Darwin and Linux runtimes before maintainer contact.",
    },
    {
      title: "Upstream Fixes",
      category: "Mitigation",
      icon: GitCommit,
      accent: "text-[#30d158]",
      borderAccent: "hover:border-[#30d158]/40",
      description:
        "Direct collaboration with maintainers. Patches merged into Apple Container and espflash.",
    },
    {
      title: "CI/CD & Supply Chain",
      category: "Pipelines",
      icon: Layers,
      accent: "text-[#ff9f0a]",
      borderAccent: "hover:border-[#ff9f0a]/40",
      description:
        "Auditing self-hosted runners, composite actions, and token scopes to prevent supply-chain compromise.",
    },
    {
      title: "Protocol Engineering",
      category: "Systems",
      icon: Cpu,
      accent: "text-[#bf5af2]",
      borderAccent: "hover:border-[#bf5af2]/40",
      description:
        "High-throughput WebAssembly optical data transmission and distributed architectures at Net Corporation.",
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 px-6 sm:px-10 md:px-14 lg:px-20 z-10 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Apple Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-18 max-w-3xl"
        >
          <div className="text-[#2997ff] text-xs sm:text-sm font-semibold tracking-[-0.01em] mb-3">
            Philosophy
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] leading-tight text-[#f5f5f7] mb-4">
            Source-Level Auditing.
            <br />
            <span className="text-[#86868b]">Zero Automated Scanning Noise.</span>
          </h2>
          <p className="text-[#86868b] text-base sm:text-lg font-normal leading-relaxed">
            Investigating resource lifecycles, event loops, and authorization boundaries in open-source systems.
          </p>
        </motion.div>

        {/* 4 Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {bentoDirectives.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`bg-[#161617] border border-white/[0.08] ${item.borderAccent} rounded-[28px] p-8 sm:p-10 transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[12px] font-semibold text-[#86868b] uppercase tracking-wider">
                      {item.category}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                      <Icon size={18} className={item.accent} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold text-[#f5f5f7] tracking-tight mb-3">
                    {item.title}
                  </h3>

                  <p className="text-[#86868b] text-sm sm:text-[15px] font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Specs Strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="bg-[#161617] border border-white/[0.08] rounded-[24px] p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div>
            <span className="text-[11px] font-semibold text-[#86868b] uppercase tracking-wider block mb-1">
              Location
            </span>
            <span className="text-sm sm:text-[15px] font-medium text-[#f5f5f7]">
              {profileData.location}
            </span>
          </div>

          <div>
            <span className="text-[11px] font-semibold text-[#86868b] uppercase tracking-wider block mb-1">
              Organization
            </span>
            <span className="text-sm sm:text-[15px] font-medium text-[#f5f5f7]">
              Net Corporation (Founder)
            </span>
          </div>

          <div>
            <span className="text-[11px] font-semibold text-[#86868b] uppercase tracking-wider block mb-1">
              Education
            </span>
            <span className="text-sm sm:text-[15px] font-medium text-[#f5f5f7]">
              MCA · Periyar University
            </span>
          </div>

          <div>
            <span className="text-[11px] font-semibold text-[#86868b] uppercase tracking-wider block mb-1">
              Standard
            </span>
            <span className="text-sm sm:text-[15px] font-medium text-[#30d158] flex items-center space-x-1.5">
              <Award size={14} />
              <span>RFC 9116 / CVD Standard</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
