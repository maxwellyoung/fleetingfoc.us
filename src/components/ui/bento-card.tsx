import React from "react";
import { motion } from "framer-motion";
import AnimatedGradient from "@/components/ui/animated-gradient";

interface BentoCardProps {
  title: string;
  description: string;
  colors: string[];
  delay?: number;
  className?: string;
}

export function BentoCard({
  title,
  description,
  colors,
  delay = 0,
  className = "",
}: BentoCardProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay + 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className={`relative overflow-hidden rounded-3xl bg-black/5 dark:bg-white/5 backdrop-blur-xl ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <AnimatedGradient colors={colors} speed={0.05} blur="medium" />
      <motion.div
        className="relative z-10 p-8 h-full"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h3 className="text-xl font-light mb-4" variants={item}>
          {title}
        </motion.h3>
        <motion.p className="text-sm opacity-80" variants={item}>
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
