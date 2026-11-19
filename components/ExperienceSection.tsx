"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    role: "Staf Administrasi & Kasir",
    company: "RXD Store",
    period: "2026",
    location: "Indonesia",
    type: "Work Experience",
    points: [
      "Mengelola akurasi data inventaris produk dan pencatatan transaksi harian.",
      "Melakukan rekonsiliasi kas harian untuk memastikan pembukuan keuangan toko presisi.",
      "Melayani transaksi pelanggan serta mengoptimalkan operasional sistem kasir toko.",
    ],
  },
  {
    role: "Asisten Peneliti (IoT & Web Monitoring System)",
    company: "Universitas Malikussaleh",
    period: "2025 - 2026",
    location: "Aceh, Indonesia",
    type: "Research Project",
    points: [
      "Merancang dan merakit perangkat keras Internet of Things (IoT) berbasis sensor untuk akuisisi data kualitas air pada sistem aquaponik secara otomatis.",
      "Mengembangkan dashboard pemantauan berbasis website untuk memvisualisasikan parameter lingkungan dan kondisi sistem secara real-time.",
      "Berkolaborasi langsung dengan dosen peneliti dalam pengujian integrasi perangkat, kalibrasi sensor, serta validasi akurasi pengiriman data telemetri.",
    ],
  },
  {
    role: "Ketua KKN (Kuliah Kerja Nyata)",
    company: "Universitas Malikussaleh",
    period: "2025 - 2026",
    location: "Gampong Community",
    type: "Leadership Experience",
    points: [
      "Memimpin dan mengoordinasikan seluruh program kerja pengabdian masyarakat kelompok KKN.",
      "Menjalin komunikasi dan hubungan kelembagaan formal dengan perangkat desa/gampong setempat.",
      "Mengelola eksekusi kegiatan pemberdayaan masyarakat desa secara tepat waktu.",
    ],
  },
  {
    role: "Studi Independen Data Analytics & GenAI",
    company: "RevoU Tech Academy",
    period: "2026",
    location: "Remote Program (900 Jam)",
    type: "Intensive Program",
    points: [
      "Menyelesaikan 900 jam pembelajaran intensif dalam manipulasi data Python, SQL relational database, dan visualisasi BI.",
      "Mengembangkan dashboard analitik dan studi kasus bisnis berbasis data (Grade A, Score 82/100).",
      "Menerapkan model kecerdasan buatan (Gen AI) untuk eksplorasi dan sintesis data terstruktur.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      {/* Header */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#00F0FF]/10 text-[#00F0FF] text-xs font-mono mb-3 border border-[#00F0FF]/20">
          <span>// CAREER & LEADERSHIP</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-black text-[#F8FAFC] tracking-tight">
          Pengalaman <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#3B82F6]">Kerja & Peran</span>
        </h2>
      </div>

      {/* Timeline Layout */}
      <div className="relative border-l border-white/10 ml-4 sm:ml-8 space-y-12">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative pl-8 sm:pl-12 group"
          >
            {/* Timeline Node Dot */}
            <div className="absolute -left-[17px] top-1.5 p-2 rounded-full bg-[#0A0F1C] border-2 border-[#00F0FF] text-[#00F0FF] group-hover:bg-[#00F0FF] group-hover:text-[#0A0F1C] transition-all shadow-[0_0_15px_rgba(0,240,255,0.4)]">
              <Briefcase className="w-4 h-4" />
            </div>

            {/* Content Card */}
            <div className="p-8 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-[#00F0FF]/40 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/20 inline-block mb-2">
                    {exp.type}
                  </span>
                  <h3 className="text-2xl font-bold text-[#F8FAFC]">{exp.role}</h3>
                  <p className="text-[#00F0FF] font-semibold text-sm">{exp.company}</p>
                </div>

                <div className="flex flex-col sm:items-end text-xs text-[#94A3B8] font-mono gap-1">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#3B82F6]" /> {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#3B82F6]" /> {exp.location}
                  </span>
                </div>
              </div>

              <ul className="space-y-2 mt-4 pt-4 border-t border-white/10">
                {exp.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3 text-sm text-[#94A3B8] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#00F0FF] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}