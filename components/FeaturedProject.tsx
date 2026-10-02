"use client";

import { motion } from "framer-motion";
import { featuredProjectData } from "@/data/projects";
import { QrCode, Cpu, ShieldCheck } from "lucide-react";

export default function FeaturedProject() {
  const specs = [
    {
      code: "SPEC_01",
      name: "Duo-QR Mosaic Architecture",
      icon: QrCode,
      desc: "Doubles optical data density per camera capture frame via twin synchronized mosaic matrices, mitigating shutter blur through staggered phase indexing.",
    },
    {
      code: "SPEC_02",
      name: "Luby Transform (Fountain Codes)",
      icon: Cpu,
      desc: "Rateless erasure coding designed for lossy optical channels. Reconstructs complete payloads upon receiving K * (1 + ε) droplets without back-channel retransmissions.",
    },
    {
      code: "SPEC_03",
      name: "1 GB Payload & Cryptographic SHA-256",
      icon: ShieldCheck,
      desc: "Streaming verification engine compiled to WebAssembly. Enables multi-gigabyte optical payloads with real-time hash verification and zero UI thread latency.",
    },
  ];

  return (
    <section id="projects" className="relative py-24 sm:py-32 px-6 sm:px-10 md:px-14 lg:px-20 z-10 border-t border-white/10 bg-black">
      <div className="max-w-6xl mx-auto">
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
              04 // PROTOCOL ARCHITECTURE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            HIGH-THROUGHPUT<br />
            OPTICAL TRANSMISSION PROTOCOL
          </h2>
          <p className="mt-4 text-neutral-400 font-light text-sm sm:text-base max-w-2xl leading-relaxed">
            Air-gapped screen-to-camera data transfer protocol leveraging rateless erasure codes and spatial mosaic streaming.
          </p>
        </motion.div>

        {/* Systems Specification Container */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="border border-white/10 bg-neutral-950 p-6 sm:p-10 md:p-12"
        >
          {/* Top Specification Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10 text-xs font-mono">
            <div className="flex items-center space-x-3">
              <span className="text-emerald-400 font-bold">SYSTEM //</span>
              <span className="text-white font-semibold">{featuredProjectData.title}</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {featuredProjectData.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 bg-white/[0.04] border border-white/10 text-neutral-300 text-[11px]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Core System Summary */}
          <div className="mb-12 max-w-3xl">
            <h3 className="text-xl sm:text-2xl font-bold font-mono text-white mb-4">
              {featuredProjectData.tagline}
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              Decimal Optical Transfer addresses air-gapped device-to-device data exchange without radio frequency (RF), Bluetooth, or physical cable connections. By rendering rateless Fountain Codes through high-speed visual QR mosaics captured via standard device cameras, payloads up to 1 GB are transferred with streaming cryptographic checksum validation.
            </p>
          </div>

          {/* Subsystems Specification Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 pt-6 border-t border-white/10">
            {specs.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.code}
                  className="p-6 bg-black/60 border border-white/10 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-neutral-500 uppercase">
                      {item.code}
                    </span>
                    <Icon size={16} className="text-neutral-400" />
                  </div>
                  <h4 className="text-sm font-mono font-semibold text-white">
                    {item.name}
                  </h4>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Attribution & Provenance */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-neutral-500">
            <div>
              FOUNDATION CREDITS:{" "}
              <span className="text-neutral-300">
                {featuredProjectData.originalAuthor}
              </span>{" "}
              · Extended &amp; Optimized by Madhan Alagarsamy
            </div>
            <div className="text-neutral-400">
              STATUS: PRODUCTION ARCHITECTURE
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
