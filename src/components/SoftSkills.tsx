// components/SoftSkills.tsx

"use client";

import { motion, Variants } from "framer-motion";
import { Languages, Users, GitBranch, Lightbulb } from "lucide-react";

// Data for the soft skills cards
const softSkillsData = [
  {
    icon: <Users size={40} className="mb-4 text-orange-500" />,
    title: "Leadership & Organization",
    description: "Skilled in organization, decisive decision-making, and leadership.",
  },
  {
    icon: <Languages size={40} className="mb-4 text-orange-500" />,
    title: "Communication",
    description: "Fluent in spoken English and proficient in written communication.",
  },
  
  {
    icon: <GitBranch size={40} className="mb-4 text-orange-500" />,
    title: "Teamwork & Adaptability",
    description: "Highly adaptive and collaborative, thriving in dynamic team environments.",
  },
  {
    icon: <Lightbulb size={40} className="mb-4 text-orange-500" />,
    title: "Creative Presentation",
    description: "Proficient in creative thinking and delivering clear, efficient presentations.",
  },
];

// Animation variants for Framer Motion
const fadeInAnimationVariants: Variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      type: "spring",
      stiffness: 50,
    },
  }),
};

export default function SoftSkills() {
  return (
    <section id="soft-skills" className="w-full bg-gray-950 py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Personal <span className="text-orange-500">Attributes</span>
          </h2>
          <p className="text-lg text-gray-400 mt-4">
            The core strengths that drive my professional approach.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {softSkillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-8 bg-gray-900 rounded-xl border-2 border-gray-800 transition-all duration-300 hover:border-orange-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {skill.icon}
              <h3 className="text-2xl font-bold text-white mb-3">
                {skill.title}
              </h3>
              <p className="text-gray-400 text-base">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}