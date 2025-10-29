// components/Certifications.tsx

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X } from "lucide-react";

// Define a type for your certification data
type Certification = {
  name: string;
  platform: string;
  image: string; // Path to the certificate image in /public/certificates/
};

// --- IMPORTANT ---
// Replace this placeholder data with your actual certifications.
// Place your certificate images in the `public/certificates/` folder.
const certificationsData: Certification[] = [
  {
    name: "Programming in Java",
    platform: "Swayam NPTEL",
    image: "/certificates/NPTEL/Programming in Java.png",
  },
  {
    name: "Creating Responsive Web Pages using Bootstrap 4",
    platform: "Infosys Springboard",
    image: "/certificates/Infosys Springboard/Creating_Responsive_Web_Pages_using_Bootstrap_4_Certificate_Infosys_Springboard.png",
  },
  {
    name: "CSS 3",
    platform: "Infosys Springboard",
    image: "/certificates/Infosys Springboard/CSS3_Certificate_Infosys_Springboard.png",
  },
  {
    name: "HTML 5",
    platform: "Infosys Springboard",
    image: "/certificates/Infosys Springboard/HTML5_Certificate_Infosys_Springboard.png",
  },
  {
    name: "Twitter Bootstrap",
    platform: "Infosys Springboard",
    image: "/certificates/Infosys Springboard/Twitter_Bootstrap_Certificate_Infosys_Springboard.png",
  },
  {
    name: "Typescript",
    platform: "Infosys Springboard",
    image: "/certificates/Infosys Springboard/TypeScript_Certificate_Infosys_Springboard.png",
  },
  {
    name: "UX - User Experience",
    platform: "Infosys Springboard",
    image: "/certificates/Infosys Springboard/User_Experience_Certificate_Infosys_Springboard.png",
  },
  {
    name: "Website Creation",
    platform: "Infosys Springboard",
    image: "/certificates/Infosys Springboard/Website_Creation_Certificate_Infosys_Springboard.png",
  },
  {
    name: "Email Writing Skilla",
    platform: "Infosys Springboard",
    image: "/certificates/Infosys Springboard/Email_Writing_Certificate_Infosys_Springboard.png",
  },
  {
    name: "High Impact Presentation",
    platform: "Infosys Springboard",
    image: "/certificates/Infosys Springboard/High_Impact_Presentations_Certificate_Infosys_Springboard.png",
  },
  {
    name: "Time Management",
    platform: "Infosys Springboard",
    image: "/certificates/Infosys Springboard/Time_Management_Certificate_Infosys_Springboard.png",
  },
  {
    name: "JavaScript Programming",
    platform: "Scaler Topics",
    image: "/certificates/Scalar Topics/JavaScript_Certificate.png",
  },
  {
    name: "Java Programming",
    platform: "Scaler Topics`",
    image: "/certificates/Scalar Topics/Scaler_Java_Online_Certificate.png",
  },
  {
    name: "Data Analysis using Numpy, Pandas and Python",
    platform: "Scaler Topics`",
    image: "/certificates/Scalar Topics/Data_analysis_certificate.png",
  },
  {
    name: "React JS - Online Course Certificate",
    platform: "Udemy",
    image: "/certificates/Udemy/React JS - Online Course Certificate.png",
  },
  {
    name: "National Intellectual Property Awareness Mission",
    platform: "Modern College of Engineering, Shivaji Nagar, Pune",
    image: "/certificates/PES/IPR_EVENT_PRANAV_GADEWAR.png",
  },
  {
    name: "National Intellectual Property Awareness Mission",
    platform: "Modern College of Engineering, Shivaji Nagar, Pune",
    image: "/certificates/PES/IPR_EVENT_PRANAV_GADEWAR.png",
  },
];

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="certifications" className="w-full bg-gray-900 py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            My <span className="text-orange-500">Certifications</span>
          </h2>
          <p className="text-lg text-gray-400 mt-4">
            A showcase of my credentials and commitment to learning.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl border-2 border-gray-700 overflow-hidden flex flex-col group transition-all duration-300 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
            >
              <div className="p-6 flex-grow">
                <div className="flex items-center gap-4 mb-4">
                  <Award className="h-10 w-10 text-orange-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {cert.name}
                    </h3>
                    <p className="text-md font-medium text-gray-400">
                      {cert.platform}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-700/50 p-4">
                <button
                  onClick={() => setSelectedImage(cert.image)}
                  className="w-full text-center px-4 py-2 rounded-lg bg-orange-600 text-white font-semibold hover:bg-orange-700 transition-colors duration-300"
                >
                  View Certificate
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              // Increased max-width and max-height for a near full-screen view
              className="relative max-w-7xl max-h-[120vh] w-auto h-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <Image
                src={selectedImage}
                alt="Certificate"
                // Increased width/height props for higher resolution preference
                width={1920}
                height={1358}
                style={{
                  objectFit: "contain",
                  width: "auto",
                  height: "auto",
                  // These styles ensure the image fits within the viewport edges
                  maxHeight: "98vh",
                  maxWidth: "98vw",
                }}
              />
            </motion.div>
            <motion.button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 text-white/80 hover:text-white"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <X size={32} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}