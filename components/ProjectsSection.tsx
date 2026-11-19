"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import {
  FolderGit2,
  ExternalLink,
  Sparkles,
  Database,
  Code2,
  BarChart3,
  MapPin,
  FileText,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: "all" | "data" | "web" | "gis";
  categoryLabel: string;
  badge: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  images?: string[];
  metrics?: { label: string; value: string }[];
  icon: any;
}

const projectsData: Project[] = [
  {
    id: "olist-ecommerce",
    title: "E-Commerce Delivery & Shipping Performance Analysis",
    category: "data",
    categoryLabel: "DATA ANALYTICS & BI",
    badge: "Live Dashboard",
    description:
      "Analisis performa logistik end-to-end pada 95.824 pesanan e-commerce (Olist Dataset). Mengidentifikasi bottleneck keterlambatan tertinggi di Alagoas (23,37%) dan dampaknya terhadap 46,13% ulasan bintang 1.",
    tags: ["Python", "Pandas", "EDA", "Looker Studio"],
    githubUrl: "https://github.com/mursyidproject/olist-ecommerce-delivery-analysis",
    demoUrl: "https://datastudio.google.com/reporting/b19b9802-19f9-41a8-bbd7-9d488013bfef",
    images: [
      "/projects/olist-dashboard.png",
      "/projects/olist-code.png",
      "/projects/olist-data.png",
    ],
    metrics: [
      { label: "Total Orders", value: "95.824" },
      { label: "1-Star (Late)", value: "46,13%" },
      { label: "Max Delay (AL)", value: "23,37%" },
    ],
    icon: BarChart3,
  },
  {
    id: "scopus-ai",
    title: "Indonesian Multi-Document Abstractive Summarization (BART vs MiniLM)",
    category: "data",
    categoryLabel: "AI / NLP RESEARCH • IJ-ICT",
    badge: "Scopus Paper",
    description:
      "Evaluasi komparatif fine-tuned BART vs pseudo-abstractive MiniLM pada 3.000 artikel berita Indonesia (600 klaster) dengan prototipe Gradio. BART unggul secara kualitas semantik, sementara MiniLM 51,6× lebih cepat.",
    tags: ["Python", "PyTorch", "BART", "MiniLM", "Gradio"],
    githubUrl: "https://github.com/mursyidproject/indonesian-multidoc-summarization-bart-minilm",
    images: [
      "/projects/skripsi-app.png",
      "/projects/skripsi-code.png",
      "/projects/rouge-comparison.png",
    ],
    metrics: [
      { label: "Dataset", value: "3.000 Berita" },
      { label: "ROUGE-1 / F1", value: "33,95% / 0,73" },
      { label: "Speedup", value: "51,6×" },
    ],
    icon: FileText,
  },
  {
    id: "portfolio-web",
    title: "Interactive Personal Portfolio Platform",
    category: "web",
    categoryLabel: "WEB ENGINEERING",
    badge: "Live Website",
    description:
      "Aplikasi web portofolio interaktif dengan animasi canvas preloader, bento grid layout responsif, dan efek interaksi kursor magnetik.",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/mursyidproject",
    demoUrl: "#home",
    icon: Code2,
  },
  {
    id: "sales-automation",
    title: "Retail Sales & Cash Reconciliation Script",
    category: "web",
    categoryLabel: "PYTHON AUTOMATION",
    badge: "Automation Tool",
    description:
      "Skrip otomatisasi pengolahan data transaksi toko harian untuk deteksi selisih kas, rekonsiliasi stok barang, dan ekspor laporan analitik keuangan otomatis.",
    tags: ["Python", "Pandas", "OpenPyXL", "Automation"],
    githubUrl: "https://github.com/mursyidproject",
    icon: Database,
  },
  {
    id: "gis-spatial",
    title: "Spatial Land Delineation & Mapping",
    category: "gis",
    categoryLabel: "GIS & SPATIAL ANALYTICS",
    badge: "Geospatial Data",
    description:
      "Pengolahan geodatabase spasial bidang tanah dan validasi topologi pemetaan wilayah menggunakan QGIS, SW Maps, serta visualisasi GeoJSON.",
    tags: ["QGIS", "SW Maps", "GeoJSON", "Spatial Analysis"],
    githubUrl: "https://github.com/mursyidproject",
    icon: MapPin,
  },
];

// Komponen 3D Circular Orbit Carousel (Ringan di GPU)
function ProjectOrbitCarousel({
  images,
  title,
  delayMs = 0,
}: {
  images: string[];
  title: string;
  delayMs?: number;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || isHovered) return;

    let intervalId: NodeJS.Timeout;
    const timeoutId = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
      intervalId = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % images.length);
      }, 4200);
    }, 3500 + delayMs);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [images.length, isHovered, delayMs]);

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const getRelativePosition = (index: number) => {
    const total = images.length;
    const diff = (index - activeIndex + total) % total;
    if (diff === 0) return "center";
    if (diff === 1) return "right";
    return "left";
  };

  const variants: Variants = {
    center: { x: "0%", scale: 1, zIndex: 30, opacity: 1 },
    right: { x: "20%", scale: 0.84, zIndex: 20, opacity: 0.5 },
    left: { x: "-20%", scale: 0.84, zIndex: 10, opacity: 0.5 },
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full h-52 sm:h-56 mb-5 flex items-center justify-center overflow-hidden rounded-xl bg-slate-950/80 border border-white/5 group/carousel"
    >
      <div className="relative w-[78%] h-[86%] flex items-center justify-center">
        {images.map((imgSrc, idx) => {
          const position = getRelativePosition(idx);
          return (
            <motion.div
              key={imgSrc}
              initial={false}
              animate={position}
              variants={variants}
              transition={{ duration: 0.5, ease: "easeOut" }}
              onClick={() => setActiveIndex(idx)}
              className="absolute inset-0 rounded-xl overflow-hidden border border-[#38bdf8]/40 bg-slate-900 shadow-lg cursor-pointer will-change-transform"
            >
              <Image
                src={imgSrc}
                alt={`${title} - Preview ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover object-top"
              />
            </motion.div>
          );
        })}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute left-2 z-40 p-1.5 rounded-full bg-slate-950/90 border border-white/15 text-white hover:bg-[#38bdf8] hover:text-[#0A0F1C] opacity-0 group-hover/carousel:opacity-100 transition-opacity"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute right-2 z-40 p-1.5 rounded-full bg-slate-950/90 border border-white/15 text-white hover:bg-[#38bdf8] hover:text-[#0A0F1C] opacity-0 group-hover/carousel:opacity-100 transition-opacity"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="absolute bottom-2 z-40 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/90 border border-white/10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? "w-5 bg-[#38bdf8]" : "w-1.5 bg-white/40 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// Varian Animasi Muncul Kartu Saat Filter Diklik (Ringan & Staggered)
const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 320,
      damping: 26,
    },
  },
};

export default function ProjectsSection() {
  const [filter, setFilter] = useState<"all" | "data" | "web" | "gis">("all");

  const filteredProjects = projectsData.filter(
    (p) => filter === "all" || p.category === filter
  );

  const filterTabs = [
    { id: "all", label: "Semua" },
    { id: "data", label: "Data & AI" },
    { id: "web", label: "Web Dev" },
    { id: "gis", label: "GIS Spasial" },
  ] as const;

  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto relative z-10">
      {/* Header Section */}
      <div className="flex flex-col items-center lg:items-start mb-10 relative">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-[#38bdf8]/30 text-xs font-mono text-[#38bdf8] mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>// FEATURED WORKS</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between w-full gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F8FAFC] tracking-tight">
              Proyek <span className="bg-gradient-to-r from-[#38bdf8] via-[#7dd3fc] to-[#0284c7] bg-clip-text text-transparent">Unggulan</span>
            </h2>
            <p className="text-sm text-[#94A3B8] max-w-xl mt-2 font-normal">
              Showcase portofolio analisis data, riset AI, rekayasa sistem web, dan otomatisasi skrip.
            </p>
          </div>

          {/* Filter Tab Buttons dengan Sliding Pill Ringan */}
          <div className="flex flex-wrap gap-1 p-1 bg-slate-900 rounded-xl border border-white/10 self-center lg:self-end">
            {filterTabs.map((tab) => {
              const isActive = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`relative px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors duration-200 ${
                    isActive ? "text-[#0A0F1C] font-bold" : "text-[#94A3B8] hover:text-[#F8FAFC]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeFilterPill"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className="absolute inset-0 rounded-lg bg-[#38bdf8]"
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Grid Kartu Proyek: key={filter} memicu animasi cascade halus tiap kali kategori diklik */}
      <motion.div
        key={filter}
        variants={gridContainerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10"
      >
        {filteredProjects.map((project, projectIdx) => {
          const IconComponent = project.icon;

          return (
            <motion.div
              key={project.id}
              variants={cardItemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 via-[#0F172A] to-[#0A0F1C] border border-white/10 hover:border-[#38bdf8]/40 transition-colors duration-200 flex flex-col justify-between group shadow-lg relative overflow-hidden will-change-transform"
            >
              {/* Background Watermark Icon */}
              {(!project.images || project.images.length === 0) && (
                <div className="absolute -top-8 -right-8 opacity-5 group-hover:opacity-15 transition-opacity duration-300 pointer-events-none">
                  <IconComponent className="w-36 h-36 text-[#38bdf8]" />
                </div>
              )}

              <div>
                {/* 3D Orbit Carousel */}
                {project.images && project.images.length > 0 && (
                  <ProjectOrbitCarousel
                    images={project.images}
                    title={project.title}
                    delayMs={projectIdx * 2000}
                  />
                )}

                {/* Kategori & Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono text-[#38bdf8] tracking-wider">
                    {project.categoryLabel}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/30 text-[10px] font-mono text-[#38bdf8] font-semibold">
                    {project.badge}
                  </span>
                </div>

                {/* Judul Proyek */}
                <h3 className="text-lg sm:text-xl font-bold text-[#F8FAFC] mb-2.5 leading-snug group-hover:text-[#38bdf8] transition-colors">
                  {project.title}
                </h3>

                {/* Deskripsi Singkat */}
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlight KPI Chips */}
                {project.metrics && (
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {project.metrics.map((m, i) => (
                      <div
                        key={i}
                        className="p-2 rounded-xl bg-slate-900/90 border border-white/10 text-center"
                      >
                        <div className="text-xs sm:text-sm font-black text-[#38bdf8] font-mono">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-[#94A3B8] truncate">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md bg-slate-900 border border-white/10 text-[11px] font-mono text-[#CBD5E1]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#CBD5E1] hover:text-[#38bdf8] transition-colors"
                >
                  <FolderGit2 className="w-4 h-4 text-[#38bdf8]" />
                  <span>Kode & Repo</span>
                </a>

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#38bdf8]/15 border border-[#38bdf8]/30 text-[#38bdf8] hover:bg-[#38bdf8] hover:text-[#0A0F1C] text-xs font-bold transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}