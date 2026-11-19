"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code2, Menu, X } from "lucide-react";

const navItems = [
  { name: "Beranda", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // 1. Efek background navbar saat di-scroll ke bawah
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Logic Scroll Spy Presisi
  useEffect(() => {
    const handleScrollSpy = () => {
      if (window.scrollY < 150) {
        setActiveSection("home");
        return;
      }

      const sections = ["home", "about", "skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    handleScrollSpy();

    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0F1C]/40 backdrop-blur-md border-b border-white/10 py-3 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="p-2 rounded-xl bg-gradient-to-tr from-[#38bdf8] to-[#0284c7] text-[#0A0F1C]">
            <Code2 className="w-5 h-5 font-bold" />
          </div>
          <span className="text-xl font-black text-[#F8FAFC] tracking-tight group-hover:text-[#38bdf8] transition-colors">
            Mursyid<span className="text-[#38bdf8]">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            
            return (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors relative py-1 group ${
                  isActive ? "text-[#38bdf8]" : "text-[#94A3B8] hover:text-[#F8FAFC]"
                }`}
              >
                {item.name}
                {/* Garis bawah menyala jika aktif */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#38bdf8] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl text-xs font-bold font-mono tracking-wider uppercase text-[#0A0F1C] bg-[#38bdf8] hover:bg-[#7dd3fc] transition-all"
          >
            Hubungi Saya
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#94A3B8] hover:text-[#F8FAFC]"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#0A0F1C]/80 backdrop-blur-2xl border-b border-white/10 px-6 py-6"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#94A3B8] hover:text-[#38bdf8] py-2"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center px-5 py-3 rounded-xl text-xs font-bold font-mono text-[#0A0F1C] bg-[#38bdf8]"
            >
              Hubungi Saya
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}