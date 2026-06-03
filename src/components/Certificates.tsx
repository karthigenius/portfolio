"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, GraduationCap, ChevronRight } from "lucide-react";

export default function Certificates() {
  const certifications = [
    {
      title: "Google Data Analytics",
      issuer: "Coursera / Google",
      desc: "Comprehensive specialization covering data analytics tools, R, SQL, and Tableau.",
      links: [
        { name: "View Specialization", url: "https://www.coursera.org/account/accomplishments/specialization/LTC2VE3IVH3Y" }
      ]
    },
    {
      title: "Programming Languages",
      issuer: "GUVI & Coursera",
      desc: "Core credentials in algorithms and language structures.",
      links: [
        { name: "C Programming", url: "https://www.guvi.in/share-certificate/71s3q837n78Z87Pi5b" },
        { name: "Python Programming", url: "https://www.coursera.org/account/accomplishments/certificate/2QNUATCNRTCA" },
        { name: "Python Data Structures", url: "https://www.coursera.org/account/accomplishments/certificate/9DUPXHYDWSR4" }
      ]
    },
    {
      title: "Web Development",
      issuer: "Acmegrade & Coursera",
      desc: "Full-stack credentials covering both client-side design and servers.",
      links: [
        { name: "Web Development Complete", url: "/assets/acmegrade.jpg" },
        { name: "Back-End Development", url: "https://www.coursera.org/account/accomplishments/records/VU9KN8TTQ8AE" },
        { name: "Front-End Development", url: "https://www.coursera.org/account/accomplishments/records/XSRYN97YHTEK" },
        { name: "Node.js", url: "https://www.guvi.in/share-certificate/76A48c4Gpv71a37JT8" }
      ]
    },
    {
      title: "Mobile & Game Dev",
      issuer: "GUVI & University of Colorado",
      desc: "Cross-platform application and game script mechanics.",
      links: [
        { name: "Flutter Development", url: "https://www.guvi.in/share-certificate/yl5i7Y17g6Tn562p37" },
        { name: "Programming for Games", url: "/assets/pfg.pdf" }
      ]
    },
    {
      title: "Data Analytics & Pandas",
      issuer: "GUVI & MedTourEasy",
      desc: "Specialized analysis in Python Pandas and healthcare modeling.",
      links: [
        { name: "Data Analytics Using Pandas", url: "https://www.guvi.in/share-certificate/8uX80S13L350713793" },
        { name: "Python – Basics", url: "/assets/wts.pdf" }
      ]
    },
    {
      title: "IT Fundamentals",
      issuer: "Google / Coursera",
      desc: "Fundamentals of networking protocols and infrastructure support.",
      links: [
        { name: "Computer Networking", url: "https://www.coursera.org/account/accomplishments/certificate/FYMCNBTAEUM2" },
        { name: "Technical Support Fundamentals", url: "https://www.coursera.org/account/accomplishments/certificate/Z3GWHWK3XFVP" }
      ]
    }
  ];

  return (
    <section id="certificates" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
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
            Certifications
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-sky-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl backdrop-blur-md bg-white/30 dark:bg-slate-900/35 border border-white/20 dark:border-slate-800/40 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-sky-50 dark:bg-sky-950/30 text-sky-600 dark:text-sky-400">
                    <Award size={24} />
                  </div>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{cert.issuer}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{cert.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{cert.desc}</p>
              </div>

              {/* Sub-links */}
              <div className="space-y-2.5 mt-auto pt-4 border-t border-slate-200/50 dark:border-slate-800/50">
                {cert.links.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group p-2 rounded-lg hover:bg-white dark:hover:bg-slate-900 border border-transparent hover:border-slate-200/50 dark:hover:border-slate-800/50 transition-all text-sm font-semibold text-slate-700 hover:text-sky-600 dark:text-slate-200 dark:hover:text-sky-400"
                  >
                    <span className="flex items-center gap-2">
                      <ChevronRight size={14} className="text-slate-400 dark:text-slate-500 group-hover:translate-x-0.5 transition-transform" />
                      {link.name}
                    </span>
                    <ExternalLink size={14} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
