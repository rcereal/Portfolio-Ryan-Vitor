"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layout, Settings } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="w-6 h-6 text-indigo-400" />,
    techs: ["React", "Next.js", "Tailwind CSS", "HTML5/CSS3", "Flet"],
  },
  {
    category: "Backend",
    icon: <Code2 className="w-6 h-6 text-purple-400" />,
    techs: ["Python", "Django", "Node.js", "NestJS", "REST API"],
  },
  {
    category: "Database",
    icon: <Database className="w-6 h-6 text-emerald-400" />,
    techs: ["MySQL", "PostgreSQL", "SQLite", "Modelagem de Dados"],
  },
  {
    category: "DevOps & Tools",
    icon: <Settings className="w-6 h-6 text-orange-400" />,
    techs: ["Git/GitHub", "VS Code"],
  },
];

export default function TechStack() {
  return (
    <section className="py-20 bg-[#030712] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Arsenal Tecnológico
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ferramentas modernas que utilizo para construir soluções
            performáticas e escaláveis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group"
            >
              <div className="mb-4 bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-200">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 hover:text-white hover:border-indigo-500/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
