"use client";

import { motion } from "framer-motion";
import { Cpu, Code2, Layers, Database, Cloud, Palette } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "AI & LLMs",
      icon: <Cpu className="text-amber-500" size={24} />,
      skills: [
        { name: "LLM APIs (OpenAI / Claude / Gemini)", level: 90 },
        { name: "RAG Pipelines", level: 88 },
        { name: "LangChain & AI Agents", level: 85 },
        { name: "Vector DBs (Pinecone / ChromaDB)", level: 83 },
      ],
    },
    {
      title: "Languages",
      icon: <Code2 className="text-blue-500" size={24} />,
      skills: [
        { name: "Java", level: 92 },
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "C/C++", level: 85 },
      ],
    },
    {
      title: "Backend & Web",
      icon: <Layers className="text-purple-500" size={24} />,
      skills: [
        { name: "Node.js / Express.js", level: 90 },
        { name: "REST APIs", level: 92 },
        { name: "Servlets / JDBC", level: 85 },
        { name: "PHP", level: 85 },
      ],
    },
    {
      title: "Databases & Data",
      icon: <Database className="text-emerald-500" size={24} />,
      skills: [
        { name: "SQL & MySQL", level: 93 },
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 82 },
        { name: "Pandas", level: 88 },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="text-sky-500" size={24} />,
      skills: [
        { name: "AWS", level: 87 },
        { name: "GCP", level: 85 },
        { name: "Docker", level: 88 },
        { name: "Linux", level: 87 },
      ],
    },
    {
      title: "Frontend & Tools",
      icon: <Palette className="text-pink-500" size={24} />,
      skills: [
        { name: "React.js", level: 85 },
        { name: "HTML5 / CSS3", level: 92 },
        { name: "Git", level: 90 },
        { name: "Prompt Engineering", level: 88 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
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
            Skills &amp; Technologies
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-sky-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 shadow-sm"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-805 dark:text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-slate-650 dark:text-slate-300">{skill.name}</span>
                      <span className="font-bold text-sky-600 dark:text-sky-400">{skill.level}%</span>
                    </div>
                    {/* Bar container */}
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
