"use client";

import { profileData } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="relative z-10 py-12 border-t border-white/10 bg-black/40 backdrop-blur-md select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h3 className="text-base font-bold font-mono text-white tracking-widest uppercase">
            {profileData.name}
          </h3>
          <p className="text-xs font-mono text-neutral-400 mt-1">
            {profileData.title}
          </p>
        </div>

        <div className="flex items-center space-x-6 text-xs font-mono text-neutral-400">
          <a
            href={`mailto:${profileData.email}`}
            className="hover:text-white transition-colors"
          >
            EMAIL
          </a>
          <span>•</span>
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GITHUB
          </a>
          <span>•</span>
          <span className="text-neutral-500">{profileData.location}</span>
        </div>
      </div>
    </footer>
  );
}
