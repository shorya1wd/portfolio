"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";

export const MagneticButton = ({
  children,
  strength = 0.3,
  maxDistance = 40,
  radius = 150,
}: {
  children: React.ReactNode;
  strength?: number;
  maxDistance?: number;
  radius?: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (window.innerWidth < 768) return; // Disable on mobile

      const { width, height, left, top } = containerRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const distance = Math.hypot(distX, distY);

      // If the mouse is within the magnetic radius, pull the button towards it
      if (distance < radius) {
        let x = distX * strength;
        let y = distY * strength;

        const currentMove = Math.hypot(x, y);
        if (currentMove > maxDistance) {
          const scale = maxDistance / currentMove;
          x *= scale;
          y *= scale;
        }

        setPosition({ x, y });
      } else {
        // Otherwise, rest at origin
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [strength, maxDistance, radius]);

  return (
    <div
      ref={containerRef}
      className="cursor-pointer inline-flex w-fit relative z-10"
    >
      <motion.div
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
