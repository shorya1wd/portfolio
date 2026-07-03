"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import OpusAIFeatureSection from "@/components/opusai-feature-section";
import ImagoFeatureSection from "@/components/imago-feature-section";
import LuminaFeatureSection from "@/components/lumina-feature-section";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <div className="max-w-7xl pl-4 mx-auto mb-2">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-400 mb-3">Selected Work</p>
        <h2 className="text-4xl md:text-6xl font-bold text-neutral-800 dark:text-neutral-100 leading-tight">
          Featured <span className="text-violet-400">Projects</span>.
        </h2>
        <p className="mt-3 text-neutral-500 dark:text-neutral-400 text-base max-w-xl">
          A curated set of applications built with precision, shipped with care.
        </p>
      </div>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Multi-tenant SaaS",
    title: "OpusAI",
    src: "/OpusAI-main.png",
    content: <OpusAIFeatureSection />,
    glowColor: "rgba(56, 189, 248, 0.6)", // sky-400 / blue
  },
  {
    category: "Media Studio",
    title: "Imago",
    src: "/Imago-main.png",
    content: <ImagoFeatureSection />,
    glowColor: "rgba(52, 211, 153, 0.6)", // emerald-400 / green
  },
  {
    category: "Video Streaming",
    title: "Lumina",
    src: "/Lumina-main.png",
    content: <LuminaFeatureSection />,
    glowColor: "rgba(251, 146, 60, 0.6)", // orange-400
  }
];
