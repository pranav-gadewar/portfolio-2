// src/components/Preloader.tsx

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const textLines = [
  "Welcome To My Portfolio",
  "My Name Is Pranav Gadewar",
];

// Animation variants for each sentence
const sentenceVariants : Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5, ease: "easeIn" } },
};

export default function Preloader() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Set an interval to switch to the next sentence
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        // Stop the interval once the last sentence is shown
        if (prevIndex === textLines.length - 1) {
          clearInterval(interval);
          return prevIndex;
        }
        return prevIndex + 1;
      });
    }, 2000); // Each sentence will be displayed for 2000ms = 2 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <motion.div
      className="fixed inset-0 bg-gray-950 text-white flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
    >
      <AnimatePresence mode="wait">
        <motion.h1
          key={index} // Key is crucial for AnimatePresence to track the element
          className={`text-2xl md:text-4xl font-bold tracking-wide ${
            index === 1 ? "text-orange-500" : "text-white"
          }`}
          variants={sentenceVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {textLines[index]}
        </motion.h1>
      </AnimatePresence>
    </motion.div>
  );
}