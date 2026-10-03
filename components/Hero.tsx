"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, Shield, ArrowUpRight } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";
import { profileData } from "@/data/profile";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-between pt-28 sm:pt-36 pb-12 px-6 sm:px-10 md:px-14 lg:px-20 z-10 overflow-hidden">
      {/* Asymmetric left vignette: guarantees 100% typographic legibility while keeping right visual anchor completely unblocked */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-black/90 via-black/60 to-transparent pointer-events-none z-0" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-0" />

      {/* Main Narrative Block */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-2xl lg:max-w-3xl w-full my-auto"
      >
        {/* Technical Coordinate & Identity Mark */}
        <motion.div variants={itemVariants} className="flex items-center space-x-3 mb-6">
          <span className="w-1.5 h-1.5 bg-emerald-400 shrink-0" />
          <p className="font-mono text-[11px] sm:text-xs text-neutral-400 tracking-widest uppercase">
            SEC_RESEARCH // RUNTIMES &amp; SUPPLY CHAINS · HOSUR, IN
          </p>
        </motion.div>

        {/* Primary Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 leading-[0.94] uppercase select-text"
        >
          MADHAN<br />
          <span className="text-neutral-400 font-light">ALAGARSAMY</span>
        </motion.h1>

        {/* Crisp Domain Specifier */}
        <motion.div
          variants={itemVariants}
          className="text-xs sm:text-sm font-mono text-neutral-300 tracking-wider mb-6 flex flex-wrap items-center gap-x-3 gap-y-1"
        >
          <span className="text-white font-medium">Independent Security Researcher</span>
          <span className="text-neutral-600">/</span>
          <span>Systems Developer</span>
          <span className="text-neutral-600">/</span>
          <span className="text-neutral-400">Founder, Net Corporation</span>
        </motion.div>

        {/* Direct, Un-hyped Summary */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base md:text-lg text-neutral-300 max-w-xl mb-10 leading-relaxed font-light select-text"
        >
          Researching failure modes in open-source runtimes, CI/CD pipelines, and network handlers.
          Vulnerability disclosures acknowledged by Espressif and Apple maintainers, and published under verified GitHub Security Advisories.
        </motion.p>

        {/* Restrained Purposeful Actions */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-3 sm:gap-4"
        >
          <a
            href="#advisory"
            className="inline-flex items-center justify-center space-x-2 px-5 py-3 bg-white text-black font-mono text-xs tracking-wider uppercase font-semibold transition-all hover:bg-neutral-200 active:scale-[0.99]"
          >
            <span>REVIEW DISCLOSURES</span>
            <ArrowDown size={13} />
          </a>

          <Link
            href="/blog"
            className="inline-flex items-center justify-center space-x-2 px-5 py-3 border border-white/20 text-neutral-200 font-mono text-xs tracking-wider uppercase font-medium hover:border-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <Shield size={13} className="text-emerald-400" />
            <span>RESEARCH WRITELOG (6)</span>
          </Link>

          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors py-3 px-2 group"
          >
            <GithubIcon size={14} className="text-neutral-400 group-hover:text-white" />
            <span>github.com/{profileData.githubUsername}</span>
            <ArrowUpRight size={11} className="text-neutral-600 group-hover:text-white transition-colors" />
          </a>
        </motion.div>
      </motion.div>

      {/* Credibility Ledger Strip - High Taste Technical Footnote */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="relative z-10 w-full pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 text-xs font-mono"
      >
        <div>
          <span className="text-neutral-500 uppercase tracking-wider block text-[10px] mb-1">
            01 // SELF-HOSTED RUNNER DISCLOSURE
          </span>
          <a
            href="https://github.com/esp-rs/espflash/pull/1074"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-emerald-400 transition-colors flex items-center space-x-1 group"
          >
            <span className="font-medium">Espressif espflash PR #1074</span>
            <ArrowUpRight size={11} className="text-neutral-500 group-hover:text-emerald-400" />
          </a>
          <p className="text-neutral-400 text-[11px] font-sans mt-0.5">
            Self-hosted runner RCE acknowledged &amp; gated
          </p>
        </div>

        <div>
          <span className="text-neutral-500 uppercase tracking-wider block text-[10px] mb-1">
            02 // VENDOR ACKNOWLEDGMENT
          </span>
          <a
            href="https://github.com/apple/container/issues/2261"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-emerald-400 transition-colors flex items-center space-x-1 group"
          >
            <span className="font-medium">Apple Container #2261</span>
            <ArrowUpRight size={11} className="text-neutral-500 group-hover:text-emerald-400" />
          </a>
          <p className="text-neutral-400 text-[11px] font-sans mt-0.5">
            Swift-NIO socket FD leak resolved in PR #2260
          </p>
        </div>

        <div>
          <span className="text-neutral-500 uppercase tracking-wider block text-[10px] mb-1">
            03 // PUBLISHED ADVISORIES
          </span>
          <a
            href="#advisory"
            className="text-white hover:text-emerald-400 transition-colors flex items-center space-x-1 group"
          >
            <span className="font-medium">4 GitHub Security Advisories</span>
            <ArrowDown size={11} className="text-neutral-500 group-hover:text-emerald-400" />
          </a>
          <p className="text-neutral-400 text-[11px] font-sans mt-0.5">
            Command Injection (CWE-78), PAT Leakage, IDOR
          </p>
        </div>
      </motion.div>
    </section>
  );
}

