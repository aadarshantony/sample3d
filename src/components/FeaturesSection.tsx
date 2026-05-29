"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#22d3ee" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M2 17l10 5 10-5" stroke="#22d3ee" strokeWidth="1.5" strokeLinejoin="round" opacity="0.6" />
        <path d="M2 12l10 5 10-5" stroke="#22d3ee" strokeWidth="1.5" strokeLinejoin="round" opacity="0.3" />
      </svg>
    ),
    title: "Neural Interface",
    desc: "Connect directly to the hive mind via quantum-entangled neural pathways. Zero latency, infinite bandwidth.",
    tag: "Core",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#22d3ee" strokeWidth="1.5" />
        <path d="M12 7v5l3 3" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="2" fill="#22d3ee" opacity="0.4" />
      </svg>
    ),
    title: "Temporal Sync",
    desc: "Synchronized across 47 known timelines. Your companion adapts to your temporal signature in real time.",
    tag: "Advanced",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <polygon points="12,3 20,8 20,16 12,21 4,16 4,8" stroke="#22d3ee" strokeWidth="1.5" fill="none" />
        <path d="M12 7v10M7 9.5l5 2.5 5-2.5" stroke="#22d3ee" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      </svg>
    ),
    title: "Holographic Presence",
    desc: "Full-body holographic projection with haptic feedback. Feels like they're truly in the room with you.",
    tag: "Premium",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#22d3ee" strokeWidth="1.5" fill="rgba(34,211,238,0.1)" />
        <path d="M9 12l2 2 4-4" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Quantum Encryption",
    desc: "Military-grade quantum encryption ensures your interspecies conversations stay private across dimensions.",
    tag: "Security",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="#22d3ee" strokeWidth="1.5" />
        <path d="M20 21a8 8 0 10-16 0" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <path d="M16 16l2 2 4-4" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Adaptive Persona",
    desc: "Your companion learns your emotional patterns and evolves its personality to perfectly complement yours.",
    tag: "AI",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="#22d3ee" strokeWidth="1.5" />
        <circle cx="12" cy="10" r="3" stroke="#22d3ee" strokeWidth="1.5" fill="rgba(34,211,238,0.15)" />
      </svg>
    ),
    title: "Galactic Roaming",
    desc: "Operational across 400 billion star systems. No dead zones. No signal loss. Ever.",
    tag: "Network",
  },
];

const tagColors: Record<string, string> = {
  Core: "rgba(34,211,238,0.15)",
  Advanced: "rgba(99,102,241,0.15)",
  Premium: "rgba(251,191,36,0.12)",
  Security: "rgba(52,211,153,0.15)",
  AI: "rgba(244,114,182,0.15)",
  Network: "rgba(167,139,250,0.15)",
};
const tagText: Record<string, string> = {
  Core: "#22d3ee",
  Advanced: "#818cf8",
  Premium: "#fbbf24",
  Security: "#34d399",
  AI: "#f472b6",
  Network: "#a78bfa",
};

export default function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" ref={ref} className="relative px-6 py-32 overflow-hidden">
      {/* Section glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, rgba(34,211,238,0.3), transparent)" }}
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest font-outfit"
            style={{
              background: "rgba(34,211,238,0.08)",
              border: "1px solid rgba(34,211,238,0.18)",
              color: "#67e8f9",
            }}
          >
            Capabilities
          </div>
          <h2
            className="font-syncopate text-4xl sm:text-5xl font-bold"
            style={{
              background: "linear-gradient(135deg, #fff 40%, rgba(255,255,255,0.5))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Beyond Human Tech
          </h2>
          <p className="max-w-lg mx-auto text-base text-white/45 font-outfit leading-relaxed">
            Engineered by minds from 7 different civilizations over 3,000 years of research.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07 + 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group glass-card p-6 space-y-4"
            >
              {/* Top row: icon + tag */}
              <div className="flex items-start justify-between">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "rgba(34,211,238,0.08)",
                    border: "1px solid rgba(34,211,238,0.15)",
                  }}
                >
                  {f.icon}
                </div>
                <span
                  className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full font-outfit"
                  style={{
                    background: tagColors[f.tag],
                    color: tagText[f.tag],
                  }}
                >
                  {f.tag}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-syncopate text-sm font-bold text-white tracking-wide">{f.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed font-outfit">{f.desc}</p>
              </div>

              {/* Hover line */}
              <div
                className="h-px w-0 group-hover:w-full transition-all duration-500 rounded-full"
                style={{ background: "linear-gradient(to right, #22d3ee, transparent)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}