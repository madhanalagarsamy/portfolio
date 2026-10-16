"use client";

import Link from "next/link";
import { profileData } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#000000] text-[#86868b] border-t border-white/[0.08] pt-12 pb-16 px-6 sm:px-10 md:px-14 lg:px-20 text-[12px] font-normal leading-normal">
      <div className="max-w-6xl mx-auto">
        {/* Apple 5-Column Directory Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Column 1 */}
          <div>
            <h4 className="text-[#f5f5f7] font-semibold text-[12px] mb-3">
              Advisories
            </h4>
            <ul className="space-y-2 text-[#86868b]">
              <li>
                <Link href="/blog/apple-container-connecthandler-fd-leak" className="hover:text-[#f5f5f7] transition-colors">
                  Apple Container #2261
                </Link>
              </li>
              <li>
                <Link href="/blog/espflash-self-hosted-runner-rce" className="hover:text-[#f5f5f7] transition-colors">
                  espflash PR #1074
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
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-[#f5f5f7] font-semibold text-[12px] mb-3">
              Engineering
            </h4>
            <ul className="space-y-2 text-[#86868b]">
              <li>
                <a href="#projects" className="hover:text-[#f5f5f7] transition-colors">
                  Optical Protocol
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#f5f5f7] transition-colors">
                  WASM &amp; SIMD
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#f5f5f7] transition-colors">
                  Swift-NIO Runtimes
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#f5f5f7] transition-colors">
                  Distributed Backends
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
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
                  Founder
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-[#f5f5f7] transition-colors">
                  Education
                </a>
              </li>
              <li>
                <span className="text-[#6e6e73]">Hosur, IN</span>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-[#f5f5f7] font-semibold text-[12px] mb-3">
              Documentation
            </h4>
            <ul className="space-y-2 text-[#86868b]">
              <li>
                <Link href="/blog" className="hover:text-[#f5f5f7] transition-colors">
                  Advisory Blog
                </Link>
              </li>
              <li>
                <a href="https://github.com/madhanalagarsamy" target="_blank" rel="noopener noreferrer" className="hover:text-[#f5f5f7] transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="/sitemap.xml" className="hover:text-[#f5f5f7] transition-colors">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h4 className="text-[#f5f5f7] font-semibold text-[12px] mb-3">
              Connect
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
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-[#6e6e73]">
          <div>
            Copyright © {new Date().getFullYear()} {profileData.name}. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <Link href="/" className="hover:text-[#f5f5f7] transition-colors">
              Overview
            </Link>
            <span>|</span>
            <Link href="/#advisory" className="hover:text-[#f5f5f7] transition-colors">
              Advisories
            </Link>
            <span>|</span>
            <Link href="/blog" className="hover:text-[#f5f5f7] transition-colors">
              Blog
            </Link>
            <span>|</span>
            <span className="text-[#86868b]">India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
