"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const tickerItems = [
  "PYTHON & SQL DATA MODELING",
  "DATA ANALYTICS & VISUALIZATION",
  "S1 TEKNIK INFORMATIKA (IPK 3.72 CUMLAUDE)",
  "MODERN WEB DEVELOPMENT & NEXT.JS",
  "SCOPUS INDEXED RESEARCHER (IJ-ICT)",
  "OPEN FOR REMOTE & FULL-TIME ROLES",
];

export default function MarqueeTicker() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0A0F1C]/90 backdrop-blur-md border-t border-white/10 py-2.5 overflow-hidden pointer-events-none">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-10 shrink-0"
        >
          {tickerItems.concat(tickerItems).map((text, idx) => (
            <div key={idx} className="flex items-center gap-10">
              <span className="text-xs font-mono font-medium tracking-widest text-[#94A3B8] hover:text-[#38bdf8] transition-colors">
                {text}
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]/60" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}