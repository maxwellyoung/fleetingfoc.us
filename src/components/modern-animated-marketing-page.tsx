"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import Typewriter from "@/components/ui/typewriter";
import UnderlineToBackground from "@/components/ui/underline-to-background";
import { useState, MouseEvent, useEffect } from "react";

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
            scale: [0.5, Math.random() * 1 + 0.5, 0.5],
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
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const mouseBackground = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(56, 189, 248, 0.25), transparent 80%)`;

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const taskExamples = [
    ["Launch MVP", "Write docs", "User research"],
    ["Team standup", "Code review", "Ship feature"],
    ["Client meeting", "Debug issue", "Update blog"],
    ["Morning workout", "Read book", "Family dinner"],
    ["Draft proposal", "Call investor", "Update deck"],
    ["Study Spanish", "Piano practice", "Meditate"],
    ["Write newsletter", "Edit video", "Post content"],
    ["Doctor checkup", "Grocery shop", "Cook dinner"],
    ["Plan vacation", "Book flights", "Pack bags"],
  ];

  const [taskSetIndex, setTaskSetIndex] = useState(0);

  // Cycle through task sets
  useEffect(() => {
    if (!showCTA) return;
    const interval = setInterval(() => {
      setTaskSetIndex((prev) => (prev + 1) % taskExamples.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [showCTA, taskExamples.length]);

  const sequence = [
    {
      text: "Where focus feels impossible...",
      gradient: "from-[#12172B] via-[#1A1F35] to-[#12172B]",
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
      <div className="fixed inset-0 z-0">
        <Particles />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      <div className="absolute top-8 left-8 z-30">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-lg font-light tracking-wide"
        >
          <span className="text-sky-400/90">Fleeting</span>
          <span className="text-white/50 ml-2">Focus</span>
        </motion.div>
      </div>

      <div className="relative z-20 h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          {!showCTA ? (
            <motion.div
              key={phase}
              className="text-4xl md:text-5xl lg:text-6xl text-white/90 font-light text-center px-4"
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
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 leading-[1.1] pb-4">
                    Three tasks.
                    <br />
                    Every day.
                  </h1>
                  <p className="text-xl text-sky-200/70">
                    Transform your productivity with radical simplicity.
                  </p>
                  <UnderlineToBackground
                    label="Get Started →"
                    targetTextColor="#1E1B4B"
                    className="text-xl tracking-wide text-white inline-block hover:scale-105 transition-transform"
                    onClick={() => {}}
                  />
                </div>
                <div
                  className="relative aspect-square group cursor-pointer"
                  onMouseMove={handleMouseMove}
                >
                  <motion.div
                    className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-sky-500/20 via-transparent to-sky-500/10 p-[1px]"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/20 via-transparent to-sky-500/10 blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
                    <div className="relative h-full w-full rounded-2xl bg-[#0A0F1E]/90 p-8 backdrop-blur-sm group-hover:scale-[0.98] transition-transform duration-500">
                      <motion.div
                        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-500 group-hover:opacity-100"
                        style={{
                          background: mouseBackground,
                        }}
                      />
                      <div className="relative h-full w-full flex flex-col justify-center space-y-8">
                        {[0, 1, 2].map((index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-6"
                          >
                            <div className="w-12 h-12 rounded-full border border-sky-500/30 flex items-center justify-center text-2xl text-sky-500/70">
                              {index + 1}
                            </div>
                            <AnimatePresence mode="wait">
                              <motion.div
                                key={`${taskSetIndex}-${index}`}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                className="text-xl text-white/70"
                              >
                                {taskExamples[taskSetIndex][index]}
                              </motion.div>
                            </AnimatePresence>
                          </div>
                        ))}
                      </div>
                    </div>
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
