"use client";

import { motion } from "framer-motion";
import { Server, Database, Terminal, Cloud } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <Terminal className="text-sky-500" size={28} />,
      title: "Incident & App Support",
      desc: "Handling user-reported tickets, following SOPs, tracking change requests, and performing root-cause analysis.",
    },
    {
      icon: <Server className="text-indigo-500" size={28} />,
      title: "Linux & Systems",
      desc: "Comfortable in the Linux CLI, analyzing application and system logs, configuring firewalls, and managing SSL certificates.",
    },
    {
      icon: <Database className="text-emerald-500" size={28} />,
      title: "Databases & SQL",
      desc: "Querying MySQL and PostgreSQL to inspect records, verify transactional states, and troubleshoot data discrepancies.",
    },
    {
      icon: <Cloud className="text-amber-500" size={28} />,
      title: "Cloud & API Integrations",
      desc: "Hands-on with AWS, GCP, Docker container logs, REST API debugging, and automation tools.",
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
              Support engineer with a developer's troubleshooting mindset
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              I am an Application Support Engineer based in Chennai with an MCA from SRM Institute of Science and Technology. My day-to-day focus is on keeping systems dependable: responding to incidents, digging into Linux logs, writing SQL queries to trace unexpected data states, and adhering to standard operating procedures (SOPs) to resolve problems cleanly.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Before my current role at Simos Peripherals, I worked as a backend and support developer for SpaceShield, where I looked after Linux servers, REST APIs, and automated tools for an active 3,000+ member community. Having both developer training (Java, Python, Node.js) and real operational support experience helps me understand not just what error popped up, but where in the code or database layer things went wrong.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              I prefer fixing root causes over applying temporary patches. Looking ahead, I am working toward deeper specialization in supporting high-reliability platforms, including trading environments and investment management systems.
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
