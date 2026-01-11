"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center bg-[#030712] text-white overflow-hidden px-4 pt-16"
    >
      {/* Efeito de Fundo (Glow) */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="z-10 text-center max-w-4xl">
        {/* Badge de Disponibilidade */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Disponível para novos projetos
        </motion.div>

        {/* Título Principal */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Olá, sou{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            Ryan Vitor
          </span>
          .
        </motion.h1>

        {/* Subtítulo (Texto da Fase 2) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Desenvolvedor Full Stack apaixonado por transformar problemas
          complexos em interfaces intuitivas. Especialista em{" "}
          <strong className="text-gray-200">Python (Django)</strong> e{" "}
          <strong className="text-gray-200">React</strong>.
        </motion.p>

        {/* Botões de Ação */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="#projetos"
            className="group bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition flex items-center gap-2"
          >
            Ver Projetos
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>

          <div className="flex gap-4">
            <SocialBtn
              href="https://github.com/rcereal"
              icon={<Github size={20} />}
            />
            <SocialBtn
              href="https://linkedin.com/in/ryan-vitor-09524a246"
              icon={<Linkedin size={20} />}
            />
            {/* Se tiver o PDF do currículo, descomente a linha abaixo */}
            {/* <SocialBtn href="/curriculo.pdf" icon={<FileText size={20} />} label="CV" /> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Componente auxiliar para botões sociais
function SocialBtn({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition text-gray-300 hover:text-white flex items-center gap-2"
    >
      {icon}
      {label && <span className="text-sm font-medium">{label}</span>}
    </a>
  );
}
