"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import MarqueeTicker from "@/components/MarqueeTicker";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollSectionWrapper from "@/components/ScrollSectionWrapper";
import IdleProjectShowcase from "@/components/IdleProjectShowcase";

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [isWebVisible, setIsWebVisible] = useState(false);

  return (
    <main className="min-h-screen bg-[#0A0F1C] text-[#F8FAFC] selection:bg-[#38bdf8] selection:text-[#0A0F1C] relative overflow-x-hidden">
      {/* Preloader Overlay */}
      {showPreloader && (
        <Preloader
          onComplete={() => {
            setIsWebVisible(true);
            // Hapus dom preloader sepenuhnya setelah animasi fade benar-benar selesai
            setTimeout(() => setShowPreloader(false), 900);
          }}
        />
      )}

      {/* Konten Utama Website (Sudah siap di background sejak awal) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={isWebVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <CustomCursor />
        <Navbar />
        <IdleProjectShowcase />
        
        <div className="space-y-24 pb-12">
          <HeroSection />
          
          <ScrollSectionWrapper id="about">
            <AboutSection />
          </ScrollSectionWrapper>

          <ScrollSectionWrapper id="skills">
            <SkillsSection />
          </ScrollSectionWrapper>

          <ScrollSectionWrapper id="projects">
            <ProjectsSection />
          </ScrollSectionWrapper>

          <ScrollSectionWrapper id="experience">
            <ExperienceSection />
          </ScrollSectionWrapper>

          <ScrollSectionWrapper id="contact">
            <ContactSection />
          </ScrollSectionWrapper>
        </div>

        <MarqueeTicker />
        <Footer />
      </motion.div>
    </main>
  );
}