// components/Skills.tsx

"use client";

import { motion } from "framer-motion";
// Importing specific icons from react-icons
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJava, FaPython } from "react-icons/fa";
import { SiExpress, SiMysql, SiMongodb } from "react-icons/si";
import { TbBrandNextjs, TbBrandJavascript, TbBrandTailwind, TbBrandCpp } from "react-icons/tb";

// Array of skills with names and corresponding icons
const skillsData = [
  { name: "Next JS", icon: <TbBrandNextjs size={40} /> },
  { name: "React JS", icon: <FaReact size={40} /> },
  { name: "Node JS", icon: <FaNodeJs size={40} /> },
  { name: "Express JS", icon: <SiExpress size={40} /> },
  { name: "HTML", icon: <FaHtml5 size={40} /> },
  { name: "CSS", icon: <FaCss3Alt size={40} /> },
  { name: "JavaScript", icon: <TbBrandJavascript size={40} /> },
  { name: "Tailwind CSS", icon: <TbBrandTailwind size={40} /> },
  { name: "Java", icon: <FaJava size={40} /> },
  { name: "Python", icon: <FaPython size={40} /> },
  { name: "C/C++", icon: <TbBrandCpp size={40} /> },
  { name: "MySQL", icon: <SiMysql size={40} /> },
  { name: "MongoDB", icon: <SiMongodb size={40} /> },
];

// Animation variants for the skill cards
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index, // Staggered delay for each card
    },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="w-full bg-gray-900 py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Technical <span className="text-orange-500">Skills</span>
          </h2>
          <p className="text-lg text-gray-400 mt-4">
            My proficiency in various technologies and tools.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="group relative flex flex-col items-center justify-center p-6 bg-gray-800 rounded-xl border-2 border-gray-700 transition-all duration-300 hover:border-orange-500 hover:scale-105 hover:bg-gray-900"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <div className="text-gray-300 transition-colors duration-300 group-hover:text-orange-500">
                {skill.icon}
              </div>
              <p className="mt-4 text-center font-semibold text-gray-200">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}