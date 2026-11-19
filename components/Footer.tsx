"use client";

import { Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-[#0A0F1C] mb-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand Name */}
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-gradient-to-tr from-[#00F0FF] to-[#3B82F6] text-[#0A0F1C]">
            <Code2 className="w-4 h-4 font-bold" />
          </div>
          <span className="text-base font-bold text-[#F8FAFC] tracking-tight">
            Mursyid<span className="text-[#00F0FF]">, S.Kom.</span>
          </span>
        </div>

        {/* Quick Social Links */}
        <div className="flex items-center gap-5 text-xs font-mono text-[#94A3B8]">
          <a
            href="https://github.com/mursyidproject"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00F0FF] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://instagram.com/stuffwelike.id"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00F0FF] transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/6285234273168"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00F0FF] transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="mailto:mursyidd90@gmail.com"
            className="hover:text-[#00F0FF] transition-colors"
          >
            Email
          </a>
        </div>

        {/* Copyright (Angka Tahun Statis - Bebas Error Next.js) */}
        <p className="text-xs font-mono text-[#94A3B8]">
          © 2026 Mursyid. Built with Next.js, Tailwind CSS & Framer Motion.
        </p>
      </div>
    </footer>
  );
}