"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/app/api/projects/route";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.19, 1, 0.22, 1] }}
      whileHover={{ y: -6 }}
      className="group relative bg-surface border border-border rounded-2xl overflow-hidden cursor-pointer"
      aria-label={`Projeto: ${project.title}`}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-background">
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          className="h-full"
        >
          <Image
            src={project.imageUrl}
            alt={`Capa do projeto ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500"
            loading="lazy"
          />
        </motion.div>

        {/* Year badge */}
        <span
          className="absolute top-3 right-3 font-mono text-xs px-2 py-1 rounded border z-10"
          style={{
            color: project.accentColor,
            borderColor: `${project.accentColor}40`,
            background: `${project.accentColor}15`,
          }}
        >
          {project.year}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-display text-xl font-light text-text-primary group-hover:text-mint transition-colors duration-300">
            {project.title}
          </h3>
          <span className="font-mono text-xs text-text-muted shrink-0 mt-1">{project.id}</span>
        </div>

        <p className="text-text-secondary text-sm leading-relaxed mb-4">{project.tagline}</p>

        {/* Tags */}
        <ul className="flex flex-wrap gap-2 mb-5 list-none" role="list" aria-label="Tecnologias">
          {project.tags.slice(0, 4).map((tag) => (
            <li
              key={tag}
              className="font-mono text-xs px-2 py-0.5 rounded border border-border text-text-muted"
            >
              {tag}
            </li>
          ))}
          {project.tags.length > 4 && (
            <li className="font-mono text-xs text-text-muted px-1">
              +{project.tags.length - 4}
            </li>
          )}
        </ul>

        {/* Links */}
        <div className="flex items-center gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs flex items-center gap-1.5 text-text-secondary hover:text-mint transition-colors duration-200"
              aria-label={`Visitar projeto ${project.title} ao vivo`}
            >
              <span aria-hidden="true">↗</span> Demo
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs flex items-center gap-1.5 text-text-secondary hover:text-mint transition-colors duration-200"
              aria-label={`Ver repositório do projeto ${project.title}`}
            >
              <span aria-hidden="true">⌥</span> Repo
            </a>
          )}
          <span
            className="ml-auto font-mono text-xs px-2 py-0.5 rounded-full border"
            style={{ color: project.accentColor, borderColor: `${project.accentColor}40` }}
          >
            {project.category}
          </span>
        </div>
      </div>

      {/* Hover accent line */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
        style={{ background: project.accentColor }}
        aria-hidden="true"
      />
    </motion.article>
  );
}
