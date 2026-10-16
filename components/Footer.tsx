"use client";

import Link from "next/link";
import { profileData } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#000000] text-[#86868b] border-t border-white/[0.08] pt-12 pb-16 px-6 sm:px-10 md:px-14 lg:px-20 text-[12px] font-normal leading-normal">
      <div className="max-w-6xl mx-auto">
        {/* Apple Numbered Footnotes Section */}
        <div className="space-y-2.5 pb-8 mb-8 border-b border-white/[0.08] text-[11px] text-[#6e6e73] leading-relaxed">
          <p>
            1. Apple Container ConnectHandler socket file descriptor leak was discovered by Madhan Alagarsamy, officially acknowledged by Apple maintainers in Issue #2261, and resolved in upstream PR #2260 (commit 56b95bc).
          </p>
          <p>
            2. All research disclosures and vulnerability advisories strictly comply with ISO/IEC 29147 and RFC 9116 Coordinated Vulnerability Disclosure standards. Zero uncoordinated 0-day exploitation.
          </p>
          <p>
            3. Decimal Optical Transfer protocol utilizes WebAssembly and Luby Transform Fountain Codes for lossless high-throughput screen-to-camera optical transmission, building upon original research by Evan Crawley.
          </p>
        </div>

        {/* Apple 5-Column Directory Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Column 1: Research & Advisories */}
          <div>
            <h4 className="text-[#f5f5f7] font-semibold text-[12px] mb-3">
              Security Advisories
            </h4>
            <ul className="space-y-2 text-[#86868b]">
              <li>
                <Link href="/blog/apple-container-connecthandler-fd-leak" className="hover:text-[#f5f5f7] transition-colors">
                  Apple Container #2261
                </Link>
              </li>
              <li>
                <Link href="/blog/ghsa-x3cj-mm38-329g" className="hover:text-[#f5f5f7] transition-colors">
                  GHSA-x3cj-mm38-329g
                </Link>
              </li>
              <li>
                <Link href="/blog/ghsa-8rfq-rmx4-8qhr" className="hover:text-[#f5f5f7] transition-colors">
                  GHSA-8rfq-rmx4-8qhr
                </Link>
              </li>
              <li>
                <Link href="/blog/ghsa-9v52-vhvw-4w5c" className="hover:text-[#f5f5f7] transition-colors">
                  BigBlueButton IDOR
                </Link>
              </li>
              <li>
                <Link href="/blog/ghsa-r3jq-vxqh-pgrg" className="hover:text-[#f5f5f7] transition-colors">
                  CI Workflow Spoofing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Engineering & Systems */}
          <div>
            <h4 className="text-[#f5f5f7] font-semibold text-[12px] mb-3">
              Engineering
            </h4>
            <ul className="space-y-2 text-[#86868b]">
              <li>
                <a href="#projects" className="hover:text-[#f5f5f7] transition-colors">
                  Optical Transfer Protocol
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#f5f5f7] transition-colors">
                  WASM &amp; SIMD Runtimes
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#f5f5f7] transition-colors">
                  Swift-NIO Architecture
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#f5f5f7] transition-colors">
                  Distributed Systems
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Ventures */}
          <div>
            <h4 className="text-[#f5f5f7] font-semibold text-[12px] mb-3">
              Organization
            </h4>
            <ul className="space-y-2 text-[#86868b]">
              <li>
                <a href="#experience" className="hover:text-[#f5f5f7] transition-colors">
                  Net Corporation
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#f5f5f7] transition-colors">
                  Founder &amp; Tech Lead
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-[#f5f5f7] transition-colors">
                  Academic Background
                </a>
              </li>
              <li>
                <span className="text-[#6e6e73]">Hosur, Tamil Nadu, IN</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Documentation */}
          <div>
            <h4 className="text-[#f5f5f7] font-semibold text-[12px] mb-3">
              Documentation
            </h4>
            <ul className="space-y-2 text-[#86868b]">
              <li>
                <Link href="/blog" className="hover:text-[#f5f5f7] transition-colors">
                  Research Writelog
                </Link>
              </li>
              <li>
                <a href="https://github.com/madhanalagarsamy" target="_blank" rel="noopener noreferrer" className="hover:text-[#f5f5f7] transition-colors">
                  GitHub Repository
                </a>
              </li>
              <li>
                <a href="#advisory" className="hover:text-[#f5f5f7] transition-colors">
                  CVD Disclosure Index
                </a>
              </li>
              <li>
                <a href="/sitemap.xml" className="hover:text-[#f5f5f7] transition-colors">
                  XML Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Connect */}
          <div>
            <h4 className="text-[#f5f5f7] font-semibold text-[12px] mb-3">
              Correspondence
            </h4>
            <ul className="space-y-2 text-[#86868b]">
              <li>
                <a href={`mailto:${profileData.email}`} className="text-[#2997ff] hover:underline">
                  {profileData.email}
                </a>
              </li>
              <li>
                <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#f5f5f7] transition-colors">
                  GitHub Profile
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#f5f5f7] transition-colors">
                  Direct Channel
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Apple Bottom Legal Bar */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-[#6e6e73]">
          <div>
            Copyright © {new Date().getFullYear()} {profileData.name}. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <Link href="/" className="hover:text-[#f5f5f7] transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/#advisory" className="hover:text-[#f5f5f7] transition-colors">
              Coordinated Disclosure Policy
            </Link>
            <span>|</span>
            <Link href="/blog" className="hover:text-[#f5f5f7] transition-colors">
              Security Writelog
            </Link>
            <span>|</span>
            <a href="/sitemap.xml" className="hover:text-[#f5f5f7] transition-colors">
              Site Map
            </a>
            <span>|</span>
            <span className="text-[#86868b] flex items-center space-x-1">
              <span>India</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
