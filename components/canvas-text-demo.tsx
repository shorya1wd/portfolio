"use client";
import { cn } from "@/lib/utils";
import { CanvasText } from "@/components/ui/canvas-text";
import { motion } from "motion/react";
import { IconBrandGithub, IconArrowDown } from "@tabler/icons-react";

export default function CanvasTextDemo() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="flex w-full flex-col items-center justify-center space-y-5 px-4 mt-10"
    >
      {/* Availability Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-1.5 text-xs font-medium text-violet-400 backdrop-blur-sm"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
        Available for freelance projects
      </motion.div>

      {/* Name */}
      <h1
        className={cn(
          "group relative mx-auto flex flex-row flex-wrap items-baseline justify-center gap-x-3 text-center text-5xl font-bold text-neutral-900 sm:text-6xl md:text-7xl lg:text-8xl dark:text-neutral-200",
        )}
      >
        <CanvasText
          text="Shorya Bhushan"
          backgroundClassName="bg-violet-600 dark:bg-violet-700"
          colors={[
            "rgba(139, 92, 246, 1)",
            "rgba(139, 92, 246, 0.9)",
            "rgba(139, 92, 246, 0.8)",
            "rgba(139, 92, 246, 0.7)",
            "rgba(139, 92, 246, 0.6)",
            "rgba(139, 92, 246, 0.5)",
            "rgba(139, 92, 246, 0.4)",
            "rgba(139, 92, 246, 0.3)",
            "rgba(139, 92, 246, 0.2)",
            "rgba(139, 92, 246, 0.1)",
          ]}
          lineGap={6}
          animationDuration={20}
        />
      </h1>

      {/* Subtitle */}
      <p className="text-lg sm:text-xl md:text-2xl text-neutral-500 dark:text-neutral-400 font-medium text-center max-w-lg">
        Full-Stack Web Developer
      </p>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="flex items-center gap-4 pt-2"
      >
        <a
          href="https://github.com/shorya1wd"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-200"
        >
          <IconBrandGithub size={16} />
          GitHub
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="flex flex-col items-center gap-2 pt-6 text-neutral-600"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <IconArrowDown size={16} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}