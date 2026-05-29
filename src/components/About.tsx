"use client";

import { motion } from "framer-motion";
import { Server, Database, Code, Brain } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <Brain className="text-sky-500" size={28} />,
      title: "AI Integration",
      desc: "Developing solutions with LLM APIs, RAG, and AI automated pipelines.",
    },
    {
      icon: <Code className="text-indigo-500" size={28} />,
      title: "Full Stack",
      desc: "Robust backend logic coupled with modern, interactive frontend interfaces.",
    },
    {
      icon: <Server className="text-emerald-500" size={28} />,
      title: "Cloud & Devops",
      desc: "Familiar with Docker, AWS/GCP, container hosting and virtualization.",
    },
    {
      icon: <Database className="text-amber-500" size={28} />,
      title: "Data & Systems",
      desc: "Working with Relational/Vector databases and building multiplayer backends.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
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
            About Me
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-sky-500 mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-slate-600 dark:text-slate-300"
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
              AI-Augmented Developer focused on Impactful Software
            </h3>
            <p className="text-lg leading-relaxed">
              I am an AI-augmented Full Stack Developer with hands-on experience building web applications, cloud deployments, and AI-powered automation using LLM APIs. I specialize in bridging the gap between intelligent AI models and reliable application software.
            </p>
            <p className="text-lg leading-relaxed">
              Notable achievements include building custom multiplayer server infrastructure supporting a community of over 3,000+ members, featuring automation, chat moderation, and analytics. Whether it's crafting scalable Java backends, fine-tuning RAG systems with ChromaDB, or scaling deployments on Docker, I build with efficiency and performance in mind.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-md hover:border-sky-500/50 dark:hover:border-sky-500/50 transition-all duration-300"
              >
                <div className="mb-4">{card.icon}</div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-2">{card.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
