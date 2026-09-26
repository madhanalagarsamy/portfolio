"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { profileData } from "@/data/profile";

const navItems = [
  { label: "01 ABOUT", href: "/#about", hash: "#about" },
  { label: "02 EXPERIENCE", href: "/#experience", hash: "#experience" },
  { label: "03 RESEARCH", href: "/#research", hash: "#research" },
  { label: "04 ADVISORY", href: "/#advisory", hash: "#advisory" },
  { label: "05 SKILLS", href: "/#skills", hash: "#skills" },
  { label: "06 PROJECTS", href: "/#projects", hash: "#projects" },
  { label: "07 EDUCATION", href: "/#education", hash: "#education" },
  { label: "08 CONTACT", href: "/#contact", hash: "#contact" },
  { label: "09 BLOG", href: "/blog", isRoute: true },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: (typeof navItems)[0]
  ) => {
    setMobileMenuOpen(false);

    if (item.isRoute) {
      // standard Link navigation
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
    } else {
      // Navigate to homepage section
      // Default link behavior to `/#section`
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/60 backdrop-blur-md border-b border-white/10 py-4 shadow-2xl"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Name */}
          <Link
            href="/"
            onClick={handleLogoClick}
            className="group flex items-center space-x-3 text-white font-mono text-sm tracking-widest uppercase hover:opacity-80 transition-opacity"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span className="font-semibold">{profileData.name}</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7">
            {navItems.map((item) => {
              const active = item.isRoute && isBlogActive;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`text-[11px] font-mono tracking-widest transition-all duration-300 ${
                    active
                      ? "text-emerald-400 font-bold border-b border-emerald-400 pb-0.5"
                      : item.isRoute
                      ? "text-white px-2.5 py-1 rounded bg-white/[0.08] border border-white/15 hover:bg-emerald-500/10 hover:border-emerald-500/30 hover:text-emerald-300"
                      : "text-neutral-300 hover:text-white"
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
            className="lg:hidden text-white/80 hover:text-white p-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-xl lg:hidden flex flex-col justify-center px-8"
          >
            <nav className="flex flex-col space-y-5">
              {navItems.map((item, idx) => {
                const active = item.isRoute && isBlogActive;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item)}
                      className={`text-sm font-mono tracking-widest block border-b border-white/10 pb-3 transition-colors ${
                        active
                          ? "text-emerald-400 font-bold"
                          : item.isRoute
                          ? "text-emerald-300 font-semibold"
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
