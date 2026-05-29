"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, Send } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "karthikeyanofficial24@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300"
          >
            Get In Touch
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-sky-500 mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-200/50 dark:border-slate-800/50 shadow-md">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            {/* Left side info */}
            <div className="md:col-span-2 space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Let's talk about your next project!</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Whether you want to build an AI agent workflow, cloud application, database-driven backend, or multiplayer game logic, I am ready to collaborate.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-sky-50 dark:bg-sky-950/30 text-sky-600 dark:text-sky-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 dark:text-slate-500 font-semibold">Email Address</p>
                    <a href={`mailto:${email}`} className="text-sm font-bold text-slate-750 dark:text-slate-300 hover:text-sky-500 transition-colors">
                      {email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct copy */}
              <button
                onClick={handleCopy}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-bold text-slate-700 dark:text-slate-300 transition-all"
              >
                {copied ? (
                  <>
                    <Check size={16} className="text-emerald-500" />
                    Copied Email!
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    Copy Email Address
                  </>
                )}
              </button>
            </div>

            {/* Right side static friendly visual links */}
            <div className="md:col-span-3 space-y-4">
              <div className="p-6 rounded-2xl bg-slate-50/50 dark:bg-slate-950/40 border border-slate-200/50 dark:border-slate-800/50 flex items-center justify-between group">
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white">Professional Profile</h4>
                  <p className="text-xs text-slate-500">Connect and message on LinkedIn</p>
                </div>
                <a
                  href="https://linkedin.com/in/karthikeyan-surendran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-650 hover:text-sky-500 hover:border-sky-500 dark:text-slate-400 dark:hover:text-sky-400 dark:hover:border-sky-500 transition-all flex items-center justify-center group-hover:scale-105 w-11 h-11"
                >
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50/50 dark:bg-slate-950/40 border border-slate-200/50 dark:border-slate-800/50 flex items-center justify-between group">
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white">Source Repositories</h4>
                  <p className="text-xs text-slate-500">Explore open source codes &amp; projects</p>
                </div>
                <a
                  href="https://github.com/karthigenius"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-650 hover:text-sky-500 hover:border-sky-500 dark:text-slate-400 dark:hover:text-sky-400 dark:hover:border-sky-500 transition-all flex items-center justify-center group-hover:scale-105 w-11 h-11"
                >
                  <i className="fab fa-github text-xl"></i>
                </a>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50/50 dark:bg-slate-950/40 border border-slate-200/50 dark:border-slate-800/50 flex items-center justify-between group">
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white">Direct Message</h4>
                  <p className="text-xs text-slate-500">Send an instant email from your mail client</p>
                </div>
                <a
                  href={`mailto:${email}`}
                  className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-650 hover:text-sky-500 hover:border-sky-500 dark:text-slate-400 dark:hover:text-sky-400 dark:hover:border-sky-500 transition-all flex items-center justify-center group-hover:scale-105"
                >
                  <Send size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-900 text-center text-xs text-slate-400 dark:text-slate-500">
          <p>© 2026 Karthikeyan Surendran. All rights reserved.</p>
          <p className="mt-2">Built with Next.js, React, Tailwind CSS and Framer Motion.</p>
        </div>
      </div>
    </section>
  );
}
