// components/Projects.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react"; // Icons for GitHub and Live Demo

// Define a type for your project data for better type safety
type Project = {
  name: string;
  description: string;
  image: string; // Path to the project image
  githubLink?: string; // Optional GitHub link
  liveLink?: string; // Optional live demo link
  tags: string[]; // Technologies used
};

// Array of your project data
const projectsData: Project[] = [
  {
    name: "Maths Quiz App",
    description:
      "A gamified Maths Quiz App built with Next.js, Supabase, and Tailwind CSS. Features Admin and Student dashboards — Admins can add/manage quizzes and view students, while Students can attempt quizzes, view history, track scores and XP, and manage profiles.",
    image: "/projects/maths_quiz_app.png", // Replace with your actual image path
    githubLink: "https://github.com/pranav-gadewar/maths-quiz-app",
    liveLink: "https://maths-quiz-app.vercel.app/",
    tags: ["Next.js", "Tailwind CSS", "PostgreSQL", "Supabase", "TypeScript"],
  },
  {
    name: "Budget Buddy",
    description:
      "Budget Buddy is a responsive and user-friendly web application that helps you calculate monthly EMI (Equated Monthly Installment) for various loan types, view a detailed repayment breakdown, and download a comprehensive Excel report.",
    image: "/projects/budget-buddy.png", // Replace with your actual image path
    githubLink: "https://github.com/pranav-gadewar/loan-calculator",
    liveLink: "https://budget-buddy-wheat-phi.vercel.app/",
    tags: ["React", "Vite", "Chart.js", "TailwindCSS", "JavaScript"],
  },
  {
    name: "Algo Disc",
    description:
      "A responsive, web-based static application for visualizing Disk Scheduling Algorithms, leveraging native JavaScript capabilities for computation and interactivity. Built with React.js, Vite for fast bundling, and styled using Tailwind CSS for a modern and intuitive user interface.",
    image: "/projects/algo_disk.png", // Replace with your actual image path
    githubLink: "https://github.com/yourusername/my-portfolio",
    liveLink: "https://yourportfolio.com",
    tags: ["React", "TailwindCSS", "Vite", "Chart.js", "JavaScript"],
  },

  {
    name: "Royal GYM",
    description:
      "A static GYM website template developed using pure HTML & CSS for development purpose (GitHub)",
    image: "/projects/royal-gym.png", // Replace with your actual image path
    githubLink: "https://github.com/pranav-gadewar/royal-gym",
    liveLink: "https://github.com/pranav-gadewar/royal-gym",
    tags: ["HTML", "CSS"],
  },
  // Add more projects as needed
];

// Animation variants for project cards
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index, // Staggered delay for each card
    },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-gray-950 py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            My <span className="text-orange-500">Projects</span>
          </h2>
          <p className="text-lg text-gray-400 mt-4">
            Showcasing a selection of my recent work.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-900 rounded-xl overflow-hidden shadow-lg border-2 border-gray-800 group hover:border-orange-500 transition-all duration-300 transform hover:scale-[1.02]"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <div className="relative w-full h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`Project image for ${project.name}`}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 2} // Prioritize loading for first few images
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-400 text-base mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-orange-600/20 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.githubLink && (
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-orange-500 transition-colors duration-200"
                      aria-label={`View ${project.name} on GitHub`}
                    >
                      <Github size={20} />
                      <span className="text-sm">GitHub</span>
                    </Link>
                  )}
                  {project.liveLink && (
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-orange-500 transition-colors duration-200"
                      aria-label={`View live demo of ${project.name}`}
                    >
                      <ExternalLink size={20} />
                      <span className="text-sm">Live Demo</span>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}