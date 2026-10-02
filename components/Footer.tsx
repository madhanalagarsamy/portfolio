"use client";

import Link from "next/link";
import { profileData } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="relative z-10 py-12 px-6 sm:px-10 md:px-14 lg:px-20 border-t border-white/10 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center space-x-2 text-white font-mono text-xs tracking-widest uppercase mb-1">
            <span className="w-1.5 h-1.5 bg-emerald-400" />
            <span className="font-bold">{profileData.name}</span>
          </div>
          <p className="text-xs font-mono text-neutral-500">
            Independent Security Research &amp; Distributed Systems Engineering
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-neutral-400">
          <Link
            href="/blog"
            className="text-neutral-400 hover:text-emerald-400 transition-colors"
          >
            ADVISORY WRITELOG
          </Link>
          <span className="text-neutral-700">/</span>
          <a
            href={`mailto:${profileData.email}`}
            className="text-neutral-400 hover:text-white transition-colors"
          >
            EMAIL
          </a>
          <span className="text-neutral-700">/</span>
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            GITHUB
          </a>
          <span className="text-neutral-700">/</span>
          <span className="text-neutral-600">{profileData.location}</span>
        </div>
      </div>
    </footer>
  );
}
