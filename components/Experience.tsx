"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/data/experience";
import { Calendar, MapPin } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 px-6 sm:px-10 md:px-14 lg:px-20 z-10 bg-black">
      <div className="max-w-5xl mx-auto">
        {/* Apple Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-18 max-w-2xl"
        >
          <div className="text-[#2997ff] text-xs sm:text-sm font-semibold tracking-[-0.01em] mb-3">
            Career
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] leading-tight text-[#f5f5f7] mb-3">
            Experience.
          </h2>
          <p className="text-[#86868b] text-base sm:text-lg font-normal leading-relaxed">
            Software engineering leadership at Net Corporation and independent security research.
          </p>
        </motion.div>

        {/* Experience Stack */}
        <div className="space-y-6">
          {experienceData.map((item, index) => {
            const isFounder = item.category === "FOUNDER";

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-[#161617] border border-white/[0.08] hover:border-white/[0.18] rounded-[28px] p-8 sm:p-10 transition-all duration-300"
              >
                {/* Meta Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-5 pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center space-x-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        isFounder
                          ? "bg-[#2997ff]/15 border border-[#2997ff]/30 text-[#2997ff]"
                          : "bg-[#30d158]/15 border border-[#30d158]/30 text-[#30d158]"
                      }`}
                    >
                      {isFounder ? "FOUNDER & LEAD" : "RESEARCH"}
                    </span>
                    <span className="text-base sm:text-lg font-semibold text-white">
                      {item.organization}
                    </span>
                  </div>

                  <div className="flex items-center space-x-4 text-xs text-[#86868b]">
                    <span className="flex items-center space-x-1.5">
                      <Calendar size={13} className="text-[#86868b]" />
                      <span>{item.period}</span>
                    </span>
                    {item.location && (
                      <span className="flex items-center space-x-1.5 hidden sm:flex">
                        <MapPin size={13} className="text-[#86868b]" />
                        <span>{item.location}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Role Title */}
                <h3 className="text-xl font-semibold text-[#f5f5f7] tracking-tight mb-5">
                  {item.role}
                </h3>

                {/* Short responsibilities */}
                <ul className="space-y-2.5">
                  {item.responsibilities.map((resp, rIdx) => (
                    <li
                      key={rIdx}
                      className="flex items-start space-x-3 text-[#a1a1a6] text-sm sm:text-base font-normal leading-relaxed"
                    >
                      <span className="text-[#2997ff] text-base leading-none mt-1 select-none shrink-0">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
