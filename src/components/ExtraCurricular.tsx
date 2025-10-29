// components/ExtraCurricular.tsx

"use client";

import { motion } from "framer-motion";
import { Disc3, Car, Home } from "lucide-react";

// Data for your extra-curricular projects
const extraCurricularData = [
  {
    icon: <Disc3 className="h-8 w-8 text-orange-500" />,
    title: "Disk Scheduling Algorithms Visualizer",
    description:
      "For Operating System and Computer Networks Project Competition.",
    details: "Group of 4 members.",
  },
  {
    icon: <Car className="h-8 w-8 text-orange-500" />,
    title: "Vehicle Safetylizer",
    description: "For Alcohol Detection using IoT Components and C++.",
    details: "Group of 3 members.",
  },
  {
    icon: <Home className="h-8 w-8 text-orange-500" />,
    title: "House Price Prediction Presentation",
    description:
      "Using Python libraries (Numpy, pandas) via Jupyter Notebook and MS PowerPoint.",
    details: "Group of 2 members.",
  },
];

// Animation variants for Framer Motion
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

export default function ExtraCurricular() {
  return (
    <section id="extracurricular" className="w-full bg-gray-900 py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Extra-Curricular <span className="text-orange-500">Activities</span>
          </h2>
          <p className="text-lg text-gray-400 mt-4">
            A glimpse into my collaborative project work and practical learning experiences.
          </p>
        </div>

        {/* Project List */}
        <div className="flex flex-col gap-8">
          {extraCurricularData.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-6 p-6 bg-gray-800 rounded-xl border-2 border-gray-700 transition-all duration-300 hover:border-orange-500 hover:-translate-y-1"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {/* Icon */}
              <div className="flex-shrink-0 mt-1">{item.icon}</div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-2">{item.description}</p>
                <p className="text-sm text-orange-400 font-medium bg-gray-700 inline-block px-3 py-1 rounded-full">
                  {item.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}