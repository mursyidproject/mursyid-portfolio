"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollSectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function ScrollSectionWrapper({ children, className = "", id }: ScrollSectionWrapperProps) {
  return (
    <div id={id} className={`relative ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ 
          duration: 0.9, 
          ease: [0.22, 1, 0.36, 1] // Easing curve paling halus standar agency web global
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}