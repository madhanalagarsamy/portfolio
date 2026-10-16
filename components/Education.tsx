"use client";

import { motion } from "framer-motion";
import { educationData } from "@/data/education";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32 px-6 sm:px-10 md:px-14 lg:px-20 z-10 bg-black">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-18 max-w-2xl"
        >
          <div className="text-[#2997ff] text-xs sm:text-sm font-semibold tracking-[-0.01em] mb-3">
            Academic Background
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] leading-tight text-[#f5f5f7] mb-3">
            Education.
          </h2>
          <p className="text-[#86868b] text-base sm:text-lg font-normal leading-relaxed">
            Computer applications foundation affiliated to Periyar University.
          </p>
        </motion.div>

        {/* Education Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((item, idx) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#161617] border border-white/[0.08] hover:border-white/[0.18] rounded-[28px] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.06] text-xs">
                  <span className="text-[#2997ff] font-semibold">DEGREE 0{idx + 1}</span>
                  <span className="px-3 py-1 bg-[#1d1d1f] rounded-full text-[#30d158] font-medium border border-[#30d158]/20">
                    {item.status}
                  </span>
                </div>

                <div className="w-12 h-12 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-6">
                  <GraduationCap size={22} className="text-[#2997ff]" />
                </div>

                <h3 className="text-2xl font-semibold text-[#f5f5f7] tracking-tight mb-3">
                  {item.degree}
                </h3>

                <div className="space-y-1 text-sm">
                  <div className="text-[#f5f5f7] font-medium">{item.institution}</div>
                  <div className="text-[#86868b]">{item.affiliation}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
