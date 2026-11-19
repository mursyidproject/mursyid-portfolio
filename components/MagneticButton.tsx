"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, useRef } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  download?: boolean;
  target?: string;
}

export default function MagneticButton({ children, className = "", href, download, target }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Efek pegas (spring) fisik yang super halus
  const mouseX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const centerx = left + width / 2;
    const centery = top + height / 2;
    
    // Tarikan magnetik proporsional
    x.set((clientX - centerx) * 0.35);
    y.set((clientY - centery) * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Component = href ? motion.a : motion.div;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: mouseX, y: mouseY }}
      className="inline-block"
    >
      <Component
        href={href}
        download={download}
        target={target}
        className={`inline-flex items-center justify-center cursor-pointer transition-colors ${className}`}
      >
        {children}
      </Component>
    </motion.div>
  );
}