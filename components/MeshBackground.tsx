"use client";

import { motion } from "framer-motion";

export default function MeshBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#0A0F1C]">
      {/* Orb Cyan Glow */}
      <motion.div
        animate={{
          x: [0, 80, -60, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#00F0FF]/15 blur-[130px]"
      />

      {/* Orb Royal Blue Glow */}
      <motion.div
        animate={{
          x: [0, -90, 70, 0],
          y: [0, 80, -80, 0],
          scale: [1, 1.3, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 -right-32 w-[600px] h-[600px] rounded-full bg-[#3B82F6]/20 blur-[150px]"
      />

      {/* Grid Mesh Overlay untuk aksen data */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />
    </div>
  );
}