"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { ShieldCheck, Code2, Rocket, Award } from "lucide-react";

export default function About() {
  const steps = [
    {
      num: "01",
      title: "RESEARCH",
      role: "Security Research & Open Source",
      desc: "Conducting web application penetration testing (VAPT), vulnerability assessments, and secure code reviews while contributing critical security patches to major open-source ecosystems including PyTorch, TensorFlow, and Keras.",
      icon: ShieldCheck,
    },
    {
      num: "02",
      title: "ENGINEERING",
      role: "Full-Stack & Backend Systems",
      desc: "Engineering robust backend architectures, high-concurrency web applications, and automated CI/CD workflows with modern technology stacks including Python, TypeScript, and C++.",
      icon: Code2,
    },
    {
      num: "03",
      title: "BUILDING",
      role: "Secure Execution & Protocols",
      desc: "Developing specialized cryptographic software applications, such as Decimal Optical Transfer, utilizing Duo-QR mosaic architecture, WebAssembly, and SHA-256 verification.",
      icon: Rocket,
    },
    {
      num: "04",
      title: "LEADERSHIP",
      role: "Founder & Lead Developer",
      desc: "Directing organizational technology roadmaps, managing delivery desks, and overseeing scalable enterprise execution at Net Corporation.",
      icon: Award,
    },
  ];

  return (
    <section id="about" className="relative py-28 px-6 md:px-12 z-10 select-none">
      {/* Ultra-Light Transparent Overlay */}
      <div className="absolute inset-0 bg-black/5 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center space-x-3 mb-3">
            <span className="text-xs font-mono text-neutral-400 tracking-widest uppercase">01 / ABOUT</span>
            <span className="w-12 h-[1px] bg-neutral-700" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            TECHNICAL NARRATIVE & IDENTITY
          </h2>
        </motion.div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          {/* Main Story Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 bg-black/10 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-xs"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 leading-snug">
              Bridging Secure Research, Enterprise Engineering & Organizational Building
            </h3>
            
            <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-6 font-light">
              As an Independent Cybersecurity Researcher and Software Developer, I operate at the intersection of application security and scalable system engineering. My work encompasses end-to-end software execution—from initial security code reviews and vulnerability mitigation to frontend interface design and production deployment.
            </p>

            <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-8 font-light">
              Currently pursuing a Master of Computer Applications (MCA), I combine formal academic computer science principles with hands-on technical execution. As the Founder & Lead Developer of Net Corporation, I direct organizational technology roadmaps and build high-concurrency systems engineered for performance and defensive resilience.
            </p>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs font-mono text-neutral-400">
              <div>LOCATION: <span className="text-white">{profileData.location}</span></div>
              <div>FOUNDER: <span className="text-white">{profileData.founderOf}</span></div>
            </div>
          </motion.div>

          {/* Core Strengths List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6 backdrop-blur-md">
              <h4 className="text-xs font-mono tracking-widest text-neutral-400 uppercase mb-3">Core Pillars</h4>
              <ul className="space-y-3 text-sm text-neutral-200 font-light">
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                  <span>Full-Stack Web Application Development & Deployment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                  <span>Backend Engineering & Scalable CI/CD Workflows</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                  <span>Vulnerability Assessment & Web Application Penetration Testing (VAPT)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                  <span>Open-Source Ecosystem Patches & Secure Code Reviews</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Narrative Flow Stepper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-black/10 border border-white/10 rounded-xl p-6 backdrop-blur-xs hover:bg-black/20 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-neutral-500 font-bold">{step.num}</span>
                  <Icon size={18} className="text-neutral-400 group-hover:text-white transition-colors" />
                </div>
                <div className="text-xs font-mono tracking-widest text-neutral-400 uppercase mb-1">{step.title}</div>
                <h4 className="text-base font-semibold text-white mb-2">{step.role}</h4>
                <p className="text-xs text-neutral-300 font-light leading-relaxed">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
