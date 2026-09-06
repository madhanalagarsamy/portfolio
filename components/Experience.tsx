"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/data/experience";
import { Building2, Shield, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6 md:px-12 z-10 select-none">
      {/* Ultra-Light Section Overlay */}
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
            <span className="text-xs font-mono text-neutral-400 tracking-widest uppercase">02 / EXPERIENCE</span>
            <span className="w-12 h-[1px] bg-neutral-700" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            PROFESSIONAL TIMELINE
          </h2>
        </motion.div>

        {/* Timeline Stack */}
        <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-12 pl-6 md:pl-10">
          {experienceData.map((item, index) => {
            const isFounder = item.category === "FOUNDER";
            const Icon = isFounder ? Building2 : Shield;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Timeline Dot */}
                <span className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-neutral-900 border-2 border-white/60 group-hover:border-white group-hover:scale-125 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-300" />

                {/* Glass Experience Card */}
                <div className="bg-black/10 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-xs hover:bg-black/30 hover:border-white/30 hover:shadow-[0_0_25px_rgba(255,255,255,0.07)] hover:-translate-y-0.5 transition-all duration-500">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <span className="inline-flex items-center space-x-2 text-xs font-mono text-neutral-400 bg-white/[0.05] px-3 py-1 rounded-md border border-white/10">
                      <Icon size={14} className="text-white/80" />
                      <span>{item.organization}</span>
                    </span>

                    <div className="flex items-center space-x-4 text-xs font-mono text-neutral-400">
                      <span className="flex items-center space-x-1.5">
                        <Calendar size={13} />
                        <span>{item.period}</span>
                      </span>
                      {item.location && (
                        <span className="flex items-center space-x-1.5">
                          <MapPin size={13} />
                          <span>{item.location}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-6 tracking-wide">
                    {item.role}
                  </h3>

                  <ul className="space-y-3">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start space-x-3 text-neutral-300 font-light text-sm md:text-base leading-relaxed">
                        <CheckCircle2 size={16} className="text-neutral-500 mt-1 shrink-0 group-hover:text-neutral-300 transition-colors" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
