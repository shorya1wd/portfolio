"use client";

import React from "react";
import Image from "next/image";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { TextRevealScroll } from "@/components/ui/text-reveal-scroll";

export default function AboutMeSection() {
  const aboutMeText = 
    "I build applications that people love to use and that directly drive business growth. For me, high-quality freelancing is a mutual partnership: I provide strategic solutions to your technical bottlenecks, and we both succeed together. \n I am a full-stack engineer who values precision, craftsmanship, and consistent execution. My strongest asset is my ability to sit down, focus, and figure things out. While the financial aspect of a project matters, the engineering experience and the quality of the final product matter more. When I read Steven Pressfield's The War of Art, his definition of a professional really resonated with me: 'The professional concentrates on the work and the technique. He does not take success or failure personally.' \n I manage risk by being highly selective. As Charles Curtis said, 'An expert is someone who knows what not to do.'";

  return (
    <div className="relative w-full bg-neutral-950 border-t border-neutral-800/60 pb-[20vh]">
      {/* Subtle violet radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(139,92,246,0.07),transparent)]" />

      {/* Section Header: Two-column — Heading Left, Portrait Right */}
      <div className="max-w-6xl mx-auto px-4 pt-24 pb-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left: Heading */}
        <div className="flex flex-col gap-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-400">The Person Behind the Code</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
            About <span className="text-violet-400">Me</span>.
          </h2>
          
          <MagneticButton>
            {/* mailto: for mobile/tablet/iPad (< 1280px) */}
            <a
              href="mailto:shoryabhushan0@gmail.com"
              className="xl:hidden inline-flex w-fit items-center gap-2 rounded-full bg-violet-500/10 border border-violet-500/30 px-5 py-2.5 text-sm font-medium text-violet-400 hover:bg-violet-500/20 hover:border-violet-400 transition-all duration-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
              Let&apos;s Talk
            </a>
            {/* Gmail compose for laptops 14"+ (≥ 1280px) */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shoryabhushan0@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:inline-flex w-fit items-center gap-2 rounded-full bg-violet-500/10 border border-violet-500/30 px-5 py-2.5 text-sm font-medium text-violet-400 hover:bg-violet-500/20 hover:border-violet-400 transition-all duration-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
              Let&apos;s Talk
            </a>
          </MagneticButton>
        </div>

        {/* Right: Portrait */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-72 md:w-80">
            {/* Glow behind image */}
            <div className="absolute inset-0 rounded-3xl bg-violet-500/20 blur-3xl scale-90" />
            <Image
              src="/me4.jpg"
              alt="Shorya Bhushan"
              width={320}
              height={427}
              priority
              className="relative w-full rounded-3xl aspect-3/4 object-cover object-top shadow-2xl border border-violet-500/10"
            />
          </div>
        </div>
      </div>

      {/* Full-width left-aligned text */}
      <div className="max-w-6xl mx-auto px-4 w-full">
        <TextRevealScroll text={aboutMeText} className="h-auto" />
      </div>
    </div>
  );
}
