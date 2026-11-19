"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Database, Terminal, Code, Cpu } from "lucide-react";
import Image from "next/image";
import HeroTyping from "./HeroTyping";
import MagneticButton from "./MagneticButton";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Sisi Kiri: Value Proposition & CTA */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-20"
        >
          <HeroTyping />

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#F8FAFC] mb-6 leading-tight whitespace-nowrap">
            Mursyid, <span className="text-[#38bdf8]">S.Kom.</span>
          </h1>

          {/* Value Proposition */}
          <p className="text-lg sm:text-xl text-[#CBD5E1] max-w-2xl mb-10 leading-relaxed font-normal">
            Spesialis <span className="text-[#38bdf8] font-semibold">Data Analytics</span> & <span className="text-[#38bdf8] font-semibold">Modern Web Development</span>. Berfokus pada optimalisasi arsitektur <span className="text-[#38bdf8] font-semibold">database SQL</span> dan pemrograman <span className="text-[#38bdf8] font-semibold">Python</span> untuk mentransformasi data menjadi solusi teknologi yang efisien dan berdampak.
          </p>

          {/* Tombol Utama */}
          <div className="flex flex-col sm:flex-row items-center gap-5 mb-10 w-full sm:w-auto">
            <MagneticButton>
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#38bdf8] text-[#0A0F1C] font-bold text-base transition-all duration-300 hover:bg-[#7dd3fc] shadow-lg shadow-sky-500/10"
              >
                Lihat Proyek Unggulan
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="/CV_Mursyid.pdf"
                target="_blank"
                download
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-[#F8FAFC] font-semibold text-base transition-all hover:bg-white/10 border border-white/15"
              >
                <Download className="w-5 h-5 text-[#38bdf8]" />
                Unduh CV
              </a>
            </MagneticButton>
          </div>

          {/* Deretan Sosmed: Lingkaran Tetap Netral, Hanya Logo Tengah Berubah Warna Asli Saat Hover */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 text-[#94A3B8]">
            
            {/* LinkedIn (#0A66C2) */}
            <a
              href="https://linkedin.com/in/mursyid"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-slate-900/80 border border-white/10 hover:border-white/20 hover:scale-110 transition-all duration-300"
              title="LinkedIn Profile"
            >
              <svg className="w-5 h-5 fill-current text-[#94A3B8] group-hover:text-[#0A66C2] transition-colors duration-300" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
              </svg>
            </a>

            {/* GitHub (#F8FAFC) */}
            <a
              href="https://github.com/mursyidproject"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-slate-900/80 border border-white/10 hover:border-white/20 hover:scale-110 transition-all duration-300"
              title="GitHub Profile"
            >
              <svg className="w-5 h-5 fill-current text-[#94A3B8] group-hover:text-[#F8FAFC] transition-colors duration-300" viewBox="0 0 24 24">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
              </svg>
            </a>

            {/* Kaggle (#20BEFF) */}
            <a
              href="https://kaggle.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-slate-900/80 border border-white/10 hover:border-white/20 hover:scale-110 transition-all duration-300"
              title="Kaggle Profile"
            >
              <svg className="w-5 h-5 fill-current text-[#94A3B8] group-hover:text-[#20BEFF] transition-colors duration-300" viewBox="0 0 24 24">
                <path d="M18.825 23.859h-3.225l-5.46-8.58-1.575 1.485v7.095H5.475V.141h3.09v14.4l6.57-7.44h3.915l-6.42 6.96 6.195 9.798z" />
              </svg>
            </a>

            {/* Email (#EA4335) */}
            <a
              href="mailto:mursyidd90@gmail.com"
              className="group p-3 rounded-full bg-slate-900/80 border border-white/10 hover:border-white/20 hover:scale-110 transition-all duration-300"
              title="Kirim Email"
            >
              <svg className="w-5 h-5 fill-current text-[#94A3B8] group-hover:text-[#EA4335] transition-colors duration-300" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>

            {/* Instagram (#E4405F) */}
            <a
              href="https://instagram.com/stuffwelike.id"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-slate-900/80 border border-white/10 hover:border-white/20 hover:scale-110 transition-all duration-300"
              title="Instagram Profile"
            >
              <svg className="w-5 h-5 fill-current text-[#94A3B8] group-hover:text-[#E4405F] transition-colors duration-300" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>

            {/* WhatsApp Presisi (#25D366) */}
            <a
              href="https://wa.me/6285234273168"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-slate-900/80 border border-white/10 hover:border-white/20 hover:scale-110 transition-all duration-300"
              title="Chat WhatsApp"
            >
              <svg 
                className="w-5 h-5 fill-current text-[#94A3B8] group-hover:text-[#25D366] transition-colors duration-300" 
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.71 1.454h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
              </svg>
            </a>

          </div>
        </motion.div>

        {/* Sisi Kanan: Foto Profil & Badge Keahlian */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center relative w-full h-[500px] sm:h-[600px] z-10"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[460px] h-[340px] sm:h-[460px] rounded-full bg-sky-500/10 blur-[120px] pointer-events-none" />

          {/* Badge Melayang */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-12 left-4 z-30 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-xs font-mono text-[#F8FAFC] shadow-sm hidden sm:flex"
          >
            <Terminal className="w-4 h-4 text-[#38bdf8]" />
            <span>Python Scripting</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-28 left-0 z-30 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-xs font-mono text-[#F8FAFC] shadow-sm hidden sm:flex"
          >
            <Database className="w-4 h-4 text-[#38bdf8]" />
            <span>SQL Database</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-24 right-4 z-30 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-xs font-mono text-[#F8FAFC] shadow-sm hidden sm:flex"
          >
            <Code className="w-4 h-4 text-[#38bdf8]" />
            <span>Web Development</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-20 right-2 z-30 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-xs font-mono text-[#F8FAFC] shadow-sm hidden sm:flex"
          >
            <Cpu className="w-4 h-4 text-[#38bdf8]" />
            <span>Data Analytics</span>
          </motion.div>

          {/* Masking Foto */}
          <div className="relative w-full h-full max-w-md overflow-hidden">
            <div 
              className="relative w-full h-full"
              style={{
                WebkitMaskImage: "linear-gradient(to bottom, black 35%, transparent 95%), radial-gradient(ellipse 52% 75% at 50% 50%, black 40%, transparent 85%)",
                maskImage: "linear-gradient(to bottom, black 35%, transparent 95%), radial-gradient(ellipse 52% 75% at 50% 50%, black 40%, transparent 85%)",
                WebkitMaskComposite: "source-in",
                maskComposite: "intersect"
              }}
            >
              <Image
                src="/pas foto (2) .png"
                alt="Mursyid, S.Kom."
                fill
                className="object-contain object-center filter contrast-110 z-10"
                priority
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}