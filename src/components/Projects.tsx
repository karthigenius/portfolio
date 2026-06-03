"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Folder, ChevronLeft, ChevronRight } from "lucide-react";
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
    {
      title: "SpaceShield Website",
      description: "Designed and built the full company website for SpaceShield from scratch — covering services like web development, AI integration, cybersecurity, and system modernisation. Delivered real client projects including an optical retailer and a creative agency.",
      image: "/assets/spaceshield.jpg",
      tags: ["HTML", "CSS", "JavaScript", "Node.js"],
      link: "https://spaceshield.in",
    },
    {
      title: "Pandakutty — AI Discord Bot",
      description: "Built an AI-powered Discord bot with multi-model LLM fallback via OpenRouter, persistent memory, daily news delivery, and mini-games. Includes a live animated web dashboard for status monitoring.",
      image: "/assets/pandakutty.jpg",
      tags: ["Node.js", "Discord.js", "OpenRouter API", "HTML", "CSS"],
      link: "https://pandakutty.spaceshield.in",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, projects.length - visibleCards);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isHovered || maxIndex === 0) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, visibleCards, isHovered, maxIndex]);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-8 z-10">
            <button
              onClick={prevSlide}
              className={`p-3 rounded-full border border-slate-200/50 dark:border-slate-800/40 backdrop-blur-md bg-white/40 dark:bg-slate-900/40 text-slate-800 dark:text-white shadow-lg hover:bg-white/60 dark:hover:bg-slate-900/60 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300`}
              aria-label="Previous Project"
            >
              <ChevronLeft size={20} />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8 z-10">
            <button
              onClick={nextSlide}
              className={`p-3 rounded-full border border-slate-200/50 dark:border-slate-800/40 backdrop-blur-md bg-white/40 dark:bg-slate-900/40 text-slate-800 dark:text-white shadow-lg hover:bg-white/60 dark:hover:bg-slate-900/60 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300`}
              aria-label="Next Project"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Project Slider Track */}
          <div className="overflow-hidden -mx-4 px-4 py-4">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * (100 / visibleCards)}%` }}
              transition={{ type: "spring", stiffness: 220, damping: 26 }}
            >
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="w-full md:w-1/2 lg:w-1/3 px-4 shrink-0"
                >
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="flex flex-col h-full rounded-2xl overflow-hidden backdrop-blur-md bg-white/30 dark:bg-slate-900/35 border border-white/20 dark:border-slate-800/40 shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    {/* Image section */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-200/50 dark:bg-slate-800/50">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-w-768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        priority={idx < 3}
                      />
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex flex-col flex-grow">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-semibold text-sky-600 dark:text-sky-400 bg-sky-100/40 dark:bg-sky-950/30 px-2 py-0.5 rounded backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 line-clamp-1">{project.title}</h3>

                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 flex-grow leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* Footer action */}
                      <div className="pt-4 border-t border-slate-200/30 dark:border-slate-800/30 mt-auto flex justify-between items-center">
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
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: projects.length - visibleCards + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === i ? "w-8 bg-sky-500" : "w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-650"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
