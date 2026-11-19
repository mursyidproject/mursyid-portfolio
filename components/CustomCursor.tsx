"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Cek apakah kursor menyentuh elemen interaktif (button, link, input)
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* 1. Titik Pusat Neon (Dot) - Ukuran Tetap */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 1 : 1, // Ukuran TETAP tidak membesar
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 50 }}
      />

      {/* 2. Target Reticle / Ring Cyber Berputar - Ukuran Tetap */}
      <motion.div
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border border-dashed transition-colors duration-300 ${
          isHovered
            ? "border-[#3B82F6] shadow-[0_0_15px_rgba(59,130,246,0.6)]"
            : "border-[#00F0FF]/40"
        }`}
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          rotate: 360,
        }}
        transition={{
          x: { type: "spring", stiffness: 250, damping: 25 },
          y: { type: "spring", stiffness: 250, damping: 25 },
          rotate: { repeat: Infinity, duration: 8, ease: "linear" }, // Animasi cincin berputar mulus
        }}
      />
    </div>
  );
}