"use client";

import { motion } from "framer-motion";
import { 
  Database, 
  Code2, 
  Terminal, 
  Users, 
  Sparkles,
  Cpu,
  Layers,
  Wrench
} from "lucide-react";

const skillCards = [
  {
    id: "data-ai",
    title: "Data Analytics & AI",
    category: "DATA & ANALYTICS",
    icon: Database,
    description: "Pengolahan dataset kompleks, pemodelan data relasional, dan penerapan algoritma pembelajaran mesin/NLP.",
    badges: [
      "Python",
      "SQL",
      "Pandas & NumPy",
      "Data Cleaning",
      "Machine Learning / NLP",
      "Exploratory Data Analysis (EDA)"
    ],
    gridSpan: "md:col-span-12 lg:col-span-6"
  },
  {
    id: "web-eng",
    title: "Web & Software Engineering",
    category: "FRONTEND & CORE DEV",
    icon: Code2,
    description: "Pengembangan antarmuka web modern yang responsif, interaktif, serta berkinerja tinggi.",
    badges: [
      "HTML5 & CSS3",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Next.js",
      "REST APIs"
    ],
    gridSpan: "md:col-span-12 lg:col-span-6"
  },
  {
    id: "tools-env",
    title: "Tools & Data Environment",
    category: "ENVIRONMENT & TOOLING",
    icon: Terminal,
    description: "Ekosistem alat bantu pengembangan skrip, analisis data, visualisasi analitik, dan manajemen repositori.",
    badges: [
      "VS Code",
      "Google Colab",
      "Jupyter Notebook",
      "Excel / Spreadsheets",
      "Looker Studio",
      "Git & GitHub"
    ],
    gridSpan: "md:col-span-12 lg:col-span-6"
  },
  {
    id: "soft-leadership",
    title: "Soft Skills & Leadership",
    category: "INTERPERSONAL & LEADERSHIP",
    icon: Users,
    description: "Kompetensi manajemen tim, komunikasi efektif, pemecahan masalah terstruktur, serta adaptabilitas tinggi.",
    badges: [
      "Critical Thinking",
      "Leadership & Coordination",
      "Attention to Detail",
      "Effective Communication",
      "Problem Solving",
      "Fast Learner & Adaptability"
    ],
    gridSpan: "md:col-span-12 lg:col-span-6"
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      {/* Background Decorative Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-500/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Header Section */}
      <div className="flex flex-col items-center lg:items-start mb-16 relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-[#38bdf8]/30 text-xs font-mono text-[#38bdf8] mb-4 shadow-lg shadow-sky-500/10 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>// TECHNICAL & PROFESSIONAL SKILLS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F8FAFC] tracking-tight">
          Keahlian & <span className="bg-gradient-to-r from-[#38bdf8] via-[#7dd3fc] to-[#0284c7] bg-clip-text text-transparent">Teknologi</span>
        </h2>
        <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl mt-4 font-normal text-center lg:text-left">
          Kombinasi instrumen teknis pengolahan data, rekayasa web modern, serta kemampuan interpersonal untuk menghadirkan solusi teknologi yang presisi.
        </p>
      </div>

      {/* Grid Bento Layout 4 Kartu */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10">
        {skillCards.map((card) => {
          const IconComponent = card.icon;

          return (
            <motion.div
              key={card.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`${card.gridSpan} p-8 sm:p-9 rounded-3xl bg-gradient-to-b from-slate-900/90 via-[#0F172A]/80 to-[#0A0F1C]/90 border border-white/10 hover:border-[#38bdf8]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl backdrop-blur-xl relative overflow-hidden`}
            >
              {/* Corner Watermark Glow Icon */}
              <div className="absolute -top-12 -right-12 opacity-5 group-hover:opacity-15 group-hover:scale-110 transition-all duration-500 pointer-events-none">
                <IconComponent className="w-44 h-44 text-[#38bdf8]" />
              </div>

              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2 text-xs font-mono text-[#38bdf8] mb-4 tracking-wider">
                  <IconComponent className="w-4 h-4" />
                  <span>{card.category}</span>
                </div>

                {/* Card Title */}
                <h3 className="text-2xl font-bold text-[#F8FAFC] mb-3 group-hover:text-[#38bdf8] transition-colors">
                  {card.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-[#94A3B8] mb-6 leading-relaxed">
                  {card.description}
                </p>

                {/* Badges List */}
                <div className="flex flex-wrap gap-2.5 mb-2">
                  {card.badges.map((badge, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-white/10 text-xs font-mono text-[#CBD5E1] group-hover:border-[#38bdf8]/30 group-hover:text-[#F8FAFC] transition-all duration-300 shadow-sm"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Footer Accent */}
              <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#94A3B8]">
                <span>{card.badges.length} Core Competencies</span>
                <span className="w-2 h-2 rounded-full bg-[#38bdf8]/60 group-hover:bg-[#38bdf8] group-hover:shadow-[0_0_8px_#38bdf8] transition-all" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}