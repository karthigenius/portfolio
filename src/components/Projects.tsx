"use client";

import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Intelligent Assessment Management System",
      description: "A complete ecosystem for secure, scalable, and intelligent assessment delivery.",
      image: "/assets/iams.jpg",
      tags: ["Express.js", "React.js", "PostgreSQL"],
      link: "https://iams.spaceshield.in",
    },
    {
      title: "GTA:SA Multiplayer Server",
      description: "Custom multiplayer server with advanced features and 3,000+ active users.",
      image: "/assets/acrp.png",
      tags: ["C++", "Pawn", "MySQL"],
      link: "https://discord.gg/u7a5kQRXzX",
    },
    {
      title: "Dev Hub",
      description: "A comprehensive collection of free, web-based utilities designed to streamline the workflow of developers, designers, and analysts.",
      image: "/assets/dh.jpg",
      tags: ["React.js", "JavaScript", "Vite"],
      link: "https://devhub.spaceshield.in",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-sky-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="flex flex-col rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-800/50 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image section */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-200 dark:bg-slate-700">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority={idx === 0}
                />
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold text-sky-650 dark:text-sky-400 bg-sky-100/50 dark:bg-sky-950/40 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 line-clamp-1">{project.title}</h3>
                
                <p className="text-sm text-slate-650 dark:text-slate-400 mb-6 flex-grow leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Footer action */}
                <div className="pt-4 border-t border-slate-200/50 dark:border-slate-700/50 mt-auto flex justify-between items-center">
                  <span className="flex items-center gap-1.5 text-xs font-medium text-slate-400 dark:text-slate-500">
                    <Folder size={14} /> Full App
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-350 transition-colors"
                  >
                    Launch Demo <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
