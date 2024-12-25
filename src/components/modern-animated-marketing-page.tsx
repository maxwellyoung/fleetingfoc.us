"use client";

import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "@/components/ui/typewriter";
import UnderlineToBackground from "@/components/ui/underline-to-background";
import { useState } from "react";

function Particles() {
  return (
    <div className="fixed inset-0 pointer-events-none opacity-20">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, Math.random() * 100 + "%"],
            x: Math.random() * 100 + "%",
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * -20,
          }}
        />
      ))}
    </div>
  );
}

export function ModernAnimatedMarketingPageComponent() {
  const [phase, setPhase] = useState(0);
  const [showCTA, setShowCTA] = useState(false);

  const sequence = [
    {
      text: "In a world of endless notifications...",
      gradient: "from-[#0A0F1E] via-[#12172B] to-[#0A0F1E]",
    },
    {
      text: "Where focus feels impossible...",
      gradient: "from-[#12172B] via-[#1A1F35] to-[#12172B]",
    },
    {
      text: "What if we could clear the noise?",
      gradient: "from-[#1A1F35] via-[#1E2642] to-[#1A1F35]",
    },
    {
      text: "Three essential tasks.",
      gradient: "from-[#1E2642] via-[#1A1F35] to-[#1E2642]",
    },
    {
      text: "That's all you need.",
      gradient: "from-[#1A1F35] via-[#12172B] to-[#1A1F35]",
    },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden bg-[#0A0F1E]">
      {/* Base effects layer */}
      <div className="fixed inset-0 z-0">
        <Particles />
      </div>

      {/* Gradient backgrounds */}
      <div className="fixed inset-0 z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={`bg-${phase}`}
            className={`absolute inset-0 bg-gradient-to-br ${sequence[phase].gradient}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </div>

      {/* Content layer */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          {!showCTA ? (
            <motion.div
              key={phase}
              className="text-3xl md:text-4xl lg:text-5xl text-white/90 font-light text-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: -20,
                transition: {
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Typewriter
                text={sequence[phase].text}
                speed={50}
                loop={false}
                showCursor={false}
                waitTime={1000}
                onComplete={() => {
                  if (phase < sequence.length - 1) {
                    setTimeout(() => setPhase((p) => p + 1), 1000);
                  } else {
                    setTimeout(() => setShowCTA(true), 1000);
                  }
                }}
              />
            </motion.div>
          ) : (
            <motion.div
              key="cta"
              className="w-full max-w-7xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">
                    Three tasks.
                    <br />
                    Every day.
                    <br />
                    That&apos;s all.
                  </h1>
                  <p className="text-xl text-white/70">
                    Transform your productivity with radical simplicity.
                  </p>
                  <UnderlineToBackground
                    label="Get Started →"
                    targetTextColor="#1E1B4B"
                    className="text-xl tracking-wide text-white inline-block"
                    onClick={() => {}}
                  />
                </div>
                <div className="relative aspect-square">
                  <motion.div
                    className="absolute inset-0 bg-white/5 rounded-2xl backdrop-blur-sm overflow-hidden"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
