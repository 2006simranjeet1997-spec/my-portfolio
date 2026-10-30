
"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#09090b]/80 backdrop-blur-xl"
    >
      <div className="container-custom flex h-20 items-center justify-between">

        <a
          href="#home"
          className="text-2xl font-bold tracking-tight text-white"
        >
          Simran<span className="text-violet-400">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors duration-300 hover:text-violet-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="flex items-center gap-2 rounded-full bg-violet-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-violet-400 hover:shadow-lg hover:shadow-violet-500/20"
        >
          <Mail size={16} />
          Let's Connect
        </a>

      </div>
    </motion.nav>
  );
}
