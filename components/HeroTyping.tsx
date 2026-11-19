"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Data Analyst",
  "Software Engineer",
  "Python & SQL Developer",
  "Modern Web Developer"
];

export default function HeroTyping() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(targetRole.substring(0, currentText.length + 1));
        if (currentText === targetRole) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setCurrentText(targetRole.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/30 backdrop-blur-md mb-6">
      <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
      <span className="text-xs sm:text-sm font-semibold text-[#38bdf8] tracking-wide h-6 inline-flex items-center font-mono">
        {currentText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="ml-1 inline-block w-[2px] h-4 bg-[#38bdf8]"
        />
      </span>
    </div>
  );
}