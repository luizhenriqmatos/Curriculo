"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-svh flex items-center justify-center px-6">
      <div className="text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-mono text-mint text-sm mb-4"
        >
          404
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-display-md font-display font-light text-text-primary mb-4"
        >
          Página não encontrada
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-text-secondary mb-8"
        >
          Esta página não existe ou foi movida.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-mint text-background font-mono font-semibold text-sm px-6 py-3 rounded hover:opacity-90 transition-opacity"
          >
            ← Voltar ao início
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
