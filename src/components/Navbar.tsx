"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Docs", href: "#docs" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 80], [0.96, 1]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{ opacity: navOpacity }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl"
      >
        <nav
          className={`
            relative flex items-center justify-between
            px-5 py-3 rounded-2xl
            transition-all duration-500
            ${
              scrolled
                ? "backdrop-blur-3xl bg-white/[0.06] border border-white/[0.14] shadow-[0_8px_48px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.08)]"
                : "backdrop-blur-2xl bg-white/[0.03] border border-white/[0.08]"
            }
          `}
        >
          {/* Top gloss line */}
          <span className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

          {/* Cyan glow edge on scroll */}
          {scrolled && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none"
            />
          )}

          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer select-none"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="font-syncopate font-bold text-white text-[15px] tracking-[0.2em]">
              XENO<span className="text-cyan-400">.</span>
            </span>
          </motion.div>

          {/* Nav links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
              >
                <a
                  href={link.href}
                  onMouseEnter={() => setActiveLink(link.label)}
                  onMouseLeave={() => setActiveLink(null)}
                  className="relative group px-4 py-2 rounded-xl text-sm font-outfit text-white/50 hover:text-white transition-colors duration-200 tracking-wide"
                >
                  {/* Hover bg */}
                  <span className="absolute inset-0 rounded-xl bg-white/0 group-hover:bg-white/[0.06] transition-all duration-200" />
                  {/* Active indicator */}
                  {activeLink === link.label && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              </motion.li>
            ))}
          </ul>

          {/* CTA area */}
          <div className="flex items-center gap-2">
            <button className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm text-white/50 hover:text-white font-outfit transition-colors duration-200">
              Log in
            </button>

            <motion.button
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="relative group px-5 py-2 rounded-xl text-sm font-semibold font-outfit overflow-hidden"
              style={{ boxShadow: "0 0 20px rgba(34,211,238,0.25)" }}
            >
              {/* BG */}
              <span className="absolute inset-0 bg-gradient-to-b from-cyan-300 to-cyan-500" />
              {/* Top gloss */}
              <span className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/35 to-transparent" />
              {/* Shimmer */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 translate-x-[-120%] group-hover:translate-x-[220%] transition-transform duration-700" />
              {/* Ring */}
              <span className="absolute inset-0 rounded-xl ring-1 ring-white/20" />
              <span className="relative text-[#030712] font-bold tracking-wide">Get Started</span>
            </motion.button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-all"
              aria-label="Toggle menu"
            >
              <motion.svg
                width="18" height="18" viewBox="0 0 18 18" fill="currentColor"
                animate={mobileOpen ? "open" : "closed"}
              >
                <motion.rect
                  y="3" width="18" height="1.5" rx="1"
                  variants={{ open: { rotate: 45, y: 8.25 }, closed: { rotate: 0, y: 3 } }}
                  transition={{ duration: 0.2 }}
                />
                <motion.rect
                  y="8.25" width="14" height="1.5" rx="1"
                  variants={{ open: { opacity: 0, x: -8 }, closed: { opacity: 1, x: 0 } }}
                  transition={{ duration: 0.2 }}
                />
                <motion.rect
                  y="13.5" width="10" height="1.5" rx="1"
                  variants={{ open: { rotate: -45, y: -4.25, width: 18 }, closed: { rotate: 0, y: 13.5, width: 10 } }}
                  transition={{ duration: 0.2 }}
                />
              </motion.svg>
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mt-2 rounded-2xl backdrop-blur-3xl bg-white/[0.06] border border-white/[0.1] p-3 shadow-2xl shadow-black/60"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 rounded-xl text-sm text-white/60 hover:text-white hover:bg-white/[0.06] transition-all duration-200 font-outfit tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 pt-2 border-t border-white/[0.08] flex flex-col gap-2">
              <button className="px-4 py-3 rounded-xl text-sm text-white/60 hover:text-white font-outfit text-left transition-colors">
                Log in
              </button>
              <button className="relative overflow-hidden px-4 py-3 rounded-xl text-sm font-bold font-outfit text-[#030712] bg-gradient-to-r from-cyan-300 to-cyan-500">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </motion.header>
    </>
  );
}