"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { Copy, Check, Mail, ChevronRight, ShieldCheck } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

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
    <section id="contact" className="relative py-28 sm:py-36 px-6 sm:px-10 md:px-14 lg:px-20 z-10 bg-black">
      <div className="max-w-5xl mx-auto">
        {/* Apple Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-20 max-w-3xl"
        >
          <div className="text-[#2997ff] text-xs sm:text-sm font-semibold tracking-[-0.01em] mb-3">
            Direct Communications
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] leading-tight text-[#f5f5f7] mb-6">
            Contact.
            <br />
            <span className="text-[#86868b]">Security Correspondence &amp; Inquiries.</span>
          </h2>

          <p className="text-[#86868b] text-base sm:text-lg font-normal leading-relaxed">
            Available for vulnerability research engagements, systems architecture, and technical consulting. Coordinated vulnerability reports and inquiries are monitored directly.
          </p>
        </motion.div>

        {/* Apple Contact Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        >
          {/* Card 1: Direct Email */}
          <div className="bg-[#161617] border border-white/[0.08] hover:border-white/[0.2] rounded-[28px] p-8 sm:p-10 flex flex-col justify-between transition-all duration-400 group">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.06] text-xs">
                <span className="text-[#2997ff] font-semibold">CHANNEL 01</span>
                <span className="text-[#86868b] uppercase tracking-wider">DIRECT EMAIL</span>
              </div>

              <div className="w-12 h-12 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-6">
                <Mail size={22} className="text-[#2997ff]" />
              </div>

              <div className="flex items-center justify-between gap-4 mb-4">
                <a
                  href={`mailto:${profileData.email}`}
                  className="text-lg sm:text-xl font-semibold text-white hover:text-[#2997ff] transition-colors break-all"
                >
                  {profileData.email}
                </a>

                <button
                  type="button"
                  onClick={() => copyToClipboard(profileData.email, "email")}
                  className="px-3 py-1.5 text-xs text-[#86868b] hover:text-white rounded-full bg-[#1d1d1f] border border-white/10 hover:border-white/20 transition-all shrink-0 flex items-center space-x-1.5"
                  aria-label="Copy Email to Clipboard"
                >
                  {copied === "email" ? (
                    <>
                      <Check size={13} className="text-[#30d158]" />
                      <span className="text-[#30d158] font-medium">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-sm text-[#86868b] font-normal leading-relaxed mb-6">
                Preferred for coordinated vulnerability disclosure notices, technical consulting, and architecture inquiries.
              </p>
            </div>

            <div className="pt-6 border-t border-white/[0.06]">
              <a
                href={`mailto:${profileData.email}`}
                className="inline-flex items-center space-x-1.5 bg-[#0071e3] hover:bg-[#0077ed] text-white text-sm font-normal px-5 py-2.5 rounded-full transition-all duration-200 active:scale-98"
              >
                <span>Compose Email</span>
                <ChevronRight size={15} />
              </a>
            </div>
          </div>

          {/* Card 2: GitHub & Source Auditing */}
          <div className="bg-[#161617] border border-white/[0.08] hover:border-white/[0.2] rounded-[28px] p-8 sm:p-10 flex flex-col justify-between transition-all duration-400 group">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.06] text-xs">
                <span className="text-[#30d158] font-semibold">CHANNEL 02</span>
                <span className="text-[#86868b] uppercase tracking-wider">OPEN SOURCE</span>
              </div>

              <div className="w-12 h-12 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-6">
                <GithubIcon size={22} className="text-white" />
              </div>

              <div className="mb-4">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg sm:text-xl font-semibold text-white hover:text-[#2997ff] transition-colors"
                >
                  github.com/{profileData.githubUsername}
                </a>
              </div>

              <p className="text-sm text-[#86868b] font-normal leading-relaxed mb-6">
                Inspect public vulnerability research disclosures, upstream pull requests, and systems software repositories.
              </p>
            </div>

            <div className="pt-6 border-t border-white/[0.06]">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 bg-white/[0.08] hover:bg-white/[0.14] text-[#f5f5f7] border border-white/10 text-sm font-normal px-5 py-2.5 rounded-full transition-all duration-200 active:scale-98"
              >
                <span>Visit GitHub Profile</span>
                <ChevronRight size={15} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Apple Security Advisory Notice */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="bg-[#161617] border border-white/[0.08] rounded-[20px] p-6 flex items-start space-x-3 text-xs text-[#86868b]"
        >
          <ShieldCheck size={18} className="text-[#30d158] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-[#f5f5f7] font-medium">Coordinated Disclosure Notice:</strong> All security research inquiries and vulnerability advisories adhere strictly to Coordinated Vulnerability Disclosure (CVD) timelines. Encrypted communication channels can be arranged upon initial contact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
