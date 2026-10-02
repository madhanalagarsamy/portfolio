"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/data/experience";
import { Calendar, MapPin } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 px-6 sm:px-10 md:px-14 lg:px-20 z-10 border-t border-white/10 bg-black">
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
              06 // TRACK RECORD
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            PROFESSIONAL &amp; RESEARCH <br className="hidden sm:inline" />
            TIMELINE
          </h2>
          <p className="mt-4 text-neutral-400 font-light text-sm sm:text-base max-w-2xl leading-relaxed">
            History of software engineering leadership at Net Corporation and independent vulnerability research.
          </p>
        </motion.div>

        {/* Timeline Stack */}
        <div className="relative border-l border-white/15 ml-3 sm:ml-6 space-y-12 pl-6 sm:pl-10">
          {experienceData.map((item, index) => {
            const isFounder = item.category === "FOUNDER";

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Minimal node marker */}
                <span className="absolute -left-[31px] sm:-left-[47px] top-2 w-3 h-3 bg-neutral-900 border border-white/60 group-hover:border-emerald-400 transition-colors" />

                {/* Dossier Card */}
                <div className="border border-white/10 bg-neutral-950 p-6 sm:p-8">
                  {/* Meta Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-white/10 text-xs font-mono">
                    <div className="flex items-center space-x-2">
                      <span className="text-emerald-400 font-bold">
                        {isFounder ? "VENTURE //" : "RESEARCH //"}
                      </span>
                      <span className="text-white font-semibold tracking-wide">
                        {item.organization}
                      </span>
                    </div>

                    <div className="flex items-center space-x-4 text-neutral-400">
                      <span className="flex items-center space-x-1.5">
                        <Calendar size={12} className="text-neutral-500" />
                        <span>{item.period}</span>
                      </span>
                      {item.location && (
                        <span className="flex items-center space-x-1.5 hidden sm:flex">
                          <MapPin size={12} className="text-neutral-500" />
                          <span>{item.location}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Role Title */}
                  <h3 className="text-lg sm:text-xl font-bold font-mono text-white mb-6">
                    {item.role}
                  </h3>

                  {/* Responsibilities */}
                  <ul className="space-y-3 font-sans">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li
                        key={rIdx}
                        className="flex items-start space-x-3 text-neutral-300 font-light text-sm sm:text-base leading-relaxed"
                      >
                        <span className="text-neutral-600 font-mono mt-0.5 select-none shrink-0">—</span>
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
