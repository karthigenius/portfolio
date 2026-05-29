"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

interface Bubble {
  id: number;
  width: number;
  height: number;
  left: number;
  top: number;
  duration: number;
  xDrift: number;
  isPopping?: boolean;
}

export default function Hero() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Generate 6 beautiful soap bubbles distributed across the Hero container
    const generatedBubbles = [...Array(6)].map((_, idx) => {
      const size = Math.random() * 65 + 35; // 35px to 100px (ensuring a perfect circle)
      return {
        id: idx,
        width: size,
        height: size,
        left: Math.random() * 90,
        top: Math.random() * 80 + 10,
        duration: Math.random() * 8 + 8,
        xDrift: Math.random() * 30 - 15,
        isPopping: false,
      };
    });
    setBubbles(generatedBubbles);
  }, []);

  const popBubble = (id: number) => {
    setBubbles((prev) =>
      prev.map((b) => (b.id === id ? { ...b, isPopping: true } : b))
    );

    // Play a gentle pop animation, then replace it with a new one after 400ms
    setTimeout(() => {
      setBubbles((prev) =>
        prev.map((b) => {
          if (b.id === id) {
            const size = Math.random() * 65 + 35;
            return {
              id: Math.random(), // new unique ID
              width: size,
              height: size,
              left: Math.random() * 90,
              top: Math.random() * 80 + 10,
              duration: Math.random() * 8 + 8,
              xDrift: Math.random() * 30 - 15,
              isPopping: false,
            };
          }
          return b;
        })
      );
    }, 400);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    setMousePosition({
      x: clientX - left,
      y: clientY - top,
    });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-50 dark:bg-slate-950 pt-16 transition-colors duration-300"
    >
      {/* Background Gradients, Grid and Mouse Spotlight - Scoped strictly to Hero */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-sky-500/10 dark:bg-sky-500/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 blur-3xl" style={{ animationDelay: "2s" }} />
        
        {/* Local Mouse Spotlight */}
        <div
          className="absolute inset-0 opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(450px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(14, 165, 233, 0.15), transparent 80%)`,
          }}
        />

        {/* Fine grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 dark:bg-sky-950/50 dark:text-sky-400 border border-sky-200/50 dark:border-sky-800/50 mb-6">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping" />
            Open for Opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight"
        >
          <span className="block text-slate-900 dark:text-white">Karthikeyan</span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 dark:from-sky-400 dark:via-blue-400 dark:to-indigo-500">
            Surendran
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 max-w-2xl mx-auto text-lg md:text-2xl text-slate-650 dark:text-slate-400 font-medium"
        >
          AI-Augmented Full Stack &amp; Cloud Developer
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center justify-center px-6 py-3 rounded-full text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 font-semibold shadow-lg shadow-sky-500/20 dark:shadow-sky-950/20 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            View My Projects
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-slate-700 dark:text-slate-300 bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold shadow-sm transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex justify-center space-x-6"
        >
          <a
            href="https://github.com/karthigenius"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-650 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-500 dark:hover:border-sky-500 transition-all duration-300 transform hover:scale-110 flex items-center justify-center w-11 h-11"
            aria-label="GitHub Profile"
          >
            <i className="fab fa-github text-xl"></i>
          </a>
          <a
            href="https://linkedin.com/in/karthikeyan-surendran"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-650 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-500 dark:hover:border-sky-500 transition-all duration-300 transform hover:scale-110 flex items-center justify-center w-11 h-11"
            aria-label="LinkedIn Profile"
          >
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a
            href="mailto:karthikeyanofficial24@gmail.com"
            className="p-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-650 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-500 dark:hover:border-sky-500 transition-all duration-300 transform hover:scale-110 flex items-center justify-center w-11 h-11"
            aria-label="Send Email"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </div>

      {/* Floating Animated Soap Bubbles - Scoped strictly to Hero */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            onClick={() => popBubble(bubble.id)}
            className="absolute rounded-full pointer-events-auto cursor-pointer"
            style={{
              width: bubble.width,
              height: bubble.height,
              left: `${bubble.left}%`,
              top: `${bubble.top}%`,
              // Realistic soap bubble gradient styling: transparent center, light refraction edges
              background: "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.1) 20%, rgba(14, 165, 233, 0.05) 45%, rgba(14, 165, 233, 0.22) 70%, rgba(99, 102, 241, 0.25) 85%, rgba(236, 72, 153, 0.15) 100%)",
              border: "1.5px solid rgba(255, 255, 255, 0.4)",
              boxShadow: "inset -4px -4px 10px rgba(99, 102, 241, 0.25), inset 4px 4px 10px rgba(255, 255, 255, 0.45), 0 4px 12px rgba(14, 165, 233, 0.1)",
              backdropFilter: "blur-[1.5px]",
            }}
            whileHover={bubble.isPopping ? {} : {
              scale: 1.15,
              filter: "brightness(1.1)",
              transition: { duration: 0.2 }
            }}
            animate={bubble.isPopping ? {
              scale: 1.6,
              opacity: 0,
              filter: "blur(4px)"
            } : {
              y: [0, -45, 0],
              x: [0, bubble.xDrift, 0],
            }}
            transition={bubble.isPopping ? {
              duration: 0.3,
              ease: "easeOut"
            } : {
              duration: bubble.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
}
