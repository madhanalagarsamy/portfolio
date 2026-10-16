"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 px-6 sm:px-10 md:px-14 lg:px-20 z-10 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Apple Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-18 max-w-2xl"
        >
          <div className="text-[#2997ff] text-xs sm:text-sm font-semibold tracking-[-0.01em] mb-3">
            Technical Stack
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] leading-tight text-[#f5f5f7] mb-3">
            Capabilities.
          </h2>
          <p className="text-[#86868b] text-base sm:text-lg font-normal leading-relaxed">
            Systems programming, vulnerability research, and backend infrastructure.
          </p>
        </motion.div>

        {/* Apple Tech Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, idx) => {
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-[#161617] border border-white/[0.08] hover:border-white/[0.18] rounded-[28px] p-8 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-semibold text-[#f5f5f7] tracking-tight mb-5 pb-3 border-b border-white/[0.06]">
                    {category.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs font-normal text-[#f5f5f7] bg-[#1d1d1f] border border-white/[0.08] rounded-full cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
