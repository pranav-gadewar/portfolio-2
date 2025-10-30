"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll effect for background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Education", href: "/Education" },
    { name: "Projects", href: "/Projects" },
    // { name: "Technical Skills", href: "/TechSkills" },
    { name: "Certifications", href: "/Certifications" },
    // { name: "Soft Skills", href: "/soft-skills" },
    { name: "Extras", href: "/ExtraCurricular" },
    // { name: "Contact", href: "/contact" },
  ];

  const mobileMenuVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 260, damping: 25 },
    },
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { type: "spring", stiffness: 260, damping: 25 },
    },
  };

  return (
    <motion.nav
      initial={false}
      animate={scrolled ? "scrolled" : "top"}
      variants={{
        top: {
          backgroundColor: "rgba(17, 24, 39, 0.6)",
          backdropFilter: "blur(4px)",
        },
        scrolled: {
          backgroundColor: "rgba(17, 24, 39, 0.95)",
          backdropFilter: "blur(8px)",
        },
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 w-full z-50 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl md:text-3xl font-extrabold tracking-tight"
        >
          <span className="text-white">My</span>
          <span className="text-orange-500">Portfolio</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {links.map((link) => (
            <div key={link.href} className="relative group">
              <Link
                href={link.href}
                className={`text-base font-medium transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-orange-500"
                    : "text-gray-300 hover:text-orange-400"
                }`}
              >
                {link.name}
              </Link>
              <span
                className={`absolute bottom-[-4px] left-0 w-full h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out ${
                  pathname === link.href ? "scale-x-100" : ""
                }`}
              />
            </div>
          ))}
          <a
            href="/Pranav_Gadewar__RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg border-2 border-orange-500 text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-200 hover:text-orange-500 focus:outline-none"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={28} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-lg border-t border-gray-700"
          >
            <div className="flex flex-col items-center px-6 py-8 space-y-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-xl font-semibold w-full text-center py-2 ${
                    pathname === link.href
                      ? "text-orange-500"
                      : "text-gray-300 hover:text-orange-400"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="/Pranav_Gadewar__RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center mt-4 px-5 py-3 rounded-lg border-2 border-orange-500 text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
