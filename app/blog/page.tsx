import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogList from "@/components/BlogList";
import { getAllPosts } from "@/data/posts";
import { ArrowLeft, Terminal, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Security Research Blog & Advisories — Madhan Alagarsamy",
  description:
    "Official security research writeups, vulnerability disclosure documentation, IDOR case studies, and application security research by Madhan Alagarsamy.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Ambient background grid & glow */}
      <div className="fixed inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10">
        <Navigation />

        <main className="max-w-5xl mx-auto px-6 md:px-12 pt-32 pb-24">
          {/* Back link */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={14} />
              <span>RETURN TO MAIN PORTFOLIO</span>
            </Link>
          </div>

          {/* Page Header */}
          <header className="mb-14 pb-8 border-b border-white/10">
            <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 mb-3 tracking-widest uppercase">
              <Terminal size={14} />
              <span>~/MADHAN-A/SECURITY-WRITELOG</span>
              <span className="text-neutral-600">|</span>
              <span className="text-neutral-400 flex items-center space-x-1">
                <Shield size={12} className="text-emerald-400" />
                <span>COORDINATED DISCLOSURE LOGS</span>
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold font-mono tracking-tight text-white mb-4">
              RESEARCH WRITELOG & DISCLOSURES
            </h1>

            <p className="text-neutral-400 text-sm md:text-base font-light max-w-3xl leading-relaxed">
              In-depth technical writeups on discovered vulnerabilities, verified GitHub Security Advisories, exploitation mechanics, and defensive engineering across open-source ecosystems and web applications.
            </p>
          </header>

          {/* Interactive Posts Listing */}
          <BlogList posts={posts} />
        </main>

        <Footer />
      </div>
    </div>
  );
}
