"use client";

import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import { AnimatePresence } from "framer-motion";

// ✅ Use Google-hosted Inter, with fallback
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // prevents layout shift
  fallback: ["system-ui", "sans-serif"], // ensures build won’t fail even if fetch fails
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4500); // 4.5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950`}>
        <AnimatePresence>
          {isLoading ? (
            <Preloader />
          ) : (
            <>
              <Navbar />
              <div>{children}</div>
              <Footer />
            </>
          )}
        </AnimatePresence>
      </body>
    </html>
  );
}
