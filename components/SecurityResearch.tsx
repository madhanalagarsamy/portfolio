"use client";

import { motion } from "framer-motion";
import { researchData } from "@/data/research";
import { ShieldAlert, FileSearch, Lock, GitPullRequest } from "lucide-react";

export default function SecurityResearch() {
  const icons = [GitPullRequest, FileSearch, Lock];

  return (
    <section id="research" className="relative py-28 px-6 md:px-12 z-10 select-none">
      {/* Ultra-Light Transparent Overlay */}
      <div className="absolute inset-0 bg-black/5 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center space-x-3 mb-3">
            <span className="text-xs font-mono text-neutral-400 tracking-widest uppercase">03 / SECURITY RESEARCH</span>
            <span className="w-12 h-[1px] bg-neutral-700" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            DEFENSIVE SOFTWARE & VULNERABILITY RESEARCH
          </h2>
          <p className="mt-4 text-neutral-400 font-light text-base max-w-2xl">
            Methodical analysis of open-source ecosystems, vulnerability discovery, and secure architectural implementation.
          </p>
        </motion.div>

        {/* Technical Research Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {researchData.pillars.map((pillar, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: idx * 0.12 }}
                className="bg-black/10 border border-white/10 rounded-2xl p-8 backdrop-blur-xs hover:bg-black/20 hover:border-white/20 transition-all duration-500 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white/90 group-hover:scale-110 transition-transform">
                      <Icon size={20} />
                    </span>
                    <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest">
                      PILLAR 0{idx + 1}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-2">
                    {pillar.target}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-4 leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-neutral-300 font-light text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span>AUDIT METHODOLOGY</span>
                  <span className="text-white group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Technical Philosophy Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="bg-white/[0.02] border border-white/10 rounded-xl p-6 md:p-8 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-6"
        >
          <div className="flex items-start space-x-4">
            <ShieldAlert size={24} className="text-neutral-400 shrink-0 mt-1" />
            <div>
              <h4 className="text-base font-semibold text-white mb-1">
                Rigorous Defensive Engineering
              </h4>
              <p className="text-xs md:text-sm text-neutral-300 font-light">
                Focusing on proactive threat identification, code security desks, and resilient software structures prior to production deployment.
              </p>
            </div>
          </div>
          <div className="shrink-0 font-mono text-xs text-neutral-400 border-l sm:border-l border-white/10 pl-4">
            VAPT & SECURE REVIEW
          </div>
        </motion.div>
      </div>
    </section>
  );
}
