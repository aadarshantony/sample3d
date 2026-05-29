"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import AlienViewer from "./AlienViewer";

const statBadges = [
  { label: "Neural Cores", value: "2.4B" },
  { label: "Galaxies Mapped", value: "12K+" },
  { label: "AI Uptime", value: "99.97%" },
];

const floatingCards = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="7" stroke="#22d3ee" strokeWidth="1.5" />
        <path d="M9 6v3l2 2" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Live Sync",
    sub: "Real-time comms",
    delay: 0,
    position: "top-4 -left-4",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3 9l4 4 8-8" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Sentient AI",
    sub: "Adaptive learning",
    delay: 0.3,
    position: "bottom-8 -left-6",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <polygon points="9,2 16,6 16,12 9,16 2,12 2,6" stroke="#22d3ee" strokeWidth="1.5" fill="none" />
        <circle cx="9" cy="9" r="2.5" fill="#22d3ee" opacity="0.6" />
      </svg>
    ),
    title: "Quantum Link",
    sub: "Encrypted channel",
    delay: 0.6,
    position: "top-20 -right-6",
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

function FloatingCard({
  icon,
  title,
  sub,
  delay,
  position,
}: {
  icon: React.ReactNode;
  title: string;
  sub: string;
  delay: number;
  position: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: delay + 1.2, duration: 0.7, ease: EASE }}
      className={`absolute ${position} z-20`}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 3 + delay,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay,
        }}
        className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl"
        style={{
          background: "rgba(3,7,18,0.7)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(34,211,238,0.2)",
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(34,211,238,0.05), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{
            background: "rgba(34,211,238,0.1)",
            border: "1px solid rgba(34,211,238,0.2)",
          }}
        >
          {icon}
        </div>
        <div>
          <p className="text-white text-xs font-semibold leading-tight font-outfit">{title}</p>
          <p className="text-white/40 text-[10px] leading-tight font-outfit mt-0.5">{sub}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springMx = useSpring(mx, { stiffness: 80, damping: 20 });
  const springMy = useSpring(my, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mx.set(((e.clientX - rect.left) / rect.width - 0.5) * 12);
      my.set(((e.clientY - rect.top) / rect.height - 0.5) * 8);
    };
    el.addEventListener("mousemove", handleMove);
    return () => el.removeEventListener("mousemove", handleMove);
  }, [mx, my]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: EASE },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center px-6 pt-24 grid-pattern"
    >
      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34,211,238,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Center glow */}
      <div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(34,211,238,0.07) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-14 lg:grid-cols-2">

        {/* ——— Left: text content ——— */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Heading */}
          <motion.div variants={childVariants}>
            <h1 className="font-syncopate text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-[64px]">
              <span className="block text-white/90">Meet Your</span>
              <span
                className="block"
                style={{
                  background: "linear-gradient(135deg, #a5f3fc, #22d3ee, #0ea5e9)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 30px rgba(34,211,238,0.4))",
                }}
              >
                Alien
              </span>
              <span className="block text-white/90">Companion</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={childVariants}
            className="max-w-md text-base sm:text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            A futuristic AI-powered extraterrestrial experience crafted with immersive 3D visuals,
            cinematic lighting, and next-generation interface design.
          </motion.p>

          {/* Stat badges */}
          <motion.div variants={childVariants} className="flex flex-wrap gap-3">
            {statBadges.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <span className="text-white text-sm font-bold font-syncopate tracking-wide">{s.value}</span>
                <span className="text-white/35 text-xs font-outfit">{s.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Social proof */}
          <motion.div variants={childVariants} className="flex items-center gap-3 pt-2">
            <div className="flex -space-x-2">
              {["#6366f1", "#22d3ee", "#f472b6", "#a3e635"].map((color, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-[9px] font-bold"
                  style={{
                    background: `${color}33`,
                    borderColor: color,
                    color,
                    borderWidth: 2,
                  }}
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <p className="text-xs text-white/35 font-outfit">
              Joined by <span className="text-white/60 font-semibold">12,000+</span> explorers
            </p>
          </motion.div>
        </motion.div>

        {/* ——— Right: 3D viewer ——— */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.4, ease: EASE, delay: 0.2 }}
          style={{
            rotateX: springMy,
            rotateY: springMx,
            transformStyle: "preserve-3d",
            overflow: "visible",
          }}
          className="relative h-[520px] w-full overflow-visible"
        >
          {/* Outer glow */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 50% 50%, rgba(34,211,238,0.1) 0%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />

          {/* Glass container */}
          <div
            className="relative h-full w-full rounded-3xl overflow-hidden"
            style={{
              background: "rgba(3,7,18,0.4)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(34,211,238,0.15)",
              boxShadow:
                "0 24px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06), 0 0 60px rgba(34,211,238,0.06)",
            }}
          >
            {/* Top gloss line */}
            <div
              className="absolute inset-x-0 top-0 h-px pointer-events-none"
              style={{
                background: "linear-gradient(to right, transparent, rgba(34,211,238,0.4), transparent)",
              }}
            />

            {/* Scan lines */}
            <div
              className="absolute inset-0 pointer-events-none z-10 opacity-[0.03]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.5) 2px, rgba(255,255,255,0.5) 3px)",
                backgroundSize: "100% 3px",
              }}
            />

            <AlienViewer />
          </div>

          {/* Floating info cards */}
          {floatingCards.map((card) => (
            <FloatingCard key={card.title} {...card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}