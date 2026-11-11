"use client";

import { motion } from "framer-motion";
import { Terminal, Code2, Layers, Database, Cloud, Wrench } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Support & Operations",
      icon: <Wrench className="text-amber-500" size={24} />,
      skills: [
        { name: "Incident & Problem Management", level: 92 },
        { name: "Application Troubleshooting", level: 90 },
        { name: "SOP & Change Management", level: 88 },
        { name: "Log Analysis & Root Cause Triage", level: 90 },
      ],
    },
    {
      title: "Cloud & Linux Systems",
      icon: <Cloud className="text-sky-500" size={24} />,
      skills: [
        { name: "Linux / Unix Administration & CLI", level: 90 },
        { name: "AWS & GCP Cloud Platforms", level: 86 },
        { name: "Docker & Basic Kubernetes", level: 84 },
        { name: "SSL, Firewalls & Server Security", level: 86 },
      ],
    },
    {
      title: "Databases & SQL",
      icon: <Database className="text-emerald-500" size={24} />,
      skills: [
        { name: "SQL Querying & Data Verification", level: 92 },
        { name: "MySQL", level: 90 },
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 82 },
      ],
    },
    {
      title: "APIs & Backend",
      icon: <Layers className="text-purple-500" size={24} />,
      skills: [
        { name: "REST APIs & JSON Data Handling", level: 92 },
        { name: "Node.js & Express.js", level: 88 },
        { name: "Java Servlets & JDBC", level: 85 },
        { name: "API Integrations & Automation", level: 88 },
      ],
    },
    {
      title: "Programming Languages",
      icon: <Code2 className="text-blue-500" size={24} />,
      skills: [
        { name: "Python", level: 90 },
        { name: "Core Java & J2EE", level: 88 },
        { name: "JavaScript", level: 88 },
        { name: "C++ & PHP", level: 82 },
      ],
    },
    {
      title: "Data & Developer Tools",
      icon: <Terminal className="text-pink-500" size={24} />,
      skills: [
        { name: "Git & Version Control", level: 90 },
        { name: "Pandas & Data Analytics", level: 86 },
        { name: "HTML5, CSS3 & React.js", level: 86 },
        { name: "AI/LLM APIs & Vector DBs (ChromaDB)", level: 84 },
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
