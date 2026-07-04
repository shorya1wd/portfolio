"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { MagneticButton } from "@/components/ui/magnetic-button";

function scrollTo(id: string) {
  if (id === "/") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between px-6 md:px-10"
    >
      {/* Logo */}
      <button onClick={() => scrollTo("/")} className="text-xl font-bold tracking-tighter text-white z-10 cursor-pointer">
        SB<span className="text-violet-400">.</span>
      </button>

      {/* Centered pill nav */}
      <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-2 py-1.5 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
          {[
            { label: "Home", id: "/" },
            { label: "About", id: "about" },
            { label: "Projects", id: "projects" },
          ].map(({ label, id }) => (
            <button
              key={label}
              onClick={() => scrollTo(id)}
              className="relative px-4 py-1.5 text-sm font-medium text-neutral-400 rounded-full hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer"
            >
              {label}
            </button>
          ))}
        </div>
      </nav>

      {/* CTA */}
      <MagneticButton>
        <a
          href="mailto:shoryabhushan0@gmail.com"
          className="group relative inline-flex items-center gap-2 rounded-full bg-violet-500/10 border border-violet-500/30 px-4 py-2 text-sm font-medium text-violet-400 transition-all duration-300 hover:bg-violet-500/20 hover:border-violet-400/50 hover:text-violet-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
          Let&apos;s Talk
        </a>
      </MagneticButton>
    </motion.header>
  );
}
