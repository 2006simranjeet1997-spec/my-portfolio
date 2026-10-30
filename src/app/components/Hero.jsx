
"use client";

import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[130px]" />

      <div className="container-custom py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Computer Science Student · Class of 2028
          </div>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">
            Building digital
            <br />
            experiences with
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-purple-200 bg-clip-text text-transparent">
              purpose & creativity.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            I'm Simran, an aspiring software engineer passionate about
            web development, problem-solving, and creating meaningful
            digital experiences through technology.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-full bg-violet-500 px-7 py-3.5 font-medium text-white transition hover:bg-violet-400"
            >
              View Projects
              <ArrowUpRight size={18} />
            </a>

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-medium text-white transition hover:border-violet-400 hover:text-violet-300"
            >
              Download CV
              <Download size={18} />
            </a>
          </div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20 inline-flex items-center gap-3 text-sm text-zinc-500 transition hover:text-violet-300"
        >
          Scroll to explore
          <ArrowDown size={16} />
        </motion.a>
      </div>
    </section>
  );
}
