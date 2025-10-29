// components/Education.tsx

"use client";

import { GraduationCap } from "lucide-react";
import { motion, Variants } from "framer-motion";

// Array to hold your education data for easy management
const educationData  = [
    {
        degree: "Master in Computer Applications (MCA)",
        institution: "Modern College of Engineering, Pune",
        duration: "2024 - Present (Pursuing)",
        score: "GPA: 7.95",
    },
    {
        degree: "Bachelor of Business Administration in Computer Application (BBA - CA)",
        institution: "Sinhgad College of Commerce, Kondhwa",
        duration: "2021 - 2024",
        score: "GPA: 8.36",
    },
    {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Gurunanak Public School & Jr. College",
        duration: "2019 - 2021",
        score: "Percentage: 75.50%",
    },
    {
        degree: "Secondary School Certificate (SSC)",
        institution: "Kroot Memorial High School",
        duration: "2019",
        score: "Percentage: 58.00%",
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

export default function Education() {
    return (
        <section id="education" className="w-full min-h-screen bg-gray-950 py-20 md:py-24">
            <div className="max-w-4xl mx-auto px-6 md:px-8">
                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                        My <span className="text-orange-500">Education</span>
                    </h2>
                    <p className="text-lg text-gray-400 mt-4">
                        A timeline of my academic journey.
                    </p>
                </div>

                {/* Vertical Timeline */}
                <div className="relative border-l-2 border-orange-500 ml-4 md:ml-0">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            className="mb-10 ml-8"
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            custom={index}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[11px] mt-1.5 h-5 w-5 rounded-full bg-orange-500 border-4 border-gray-900"></div>

                            {/* Education Card */}
                            <div className="p-6 rounded-lg bg-gray-900 border border-gray-800 shadow-lg hover:shadow-orange-500/20 transition-shadow duration-300">
                                <div className="flex justify-between items-center mb-2 flex-wrap">
                                    <h3 className="text-xl md:text-2xl font-bold text-white">
                                        {edu.degree}
                                    </h3>
                                    <span className="text-sm font-semibold text-orange-500 bg-gray-800 px-3 py-1 rounded-full mt-2 sm:mt-0">
                                        {edu.duration}
                                    </span>
                                </div>
                                <p className="text-md font-medium text-gray-300 mb-3">
                                    {edu.institution}
                                </p>
                                <p className="text-lg text-gray-400 font-mono">{edu.score}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}