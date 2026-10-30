
"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { GitBranch, ExternalLink, Star } from "lucide-react";

export default function GitHubProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch(
          "https://api.github.com/users/2006simranjeet1997-spec/repos?sort=updated&per_page=100"
        );

        if (!response.ok) {
          throw new Error("Unable to fetch GitHub repositories.");
        }

        const data = await response.json();

        const filteredProjects = data
          .filter((repo) => !repo.fork)
          .sort(
            (first, second) =>
              new Date(second.updated_at) - new Date(first.updated_at)
          );

        setProjects(filteredProjects);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return (
    <section className="border-t border-white/5 py-28">
      <div className="container-custom">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
          Open source & development
        </p>

        <h2 className="text-4xl font-bold text-white sm:text-5xl">
          GitHub <span className="text-violet-400">Projects.</span>
        </h2>

        <p className="mt-5 max-w-2xl leading-8 text-zinc-400">
          Explore my latest repositories and development work.
        </p>

        {loading && (
          <p className="mt-10 text-zinc-400">
            Loading repositories...
          </p>
        )}

        {error && (
          <p className="mt-10 text-red-400">
            {error}
          </p>
        )}

        {!loading && !error && projects.length === 0 && (
          <p className="mt-10 text-zinc-400">
            No public repositories found yet.
          </p>
        )}

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-violet-400/40"
            >
              <div className="flex items-center justify-between">
                <GitBranch className="text-violet-400" size={23} />
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.name} on GitHub`}
                  className="text-zinc-400 transition hover:text-violet-400"
                >
                  <ExternalLink size={19} />
                </a>
              </div>

              <h3 className="mt-7 break-words text-xl font-semibold text-white">
                {project.name}
              </h3>

              <p className="mt-3 min-h-14 break-words text-sm leading-7 text-zinc-400">
                {project.description || "No description added yet."}
              </p>

              <div className="mt-6 flex items-center justify-between gap-3 text-sm text-zinc-400">
                <span>{project.language || "Not specified"}</span>

                <span className="flex items-center gap-1">
                  <Star size={15} />
                  {project.stargazers_count}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <a
          href="https://github.com/2006simranjeet1997-spec"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm text-white transition hover:border-violet-400 hover:text-violet-300"
        >
          View GitHub Profile
          <ExternalLink size={16} />
        </a>
      </div>
    </section>
  );
}
