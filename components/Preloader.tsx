"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isExploded, setIsExploded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const particleCount = 140;
    const particles: Particle[] = [];
    const centerX = width / 2;
    const centerY = height / 2;

    class Particle {
      x: number;
      y: number;
      radius: number;
      color: string;
      angle: number;
      distance: number;
      speed: number;
      vx: number;
      vy: number;

      constructor() {
        this.angle = Math.random() * Math.PI * 2;
        this.distance = Math.random() * 250 + 120;
        this.x = centerX + Math.cos(this.angle) * this.distance;
        this.y = centerY + Math.sin(this.angle) * this.distance;
        this.radius = Math.random() * 2.5 + 1;
        this.color = Math.random() > 0.3 ? "#38bdf8" : "#0284c7";
        this.speed = Math.random() * 0.05 + 0.035;
        this.vx = 0;
        this.vy = 0;
      }

      update(stage: "gather" | "explode") {
        if (stage === "gather") {
          this.angle += this.speed;
          this.distance -= 2.2;
          if (this.distance < 4) this.distance = 4;

          this.x = centerX + Math.cos(this.angle) * this.distance;
          this.y = centerY + Math.sin(this.angle) * this.distance;
        } else {
          if (this.vx === 0 && this.vy === 0) {
            const burstAngle = Math.random() * Math.PI * 2;
            const burstSpeed = Math.random() * 14 + 6;
            this.vx = Math.cos(burstAngle) * burstSpeed;
            this.vy = Math.sin(burstAngle) * burstSpeed;
          }
          this.x += this.vx;
          this.y += this.vy;
          this.vx *= 0.93;
          this.vy *= 0.93;
          this.radius *= 0.95;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, Math.max(0, this.radius), 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 14;
        ctx.shadowColor = "#38bdf8";
        ctx.fill();
        ctx.closePath();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let stage: "gather" | "explode" = "gather";
    const startTime = Date.now();

    const animate = () => {
      ctx.fillStyle = "rgba(10, 15, 28, 0.22)";
      ctx.fillRect(0, 0, width, height);

      const elapsed = Date.now() - startTime;

      if (elapsed > 1600 && stage === "gather") {
        stage = "explode";
        setIsExploded(true);
        // Mulai transisi munculnya website lebih awal agar sinkron sempurna
        setTimeout(onComplete, 300);
      }

      particles.forEach((p) => {
        p.update(stage);
        p.draw();
      });

      if (stage === "gather") {
        const glowRadius = Math.min(65, (elapsed / 1600) * 55);
        ctx.beginPath();
        ctx.arc(centerX, centerY, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = "#38bdf8";
        ctx.shadowBlur = 45;
        ctx.shadowColor = "#38bdf8";
        ctx.fill();
        ctx.closePath();
      }

      if (elapsed < 2400) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={isExploded ? { opacity: 0, scale: 1.08 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0A0F1C] overflow-hidden pointer-events-none"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isExploded ? { opacity: 0, scale: 1.6 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-mono font-black text-[#F8FAFC] tracking-widest uppercase">
          Mursyid<span className="text-[#38bdf8]">.dev</span>
        </h2>
        <p className="text-xs font-mono text-[#38bdf8] tracking-widest mt-1 animate-pulse">
          INITIALIZING CORE...
        </p>
      </motion.div>
    </motion.div>
  );
}