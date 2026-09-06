"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { Mail, Phone, Copy, Check, ArrowUpRight } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contact" className="relative py-32 px-6 md:px-12 z-10 select-none">
      {/* Ultra-Light Transparent Overlay */}
      <div className="absolute inset-0 bg-black/5 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center md:text-left">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="flex items-center space-x-3 mb-3 justify-center md:justify-start">
            <span className="text-xs font-mono text-neutral-400 tracking-widest uppercase">08 / CONTACT</span>
            <span className="w-12 h-[1px] bg-neutral-700" />
          </div>

          <h2 className="text-4xl md:text-7xl font-extrabold text-white tracking-tight leading-none mb-6">
            LET'S BUILD<br />
            <span className="text-neutral-400">SOMETHING SERIOUS.</span>
          </h2>

          <p className="text-neutral-300 font-light text-base md:text-lg max-w-2xl mx-auto md:mx-0">
            Open for high-impact security research, software engineering initiatives, and technical leadership opportunities.
          </p>
        </motion.div>

        {/* Contact Links Grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {/* Email Card */}
          <div className="bg-black/20 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:bg-black/30 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white">
                  <Mail size={18} />
                </span>
                <button
                  type="button"
                  onClick={() => copyToClipboard(profileData.email, "email")}
                  className="text-xs font-mono text-neutral-400 hover:text-white p-1.5 rounded bg-white/5 border border-white/10 transition-colors"
                  aria-label="Copy Email"
                >
                  {copied === "email" ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block mb-2">EMAIL ADDRESS</span>
              <a
                href={`mailto:${profileData.email}`}
                className="text-base md:text-lg font-mono font-semibold text-white hover:underline break-all"
              >
                {profileData.email}
              </a>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>SEND INQUIRY</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-black/20 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:bg-black/30 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white">
                  <Phone size={18} />
                </span>
                <button
                  type="button"
                  onClick={() => copyToClipboard(profileData.phone, "phone")}
                  className="text-xs font-mono text-neutral-400 hover:text-white p-1.5 rounded bg-white/5 border border-white/10 transition-colors"
                  aria-label="Copy Phone Number"
                >
                  {copied === "phone" ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block mb-2">DIRECT PHONE</span>
              <a
                href={`tel:${profileData.phone}`}
                className="text-base md:text-lg font-mono font-semibold text-white hover:underline"
              >
                +91 {profileData.phone}
              </a>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>CALL DIRECT</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          {/* GitHub Card */}
          <div className="bg-black/20 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:bg-black/30 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white">
                  <GithubIcon size={18} />
                </span>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-neutral-400 hover:text-white p-1.5 rounded bg-white/5 border border-white/10 transition-colors"
                  aria-label="Open GitHub profile"
                >
                  <ArrowUpRight size={14} />
                </a>
              </div>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block mb-2">GITHUB REPOSITORIES</span>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base md:text-lg font-mono font-semibold text-white hover:underline break-all"
              >
                {profileData.githubDisplay}
              </a>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>OPEN SOURCE & CODE</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
