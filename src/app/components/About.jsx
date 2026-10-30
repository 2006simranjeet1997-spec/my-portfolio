
"use client";

import { motion } from "motion/react";
import { Code2, GraduationCap, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Learning to build responsive and user-friendly web applications.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Strengthening my programming fundamentals and DSA skills.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description: "Pursuing a B.Tech in Computer Science, graduating in 2028.",
  },
];

export default function About() {
  return (
    <section id="about" className="border-t border-white/5 py-28">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
            Get to know me
          </p>

          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            About <span className="text-violet-400">Me.</span>
          </h2>

          <div className="mt-10 grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-lg leading-9 text-zinc-300">
                I'm a Computer Science student with a growing interest in
                software development and technology. I enjoy turning ideas
                into practical digital experiences and learning how things
                work behind the scenes.
              </p>

              <p className="mt-5 leading-8 text-zinc-400">
                Currently, I'm building my foundation in web development,
                JavaScript, and data structures and algorithms. My goal is
                to become a skilled software engineer who creates useful,
                thoughtful, and impactful solutions.
              </p>
            </div>

            <div className="grid gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                    className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-violet-400/40"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                      <Icon size={23} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-zinc-400">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
