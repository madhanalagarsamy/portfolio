"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, ShieldCheck, ExternalLink, ArrowDown } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";
import { profileData } from "@/data/profile";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-between pt-32 sm:pt-40 pb-16 px-6 sm:px-10 md:px-14 lg:px-20 z-10 overflow-hidden">
      {/* Apple Subtle Vignette Gradient Masks */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-black/90 via-black/60 to-transparent pointer-events-none z-0" />
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-0" />

      {/* Main Narrative Block */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-3xl lg:max-w-4xl w-full my-auto"
      >
        {/* Apple Eyebrow Ribbon */}
        <motion.div variants={itemVariants} className="flex items-center space-x-2 mb-4">
          <span className="text-[#2997ff] text-xs sm:text-sm font-semibold tracking-[-0.01em]">
            Vulnerability Research &amp; Systems Architecture
          </span>
          <span className="text-[#86868b]">·</span>
          <span className="text-[#86868b] text-xs sm:text-sm font-normal">
            Apple Container Acknowledged
          </span>
        </motion.div>

        {/* Apple Keynote Style Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.03em] leading-[1.02] text-white mb-6 select-text"
        >
          <span className="block bg-gradient-to-b from-[#ffffff] via-[#f5f5f7] to-[#86868b] bg-clip-text text-transparent">
            Security Research.
          </span>
          <span className="block text-[#f5f5f7]">
            Engineered for Defense.
          </span>
        </motion.h1>

        {/* Apple Subhead */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-[#86868b] max-w-2xl mb-8 leading-relaxed font-normal tracking-[-0.015em] select-text"
        >
          Researching architectural failure modes across Swift-NIO, automated CI/CD supply chains, and distributed systems. Discoveries acknowledged by Apple maintainers with verified CVE and GHSA advisories.
        </motion.p>

        {/* Apple Action Button Group */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-4 mb-12"
        >
          <a
            href="#advisory"
            className="inline-flex items-center space-x-1.5 px-6 py-3 bg-[#0071e3] hover:bg-[#0077ed] text-white text-[15px] font-normal rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#0071e3]/20"
          >
            <span>Explore Advisories</span>
            <ChevronRight size={16} />
          </a>

          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-white/[0.08] hover:bg-white/[0.14] text-[#f5f5f7] border border-white/[0.14] text-[15px] font-normal rounded-full backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <ShieldCheck size={16} className="text-[#2997ff]" />
            <span>Research Writelog</span>
          </Link>

          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-[14px] text-[#2997ff] hover:text-[#70baff] hover:underline px-3 py-2 transition-colors group"
          >
            <GithubIcon size={16} className="text-[#2997ff]" />
            <span>github.com/{profileData.githubUsername}</span>
            <span className="transition-transform group-hover:translate-x-0.5">›</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Apple Bento Highlights Ribbon */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.8 }}
        className="relative z-10 w-full pt-8 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {/* Tile 1: Apple Acknowledgment */}
        <div className="bg-[#161617]/70 border border-white/[0.08] hover:border-white/[0.18] rounded-[20px] p-5 backdrop-blur-md transition-all duration-300 group">
          <div className="text-[11px] font-semibold text-[#2997ff] uppercase tracking-wider mb-1 flex items-center justify-between">
            <span>Apple Open Source</span>
            <span className="text-white"></span>
          </div>
          <a
            href="https://github.com/apple/container/issues/2261"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] font-semibold text-[#f5f5f7] hover:text-[#2997ff] transition-colors flex items-center justify-between"
          >
            <span>Apple Container #2261</span>
            <ExternalLink size={13} className="text-[#86868b] group-hover:text-[#2997ff]" />
          </a>
          <p className="text-xs text-[#86868b] mt-1.5 leading-normal">
            Swift-NIO socket FD leak identified and resolved in PR #2260.
          </p>
        </div>

        {/* Tile 2: Critical GHSAs */}
        <div className="bg-[#161617]/70 border border-white/[0.08] hover:border-white/[0.18] rounded-[20px] p-5 backdrop-blur-md transition-all duration-300 group">
          <div className="text-[11px] font-semibold text-[#ff9f0a] uppercase tracking-wider mb-1">
            GitHub Security Advisory
          </div>
          <a
            href="#advisory"
            className="text-[15px] font-semibold text-[#f5f5f7] hover:text-[#ff9f0a] transition-colors flex items-center justify-between"
          >
            <span>4 Verified Advisories</span>
            <ArrowDown size={13} className="text-[#86868b] group-hover:text-[#ff9f0a]" />
          </a>
          <p className="text-xs text-[#86868b] mt-1.5 leading-normal">
            Command injection, long-lived PAT leakage, and IDOR disclosures.
          </p>
        </div>

        {/* Tile 3: Espressif espflash */}
        <div className="bg-[#161617]/70 border border-white/[0.08] hover:border-white/[0.18] rounded-[20px] p-5 backdrop-blur-md transition-all duration-300 group">
          <div className="text-[11px] font-semibold text-[#30d158] uppercase tracking-wider mb-1">
            CI Runner Hardening
          </div>
          <a
            href="https://github.com/esp-rs/espflash/pull/1074"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] font-semibold text-[#f5f5f7] hover:text-[#30d158] transition-colors flex items-center justify-between"
          >
            <span>espflash PR #1074</span>
            <ExternalLink size={13} className="text-[#86868b] group-hover:text-[#30d158]" />
          </a>
          <p className="text-xs text-[#86868b] mt-1.5 leading-normal">
            Self-hosted runner RCE vector mitigated and gated in upstream.
          </p>
        </div>

        {/* Tile 4: Flagship Optical Protocol */}
        <div className="bg-[#161617]/70 border border-white/[0.08] hover:border-white/[0.18] rounded-[20px] p-5 backdrop-blur-md transition-all duration-300 group">
          <div className="text-[11px] font-semibold text-[#bf5af2] uppercase tracking-wider mb-1">
            WASM Architecture
          </div>
          <a
            href="#projects"
            className="text-[15px] font-semibold text-[#f5f5f7] hover:text-[#bf5af2] transition-colors flex items-center justify-between"
          >
            <span>Decimal Optical Protocol</span>
            <ChevronRight size={14} className="text-[#86868b] group-hover:text-[#bf5af2]" />
          </a>
          <p className="text-xs text-[#86868b] mt-1.5 leading-normal">
            Screen-to-camera transmission with Duo-QR &amp; Luby Transform.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
