
"use client";

import { motion } from "motion/react";
import { ArrowUpRight, GitBranch } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Rental Property Platform",
    description:
      "A web application designed to help users explore rental properties and discover suitable places to stay.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    number: "02",
    title: "To-Do Application",
    description:
      "A simple task management application that allows users to organize tasks and manage their daily activities.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-white/5 py-28">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
            My work
          </p>

          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Featured <span className="text-violet-400">Projects.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-zinc-400">
            A selection of projects I've worked on while learning and
            exploring software development.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-violet-400/40"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-violet-400">
                  PROJECT {project.number}
                </span>
                <ArrowUpRight
                  className="text-zinc-500 transition group-hover:text-violet-400"
                />
              </div>

              <h3 className="mt-10 text-2xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-4 min-h-20 leading-7 text-zinc-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex gap-5">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-sm text-zinc-300 transition hover:text-violet-400"
                >
                  <GitBranch size={17} />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  className="flex items-center gap-2 text-sm text-zinc-300 transition hover:text-violet-400"
                >
                  Live Demo
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
