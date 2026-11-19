"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xljbnpek", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        const errorData = await response.json();
        throw new Error(errorData?.error || "Gagal mengirim pesan. Silakan coba lagi.");
      }
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Terjadi kesalahan jaringan.");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="rounded-3xl p-8 sm:p-14 bg-slate-900/60 border border-white/10 backdrop-blur-xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Glow Ambient di Belakang Form */}
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#00F0FF]/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Info Kontak (Kiri) */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#00F0FF]/10 text-[#00F0FF] text-xs font-mono mb-4 border border-[#00F0FF]/20">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>// GET IN TOUCH</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-black text-[#F8FAFC] tracking-tight mb-6">
              Mari Bekerja <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#3B82F6]">Sama</span>
            </h2>

            <p className="text-[#94A3B8] text-base leading-relaxed mb-8">
              Terbuka untuk posisi full-time, proyek remote Data Analytics, GIS Spatial Mapping, maupun peluang kolaborasi teknis lainnya.
            </p>
          </div>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-[#00F0FF]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-[#94A3B8] block">Email</span>
                <a href="mailto:mursyidd90@gmail.com" className="text-sm font-semibold text-[#F8FAFC] hover:text-[#00F0FF] transition-colors">
                  mursyidd90@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-[#00F0FF]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-[#94A3B8] block">Telepon / WA</span>
                <span className="text-sm font-semibold text-[#F8FAFC]">
                  +62 852-3427-3168
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-[#3B82F6]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-[#94A3B8] block">Lokasi</span>
                <span className="text-sm font-semibold text-[#F8FAFC]">
                  Kabupaten Simeulue / Lhokseumawe
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Kontak (Kanan) */}
        <div className="lg:col-span-7">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs font-mono text-[#94A3B8] block mb-2">NAMA LENGKAP</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Masukkan nama kamu"
                  className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-[#F8FAFC] placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#00F0FF] transition-colors text-sm"
                />
              </div>
              <div>
                <label className="text-xs font-mono text-[#94A3B8] block mb-2">EMAIL</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="nama@email.com"
                  className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-[#F8FAFC] placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#00F0FF] transition-colors text-sm"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-mono text-[#94A3B8] block mb-2">SUBJEK / TOPIK</label>
              <input
                type="text"
                name="subject"
                required
                placeholder="Penawaran Proyek / Diskusi Karir"
                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-[#F8FAFC] placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#00F0FF] transition-colors text-sm"
              />
            </div>

            <div>
              <label className="text-xs font-mono text-[#94A3B8] block mb-2">PESAN</label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tuliskan pesan kamu di sini..."
                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-[#F8FAFC] placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#00F0FF] transition-colors text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-4 rounded-2xl font-bold text-sm text-[#0A0F1C] bg-gradient-to-r from-[#00F0FF] to-[#3B82F6] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:scale-[1.01] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none"
            >
              {status === "submitting" ? (
                <span>Mengirim Pesan...</span>
              ) : (
                <>
                  <span>Kirim Pesan</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2.5 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs"
              >
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Pesan berhasil terkirim! Terima kasih, Mursyid akan segera membalas ke email kamu.</span>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2.5 p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs"
              >
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </motion.div>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}