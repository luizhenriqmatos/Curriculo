"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  label?: string;
  id?: string;
  delay?: number;
}

const revealVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay,
      ease: [0.19, 1, 0.22, 1],
    },
  }),
};

export default function Section({ children, className = "", label, id, delay = 0 }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      aria-label={label}
      className={`py-20 px-6 ${className}`}
      variants={revealVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={delay}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </motion.section>
  );
}
