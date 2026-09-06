"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";
import { Code, Cpu, Globe, Shield, Wrench } from "lucide-react";

export default function Skills() {
  const categoryIcons = [Code, Cpu, Globe, Shield, Wrench];

  return (
    <section id="skills" className="relative py-28 px-6 md:px-12 z-10 select-none">
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
            <span className="text-xs font-mono text-neutral-400 tracking-widest uppercase">05 / SKILLS</span>
            <span className="w-12 h-[1px] bg-neutral-700" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            TECHNICAL & ENGINEERING STACK
          </h2>
        </motion.div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-black/20 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:bg-black/30 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-white/10">
                  <span className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-white">
                    <Icon size={16} />
                  </span>
                  <h3 className="text-xs font-mono tracking-widest text-neutral-300 uppercase font-semibold">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-neutral-200 hover:text-white hover:bg-white/10 hover:border-white/25 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
