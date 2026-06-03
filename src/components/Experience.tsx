"use client";

import { motion as motionClient } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "AI-Integrated Full Stack Developer",
      company: "SpaceShield – Freelance, Remote",
      period: "Apr 2025 – Apr 2026",
      type: "work",
      bullets: [
        "Built an AI-assisted moderation workflow using LLM APIs to detect rule violations, reducing manual moderation overhead in a 3,000+ member Discord community.",
        "Developed REST APIs and backend integrations for automated, real-time responses.",
        "Implemented a RAG FAQ bot using Node.js and ChromaDB to streamline information discovery.",
        "Containerized applications using Docker and hosted services across AWS and GCP environments.",
        "Utilized MySQL and PostgreSQL for robust data storage, analytics reporting, and audits."
      ],
    },
    {
      title: "Data Analytics & ML Trainee",
      company: "MedTourEasy – Remote",
      period: "Feb 2025",
      type: "work",
      bullets: [
        "Constructed predictive ML models utilizing Python, Pandas, Scikit-learn, and Matplotlib.",
        "Cleaned datasets, engineered features, and analyzed statistical correlation matrices to optimize model scoring.",
        "Authored reports to effectively communicate visual and statistical findings."
      ],
    },
    {
      title: "Full Stack Developer Internship",
      company: "Techplement – Remote",
      period: "Sep 2024",
      type: "work",
      bullets: [
        "Built responsive client-side pages and API integration flows using HTML, CSS, and vanilla JS.",
        "Explored generative AI integrations including automated form completions and vector searches."
      ],
    },
  ];

  const training = [
    {
      title: "Java Full Stack Development",
      institution: "QSpiders, Chennai",
      period: "Jun 2025 – Present",
      bullets: [
        "Advanced course track specializing in Core Java, JDBC, Servlets, relational database modeling, and building high-concurrency microservices."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motionClient.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300"
          >
            Experience &amp; Training
          </motionClient.h2>
          <motionClient.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-sky-500 mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Work Experience Timeline */}
          <div className="md:col-span-2 space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-sky-500" size={26} />
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Professional Experience</h3>
            </div>

            <div className="border-l-2 border-slate-200 dark:border-slate-800 ml-4 space-y-12">
              {experiences.map((exp, idx) => (
                <motionClient.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-8"
                >
                  {/* Timeline bullet dot */}
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-sky-500" />
                  
                  <div className="backdrop-blur-md bg-white/30 dark:bg-slate-900/35 p-6 rounded-2xl border border-white/20 dark:border-slate-800/40 shadow-lg hover:shadow-xl transition-all duration-300">
                    <span className="text-xs font-semibold text-sky-650 dark:text-sky-400 bg-sky-100/40 dark:bg-sky-950/30 px-2.5 py-1 rounded-full">{exp.period}</span>
                    <h4 className="text-xl font-bold text-slate-850 dark:text-white mt-3">{exp.title}</h4>
                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-4">{exp.company}</p>
                    <ul className="list-disc list-outside ml-4 space-y-2 text-slate-650 dark:text-slate-300 text-sm">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </motionClient.div>
              ))}
            </div>
          </div>

          {/* Professional Training */}
          <div id="training" className="space-y-8 scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-indigo-500" size={26} />
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Training</h3>
            </div>

            <div className="space-y-6">
              {training.map((train, idx) => (
                <motionClient.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="backdrop-blur-md bg-white/30 dark:bg-slate-900/35 p-6 rounded-2xl border border-white/20 dark:border-slate-800/40 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="text-xs font-semibold text-indigo-650 dark:text-indigo-400 bg-indigo-100/40 dark:bg-indigo-950/30 px-2.5 py-1 rounded-full">{train.period}</span>
                  <h4 className="text-lg font-bold text-slate-850 dark:text-white mt-3">{train.title}</h4>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-4">{train.institution}</p>
                  <p className="text-slate-650 dark:text-slate-300 text-sm leading-relaxed">{train.bullets[0]}</p>
                </motionClient.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
