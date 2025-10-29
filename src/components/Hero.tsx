"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion"; // Corrected the typo here

// Explicitly type the variants object
const textContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Each child will animate 0.2s after the previous one
    },
  },
};

// Explicitly type this variants object as well
const textItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section
      id="home" // Added ID for navbar scrolling
      className="relative w-full min-h-screen bg-gray-950 text-white flex items-center pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-12 w-full">
        {/* Left Content */}
        <motion.div
          className="flex-1 space-y-6"
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight"
            variants={textItemVariants}
          >
            <span className="text-orange-500">PRANAV GADEWAR</span>
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl font-medium text-gray-300"
            variants={textItemVariants}
          >
            WEB ENTHUSIAST | MERN STACK DEVELOPER
          </motion.h2>

          <motion.p
            className="text-gray-400 max-w-xl"
            variants={textItemVariants}
          >
            As a passionate and dedicated individual exploring the vast world of
            IT and technology, I love designing and developing visually
            appealing, user-friendly websites. I combine creativity with
            technical expertise to craft engaging digital experiences.
          </motion.p>

          {/* Call to Action */}
          <motion.div
            className="flex gap-4 mt-6"
            variants={textItemVariants}
          >
            <Link
              href="/Pranav_Gadewar__RESUME_.pdf" target="_blank"
              className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition duration-200"
            >
              Download Resume
            </Link>
            <Link
              href="#projects"
              className="px-6 py-3 border border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition duration-200"
            >
              View Projects
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1 flex justify-center relative"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
        >
          <div className="relative w-72 h-72 md:w-[420px] md:h-[420px] rounded-full overflow-hidden border-4 border-orange-500 shadow-[0_0_50px_rgba(255,165,0,0.5)]">
            <Image
              src="/Profile Pic/Profile_Pic.jpg" // replace with your actual image in /public
              alt="Pranav Gadewar"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}