"use client";

import { motion } from "framer-motion";
import { ArrowDown, Shield, Terminal, Building2 } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";
import { profileData } from "@/data/profile";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-start pt-24 pb-16 px-6 md:px-12 lg:px-20 z-10 select-none overflow-hidden">
      {/* Localized ultra-light left gradient layer - keeps typography readable without hiding the subject */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-2/3 bg-gradient-to-r from-black/30 via-black/10 to-transparent pointer-events-none z-0" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="relative z-10 max-w-xl lg:max-w-2xl w-full flex flex-col justify-center items-start text-left mr-auto"
      >
        {/* Category Pill */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/40 border border-white/10 text-xs font-mono tracking-widest text-neutral-300 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>PORTFOLIO & TECHNICAL IDENTITY</span>
          </span>
        </motion.div>

        {/* Primary Name Display - MADHAN ALAGARSAMY */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.08] drop-shadow-2xl uppercase"
        >
          MADHAN
          <span className="block text-neutral-200">
            ALAGARSAMY
          </span>
        </motion.h1>

        {/* Three Core Identities */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-2 mb-8 font-mono text-xs sm:text-sm tracking-wider text-neutral-200"
        >
          <span className="flex items-center space-x-2 bg-black/50 px-3 py-1.5 rounded-md border border-white/15 backdrop-blur-md">
            <Shield size={15} className="text-neutral-400" />
            <span>CYBERSECURITY RESEARCHER</span>
          </span>
          <span className="flex items-center space-x-2 bg-black/50 px-3 py-1.5 rounded-md border border-white/15 backdrop-blur-md">
            <Terminal size={15} className="text-neutral-400" />
            <span>SOFTWARE DEVELOPER</span>
          </span>
          <span className="flex items-center space-x-2 bg-black/50 px-3 py-1.5 rounded-md border border-white/15 backdrop-blur-md">
            <Building2 size={15} className="text-neutral-400" />
            <span>FOUNDER</span>
          </span>
        </motion.div>

        {/* Resume Summary */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base md:text-lg text-neutral-200 max-w-xl mb-10 leading-relaxed font-light drop-shadow"
        >
          Independent Cybersecurity Researcher, Developer and Founder of{" "}
          <span className="text-white font-medium underline underline-offset-4 decoration-white/40">
            Net Corporation
          </span>
          . Specialized in full-stack web application development, production deployment, and secure system architecture.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center space-x-3 px-7 py-3.5 rounded-full bg-white text-black font-mono text-xs tracking-widest uppercase font-semibold transition-all duration-300 hover:bg-neutral-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-white/10"
          >
            <span>VIEW WORK</span>
            <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
          </a>

          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-3 px-7 py-3.5 rounded-full bg-black/50 border border-white/20 text-white font-mono text-xs tracking-widest uppercase font-medium backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:scale-[1.02] active:scale-[0.98]"
          >
            <GithubIcon size={15} />
            <span>GITHUB</span>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex items-center space-x-3 text-neutral-400 text-xs font-mono tracking-widest uppercase"
        >
          <span className="w-8 h-[1px] bg-neutral-600" />
          <span>SCROLL TO EXPLORE</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
