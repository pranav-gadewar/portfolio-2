// components/Footer.tsx (or just Footer.tsx in your root if not using a components folder)

import Link from "next/link";
import { Mail, Phone } from "lucide-react"; // For email and phone icons
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa"; // For social icons

export default function Footer() {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/pranav-gadewar-768132223/", // Replace with your LinkedIn URL
      icon: FaLinkedinIn,
      color: "hover:text-blue-600", // LinkedIn blue
    },
    {
      name: "GitHub",
      href: "https://github.com/pranavgadewar", // Replace with your GitHub URL
      icon: FaGithub,
      color: "hover:text-yellow-400", // GitHub dark grey/white
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/pranav_gadewar_03/", // Replace with your Instagram URL
      icon: FaInstagram,
      color: "hover:text-pink-500", // Instagram gradient approximation
    },
  ];

  return (
    <footer className="bg-gray-950 text-gray-300 py-12 md:py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center text-center space-y-8">
        {/* Get In Touch Section */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            <span className="text-orange-500">G</span>et{" "}
            <span className="text-orange-500">I</span>n{" "}
            <span className="text-orange-500">T</span>ouch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Feel free to reach out to me for collaborations, project
            discussions, or just to say hello. I'm always open to exploring new
            opportunities and connecting with like-minded people.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center space-y-3">
          <a
            href="tel:+919607622072"
            className="flex items-center gap-2 text-lg text-gray-300 hover:text-orange-500 transition-colors duration-200"
          >
            <Phone size={20} className="text-orange-500" />
            <span>(+91) 96076 22072</span>
          </a>
          <a
            href="mailto:gadewar.pranav03@gmail.com"
            className="flex items-center gap-2 text-lg text-gray-300 hover:text-orange-500 transition-colors duration-200"
          >
            <Mail size={20} className="text-orange-500" />
            <span>gadewar.pranav03@gmail.com</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 pt-2">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-400 ${link.color} transition-colors duration-300`}
              aria-label={link.name}
            >
              <link.icon size={36} /> {/* Larger icons for better visibility */}
            </a>
          ))}
        </div>

        {/* Email Me Button */}
        <Link
          href="mailto:gadewar.pranav03@gmail.com"
          className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition duration-300 transform hover:scale-105"
        >
          Email Me
        </Link>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 mt-10 w-full max-w-sm">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Pranav Gadewar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}