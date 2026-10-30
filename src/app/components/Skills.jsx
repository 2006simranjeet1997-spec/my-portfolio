
"use client";

import { motion } from "motion/react";
import { Code2, Monitor, Database, Wrench } from "lucide-react";

const skillGroups = [
  {
    icon: Code2,
    title: "Programming Languages",
    skills: ["Java", "JavaScript", "Python"],
  },
  {
    icon: Monitor,
    title: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    icon: Database,
    title: "Backend & Database",
    skills: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    icon: Wrench,
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/5 py-28">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
            What I work with
          </p>

          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Technical <span className="text-violet-400">Skills.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-zinc-400">
            Technologies and tools I'm learning and using to build my
            development skills.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.5 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-violet-400/40"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-xl bg-violet-500/10 p-3 text-violet-400">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
