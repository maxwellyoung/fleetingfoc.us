"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Moon, Sun, Smartphone } from "lucide-react";

export function ModernAnimatedMarketingPageComponent() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isDarkMode, setIsDarkMode] = useState(true);

  const sections = ["hero", "features", "how", "cta"];
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const setSectionRef = (index: number) => (el: HTMLElement | null) => {
    sectionRefs.current[index] = el;
  };

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sectionRefs.current.forEach((ref) => {
      if (ref && observerRef.current) observerRef.current.observe(ref);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <AnimatePresence>
      <motion.div
        key={isDarkMode ? "dark" : "light"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`min-h-screen ${
          isDarkMode
            ? "bg-gradient-to-br from-gray-900 via-indigo-900 to-black"
            : "bg-gradient-to-br from-white via-indigo-50 to-gray-100"
        } text-${
          isDarkMode ? "white" : "black"
        } font-sans transition-all duration-500`}
      >
        <nav className="fixed top-0 left-0 w-16 h-screen flex flex-col items-center justify-center space-y-8 bg-opacity-50 backdrop-blur-md z-50">
          {sections.map((section) => (
            <motion.button
              key={section}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === section
                  ? "bg-indigo-500"
                  : isDarkMode
                  ? "bg-neutral-700"
                  : "bg-neutral-300"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                document
                  .getElementById(section)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            />
          ))}
        </nav>

        <motion.button
          className="fixed top-4 right-4 z-50 p-2 rounded-full bg-opacity-50 backdrop-blur-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleDarkMode}
        >
          {isDarkMode ? (
            <Sun className="w-6 h-6" />
          ) : (
            <Moon className="w-6 h-6" />
          )}
        </motion.button>

        <main className="ml-16">
          <section
            id="hero"
            ref={setSectionRef(0)}
            className="h-screen flex flex-col justify-center items-start px-16 relative overflow-hidden"
          >
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-7xl font-bold mb-4 leading-tight"
            >
              Fleeting Focus
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className={`text-2xl ${
                isDarkMode ? "text-neutral-300" : "text-neutral-700"
              } mb-4 flex items-center`}
            >
              <Smartphone className="w-6 h-6 mr-2" />
              Your Mobile Productivity Companion
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className={`text-xl ${
                isDarkMode ? "text-neutral-400" : "text-neutral-600"
              } mb-8 max-w-2xl`}
            >
              Cut through the noise and concentrate on your most important tasks
              each day, right from your mobile device.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-3xl text-lg font-semibold transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Now
            </motion.button>
          </section>

          {/* Features section */}
          <section
            id="features"
            ref={setSectionRef(1)}
            className="min-h-screen flex flex-col justify-center px-16 py-24"
          >
            <h2 className="text-5xl font-bold mb-16">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  title: "Daily Focus Setting",
                  description: "Set your top 3 priorities each day",
                },
                {
                  title: "Minimalist Design",
                  description: "Clean, distraction-free interface",
                },
                {
                  title: "Swipe to Complete",
                  description: "Mark tasks as done with a satisfying swipe",
                },
                {
                  title: "Progress Tracking",
                  description: "Watch your focus items move from to-do to done",
                },
                {
                  title: "Secure Authentication",
                  description: "Sign in using Apple Sign-In or Magic Link",
                },
                {
                  title: "Cross-Device Sync",
                  description:
                    "Access your focus items across all your devices",
                },
                {
                  title: "Daily Reset",
                  description: "Start each day fresh with new priorities",
                },
                {
                  title: "Smart Notifications",
                  description:
                    "Receive optional reminders for your daily goals",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${
                    isDarkMode ? "bg-neutral-800" : "bg-white"
                  } p-8 rounded-2xl shadow-lg`}
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-2xl font-semibold mb-4">
                    {feature.title}
                  </h3>
                  <p
                    className={
                      isDarkMode ? "text-neutral-300" : "text-neutral-700"
                    }
                  >
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Why Choose Fleeting Focus section */}
          <section
            id="why"
            ref={setSectionRef(2)}
            className={`min-h-screen flex flex-col justify-center px-16 py-24 ${
              isDarkMode ? "bg-indigo-900" : "bg-indigo-50"
            }`}
          >
            <h2 className="text-5xl font-bold mb-16">
              Why Choose Fleeting Focus?
            </h2>
            <p
              className={`text-xl mb-12 ${
                isDarkMode ? "text-neutral-300" : "text-neutral-700"
              }`}
            >
              In a world of endless to-do lists and constant distractions,
              Fleeting Focus brings you back to what&apos;s essential. By
              limiting your daily focus to just three items, we help you:
            </p>
            <div className="space-y-8">
              {[
                "Reduce overwhelm and decision fatigue",
                "Increase your sense of accomplishment throughout the day",
                "Improve your ability to prioritize effectively",
                "Enhance your overall productivity and satisfaction",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <p
                    className={`text-lg ${
                      isDarkMode ? "text-neutral-300" : "text-neutral-700"
                    }`}
                  >
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA section */}
          <section
            id="cta"
            ref={setSectionRef(3)}
            className="min-h-screen flex flex-col justify-center items-center px-16 py-24 text-center"
          >
            <h2 className="text-5xl font-bold mb-8">
              Start Your Journey to a More Focused You
            </h2>
            <p
              className={`text-2xl ${
                isDarkMode ? "text-neutral-300" : "text-neutral-700"
              } mb-12 max-w-2xl`}
            >
              Download Fleeting Focus today and transform how you approach your
              daily tasks and goals.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-6 rounded-3xl text-xl font-semibold transition-colors flex items-center space-x-4"
            >
              <span>Download Now</span>
              <ArrowRight className="w-6 h-6" />
            </motion.button>
            <p
              className={`mt-8 text-lg ${
                isDarkMode ? "text-neutral-400" : "text-neutral-600"
              }`}
            >
              Remember, it&apos;s not about doing more &ndash; it&apos;s about
              doing what matters most.
            </p>
          </section>
        </main>

        <footer
          className={`${isDarkMode ? "bg-gray-900" : "bg-gray-100"} py-8 px-16`}
        >
          <div className="flex justify-between items-center">
            <p className={isDarkMode ? "text-neutral-400" : "text-neutral-600"}>
              &copy; 2024 Fleeting Focus. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {[
                { name: "Privacy", href: "/privacy" },
                { name: "Terms", href: "/terms" },
                { name: "Contact", href: "/contact" },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className={`${
                    isDarkMode
                      ? "text-neutral-400 hover:text-white"
                      : "text-neutral-600 hover:text-black"
                  } transition-colors`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>
        </footer>
      </motion.div>
    </AnimatePresence>
  );
}
