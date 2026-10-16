"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";

export default function Skills() {
  const categoryAccents = [
    "text-[#2997ff]",
    "text-[#30d158]",
    "text-[#ff9f0a]",
    "text-[#bf5af2]",
    "text-[#ff453a]",
  ];

  return (
    <section id="skills" className="relative py-28 sm:py-36 px-6 sm:px-10 md:px-14 lg:px-20 z-10 bg-black">
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
            Technical Specifications
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] leading-tight text-[#f5f5f7] mb-6">
            Engineering Capabilities.
            <br />
            <span className="text-[#86868b]">Mastery Across the Full Stack.</span>
          </h2>
          <p className="text-[#86868b] text-base sm:text-lg font-normal leading-relaxed">
            Categorized index of systems, vulnerability research disciplines, distributed backends, and pipeline automation tools.
          </p>
        </motion.div>

        {/* Apple Tech Specs Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, idx) => {
            const accent = categoryAccents[idx % categoryAccents.length];
            const isWide = idx === 0 || idx === 1;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`bg-[#161617] border border-white/[0.08] hover:border-white/[0.2] rounded-[28px] p-8 sm:p-10 transition-all duration-400 flex flex-col justify-between ${
                  isWide ? "lg:col-span-1" : "lg:col-span-1"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.06]">
                    <span className="text-[11px] font-semibold text-[#86868b] uppercase tracking-wider">
                      SPEC 0{idx + 1}
                    </span>
                    <span className={`text-xs font-mono font-semibold ${accent}`}>
                      SYS // {idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-[#f5f5f7] tracking-tight mb-6">
                    {category.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs font-normal text-[#f5f5f7] bg-[#1d1d1f] border border-white/[0.08] hover:border-white/[0.2] rounded-full transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.06] text-[11px] text-[#86868b] flex items-center justify-between">
                  <span>PRODUCTION TESTED</span>
                  <span className="text-[#30d158]">● ACTIVE</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
