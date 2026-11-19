"use client";

import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Database, 
  MapPin, 
  Sparkles, 
  Target, 
  Cpu, 
  ArrowUpRight,
  CheckCircle2
} from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Badge Section Header */}
      <div className="flex flex-col items-center lg:items-start mb-16 relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-[#38bdf8]/30 text-xs font-mono text-[#38bdf8] mb-4 shadow-lg shadow-sky-500/10 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>// ABOUT ME & HIGHLIGHTS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F8FAFC] tracking-tight">
          Latar Belakang & <span className="bg-gradient-to-r from-[#38bdf8] via-[#7dd3fc] to-[#0284c7] bg-clip-text text-transparent">Keahlian</span>
        </h2>
      </div>

      {/* Grid Bento Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10">
        
        {/* 1. KARTU PROFIL UTAMA (md:col-span-12 / lg:col-span-7) */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="md:col-span-12 lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-slate-900/90 via-[#0F172A]/80 to-[#0A0F1C]/90 border border-white/10 hover:border-[#38bdf8]/40 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group shadow-xl backdrop-blur-xl"
        >
          {/* Ambient Corner Glow & Watermark Icon */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#38bdf8]/10 rounded-full blur-3xl group-hover:bg-[#38bdf8]/20 transition-all duration-500 pointer-events-none" />
          <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-25 group-hover:scale-105 transition-all duration-500">
            <GraduationCap className="w-40 h-40 text-[#38bdf8]" />
          </div>

          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#38bdf8] mb-5 tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-ping" />
              <span>PENDIDIKAN UTAMA & RINGKASAN PROFIL</span>
            </div>

            {/* Judul Bersih Tanpa Teks IPK Berulang */}
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] mb-2 leading-tight">
              S1 Teknik Informatika
            </h3>

            <p className="text-xs font-mono text-[#94A3B8] mb-6 flex items-center gap-2">
              <span>Universitas Malikussaleh</span>
              <span className="text-[#38bdf8]">•</span>
              <span>Lulus Agustus 2026</span>
            </p>

            <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed mb-8 font-normal">
              Lulusan S1 Teknik Informatika yang berfokus pada integrasi <strong className="text-[#38bdf8] font-semibold">Data Analytics</strong>, pengelolaan <strong className="text-[#38bdf8] font-semibold">database SQL</strong>, pengembangan <strong className="text-[#38bdf8] font-semibold">website modern</strong>, dan pemrograman <strong className="text-[#38bdf8] font-semibold">Python</strong>. Memiliki pemahaman mendalam dalam mengolah dataset kompleks, merancang arsitektur data relasional, serta membangun sistem komputasi cerdas berbasis kecerdasan buatan.
            </p>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#94A3B8] font-mono">
              <CheckCircle2 className="w-4 h-4 text-[#38bdf8]" />
              <span>Fokus Perangkat Lunak & AI System</span>
            </div>
            <span className="px-4 py-2 rounded-full bg-[#38bdf8]/15 border border-[#38bdf8]/40 text-xs font-mono font-bold text-[#38bdf8] shadow-md shadow-sky-500/10">
              IPK 3.72 (Cumlaude)
            </span>
          </div>
        </motion.div>

        {/* 2. KARTU ANALITIS DATA & REKAYASA PERANGKAT LUNAK (md:col-span-6 / lg:col-span-5) */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="md:col-span-6 lg:col-span-5 p-8 sm:p-9 rounded-3xl bg-gradient-to-b from-slate-900/90 via-[#0F172A]/80 to-[#0A0F1C]/90 border border-white/10 hover:border-[#38bdf8]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-[#0284c7]/10 rounded-full blur-2xl group-hover:bg-[#0284c7]/20 transition-all duration-500 pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2 text-xs font-mono text-[#38bdf8]">
                <Award className="w-4 h-4" />
                <span>KAPASITAS ANALITIS & TRAININGS</span>
              </div>
              <span className="px-3 py-1 rounded-full bg-slate-800 border border-white/10 text-[10px] font-mono text-[#38bdf8] font-bold">
                GRADE A
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] mb-2">
              RevoU Data Analytics & Software Tech
            </h3>
            <p className="text-xs text-[#38bdf8] font-mono mb-4">
              900+ Jam Pembelajaran Intensif • Score: 82/100
            </p>
            <p className="text-sm text-[#CBD5E1] leading-relaxed">
              Didukung pelatihan intensif analisis data dan rekayasa perangkat lunak, terbiasa mengekstraksi wawasan berharga dari data mentah guna mendukung pengambilan keputusan strategis yang presisi.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-[#94A3B8] font-mono">Real-World Case Studies</span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900 border border-white/10 text-xs font-mono text-[#38bdf8] group-hover:border-[#38bdf8]/30 transition-colors">
              Data-Driven Insight
            </span>
          </div>
        </motion.div>

        {/* 3. KARTU PUBLIKASI RISET INTERNASIONAL (md:col-span-6 / lg:col-span-4) */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="md:col-span-6 lg:col-span-4 p-8 rounded-3xl bg-gradient-to-b from-slate-900/90 via-[#0F172A]/80 to-[#0A0F1C]/90 border border-white/10 hover:border-[#38bdf8]/40 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group shadow-xl backdrop-blur-xl"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#38bdf8] mb-5">
              <BookOpen className="w-4 h-4" />
              <span>STANDAR RISET INTERNASIONAL</span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-xl font-bold text-[#F8FAFC]">
                Scopus Indexed Paper
              </h3>
              <ArrowUpRight className="w-5 h-5 text-[#38bdf8] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <p className="text-sm text-[#CBD5E1] leading-relaxed mb-4">
              Telah teruji dalam riset berstandar internasional yang dipublikasikan pada jurnal terindeks Scopus (IJ-ICT), mengevaluasi pemodelan AI Summarization (BART & MiniLM) dengan ketelitian analitis dan logika pemrograman yang kuat.
            </p>
          </div>

          <div className="pt-5 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-[#38bdf8]">
            <Sparkles className="w-4 h-4" />
            <span>AI Summarization Research</span>
          </div>
        </motion.div>

        {/* 4. KARTU VISI & DEDIKASI SOLUSI DIGITAL (md:col-span-12 / lg:col-span-5) */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="md:col-span-12 lg:col-span-5 p-8 rounded-3xl bg-gradient-to-b from-slate-900/90 via-[#0F172A]/80 to-[#0A0F1C]/90 border border-white/10 hover:border-[#38bdf8]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl backdrop-blur-xl"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#38bdf8] mb-5">
              <Target className="w-4 h-4" />
              <span>VISI & DEDIKASI TEKNOLOGI</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] mb-3">
              Solusi Digital Inovatif & Adaptif
            </h3>
            <p className="text-sm text-[#CBD5E1] leading-relaxed">
              Dengan kombinasi ketelitian analitis, logika pemrograman yang kuat, serta dedikasi tinggi pada efisiensi teknologi, saya siap merancang dan menghadirkan solusi digital yang inovatif, terstruktur, adaptif, serta memberikan dampak nyata.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-xs font-mono">
            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-white/5">
              <Database className="w-4 h-4 text-[#38bdf8]" />
              <span className="text-[#CBD5E1]">SQL & Python</span>
            </div>
            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-white/5">
              <Cpu className="w-4 h-4 text-[#38bdf8]" />
              <span className="text-[#CBD5E1]">Modern Web</span>
            </div>
          </div>
        </motion.div>

        {/* 5. KARTU DOMISILI & FLEKSIBILITAS (md:col-span-12 / lg:col-span-3) */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="md:col-span-12 lg:col-span-3 p-8 rounded-3xl bg-gradient-to-b from-slate-900/90 via-[#0F172A]/80 to-[#0A0F1C]/90 border border-white/10 hover:border-[#38bdf8]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl backdrop-blur-xl relative overflow-hidden"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#38bdf8] mb-5">
              <MapPin className="w-4 h-4" />
              <span>LOCATION & BASE</span>
            </div>
            <h3 className="text-xl font-bold text-[#F8FAFC] mb-2">
              Kab. Simeulue / Lhokseumawe
            </h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed mt-1">
              Indonesia • Terbuka untuk Remote (WFA) maupun On-site / Relokasi.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
            <span className="text-[10px] font-mono text-[#38bdf8]">WIB (UTC+7)</span>
            <div className="p-3 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/30 text-[#38bdf8] group-hover:scale-110 transition-transform">
              <MapPin className="w-5 h-5" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}