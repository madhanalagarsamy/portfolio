"use client";

import { motion } from "framer-motion";
import { featuredProjectData } from "@/data/projects";
import { Cpu, ShieldCheck, Zap, Layers, ArrowUpRight } from "lucide-react";

export default function FeaturedProject() {
  return (
    <section id="projects" className="relative py-28 px-6 md:px-12 z-10 select-none">
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
            <span className="text-xs font-mono text-neutral-400 tracking-widest uppercase">06 / FEATURED PROJECT</span>
            <span className="w-12 h-[1px] bg-neutral-700" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            HIGH-THROUGHPUT OPTICAL TRANSFER PROTOCOL
          </h2>
        </motion.div>

        {/* Featured Project Showcase Container */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          className="bg-black/20 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm relative overflow-hidden"
        >
          {/* Subtle Ambient Radial Highlight */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          {/* Header & Badges */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <span className="inline-flex items-center space-x-2 text-xs font-mono text-neutral-400 bg-white/[0.05] px-3.5 py-1.5 rounded-full border border-white/10">
              <Zap size={14} className="text-white" />
              <span>FLAGSHIP PROTOCOL IMPLEMENTATION</span>
            </span>

            <div className="flex items-center space-x-2">
              {featuredProjectData.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-xs font-mono text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Title & Tagline */}
          <div className="mb-10">
            <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              {featuredProjectData.title}
            </h3>
            <p className="text-lg md:text-xl text-neutral-300 font-light max-w-3xl">
              {featuredProjectData.tagline}
            </p>
          </div>

          {/* Key Architecture Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-black/30 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-3">
                <Layers size={18} className="text-neutral-400" />
                <h4 className="text-xs font-mono tracking-widest text-neutral-300 uppercase font-semibold">
                  Duo-QR Mosaic
                </h4>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Optimized core optical transfer logic with a Duo-QR mosaic architecture to double throughput for large-scale file payloads.
              </p>
            </div>

            <div className="bg-black/30 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-3">
                <Cpu size={18} className="text-neutral-400" />
                <h4 className="text-xs font-mono tracking-widest text-neutral-300 uppercase font-semibold">
                  Luby Transform
                </h4>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Refined Luby Transform (Fountain Codes) for lossy screen-to-camera transmission, building upon original project by Evan Crawley (Bash Alarmist).
              </p>
            </div>

            <div className="bg-black/30 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-3">
                <ShieldCheck size={18} className="text-neutral-400" />
                <h4 className="text-xs font-mono tracking-widest text-neutral-300 uppercase font-semibold">
                  1 GB SHA-256
                </h4>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Upgraded application capabilities to support 1 GB optical transfers with integrated SHA-256 cryptographic verification.
              </p>
            </div>
          </div>

          {/* Original Attribution Footer */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-neutral-400">
            <div>
              ORIGINAL PROJECT CREDITS:{" "}
              <span className="text-white font-medium">{featuredProjectData.originalAuthor}</span>
            </div>
            <div className="flex items-center space-x-2 text-neutral-400">
              <span>WASM & PWA ARCHITECTURE</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
