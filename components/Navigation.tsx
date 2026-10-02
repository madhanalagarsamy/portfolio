"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { profileData } from "@/data/profile";

const navItems = [
  { label: "ADVISORIES", href: "/#advisory", hash: "#advisory" },
  { label: "RESEARCH", href: "/#research", hash: "#research" },
  { label: "SYSTEMS", href: "/#projects", hash: "#projects" },
  { label: "CAPABILITIES", href: "/#skills", hash: "#skills" },
  { label: "TRACK RECORD", href: "/#experience", hash: "#experience" },
  { label: "CONTACT", href: "/#contact", hash: "#contact" },
  { label: "WRITELOG", href: "/blog", isRoute: true },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: (typeof navItems)[0]
  ) => {
    setMobileMenuOpen(false);

    if (item.isRoute) {
      return;
    }

    if (pathname === "/") {
      e.preventDefault();
      if (item.hash) {
        const targetElement = document.querySelector(item.hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileMenuOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isBlogActive = pathname?.startsWith("/blog");

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/85 backdrop-blur-md border-b border-white/10 py-3.5"
            : "bg-gradient-to-b from-black/80 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Identity Monogram */}
          <Link
            href="/"
            onClick={handleLogoClick}
            className="group flex items-center space-x-2.5 text-white font-mono text-xs sm:text-sm tracking-widest uppercase hover:text-neutral-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
          >
            <span className="w-1.5 h-1.5 bg-emerald-400 group-hover:scale-125 transition-transform duration-200" />
            <span className="font-bold tracking-tight">{profileData.name}</span>
          </Link>

          {/* Desktop Curated Nav */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => {
              const active = item.isRoute && isBlogActive;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`text-[11px] font-mono tracking-widest transition-colors py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white ${
                    active
                      ? "text-emerald-400 font-bold border-b border-emerald-400"
                      : item.isRoute
                      ? "text-emerald-300/90 hover:text-emerald-300 border border-emerald-500/30 px-2 py-0.5"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-neutral-300 hover:text-white p-2 border border-white/10 hover:border-white/20 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl lg:hidden flex flex-col justify-start px-8 pt-24 pb-12 overflow-y-auto"
            role="dialog"
            aria-label="Mobile Navigation"
          >
            <div className="text-[11px] font-mono text-neutral-500 tracking-widest uppercase mb-4 pb-2 border-b border-white/10">
              NAVIGATION INDEX
            </div>
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, idx) => {
                const active = item.isRoute && isBlogActive;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03 }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item)}
                      className={`text-sm font-mono tracking-widest block py-2 transition-colors border-b border-white/5 ${
                        active
                          ? "text-emerald-400 font-bold"
                          : item.isRoute
                          ? "text-emerald-300"
                          : "text-neutral-300 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
