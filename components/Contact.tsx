"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { Copy, Check, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-6 sm:px-10 md:px-14 lg:px-20 z-10 border-t border-white/10 bg-black">
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
              08 // DIRECT COMMUNICATIONS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            INQUIRIES &amp; <br className="hidden sm:inline" />
            SECURITY CORRESPONDENCE
          </h2>

          <p className="text-neutral-400 font-light text-sm sm:text-base max-w-2xl leading-relaxed">
            Available for vulnerability research engagements, systems architecture, and technical consulting. Coordinated vulnerability reports and inquiries are monitored directly.
          </p>
        </motion.div>

        {/* Contact Dossier Grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {/* Email Channel */}
          <div className="border border-white/10 bg-neutral-950 p-6 sm:p-8 flex flex-col justify-between group hover:border-white/30 transition-colors">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 text-xs font-mono">
                <span className="text-emerald-400 font-bold">CHANNEL // 01</span>
                <span className="text-neutral-500 uppercase tracking-wider">DIRECT EMAIL</span>
              </div>

              <div className="flex items-center justify-between gap-4 mb-4">
                <a
                  href={`mailto:${profileData.email}`}
                  className="text-base sm:text-lg font-mono font-bold text-white hover:text-emerald-400 transition-colors break-all"
                >
                  {profileData.email}
                </a>

                <button
                  type="button"
                  onClick={() => copyToClipboard(profileData.email, "email")}
                  className="px-2.5 py-1 text-[11px] font-mono text-neutral-400 hover:text-white border border-white/10 hover:border-white/30 bg-white/[0.02] transition-colors shrink-0 flex items-center space-x-1"
                  aria-label="Copy Email to Clipboard"
                >
                  {copied === "email" ? (
                    <>
                      <Check size={12} className="text-emerald-400" />
                      <span className="text-emerald-400">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-neutral-400 font-light leading-relaxed mb-6">
                Preferred for coordinated vulnerability disclosure notices, technical consulting, and architecture inquiries.
              </p>
            </div>

            <a
              href={`mailto:${profileData.email}`}
              className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-300 group-hover:text-emerald-400 transition-colors"
            >
              <span>COMPOSE TRANSMISSION</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* GitHub Channel */}
          <div className="border border-white/10 bg-neutral-950 p-6 sm:p-8 flex flex-col justify-between group hover:border-white/30 transition-colors">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 text-xs font-mono">
                <span className="text-emerald-400 font-bold">CHANNEL // 02</span>
                <span className="text-neutral-500 uppercase tracking-wider">VERSION CONTROL</span>
              </div>

              <div className="flex items-center justify-between gap-4 mb-4">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg font-mono font-bold text-white hover:text-emerald-400 transition-colors"
                >
                  github.com/{profileData.githubUsername}
                </a>

                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 text-[11px] font-mono text-neutral-400 hover:text-white border border-white/10 hover:border-white/30 bg-white/[0.02] transition-colors shrink-0 flex items-center space-x-1"
                  aria-label="Open GitHub Profile"
                >
                  <ArrowUpRight size={12} />
                  <span>VISIT</span>
                </a>
              </div>

              <p className="text-xs text-neutral-400 font-light leading-relaxed mb-6">
                Public research repositories, proof-of-concept scripts, and open-source software contributions.
              </p>
            </div>

            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-300 group-hover:text-emerald-400 transition-colors"
            >
              <span>EXPLORE REPOSITORIES</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </motion.div>

        {/* Operating Environment Ledger */}
        <div className="border border-white/10 bg-neutral-950 p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-neutral-400">
          <div>
            <span className="text-neutral-600 block text-[10px] mb-1">STATION</span>
            <span className="text-neutral-200">Hosur, Tamil Nadu · India</span>
          </div>
          <div>
            <span className="text-neutral-600 block text-[10px] mb-1">TIMEZONE</span>
            <span className="text-neutral-200">IST (UTC+05:30)</span>
          </div>
          <div>
            <span className="text-neutral-600 block text-[10px] mb-1">RESPONSE EXPECTATION</span>
            <span className="text-emerald-400">&lt; 24h for security disclosures</span>
          </div>
        </div>
      </div>
    </section>
  );
}
