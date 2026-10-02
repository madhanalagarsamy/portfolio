"use client";

import { motion } from "framer-motion";
import { educationData } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32 px-6 sm:px-10 md:px-14 lg:px-20 z-10 border-t border-white/10 bg-black">
      <div className="max-w-5xl mx-auto">
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
              07 // ACADEMIC RECORD
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            COMPUTER SCIENCE <br className="hidden sm:inline" />
            EDUCATION
          </h2>
          <p className="mt-4 text-neutral-400 font-light text-sm sm:text-base max-w-2xl leading-relaxed">
            Formal computer applications foundation affiliated to Periyar University.
          </p>
        </motion.div>

        {/* Education Dossier Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((item, idx) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border border-white/10 bg-neutral-950 p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10 text-xs font-mono">
                  <span className="text-emerald-400 font-bold">DEGREE // 0{idx + 1}</span>
                  <span className="text-neutral-400">{item.status}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold font-mono text-white mb-4">
                  {item.degree}
                </h3>

                <div className="space-y-1 text-xs font-mono text-neutral-300">
                  <div className="text-neutral-200">{item.institution}</div>
                  <div className="text-neutral-500">{item.affiliation}</div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 text-[11px] font-mono text-neutral-600 uppercase">
                CURRICULUM: ADVANCED COMPUTING &amp; ALGORITHMS
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
