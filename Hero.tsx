"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// WebGL / canvas placeholder — shows a subtle animated gradient background
function CanvasPlaceholder() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function draw() {
      if (!canvas || !ctx) return;
      t += 0.004;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Soft radial blobs
      const blobs = [
        { x: canvas.width * (0.3 + 0.15 * Math.sin(t)), y: canvas.height * (0.4 + 0.1 * Math.cos(t * 0.7)), r: canvas.width * 0.35, color: "rgba(110,255,200,0.06)" },
        { x: canvas.width * (0.7 + 0.1 * Math.cos(t * 0.8)), y: canvas.height * (0.6 + 0.15 * Math.sin(t * 1.1)), r: canvas.width * 0.3, color: "rgba(167,139,250,0.05)" },
        { x: canvas.width * (0.5 + 0.2 * Math.sin(t * 1.3)), y: canvas.height * (0.2 + 0.1 * Math.cos(t)), r: canvas.width * 0.25, color: "rgba(56,189,248,0.04)" },
      ];

      blobs.forEach(({ x, y, r, color }) => {
        const grd = ctx.createRadialGradient(x, y, 0, x, y, r);
        grd.addColorStop(0, color);
        grd.addColorStop(1, "transparent");
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      // Subtle grid lines
      ctx.strokeStyle = "rgba(110,255,200,0.03)";
      ctx.lineWidth = 1;
      const step = 60;
      for (let x = 0; x < canvas.width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      animId = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Apresentação"
      className="relative min-h-svh flex flex-col justify-center pt-24 pb-16 px-6 overflow-hidden"
    >
      {/* Animated canvas background */}
      <CanvasPlaceholder />

      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, #0a0a0a 100%)",
        }}
        aria-hidden="true"
      />

      {/* Degradê hero → corpo */}
      <div
        className="absolute inset-x-0 bottom-0 h-28 pointer-events-none bg-gradient-to-t from-background to-transparent"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 border border-mint/20 rounded-full mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-mint animate-pulse" aria-hidden="true" />
          <span className="font-mono text-xs text-mint tracking-widest">Disponível para projetos</span>
        </motion.div>

        {/* Main heading */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-4"
        >
          <motion.h1
            variants={item}
            className="text-display-xl font-display font-light leading-none tracking-tight text-text-primary"
          >
            Luiz Matos — AI Software Engineer
          </motion.h1>

          <motion.p variants={item} className="text-display-md font-display font-light text-text-secondary">
            AI Engineer · RAG · LangChain · Claude · Java · C# · C/C++ · LLMOps
          </motion.p>

          <motion.p
            variants={item}
            className="max-w-xl text-text-secondary text-lg leading-relaxed mt-6"
          >
            Crio experiências web que equilibram{" "}
            <em className="not-italic text-text-primary">estética intencionada</em>,
            performance medida e interações que o usuário não esquece.
          </motion.p>

          {/* CTA row */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-4 pt-8"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 bg-mint text-background font-mono font-semibold text-sm px-6 py-3 rounded hover:opacity-90 transition-opacity"
            >
              Ver projetos
              <span
                className="group-hover:translate-x-1 transition-transform duration-300"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 border border-border text-text-primary font-mono text-sm px-6 py-3 rounded hover:border-mint/40 hover:text-mint transition-all duration-300"
            >
              Sobre mim
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 left-0 flex items-center gap-3"
          aria-hidden="true"
        >
          <div className="w-8 h-px bg-border" />
          <span className="font-mono text-xs text-text-muted tracking-widest rotate-0">SCROLL</span>
        </motion.div>
      </div>
    </section>
  );
}
