"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useSpring,
} from "framer-motion";

interface AnimatedGradientProps {
  colors: string[];
  speed?: number;
  blur?: "none" | "light" | "medium" | "heavy";
  className?: string;
  intensity?: number;
}

const blurMap = {
  none: "blur-none",
  light: "blur-lg",
  medium: "blur-2xl",
  heavy: "blur-3xl",
};

export default function AnimatedGradient({
  colors,
  speed = 0.005,
  blur = "medium",
  className = "",
  intensity = 1,
}: AnimatedGradientProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const angle = useMotionValue(0);

  // Add springs for smoother animations
  const springX = useSpring(mouseX, { damping: 30, stiffness: 150 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 150 });
  const springAngle = useSpring(angle, { damping: 40, stiffness: 90 });

  // Add a scale spring for pulsing effect
  const scale = useSpring(1, { damping: 15, stiffness: 50 });

  useAnimationFrame((time) => {
    if (ref.current) {
      angle.set(time * speed);
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // More complex motion pattern
      const x =
        Math.cos(time * speed) * Math.sin(time * speed * 0.5) * 150 * intensity;
      const y =
        Math.sin(time * speed) * Math.cos(time * speed * 0.5) * 150 * intensity;

      mouseX.set(x + centerX);
      mouseY.set(y + centerY);

      // Add subtle pulsing effect
      scale.set(1 + Math.sin(time * speed * 0.5) * 0.03);
    }
  });

  useEffect(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(rect.left + rect.width / 2);
    mouseY.set(rect.top + rect.height / 2);
  }, [mouseX, mouseY]);

  const gradientStyle = {
    background: `
      radial-gradient(circle at ${springX.get()}px ${springY.get()}px, 
        ${colors[0]} 0%,
        ${colors[1]} 25%,
        ${colors[2]} 50%,
        transparent 80%
      ),
      linear-gradient(to bottom right,
        ${colors[0]}20 0%,
        ${colors[1]}10 50%,
        ${colors[2]}20 100%
      )
    `,
    transform: `rotate(${springAngle.get()}deg) scale(${scale.get()})`,
  };

  return (
    <>
      {/* Dark base layer */}
      <div className="fixed inset-0 bg-black/90" />

      {/* Primary gradient layer */}
      <motion.div
        ref={ref}
        className={`absolute inset-0 opacity-60 ${blurMap[blur]} ${className}`}
        style={gradientStyle}
        animate={{
          background: gradientStyle.background,
          transform: gradientStyle.transform,
        }}
        transition={{ type: "spring", damping: 20 }}
      />

      {/* Secondary subtle gradient for depth */}
      <div className="fixed inset-0 opacity-30 bg-gradient-to-b from-transparent via-black/50 to-black/80" />

      {/* Noise texture overlay */}
      <div className="fixed inset-0 bg-noise opacity-[0.015] pointer-events-none mix-blend-overlay" />

      {/* Subtle vignette effect */}
      <div className="fixed inset-0 pointer-events-none bg-radial-gradient opacity-50" />
    </>
  );
}
