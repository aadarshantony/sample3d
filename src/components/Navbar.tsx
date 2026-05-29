"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = ["Features", "About", "Docs", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl"
    >
      <nav
        className={`
          relative flex items-center justify-between
          px-5 py-3 rounded-2xl
          transition-all duration-500
          ${
            scrolled
              ? "backdrop-blur-2xl bg-white/[0.06] border border-white/[0.12] shadow-2xl shadow-black/60"
              : "backdrop-blur-xl bg-white/[0.04] border border-white/[0.08]"
          }
        `}
      >
        {/* Top gloss line */}
        <span className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="font-syncopate font-bold text-white text-base tracking-widest">
            XENO<span className="text-cyan-400">.</span>
          </span>
        </div>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="relative group px-4 py-2 rounded-xl text-sm font-outfit text-white/55 hover:text-white transition-colors duration-200 tracking-wide"
              >
                <span className="absolute inset-0 rounded-xl bg-white/0 group-hover:bg-white/[0.05] transition-colors duration-200" />
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-2">
          <button className="hidden sm:block px-4 py-2 rounded-xl text-sm text-white/60 hover:text-white font-outfit transition-colors duration-200">
            Log in
          </button>
          <button className="relative group px-5 py-2 rounded-xl text-sm font-semibold font-outfit overflow-hidden">
            {/* Glossy bg */}
            <span className="absolute inset-0 bg-gradient-to-b from-cyan-300 to-cyan-500 transition-opacity duration-200" />
            {/* Top gloss */}
            <span className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent" />
            {/* Shimmer */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700" />
            {/* Border */}
            <span className="absolute inset-0 rounded-xl ring-1 ring-white/20" />
            <span className="relative text-[#030712] font-bold tracking-wide">
              Get Started
            </span>
          </button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-all">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
            <rect y="3" width="18" height="1.5" rx="1" />
            <rect y="8.25" width="14" height="1.5" rx="1" />
            <rect y="13.5" width="10" height="1.5" rx="1" />
          </svg>
        </button>
      </nav>
    </motion.header>
  );
}