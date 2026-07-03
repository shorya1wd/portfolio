"use client";

import BackgroundRippleEffectDemo from "@/components/background-ripple-effect-demo";
import { DottedGlowBackgroundDemoSecond } from "@/components/dotted-glow-background-demo-2";
import EncryptedTextDemo from "@/components/encrypted-text-demo";
import TerminalDemo from "@/components/terminal-demo";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { motion } from "motion/react";
import AppleCardsCarouselDemo from "@/components/apple-cards-carousel-demo";
import AboutMeSection from "@/components/about-me-section";
import { MagneticButton } from "@/components/ui/magnetic-button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-start pt-16">
      <DottedGlowBackgroundDemoSecond />
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex flex-col overflow-hidden"
      >
        <ContainerScroll
          titleComponent={
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-bold text-center mt-20 md:mb-8 text-neutral-800 dark:text-neutral-200"
            >
              <span className="text-violet-400">My Expertise</span> & Workflow
            </motion.h2>
          }
        >
          <div className="w-full h-full bg-black/40 backdrop-blur-md rounded-2xl p-6 lg:p-12 border border-white/10 flex flex-col justify-center overflow-y-auto">
            <div className="w-full max-w-[100rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-start mt-4">
              <div className="flex justify-start w-full">
                <EncryptedTextDemo />
              </div>
              <div className="flex justify-end lg:mt-8 w-full">
                <TerminalDemo />
              </div>
            </div>
          </div>
        </ContainerScroll>
      </motion.div>

      <BackgroundRippleEffectDemo />

      <div id="projects" className="w-full">
        <AppleCardsCarouselDemo />
      </div>
      <div id="about" className="w-full">
        <AboutMeSection />
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-neutral-800/60 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-2xl font-bold tracking-tighter text-white">SB<span className="text-violet-400">.</span></span>
            <p className="text-sm text-neutral-500 max-w-xs">Have a project in mind? Let&apos;s build it.</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            <MagneticButton>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=shoryabhushan0@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 border border-violet-500/40 px-6 py-2.5 text-sm font-semibold text-violet-300 hover:bg-violet-500/20 hover:border-violet-400/50 transition-colors"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-violet-500 animate-pulse" />
                Let&apos;s Talk
              </a>
            </MagneticButton>
            <p className="text-xs text-neutral-600">&copy; {new Date().getFullYear()} Shorya Bhushan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
