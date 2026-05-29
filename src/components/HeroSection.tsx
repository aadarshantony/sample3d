"use client";

import { motion } from "framer-motion";
import AlienViewer from "./AlienViewer";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28">

      <div className="relative z-10 mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-7"
        >

          <h1 className="max-w-2xl font-syncopate text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Meet Your
            <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
              {" "}
              Alien{" "}
            </span>
            Companion
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-white/60 sm:text-xl">
            A futuristic AI-powered extraterrestrial experience crafted with
            immersive 3D visuals, cinematic lighting, and next-generation UI.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="group relative overflow-hidden rounded-2xl bg-cyan-400 px-7 py-4 font-semibold text-black transition-transform duration-300 hover:scale-[1.03]">
              <span className="relative z-10">Launch Experience</span>

              <span className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>

            <button className="rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-medium text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/10">
              Explore More
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative h-[500px] w-full"
        >
          <AlienViewer />
        </motion.div>
      </div>
    </section>
  );
}