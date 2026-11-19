"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, BarChart3, FileText, Database, Sparkles } from "lucide-react";

const initialProjects = [
  {
    title: "E-Commerce Delivery & Shipping",
    category: "Data Analytics & Looker Studio",
    desc: "Analisis logistik end-to-end 95.824 pesanan Olist. Mengungkap bottleneck keterlambatan dan dampaknya ke ulasan bintang 1.",
    icon: BarChart3,
    tech: ["Python", "Pandas", "EDA", "Looker Studio"],
    link: "https://github.com/mursyidproject/olist-ecommerce-delivery-analysis",
  },
  {
    title: "BART vs MiniLM Summarization",
    category: "AI / NLP Research • IJ-ICT",
    desc: "Evaluasi 3.000 artikel berita Indonesia (Scopus-indexed). Model BART unggul semantik, MiniLM 51,6× lebih cepat.",
    icon: FileText,
    tech: ["Python", "PyTorch", "BART", "MiniLM"],
    link: "https://github.com/mursyidproject/indonesian-multidoc-summarization-bart-minilm",
  },
  {
    title: "HR Attrition & Performance Analytics",
    category: "SQL & Python Analytics",
    desc: "Analisis 10.000 data karyawan untuk mengukur tingkat resign, penggajian, dan performa departemen secara komprehensif.",
    icon: Database,
    tech: ["Python", "SQL", "Pandas", "Excel"],
    link: "#projects",
  },
];

export default function IdleProjectShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDissolving, setIsDissolving] = useState(false);
  const [projects, setProjects] = useState(initialProjects);

  // 1. Timer Inaktivitas: Muncul 5 detik, menghilang 30 detik
  useEffect(() => {
    let showTimer: NodeJS.Timeout;
    let hideTimer: NodeJS.Timeout;
    let cycleInterval: NodeJS.Timeout;

    const runShowcaseCycle = () => {
      if (isExpanded || isDissolving) return;
      
      // Munculkan kartu selama 5 detik
      setIsVisible(true);
      
      hideTimer = setTimeout(() => {
        if (!isExpanded && !isDissolving) {
          setIsVisible(false);
        }
      }, 5000);
    };

    // Jalankan siklus pertama setelah 3 detik halaman dimuat
    const initialDelay = setTimeout(() => {
      runShowcaseCycle();
    }, 3000);

    // Perulangan siklus: Total durasi 1 putaran = 5s tampil + 30s jeda = 35 detik
    cycleInterval = setInterval(() => {
      runShowcaseCycle();
    }, 35000);

    return () => {
      clearTimeout(initialDelay);
      clearTimeout(hideTimer);
      clearInterval(cycleInterval);
    };
  }, [isExpanded, isDissolving]);

  // 2. Rotasi Otomatis Tumpukan Kartu Saat Kartu Tampil
  useEffect(() => {
    if (!isVisible || isExpanded) return;

    const interval = setInterval(() => {
      setProjects((prev) => {
        const lastItem = prev[prev.length - 1];
        const restItems = prev.slice(0, prev.length - 1);
        return [lastItem, ...restItems];
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isVisible, isExpanded]);

  // Fungsi Tutup dengan Efek Portal Vakum Menyedot ke Tengah
  const handleTriggerClose = () => {
    setIsDissolving(true);
    setTimeout(() => {
      setIsDissolving(false);
      setIsExpanded(false);
      setIsVisible(false);
    }, 1200);
  };

  return (
    <>
      {/* Tumpukan Kartu Portrait di Pojok Kiri Bawah */}
      <AnimatePresence>
        {isVisible && !isExpanded && (
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 left-6 z-50 cursor-pointer group"
            onClick={() => setIsExpanded(true)}
          >
            <div className="relative w-44 h-64">
              <div className="absolute -top-3 left-0 z-40 bg-[#38bdf8] text-[#0A0F1C] text-[9px] font-mono font-bold px-2 py-0.5 rounded-md shadow">
                Klik untuk Buka Galeri
              </div>

              {projects.map((proj, idx) => {
                const IconComponent = proj.icon;
                const isTop = idx === 0;
                const isMiddle = idx === 1;

                return (
                  <motion.div
                    key={proj.title}
                    layout
                    animate={{
                      scale: isTop ? 1 : isMiddle ? 0.93 : 0.86,
                      y: isTop ? 0 : isMiddle ? -18 : -36,
                      x: isTop ? 0 : isMiddle ? 16 : 32,
                      rotate: isTop ? -4 : isMiddle ? 6 : 14,
                      opacity: isTop ? 1 : isMiddle ? 0.8 : 0.45,
                      zIndex: 30 - idx * 10,
                    }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    style={{ transformOrigin: "bottom left" }}
                    className="absolute inset-0 bg-[#0A0F1C]/95 backdrop-blur-2xl border border-white/15 rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col justify-between group-hover:border-[#38bdf8]/50 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#38bdf8]">
                          Layer 0{idx + 1}
                        </span>
                        <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-[#38bdf8]">
                          <IconComponent className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      <span className="text-[10px] font-mono text-[#94A3B8] block mb-1 truncate">
                        {proj.category}
                      </span>
                      <h4 className="text-sm font-bold text-[#F8FAFC] leading-snug line-clamp-2">
                        {proj.title}
                      </h4>
                      <p className="text-[11px] text-[#94A3B8] mt-2 leading-relaxed line-clamp-3">
                        {proj.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-semibold text-[#38bdf8]">
                      <span>Buka Galeri</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Detail di Tengah dengan Efek Portal Vakum */}
      <AnimatePresence>
        {isExpanded && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 150 }}
              animate={{ 
                opacity: isDissolving ? 0 : 1, 
                scale: isDissolving ? 0.05 : 1, 
                rotate: isDissolving ? 360 : 0, 
                filter: isDissolving ? "brightness(3) blur(8px)" : "brightness(1) blur(0px)" 
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-5xl w-full bg-[#0A0F1C] border border-white/15 rounded-3xl p-8 shadow-2xl overflow-hidden"
            >
              {/* Kilatan Cahaya Portal Saat Ditutup */}
              {isDissolving && (
                <div className="absolute inset-0 z-50 pointer-events-none flex items-center justify-center bg-[#38bdf8]/40 backdrop-blur-md transition-opacity duration-300" />
              )}

              {/* Tombol Tutup */}
              <button
                onClick={handleTriggerClose}
                className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 border border-white/10 text-[#94A3B8] hover:text-white transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-[#38bdf8] mb-2">
                <Sparkles className="w-4 h-4" />
                <span>FEATURED PROJECT SHOWCASE</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] mb-8">
                Eksplorasi Karya Unggulan Mursyid
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.map((proj, idx) => {
                  const IconComponent = proj.icon;
                  return (
                    <div
                      key={proj.title}
                      className="bg-slate-900/80 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#38bdf8]/40 transition-all group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-mono text-[#38bdf8] px-2.5 py-1 rounded-md bg-[#38bdf8]/10 border border-[#38bdf8]/20">
                            0{idx + 1}
                          </span>
                          <div className="p-2.5 rounded-xl bg-white/5 text-[#38bdf8]">
                            <IconComponent className="w-5 h-5" />
                          </div>
                        </div>

                        <span className="text-xs font-mono text-[#94A3B8] block mb-1">
                          {proj.category}
                        </span>
                        <h4 className="text-lg font-bold text-[#F8FAFC] mb-2 group-hover:text-[#38bdf8] transition-colors">
                          {proj.title}
                        </h4>
                        <p className="text-xs text-[#94A3B8] leading-relaxed mb-6">
                          {proj.desc}
                        </p>
                      </div>

                      <div>
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {proj.tech.map((t, tIdx) => (
                            <span key={tIdx} className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-[#CBD5E1] border border-white/10">
                              {t}
                            </span>
                          ))}
                        </div>

                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={handleTriggerClose}
                          className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#38bdf8] text-[#0A0F1C] font-bold text-xs transition-all hover:bg-[#7dd3fc]"
                        >
                          <span>Lihat Proyek Lengkap</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}