"use client";

import { motion } from "framer-motion";
import { educationData } from "@/data/education";
import { GraduationCap, Calendar, Landmark } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="relative py-28 px-6 md:px-12 z-10 select-none">
      {/* Ultra-Light Transparent Overlay */}
      <div className="absolute inset-0 bg-black/5 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center space-x-3 mb-3">
            <span className="text-xs font-mono text-neutral-400 tracking-widest uppercase">07 / EDUCATION</span>
            <span className="w-12 h-[1px] bg-neutral-700" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            ACADEMIC FOUNDATION
          </h2>
        </motion.div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((item, idx) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="bg-black/10 border border-white/10 rounded-2xl p-8 backdrop-blur-xs hover:bg-black/20 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <span className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white">
                    <GraduationCap size={20} />
                  </span>
                  <span className="inline-flex items-center space-x-1.5 text-xs font-mono text-neutral-400 bg-white/[0.05] px-3 py-1 rounded-md border border-white/10">
                    <Calendar size={12} />
                    <span>{item.status}</span>
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-white mb-3 tracking-wide">
                  {item.degree}
                </h3>

                <div className="space-y-1.5 text-sm text-neutral-300 font-light">
                  <div className="flex items-center space-x-2">
                    <Landmark size={14} className="text-neutral-500 shrink-0" />
                    <span className="font-medium text-white">{item.institution}</span>
                  </div>
                  <p className="text-xs font-mono text-neutral-400 pl-6">
                    {item.affiliation}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 text-xs font-mono text-neutral-400">
                ACADEMIC DEGREE PROGRAM
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
