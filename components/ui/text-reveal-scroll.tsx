"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

export const TextRevealScroll = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 40%", "end 80%"],
  });

  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 w-full py-16", className)}>
      <div className="flex flex-col justify-center px-4 md:px-8">
        <p className="flex flex-wrap text-2xl font-normal text-black/20 md:text-2xl lg:text-3xl dark:text-white/20 max-w-3xl leading-relaxed">
          {words.map((word, i) => {
            if (word === "\n") {
              return <span key={i} className="block w-full h-6 md:h-8" />;
            }
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

const Word = ({
  children,
  progress,
  range,
}: {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  progress: any;
  range: [number, number];
}) => {
  // To create the effect where the text dims after you scroll past it,
  // we map the opacity over a bell curve centered on the word's position.
  const opacity = useTransform(
    progress,
    [Math.max(0, range[0] - 0.2), range[0], Math.min(1, range[0] + 0.2)],
    [0.1, 1, 0.1]
  );
  
  return (
    <span className="relative mx-1 lg:mx-2 my-1">
      <span className="absolute opacity-20">{children}</span>
      <motion.span 
        style={{ opacity }} 
        className="text-black dark:text-white"
      >
        {children}
      </motion.span>
    </span>
  );
};
