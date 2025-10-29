"use client";

import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import { AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // We have 2 sentences at 2s each, so we need at least 4s total.
    // Let's use 4.5s to be safe.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4500); // 4500ms = 4.5 seconds

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