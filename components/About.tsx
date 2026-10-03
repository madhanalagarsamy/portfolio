"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { Shield, GitCommit, Cpu, Layers } from "lucide-react";

export default function About() {
  const directives = [
    {
      num: "01",
      title: "DETERMINISTIC VERIFICATION",
      icon: Shield,
      desc: "Every vulnerability disclosure is accompanied by standalone, byte-level reproduction scripts verified across Linux and Darwin host environments before maintainer contact.",
    },
    {
      num: "02",
      title: "COORDINATED UPSTREAM FIXES",
      icon: GitCommit,
      desc: "Active collaboration with open-source maintainers to review root causes, assist with patch development, and verify PRs—such as esp-rs/espflash PR #1074 and Apple Container PR #2260.",
    },
    {
      num: "03",
      title: "SUPPLY CHAIN & CI/CD AUDITING",
      icon: Layers,
      desc: "Methodical analysis of GitHub Actions runner triggers, physical self-hosted runner fleets, and unpinned composite actions across cloud and hardware test benches.",
    },
    {
      num: "04",
      title: "PRODUCTION PROTOCOL ENGINEERING",
      icon: Cpu,
      desc: "Applying security principles directly to software architecture: building high-throughput optical data transmission (Fountain Codes) and full-stack web applications at Net Corporation.",
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 px-6 sm:px-10 md:px-14 lg:px-20 z-10 border-t border-white/10 bg-black">
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
              01 // PROFILE &amp; FOCUS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            SYSTEM INTEGRITY &amp;<br />
            DEFENSIVE SOFTWARE ENGINEERING
          </h2>
        </motion.div>

        {/* Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Narrative Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 space-y-6 text-neutral-300 font-light text-sm sm:text-base leading-relaxed"
          >
            <p>
              I investigate failure modes where asynchronous networking, automated workflows, and distributed access controls intersect.
              My work focuses on practical vulnerability discovery in production open-source software—demonstrating real attack paths through minimal, reproducible proof-of-concepts and collaborating directly with maintainers to deliver resilient upstream fixes.
            </p>

            <p>
              Rather than abstract security scanning, I examine source architectures, event loops, and resource lifecycles.
              This approach uncovered the file descriptor exhaustion bug in Apple Container&apos;s Swift-NIO connect handler and critical command injection vulnerabilities in CI/CD composite actions.
            </p>

            <p>
              Alongside security research, I direct software engineering at{" "}
              <strong className="text-white font-medium">Net Corporation</strong>, building full-stack web applications and high-throughput data transmission systems.
              Currently pursuing a Master of Computer Applications (MCA), combining rigorous computer science foundations with production deployment experience.
            </p>

            {/* Micro Dossier */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-xs font-mono">
              <div>
                <span className="text-neutral-500 uppercase tracking-wider block text-[10px] mb-1">
                  LOCATION
                </span>
                <span className="text-neutral-200">{profileData.location}</span>
              </div>
              <div>
                <span className="text-neutral-500 uppercase tracking-wider block text-[10px] mb-1">
                  ORGANIZATION
                </span>
                <span className="text-neutral-200">Net Corporation (Founder)</span>
              </div>
              <div>
                <span className="text-neutral-500 uppercase tracking-wider block text-[10px] mb-1">
                  ACADEMICS
                </span>
                <span className="text-neutral-200">MCA (Candidate) · BCA (2025)</span>
              </div>
              <div>
                <span className="text-neutral-500 uppercase tracking-wider block text-[10px] mb-1">
                  RESEARCH FOCUS
                </span>
                <span className="text-emerald-400">Runtimes · AppSec · CI/CD</span>
              </div>
            </div>
          </motion.div>

          {/* Research Directives Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-6 space-y-4"
          >
            <div className="text-xs font-mono tracking-widest text-neutral-400 uppercase mb-4">
              OPERATING METHODOLOGY
            </div>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {directives.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.num}
                    className="py-5 group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-[11px] font-mono text-emerald-400 font-bold">
                          {item.num}
                        </span>
                        <h3 className="text-xs font-mono font-semibold text-white tracking-wider">
                          {item.title}
                        </h3>
                      </div>
                      <Icon size={14} className="text-neutral-500 group-hover:text-neutral-300 transition-colors" />
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed pl-7">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
