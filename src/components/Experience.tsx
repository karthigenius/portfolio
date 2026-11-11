"use client";

import { motion as motionClient } from "framer-motion";
import { Briefcase, GraduationCap, BookOpen } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Service Support Engineer",
      company: "Simos Peripherals Private Limited",
      period: "Sep 2026 – Present",
      type: "work",
      bullets: [
        "Manage incoming customer-reported service requests and incident tickets, diagnosing root causes and driving resolution or escalating to the right engineering team.",
        "Troubleshoot application errors and system faults directly on Linux environments using command-line tools and application log files.",
        "Execute targeted SQL queries on backend databases to verify transaction states, investigate data mismatch issues, and validate data fixes.",
        "Adhere to standard operating procedures (SOPs) and change management workflows, documenting resolution steps and flagging recurring incidents for problem analysis."
      ],
    },
    {
      title: "Backend & Support Developer",
      company: "SpaceShield – Freelance, Remote",
      period: "Apr 2025 – Apr 2026",
      type: "work",
      bullets: [
        "Maintained Linux production servers hosting services for an active 3,000+ member community, setting up SSL certificates, UFW firewalls, and server monitoring.",
        "Built and supported REST APIs with Node.js and Express for automated user verification, role management, and database integrations.",
        "Packaged applications into Docker containers and deployed workloads across AWS and GCP; monitored pod health and inspected crash logs to resolve runtime issues.",
        "Wrote SQL queries on MySQL and PostgreSQL for user data lookups, ad-hoc reports, and usage analytics.",
        "Diagnosed and resolved live production issues by inspecting log files, locating the root cause, and deploying fixes.",
        "Created an automated FAQ bot and an LLM-assisted moderation tool to cut down repetitive manual support requests."
      ],
    },
    {
      title: "Data Analytics & ML Trainee",
      company: "MedTourEasy – Remote",
      period: "Feb 2025",
      type: "work",
      bullets: [
        "Carried out exploratory data analysis and data preprocessing on healthcare datasets using Python, Pandas, and NumPy.",
        "Trained predictive machine learning models using Scikit-learn to identify trends and evaluate model accuracy.",
        "Prepared visual summary charts with Matplotlib to communicate data patterns and findings clearly."
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company: "Techplement – Remote",
      period: "Sep 2024",
      type: "work",
      bullets: [
        "Developed responsive and interactive web pages using HTML5, CSS3, and JavaScript.",
        "Integrated frontend interfaces with RESTful APIs, handling data fetching, JSON parsing, and error handling."
      ],
    },
  ];

  const training = [
    {
      title: "Java Full Stack Development",
      institution: "QSpiders, Chennai",
      period: "Jun 2025 – Jun 2026",
      desc: "Hands-on training covering Core Java, JDBC, Java Servlets, J2EE concepts, and relational SQL database modeling, with a focus on modular backend design."
    }
  ];

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "SRM Institute of Science and Technology, Chennai",
      period: "2021 – 2023",
      score: "CGPA: 8.45",
      desc: "Advanced coursework in database management, software engineering, cloud concepts, and distributed systems."
    },
    {
      degree: "Bachelor of Science in Computer Science (B.Sc CS)",
      institution: "Hindustan College of Arts and Science, Coimbatore",
      period: "2018 – 2021",
      score: "CGPA: 7.57",
      desc: "Foundational computer science study including data structures, algorithms, operating systems, and object-oriented programming."
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
            Experience &amp; Education
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

            <div className="border-l-2 border-slate-200 dark:border-slate-800 ml-4 space-y-10">
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
                  
                  <div className="backdrop-blur-md bg-white/40 dark:bg-slate-900/40 p-6 rounded-2xl border border-white/20 dark:border-slate-800/40 shadow-sm hover:shadow-md transition-all duration-300">
                    <span className="text-xs font-semibold text-sky-650 dark:text-sky-400 bg-sky-100/50 dark:bg-sky-950/40 px-2.5 py-1 rounded-full">{exp.period}</span>
                    <h4 className="text-xl font-bold text-slate-850 dark:text-white mt-3">{exp.title}</h4>
                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-4">{exp.company}</p>
                    <ul className="list-disc list-outside ml-4 space-y-2 text-slate-650 dark:text-slate-300 text-sm leading-relaxed">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </motionClient.div>
              ))}
            </div>
          </div>

          {/* Right Column: Training & Education */}
          <div className="space-y-10">
            {/* Professional Training */}
            <div id="training" className="space-y-6 scroll-mt-24">
              <div className="flex items-center gap-3">
                <BookOpen className="text-indigo-500" size={24} />
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">Training</h3>
              </div>

              <div className="space-y-4">
                {training.map((train, idx) => (
                  <motionClient.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="backdrop-blur-md bg-white/40 dark:bg-slate-900/40 p-5 rounded-2xl border border-white/20 dark:border-slate-800/40 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <span className="text-xs font-semibold text-indigo-650 dark:text-indigo-400 bg-indigo-100/50 dark:bg-indigo-950/40 px-2.5 py-1 rounded-full">{train.period}</span>
                    <h4 className="text-base font-bold text-slate-850 dark:text-white mt-3">{train.title}</h4>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">{train.institution}</p>
                    <p className="text-slate-650 dark:text-slate-300 text-xs leading-relaxed">{train.desc}</p>
                  </motionClient.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div id="education" className="space-y-6 scroll-mt-24">
              <div className="flex items-center gap-3">
                <GraduationCap className="text-sky-500" size={24} />
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">Education</h3>
              </div>

              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <motionClient.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="backdrop-blur-md bg-white/40 dark:bg-slate-900/40 p-5 rounded-2xl border border-white/20 dark:border-slate-800/40 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-semibold text-sky-650 dark:text-sky-400 bg-sky-100/50 dark:bg-sky-950/40 px-2.5 py-0.5 rounded-full">{edu.period}</span>
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{edu.score}</span>
                    </div>
                    <h4 className="text-base font-bold text-slate-850 dark:text-white mt-2">{edu.degree}</h4>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">{edu.institution}</p>
                    <p className="text-slate-650 dark:text-slate-300 text-xs leading-relaxed">{edu.desc}</p>
                  </motionClient.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
