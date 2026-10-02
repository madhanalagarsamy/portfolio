"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 px-6 sm:px-10 md:px-14 lg:px-20 z-10 border-t border-white/10 bg-black">
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
              05 // CAPABILITIES MATRIX
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            TECHNICAL CAPABILITIES &amp; <br className="hidden sm:inline" />
            ENGINEERING STACK
          </h2>
          <p className="mt-4 text-neutral-400 font-light text-sm sm:text-base max-w-2xl leading-relaxed">
            Categorized index of systems, vulnerability research disciplines, distributed backends, and pipeline automation tools.
          </p>
        </motion.div>

        {/* Structured Capabilities Index Table */}
        <div className="border-t border-white/10 divide-y divide-white/10">
          {skillsData.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start group"
            >
              {/* Category Identifier */}
              <div className="lg:col-span-4 flex items-center space-x-3">
                <span className="text-xs font-mono text-emerald-400 font-bold shrink-0">
                  0{idx + 1} //
                </span>
                <h3 className="text-xs sm:text-sm font-mono font-semibold text-white tracking-wider uppercase">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags List */}
              <div className="lg:col-span-8 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-mono text-neutral-300 bg-neutral-950 border border-white/10 hover:border-white/30 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
