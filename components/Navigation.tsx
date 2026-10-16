"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, ShieldCheck } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { profileData } from "@/data/profile";

const navItems = [
  { label: "Overview", href: "/#about", hash: "#about" },
  { label: "Advisories", href: "/#advisory", hash: "#advisory" },
  { label: "Research", href: "/#research", hash: "#research" },
  { label: "Projects", href: "/#projects", hash: "#projects" },
  { label: "Capabilities", href: "/#skills", hash: "#skills" },
  { label: "Experience", href: "/#experience", hash: "#experience" },
  { label: "Education", href: "/#education", hash: "#education" },
  { label: "Contact", href: "/#contact", hash: "#contact" },
  { label: "Advisory Blog", href: "/blog", isRoute: true },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
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
      {/* Apple Global Nav Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? "bg-[#000000]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-[#000000]/60 backdrop-blur-md border-b border-white/[0.05]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-12 flex items-center justify-between">
          {/* Brand Mark (Apple Symbol & Name) */}
          <Link
            href="/"
            onClick={handleLogoClick}
            className="group flex items-center space-x-2 text-[#f5f5f7] hover:text-white transition-opacity select-none"
          >
            <span className="text-base sm:text-lg leading-none transition-transform group-hover:scale-105" aria-hidden="true">
              
            </span>
            <span className="text-[13px] font-semibold tracking-[-0.01em] text-[#f5f5f7]">
              {profileData.name}
            </span>
          </Link>

          {/* Desktop Nav Items (Apple Style) */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7">
            {navItems.map((item) => {
              const active = item.isRoute && isBlogActive;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`text-[12px] tracking-[-0.01em] transition-all duration-200 ${
                    active
                      ? "text-white font-medium underline underline-offset-8 decoration-[#0071e3] decoration-2"
                      : item.isRoute
                      ? "text-[#2997ff] hover:text-[#70baff] font-normal"
                      : "text-[#f5f5f7]/80 hover:text-white font-normal"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA Button on Right */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/#advisory"
              className="inline-flex items-center space-x-1.5 bg-[#0071e3] hover:bg-[#0077ed] active:scale-95 text-white text-[12px] font-normal px-3.5 py-1 rounded-full transition-all duration-200"
            >
              <ShieldCheck size={13} />
              <span>Advisories</span>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#f5f5f7]/80 hover:text-white p-1.5 focus:outline-none transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Apple Mobile Dropdown Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 top-12 z-40 bg-black/95 backdrop-blur-2xl lg:hidden flex flex-col justify-between px-6 py-8 overflow-y-auto"
          >
            <div className="space-y-4">
              <div className="text-[11px] font-semibold text-[#86868b] uppercase tracking-wider mb-2">
                Navigation
              </div>

              {navItems.map((item, index) => {
                const active = item.isRoute && isBlogActive;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item)}
                      className={`flex items-center justify-between py-2 text-xl tracking-tight transition-colors ${
                        active
                          ? "text-[#2997ff] font-medium"
                          : "text-[#f5f5f7] hover:text-[#2997ff]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight size={16} className="text-[#86868b]" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="pt-8 border-t border-white/[0.08] space-y-3">
              <Link
                href="/#advisory"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 bg-[#0071e3] text-white text-center text-sm font-normal rounded-full block transition-transform active:scale-98"
              >
                Review Security Advisories
              </Link>
              <div className="text-center text-xs text-[#86868b] pt-2">
                {profileData.location} · Net Corporation
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
